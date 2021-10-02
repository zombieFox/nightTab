import { state } from '../state';
import { bookmark } from '../bookmark';
import { group } from '../group';

const groupAndBookmark = {};

groupAndBookmark.render = () => {

  group.item.clear();

  bookmark.item.clear();

  group.item.render();

  bookmark.item.render();

  if (state.get.current().search) {

    if (group.sort.sortable) {

      group.sort.sortable.option('disabled', true);

    }

    if (bookmark.sort.sortable.length > 0) {

      bookmark.sort.sortable.forEach((item, i) => {

        item.option('disabled', true);

      });

    }


  } else {

    group.sort.bind();

    bookmark.sort.bind();

  }

};

groupAndBookmark.init = () => {
  groupAndBookmark.render();
};

export { groupAndBookmark };
