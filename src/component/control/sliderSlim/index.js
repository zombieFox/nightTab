import { language } from '../../../language';

import * as form from '../../form';

import { Button } from '../../button';

import { get } from '../../../utility/get';
import { set } from '../../../utility/set';
import { minMax } from '../../../utility/minMax';

export const Control_sliderSlim = function ({
  object = {},
  path = false,
  id = 'name',
  labelText = 'Name',
  hue = false,
  value = 0,
  defaultValue = false,
  min = 0,
  max = 100,
  step = 1,
  action = false,
  focusAction = false,
  blurAction = false,
  sliderAction = false,
  numberAction = false,
  resetAction = false,
  mouseDownAction = false,
  mouseUpAction = false
} = {}) {

  this.label = form.label({
    forInput: id,
    text: labelText,
    noPadding: true,
    classList: ['form-group-text', 'form-group-text-left', 'form-group-text-transparent', 'form-group-text-borderless', 'form-group-item-medium']
  });

  const classList = ['form-group-item-grow'];

  if (hue) {
    classList.push('input-range-hue-spectrum');
  }

  this.range = form.input.range({
    id: id,
    value: value,
    min: min,
    max: max,
    step: step,
    classList: classList,
    func: () => {

      if (path) {

        set({ object: object, path: path, value: this.value() });

      }

      if (action) { action(); }

      if (sliderAction) { sliderAction(); }

      this.number.value = get({ object: object, path: path });

    },
    focusFunc: focusAction,
    blurFunc: blurAction,
    mouseDownFunc: mouseDownAction,
    mouseUpFunc: mouseUpAction
  });

  this.number = form.input.number({
    value: value,
    min: min,
    max: max,
    classList: ['form-group-item-small'],
    func: () => {

      if (path) {

        set({
          object: object,
          path: path,
          value: minMax({
            value: parseInt(this.number.value, 10),
            min: min,
            max: max
          })
        });

      }

      if (action) { action(); }

      if (numberAction) { numberAction(); }

      this.update({ delay: true });

    }
  });

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

      if (action) { action(); }

      if (resetAction) { resetAction(); }

    }
  });

  this.delayedUpdate = null;

  this.update = ({
    delay = false
  } = {}) => {

    const updateControl = () => {
      this.range.value = get({ object: object, path: path });
      this.number.value = get({ object: object, path: path });
    };

    if (delay) {
      clearTimeout(this.delayedUpdate);
      this.delayedUpdate = setTimeout(updateControl, 2000);
    } else {
      updateControl();
    }

  };

  this.value = () => {
    return parseInt(this.range.value, 10);
  };

  this.wrap = () => {
    const formGroup = form.group({
      children: [
        this.number
      ]
    });

    if (defaultValue || (typeof defaultValue === 'number' && defaultValue === 0)) {
      formGroup.appendChild(this.reset.button);
    }

    const formInline = form.inline({
      block: true,
      gap: 'small',
      children: [
        this.label,
        this.range,
        formGroup
      ]
    });

    const wrap = form.wrap({
      children: [
        formInline
      ]
    });

    return wrap;
  };

  this.disable = () => {
    this.label.classList.add('disabled');
    this.range.disabled = true;
    this.number.disabled = true;
    this.reset.disable();
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.range.disabled = false;
    this.number.disabled = false;
    this.reset.enable();
  };

};
