import { node } from '../../../utility/node';

import './index.css';

export const group = function ({
  direction = 'horizontal',
  reverse = false,
  block = false,
  border = false,
  children = false,
  justify = 'left'
} = {}) {

  const group = node('div|class:form-group', children);

  switch (direction) {
    case 'horizontal':
      group.classList.add('form-group-horizontal');
      break;

    case 'vertical':
      group.classList.add('form-group-vertical');
      break;
  }

  if (reverse) {
    group.classList.add('form-group-reverse');
  }

  if (block) {
    group.classList.add('form-group-block');
  }

  if (border) {
    group.classList.add('form-group-border');
  }

  switch (justify) {

    case 'left':
      group.classList.add('form-group-justify-left');
      break;

    case 'right':
      group.classList.add('form-group-justify-right');
      break;

    case 'space-between':
      group.classList.add('form-group-justify-space-between');
      break;

  }

  return group;

};
