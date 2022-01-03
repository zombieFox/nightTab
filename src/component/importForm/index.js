import { message } from '../message';

import * as form from '../form';

import { Control_radio } from '../control/radio';
import { Control_checkbox } from '../control/checkbox';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';

import './index.css';

export const ImportForm = function({
  dataToImport = false,
  state = false
} = {}) {

  this.element = {
    form: node('form|class:import-form'),
    description: node('div|class:import-form-description', [
      complexNode({
        tag: 'p',
        text: message('dataFormDescription')
      })
    ])
  };

  this.count = {
    bookmark: () => {

      let count = 0;

      dataToImport.bookmark.forEach((item) => { count = count + item.items.length; });

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
          labelText: message('dataFormBookmarkIncludeLabel'),
          description: [
            message('dataFormBookmarkIncludeDescriptionPara1'),
            message('dataFormBookmarkIncludeDescriptionPara2')
          ],
          action: () => {
            this.disable();
          }
        }),
        type: new Control_radio({
          object: state,
          radioGroup: [
            { id: 'bookmark-type-restore', labelText: message('dataFormBookmarkTypeRestore'), value: 'restore' },
            { id: 'bookmark-type-append', labelText: message('dataFormBookmarkTypeAppend'), value: 'append' }
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
          labelText: message('dataFormThemeIncludeLabel'),
          description: message('dataFormThemeIncludeDescription')
        })
      },
      setup: {
        include: new Control_checkbox({
          object: state,
          path: 'setup.include',
          id: 'setup-include',
          labelText: message('dataFormSetupIncludeLabel'),
          description: message('dataFormSetupIncludeDescription')
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
