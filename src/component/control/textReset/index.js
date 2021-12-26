import { language } from '../../../language';

import * as form from '../../form';

import { Button } from '../../button';

import { get } from '../../../utility/get';
import { set } from '../../../utility/set';

export const Control_textReset = function ({
  object = {},
  path = false,
  id = 'name',
  value = false,
  defaultValue = false,
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
    this.label.classList.add('sr-only');
  }

  this.text = form.input.text({
    id: id,
    classList: classList,
    func: () => {
      if (path) {
        set({
          object: object,
          path: path,
          value: this.text.value
        });
      }
      if (action) {
        action();
      }
    }
  });

  if (value) {
    this.text.value = value;
  }

  if (min) {
    this.text.min = min;
  }

  if (max) {
    this.text.max = max;
  }

  if (placeholder) {
    this.text.placeholder = placeholder;
  }

  this.reset = new Button({
    text: language.current.control.general.reset,
    iconName: 'replay',
    style: ['line'],
    classList: ['form-group-item-small'],
    title: language.current.control.general.reset,
    srOnly: true,
    func: () => {
      set({
        object: object,
        path: path,
        value: JSON.parse(JSON.stringify(defaultValue))
      });
      this.update();
      if (action) {
        action();
      }
    }
  });

  this.update = () => {
    this.text.value = get({
      object: object,
      path: path,
    });
  };

  this.wrap = () => {
    return form.wrap({
      children: [
        this.label,
        form.group({
          direction: 'horizontal',
          block: true,
          children: [
            this.text,
            this.reset.button
          ]
        })
      ]
    });
  };

  this.disable = () => {
    this.label.classList.add('disabled');
    this.text.disabled = true;
    this.reset.disable();
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.text.disabled = false;
    this.reset.enable();
  };

};
