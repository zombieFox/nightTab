import { bookmarkDefault } from '../bookmarkDefault';

export const StagedBookmark = function (bookmarkData) {

  this.link = bookmarkData || JSON.parse(JSON.stringify(bookmarkDefault));

  this.position = {
    origin: { group: 0, item: 0 },
    destination: { group: 0, item: 0 }
  };

  this.group = { destination: 'existing', name: '' };

  this.type = { new: false, existing: false };

  this.propagate = { display: false, layout: false, theme: false };

};
