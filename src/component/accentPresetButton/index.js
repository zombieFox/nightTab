import { state } from '../state';
import { data } from '../data';
import { theme } from '../theme';
import { toolbar } from '../toolbar';
import { themeSetting } from '../menuContent/themeSetting';

import { Button } from '../button';

import { node } from '../../utility/node';
import { convertColor } from '../../utility/convertColor';
import { isValidString } from '../../utility/isValidString';
import { complexNode } from '../../utility/complexNode';
import { applyCSSVar } from '../../utility/applyCSSVar';
import { applyCSSClass } from '../../utility/applyCSSClass';
import { applyCSSState } from '../../utility/applyCSSState';

import './index.css';

export const AccentPresetButton = function({ presetData = false } = {}) {

  this.name = () => {

    let fullName = presetData.name;

    if (presetData.prefix) {
      fullName = presetData.prefix + ' ' + presetData.name.toLowerCase();
    };

    return fullName;

  };

  this.element = {
    button: new Button({
      text: this.name(),
      title: this.name(),
      srOnly: true,
      classList: ['theme-accent-preset-button', 'theme-accent-preset-type-' + presetData.type],
      func: () => {

        state.get.current().theme.accent.rgb = convertColor.hsl.rgb(presetData.hsl);

        state.get.current().theme.accent.hsl = presetData.hsl;

        applyCSSVar([
          'theme.accent.rgb.r',
          'theme.accent.rgb.g',
          'theme.accent.rgb.b',
          'theme.accent.hsl.h',
          'theme.accent.hsl.s',
          'theme.accent.hsl.l'
        ]);

        toolbar.current.update.style();

        toolbar.current.update.accent();

        themeSetting.control.accent.color.update();

        data.save();

      }
    }),
    preview: node('span|class:theme-accent-preset-preview')
  };

  this.previewTile = () => {

    this.element.preview.style.setProperty('--theme-accent-preset-color-hsl-h', presetData.hsl.h);

    this.element.preview.style.setProperty('--theme-accent-preset-color-hsl-s', presetData.hsl.s);

    this.element.preview.style.setProperty('--theme-accent-preset-color-hsl-l', presetData.hsl.l);

  };

  this.assemble = () => {

    this.previewTile();

    this.element.button.button.appendChild(this.element.preview);

  };

  this.button = () => {

    return this.element.button.button;

  };

  this.assemble();

};
