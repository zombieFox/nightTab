import { message } from '../../message';

import { state } from '../../state';

import { APP_NAME } from '../../../constant';

import { Alert } from '../../alert';
import { Link } from '../../link';


import { node } from '../../../utility/node';

const languageSetting = {};

languageSetting.control = {
  language: {}
};

languageSetting.language = (parent) => {

  const selectedLanguageIndex = () => {

    let index = 0;

    index = message.language.code().indexOf(state.get.current().language);

    return index;

  };

  // languageSetting.control.language.selected = new Control_select({
  //   path: 'language.selected',
  //   id: 'language-selected',
  //   labelText: message.get('menuContentLanguageSelect'),
  //   srOnly: true,
  //   option: message.language.list(),
  //   selected: selectedLanguageIndex(),
  //   action: () => {
  //
  //     state.get.current().language = message.language.code()[languageSetting.control.language.selected.selected()];
  //     data.save();
  //     toolbar.bar.render();
  //     header.item.clear();
  //     header.item.render();
  //     groupAndBookmark.render();
  //     menu.close();
  //     menu.open();
  //
  //   }
  // });

  languageSetting.control.link = new Link({
    text: message.get('menuContentLanguageAlertLink'),
    href: `https://github.com/zombieFox/${APP_NAME}`,
    openNew: true
  });

  languageSetting.control.alert = new Alert({
    iconName: 'globe',
    children: [
      node(`p:${message.get('menuContentLanguageAlertPara') || 'Text'}`),
      node('p', languageSetting.control.link.link())
    ]
  });

  parent.appendChild(
    node('div', [
      // languageSetting.control.language.selected.wrap(),
      languageSetting.control.alert.wrap()
    ])
  );

};

export { languageSetting };
