
import { Button } from '../button';

import { node } from '../../utility/node';

import './index.css';

export const MenuNav = function ({
  navData = {},
  action = false
} = {}) {

  this.state = {
    current: {},
    set: () => {

      navData.forEach((item, i) => {

        this.state.current[this.makeId(item.name)] = item.active;

      });

    },
    toggle: (name) => {

      for (let key in this.state.current) {
        this.state.current[key] = false;
      }

      this.state.current[this.makeId(name)] = true;

      navData.forEach((item, i) => {

        item.active = false;

        if (item.name === name || item.name.toLowerCase() === name) {
          item.active = true;
        }

      });

    }
  };

  this.makeId = (name) => {
    return name.split(' ')[0].toLowerCase();
  };

  this.element = {
    nav: node('div|class:menu-nav'),
    item: [],
  };

  this.init = () => {

    this.element.item.forEach((item, i) => {
      if (item.subLevel) {
        item.subLevel.classList.add('active');
        item.subLevel.setAttribute('style', '--menu-subnav-height: ' + item.subLevel.getBoundingClientRect().height + 'px;');
        item.subLevel.classList.remove('active');
      }
    });

    this.update();

  };

  this.update = () => {

    navData.forEach((item, i) => {

      if (this.state.current[this.makeId(item.name)]) {

        this.element.item[i].menuNavItem.classList.add('active');

        this.element.item[i].topLevel.classList.add('active');

        if (item.sub) {
          this.element.item[i].subLevel.classList.add('active');
        }

        if (this.element.item[i].subLevelItem.length > 0) {
          this.element.item[i].subLevelItem.forEach((item, i) => {
            item.tabIndex = 1;
          });
        }

      } else {

        this.element.item[i].menuNavItem.classList.remove('active');

        this.element.item[i].topLevel.classList.remove('active');

        if (item.sub) {
          this.element.item[i].subLevel.classList.remove('active');
        }

        if (this.element.item[i].subLevelItem.length > 0) {
          this.element.item[i].subLevelItem.forEach((item, i) => {
            item.tabIndex = -1;
          });
        }

      }

    });

  };

  this.nav = () => {

    return this.element.nav;

  };

  this.assemble = () => {

    navData.forEach((item, i) => {

      const navItem = {
        topLevel: false,
        subLevel: false,
        subLevelItem: []
      };

      const navButton = new Button({
        text: item.name,
        style: ['link'],
        block: true,
        classList: ['menu-nav-tab'],
        func: () => {

          this.state.toggle(item.name);

          this.update();

          if (action) {
            action();
          }

        }
      });

      navItem.topLevel = navButton.button;

      if (item.sub) {

        const subNav = node('div|class:menu-subnav');

        item.sub.forEach((item, i) => {

          const subLevelLink = node('a:' + item + '|href:#menu-content-item-' + this.makeId(item) + ',class:menu-nav-sub button button-link button-small,tabindex:1');

          subNav.appendChild(subLevelLink);

          navItem.subLevelItem.push(subLevelLink);

        });

        navItem.subLevel = subNav;

      }

      this.element.item.push(navItem);

    });

    this.element.item.forEach((item, i) => {

      item.menuNavItem = node('div|class:menu-nav-item');

      item.menuNavItem.appendChild(item.topLevel);

      if (item.subLevel) {
        item.menuNavItem.appendChild(item.subLevel);
      }

      this.element.nav.appendChild(item.menuNavItem);

    });

  };

  this.state.set();

  this.assemble();

};
