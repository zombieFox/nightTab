import { node } from '../../../utility/node';

import './index.css';

export const groupText = ({
  text = false,
  classList = []
} = {}) => {

  const textElement = node('div|class:form-group-text,tabindex:1');

  if (text) {
    textElement.textContent = text;
  }

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      textElement.classList.add(item);
    });

  }

  return textElement;

};
