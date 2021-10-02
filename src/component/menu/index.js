import { state } from '../state';
import { APP_NAME } from '../../constants';

import { MenuFrame } from '../menuFrame';


const menu = {};

menu.navData = [
  // { name: 'Debug', active: true, overscroll: true, sub: ['Input', 'Button', 'Bookmark', 'Icon'] },
  { name: 'Theme', active: true, overscroll: true, sub: ['Preset', 'Saved', 'Style', 'Colour', 'Accent', 'Font', 'Radius', 'Shadow', 'Shade', 'Opacity', 'Background', 'Layout', 'Header', 'Bookmark'] },
  { name: 'Layout', active: false, overscroll: true, sub: ['Scaling', 'Area', 'Padding', 'Gutter', 'Alignment', 'Page'] },
  { name: 'Header', active: false, overscroll: true, sub: ['Alignment', 'Greeting', 'Transitional words', 'Clock', 'Date', 'Search'] },
  { name: 'Bookmark', active: false, overscroll: true, sub: ['General', 'Style', 'Orientation', 'Sort'] },
  { name: 'Group', active: false, overscroll: true, sub: ['Alignment', 'Name', 'Toolbar'] },
  { name: 'Toolbar', active: false, overscroll: true, sub: ['Size', 'Location', 'Position', 'Controls'] },
  { name: 'Data', active: false, overscroll: true, sub: ['Restore', 'Backup', 'Clear'] },
  { name: 'Support', active: false, overscroll: false },
  { name: 'Coffee', active: false, overscroll: false },
  { name: APP_NAME, active: false, overscroll: false }
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
