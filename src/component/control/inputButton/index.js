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

export const Control_inputButton = function({
  object = {},
  path = false,
  id = 'name',
  classList = [],
  inputButtonClassList = [],
  type = false,
  inputHide = false,
  labelText = 'Name',
  srOnly = false,
  inputButtonStyle = [],
  action = false
} = {}) {

  this.input;

  switch (type) {
    case 'file':
      this.input = form.input.file({
        id: id,
        func: () => {
          if (action) {
            action();
          };
        }
      });

      break;

    case 'color':
      this.input = form.input.color({
        id: id,
        value: convertColor.rgb.hex(get({
          object: object,
          path: path + '.rgb'
        })),
        classList: classList,
        func: () => {
          if (path) {
            set({
              object: object,
              path: path + '.rgb',
              value: convertColor.hex.rgb(this.input.value)
            });
            set({
              object: object,
              path: path + '.hsl',
              value: convertColor.rgb.hsl(get({
                object: object,
                path: path + '.rgb'
              }))
            });
          };
          if (action) {
            action();
          };
        }
      });

      break;

  };

  this.label = form.label({
    text: labelText,
    forInput: id
  });

  this.button = form.input.inputButton({
    style: inputButtonStyle,
    inputHide: inputHide,
    srOnly: srOnly
  });

  this.inputButtonStyle = {};

  this.inputButtonStyle.add = (inputButtonStyle) => {

    if (inputButtonStyle) {
      if (inputButtonStyle.length > 0) {

        inputButtonStyle.forEach((item, i) => {

          switch (item) {
            case 'link':
              this.button.classList.add('form-input-button-link');
              break;

            case 'line':
              this.button.classList.add('form-input-button-line');
              break;

            case 'ring':
              this.button.classList.add('form-input-button-ring');
              break;

            case 'dot':
              this.button.classList.add('input-color-dot');
              break;
          };

        });

      };
    };

  };

  this.inputButtonStyle.remove = () => {

    this.button.classList.remove('form-input-button-link');

    this.button.classList.remove('form-input-button-line');

    this.button.classList.remove('form-input-button-ring');

    this.button.classList.remove('input-color-dot');

  };

  this.inputButtonStyle.update = (inputButtonStyle) => {

    this.inputButtonStyle.remove();

    this.inputButtonStyle.add(inputButtonStyle);

  };

  this.inputButtonStyle.add(inputButtonStyle);

  if (inputButtonClassList.length > 0) {

    inputButtonClassList.forEach((item, i) => {
      this.button.classList.add(item);
    });

  };

  this.button.appendChild(this.input);

  this.button.appendChild(this.label);

  this.update = () => {
    switch (type) {
      case 'color':
        this.input.value = convertColor.rgb.hex(get({
          object: object,
          path: path + '.rgb'
        }));

        break;
    };
  };

  this.wrap = () => {
    return form.wrap({
      children: [
        this.button
      ]
    })
  };

  this.disable = () => {
    this.label.classList.add('disabled');
    this.input.disabled = true;
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.input.disabled = false;
  };

};
