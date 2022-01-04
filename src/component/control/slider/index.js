import { message } from '../../message';

import * as form from '../../form';

import { Button } from '../../button';

import { get } from '../../../utility/get';
import { set } from '../../../utility/set';
import { minMax } from '../../../utility/minMax';

export const Control_slider = function({
  object = {},
  path = false,
  id = 'name',
  labelText = 'Name',
  value = 0,
  defaultValue = false,
  min = 0,
  max = 100,
  step = 1,
  action = false,
  style = false,
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
    text: labelText
  });

  const classList = [];

  if (style) {

    switch (style) {

      case 'hue':
        classList.push('input-range-hue-spectrum');
        break;

      case 'saturation':
        classList.push('input-range-saturation-spectrum');
        break;

      case 'contrast':
        classList.push('input-range-contrast-spectrum');
        break;

    }

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

      if (sliderAction) { sliderAction(); }

      if (action) { action(); }

      this.updateNumber();

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

      if (numberAction) { numberAction(); }

      if (action) { this.action({ delay: true }); }

      this.updateRange();

      this.updateNumber({ delay: true });

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

      set({
        object: object,
        path: path,
        value: JSON.parse(JSON.stringify(defaultValue))
      });

      if (action) { action(); }

      if (resetAction) { resetAction(); }

      this.update();

    }
  });

  this.delayedAction = null;

  this.action = ({
    delay = false
  } = {}) => {

    const delayedAction = () => {
      action();
    };

    if (delay) {
      clearTimeout(this.delayedAction);
      this.delayedAction = setTimeout(delayedAction, 2000);
    } else {
      this.delayedAction = null;
      delayedAction();
    }

  };

  this.delayedUpdateRange = null;

  this.delayedUpdateNumber = null;

  this.updateRange = ({
    delay = false
  } = {}) => {

    const updateControl = () => {
      this.range.value = get({ object: object, path: path });
    };

    if (delay) {
      clearTimeout(this.delayedUpdateRange);
      this.delayedUpdateRange = setTimeout(updateControl, 2000);
    } else {
      this.delayedUpdateRange = null;
      updateControl();
    }

  };

  this.updateNumber = ({
    delay = false
  } = {}) => {

    const updateControl = () => {
      this.number.value = get({ object: object, path: path });
    };

    if (delay) {
      clearTimeout(this.delayedUpdateNumber);
      this.delayedUpdateNumber = setTimeout(updateControl, 2000);
    } else {
      this.delayedUpdateNumber = null;
      updateControl();
    }

  };

  this.update = ({
    delay = false
  } = {}) => {

    this.updateRange({ delay: delay });

    this.updateNumber({ delay: delay });

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
        this.range,
        formGroup
      ]
    });

    const wrap = form.wrap({
      children: [
        this.label,
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
