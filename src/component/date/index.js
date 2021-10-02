import { state } from '../state';

import { node } from '../../utility/node';
import { ordinalWord } from '../../utility/ordinalWord';
import { wordNumber } from '../../utility/wordNumber';
import { trimString } from '../../utility/trimString';
import { isValidString } from '../../utility/isValidString';
import { complexNode } from '../../utility/complexNode';
import { clearChildNode } from '../../utility/clearChildNode';

import moment from 'moment';

import './index.css';

export const Date = function ({ } = {}) {

  this.now;

  this.bind = {};

  this.bind.tick = () => {

    window.setInterval(() => {
      this.update();
    }, 1000);

  };

  this.element = {
    date: node('div|class:date'),
    day: node('span|class:date-item date-day'),
    dateOfMonth: node('span|class:date-item date-date'),
    month: node('span|class:date-item date-month'),
    year: node('span|class:date-item date-year')
  };

  this.string = {};

  this.string.day = () => {

    let value;

    switch (state.get.current().header.date.day.display) {

      case 'word':

        value = this.now.format('dddd');

        if (state.get.current().header.date.day.length == 'short') {
          value = value.substring(0, 3);
        }

        break;

      case 'number':

        value = this.now.day();

        if (state.get.current().header.date.day.weekStart == 'monday') {
          if (value == 0) {
            value = 7;
          }
        } else if (state.get.current().header.date.day.weekStart == 'sunday') {
          value = value + 1;
        }

        break;

    }

    return value;

  };

  this.string.dateOfMonth = () => {

    let value;

    switch (state.get.current().header.date.date.display) {

      case 'word':

        if (state.get.current().header.date.date.ordinal) {
          value = ordinalWord(wordNumber(this.now.date()));
        } else {
          value = wordNumber(this.now.date());
        }

        break;

      case 'number':

        if (state.get.current().header.date.date.ordinal) {
          value = this.now.format('Do');
        } else {
          value = this.now.format('D');
        }

        break;

    }

    return value;

  };

  this.string.month = () => {

    let value;

    switch (state.get.current().header.date.month.display) {

      case 'word':

        value = this.now.format('MMMM');
        if (state.get.current().header.date.month.length == 'short') {
          value = value.substring(0, 3);
        }

        break;

      case 'number':

        if (state.get.current().header.date.month.ordinal) {
          value = this.now.format('Mo');
        } else {
          value = this.now.format('M');
        }

        break;

    }

    return value;

  };

  this.string.year = () => {

    let value;

    switch (state.get.current().header.date.year.display) {

      case 'word':

        value = wordNumber(this.now.format('YYYY'));

        break;

      case 'number':

        value = this.now.format('YYYY');

        break;

    }

    return value;

  };

  this.assemble = () => {

    clearChildNode(this.element.date);

    if (state.get.current().header.date.day.show) {
      this.element.date.appendChild(this.element.day);
    }

    if (state.get.current().header.date.date.show && state.get.current().header.date.month.show) {

      switch (state.get.current().header.date.format) {

        case 'date-month':

          if (state.get.current().header.date.date.show) {
            this.element.date.appendChild(this.element.dateOfMonth);
          }

          if (state.get.current().header.date.month.show) {
            this.element.date.appendChild(this.element.month);
          }

          break;

        case 'month-date':

          if (state.get.current().header.date.month.show) {
            this.element.date.appendChild(this.element.month);
          }

          if (state.get.current().header.date.date.show) {
            this.element.date.appendChild(this.element.dateOfMonth);
          }

          break;

      }

    } else {

      if (state.get.current().header.date.date.show) {
        this.element.date.appendChild(this.element.dateOfMonth);
      }

      if (state.get.current().header.date.month.show) {
        this.element.date.appendChild(this.element.month);
      }

    }

    if (state.get.current().header.date.year.show) {
      this.element.date.appendChild(this.element.year);
    }

    if (state.get.current().header.date.separator.show) {

      let separatorCharacter;

      if (isValidString(state.get.current().header.date.separator.text)) {
        separatorCharacter = trimString(state.get.current().header.date.separator.text);
      } else {
        separatorCharacter = '/';
      }

      let parts = this.element.date.querySelectorAll('span');

      if (parts.length > 1) {

        parts.forEach((item, i) => {
          if (i > 0) {

            let separator = complexNode({
              tag: 'span',
              text: separatorCharacter,
              attr: [{
                key: 'class',
                value: 'date-item date-separator'
              }]
            });

            this.element.date.insertBefore(separator, item);

          }
        });

      }

    }

  };

  this.update = () => {

    this.assemble();

    this.now = moment();

    if (state.get.current().header.date.day.show) {
      this.element.day.innerHTML = this.string.day();
    }

    if (state.get.current().header.date.date.show) {
      this.element.dateOfMonth.innerHTML = this.string.dateOfMonth();
    }

    if (state.get.current().header.date.month.show) {
      this.element.month.innerHTML = this.string.month();
    }

    if (state.get.current().header.date.year.show) {
      this.element.year.innerHTML = this.string.year();
    }

  };

  this.assemble();

  this.update();

  this.bind.tick();

  this.date = () => {
    return this.element.date;
  };

};
