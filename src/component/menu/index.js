import { state } from '../state';

import { MenuFrame } from '../menuFrame';

const menu = {};

menu.navData = [
  // { name: 'Debug', active: true, overscroll: true, sub: ['Input', 'Button', 'Bookmark', 'Icon'] },
  { name: 'theme', active: true, overscroll: true, sub: ['preset', 'saved', 'style', 'color', 'accent', 'font', 'radius', 'shadow', 'shade', 'opacity', 'background', 'layout', 'header', 'bookmark'] },
  { name: 'layout', active: false, overscroll: true, sub: ['scaling', 'area', 'padding', 'gutter', 'alignment', 'page'] },
  { name: 'header', active: false, overscroll: true, sub: ['alignment', 'greeting', 'transitional', 'clock', 'date', 'search'] },
  { name: 'bookmark', active: false, overscroll: true, sub: ['general', 'style', 'orientation', 'sort'] },
  { name: 'group', active: false, overscroll: true, sub: ['alignment', 'name', 'collapse', 'toolbar'] },
  { name: 'toolbar', active: false, overscroll: true, sub: ['size', 'location', 'position', 'controls'] },
  { name: 'data', active: false, overscroll: true, sub: ['restore', 'backup', 'clear'] },
  { name: 'language', active: false, overscroll: false },
  { name: 'support', active: false, overscroll: false },
  { name: 'coffee', active: false, overscroll: false },
  { name: 'app', active: false, overscroll: false }
];

menu.mod = {};

menu.element = {
  frame: null
};

menu.open = (name) => {

  menu.element.frame = new MenuFrame({
    navData: menu.navData
  });

  if (name) {

    menu.element.frame.menuNav.state.toggle(name);

  }

  menu.element.frame.open();

};

menu.close = () => {

  if (menu.element.frame) {
    menu.element.frame.close();
  }

};

menu.toggle = () => {

  if (state.get.current().menu) {
    menu.close();
  } else {
    menu.open();
  }

};

export { menu };
