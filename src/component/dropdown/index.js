import { Button } from '../button';
import { KeyboardShortcut } from '../keyboardShortcut';

import { node } from '../../utility/node';

import './index.css';

export const Dropdown = function ({
  title = false,
  text = 'Dropdown',
  menuItem = [],
  buttonStyle = [],
  buttonClassList = [],
  srOnly = false,
  iconName = false,
  persist = false
} = {}) {

  this.state = {
    open: false
  };

  this.element = {
    menu: node('div|class:dropdown-menu'),
    content: node('div|class:dropdown-content'),
    toggle: new Button({
      title: title,
      text: text,
      srOnly: srOnly,
      iconName: iconName,
      style: buttonStyle,
      classList: buttonClassList,
      func: () => {

        if (this.state.open) {
          this.close();
        } else {
          this.open();
        }

      }
    }),
    menuItem: []
  };

  this.toggle = this.element.toggle.button;

  this.buttonStyle = {};

  this.buttonStyle.update = (style) => {

    this.element.toggle.style.update(style);

  };

  this.open = () => {

    this.state.open = true;

    this.element.toggle.button.classList.add('active');

    const body = document.querySelector('body');

    body.appendChild(this.element.menu);

    this.position();

    this.bind.add();

  };

  this.close = () => {

    this.state.open = false;

    this.element.toggle.button.classList.remove('active');

    const body = document.querySelector('body');

    if (body.contains(this.element.menu)) {
      body.removeChild(this.element.menu);
    }

    this.bind.remove();

  };

  this.esc = new KeyboardShortcut({ keycode: 27, action: () => { this.close(); } });

  this.ctrAltM = new KeyboardShortcut({ keycode: 77, ctrl: true, alt: true, action: () => { this.close(); } });

  this.ctrAltG = new KeyboardShortcut({ keycode: 71, ctrl: true, alt: true, action: () => { this.close(); } });

  this.ctrAltA = new KeyboardShortcut({ keycode: 65, ctrl: true, alt: true, action: () => { this.close(); } });

  this.bind = {
    add: () => {

      window.addEventListener('mouseup', this.clickOut);

      this.esc.add();

      this.ctrAltM.add();

      this.ctrAltG.add();

      this.ctrAltA.add();

    },
    remove: () => {

      window.removeEventListener('mouseup', this.clickOut);

      this.esc.remove();

      this.ctrAltM.remove();

      this.ctrAltG.remove();

      this.ctrAltA.remove();

    }
  };

  this.clickOut = (event) => {

    const path = event.path || (event.composedPath && event.composedPath());

    if (!persist) {

      if (!path.includes(this.element.toggle.button) && !path.includes(this.element.menu)) {

        this.close();

      }

    }

  };

  this.position = () => {

    const vWidth = window.innerWidth;

    const vHeight = window.innerHeight;

    const dropdownRect = this.element.toggle.button.getBoundingClientRect();

    const menuRect = this.element.menu.getBoundingClientRect();

    let menuTop;

    if ((dropdownRect.bottom + menuRect.height) > vHeight) {
      menuTop = dropdownRect.top - menuRect.height;
    } else {
      menuTop = dropdownRect.bottom;
    }

    let menuLeft = dropdownRect.left + (dropdownRect.width / 2) - (menuRect.width / 2);

    if (menuLeft < 0) {
      menuLeft = 0;
    } else if ((menuLeft + menuRect.width) > vWidth) {
      menuLeft = vWidth - menuRect.width;
    }

    this.element.menu.style.setProperty('--dropdown-menu-top', menuTop);

    this.element.menu.style.setProperty('--dropdown-menu-left', menuLeft);

  };

  this.assemble = () => {

    if (menuItem.length > 0) {

      menuItem.forEach((item) => {

        const dropdownMenuButton = new Button({
          text: item.text,
          iconName: item.iconName,
          classList: ['dropdown-menu-button']
        });

        this.element.menuItem.push(dropdownMenuButton);

        dropdownMenuButton.button.addEventListener('click', () => {

          if (item.action) { item.action(); }

          if (!persist) { this.close(); }

        });

        this.element.content.appendChild(dropdownMenuButton.button);

      });

      this.element.menu.appendChild(this.element.content);

    }

  };

  this.disable = () => {

    this.element.toggle.disable();

    this.element.menuItem.forEach((item) => {

      item.disable();

    });

  };

  this.enable = () => {

    this.element.toggle.enable();

    this.element.menuItem.forEach((item) => {

      item.enable();

    });

  };

  this.assemble();

};