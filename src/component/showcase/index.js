import { state } from '../state';
import { theme } from '../theme';

import * as form from '../form';

import { Button } from '../button';
import { Collapse } from '../collapse';
import { PresetThemeTile } from '../presetThemeTile';
import { AccentPresetButton } from '../accentPresetButton';
import { Alert } from '../alert';
import { Link } from '../link';
import { Dropdown } from '../dropdown';
import { ShadeBar } from '../shadeBar';

import { Control_helperText } from '../control/helperText';
import { Control_radio } from '../control/radio';
import { Control_checkbox } from '../control/checkbox';
import { Control_slider } from '../control/slider';
import { Control_sliderSlim } from '../control/sliderSlim';
import { Control_sliderDouble } from '../control/sliderDouble';
import { Control_colorMixer } from '../control/colorMixer';
import { Control_textReset } from '../control/textReset';
import { Control_textarea } from '../control/textarea';
import { Control_inputButton } from '../control/inputButton';
import { Control_radioGrid } from '../control/radioGrid';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';
import { applyCSSVar } from '../../utility/applyCSSVar';
import { applyCSSClass } from '../../utility/applyCSSClass';
import { applyCSSState } from '../../utility/applyCSSState';
import { trimString } from '../../utility/trimString';
import { isValidString } from '../../utility/isValidString';

import './index.css';

const showcase = {};

showcase.element = {
  showcase: node('div|class:showcase')
};

showcase.state = {
  input: {
    radio: { a: '1', b: '1', c: '1', d: '1', e: '1', grid3x3: '1', grid3x1: '1', grid1x3: '1' },
    checkbox: { a: true, b: true, c: false }
  }
};

showcase.control = {
  side: {},
  input: {},
  dropdown: {},
  button: {},
  bookmark: {},
  icon: {},
};

showcase.area = {};

showcase.area.render = () => {

  showcase.area.assemble();

  const body = document.querySelector('body');

  body.appendChild(showcase.element.showcase);

};

