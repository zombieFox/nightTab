import { node } from '../../../utility/node';

import './index.css';

export const inline = function ({
  direction = 'horizontal',
  reverse = false,
  block = false,
  wrap = false,
  justify = 'left',
  gap = 'medium',
  equalGap = false,
  children = false
} = {}) {

  const inline = node('div|class:form-inline', children);

  switch (direction) {
    case 'horizontal':
      inline.classList.add('form-inline-horizontal');
      break;

    case 'vertical':
      inline.classList.add('form-inline-vertical');
      break;
  }

  switch (gap) {

    case 'small':
      inline.classList.add('form-inline-gap-small');
      break;

    case 'medium':
      inline.classList.add('form-inline-gap-medium');
      break;

    case 'large':
      inline.classList.add('form-inline-gap-large');
      break;

  }

  if (equalGap) {
    inline.classList.add('form-inline-gap-equal');
  }

  switch (justify) {

    case 'left':
      inline.classList.add('form-inline-justify-left');
      break;

    case 'center':
      inline.classList.add('form-inline-justify-center');
      break;

    case 'right':
      inline.classList.add('form-inline-justify-right');
      break;

  }

  if (reverse) {
    inline.classList.add('form-inline-reverse');
  }

  if (block) {
    inline.classList.add('form-inline-block');
  }

  if (wrap) {
    inline.classList.add('form-inline-wrap');
  }

  return inline;

};
