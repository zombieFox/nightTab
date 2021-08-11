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

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';
import { Edge } from '../../edge';

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

const toolbarSetting = {};

toolbarSetting.control = {
  size: {},
  opacity: {},
  location: {},
  position: {},
  controls: {}
};

toolbarSetting.disable = () => {

  switch (state.get.current().toolbar.location) {

    case 'corner':
      toolbarSetting.control.positionElement.enable();
      toolbarSetting.control.positionElementHelper1.enable();
      toolbarSetting.control.location.newLine.disable();
      break;

    case 'header':
      toolbarSetting.control.positionElement.disable();
      toolbarSetting.control.positionElementHelper1.disable();
      toolbarSetting.control.location.newLine.enable();
      break;

  };

};

toolbarSetting.edge = {
  size: false
};

toolbarSetting.size = (parent) => {

  switch (state.get.current().toolbar.location) {

    case 'header':
      toolbarSetting.edge.size = new Edge({ primary: toolbar.current.element.toolbar, secondary: [header.element.area] });
      break;

    case 'corner':
      toolbarSetting.edge.size = new Edge({ primary: toolbar.current.element.toolbar });
      break;

  };

  toolbarSetting.control.size = new Control_slider({
    object: state.get.current(),
    path: 'toolbar.size',
    id: 'toolbar-size',
    labelText: 'Toolbar size',
    value: state.get.current().toolbar.size,
    defaultValue: state.get.default().toolbar.size,
    min: state.get.minMax().toolbar.size.min,
    max: state.get.minMax().toolbar.size.max,
    action: () => {
      applyCSSVar('toolbar.size');
      data.save();
    },
    sliderAction: () => {
      toolbarSetting.edge.size.track();
    },
    mouseDownAction: () => {
      toolbarSetting.edge.size.show();
    },
    mouseUpAction: () => {
      toolbarSetting.edge.size.hide();
    }
  });

  parent.appendChild(
    node('div', [
      toolbarSetting.control.size.wrap()
    ])
  );
};

toolbarSetting.location = (parent) => {

  toolbarSetting.control.location.locationElement = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'toolbar-location-corner', labelText: 'In a corner', value: 'corner' },
      { id: 'toolbar-location-header', labelText: 'In the Header', value: 'header' }
    ],
    groupName: 'toolbar-location',
    path: 'toolbar.location',
    action: () => {
      toolbar.current.assemble();
      toolbar.current.update.location();
      toolbar.current.update.style();
      header.item.mod.order();
      header.item.clear();
      header.item.clear();
      header.item.render();
      toolbar.bar.render();
      layout.area.assemble();
      toolbarSetting.disable();

      switch (state.get.current().toolbar.location) {

        case 'header':
          toolbarSetting.edge.size = new Edge({ primary: toolbar.current.element.toolbar, secondary: [layout.element.header] });
          break;

        case 'corner':
          toolbarSetting.edge.size = new Edge({ primary: toolbar.current.element.toolbar });
          break;

      };

      data.save();
    }
  });

  toolbarSetting.control.location.locationHelper = new Control_helperText({
    text: ['Position the Toolbar inside the Header or in a corner of the window.']
  });

  toolbarSetting.control.location.newLine = new Control_checkbox({
    object: state.get.current(),
    path: 'toolbar.newLine',
    id: 'header-newLine',
    labelText: 'New line',
    description: 'Force on to a new line and seperate from other Header items.',
    action: function() {
      applyCSSState('toolbar.newLine');
      data.save();
    }
  });

  toolbarSetting.control.location.newLineHelper = new Control_helperText({
    text: ['Only available when the Toolbar is positioned inside the Header.']
  });

  parent.appendChild(
    node('div', [
      toolbarSetting.control.location.locationElement.inline(),
      toolbarSetting.control.location.locationHelper.wrap(),
      node('hr'),
      toolbarSetting.control.location.newLine.wrap(),
      toolbarSetting.control.location.newLineHelper.wrap()
    ])
  );

};

toolbarSetting.position = (parent) => {

  toolbarSetting.control.positionElement = new Control_radioGrid({
    object: state.get.current(),
    radioGroup: [
      { id: 'toolbar-position-top-left', labelText: 'Top left', value: 'top-left', position: 1 },
      { id: 'toolbar-position-top-right', labelText: 'Top right', value: 'top-right', position: 2 },
      { id: 'toolbar-position-bottom-left', labelText: 'Bottom left', value: 'bottom-left', position: 3 },
      { id: 'toolbar-position-bottom-right', labelText: 'Bottom right', value: 'bottom-right', position: 4 }
    ],
    label: 'Toolbar position',
    groupName: 'toolbar-position',
    path: 'toolbar.position',
    gridSize: '2x2',
    action: () => {
      toolbar.current.assemble();
      toolbar.current.update.position();
      toolbar.current.update.style();
      data.save();
    }
  });

  toolbarSetting.control.positionElementHelper1 = new Control_helperText({
    text: ['Position the Toolbar in one of the four corners of the window.']
  });

  toolbarSetting.control.positionElementHelper2 = new Control_helperText({
    text: ['Only available when the Toolbar is positioned in a corner.']
  });

  parent.appendChild(
    node('div', [
      toolbarSetting.control.positionElement.wrap(),
      toolbarSetting.control.positionElementHelper1.wrap(),
      toolbarSetting.control.positionElementHelper2.wrap()
    ])
  );

};

toolbarSetting.controls = (parent) => {

  toolbarSetting.control.controls.accent = new Control_checkbox({
    object: state.get.current(),
    id: 'toolbar-accent-show',
    path: 'toolbar.accent.show',
    labelText: 'Show Accent control',
    action: () => {
      toolbar.current.update.control();
      data.save();
    }
  });

  toolbarSetting.control.controls.add = new Control_checkbox({
    object: state.get.current(),
    id: 'toolbar-add-show',
    path: 'toolbar.add.show',
    labelText: 'Show Add control',
    action: () => {
      toolbar.current.update.control();
      data.save();
    }
  });

  toolbarSetting.control.controls.edit = new Control_checkbox({
    object: state.get.current(),
    id: 'toolbar-edit-show',
    path: 'toolbar.edit.show',
    labelText: 'Show Edit control',
    action: () => {
      toolbar.current.update.control();
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      toolbarSetting.control.controls.accent.wrap(),
      toolbarSetting.control.controls.add.wrap(),
      toolbarSetting.control.controls.edit.wrap()
    ])
  );

};

export { toolbarSetting }
