import { node } from '../../../../utility/node';

import './index.css';

export const range = ({
  id = false,
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  classList = [],
  func = false,
  focusFunc = false,
  blurFunc = false,
  mouseDownFunc = false,
  mouseUpFunc = false
} = {}) => {

  const input = node('input|type:range,min:' + min + ',max:' + max + ',step:' + step + ',value:' + value + ',tabindex:1');

  if (id) {
    input.setAttribute('id', id);
  }

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      input.classList.add(item);
    });

  }

  if (func) {

    input.addEventListener('input', (event) => {
      func();
    });

  }

  if (focusFunc) {

    input.addEventListener('focus', (event) => {
      focusFunc();
    });

  }

  if (blurFunc) {

    input.addEventListener('blur', (event) => {
      blurFunc();
    });

  }

  if (mouseDownFunc) {

    input.addEventListener('mousedown', (event) => {
      mouseDownFunc();
    });

  }

  if (mouseUpFunc) {

    input.addEventListener('mouseup', (event) => {
      mouseUpFunc();
    });

  }

  return input;

};
