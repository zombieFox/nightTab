import { state } from '../../state';
import { data } from '../../data';
import { bookmark } from '../../bookmark';

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';

import { node } from '../../../utility/node';
import { get } from '../../../utility/get';
import { set } from '../../../utility/set';
import { convertColor } from '../../../utility/convertColor';
import { isValidString } from '../../../utility/isValidString';

export const Control_text = function({
  object = {},
  path = false,
  id = 'name',
  value = false,
  min = false,
  max = false,
  placeholder = false,
  classList = [],
  labelText = 'Name',
  srOnly = false,
  action = false
} = {}) {

  this.label = form.label({
    forInput: id,
    text: labelText
  });

  if (srOnly) {
    this.label.classList.add('sr-only')
  };

  this.text = form.input.text({
    id: id,
    classList: classList,
    func: () => {

      if (path) {
        set({ object: object, path: path, value: this.text.value });
      };

      if (action) { action(); };

    }
  });

  if (value) {
    this.text.value = value;
  };

  if (min) {
    this.text.min = min;
  };

  if (max) {
    this.text.max = max;
  };

  if (placeholder) {
    this.text.placeholder = placeholder;
  };

  this.update = () => {

    this.text.value = get({ object: object, path: path });

  };

  this.wrap = () => {
    return form.wrap({
      children: [
        this.label,
        this.text
      ]
    })
  };

  this.disable = () => {
    this.label.classList.add('disabled');
    this.text.disabled = true;
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.text.disabled = false;
  };

};
