import { node } from '../../utility/node';

import './index.css';

export const Shade = function () {

  this.element = {
    shade: node('div|class:shade')
  };

  this.open = () => {
    const body = document.querySelector('body');

    this.element.shade.classList.add('is-transparent');

    this.element.shade.addEventListener('transitionend', (event) => {
      if (event.propertyName === 'opacity' && getComputedStyle(this.element.shade).opacity == 0) {
        body.removeChild(this.element.shade);
      }
    });

    body.appendChild(this.element.shade);

    getComputedStyle(this.element.shade).opacity;

    this.element.shade.classList.remove('is-transparent');

    this.element.shade.classList.add('is-opaque');
  };

  this.close = () => {

    this.element.shade.classList.remove('is-opaque');

    this.element.shade.classList.add('is-transparent');

    clearTimeout(this.delayedForceRemove);

    this.delayedForceRemove = setTimeout(() => {

      const body = document.querySelector('body');

      if (body.contains(this.element.shade)) {
        body.removeChild(this.element.shade);
      }

    }, 6000);

  };

  this.delayedForceRemove = null;

  this.shade = () => {
    return this.element.shade;
  };

};
