
import * as form from '../form';

import { node } from '../../utility/node';

import './index.css';

export const DropFile = function ({
  heading = 'Text',
  dropAaction = false,
  enterAction = false,
  leaveAction = false,
  children = []
} = {}) {

  this.files = false;

  this.element = {
    drop: node('div|class:drop-file', children),
    heading: node(`p:${heading}|class:drop-file-heading small`)
  };

  this.assemble = () => {

    this.element.drop.appendChild(this.element.heading);

  };

  this.bind = () => {

    this.element.drop.addEventListener('dragenter', (event) => {

      event.stopPropagation();
      event.preventDefault();

      if (enterAction) {
        enterAction();
      }

    });

    this.element.drop.addEventListener('dragleave', (event) => {

      event.stopPropagation();
      event.preventDefault();

      this.element.drop.classList.remove('drop-file-over');

      if (leaveAction) {
        leaveAction();
      }

    });

    this.element.drop.addEventListener('dragover', (event) => {

      event.stopPropagation();
      event.preventDefault();

      this.element.drop.classList.add('drop-file-over');

    });

    this.element.drop.addEventListener('drop', (event) => {

      event.stopPropagation();
      event.preventDefault();

      this.element.drop.classList.remove('drop-file-over');

      this.files = event.dataTransfer.files;

      if (dropAaction) {
        dropAaction();
      }

    });

  };

  this.drop = () => {
    return this.element.drop;
  };

  this.wrap = () => {
    return form.wrap({
      children: [
        this.element.drop
      ]
    });
  };

  this.assemble();

  this.bind();

};
