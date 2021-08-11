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

const formSetting = {};

formSetting.state = {
  input: {
    radio: { a: 'a', b: 'a', c: 'a', d: 'a', e: 'a', grid3x3: 'a', grid3x1: 'a', grid1x3: 'a' },
    checkbox: { a: true, b: true, c: false }
  }
};

formSetting.control = {
  input: {},
  button: {}
};

formSetting.input = (parent) => {

  formSetting.input.radio = {
    a: new Control_radio({
      object: formSetting.state,
      radioGroup: [
        { id: 'input-radio-a-a', labelText: 'Radio A A', description: 'Description for radio A A.', value: 'a' },
        { id: 'input-radio-a-b', labelText: 'Radio A B', description: 'Description for radio A B.', value: 'b' },
        { id: 'input-radio-a-c', labelText: 'Radio A C', description: 'Description for radio A C.', value: 'c' }
      ],
      label: 'Radio group A',
      groupName: 'input-radio-a',
      path: 'input.radio.a',
      action: () => { console.log(formSetting.state); }
    }),
    b: new Control_radio({
      object: formSetting.state,
      radioGroup: [
        { id: 'input-radio-b-a', labelText: 'B A', value: 'a' },
        { id: 'input-radio-b-b', labelText: 'B B', value: 'b' },
        { id: 'input-radio-b-c', labelText: 'B C', value: 'c' }
      ],
      label: 'Radio group',
      groupName: 'input-radio-b',
      path: 'input.radio.b',
      action: () => { console.log(formSetting.state); }
    }),
    c: new Control_radio({
      object: formSetting.state,
      radioGroup: [
        { id: 'input-radio-c-a', labelText: 'C A', value: 'a' },
        { id: 'input-radio-c-b', labelText: 'C B', value: 'b' },
        { id: 'input-radio-c-c', labelText: 'C C', value: 'c' }
      ],
      label: 'Radio group',
      groupName: 'input-radio-c',
      path: 'input.radio.c',
      inputButton: true,
      action: () => { console.log(formSetting.state); }
    }),
    d: new Control_radio({
      object: formSetting.state,
      radioGroup: [
        { id: 'input-radio-d-a', labelText: 'D A', value: 'a' },
        { id: 'input-radio-d-b', labelText: 'D B', value: 'b' },
        { id: 'input-radio-d-c', labelText: 'D C', value: 'c' }
      ],
      label: 'Radio group',
      groupName: 'input-radio-d',
      path: 'input.radio.d',
      inputButton: true,
      inputButtonStyle: ['line'],
      action: () => { console.log(formSetting.state); }
    }),
    e: new Control_radio({
      object: formSetting.state,
      radioGroup: [
        { id: 'input-radio-e-a', labelText: 'E A', value: 'a' },
        { id: 'input-radio-e-b', labelText: 'E B', value: 'b' },
        { id: 'input-radio-e-c', labelText: 'E C', value: 'c' }
      ],
      label: 'Radio group',
      groupName: 'input-radio-e',
      path: 'input.radio.e',
      inputButton: true,
      inputHide: true,
      inputButtonStyle: ['ring'],
      action: () => { console.log(formSetting.state); }
    }),
    grid3x3: new Control_radioGrid({
      object: formSetting.state,
      radioGroup: [
        { id: 'input-radio-grid3x3-a', labelText: 'A', value: 'a', position: 1 },
        { id: 'input-radio-grid3x3-b', labelText: 'B', value: 'b', position: 2 },
        { id: 'input-radio-grid3x3-c', labelText: 'C', value: 'c', position: 3 },
        { id: 'input-radio-grid3x3-d', labelText: 'D', value: 'd', position: 4 },
        { id: 'input-radio-grid3x3-e', labelText: 'E', value: 'e', position: 5 },
        { id: 'input-radio-grid3x3-f', labelText: 'F', value: 'f', position: 6 },
        { id: 'input-radio-grid3x3-g', labelText: 'G', value: 'g', position: 7 },
        { id: 'input-radio-grid3x3-h', labelText: 'H', value: 'h', position: 8 },
        { id: 'input-radio-grid3x3-i', labelText: 'I', value: 'i', position: 9 }
      ],
      label: 'Radio group grid 3x3',
      groupName: 'input-radio-grid3x3',
      path: 'input.radio.grid3x3',
      gridSize: '3x3',
      action: () => { console.log(formSetting.state); }
    }),
    grid3x1: new Control_radioGrid({
      object: formSetting.state,
      radioGroup: [
        { id: 'input-radio-grid3x1-a', labelText: 'A', value: 'a', position: 1 },
        { id: 'input-radio-grid3x1-b', labelText: 'B', value: 'b', position: 2 },
        { id: 'input-radio-grid3x1-c', labelText: 'C', value: 'c', position: 3 }
      ],
      label: 'Radio group grid 3x1',
      groupName: 'input-radio-grid3x1',
      path: 'input.radio.grid3x1',
      gridSize: '3x1',
      action: () => { console.log(formSetting.state); }
    }),
    grid1x3: new Control_radioGrid({
      object: formSetting.state,
      radioGroup: [
        { id: 'input-radio-grid1x3-a', labelText: 'A', value: 'a', position: 1 },
        { id: 'input-radio-grid1x3-b', labelText: 'B', value: 'b', position: 2 },
        { id: 'input-radio-grid1x3-c', labelText: 'C', value: 'c', position: 3 }
      ],
      label: 'Radio group grid 1x3',
      groupName: 'input-radio-grid1x3',
      path: 'input.radio.grid1x3',
      gridSize: '1x3',
      action: () => { console.log(formSetting.state); }
    })
  };

  formSetting.input.checkbox = {
    a: new Control_checkbox({
      object: formSetting.state,
      id: 'input-checkbox-a',
      path: 'input.checkbox.a',
      labelText: 'Checkbox A',
      action: () => { console.log(formSetting.state); }
    }),
    b: new Control_checkbox({
      object: formSetting.state,
      id: 'input-checkbox-b',
      path: 'input.checkbox.b',
      labelText: 'Checkbox B',
      action: () => { console.log(formSetting.state); }
    }),
    c: new Control_checkbox({
      object: formSetting.state,
      id: 'input-checkbox-c',
      path: 'input.checkbox.c',
      labelText: 'Checkbox C',
      action: () => { console.log(formSetting.state); }
    })
  };

  parent.appendChild(
    node('div', [
      formSetting.input.radio.a.wrap(),
      node('hr'),
      formSetting.input.radio.b.inline(),
      formSetting.input.radio.c.inputButton(),
      formSetting.input.radio.d.inputButton(),
      formSetting.input.radio.e.inputButton(),
      node('hr'),
      formSetting.input.radio.grid3x3.wrap(),
      formSetting.input.radio.grid3x1.wrap(),
      formSetting.input.radio.grid1x3.wrap(),
      node('hr'),
      formSetting.input.checkbox.a.wrap(),
      formSetting.input.checkbox.b.wrap(),
      formSetting.input.checkbox.c.wrap()
    ])
  );

};

formSetting.button = (parent) => {

  formSetting.button = {
    small: new Button({ text: 'Small button', size: 'small' }),
    medium: new Button({ text: 'Medium button', size: 'medium' }),
    large: new Button({ text: 'Large button', size: 'large' }),
    ring: new Button({ text: 'Ring button', size: 'medium', style: ['ring'] }),
    line: new Button({ text: 'Line button', size: 'medium', style: ['line'] }),
    link: new Button({ text: 'Link button', size: 'medium', style: ['link'] })
  };

  parent.appendChild(
    node('div', [
      formSetting.button.small.wrap(),
      formSetting.button.medium.wrap(),
      formSetting.button.large.wrap(),
      formSetting.button.ring.wrap(),
      formSetting.button.line.wrap(),
      formSetting.button.link.wrap(),
    ])
  );

};

export { formSetting }
