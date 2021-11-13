import * as form from '../../form';

import { get } from '../../../utility/get';
import { set } from '../../../utility/set';

export const Control_radioGrid = function ({
  radioGroup = [],
  label = false,
  object = {},
  groupName = 'group',
  path = false,
  gridSize = '3x3',
  action = false
} = {}) {

  this.radioSet = [];

  const radioGroupName = groupName;

  const radioGroupPath = path;

  const gridElement = form.grid();

  this.label = false;

  if (label) {
    this.label = form.label({
      text: label
    });
  }

  if (radioGroup.length > 0) {
    radioGroup.forEach((item) => {
      const radioAndLabel = {};

      radioAndLabel.position = item.position;

      radioAndLabel.radio = form.input.radio({
        id: item.id,
        radioGroup: radioGroupName,
        value: item.value,
        checked: (get({ object: object, path: radioGroupPath, }) === item.value),
        func: () => {

          set({ object: object, path: radioGroupPath, value: item.value });

          if (action) { action(); }

        }
      });

      radioAndLabel.label = form.label({
        forInput: item.id,
        text: item.labelText,
        description: item.description,
        srOnly: true,
        icon: true
      });

      radioAndLabel.wrap = () => {
        return form.wrap({
          children: [
            radioAndLabel.radio,
            radioAndLabel.label
          ]
        });
      };

      radioAndLabel.radio.update = () => {

        radioAndLabel.radio.checked = (get({ object: object, path: radioGroupPath }) === item.value);

      };

      radioAndLabel.radio.disable = () => {
        radioAndLabel.radio.disabled = true;
      };

      radioAndLabel.radio.enable = () => {
        radioAndLabel.radio.disabled = false;
      };

      this.radioSet.push(radioAndLabel);
    });
  }

  this.value = () => {
    let currentSelectedRadio = false;

    this.radioSet.forEach((item) => {
      if (item.radio.checked) {
        currentSelectedRadio = item.radio.value;
      }
    });

    return currentSelectedRadio;
  };

  this.update = () => {
    this.radioSet.forEach((item) => {
      item.radio.update();
    });
  };

  this.wrap = () => {
    const wrap = form.wrap();

    switch (gridSize) {
      case '3x3':
        gridElement.classList.add('form-grid-3x3');
        break;

      case '3x1':
        gridElement.classList.add('form-grid-3x1');
        break;

      case '1x3':
        gridElement.classList.add('form-grid-1x3');
        break;

      case '2x2':
        gridElement.classList.add('form-grid-2x2');
        break;
    }

    this.radioSet.forEach((item) => {
      const wrap = form.wrap({
        children: [
          item.radio,
          item.label
        ]
      });

      wrap.style.setProperty('--form-grid-cell', 'cell-' + item.position);

      gridElement.appendChild(wrap);
    });

    if (label) {
      wrap.appendChild(this.label);
    }

    wrap.appendChild(gridElement);

    return wrap;
  };

  this.disable = () => {
    this.radioSet.forEach((item) => {
      item.radio.disable();
    });

    gridElement.classList.add('disabled');

    if (label) {
      this.label.classList.add('disabled');
    }
  };

  this.enable = () => {
    this.radioSet.forEach((item) => {
      item.radio.enable();
    });

    gridElement.classList.remove('disabled');

    if (label) {
      this.label.classList.remove('disabled');
    }
  };

};
