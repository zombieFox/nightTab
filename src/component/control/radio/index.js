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

export const Control_radio = function({
  radioGroup = [],
  object = {},
  label = false,
  groupName = 'group',
  path = false,
  action = false,
  inputButton = false,
  inputHide = false,
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
  };

  if (radioGroup.length > 0) {
    radioGroup.forEach((item, i) => {
      const radioAndLabel = {
        radio: form.input.radio({
          id: item.id,
          radioGroup: radioGroupName,
          value: item.value,
          checked: (get({ object: object, path: radioGroupPath }) === item.value),
          func: () => {

            set({ object: object, path: radioGroupPath, value: item.value });

            if (action) { action(); };

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
            inputButton: inputButton,
            inputHide: inputHide,
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
  };

  this.value = () => {

    let currentSelectedRadio = false;

    this.radioSet.forEach((item, i) => {
      if (item.radio.checked) {
        currentSelectedRadio = item.radio.value;
      };
    });

    return currentSelectedRadio;

  };

  this.update = () => {

    this.radioSet.forEach((item, i) => {
      item.radio.update();
    });

  };

  this.wrap = () => {

    const wrap = form.wrap();

    if (label) {
      wrap.appendChild(
        form.wrap({
          children: [
            this.label
          ]
        })
      );
    };

    this.radioSet.forEach((item, i) => {
      wrap.appendChild(
        item.wrap()
      );
    });

    return wrap;

  };

  this.inputButton = ({
    inputHide = false
  } = {}) => {

    const wrap = form.wrap();

    const group = form.group();

    this.radioSet.forEach((item, i) => {
      group.appendChild(
        item.inputButton()
      );
    });

    wrap.appendChild(group);

    return wrap;

  };

  this.inline = () => {

    const formWrap = form.wrap();

    const formInline = form.inline({
      gap: 'large',
      wrap: true
    });

    this.radioSet.forEach((item, i) => {
      formInline.appendChild(
        form.wrap({
          children: [
            item.radio,
            item.label
          ]
        })
      );
    });

    formWrap.appendChild(formInline);

    return formWrap;

  };

  this.disable = () => {
    this.radioSet.forEach((item, i) => {
      item.radio.disable();
    });

    if (label) {
      this.label.classList.add('disabled');
    };
  };

  this.enable = () => {
    this.radioSet.forEach((item, i) => {
      item.radio.enable();
    });

    if (label) {
      this.label.classList.remove('disabled');
    };
  };

};
