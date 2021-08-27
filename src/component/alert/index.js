import { icon } from '../icon';

import * as form from '../form';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';

import './index.css';

export const Alert = function({
  children = [],
  iconName = false
} = {}) {

  this.element = {
    alert: node('div|class:alert'),
    header: node('div|class:alert-header'),
    body: node('div|class:alert-body'),
    icon: node('div|class:alert-icon'),
    message: node('div|class:alert-message', children)
  };

  this.assemble = () => {

    if (iconName) {

      this.element.icon.appendChild(icon.render(iconName));

      this.element.header.appendChild(this.element.icon);

      this.element.alert.appendChild(this.element.header);

    };

    this.element.body.appendChild(this.element.message);

    this.element.alert.appendChild(this.element.body);

  };

  this.alert = () => {
    return this.element.alert;
  };

  this.wrap = () => {
    return form.wrap({
      children: [
        this.element.alert
      ]
    });
  };

  this.assemble();

};
