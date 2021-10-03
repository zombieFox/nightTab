import { state } from '../state';
import { data } from '../data';
import { pageLock } from '../pageLock';

import { Shade } from '../shade';
import { MenuNav } from '../menuNav';
import { MenuClose } from '../menuClose';
import { MenuContent } from '../menuContent';
import { KeyboardShortcut } from '../keyboardShortcut';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';

import './index.css';

export const MenuFrame = function ({
  navData = []
} = {}) {

  this.element = {
    menu: node('section|class:menu'),
    area: node('div|class:menu-area'),
    content: node('div|class:menu-content')
  };

  this.menuNav = new MenuNav({
    navData: navData,
    action: () => {
      this.content();
      this.element.content.scrollTop = 0;
    }
  });

  this.menuClose = new MenuClose();

  this.shade = new Shade();

  this.class = () => {

    const html = document.querySelector('html');

    if (state.get.current().menu) {
      html.classList.add('is-menu-open');
    } else {
      html.classList.remove('is-menu-open');
    }

  };

  this.open = () => {

    state.get.current().menu = true;

    data.save();

    const body = document.querySelector('body');

    this.element.menu.classList.add('is-transparent');

    this.element.menu.addEventListener('transitionend', (event) => {

      if (event.propertyName === 'opacity' && getComputedStyle(this.element.menu).opacity == 0) {

        body.removeChild(this.element.menu);

      }

    });

    this.shade.open();

    this.assemble();

    body.appendChild(this.element.menu);

    getComputedStyle(this.element.menu).opacity;

    this.element.menu.classList.remove('is-transparent');

    this.element.menu.classList.add('is-opaque');

    this.bind.add();

    this.focus.set();

    this.menuNav.init();

    this.content();

    this.class();

    pageLock.render();

  };

  this.close = () => {

    state.get.current().menu = false;

    data.save();

    this.element.menu.classList.remove('is-opaque');

    this.element.menu.classList.add('is-transparent');

    this.bind.remove();

    this.shade.close();

    this.locationReset();

    this.class();

    pageLock.render();

    clearTimeout(this.delayedForceRemove);

    this.delayedForceRemove = setTimeout(() => {

      const body = document.querySelector('body');

      if (body.contains(this.element.menu)) {
        body.removeChild(this.element.menu);
      }

    }, 6000);

  };

  this.delayedForceRemove = null;

  this.locationReset = () => {

    const location = window.location;

    if ('pushState' in history) {
      history.pushState('', document.title, location.origin + location.pathname + location.search);
    }

  };

  this.bind = {
    add: () => {

      window.addEventListener('mouseup', this.clickOut);

      window.addEventListener('keydown', this.focus.loop);

      this.esc.add();

      this.ctrAltA.add();

      this.ctrAltG.add();

    },
    remove: () => {

      window.removeEventListener('mouseup', this.clickOut);

      window.removeEventListener('keydown', this.focus.loop);

      this.esc.remove();

      this.ctrAltA.remove();

      this.ctrAltG.remove();

    }
  };

  this.esc = new KeyboardShortcut({
    keycode: 27,
    action: () => {
      this.close();
    }
  });

  this.ctrAltA = new KeyboardShortcut({
    keycode: 65,
    ctrl: true,
    alt: true,
    action: () => {
      this.close();
    }
  });

  this.ctrAltG = new KeyboardShortcut({
    keycode: 71,
    ctrl: true,
    alt: true,
    action: () => {
      this.close();
    }
  });

  this.clickOut = (event) => {

    const path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(this.element.menu)) {
      this.close();
    }

  };

  this.focus = {
    set: () => {

      const allFocusElement = document.querySelector('.menu').querySelectorAll('[tabindex]');

      allFocusElement[0].focus();

    },
    loop: (event) => {

      const allFocusElement = document.querySelector('.menu').querySelectorAll('[tabindex]');

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

        }

      }

    }
  };

  this.assemble = () => {

    this.element.area.appendChild(this.menuNav.nav());

    this.element.area.appendChild(this.menuClose.close());

    this.element.area.appendChild(this.element.content);

    this.element.menu.appendChild(this.element.area);

  };

  this.content = () => {

    clearChildNode(this.element.content);

    navData.forEach((item) => {

      if (item.active) {

        if (item.overscroll) {
          this.element.content.classList.add('menu-content-overscroll');
        } else {
          this.element.content.classList.remove('menu-content-overscroll');
        }

        const menuContent = new MenuContent({
          activeNavData: item,
          container: this.element.content
        });

        menuContent.content();

      }

    });

  };

};
