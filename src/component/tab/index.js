import { form } from '../form';

import { Button } from '../button';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';

import './index.css';

export const Tab = function({
  group = []
} = {}) {

  this.tabElement = node('div|class:tab');

  this.tabNav = node('div|class:tab-nav form-group form-group-horizontal form-group-block');

  this.tabContent = node('div|class:tab-content');

  this.tabElement.appendChild(this.tabNav);

  this.tabElement.appendChild(this.tabContent);

  this.deactive = () => {
    group.forEach((item, i) => {
      item.active = false;
    });
  };

  group.forEach((item, i) => {
    item.toggle = new Button({
      text: item.tabText,
      style: ['line'],
      classList: ['form-group-item-equal'],
      func: () => {

        this.deactive();
        item.active = true;
        this.update();

      }
    });

    this.tabNav.appendChild(item.toggle.button);

    this.tabContent.appendChild(item.area);
  });

  this.update = () => {
    group.forEach((item, i) => {

      if (item.active) {
        item.toggle.active();
        item.area.classList.remove('is-hidden');
      } else {
        item.toggle.deactive();
        item.area.classList.add('is-hidden');
      };

    });
  };

  this.update();

  this.tab = () => {
    return this.tabElement;
  };

};
