import { state } from '../state';
import { header } from '../header';
import { searchEnginePreset } from '../searchEnginePreset';

import { node } from '../../utility/node';
import { trimString } from '../../utility/trimString';
import { complexNode } from '../../utility/complexNode';
import { isValidString } from '../../utility/isValidString';

import './index.css';

export const SearchEmpty = function() {

  this.element = {
    empty: node('div|class:search-empty'),
    description: complexNode({
      tag: 'p',
      text: `No bookmarks matching "${trimString(header.element.search.element.input.text.value)}" found`,
      attr: [{
        key: 'class',
        value: 'search-empty-string'
      }]
    }),
    helper: node('p|class:search-empty-helper small muted')
  };

  this.assemble = () => {

    switch (state.get.current().header.search.engine.selected) {

      case 'custom':

        if (isValidString(state.get.current().header.search.engine.custom.name)) {

          this.element.helper.textContent = 'Press "Enter" to Search ' + state.get.current().header.search.engine.custom.name;

        };

        break;

      default:

        this.element.helper.textContent = 'Press "Enter" to Search ' + searchEnginePreset[state.get.current().header.search.engine.selected].name;

        break;

    };

    this.element.empty.appendChild(this.element.description);

    this.element.empty.appendChild(this.element.helper);

  };

  this.empty = () => {
    return this.element.empty;
  };

  this.assemble();

};
