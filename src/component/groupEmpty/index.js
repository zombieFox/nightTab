import { state } from '../state';
import { bookmark } from '../bookmark';

import { Button } from '../button';

import { node } from '../../utility/node';

import './index.css';

export const GroupEmpty = function({
  groupIndex = false
} = {}) {

  this.element = {
    empty: node('div|class:group-empty'),
    control: node('div|class:group-empty-control'),
    headline: node('p:No Bookmarks in this Group|class:group-empty-headline small muted')
  };

  this.control = {};

  this.control.button = {
    bookmark: new Button({
      text: 'Add a new Bookmark',
      iconName: 'addBookmark',
      size: 'small',
      func: () => {
        bookmark.add.render({
          groupIndex: groupIndex
        });
      }
    })
  };

  this.assemble = () => {

    this.element.empty.appendChild(this.element.headline);

    this.element.control.appendChild(this.control.button.bookmark.button);

    this.element.empty.appendChild(this.element.control);

  };

  this.empty = () => {

    this.assemble();

    return this.element.empty;

  };

};
