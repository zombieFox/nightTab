import { icon } from '../icon';

import * as form from '../form';

import { node } from '../../utility/node';

import './index.css';

export const Button = function({
  text = 'Button',
  srOnly = false,
  iconName = false,
  iconPosition = false,
  block = false,
  size = false,
  style = [],
  title = false,
  classList = [],
  func = false
} = {}) {

  this.button = node('button|class:button,tabindex:1,type:button');

  if (text) {
    const buttonText = node('span:' + text + '|class:button-text');

    if (srOnly) {
      buttonText.classList.add('sr-only');
    };

    this.button.appendChild(buttonText);
  };

  if (iconName) {

    switch (iconPosition) {

      case 'right':
        this.button.append(icon.render(iconName));
        break;

      default:
      case 'left':
        this.button.prepend(icon.render(iconName));
        break;

    };

  };

  if (block) {
    this.button.classList.add('button-block');
  };

  switch (size) {
    case 'small':
      this.button.classList.add('button-small');
      break;

    case 'large':
      this.button.classList.add('button-large');
      break;
  };

  if (title) {
    this.button.setAttribute('title', title);
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      this.button.classList.add(item);
    });
  };

  if (func) {
    this.button.addEventListener('click', (event) => {
      func();
    });
  };

  this.style = {};

  this.style.add = (style) => {

    if (style) {

      if (style.length > 0) {
        style.forEach((item, i) => {
          switch (item) {
            case 'link':
              this.button.classList.add('button-link');
              break;

            case 'line':
              this.button.classList.add('button-line');
              break;

            case 'ring':
              this.button.classList.add('button-ring');
              break;
          };
        });
      };

    };

  };

  this.style.remove = () => {

    this.button.classList.remove('button-link');

    this.button.classList.remove('button-line');

    this.button.classList.remove('button-ring');

  };

  this.style.update = (style) => {

    this.style.remove();

    this.style.add(style);

  };

  this.style.add(style);

  this.disable = () => {
    this.button.disabled = true;
  };

  this.enable = () => {
    this.button.disabled = false;
  };

  this.deactive = () => {
    this.button.classList.remove('active');
  };

  this.active = () => {
    this.button.classList.add('active');
  };

  this.wrap = () => {
    return form.wrap({
      children: [
        this.button
      ]
    });
  };

};
