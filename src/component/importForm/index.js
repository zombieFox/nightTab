import { state } from '../state';
import { data } from '../data';
import { bookmark } from '../bookmark';

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

export const ImportForm = function({
  dataToImport = false,
  state = false
} = {}) {

  this.element = {
    form: node('form|class:import-form'),
    description: node('p:Import all or part of the backup:|class:mb-5')
  };

  this.count = {
    bookmark: () => {

      let count = 0;

      dataToImport.bookmark.forEach((item, i) => { count = count + item.items.length });

      return count;

    },
  };

  this.control = {
    import: {
      setup: new Control_checkbox({
        object: state,
        path: 'setup',
        id: 'setup',
        labelText: 'Settings',
        description: 'This includes Layout size and position, Header setup and other user settings.'
      }),
      bookmark: new Control_checkbox({
        object: state,
        path: 'bookmark',
        id: 'bookmark',
        labelText: 'Bookmarks',
        description: `This includes ${this.count.bookmark()} ${this.count.bookmark() > 1 ? `Bookmarks` : `Bookmark`} in ${dataToImport.bookmark.length} ${dataToImport.bookmark.length > 1 ? `Groups` : `Group`}.`
      }),
      theme: new Control_checkbox({
        object: state,
        path: 'theme',
        id: 'theme',
        labelText: 'Theme',
        description: 'This includes the Colour, Accent, Fonts, Background and any saved Custom Themes.'
      })
    }
  };

  this.disable = () => {};

  this.assemble = () => {

    this.element.form.append(node('div', [
      this.element.description,
      this.control.import.setup.wrap(),
      this.control.import.bookmark.wrap(),
      this.control.import.theme.wrap()
    ]));

  };

  this.form = () => {

    return this.element.form;

  };

  this.assemble();

};
