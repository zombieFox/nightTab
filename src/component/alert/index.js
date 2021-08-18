import { icon } from '../icon';

import * as form from '../form';

import { node } from '../../utility/node';

import './index.css';

export const Alert = function({
  message = [],
  iconName = false
} = {}) {

  this.element = {
    alert: node('div|class:alert'),
    icon: node('div|class:alert-icon'),
    body: node('div|class:alert-body'),
    message: node('div|class:alert-message')
  };

  this.assemble = () => {

    if (iconName) {

      this.element.icon.appendChild(icon.render(iconName));

      this.element.body.appendChild(this.element.icon);

    };

    if (message.length > 0) {
      message.forEach((item, i) => {

        this.element.message.appendChild(node('p:' + item));

      });
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
