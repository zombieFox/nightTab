import { language } from '../../../language';

import { state } from '../../state';
import { data } from '../../data';
import { header } from '../../header';
import { groupAndBookmark } from '../../groupAndBookmark';
import { menu } from '../../menu';
import { toolbar } from '../../toolbar';

import * as form from '../../form';

import { APP_NAME } from '../../../constant';

import { Control_select } from '../../control/select';
import { Alert } from '../../alert';
import { Link } from '../../link';

import { node } from '../../../utility/node';

const languageSetting = {};

languageSetting.control = {
  language: {}
};

languageSetting.language = (parent) => {

  languageSetting.control.language = new Control_select({
    path: 'language',
    id: 'language',
    labelText: language.current.menu.content.language.language,
    srOnly: true,
    option: language.name(),
    selected: language.code().indexOf(state.get.current().language),
    action: () => {

      state.get.current().language = language.code()[languageSetting.control.language.selected()];
      data.save();
      language.init();
      toolbar.bar.render();
      header.item.clear();
      header.item.render();
      groupAndBookmark.render();
      menu.close();
      menu.open();

    }
  });

  languageSetting.control.link = new Link({
    text: language.current.menu.content.language.alert.link,
    href: `https://github.com/zombieFox/${APP_NAME}`,
    openNew: true
  });

  languageSetting.control.alert = new Alert({
    iconName: 'globe',
    children: [
      node(`p:${language.current.menu.content.language.alert.para}|class:small`),
      node('p|class:small', languageSetting.control.link.link())
    ]
  });

  parent.appendChild(
    node('div', [
      languageSetting.control.language.wrap(),
      form.wrap({
        children: [
          languageSetting.control.alert.wrap()
        ]
      })
    ])
  );

};

export { languageSetting };
