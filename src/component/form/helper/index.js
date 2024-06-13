import { node } from '../../../utility/node';

import './index.css';

export const helper = function ({
  text = 'Text',
  complexText = false,
  classList = []
} = {}) {

  const helper = node('p|class:form-helper-item');

  if (text) {

    if (complexText) {

      helper.innerHTML = text;

    } else {

      let textNode = document.createTextNode(text);

      helper.appendChild(textNode);

    }

  }

  if (classList.length > 0) {

    classList.forEach((item) => {
      helper.classList.add(item);
    });

  }

  return helper;

};
