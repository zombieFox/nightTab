
import { Button } from '../button';

import { node } from '../../utility/node';

import './index.css';

export const Tab = function ({
  group = []
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

    group.forEach((item, i) => {

      item.toggle = new Button({
        text: item.tabText,
        classList: ['tab-nav-button', 'form-group-item-equal'],
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
    group.forEach((item, i) => {
      item.active = false;
    });
  };

  this.indicator = {
    render: () => {

      const navBox = this.element.tab.getBoundingClientRect();

      group.forEach((item, i) => {

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

      this.element.indicator.addEventListener('animationend', (event) => {
        this.element.tab.classList.add('tab-nav-indicator-active');
      });

      this.element.indicator.addEventListener('transitionend', (event) => { });

    }
  };

  this.content = {
    render: () => {
      group.forEach((item, i) => {

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

      group.forEach((item, i) => {

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

  this.assemble();

  this.content.render();

};
