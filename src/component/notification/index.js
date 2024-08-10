import { Button } from '../button';

import { node } from '../../utility/node';

import './index.css';

export const Notification = function ({
  children = [],
  dismissAction = false,
} = {}) {

  this.element = {
    notification: node('div|class:notification'),
    body: node('div|class:notification-body'),
    message: node('div|class:notification-message', children),
    dismiss: new Button({
      text: 'Dismiss',
      title: 'Dismiss',
      size: 'small',
      style: ['ring'],
      func: () => {

        if (dismissAction) {
          dismissAction();
        }

        this.element.notification.remove();

      }
    }),
  };

  this.assemble = () => {

    this.element.body.appendChild(this.element.message);

    this.element.body.appendChild(this.element.dismiss.button);

    this.element.notification.appendChild(this.element.body);

  };

  this.render = () => {

    const body = document.querySelector('body');

    body.appendChild(layout.element.notification);

  };

  this.close = () => {



  };

  this.notification = () => {
    return this.element.notification;
  };

  this.assemble();

};
