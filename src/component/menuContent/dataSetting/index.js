import { state } from '../../state';
import { data } from '../../data';
import { header } from '../../header';
import { bookmark } from '../../bookmark';
import { theme } from '../../theme';
import { version } from '../../version';
import { menu } from '../../menu';
import { icon } from '../../icon';
import { logo } from '../../logo';
import { link } from '../../link';
import { layout } from '../../layout';
import { toolbar } from '../../toolbar';
import { appName } from '../../appName';

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';
import { Edge } from '../../edge';
import { Alert } from '../../alert';

import { Control_helperText } from '../../control/helperText';
import { Control_inputButton } from '../../control/inputButton';
import { Control_groupText } from '../../control/groupText';
import { Control_radio } from '../../control/radio';
import { Control_radioGrid } from '../../control/radioGrid';
import { Control_checkbox } from '../../control/checkbox';
import { Control_slider } from '../../control/slider';
import { Control_sliderSlim } from '../../control/sliderSlim';
import { Control_sliderDouble } from '../../control/sliderDouble';
import { Control_colorMixer } from '../../control/colorMixer';
import { Control_color } from '../../control/color';
import { Control_text } from '../../control/text';
import { Control_textReset } from '../../control/textReset';
import { Control_textarea } from '../../control/textarea';

import { node } from '../../../utility/node';
import { complexNode } from '../../../utility/complexNode';
import { applyCSSVar } from '../../../utility/applyCSSVar';
import { applyCSSClass } from '../../../utility/applyCSSClass';
import { applyCSSState } from '../../../utility/applyCSSState';

const dataSetting = {};

dataSetting.control = {
  import: {},
  backup: {},
  clear: {}
};

dataSetting.import = (parent) => {

  const importFeedback = form.feedback();

  data.feedback.empty.render(importFeedback);

  dataSetting.control.import.importElement = new Control_inputButton({
    id: 'import-data',
    type: 'file',
    inputHide: true,
    labelText: 'Import data',
    inputButtonStyle: ['line'],
    action: () => {
      data.import.file(dataSetting.control.import.importElement.input, importFeedback)
    }
  });

  dataSetting.control.import.importHelper = new Control_helperText({
    text: ['Restore a previously exported ' + appName + ' backup.']
  });

  parent.appendChild(
    node('div', [
      dataSetting.control.import.importElement.wrap(),
      dataSetting.control.import.importHelper.wrap(),
      form.wrap({
        children: [
          importFeedback
        ]
      })
    ])
  );

};

dataSetting.backup = (parent) => {

  dataSetting.control.backup.button = new Button({
    text: 'Export data',
    style: ['line'],
    func: () => {
      data.export();
    }
  });

  dataSetting.control.backup.buttonHelper = new Control_helperText({
    text: ['Download a backup of your ' + appName + ' Bookmarks and Settings.', 'This file can later be imported on this or another deivce.']
  });

  parent.appendChild(
    node('div', [
      dataSetting.control.backup.button.wrap(),
      dataSetting.control.backup.buttonHelper.wrap()
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

  dataSetting.control.clear.alert = new Alert({ iconName: 'warning', message: ['You will lose Bookmarks by clearing all data.', 'Have you <a href="#menu-content-item-backup">backed up your data?</a>'] });

  dataSetting.control.clear.helper = new Control_helperText({
    text: ['Wipe all data to restore ' + appName + ' to the default state.', 'Alternatively, it is possible to wipe all settings but keep the current Bookmarks and Groups.']
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

export { dataSetting }
