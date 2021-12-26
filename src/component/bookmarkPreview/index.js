import { language } from '../../language';

import { BookmarkTile } from '../bookmarkTile';

import { node } from '../../utility/node';

import './index.css';

export const BookmarkPreview = function({
  bookmarkData = false
} = {}) {

  this.area = node('div|class:bookmark-preview-area');

  this.grid = node('div|class:bookmark-preview-grid');

  this.title = node('div|class:bookmark-preview-title small muted');

  this.shape = () => {

    if (bookmarkData.link.shape.tall) {
      this.grid.classList.add('bookmark-preview-grid-tall');
    } else {
      this.grid.classList.remove('bookmark-preview-grid-tall');
    }

    if (bookmarkData.link.shape.wide) {
      this.grid.classList.add('bookmark-preview-grid-wide');
    } else {
      this.grid.classList.remove('bookmark-preview-grid-wide');
    }

    if (bookmarkData.link.shape.tall || bookmarkData.link.shape.wide) {
      this.title.textContent = language.current.bookmark.preview.half;
    } else {
      this.title.textContent = language.current.bookmark.preview.full;
    }

  };

  this.bookmarkTile = new BookmarkTile({
    bookmarkData: bookmarkData,
    preview: true
  });

  this.update = {};

  this.update.style = (newBookmarkData) => {
    bookmarkData = newBookmarkData;

    this.bookmarkTile.update();

    this.shape();
  };

  this.update.assemble = (newBookmarkData) => {
    bookmarkData = newBookmarkData;

    this.area.removeChild(this.title);

    this.grid.removeChild(this.bookmarkTile.tile());

    this.bookmarkTile = new BookmarkTile({
      bookmarkData: bookmarkData,
      preview: true
    });

    this.shape();

    this.assemble();
  };

  this.assemble = () => {
    this.area.appendChild(this.title);

    this.grid.appendChild(this.bookmarkTile.tile());

    this.area.appendChild(this.grid);

    this.shape(bookmarkData);
  };

  this.assemble();

  this.preview = () => {
    return this.area;
  };

};