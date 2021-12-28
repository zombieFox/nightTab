import { language } from '../../language';

import { state } from '../state';

import { node } from '../../utility/node';
import { trimString } from '../../utility/trimString';
import { isValidString } from '../../utility/isValidString';

import moment from 'moment';

import './index.css';

export const Greeting = function() {

  this.now;

  this.element = {
    greeting: node('div|class:greeting'),
    text: node('span|class:greeting-item greeting-text')
  };

  this.assemble = () => {

    if (state.get.current().header.greeting.show) {
      this.element.greeting.appendChild(this.element.text);
    }

  };

  this.update = () => {

    const goodMessage = language.current.header.greeting.good;

    this.now = moment();

    let value;

    switch (state.get.current().header.greeting.type) {

      case 'none':

        value = '';

        break;

      case 'good':

        value = goodMessage[Math.floor(this.now.hours() / 6)];

        break;

      case 'hello':

        value = language.current.header.greeting.hello;

        break;

      case 'hi':

        value = language.current.header.greeting.hi;

        break;

      case 'custom':

        if (isValidString(state.get.current().header.greeting.custom)) {

          value = trimString(state.get.current().header.greeting.custom);

        } else {

          value = goodMessage[Math.floor(this.now.hours() / 6)];

        }

        break;

    }

    if (isValidString(state.get.current().header.greeting.name)) {

      if (state.get.current().header.greeting.type === 'none') {

        value = value + trimString(state.get.current().header.greeting.name);

      } else {

        value = value + ', ' + trimString(state.get.current().header.greeting.name);

      }

    }

    this.element.text.innerHTML = value;

  };

  this.assemble();

  this.update();

  this.greeting = () => {
    return this.element.greeting;
  };

};
