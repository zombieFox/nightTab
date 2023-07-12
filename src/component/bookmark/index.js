import { message } from '../message';

import { state } from '../state';
import { data } from '../data';
import { layout } from '../layout';
import { group } from '../group';
import { header } from '../header';
import { bookmarkPreset } from '../bookmarkPreset';
import { groupAndBookmark } from '../groupAndBookmark';

import { BookmarkTile } from '../bookmarkTile';
import { GroupEmpty } from '../groupEmpty';
import { BookmarkForm } from '../bookmarkForm';
import { StagedBookmark } from '../stagedBookmark';
import { StagedGroup } from '../stagedGroup';
import { Modal } from '../modal';

import { node } from '../../utility/node';
import { applyCSSVar } from '../../utility/applyCSSVar';
import { applyCSSClass } from '../../utility/applyCSSClass';
import { applyCSSState } from '../../utility/applyCSSState';
import { set } from '../../utility/set';
import { sortArrayOfObject } from '../../utility/sortArrayOfObject';

import Sortable from 'sortablejs';

import './index.css';

const bookmark = {};

bookmark.element = {
  area: node('div|class:bookmark-area'),
  group: node('div|class:bookmark-group')
};

bookmark.all = bookmarkPreset.get();

bookmark.area = {
  render: () => {

    bookmark.element.area.appendChild(bookmark.element.group);

    layout.element.bookmark.appendChild(bookmark.element.area);

  }
};

bookmark.tile = {
  current: []
};

bookmark.item = {
  mod: {
    add: (bookmarkData) => {

      bookmark.all[bookmarkData.position.destination.group].items.splice(bookmarkData.position.destination.item, 0, bookmarkData.link);

    },
    edit: (bookmarkData) => {

      bookmark.all[bookmarkData.position.origin.group].items.splice(bookmarkData.position.origin.item, 1);

      bookmark.all[bookmarkData.position.destination.group].items.splice(bookmarkData.position.destination.item, 0, bookmarkData.link);

    },
    move: (bookmarkData) => {

      bookmarkData.link = bookmark.all[bookmarkData.position.origin.group].items.splice(bookmarkData.position.origin.item, 1)[0];

      bookmark.all[bookmarkData.position.destination.group].items.splice(bookmarkData.position.destination.item, 0, bookmarkData.link);

    },
    remove: (bookmarkData) => {

      bookmark.all[bookmarkData.position.origin.group].items.splice(bookmarkData.position.origin.item, 1);

    },
    propagate: (bookmarkData) => {

      if (bookmarkData.propagate.display || bookmarkData.propagate.layout || bookmarkData.propagate.theme) {

        bookmark.all.forEach((item) => {

          item.items.forEach((item) => {

            if (bookmarkData.propagate.display) {
              item.display.visual.show = bookmarkData.link.display.visual.show;
              item.display.name.show = bookmarkData.link.display.name.show;
            }

            if (bookmarkData.propagate.layout) {
              item.display.visual.size = bookmarkData.link.display.visual.size;
              item.display.name.size = bookmarkData.link.display.name.size;
              item.display.gutter = bookmarkData.link.display.gutter;
              item.display.rotate = bookmarkData.link.display.rotate;
              item.display.translate = bookmarkData.link.display.translate;
              item.display.alignment = bookmarkData.link.display.alignment;
              item.display.direction = bookmarkData.link.display.direction;
              item.display.order = bookmarkData.link.display.order;
            }

            if (bookmarkData.propagate.theme) {
              item.accent = bookmarkData.link.accent;
              item.color = bookmarkData.link.color;
              item.border = bookmarkData.link.border;
              item.display.visual.shadow = bookmarkData.link.display.visual.shadow;
            }

          });

        });

      }

    },
    applyVar: (path, value) => {

      bookmark.all.forEach((item) => {

        item.items.forEach((item) => {

          set({ object: item, path: path, value: value });

        });

      });

    },
    sort: {
      letter: () => {

        bookmark.all.forEach((item) => {
          item.items = sortArrayOfObject(item.items, 'display.visual.letter.text');
        });

      },
      icon: () => {

        bookmark.all.forEach((item) => {
          item.items = sortArrayOfObject(item.items, 'display.visual.icon.name');
        });

      },
      name: () => {

        bookmark.all.forEach((item) => {
          item.items = sortArrayOfObject(item.items, 'display.name.text');
        });

      }
    }
  },
  render: () => {

    const addBookmarkToGroup = (bookmarkData, groupIndex, bookmarkIndex) => {

      const currentBookmarkData = new StagedBookmark(bookmarkData);

      currentBookmarkData.position.origin.group = groupIndex;

      currentBookmarkData.position.origin.item = bookmarkIndex;

      currentBookmarkData.position.destination.group = groupIndex;

      currentBookmarkData.position.destination.item = bookmarkIndex;

      const bookmarkTile = new BookmarkTile({ bookmarkData: currentBookmarkData });

      bookmarkTile.tile().groupIndex = groupIndex;

      bookmarkTile.tile().index = bookmarkIndex;

      group.area.current[groupIndex].element.body.appendChild(bookmarkTile.tile());

      bookmark.tile.current.push(bookmarkTile);

    };

    const addEmptyGroup = (groupIndex) => {

      const emptyGroupItem = new GroupEmpty({ groupIndex: groupIndex });

      group.area.current[groupIndex].element.body.appendChild(emptyGroupItem.empty());

    };

    if (state.get.current().search) {

      // searching

      if (header.element.search.resultCount().total > 0) {

        bookmark.all.forEach((item, i) => {

          const groupIndex = i;

          if (header.element.search.resultCount().group[groupIndex].searchMatch > 0) {

            item.items.forEach((item, i) => {

              const bookmarkIndex = i;

              if (item.searchMatch) {

                addBookmarkToGroup(item, groupIndex, bookmarkIndex);

              }

            });

          }

        });

      }


    } else {

      // not searching

      bookmark.all.forEach((item, i) => {

        const groupIndex = i;

        if (item.items.length > 0) {

          item.items.forEach((item, i) => {

            const bookmarkIndex = i;

            addBookmarkToGroup(item, groupIndex, bookmarkIndex);

          });

        } else {

          addEmptyGroup(groupIndex);

        }

      });

    }

  },
  clear: () => {

    if (bookmark.tile.current.length > 0) {

      bookmark.tile.current.forEach(item => {

        item.clear();

      });

    }

    bookmark.tile.current = [];

  }
};

