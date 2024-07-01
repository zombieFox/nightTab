import { node } from '../../../../utility/node';

import './index.css';

export const inputButton = function ({
  children = false,
  buttonHideInput = false,
  srOnly = false,
  style = []
} = {}) {

  const inputButtonElement = node('div|class:form-input-button', children);

  if (style.length > 0) {
    style.forEach((item) => {
      switch (item) {
        case 'link':
          inputButtonElement.classList.add('form-input-button-link');
          break;

        case 'line':
          inputButtonElement.classList.add('form-input-button-line');
          break;

        case 'ring':
          inputButtonElement.classList.add('form-input-button-ring');
          break;

        case 'dot':
          inputButtonElement.classList.add('input-color-dot');
          break;

      }
    });
  }

  if (buttonHideInput) {
    inputButtonElement.classList.add('form-input-hide');
  }

  if (srOnly) {
    inputButtonElement.classList.add('form-input-button-sr-only');
  }

  return inputButtonElement;

};
