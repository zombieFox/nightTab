import { node } from '../../../../utility/node';

import './index.css';

export const text = ({
  id = false,
  value = false,
  min = false,
  max = false,
  placeholder = false,
  classList = [],
  func = false
} = {}) => {

  const input = node('input|type:text,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false,tabindex:1');

  if (id) {
    input.setAttribute('id', id);
  };

  if (value) {
    input.setAttribute('value', value);
  };

  if (typeof min === 'number') {
    input.setAttribute('minlength', min);
  };

  if (typeof max === 'number') {
    input.setAttribute('maxlength', max);
  };

  if (placeholder) {
    input.setAttribute('placeholder', placeholder);
  };

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      input.classList.add(item);
    });

  };

  if (func) {

    input.addEventListener('input', (event) => {
      func();
    });

  };

  return input;

};
