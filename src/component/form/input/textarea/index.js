import { node } from '../../../../utility/node';

import './index.css';

export const textarea = function({
  id = false,
  value = false,
  placeholder = false,
  classList = [],
  func = false
} = {}) {

  const textarea = node('textarea|tabindex:1,spellcheck:false');

  if (id) {
    textarea.setAttribute('id', id);
  };

  if (value) {
    textarea.setAttribute('value', value);
  };

  if (placeholder) {
    textarea.setAttribute('placeholder', placeholder);
  };

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      textarea.classList.add(item);
    });

  };

  if (func) {

    textarea.addEventListener('input', (event) => {
      func();
    });

  };

  return textarea;

};
