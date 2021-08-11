import { node } from '../../../../utility/node';

import './index.css';

export const file = ({
  id = false,
  classList = [],
  func = false
} = {}) => {

  const input = node('input|type:file,tabindex:1');

  if (id) {
    input.setAttribute('id', id);
  };

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      input.classList.add(item);
    });

  };

  if (func) {

    input.addEventListener('change', (event) => {
      func();
    });

  };

  return input;

};
