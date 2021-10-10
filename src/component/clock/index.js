import { state } from '../state';

import { node } from '../../utility/node';
import { wordNumber } from '../../utility/wordNumber';
import { trimString } from '../../utility/trimString';
import { isValidString } from '../../utility/isValidString';
import { complexNode } from '../../utility/complexNode';
import { clearChildNode } from '../../utility/clearChildNode';

import moment from 'moment';

import './index.css';

export const Clock = function () {

  this.now;

  this.bind = {};

  this.bind.tick = () => {

    window.setInterval(() => {
      this.update();
    }, 1000);

  };

  this.element = {
    clock: node('div|class:clock'),
    hour: node('span|class:clock-item clock-hour'),
    minute: node('span|class:clock-item clock-minute'),
    second: node('span|class:clock-item clock-second'),
    meridiem: node('span|class:clock-item clock-meridiem')
  };

  this.string = {};

  this.string.hour = () => {

    let value;

    switch (state.get.current().header.clock.hour.display) {

      case 'word':

        value = this.now.hours();

        if (!state.get.current().header.clock.hour24.show && this.now.hours() > 12) {
          value = value - 12;
        }

        if (!state.get.current().header.clock.hour24.show && this.now.hours() == 0) {
          value = 12;
        }

        value = wordNumber(value);

        if (state.get.current().header.clock.hour24.show && this.now.hours() > 0 && this.now.hours() < 10) {
          value = 'Zero ' + value;
        }

        break;

      case 'number':

        value = this.now.hours();

        if (!state.get.current().header.clock.hour24.show && this.now.hours() > 12) {
          value = value - 12;
        }

        if (!state.get.current().header.clock.hour24.show && this.now.hours() == 0) {
          value = 12;
        }

        if (state.get.current().header.clock.hour24.show && this.now.hours() < 10) {
          value = '0' + value;
        }

        break;

    }

    return value;

  };

  this.string.minute = () => {

    let value;

    switch (state.get.current().header.clock.minute.display) {

      case 'word':

        value = wordNumber(this.now.minutes());

        if (this.now.minutes() > 0 && this.now.minutes() < 10) {
          value = 'Zero ' + value;
        }

        break;

      case 'number':

        value = this.now.minutes();

        if (this.now.minutes() < 10) {
          value = '0' + value;
        }

        break;

    }

    return value;

  };

  this.string.second = () => {

    let value;

    switch (state.get.current().header.clock.second.display) {

      case 'word':

        value = wordNumber(this.now.seconds());

        if (this.now.seconds() > 0 && this.now.seconds() < 10) {
          value = 'Zero ' + value;
        }

        break;

      case 'number':

        value = this.now.seconds();

        if (this.now.seconds() < 10) {
          value = '0' + value;
        }

        break;

    }

    return value;

  };

  this.string.meridiem = () => {

    return this.now.format('A');

  };

  this.assemble = () => {

    clearChildNode(this.element.clock);

    if (state.get.current().header.clock.hour.show) {
      this.element.clock.appendChild(this.element.hour);
    }

    if (state.get.current().header.clock.minute.show) {
      this.element.clock.appendChild(this.element.minute);
    }

    if (state.get.current().header.clock.second.show) {
      this.element.clock.appendChild(this.element.second);
    }

    if (!state.get.current().header.clock.hour24.show && state.get.current().header.clock.meridiem.show) {
      this.element.clock.appendChild(this.element.meridiem);
    }

    if (state.get.current().header.clock.separator.show) {

      let separatorCharacter;

      if (isValidString(state.get.current().header.clock.separator.text)) {
        separatorCharacter = trimString(state.get.current().header.clock.separator.text);
      } else {
        separatorCharacter = ':';
      }

      let parts = this.element.clock.querySelectorAll('span');

      if (parts.length > 1) {

        parts.forEach((item, i) => {

          if (i > 0 && item != this.element.meridiem) {

            let separator = complexNode({
              tag: 'span',
              text: separatorCharacter,
              attr: [{
                key: 'class',
                value: 'clock-item clock-separator'
              }]
            });

            this.element.clock.insertBefore(separator, item);

          }
        });

      }

    }

  };

  this.update = () => {

    this.assemble();

    this.now = moment();

    if (state.get.current().header.clock.hour.show) {
      this.element.hour.innerHTML = this.string.hour();
    }

    if (state.get.current().header.clock.minute.show) {
      this.element.minute.innerHTML = this.string.minute();
    }

    if (state.get.current().header.clock.second.show) {
      this.element.second.innerHTML = this.string.second();
    }

    if (!state.get.current().header.clock.hour24.show && state.get.current().header.clock.meridiem.show) {
      this.element.meridiem.innerHTML = this.string.meridiem();
    }

  };

  this.assemble();

  this.update();

  this.bind.tick();

  this.clock = () => {
    return this.element.clock;
  };

};
