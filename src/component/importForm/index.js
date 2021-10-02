
import * as form from '../form';


import { Control_radio } from '../control/radio';
import { Control_checkbox } from '../control/checkbox';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';

export const ImportForm = function ({
  dataToImport = false,
  state = false
} = {}) {

  this.element = {
    form: node('form|class:import-form'),
    description: complexNode({
      tag: 'p',
      text: 'You can restore all or parts of a backup file. The following data will be restored:',
      attr: [{ key: 'class', value: 'mb-5' }]
    })
  };

  this.count = {
    bookmark: () => {

      let count = 0;

      dataToImport.bookmark.forEach((item, i) => { count = count + item.items.length; });

      return count;

    },
  };

  this.control = {
    import: {
      bookmark: {
        include: new Control_checkbox({
          object: state,
          path: 'bookmark.include',
          id: 'bookmark-include',
          labelText: 'Bookmarks',
          description: [`This includes <strong>${this.count.bookmark()} ${this.count.bookmark() > 1 ? 'Bookmarks' : 'Bookmark'}</strong> in <strong>${dataToImport.bookmark.length} ${dataToImport.bookmark.length > 1 ? 'Groups' : 'Group'}.<strong>`, 'Bookmarks will keep any custom Colours, Accents and Borders when imported.'],
          action: () => {
            this.disable();
          }
        }),
        type: new Control_radio({
          object: state,
          radioGroup: [
            { id: 'bookmark-type-restore', labelText: 'Replace existing bookmarks', value: 'restore' },
            { id: 'bookmark-type-append', labelText: 'Add to existing bookmarks', value: 'append' }
          ],
          groupName: 'bookmark-type',
          path: 'bookmark.type'
        })
      },
      theme: {
        include: new Control_checkbox({
          object: state,
          path: 'theme.include',
          id: 'theme-include',
          labelText: 'Theme',
          description: 'This includes the Colour, Accent, Fonts, Background and any saved Custom Themes.'
        })
      },
      setup: {
        include: new Control_checkbox({
          object: state,
          path: 'setup.include',
          id: 'setup-include',
          labelText: 'Settings',
          description: 'This includes Layout size and position, Header area size, Bookmark area size and other user settings.'
        })
      }
    }
  };

  this.disable = () => {

    if (state.bookmark.include) {
      this.control.import.bookmark.type.enable();
    } else {
      this.control.import.bookmark.type.disable();
    }

  };

  this.assemble = () => {

    this.element.form.append(node('div', [
      this.element.description,
      this.control.import.bookmark.include.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              this.control.import.bookmark.type.wrap(),
            ]
          })
        ]
      }),
      node('hr'),
      this.control.import.theme.include.wrap(),
      node('hr'),
      this.control.import.setup.include.wrap()
    ]));

  };

  this.form = () => {

    return this.element.form;

  };

  this.assemble();

};
