import { message } from '../../message';


import * as form from '../../form';

import { APP_NAME } from '../../../constant';

import { Alert } from '../../alert';
import { Link } from '../../link';

import { node } from '../../../utility/node';

const languageSetting = {};

languageSetting.control = {
  language: {}
};

languageSetting.language = (parent) => {

  languageSetting.control.link = new Link({
    text: message('menuContentLanguageAlertLink'),
    href: `https://github.com/zombieFox/${APP_NAME}`,
    openNew: true
  });

  languageSetting.control.alert = new Alert({
    iconName: 'globe',
    children: [
      node(`p:${message('menuContentLanguageAlertPara')}`),
      node('p', languageSetting.control.link.link())
    ]
  });

  parent.appendChild(
    node('div', [
      form.wrap({
        children: [
          languageSetting.control.alert.wrap()
        ]
      })
    ])
  );

};

export { languageSetting };
