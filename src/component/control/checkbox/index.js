import * as form from '../../form';

import { get } from '../../../utility/get';
import { set } from '../../../utility/set';

export const Control_checkbox = function({
  object = {},
  id = 'name',
  path = false,
  labelText = 'Label',
  description = false,
  action = false,
  buttonHideInput = false,
  inputButtonStyle = false
} = {}) {

  this.checkbox = form.input.checkbox({
    id: id,
    checked: get({ object: object, path: path }),
    func: () => {

      set({ object: object, path: path, value: this.checkbox.checked });

      if (action) { action(); }

    }
  });

  this.label = form.label({
    forInput: id,
    text: labelText,
    description: description,
    icon: true
  });

  this.update = () => {
    this.checkbox.checked = get({ object: object, path: path });
  };

  this.checked = () => {

    return get({ object: object, path: path });

  };

  this.wrap = () => {

    return form.wrap({
      children: [
        this.checkbox,
        this.label
      ]
    });

  };

  this.inputButton = () => {

    const wrap = form.wrap();

    wrap.appendChild(
      form.input.inputButton({
        buttonHideInput: buttonHideInput,
        style: inputButtonStyle,
        children: [
          this.checkbox,
          this.label
        ]
      })
    );

    return wrap;

  };

  this.disable = () => {
    this.checkbox.disabled = true;
  };

  this.enable = () => {
    this.checkbox.disabled = false;
  };

};