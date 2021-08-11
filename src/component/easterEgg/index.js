import { data } from '../data';
import { state } from '../state';
import { menu } from '../menu';
import { bookmark } from '../bookmark';
import { group } from '../group';
import { groupAndBookmark } from '../groupAndBookmark';

import { StagedBookmark } from '../stagedBookmark';
import { StagedGroup } from '../stagedGroup';

import { node } from '../../utility/node';
import { randomNumber } from '../../utility/randomNumber';
import { convertColor } from '../../utility/convertColor';

const easterEgg = {};

easterEgg.toaster = {};

easterEgg.toaster.render = () => {

  easterEgg.toaster.bind.remove();

  if (bookmark.all.length < 1) {

    const newGroupData = new StagedGroup();

    newGroupData.group.name.text = 'Toaster';

    newGroupData.newGroup();

    group.item.mod.add(newGroupData);

  };

  const newBookmarkData = new StagedBookmark();

  newBookmarkData.link.url = 'https://en.wikipedia.org/wiki/Easter_egg_(media)';

  newBookmarkData.link.background.show = true;

  newBookmarkData.link.background.image.url = 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1628494879270.gif?raw=true';

  newBookmarkData.link.accent.by = 'custom';

  newBookmarkData.link.accent.hsl = { h: randomNumber(0, 360), s: 100, l: 50 };

  newBookmarkData.link.accent.rgb = convertColor.hsl.rgb(newBookmarkData.link.accent.hsl);

  newBookmarkData.link.color.by = 'custom';

  newBookmarkData.link.color.hsl = { h: 0, s: 0, l: 100 };

  newBookmarkData.link.color.rgb = { r: 255, g: 255, b: 255 };

  bookmark.item.mod.add(newBookmarkData);

  groupAndBookmark.render();

  menu.close();

  data.save();

};

easterEgg.toaster.bind = {
  add: () => {

    menu.element.frame.element.area.addEventListener('animationend', easterEgg.toaster.render);

    menu.element.frame.element.area.classList.add('is-jello');

  },
  remove: () => {

    menu.element.frame.element.area.removeEventListener('animationend', easterEgg.toaster.render);

    menu.element.frame.element.area.classList.remove('is-jello');

  }
};

export { easterEgg };
