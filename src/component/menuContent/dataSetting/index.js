import { message } from '../../message';

import { data } from '../../data';
import { menu } from '../../menu';

import * as form from '../../form';

import { Button } from '../../button';
import { Alert } from '../../alert';
import { DropFile } from '../../dropFile';
import { Link } from '../../link';

import { Control_helperText } from '../../control/helperText';
import { Control_inputButton } from '../../control/inputButton';

import { node } from '../../../utility/node';

const dataSetting = {};

dataSetting.control = {
  restore: {},
  backup: {},
  clear: {}
};

dataSetting.restore = (parent) => {

  dataSetting.control.restore.restoreElement = new Control_inputButton({
    id: 'restore-data',
    type: 'file',
    buttonHideInput: true,
    labelText: message.get('menuContentDataRestoreFile'),
    inputButtonStyle: ['line'],
    action: () => {
      data.import.file({
        fileList: dataSetting.control.restore.restoreElement.input.files,
        feedback: dataSetting.control.restore.feedback,
        input: dataSetting.control.restore.restoreElement
      });
    }
  });

  dataSetting.control.restore.paste = new Button({
    text: message.get('menuContentDataRestoreClipboard'),
    style: ['line'],
    func: () => {
      data.import.paste({
        feedback: dataSetting.control.restore.feedback,
      });
    }
  });

  dataSetting.control.restore.restoreHelper = new Control_helperText({
    text: [message.get('menuContentDataRestoreHelperPara1')]
  });

  dataSetting.control.restore.feedback = form.feedback();

  data.feedback.clear.render(dataSetting.control.restore.feedback);

  data.feedback.empty.render(dataSetting.control.restore.feedback);

  dataSetting.control.restore.drop = new DropFile({
    heading: message.get('menuContentDataRestoreDrop'),
    dropAaction: () => {
      data.import.drop({
        fileList: dataSetting.control.restore.drop.files,
        feedback: dataSetting.control.restore.feedback,
      });
    },
    children: [
      dataSetting.control.restore.restoreElement.button,
      dataSetting.control.restore.paste.button
    ]
  });

  parent.appendChild(
    node('div', [
      dataSetting.control.restore.drop.wrap(),
      form.wrap({
        children: [
          dataSetting.control.restore.feedback
        ]
      }),
      dataSetting.control.restore.restoreHelper.wrap()
    ])
  );

};

dataSetting.backup = (parent) => {

  dataSetting.control.backup.export = new Button({
    text: message.get('menuContentDataBackupFile'),
    style: ['line'],
    func: () => {
      data.export();
    }
  });

  dataSetting.control.backup.copy = new Button({
    text: message.get('menuContentDataBackupClipboard'),
    style: ['line'],
    func: () => {
      navigator.clipboard.writeText(JSON.stringify(data.load()));
    }
  });

  dataSetting.control.backup.exportHelper = new Control_helperText({
    text: [
      message.get('menuContentDataBackupHelperPara1'),
      message.get('menuContentDataBackupHelperPara2')
    ]
  });

  parent.appendChild(
    node('div', [
      form.wrap({
        children: [
          form.inline({
            gap: 'small',
            equalGap: true,
            wrap: true,
            children: [
              dataSetting.control.backup.export.wrap(),
              dataSetting.control.backup.copy.wrap()
            ]
          })
        ]
      }),
      dataSetting.control.backup.exportHelper.wrap()
    ])
  );

};

dataSetting.clear = (parent) => {

  dataSetting.control.clear.all = new Button({
    text: message.get('menuContentDataClearAll'),
    style: ['line'],
    func: () => {
      menu.close();
      data.clear.all.render();
    }
  });

  dataSetting.control.clear.partial = new Button({
    text: message.get('menuContentDataClearPartial'),
    style: ['line'],
    func: () => {
      menu.close();
      data.clear.partial.render();
    }
  });

  dataSetting.control.clear.link = new Link({
    text: message.get('menuContentDataClearAlertLink'),
    href: '#menu-content-item-backup'
  });

  dataSetting.control.clear.alert = new Alert({
    iconName: 'warning',
    children: [
      node(`p:${message.get('menuContentDataClearAlertPara') || 'Text'}|class:small`),
      node('p|class:small', dataSetting.control.clear.link.link())
    ]
  });

  dataSetting.control.clear.helper = new Control_helperText({
    text: [
      message.get('menuContentDataClearHelperPara1'),
      message.get('menuContentDataClearHelperPara2')
    ]
  });

  parent.appendChild(
    node('div', [
      form.wrap({
        children: [
          form.inline({
            gap: 'small',
            equalGap: true,
            wrap: true,
            children: [
              dataSetting.control.clear.all.wrap(),
              dataSetting.control.clear.partial.wrap()
            ]
          })
        ]
      }),
      dataSetting.control.clear.alert.wrap(),
      dataSetting.control.clear.helper.wrap()
    ])
  );

};

export { dataSetting };
