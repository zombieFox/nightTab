import { node } from '../../../../utility/node';
import { trimString } from '../../../../utility/trimString';

import './index.css';

export const select = function({
  id = false,
  classList = [],
  option = [],
  selected = 0,
  func = false
} = {}) {

  const select = node('select|tabindex:1');

  if (id) {
    select.setAttribute('id', id);
  };

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      select.classList.add(item);
    });

  };

  if (func) {

    select.addEventListener('change', (event) => {
      func();
    });

  };

  if (option.length > 0) {

    option.forEach((item, i) => {

      select.appendChild(
        node(
          'option:' +
          item +
          '|value:' +
          trimString(item).replace(/\s+/g, '-').toLowerCase()
        )
      );

    });

    select.selectedIndex = selected;

  };

  return select;

};
