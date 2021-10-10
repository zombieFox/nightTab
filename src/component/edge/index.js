import { state } from '../state';

import { node } from '../../utility/node';

import './index.css';

export const Edge = function ({
  primary = false,
  secondary = false,
  padding = 0
} = {}) {

  this.tick = null;

  this.element = {
    edge: {
      primary: null,
      secondary: []
    }
  };

  this.bind = {
    set: () => {

      this.tick = window.setTimeout(() => {

        this.bind.set();

        this.track();

      }, 100);

    },
    remove: () => {

      clearTimeout(this.tick);

      this.tick = null;

    }
  };

  this.assemble = () => {

    this.element.edge.primary = node('div|class:edge is-transparent');

    this.element.edge.primary.addEventListener('transitionend', (event) => {

      if (event.propertyName === 'opacity' && getComputedStyle(this.element.edge.primary).opacity == 1) {

        this.bind.set();

        this.element.edge.primary.classList.remove('is-edge-opening');

      }

      if (event.propertyName === 'opacity' && getComputedStyle(this.element.edge.primary).opacity == 0) {

        if (this.element.edge.primary.parentElement.contains(this.element.edge.primary)) {
          this.element.edge.primary.parentElement.removeChild(this.element.edge.primary);
        }

        this.element.edge.primary.removeAttribute('style');

        this.element.edge.primary.classList.remove('is-edge-opening');

        this.bind.remove();

      }

    });

    this.element.edge.secondary = [];

    if (secondary.length > 0) {

      secondary.forEach(() => {
        this.element.edge.secondary.push(node('div|class:edge-secondary is-transparent'));
      });

      this.element.edge.secondary.forEach((item) => {

        item.addEventListener('transitionend', (event) => {

          if (event.propertyName === 'opacity' && getComputedStyle(item).opacity == 1) {

            item.classList.remove('is-edge-opening');

          }

          if (event.propertyName === 'opacity' && getComputedStyle(item).opacity == 0) {

            if (item.parentElement.contains(item)) {
              item.parentElement.removeChild(item);
            }

            item.removeAttribute('style');

            item.classList.remove('is-edge-opening');

          }

        });

      });

    }

  };

  this.destroy = () => {

    this.element.edge.primary.classList.remove('is-opaque');

    this.element.edge.primary.classList.add('is-transparent');

    if (this.element.edge.secondary.length > 0) {

      this.element.edge.secondary.forEach((item) => {

        item.classList.remove('is-opaque');

        item.classList.add('is-transparent');

      });

    }

  };

  this.appear = (edge) => {
    const body = document.querySelector('body');

    body.appendChild(edge);

    getComputedStyle(edge).opacity;

    getComputedStyle(edge).width;

    getComputedStyle(edge).height;

    getComputedStyle(edge).top;

    getComputedStyle(edge).left;

    edge.classList.remove('is-transparent');

    edge.classList.add('is-opaque');

    edge.classList.add('is-edge-opening');

  };

  this.show = () => {

    this.appear(this.element.edge.primary);

    const body = document.querySelector('body');

    if (secondary.length > 0) {

      secondary.forEach((item, i) => {

        if (body.contains(item)) {

          this.appear(this.element.edge.secondary[i]);

        }

      });

    }

    this.track();

    const html = document.querySelector('html');

    html.classList.add('is-edge');

  };

  this.hide = () => {

    this.destroy();

    this.bind.remove();

    const html = document.querySelector('html');

    html.classList.remove('is-edge');

  };

  this.style = (elementToTrack, edge) => {

    const html = document.querySelector('html');

    const scrollTop = document.documentElement.scrollTop;

    const scrollLeft = document.documentElement.scrollLeft;

    const rect = elementToTrack.getBoundingClientRect();

    const fontSize = parseInt(getComputedStyle(html).fontSize, 10);

    const layoutSpace = parseFloat(getComputedStyle(html).getPropertyValue('--layout-space'), 10);

    const layoutSize = state.get.current().layout.size;

    edge.style.width = rect.width + ((layoutSize / 100) * (((layoutSpace * fontSize) * padding) * 2)) + 'px';

    edge.style.height = rect.height + ((layoutSize / 100) * (((layoutSpace * fontSize) * padding) * 2)) + 'px';

    edge.style.top = rect.top + scrollTop - ((layoutSize / 100) * ((layoutSpace * fontSize) * padding)) + 'px';

    edge.style.left = rect.left + scrollLeft - ((layoutSize / 100) * ((layoutSpace * fontSize) * padding)) + 'px';

  };

  this.track = () => {

    this.style(primary, this.element.edge.primary);

    if (secondary.length > 0) {

      secondary.forEach((item, i) => {
        this.style(item, this.element.edge.secondary[i]);
      });

    }

  };

  this.update = {
    primary: (newPrimary) => {

      if (newPrimary) {
        primary = newPrimary;
      }

      this.assemble();

    },
    secondary: (newSecondary) => {

      if (newSecondary) {
        secondary = newSecondary;
      }

      this.assemble();

    }
  };

  this.assemble();

};
