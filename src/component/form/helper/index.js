import { node } from '../../../utility/node';
import { complexNode } from '../../../utility/complexNode';

import './index.css';

export const helper = function({
  text = 'text',
  classList = []
} = {}) {

  const helper = complexNode({
    tag: 'p',
    text: text,
    attr: [{
      key: 'class',
      value: 'form-helper-item'
    }]
  });

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      helper.classList.add(item);
    });

  };

  return helper;

};