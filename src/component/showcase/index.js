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

import { Control_helperText } from '../control/helperText';
import { Control_radio } from '../control/radio';
import { Control_checkbox } from '../control/checkbox';
import { Control_slider } from '../control/slider';
import { Control_sliderSlim } from '../control/sliderSlim';
import { Control_sliderDouble } from '../control/sliderDouble';
import { Control_colorMixer } from '../control/colorMixer';
import { Control_textReset } from '../control/textReset';
import { Control_textarea } from '../control/textarea';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';
import { applyCSSVar } from '../../utility/applyCSSVar';
import { applyCSSClass } from '../../utility/applyCSSClass';
import { applyCSSState } from '../../utility/applyCSSState';
import { trimString } from '../../utility/trimString';
import { isValidString } from '../../utility/isValidString';

import './index.css';

const showcase = {};

showcase.control = {
  style: {},
  colour: {},
  accent: {},
  radius: {}
};

showcase.element = {
  showcase: node('div|class:showcase')
};

showcase.area = {};

showcase.area.render = () => {

  showcase.area.assemble();

  const body = document.querySelector('body');

  body.appendChild(showcase.element.showcase);

};

showcase.area.assemble = () => {

  showcase.control.style = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'theme-style-dark', labelText: 'Dark mode', value: 'dark' },
      { id: 'theme-style-light', labelText: 'Light mode', value: 'light' },
      { id: 'theme-style-system', labelText: 'Automatic', value: 'system' }
    ],
    groupName: 'theme-style',
    path: 'theme.style',
    action: () => {
      theme.style.initial();
      applyCSSClass('theme.style');
    }
  });

  showcase.control.colour = {
    range: {
      primary: {
        h: new Control_slider({
          object: state.get.current(),
          path: 'theme.color.range.primary.h',
          id: 'theme-color-range-primary-h',
          labelText: 'Primary colour',
          value: state.get.current().theme.color.range.primary.h,
          defaultValue: state.get.default().theme.color.range.primary.h,
          min: state.get.minMax().theme.color.range.primary.h.min,
          max: state.get.minMax().theme.color.range.primary.h.max,
          style: 'hue',
          action: () => {
            theme.color.render();
          }
        }),
        s: new Control_slider({
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
        })
      }
    },
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
    })
  };

  showcase.control.accent = new Control_colorMixer({
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
  });

  showcase.control.radius = new Control_slider({
    object: state.get.current(),
    path: 'theme.radius',
    id: 'theme-radius',
    labelText: 'Corner radius',
    value: state.get.current().theme.radius,
    defaultValue: state.get.default().theme.radius,
    min: state.get.minMax().theme.radius.min,
    max: state.get.minMax().theme.radius.max,
    action: () => {
      applyCSSVar('theme.radius');
    }
  });

  showcase.element.showcase.appendChild(
    node('div|class:showcase-theme', [
      showcase.control.style.inline(),
      showcase.control.colour.range.primary.h.wrap(),
      showcase.control.colour.range.primary.s.wrap(),
      showcase.control.colour.contrast.wrap(),
      showcase.control.accent.wrap(),
      showcase.control.radius.wrap(),
    ])
  );

  showcase.element.showcase.appendChild(
    node('div|class:showcase-button', [
      node('div|class:showcase-button-style', [
        node('div|class:form-inline form-inline-horizontal form-inline-gap-small form-inline-justify-left form-inline-wrap', [
          new Button({ text: 'Button' }).wrap(),
          new Button({ text: 'Button link', style: ['link'] }).wrap(),
          new Button({ text: 'Button line', style: ['line'] }).wrap(),
          new Button({ text: 'Button ring', style: ['ring'] }).wrap(),
        ]),
      ]),
      node('div|class:showcase-button-size', [
        node('div|class:form-inline form-inline-horizontal form-inline-gap-small form-inline-justify-left form-inline-wrap', [
          new Button({ text: 'Button small', style: ['line'], size: 'small' }).wrap(),
          new Button({ text: 'Button medium', style: ['line'] }).wrap(),
          new Button({ text: 'Button large', style: ['line'], size: 'large' }).wrap(),
        ])
      ])
    ])
  );

  showcase.element.showcase.appendChild(
    node('div|class:showcase-form', [
      new Dropdown({
        text: 'Dropdown',
        buttonStyle: ['line'],
        iconName: 'add',
        menuItem: [
          { text: 'One', iconName: 'addGroup' },
          { text: 'Two', iconName: 'addBookmark' }
        ]
      }).toggle
    ])
  );

};

showcase.area.clear = () => {

  clearChildNode(showcase.element.showcase);

};

export { showcase };