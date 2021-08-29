import { state } from '../state';
import { data } from '../data';
import { toolbar } from '../toolbar';
import { menu } from '../menu';
import { bookmark } from '../bookmark';
import { header } from '../header';
import { group } from '../group';
import { theme } from '../theme';
import { themeSetting } from '../menuContent/themeSetting';

import { applyCSSVar } from '../../utility/applyCSSVar';

import { KeyboardShortcut } from '../keyboardShortcut';

const keyboard = {};

keyboard.esc = new KeyboardShortcut({
  keycode: 27,
  action: () => {
    if (state.get.current().bookmark.edit && !state.get.current().modal && !state.get.current().menu) {
      bookmark.edit.close();
      group.edit.close();
      header.edit.close();
      toolbar.current.update.edit();
    };
    data.save();
  }
});

keyboard.ctrAltD = new KeyboardShortcut({
  keycode: 68,
  ctrl: true,
  alt: true,
  action: () => {
    theme.style.toggle();
    if (themeSetting.control.style.update) {
      themeSetting.control.style.update();
    };
    data.save();
  }
});

keyboard.ctrAltA = new KeyboardShortcut({
  keycode: 65,
  ctrl: true,
  alt: true,
  action: () => {
    if (!state.get.current().bookmark.add) {
      bookmark.add.render();
    };
  }
});

keyboard.ctrAltE = new KeyboardShortcut({
  keycode: 69,
  ctrl: true,
  alt: true,
  action: () => {
    bookmark.edit.toggle();
    group.edit.toggle();
    header.edit.toggle();
    toolbar.current.update.edit();
    data.save();
  }
});

keyboard.ctrAltG = new KeyboardShortcut({
  keycode: 71,
  ctrl: true,
  alt: true,
  action: () => {
    if (!state.get.current().group.add) {
      group.add.render();
    };
    data.save();
  }
});

keyboard.ctrAltM = new KeyboardShortcut({
  keycode: 77,
  ctrl: true,
  alt: true,
  action: () => {
    menu.toggle();
  }
});

keyboard.ctrAltR = new KeyboardShortcut({
  keycode: 82,
  ctrl: true,
  alt: true,
  action: () => {
    theme.accent.random.render();
    toolbar.current.update.accent();
    applyCSSVar([
      'theme.accent.rgb.r',
      'theme.accent.rgb.g',
      'theme.accent.rgb.b',
      'theme.accent.hsl.h',
      'theme.accent.hsl.s',
      'theme.accent.hsl.l'
    ]);
  }
});

keyboard.init = () => {
  keyboard.esc.add();
  keyboard.ctrAltA.add();
  keyboard.ctrAltE.add();
  keyboard.ctrAltD.add();
  keyboard.ctrAltG.add();
  keyboard.ctrAltM.add();
  keyboard.ctrAltR.add();
};

export { keyboard };
