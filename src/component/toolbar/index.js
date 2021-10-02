import { state } from '../state';

import { ToolbarControl } from '../toolbarControl';

const toolbar = {};

toolbar.current = null;

toolbar.bar = {};

toolbar.bar.render = () => {

  toolbar.current = new ToolbarControl();

  const body = document.querySelector('body');

  switch (state.get.current().toolbar.location) {

    case 'corner':

      body.appendChild(toolbar.current.toolbar());

      break;

  }

};

toolbar.init = () => {
  toolbar.bar.render();
  toolbar.current.update.edit();
};

export { toolbar };
