import * as form from '../form';

import { Button } from '../button';

import { Control_helperText } from '../control/helperText';
import { Control_inputButton } from '../control/inputButton';
import { Control_groupText } from '../control/groupText';
import { Control_radio } from '../control/radio';
import { Control_radioGrid } from '../control/radioGrid';
import { Control_checkbox } from '../control/checkbox';
import { Control_slider } from '../control/slider';
import { Control_sliderSlim } from '../control/sliderSlim';
import { Control_colorMixer } from '../control/colorMixer';
import { Control_color } from '../control/color';
import { Control_text } from '../control/text';
import { Control_select } from '../control/select';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';
import { isValidString } from '../../utility/isValidString';
import { trimString } from '../../utility/trimString';
import { ordinalNumber } from '../../utility/ordinalNumber';
import { randomString } from '../../utility/randomString';
import { randomNumber } from '../../utility/randomNumber';

export const CustomThemeForm = function({
  customThemeData = false
} = {}) {

  this.element = {
    form: node('form|class:theme-custom-form'),
    main: node('div|class:theme-custom-form-main'),
    text: new Control_text({
      object: customThemeData.theme,
      path: 'name',
      id: 'name',
      value: customThemeData.theme.name,
      placeholder: 'Example theme',
      labelText: 'Name'
    }),
    randomName: new Button({
      text: 'Random theme name',
      style: ['line'],
      func: () => {
        customThemeData.theme.name = randomString({ adjectivesCount: randomNumber(1, 3) });
        this.element.text.update();
      }
    })
  };

  this.assemble = () => {

    this.element.main.appendChild(this.element.text.wrap());

    this.element.main.appendChild(this.element.randomName.wrap());

    this.element.form.appendChild(this.element.main);

  };

  this.form = () => {

    return this.element.form;

  };

  this.assemble();

};
