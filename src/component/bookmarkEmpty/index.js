import { state } from '../state';
import { bookmark } from '../bookmark';
import { group } from '../group';

import { Button } from '../button';

import { node } from '../../utility/node';

import './index.css';

export const BookmarkEmpty = function() {

  this.element = {
    empty: node('div|class:bookmark-empty'),
    control: node('div|class:bookmark-empty-control'),
    headline: node('p:No Groups or Bookmarks|class:bookmark-empty-headline small muted')
  };

  this.control = {};

  this.control.button = {
    bookmark: new Button({
      text: 'Add a new Bookmark',
      iconName: 'addBookmark',
      size: 'small',
      func: () => {
        bookmark.add.render();
      }
    }),
    group: new Button({
      text: 'Add a new Group',
      iconName: 'addGroup',
      size: 'small',
      func: () => {
        group.add.render();
      }
    })
  };

  this.assemble = () => {

    this.element.empty.appendChild(this.element.headline);

    this.element.control.appendChild(this.control.button.group.button);

    this.element.control.appendChild(this.control.button.bookmark.button);

    this.element.empty.appendChild(this.element.control);

  };

  this.empty = () => {
    return this.element.empty;
  };

  this.assemble();

};
