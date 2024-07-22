import { message } from '../../message';

import * as form from '../../form';

import { Button } from '../../button';

import { get } from '../../../utility/get';
import { set } from '../../../utility/set';
import { convertColor } from '../../../utility/convertColor';
import { randomNumber } from '../../../utility/randomNumber';

export const Control_color = function ({
  object = {},
  path = false,
  id = 'name',
  labelText = 'Label',
  srOnly = false,
  value = '#000000',
  text = true,
  defaultValue = false,
  action = false,
  randomColor = false,
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

      }

      if (action) { action(); }

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
    placeholder: message.get('controlColorTextPlaceholder'),
    func: () => {

      if (path) {

        set({ object: object, path: path + '.rgb', value: convertColor.hex.rgb(this.text.value) });

      }

      if (action) { action(); }

      this.update({ delay: true });

    }
  });

  this.reset = new Button({
    text: message.get('controlGeneralReset'),
    iconName: 'replay',
    style: ['line'],
    classList: ['form-group-item-small'],
    title: message.get('controlGeneralReset'),
    srOnly: true,
    func: () => {

      set({ object: object, path: path + '.rgb', value: JSON.parse(JSON.stringify(defaultValue)) });

      this.update({ all: true });

      if (action) { action(); }

    }
  });

  this.random = new Button({
    text: message.get('controlColorRandom'),
    iconName: 'random',
    style: ['line'],
    classList: ['form-group-item-small'],
    title: message.get('controlColorRandom'),
    srOnly: true,
    func: () => {

      set({ object: object, path: path + '.hsl', value: { h: randomNumber(0, 360), s: randomNumber(0, 100), l: randomNumber(0, 100) } });

      set({
        object: object,
        path: path + '.rgb',
        value: convertColor.hsl.rgb(get({
          object: object,
          path: path + '.hsl'
        }))
      });

      this.update({ all: true });

      if (action) { action(); }

    }
  });

  this.delayedUpdate = null;

  this.update = ({
    delay = false,
    all = false
  } = {}) => {

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
      }

    };

    if (delay) {
      clearTimeout(this.delayedUpdate);
      this.delayedUpdate = setTimeout(updateControl, 2000);
    } else {
      updateControl();
    }

  };

  this.wrap = () => {

    const formGroup = form.group({
      block: true,
      children: [this.color]
    });

    if (text) {
      formGroup.appendChild(this.text);
    }

    if (randomColor) {
      formGroup.appendChild(this.random.button);
    }

    if (defaultValue || (typeof defaultValue === 'number' && defaultValue === 0)) {
      formGroup.appendChild(this.reset.button);
    }

    if (extraButtons.length > 0) {
      extraButtons.forEach((item) => {
        formGroup.appendChild(item.button);
      });
    }

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
    this.random.disable();
    this.reset.disable();

    if (extraButtons.length > 0) {
      extraButtons.forEach((item) => {
        item.disable();
      });
    }
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.color.disabled = false;
    this.text.disabled = false;
    this.random.enable();
    this.reset.enable();

    if (extraButtons.length > 0) {
      extraButtons.forEach((item) => {
        item.enable();
      });
    }
  };

};