bookmark.edit = {
  open: () => {

    state.get.current().bookmark.edit = true;

    bookmark.edit.render();

  },
  close: () => {

    state.get.current().bookmark.edit = false;

    bookmark.edit.render();

  },
  toggle: () => {

    if (state.get.current().bookmark.edit) {
      bookmark.edit.close();
    } else {
      bookmark.edit.open();
    }

  },
  render: () => {

    applyCSSState('bookmark.edit');

    if (bookmark.tile.current.length > 0) {

      bookmark.tile.current.forEach((item) => {

        if (state.get.current().bookmark.edit) {
          item.control.enable();
        } else {
          item.control.disable();
        }

      });

    }

  }
};

bookmark.direction = {
  mod: {
    vertical: () => {

      bookmark.all.forEach((item) => {
        item.items.forEach((item) => {

          item.display.direction = 'vertical';

        });
      });

    },
    horizontal: () => {

      bookmark.all.forEach((item) => {
        item.items.forEach((item) => {

          item.display.direction = 'horizontal';

        });
      });

    }
  }
};

bookmark.add = {
  mod: {
    open: () => { state.get.current().bookmark.add = true; },
    close: () => { state.get.current().bookmark.add = false; }
  },
  render: ({
    groupIndex = false
  } = {}) => {

    const newBookmarkData = new StagedBookmark();

    newBookmarkData.type.new = true;

    newBookmarkData.position.destination.item = (bookmark.all.length > 0) ? bookmark.all[0].items.length : 0;

    if (groupIndex || groupIndex === 0) {
      newBookmarkData.position.destination.group = groupIndex;

      newBookmarkData.position.destination.item = bookmark.all[groupIndex].items.length;
    }

    if (!bookmark.all.length > 0) {
      newBookmarkData.group.destination = 'new';
    }

    const bookmarkForm = new BookmarkForm({ bookmarkData: newBookmarkData });

    const addModal = new Modal({
      heading: message.get('bookmarkAddHeading'),
      content: bookmarkForm.form(),
      successText: message.get('bookmarkAddSuccessText'),
      cancelText: message.get('bookmarkAddCancelText'),
      width: (state.get.current().bookmark.style === 'block') ? 60 : 70,
      maxHeight: true,
      openAction: () => {

        bookmark.add.mod.open();

        data.save();

      },
      closeAction: () => {

        bookmark.add.mod.close();

        data.save();

      },
      successAction: () => {

        switch (newBookmarkData.group.destination) {
          case 'new': {
            const newGroupData = new StagedGroup();

            newGroupData.group.name.text = newBookmarkData.group.name;

            newGroupData.newGroup();

            group.item.mod.add(newGroupData);

            newBookmarkData.position.destination.group = bookmark.all.length - 1;

            layout.area.assemble();

            break;
          }

        }

        newBookmarkData.link.timestamp = new Date().getTime();

        bookmark.item.mod.add(newBookmarkData);

        bookmark.item.mod.propagate(newBookmarkData);

        bookmark.add.mod.close();

        groupAndBookmark.render();

        data.save();

      },
      dismissAction: () => {

        bookmark.add.mod.close();

        data.save();

      }
    });

    addModal.open();

    bookmarkForm.tab.update();

  }
};

