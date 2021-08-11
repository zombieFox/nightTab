import { form } from '../form';
import { icon } from '../icon';

import { complexNode } from '../../utility/complexNode';
import { node } from '../../utility/node';

import './index.css';

export const Collapse = function({
  type = false,
  radioGroup = false,
  checkbox = false,
  target = false
} = {}) {

  target.forEach((item, i) => {
    item.state = {
      collapsed: true
    };

    item.area = node('div|class:collapse-area');

    item.spacer = node('div|class:collapse-spacer');
  });

  this.target = () => {
    return target;
  };

  this.element = {
    collapse: node('div|class:collapse')
  };

  this.collapse = () => {
    target.forEach((item, i) => {
      item.spacer.appendChild(item.content);

      item.area.appendChild(item.spacer);

      this.element.collapse.appendChild(item.area);
    });

    return this.element.collapse;
  };

  this.toggle = () => {
    target.forEach((item, i) => {
      if (item.state.collapsed) {
        item.state.collapsed = false;
      } else {
        item.state.collapsed = true;
      };
    });

    this.update();
  };

  this.renderTarget = (state, area) => {
    if (state) {
      area.classList.add('is-collapsed');
      // area.classList.remove('is-pop');
      area.setAttribute('aria-hidden', true);
    } else {
      area.classList.remove('is-collapsed');
      // area.classList.add('is-pop');
      area.removeAttribute('aria-hidden');
    };
  };

  this.renderToggle = (state, toggle) => {
    if (state) {
      toggle.classList.remove('active');
      toggle.classList.remove('is-collapsed');
    } else {
      toggle.classList.add('active');
      toggle.classList.add('is-collapsed');
    };
  };

  this.update = () => {

    switch (type) {

      case 'radio':

        const selectedRadioValue = radioGroup.value();

        target.forEach((item, i) => {
          this.renderTarget(!(item.id === selectedRadioValue), item.area);
        });

        break;

      case 'checkbox':

        let state = true;

        if (checkbox.length > 1) {

          let allCheckboxState = [];

          checkbox.forEach(item => allCheckboxState.push(item.checked()));

          state = allCheckboxState.some(item => item === true);

        } else {

          state = checkbox.checked();

        };

        target.forEach((item, i) => {
          this.renderTarget(!state, item.area);
        });

        break;

      case 'toggle':

        target.forEach((item, i) => {

          this.renderTarget(item.state.collapsed, item.area);

          if (item.toggle) {
            this.renderToggle(item.state.collapsed, item.toggle);
          };

        });

        break;

    };

  };

  this.update();

};
