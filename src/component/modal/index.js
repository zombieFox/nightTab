import { state } from '../state';
import { data } from '../data';
import { pageLock } from '../pageLock';

import { Button } from '../button';
import { Shade } from '../shade';
import { KeyboardShortcut } from '../keyboardShortcut';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';
import { trimString } from '../../utility/trimString';
import { isValidString } from '../../utility/isValidString';

import './index.css';

export const Modal = function({
  heading = false,
  content = false,
  openAction = false,
  successText = 'OK',
  successAction = false,
  cancelText = 'Cancel',
  cancelAction = false,
  closeAction = false,
  width = 'medium',
  maxHeight = false,
  maxHeadingLength = 50
} = {}) {

  this.element = {
    modal: node('div|class:modal'),
    heading: {
      heading: node('div|class:modal-heading'),
      text: node('h1|class:modal-heading-text,tabindex:1')
    },
    content: {
      wrapper: node('div|class:modal-content-wrapper'),
      content: node('div|class:modal-content')
    },
    control: node('div|class:modal-control')
  };

  this.shade = new Shade();

  this.open = () => {

    state.get.current().modal = true;

    const body = document.querySelector('body');

    this.element.modal.classList.add('is-transparent');

    this.element.modal.addEventListener('transitionend', (event) => {

      if (event.propertyName === 'opacity' && getComputedStyle(this.element.modal).opacity == 0) {

        body.removeChild(this.element.modal);

      };

    });

    this.shade.open();

    this.style();

    this.assemble();

    body.appendChild(this.element.modal);

    getComputedStyle(this.element.modal).opacity;

    this.element.modal.classList.remove('is-transparent');

    this.element.modal.classList.add('is-opaque');

    this.bind.add();

    this.focus.set();

    if (openAction) {
      openAction();
    };

    pageLock.render();

  };

  this.close = () => {

    state.get.current().modal = false;

    this.element.modal.classList.remove('is-opaque');

    this.element.modal.classList.add('is-transparent');

    this.bind.remove();

    this.shade.close();

    if (closeAction) {
      closeAction();
    };

    clearTimeout(this.delayedForceRemove);

    this.delayedForceRemove = setTimeout(() => {

      const body = document.querySelector('body');

      if (body.contains(this.element.modal)) {
        body.removeChild(this.element.modal)
      };

    }, 6000);

    pageLock.render();

  };

  this.delayedForceRemove = null;

  this.bind = {
    add: () => {

      window.addEventListener('mouseup', this.clickOut);

      window.addEventListener('keydown', this.focus.loop);

      this.esc.add();

      this.ctrAltM.add();

      this.ctrAltG.add();

      this.ctrAltA.add();

    },
    remove: () => {

      window.removeEventListener('mouseup', this.clickOut);

      window.removeEventListener('keydown', this.focus.loop);

      this.esc.remove();

      this.ctrAltM.remove();

      this.ctrAltG.remove();

      this.ctrAltA.remove();

    }
  };

  this.esc = new KeyboardShortcut({ keycode: 27, action: () => { this.close(); } });

  this.ctrAltM = new KeyboardShortcut({ keycode: 77, ctrl: true, alt: true, action: () => { this.close(); } });

  this.ctrAltG = new KeyboardShortcut({ keycode: 71, ctrl: true, alt: true, action: () => { this.close(); } });

  this.ctrAltA = new KeyboardShortcut({ keycode: 65, ctrl: true, alt: true, action: () => { this.close(); } });

  this.clickOut = (event) => {

    const path = event.path || (event.composedPath && event.composedPath());

    const suggest = document.querySelector('.suggest');

    if (!path.includes(this.element.modal) && !path.includes(suggest)) {
      this.close();
    };

  };

  this.focus = {
    set: () => {
      this.element.heading.text.focus();
    },
    loop: (event) => {

      const allFocusElement = document.querySelector('.modal').querySelectorAll('[tabindex]');

      if (allFocusElement.length > 0) {

        const firstElement = allFocusElement[0];

        const lastElement = allFocusElement[allFocusElement.length - 1];

        if (event.keyCode == 9 && event.shiftKey) {

          if (document.activeElement === firstElement) {
            lastElement.focus();

            event.preventDefault();
          }

        } else if (event.keyCode == 9) {

          if (document.activeElement === lastElement) {
            firstElement.focus();

            event.preventDefault();
          }

        };

      };


    }
  };

  this.style = () => {
    if (typeof width === 'number') {

      this.element.modal.style.setProperty('--modal-width', width);

    } else {

      switch (width) {
        case 'small':
          this.element.modal.style.setProperty('--modal-width', 30);
          break;

        default:
        case 'medium':
          this.element.modal.style.setProperty('--modal-width', 50);
          break;

        case 'large':
          this.element.modal.style.setProperty('--modal-width', 70);
          break;

      };

    };
  };

  this.successButton = new Button({
    text: successText,
    block: false,
    style: ['line'],
    classList: ['modal-control-button'],
    func: () => {

      if (successAction) {
        successAction();
      };

      this.close();

    }
  });

  this.cancelButton = new Button({
    text: cancelText,
    block: false,
    style: ['line'],
    classList: ['modal-control-button'],
    func: () => {

      if (cancelAction) {
        cancelAction();
      };

      this.close();

    }
  });

  this.assemble = () => {

    if (heading && isValidString(heading)) {

      let headingString = heading;

      if (headingString.length > maxHeadingLength) {
        headingString = trimString(headingString.substring(0, maxHeadingLength)) + '...';
      };

      this.element.heading.text.innerHTML = headingString;

      this.element.heading.heading.appendChild(this.element.heading.text);

      this.element.content.content.appendChild(this.element.heading.heading);

    };

    if (content) {
      if (typeof content == 'string') {

        const para = complexNode({ tag: 'p', text: content });

        this.element.content.content.appendChild(para);

      } else {

        this.element.content.content.appendChild(content);

      };
    };

    this.element.content.wrapper.appendChild(this.element.content.content);

    this.element.modal.appendChild(this.element.content.wrapper);

    this.element.control.appendChild(this.cancelButton.button);

    this.element.control.appendChild(this.successButton.button);

    this.element.modal.appendChild(this.element.control);

    if (maxHeight) {
      this.element.modal.classList.add('modal-max-height');
    };

  };

  this.modal = () => {

    state.get.current().modal = false;

    return this.element.modal;

  };

};
