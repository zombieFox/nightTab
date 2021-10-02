import { node } from '../../../../utility/node';

import './index.css';

export const radio = function ({
  id = false,
  radioGroup = false,
  value = false,
  checked = false,
  classList = [],
  func = false
} = {}) {

  const input = node('input|type:radio,tabindex:1');

  if (id) {
    input.setAttribute('id', id);
  }

  if (radioGroup) {
    input.setAttribute('name', radioGroup);
  }

  if (value) {
    input.setAttribute('value', value);
  }

  if (checked) {
    input.setAttribute('checked', '');
  }

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      input.classList.add(item);
    });

  }

  if (func) {
    input.addEventListener('change', (event) => {
      func();
    });
  }

  return input;

};