bookmark.sort = {
  sortable: [],
  bind: () => {

    bookmark.sort.sortable = [];

    group.area.current.forEach((item) => {

      bookmark.sort.sortable.push(Sortable.create(item.element.body, {
        handle: '.bookmark-control-sort',
        group: 'bookmark-sort',
        ghostClass: 'bookmark-sort-placeholder',
        animation: 500,
        easing: 'cubic-bezier(0.8, 0.8, 0.4, 1.4)',
        filter: '.group-empty',
        onEnd: (event) => {

          // console.log('============ debug sort ============');
          // console.log(event);
          // console.log('group:', 'origin', event.from.position.origin, 'destination', event.to.position.origin);
          // console.log('item:', 'origin', event.oldIndex, 'destination', event.newIndex);

          const newBookmarkData = new StagedBookmark();

          newBookmarkData.position.origin.group = event.from.position.origin;

          newBookmarkData.position.origin.item = event.oldIndex;

          newBookmarkData.position.destination.group = event.to.position.origin;

          newBookmarkData.position.destination.item = event.newIndex;

          newBookmarkData.type.existing = true;

          bookmark.item.mod.move(newBookmarkData);

          groupAndBookmark.render();

          data.save();

        }
      }));

    });

  }
};

bookmark.count = () => {

  let count = 0;

  bookmark.all.forEach((item) => { count = count + item.items.length; });

  return count;

};

bookmark.restore = (dataToRestore) => {

  bookmark.all = dataToRestore.bookmark;

  console.log('bookmarks restored');

};

bookmark.append = (dataToAppend) => {

  dataToAppend.bookmark.forEach((item) => {

    bookmark.all.push(item);

  });

  console.log('bookmarks appended');

};

bookmark.reset = () => {

  bookmark.all.forEach((item, i) => {

    const groupIndex = i;

    item.items.forEach((item) => {

      const newBookmarkData = new StagedBookmark();

      newBookmarkData.link.timestamp = item.timestamp;

      newBookmarkData.link.url = item.url;

      newBookmarkData.link.display.name.text = item.display.name.text;

      newBookmarkData.link.display.visual.type = item.display.visual.type;

      newBookmarkData.link.display.visual.letter.text = item.display.visual.letter.text;

      newBookmarkData.link.display.visual.icon = item.display.visual.icon;

      newBookmarkData.link.display.visual.image.url = item.display.visual.image.url;

      newBookmarkData.position.origin.group = groupIndex;

      newBookmarkData.position.origin.item = i;

      newBookmarkData.position.destination.group = groupIndex;

      newBookmarkData.position.destination.item = i;

      bookmark.item.mod.edit(newBookmarkData);

    });

  });

};

bookmark.init = () => {
  applyCSSVar([
    'bookmark.size'
  ]);
  applyCSSClass([
    'bookmark.item.justify',
    'bookmark.orientation',
    'bookmark.style'
  ]);
  applyCSSState([
    'bookmark.show',
    'bookmark.hoverScale.show',
    'bookmark.shadow.show',
    'bookmark.line.show',
    'bookmark.url.show'
  ]);
  bookmark.area.render();
  bookmark.add.mod.close();
  bookmark.edit.render();
};

export { bookmark };