showcase.area.assemble = () => {

  showcase.control.side = {
    shade: new ShadeBar(),
    style: new Control_radio({
      object: state.get.current(),
      inputButton: true,
      inputHide: true,
      inputButtonStyle: ['line'],
      radioGroup: [
        { id: 'theme-style-dark', labelText: 'Dark', value: 'dark' },
        { id: 'theme-style-light', labelText: 'Light', value: 'light' },
        { id: 'theme-style-system', labelText: 'Auto', value: 'system' }
      ],
      groupName: 'theme-style',
      path: 'theme.style',
      action: () => {
        theme.style.initial();
        applyCSSClass('theme.style');
      }
    }),
    h: new Control_sliderSlim({
      object: state.get.current(),
      path: 'theme.color.range.primary.h',
      id: 'theme-color-range-primary-h',
      labelText: 'Hue',
      value: state.get.current().theme.color.range.primary.h,
      defaultValue: state.get.default().theme.color.range.primary.h,
      min: state.get.minMax().theme.color.range.primary.h.min,
      max: state.get.minMax().theme.color.range.primary.h.max,
      style: 'hue',
      action: () => {
        theme.color.render();
      }
    }),
    s: new Control_sliderSlim({
      object: state.get.current(),
      path: 'theme.color.range.primary.s',
      id: 'theme-color-range-primary-s',
      labelText: 'Saturation',
      value: state.get.current().theme.color.range.primary.s,
      defaultValue: state.get.default().theme.color.range.primary.s,
      min: state.get.minMax().theme.color.range.primary.s.min,
      max: state.get.minMax().theme.color.range.primary.s.max,
      style: 'saturation',
      action: () => {
        theme.color.render();
      }
    }),
    contrast: new Control_sliderDouble({
      object: state.get.current(),
      labelText: 'Contrast range',
      style: 'contrast',
      left: {
        path: 'theme.color.contrast.start',
        id: 'theme-color-contrast-start',
        labelText: 'Contrast start',
        value: state.get.current().theme.color.contrast.start,
        defaultValue: state.get.default().theme.color.contrast.start,
        min: state.get.minMax().theme.color.contrast.start.min,
        max: state.get.minMax().theme.color.contrast.start.max,
        action: () => {
          theme.color.render();
        }
      },
      right: {
        path: 'theme.color.contrast.end',
        id: 'theme-color-contrast-end',
        labelText: 'Contrast end',
        value: state.get.current().theme.color.contrast.end,
        defaultValue: state.get.default().theme.color.contrast.end,
        min: state.get.minMax().theme.color.contrast.end.min,
        max: state.get.minMax().theme.color.contrast.end.max,
        action: () => {
          theme.color.render();
        }
      }
    }),
    accent: new Control_colorMixer({
      object: state.get.current(),
      path: 'theme.accent',
      id: 'theme-accent',
      labelText: 'Accent colour',
      defaultValue: state.get.default().theme.accent.rgb,
      minMaxObject: state.get.minMax(),
      randomColor: true,
      action: () => {
        applyCSSVar([
          'theme.accent.rgb.r',
          'theme.accent.rgb.g',
          'theme.accent.rgb.b',
          'theme.accent.hsl.h',
          'theme.accent.hsl.s',
          'theme.accent.hsl.l'
        ]);
      }
    }),
    shadow: new Control_sliderSlim({
      object: state.get.current(),
      path: 'theme.shadow',
      id: 'theme-shadow',
      labelText: 'Shadow',
      value: state.get.current().theme.shadow,
      defaultValue: state.get.default().theme.shadow,
      min: state.get.minMax().theme.shadow.min,
      max: state.get.minMax().theme.shadow.max,
      action: () => {
        applyCSSVar('theme.shadow');
      }
    }),
    radius: new Control_sliderSlim({
      object: state.get.current(),
      path: 'theme.radius',
      id: 'theme-radius',
      labelText: 'Radius',
      value: state.get.current().theme.radius,
      defaultValue: state.get.default().theme.radius,
      min: state.get.minMax().theme.radius.min,
      max: state.get.minMax().theme.radius.max,
      action: () => {
        applyCSSVar('theme.radius');
      }
    }),
  };

  showcase.control.input.radio = {
    a: new Control_radio({
      object: showcase.state,
      radioGroup: [
        { id: 'input-radio-a-1', labelText: 'Radio A 1', description: 'Description for radio A 1.', value: '1' },
        { id: 'input-radio-a-2', labelText: 'Radio A 2', description: 'Description for radio A 2.', value: '2' },
        { id: 'input-radio-a-3', labelText: 'Radio A 3', description: 'Description for radio A 3.', value: '3' }
      ],
      label: 'Radio group A',
      groupName: 'input-radio-a',
      path: 'input.radio.a',
      action: () => { console.log(showcase.state); }
    }),
    b: new Control_radio({
      object: showcase.state,
      radioGroup: [
        { id: 'input-radio-b-1', labelText: 'B 1', value: '1' },
        { id: 'input-radio-b-2', labelText: 'B 2', value: '2' },
        { id: 'input-radio-b-3', labelText: 'B 3', value: '3' }
      ],
      label: 'Radio group B',
      groupName: 'input-radio-b',
      path: 'input.radio.b',
      action: () => { console.log(showcase.state); }
    }),
    c: new Control_radio({
      object: showcase.state,
      radioGroup: [
        { id: 'input-radio-c-1', labelText: 'C 1', value: '1' },
        { id: 'input-radio-c-2', labelText: 'C 2', value: '2' },
        { id: 'input-radio-c-3', labelText: 'C 3', value: '3' }
      ],
      label: 'Radio group',
      groupName: 'input-radio-c',
      path: 'input.radio.c',
      inputButton: true,
      action: () => { console.log(showcase.state); }
    }),
    d: new Control_radio({
      object: showcase.state,
      radioGroup: [
        { id: 'input-radio-d-1', labelText: 'D 1', value: '1' },
        { id: 'input-radio-d-2', labelText: 'D 2', value: '2' },
        { id: 'input-radio-d-3', labelText: 'D 3', value: '3' }
      ],
      label: 'Radio group',
      groupName: 'input-radio-d',
      path: 'input.radio.d',
      inputButton: true,
      inputButtonStyle: ['line'],
      action: () => { console.log(showcase.state); }
    }),
    e: new Control_radio({
      object: showcase.state,
      radioGroup: [
        { id: 'input-radio-e-1', labelText: 'E 1', value: '1' },
        { id: 'input-radio-e-2', labelText: 'E 2', value: '2' },
        { id: 'input-radio-e-3', labelText: 'E 3', value: '3' }
      ],
      label: 'Radio group',
      groupName: 'input-radio-e',
      path: 'input.radio.e',
      inputButton: true,
      inputHide: true,
      inputButtonStyle: ['ring'],
      action: () => { console.log(showcase.state); }
    }),
    grid3x3: new Control_radioGrid({
      object: showcase.state,
      radioGroup: [
        { id: 'input-radio-grid3x3-1', labelText: '1', value: '1', position: 1 },
        { id: 'input-radio-grid3x3-2', labelText: '2', value: '2', position: 2 },
        { id: 'input-radio-grid3x3-3', labelText: '3', value: '3', position: 3 },
        { id: 'input-radio-grid3x3-4', labelText: '4', value: '4', position: 4 },
        { id: 'input-radio-grid3x3-5', labelText: '5', value: '5', position: 5 },
        { id: 'input-radio-grid3x3-6', labelText: '6', value: '6', position: 6 },
        { id: 'input-radio-grid3x3-7', labelText: '7', value: '7', position: 7 },
        { id: 'input-radio-grid3x3-8', labelText: '8', value: '8', position: 8 },
        { id: 'input-radio-grid3x3-9', labelText: '9', value: '9', position: 9 }
      ],
      label: 'Radio group grid 3x3',
      groupName: 'input-radio-grid3x3',
      path: 'input.radio.grid3x3',
      gridSize: '3x3',
      action: () => { console.log(showcase.state); }
    }),
    grid3x1: new Control_radioGrid({
      object: showcase.state,
      radioGroup: [
        { id: 'input-radio-grid3x1-1', labelText: '1', value: '1', position: 1 },
        { id: 'input-radio-grid3x1-2', labelText: '2', value: '2', position: 2 },
        { id: 'input-radio-grid3x1-3', labelText: '3', value: '3', position: 3 }
      ],
      label: 'Radio group grid 3x1',
      groupName: 'input-radio-grid3x1',
      path: 'input.radio.grid3x1',
      gridSize: '3x1',
      action: () => { console.log(showcase.state); }
    }),
    grid1x3: new Control_radioGrid({
      object: showcase.state,
      radioGroup: [
        { id: 'input-radio-grid1x3-1', labelText: '1', value: '1', position: 1 },
        { id: 'input-radio-grid1x3-2', labelText: '2', value: '2', position: 2 },
        { id: 'input-radio-grid1x3-3', labelText: '3', value: '3', position: 3 }
      ],
      label: 'Radio group grid 1x3',
      groupName: 'input-radio-grid1x3',
      path: 'input.radio.grid1x3',
      gridSize: '1x3',
      action: () => { console.log(showcase.state); }
    }),
  };

  showcase.control.input.checkbox = {
    a: new Control_checkbox({
      object: showcase.state,
      id: 'input-checkbox-a',
      path: 'input.checkbox.a',
      labelText: 'Checkbox A',
      description: 'Description for checkbox A.',
      action: () => { console.log(showcase.state); }
    }),
    b: new Control_checkbox({
      object: showcase.state,
      id: 'input-checkbox-b',
      path: 'input.checkbox.b',
      labelText: 'Checkbox B',
      description: 'Description for checkbox B.',
      action: () => { console.log(showcase.state); }
    }),
    c: new Control_checkbox({
      object: showcase.state,
      id: 'input-checkbox-c',
      path: 'input.checkbox.c',
      labelText: 'Checkbox C',
      description: 'Description for checkbox C.',
      action: () => { console.log(showcase.state); }
    }),
  };

  showcase.control.button = {
    a: new Button({ text: 'Button' }).wrap(),
    b: new Button({ text: 'Button line', style: ['line'] }).wrap(),
    c: new Button({ text: 'Button ring', style: ['ring'] }).wrap(),
    d: new Button({ text: 'Button small', style: ['line'], size: 'small' }).wrap(),
    e: new Button({ text: 'Button medium', style: ['line'] }).wrap(),
    f: new Button({ text: 'Button large', style: ['line'], size: 'large' }).wrap(),
  };

  showcase.control.input.dropdown = new Dropdown({
    text: 'Dropdown',
    buttonStyle: ['line'],
    iconName: 'add',
    persist: true,
    menuItem: [
      { text: 'One', iconName: 'addGroup' },
      { text: 'Two', iconName: 'addBookmark' }
    ]
  });

  showcase.element.showcase.appendChild(
    node('div|class:showcase-side', [
      showcase.control.side.shade.shadeBar(),
      showcase.control.side.style.inputButton(),
      node('hr'),
      showcase.control.side.h.wrap(),
      showcase.control.side.s.wrap(),
      showcase.control.side.contrast.wrap(),
      node('hr'),
      showcase.control.side.accent.wrap(),
      showcase.control.side.shadow.wrap(),
      showcase.control.side.radius.wrap(),
    ])
  );

  showcase.element.showcase.appendChild(
    node('div|class:showcase-content', [
      showcase.control.input.radio.a.inline(),
      node('hr'),
      form.wrap({
        children: [
          form.inline({
            gap: 'large',
            children: [
              showcase.control.input.checkbox.a.wrap(),
              showcase.control.input.checkbox.b.wrap(),
              showcase.control.input.checkbox.c.wrap(),
            ]
          }),
        ]
      }),
      node('hr'),
      showcase.control.input.radio.b.inline(),
      showcase.control.input.radio.c.inputButton(),
      showcase.control.input.radio.d.inputButton(),
      showcase.control.input.radio.e.inputButton(),
      node('hr'),
      form.wrap({
        children: [
          form.inline({
            align: 'top',
            children: [
              showcase.control.input.radio.grid3x3.wrap(),
              showcase.control.input.radio.grid3x1.wrap(),
              showcase.control.input.radio.grid1x3.wrap(),
            ]
          }),
        ]
      }),
      node('hr'),
      form.inline({
        children: [
          showcase.control.button.a,
          showcase.control.button.b,
          showcase.control.button.c,
        ]
      }),
      form.inline({
        children: [
          showcase.control.button.d,
          showcase.control.button.e,
          showcase.control.button.f,
        ]
      }),
      node('hr'),
      showcase.control.input.dropdown.toggle,
    ])
  );

};

showcase.area.clear = () => {

  clearChildNode(showcase.element.showcase);

};

export { showcase };