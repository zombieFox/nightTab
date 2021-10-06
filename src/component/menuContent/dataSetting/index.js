import { data } from '../../data';
import { menu } from '../../menu';
import { APP_NAME } from '../../../constant';

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
    labelText: 'Import from file',
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
    text: 'Import from clipboard',
    style: ['line'],
    func: () => {
      data.import.paste({
        feedback: dataSetting.control.restore.feedback,
      });
    }
  });

  dataSetting.control.restore.restoreHelper = new Control_helperText({
    text: ['Restore a previously exported ' + APP_NAME + ' backup.']
  });

  dataSetting.control.restore.feedback = form.feedback();

  data.feedback.empty.render(dataSetting.control.restore.feedback);

  dataSetting.control.restore.drop = new DropFile({
    heading: 'Or drop a ' + APP_NAME + ' backup file here.',
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
    text: 'Export data',
    style: ['line'],
    func: () => {
      data.export();
    }
  });

  dataSetting.control.backup.copy = new Button({
    text: 'Copy to clipboard',
    style: ['line'],
    func: () => {
      navigator.clipboard.writeText(JSON.stringify(data.load()));
    }
  });

  dataSetting.control.backup.exportHelper = new Control_helperText({
    text: ['Download a backup of your ' + APP_NAME + ' Bookmarks and Settings.', 'This file can later be imported on this or another deivce.']
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
    text: 'Clear all data',
    style: ['line'],
    func: () => {
      menu.close();
      data.clear.all.render();
    }
  });

  dataSetting.control.clear.partial = new Button({
    text: 'Clear all except bookmarks',
    style: ['line'],
    func: () => {
      menu.close();
      data.clear.partial.render();
    }
  });

  dataSetting.control.clear.alert = new Alert({
    iconName: 'warning',
    children: [
      node('p:You will lose Bookmarks by clearing all data.|class:small'),
      node(`p:Have you ${(new Link({ text: 'backed up your data?', href: '#menu-content-item-backup' })).link().outerHTML}|class:small`)
    ]
  });

  dataSetting.control.clear.helper = new Control_helperText({
    text: ['Clear all data to reset ' + APP_NAME + ' to the default state.', 'Alternatively, it is possible to wipe all settings but keep the current Bookmarks and Groups.']
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
