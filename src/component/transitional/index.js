import { state } from '../state';

import { node } from '../../utility/node';
import { trimString } from '../../utility/trimString';
import { isValidString } from '../../utility/isValidString';
import { complexNode } from '../../utility/complexNode';

import moment from 'moment';

import './index.css';

export const Transitional = function({} = {}) {

  this.element = {
    transitional: node('div|class:transitional'),
    text: node('span|class:transitional-item transitional-text')
  };

  this.assemble = () => {

    if (state.get.current().header.transitional.show) {
      this.element.transitional.appendChild(this.element.text);
    };

  };

  this.update = () => {

    let value;

    switch (state.get.current().header.transitional.type) {
      case 'time-and-date':

        if ((state.get.current().header.date.day.show ||
            state.get.current().header.date.date.show ||
            state.get.current().header.date.month.show ||
            state.get.current().header.date.year.show) && (state.get.current().header.clock.second.show ||
            state.get.current().header.clock.minute.show ||
            state.get.current().header.clock.hour.show)) {
          if (state.get.current().header.date.day.show && !state.get.current().header.date.date.show && !state.get.current().header.date.month.show && !state.get.current().header.date.year.show) {

            value = 'The time and day is';

          } else {

            value = 'The time and date is';

          };
        } else if (
          state.get.current().header.date.day.show ||
          state.get.current().header.date.date.show ||
          state.get.current().header.date.month.show ||
          state.get.current().header.date.year.show
        ) {
          if (
            state.get.current().header.date.day.show &&
            !state.get.current().header.date.date.show &&
            !state.get.current().header.date.month.show &&
            !state.get.current().header.date.year.show
          ) {

            value = 'Today is';

          } else if (
            !state.get.current().header.date.day.show &&
            state.get.current().header.date.date.show &&
            !state.get.current().header.date.month.show &&
            !state.get.current().header.date.year.show
          ) {

            value = 'The date is';

          } else if (
            !state.get.current().header.date.day.show &&
            !state.get.current().header.date.date.show &&
            state.get.current().header.date.month.show &&
            !state.get.current().header.date.year.show
          ) {

            value = 'The month is';

          } else if (
            !state.get.current().header.date.day.show &&
            !state.get.current().header.date.date.show &&
            !state.get.current().header.date.month.show &&
            state.get.current().header.date.year.show
          ) {

            value = 'The year is';

          } else {

            value = 'The date is';

          };
        } else if (
          state.get.current().header.clock.second.show ||
          state.get.current().header.clock.minute.show ||
          state.get.current().header.clock.hour.show
        ) {

          value = 'The time is';

        };

        break;

      case 'its':
        value = 'It\'s';

        break;

    };

    this.element.text.innerHTML = value;

  };

  this.assemble();

  this.update();

  this.transitional = () => {
    return this.element.transitional;
  };

};
