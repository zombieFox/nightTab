import { state } from '../state';
import { data } from '../data';
import { form } from '../form';
import { bookmark } from '../bookmark';
import { theme } from '../theme';
import { appName } from '../appName';

import { Button } from '../button';
import { MenuFrame } from '../menuFrame';
import { MenuNav } from '../menuNav';
import { Shade } from '../shade';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';

const menu = {};

menu.navData = [
  // { name: 'Form', active: true, overscroll: true, sub: ['Input', 'Button'] },
  // { name: 'Debug', active: true, overscroll: true, sub: ['Bookmark'] },
  { name: 'Theme', active: true, overscroll: true, sub: ['Preset', 'Saved', 'Style', 'Accent', 'Colour', 'Font', 'Radius', 'Shadow', 'Shade', 'Opacity', 'Background', 'Layout', 'Header', 'Bookmark'] },
  { name: 'Layout', active: false, overscroll: true, sub: ['Scaling', 'Area', 'Padding', 'Gutter', 'Alignment', 'Page'] },
  { name: 'Header', active: false, overscroll: true, sub: ['Area', 'Greeting', 'Transitional words', 'Clock', 'Date', 'Search'] },
  { name: 'Bookmark', active: false, overscroll: true, sub: ['General', 'Style', 'Orientation', 'Sort'] },
  { name: 'Group', active: false, overscroll: true, sub: ['Alignment', 'Name', 'Open All'] },
  { name: 'Toolbar', active: false, overscroll: true, sub: ['Size', 'Location', 'Position', 'Controls'] },
  { name: 'Data', active: false, overscroll: true, sub: ['Import', 'Backup', 'Clear'] },
  { name: 'Coffee', active: false, overscroll: false },
  { name: appName, active: false, overscroll: false }
];

menu.mod = {};

menu.element = {
  frame: null
};

menu.firefoxSpecific = () => {

  const firefoxBrowser = typeof InstallTrigger !== "undefined";

  if (firefoxBrowser) {
    menu.navData.splice((menu.navData.length - 2), 0, { name: 'Firefox', active: false, overscroll: false })
  };

};

menu.open = () => {

  menu.element.frame = new MenuFrame({
    navData: menu.navData
  });

  menu.element.frame.open();

};

menu.close = () => {

  if (menu.element.frame) {
    menu.element.frame.close();
  };

};

menu.toggle = () => {

  if (state.get.current().menu) {
    menu.close();
  } else {
    menu.open();
  };

};

menu.init = () => {
  menu.firefoxSpecific();
};

export { menu };
