import { language } from '../../../language';

import { state } from '../../state';
import { data } from '../../data';
import { header } from '../../header';
import { groupAndBookmark } from '../../groupAndBookmark';
import { menu } from '../../menu';

import { Control_select } from '../../control/select';

import { node } from '../../../utility/node';

const languageSetting = {};

languageSetting.control = {
  language: {}
};

languageSetting.language = (parent) => {

  languageSetting.control.language = new Control_select({
    path: 'language',
    id: 'language',
    labelText: 'Language',
    option: language.name(),
    selected: language.code().indexOf(state.get.current().language),
    action: () => {

      state.get.current().language = language.code()[languageSetting.control.language.selected()];
      data.save();
      language.init();
      header.item.clear();
      header.item.render();
      groupAndBookmark.render();
      menu.close();
      menu.open();

    }
  });

  parent.appendChild(
    node('div', [
      languageSetting.control.language.wrap()
    ])
  );

};

export { languageSetting };
