import { state } from '../state';
import { data } from '../data';

import * as form from '../form';

import { Modal } from '../modal';
import { CustomThemeTile } from '../customThemeTile';
import { CustomThemeForm } from '../customThemeForm';
import { StagedCustomTheme } from '../stagedCustomTheme';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';
import { applyCSSState } from '../../utility/applyCSSState';

const customTheme = {};

customTheme.tile = {
  current: []
};

customTheme.item = {
  mod: {
    add: (customThemeData) => {

      state.get.current().theme.custom.all.push(customThemeData.theme);

    },
    edit: (customThemeData) => {

      state.get.current().theme.custom.all.splice(customThemeData.position, 1);

      state.get.current().theme.custom.all.splice(customThemeData.position, 0, customThemeData.theme);

    },
    remove: (customThemeData) => {

      state.get.current().theme.custom.all.splice(customThemeData.position, 1);

    }
  },
  render: (container) => {

    customTheme.edit.close();

    customTheme.tile.current = [];

    state.get.current().theme.custom.all.forEach((item, i) => {

      const itemIndex = i;

      const currentCustomThemeData = new StagedCustomTheme(item);

      currentCustomThemeData.position = itemIndex;

      const themeCustomTile = new CustomThemeTile({
        customThemeData: currentCustomThemeData
      });

      customTheme.tile.current.push(themeCustomTile);

      container.appendChild(themeCustomTile.tile());

    });

    return container;

  }
};

customTheme.add = {
  mod: {
    open: () => { state.get.current().theme.custom.edit = true; },
    close: () => { state.get.current().theme.custom.edit = false; }
  },
  render: () => {

    const newCustomThemeData = new StagedCustomTheme();

    newCustomThemeData.position = state.get.current().theme.custom.all.length;

    const bookmarkForm = new CustomThemeForm({ customThemeData: newCustomThemeData });

    const addModal = new Modal({
      heading: 'Save current theme',
      content: bookmarkForm.form(),
      successText: 'Save',
      width: 'small',
      successAction: () => {
        customTheme.item.mod.add(newCustomThemeData);
        data.save();
      }
    });

    addModal.open();

  }
};

customTheme.edit = {
  open: () => {

    state.get.current().theme.custom.edit = true;

    customTheme.edit.render();

  },
  close: () => {

    state.get.current().theme.custom.edit = false;

    customTheme.edit.render();

  },
  toggle: () => {

    if (state.get.current().theme.custom.edit) {
      customTheme.edit.close();
    } else {
      customTheme.edit.open();
    };

  },
  render: () => {

    applyCSSState('theme.custom.edit');

    if (customTheme.tile.current.length > 0) {
      customTheme.tile.current.forEach((item, i) => {

        if (state.get.current().theme.custom.edit) {
          item.control.enable();
        } else {
          item.control.disable();
        };

      });
    };

  }
};

export { customTheme };
