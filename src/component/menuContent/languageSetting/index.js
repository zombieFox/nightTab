import { message } from '../../message';

import { state } from '../../state';
import { data } from '../../data';
import { header } from '../../header';
import { groupAndBookmark } from '../../groupAndBookmark';
import { menu } from '../../menu';
import { toolbar } from '../../toolbar';

import { APP_NAME } from '../../../constant';

import { Alert } from '../../alert';
import { Link } from '../../link';

import { Control_select } from '../../control/select';

import { node } from '../../../utility/node';

const languageSetting = {};

languageSetting.control = {
  language: {}
};

languageSetting.language = (parent) => {

  const selectedLanguageIndex = () => {

    let index = 0;

    index = message.language.id().indexOf(state.get.current().language);

    return index;

  };

  languageSetting.control.language.selected = new Control_select({
    path: 'language.selected',
    id: 'language-selected',
    labelText: message.get('menuContentLanguageSelect'),
    srOnly: true,
    option: message.language.list(),
    selected: selectedLanguageIndex(),
    action: () => {

      state.get.current().language = message.language.id()[languageSetting.control.language.selected.selected()];
      data.save();
      toolbar.bar.render();
      header.item.clear();
      header.item.render();
      groupAndBookmark.render();
      menu.close();
      menu.open();

    }
  });

  languageSetting.control.link = new Link({
    text: message.get('menuContentLanguageAlertLink'),
    href: `https://github.com/zombieFox/${APP_NAME}`,
    openNew: true
  });

  languageSetting.control.alert = new Alert({
    iconName: 'globe',
    children: [
      node(`p:${message.get('menuContentLanguageAlertPara')}`),
      node('p', languageSetting.control.link.link())
    ]
  });

  parent.appendChild(
    node('div', [
      languageSetting.control.language.selected.wrap(),
      languageSetting.control.alert.wrap()
    ])
  );

};

export { languageSetting };
