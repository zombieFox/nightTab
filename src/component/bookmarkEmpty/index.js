import { state } from '../state';
import { bookmark } from '../bookmark';

import { Button } from '../button';

import { node } from '../../utility/node';

import './index.css';

export const BookmarkEmpty = function() {

  this.element = {
    empty: node('div|class:bookmark-empty'),
    description: node('p:No Groups or Bookmarks|class:bookmark-empty-headline small muted')
  };

  this.control = {};

  this.control.button = {
    add: new Button({
      text: 'Add a Bookmark',
      size: 'small',
      func: () => {
        bookmark.add.render();
      }
    })
  };

  this.assemble = () => {

    this.element.empty.appendChild(this.element.description);

    this.element.empty.appendChild(this.control.button.add.button);

  };

  this.empty = () => {
    return this.element.empty;
  };

  this.assemble();

};
