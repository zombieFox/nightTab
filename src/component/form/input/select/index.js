import { node } from '../../../../utility/node';
import { complexNode } from '../../../../utility/complexNode';
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
  }

  if (classList.length > 0) {

    classList.forEach((item) => {
      select.classList.add(item);
    });

  }

  if (func) {

    select.addEventListener('change', () => {
      func();
    });

  }

  if (option.length > 0) {
    option.forEach((item) => {

      if (typeof item == 'string') {

        select.appendChild(
          complexNode({
            tag: 'option',
            text: item,
            attr: [{
              key: 'value',
              value: trimString(item).replace(/\s+/g, '-').toLowerCase()
            }]
          })
        );

      } else {

        const option = complexNode({ tag: 'option' });

        if (item.name) {
          option.textContent = item.name;
        }

        if (item.id) {
          option.value = item.id;
        }

        if (item.disabled) {
          option.disabled = true;
        }

        select.appendChild(option);

      }

    });
  }

  select.selectedIndex = selected;

  return select;

};
