import { menu } from '../menu';

import { Button } from '../button';

import { node } from '../../utility/node';

import './index.css';

export const MenuClose = function () {

  this.element = {
    close: node('div|class:menu-close')
  };

  this.button = new Button({
    text: 'Close settings menu',
    srOnly: true,
    style: ['link'],
    iconName: 'cross',
    classList: ['menu-close-button'],
    func: () => {
      menu.close();
    }
  });

  this.assemble = () => {

    this.element.close.appendChild(this.button.button);

  };

  this.close = () => {

    return this.element.close;

  };

  this.assemble();

};
