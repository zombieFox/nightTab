import { node } from '../../../../utility/node';

import './index.css';

export const checkbox = ({
  id = false,
  value = false,
  checked = false,
  classList = [],
  func = false
} = {}) => {

  const input = node('input|type:checkbox,tabindex:1');

  if (id) {
    input.setAttribute('id', id);
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
