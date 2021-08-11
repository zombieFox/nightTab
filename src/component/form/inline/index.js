import { node } from '../../../utility/node';

import './index.css';

export const inline = function({
  direction = 'horizontal',
  reverse = false,
  block = false,
  wrap = false,
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
  };

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

  };

  if (equalGap) {
    inline.classList.add('form-inline-gap-equal');
  };

  if (reverse) {
    inline.classList.add('form-inline-reverse');
  };

  if (block) {
    inline.classList.add('form-inline-block');
  };

  if (wrap) {
    inline.classList.add('form-inline-wrap');
  };

  return inline;

};
