import { language } from '../../../language';

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
    inputHide: true,
    labelText: language.current.menu.content.data.restore.file,
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
    text: language.current.menu.content.data.restore.clipboard,
    style: ['line'],
    func: () => {
      data.import.paste({
        feedback: dataSetting.control.restore.feedback,
      });
    }
  });

  dataSetting.control.restore.restoreHelper = new Control_helperText({
    text: language.current.menu.content.data.restore.helper
  });

  dataSetting.control.restore.feedback = form.feedback();

  data.feedback.empty.render(dataSetting.control.restore.feedback);

  dataSetting.control.restore.drop = new DropFile({
    heading: language.current.menu.content.data.restore.drop,
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
    text: language.current.menu.content.data.backup.file,
    style: ['line'],
    func: () => {
      data.export();
    }
  });

  dataSetting.control.backup.copy = new Button({
    text: language.current.menu.content.data.backup.clipboard,
    style: ['line'],
    func: () => {
      navigator.clipboard.writeText(JSON.stringify(data.load()));
    }
  });

  dataSetting.control.backup.exportHelper = new Control_helperText({
    text: language.current.menu.content.data.backup.helper
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
    text: language.current.menu.content.data.clear.all,
    style: ['line'],
    func: () => {
      menu.close();
      data.clear.all.render();
    }
  });

  dataSetting.control.clear.partial = new Button({
    text: language.current.menu.content.data.clear.partial,
    style: ['line'],
    func: () => {
      menu.close();
      data.clear.partial.render();
    }
  });

  dataSetting.control.clear.link = new Link({
    text: language.current.menu.content.data.clear.alert.link,
    href: '#menu-content-item-backup'
  });

  dataSetting.control.clear.alert = new Alert({
    iconName: 'warning',
    children: [
      node(`p:${language.current.menu.content.data.clear.alert.p1}|class:small`),
      node('p|class:small', dataSetting.control.clear.link.link())
    ]
  });

  dataSetting.control.clear.helper = new Control_helperText({
    text: language.current.menu.content.data.clear.helper
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
