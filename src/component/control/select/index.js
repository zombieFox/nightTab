import * as form from '../../form';

import { complexNode } from '../../../utility/complexNode';
import { get } from '../../../utility/get';
import { set } from '../../../utility/set';
import { trimString } from '../../../utility/trimString';
import { clearChildNode } from '../../../utility/clearChildNode';

export const Control_select = function({
  option = [],
  selected = 0,
  object = {},
  id = 'name',
  path = false,
  labelText = 'name',
  srOnly = false,
  description = false,
  action = false
} = {}) {

  this.select = form.input.select({
    id: id,
    option: option,
    selected: selected,
    func: () => {

      if (object) {
        set({ object: object, path: path, value: this.select.selectedIndex });
      }

      if (action) { action(); }

    }
  });

  this.label = form.label({
    forInput: id,
    text: labelText,
    description: description
  });

  if (srOnly) {
    this.label.classList.add('sr-only');
  }

  this.update = () => {
    this.select.selectedIndex = get({
      object: object,
      path: path
    });
  };

  this.updateOption = (option, selectedIndex) => {

    if (option.length > 0) {

      clearChildNode(this.select);

      option.forEach((item) => {

        this.select.appendChild(
          complexNode({
            tag: 'option',
            text: item,
            attr: [{
              key: 'value',
              value: trimString(item).replace(/\s+/g, '-').toLowerCase()
            }]
          })
        );

      });

      if (selectedIndex || selectedIndex === 0) {
        this.select.selectedIndex = selectedIndex;
      }

    }

  };

  this.selected = () => {
    return this.select.selectedIndex;
  };

  this.wrap = () => {
    return form.wrap({
      children: [
        this.label,
        this.select
      ]
    });
  };

  this.disable = () => {
    this.label.classList.add('disabled');
    this.select.disabled = true;
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.select.disabled = false;
  };

};
