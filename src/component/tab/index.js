import { Button } from '../button';

import { node } from '../../utility/node';

import './index.css';

export const Tab = function ({
  hideContent = false,
  group = [],
} = {}) {

  this.element = {
    tab: node('div|class:tab'),
    nav: node('div|class:tab-nav'),
    group: node('div|class:tab-nav-group'),
    indicator: node('div|class:tab-nav-indicator'),
    content: node('div|class:tab-content')
  };

  this.assemble = () => {

    this.element.nav.appendChild(this.element.indicator);

    this.element.nav.appendChild(this.element.group);

    this.element.tab.appendChild(this.element.nav);

    this.element.tab.appendChild(this.element.content);

    group.forEach((item) => {

      item.toggle = new Button({
        text: item.tabText,
        classList: ['tab-nav-button'],
        func: () => {

          this.deactive();

          item.active = true;

          this.content.render();

          this.nav.render();

          this.indicator.render();

        }
      });

      this.element.group.appendChild(item.toggle.button);

      this.element.content.appendChild(item.area);

    });

  };

  this.deactive = () => {
    group.forEach((item) => {
      item.active = false;
    });
  };

  this.indicator = {
    render: () => {

      const navBox = this.element.tab.getBoundingClientRect();

      group.forEach((item) => {

        if (item.active) {

          const itemBox = item.toggle.button.getBoundingClientRect();

          this.element.tab.style.setProperty('--tab-indicator-top', Math.round(itemBox.top - navBox.top));
          this.element.tab.style.setProperty('--tab-indicator-left', Math.round(itemBox.left - navBox.left));
          this.element.tab.style.setProperty('--tab-indicator-width', Math.round(itemBox.width));
          this.element.tab.style.setProperty('--tab-indicator-height', Math.round(itemBox.height));

        }

      });

    },
    bind: () => {

      this.element.indicator.addEventListener('animationend', () => {
        this.element.tab.classList.add('tab-nav-indicator-active');
      });

    }
  };

  this.content = {
    render: () => {

      if (hideContent) {

        this.element.tab.classList.add('tab-hide-content');

      }

      group.forEach((item) => {

        if (item.active) {
          item.area.classList.remove('is-hidden');
        } else {
          item.area.classList.add('is-hidden');
        }

      });

    }
  };

  this.nav = {
    render: () => {

      group.forEach((item) => {

        if (item.active) {
          item.toggle.active();
        } else {
          item.toggle.deactive();
        }

      });

    }
  };

  this.tab = () => {
    return this.element.tab;
  };

  this.update = () => {

    this.indicator.bind();

    this.indicator.render();

    this.nav.render();

  };

  this.disable = () => {

    this.element.tab.classList.add('disabled');

    group.forEach((item) => {

      item.toggle.disable()

    });

  };

  this.enable = () => {

    this.element.tab.classList.remove('disabled');

    group.forEach((item) => {

      item.toggle.enable()

    });

  };

  this.assemble();

  this.content.render();

};