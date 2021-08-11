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

export const Control_color = function({
  object = {},
  path = false,
  id = 'name',
  labelText = 'Name',
  srOnly = false,
  value = '#000000',
  defaultValue = false,
  action = false,
  extraButtons = []
} = {}) {

  this.label = form.label({
    forInput: id,
    text: labelText,
    srOnly: srOnly
  });

  this.color = form.input.color({
    id: id,
    value: convertColor.rgb.hex(get({
      object: object,
      path: path + '.rgb'
    })),
    classList: ['form-group-item-half'],
    func: () => {

      if (path) {

        set({ object: object, path: path + '.rgb', value: convertColor.hex.rgb(this.color.value) });

        set({
          object: object,
          path: path + '.hsl',
          value: convertColor.rgb.hsl(get({
            object: object,
            path: path + '.rgb'
          }))
        });

      };

      if (action) { action(); };

      this.text.value = convertColor.rgb.hex(get({ object: object, path: path + '.rgb' }));

    }
  });

  this.text = form.input.text({
    value: convertColor.rgb.hex(get({
      object: object,
      path: path + '.rgb'
    })),
    max: 7,
    classList: ['form-group-item-half'],
    placeholder: 'Hex code',
    func: () => {

      if (path) {

        set({ object: object, path: path + '.rgb', value: convertColor.hex.rgb(this.text.value) });

      };

      if (action) { action(); };

      this.update({ delay: true });

    }
  });

  this.reset = new Button({
    text: false,
    iconName: 'replay',
    style: ['line'],
    classList: ['form-group-item-small'],
    func: () => {

      set({ object: object, path: path + '.rgb', value: JSON.parse(JSON.stringify(defaultValue)) });

      this.update({ all: true });

      if (action) { action(); };

    }
  });

  this.update = ({
    delay = false,
    all = false
  } = {}) => {

    let delayedUpdate = null;

    const updateControl = () => {

      this.color.value = convertColor.rgb.hex(get({
        object: object,
        path: path + '.rgb'
      }));

      if (all) {
        this.text.value = convertColor.rgb.hex(get({
          object: object,
          path: path + '.rgb'
        }));
      };

    };

    if (delay) {
      clearTimeout(delayedUpdate);
      delayedUpdate = setTimeout(updateControl, 2000);
    } else {
      updateControl();
    };

  };

  this.wrap = () => {

    const formGroup = form.group({
      block: true,
      children: [
        this.color,
        this.text
      ]
    });

    if (defaultValue || (typeof defaultValue === 'number' && defaultValue === 0)) {
      formGroup.appendChild(this.reset.button);
    };

    if (extraButtons.length > 0) {
      extraButtons.forEach((item, i) => {
        formGroup.appendChild(item.button);
      });
    };

    const wrap = form.wrap({
      children: [
        this.label,
        formGroup
      ]
    });

    return wrap;

  };

  this.disable = () => {
    this.label.classList.add('disabled');
    this.color.disabled = true;
    this.text.disabled = true;
    this.reset.disable();

    if (extraButtons.length > 0) {
      extraButtons.forEach((item, i) => {
        item.disable();
      });
    };
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.color.disabled = false;
    this.text.disabled = false;
    this.reset.enable();

    if (extraButtons.length > 0) {
      extraButtons.forEach((item, i) => {
        item.enable();
      });
    };
  };

};
