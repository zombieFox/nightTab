import { node } from '../../../utility/node';

import './index.css';

export const label = ({
  forInput = false,
  text = 'label',
  description = false,
  srOnly = false,
  icon = false,
  noPadding = false,
  classList = []
} = {}) => {

  let label;

  if (forInput) {
    label = node('label|for:' + forInput);
  } else {
    label = node('label');
  }

  if (noPadding) {
    label.classList.add('label-no-padding');
  }

  const labelBlock = node('span|class:label-block');

  if (srOnly) {
    if (icon) {
      labelBlock.classList.add('sr-only');
    } else {
      label.classList.add('sr-only');
    }
  }

  if (text) {
    labelBlock.appendChild(node('span:' + text + '|class:label-block-item'));
  }

  if (description) {
    if (Array.isArray(description)) {

      description.forEach((item) => {
        labelBlock.appendChild(node('span:' + item + '|class:label-block-item small muted'));
      });

    } else if (typeof description === 'string') {

      labelBlock.appendChild(node('span:' + description + '|class:label-block-item small muted'));

    }
  }

  if (text || description) {
    label.appendChild(labelBlock);
  }

  if (icon) {
    label.prepend(node('span|class:label-icon'));
  }

  if (classList.length > 0) {

    classList.forEach((item) => {
      label.classList.add(item);
    });

  }

  return label;

};
