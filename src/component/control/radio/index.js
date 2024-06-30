import * as form from '../../form';

import { get } from '../../../utility/get';
import { set } from '../../../utility/set';

export const Control_radio = function ({
  radioGroup = [],
  object = {},
  label = false,
  groupName = 'Group',
  path = false,
  action = false,
  buttonHideInput = false,
  inputButtonStyle = false
} = {}) {

  this.radioSet = [];

  const radioGroupName = groupName;

  const radioGroupPath = path;

  this.label = label;

  if (label) {
    this.label = form.label({
      text: label,
      noPadding: true
    });
  }

  if (radioGroup.length > 0) {
    radioGroup.forEach((item) => {
      const radioAndLabel = {
        radio: form.input.radio({
          id: item.id,
          radioGroup: radioGroupName,
          value: item.value,
          checked: (get({ object: object, path: radioGroupPath }) === item.value),
          func: () => {

            set({ object: object, path: radioGroupPath, value: item.value });

            if (action) { action(); }

          }
        }),
        label: form.label({
          forInput: item.id,
          text: item.labelText,
          description: item.description,
          icon: true
        }),
        wrap: () => {
          return form.wrap({
            children: [
              radioAndLabel.radio,
              radioAndLabel.label
            ]
          });
        },
        inputButton: () => {
          return form.input.inputButton({
            buttonHideInput: buttonHideInput,
            style: inputButtonStyle,
            children: [
              radioAndLabel.radio,
              radioAndLabel.label
            ]
          });
        }
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

    if (this.label) {
      wrap.appendChild(form.wrap({ children: [this.label] }));
    }

    this.radioSet.forEach((item) => {
      wrap.appendChild(
        item.wrap()
      );
    });

    return wrap;

  };

  this.inputButton = () => {

    const wrap = form.wrap();

    const group = form.group();

    this.radioSet.forEach((item) => {
      group.appendChild(
        item.inputButton()
      );
    });

    wrap.appendChild(group);

    return wrap;

  };

  this.inline = () => {

    const inline = form.inline({
      gap: 'large',
      wrap: true
    });

    this.radioSet.forEach((item) => {
      inline.appendChild(
        form.wrap({
          children: [
            item.radio,
            item.label
          ]
        })
      );
    });

    const wrap = form.wrap();

    if (this.label) {
      wrap.appendChild(form.wrap({ children: [this.label] }));
    }

    wrap.appendChild(form.wrap({ children: [inline] }));

    return wrap;

  };

  this.disable = () => {
    this.radioSet.forEach((item) => {
      item.radio.disable();
    });

    if (label) {
      this.label.classList.add('disabled');
    }
  };

  this.enable = () => {
    this.radioSet.forEach((item) => {
      item.radio.enable();
    });

    if (label) {
      this.label.classList.remove('disabled');
    }
  };

};
