import { node } from '../../../../utility/node';

import './index.css';

export const color = function ({
  id = false,
  value = '#000000',
  classList = [],
  func = false
} = {}) {

  const input = node('input|type:color,value:' + value + ',tabindex:1');

  if (id) {
    input.setAttribute('id', id);
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
