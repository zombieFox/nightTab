import { fontawesome } from '../fontawesome';

import { Button } from '../button';

import { isValidString } from '../../utility/isValidString';
import { trimString } from '../../utility/trimString';
import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';

import './index.css';

export const Suggest = function ({
  input = false,
  widthElement = false,
  type = false,
  postFocus = false,
  action = false
} = {}) {

  this.state = {
    open: false
  };

  this.element = {
    suggest: node('div|class:suggest'),
    list: node('div|class:suggest-list list-unstyled'),
    input: input
  };

  this.open = () => {

    const results = this.suggestItems();

    if (results.length > 0) {

      if (this.state.open) {

        this.style();

        clearChildNode(this.element.list);

        this.populateList(results);

      } else {

        const body = document.querySelector('body');

        this.style();

        this.element.suggest.classList.add('is-transparent');

        clearChildNode(this.element.list);

        this.populateList(results);

        body.appendChild(this.element.suggest);

        getComputedStyle(this.element.suggest).opacity;

        this.element.suggest.classList.remove('is-transparent');

        this.element.suggest.classList.add('is-opaque');

        this.bind.add();

        this.state.open = true;

      }

    } else {

      this.close();

    }

  };

  this.close = () => {

    this.element.suggest.classList.remove('is-opaque');

    this.element.suggest.classList.add('is-transparent');

  };

  this.bind = {};

  this.bind.input = () => {

    this.element.input.addEventListener('focus', () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(this.open, 300);
    });

    this.element.input.addEventListener('input', () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(this.open, 300);
    });

  };

  this.bind.add = () => {

    window.addEventListener('mouseup', this.clickOut);

    window.addEventListener('keydown', this.esc);

    window.addEventListener('keydown', this.navigateResults);

  };

  this.bind.remove = () => {

    window.removeEventListener('mouseup', this.clickOut);

    window.removeEventListener('keydown', this.esc);

    window.removeEventListener('keydown', this.navigateResults);

  };

  this.style = () => {

    const inputRect = input.getBoundingClientRect();

    const box = {
      left: inputRect.left,
      top: inputRect.bottom + window.scrollY,
      width: inputRect.width
    };

    if (widthElement) {

      const widthElementRect = widthElement.getBoundingClientRect();

      box.width = widthElementRect.width;

      box.left = widthElementRect.left;

    }

    this.element.suggest.style.setProperty('--suggest-top', box.top);

    this.element.suggest.style.setProperty('--suggest-left', box.left);

    this.element.suggest.style.setProperty('--suggest-width', box.width);

  };

  this.assemble = () => {

    const body = document.querySelector('body');

    this.element.suggest.appendChild(this.element.list);

    this.element.suggest.addEventListener('transitionend', (event) => {

      if (event.propertyName === 'opacity' && getComputedStyle(this.element.suggest).opacity == 0) {

        body.removeChild(this.element.suggest);

        this.bind.remove();

        this.state.open = false;

      }

    });

  };

  this.searchTerm = () => {
    return trimString(input.value).toLowerCase();
  };

  this.populateList = (results) => {

    const listType = {
      fontawesomeIcon: () => {
        const successAction = (suggestData) => {

          this.close();

          if (action) {
            action(suggestData);
          }

          if (postFocus) {
            postFocus.focus();
          }

        };

        results.forEach((item, i) => {

          let li = node('li|class:suggest-list-item');

          let resultItem = new Button({
            text: false,
            style: ['link', 'ring'],
            classList: ['suggest-item'],
            func: () => {
              successAction(item);
            }
          });

          let icon = node('span|class:suggest-icon fa-' + item.name);

          if (item.styles.includes('solid')) {
            icon.classList.add('fas');
          } else if (item.styles.includes('brands')) {
            icon.classList.add('fab');
          }

          let text = node('span:' + item.label + '|class:suggest-icon-text');

          resultItem.button.appendChild(icon);

          resultItem.button.appendChild(text);

          li.appendChild(resultItem.button);

          this.element.list.appendChild(li);

        });
      }
    };

    listType[type]();

  };

  this.timer = false;

  this.suggestItems = () => {
    const suggestType = {
      fontawesomeIcon: (string) => {
        if (isValidString(string)) {

          return fontawesome.filter((item) => {
            let match = false;

            if (item.name.toLowerCase().includes(string) || item.label.toLowerCase().includes(string)) {
              match = true;
            }

            item.search.forEach((item, i) => {
              if (item.toLowerCase().includes(string)) {
                match = true;
              }
            });

            item.styles.forEach((item, i) => {
              if (item.toLowerCase().includes(string)) {
                match = true;
              }
            });

            return match;
          });

        } else {
          return fontawesome;
        }
      }
    };

    return suggestType[type](this.searchTerm());
  };

  this.navigateResults = (event) => {

    let elementToFocus = null;

    let focusIndex = null;

    const allSuggestItems = this.element.suggest.querySelectorAll('.suggest-item');

    const columnCount = getComputedStyle(this.element.suggest.querySelector('.suggest-list')).getPropertyValue('grid-template-columns').split(' ').length;

    const findFocus = () => {

      for (var i = 0; i < allSuggestItems.length; i++) {

        if (allSuggestItems[i] == document.activeElement) {
          focusIndex = i;
        }

      }

    };

    const keyEvents = () => {

      // up
      if (event.keyCode == 38) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = allSuggestItems[allSuggestItems.length - 1];
        } else {
          if (focusIndex >= columnCount && focusIndex <= allSuggestItems.length - 1) {
            elementToFocus = allSuggestItems[focusIndex - columnCount];
          } else {
            elementToFocus = input;
          }
        }
      }

      // down
      if (event.keyCode == 40) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = allSuggestItems[0];
        } else {
          if (focusIndex < allSuggestItems.length - columnCount) {
            elementToFocus = allSuggestItems[focusIndex + columnCount];
          } else {
            elementToFocus = input;
          }
        }
      }

      // right
      if (event.keyCode == 39 && document.activeElement != input) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = allSuggestItems[0];
        } else {
          if (focusIndex >= 0 && focusIndex < allSuggestItems.length - 1) {
            elementToFocus = allSuggestItems[focusIndex + 1];
          } else {
            elementToFocus = input;
          }
        }
      }

      // left
      if (event.keyCode == 37 && document.activeElement != input) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = allSuggestItems[allSuggestItems.length - 1];
        } else {
          if (focusIndex > 0 && focusIndex <= allSuggestItems.length - 1) {
            elementToFocus = allSuggestItems[focusIndex - 1];
          } else {
            elementToFocus = input;
          }
        }
      }

      // tab
      if (!event.shiftKey && event.keyCode == 9 && document.activeElement == input) {
        event.preventDefault();
        elementToFocus = allSuggestItems[0];
      }
      if (!event.shiftKey && event.keyCode == 9 && document.activeElement == allSuggestItems[allSuggestItems.length - 1]) {
        event.preventDefault();
        elementToFocus = postFocus;
        this.close();
      }

      // shift tab
      if (event.shiftKey && event.keyCode == 9 && document.activeElement == allSuggestItems[0]) {
        event.preventDefault();
        elementToFocus = input;
      }
      if (event.shiftKey && event.keyCode == 9 && document.activeElement == input) {
        this.close();
      }

    };

    findFocus();

    keyEvents();

    if (elementToFocus) {
      elementToFocus.focus();
    }
  };

  this.clickOut = (event) => {

    const path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(this.element.suggest) && !path.includes(this.element.input)) {
      this.close();
    }

  };

  this.esc = (event) => {

    if ((event.keyCode == 27)) {

      event.preventDefault();

      this.close();

    }

  };

  this.assemble();

  this.bind.input();

};
