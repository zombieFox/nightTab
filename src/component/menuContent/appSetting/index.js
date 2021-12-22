import { language } from '../../../language';

import * as form from '../../form';

import { node } from '../../../utility/node';

import { APP_NAME } from '../../../constant';

import { Link } from '../../link';
import { Splash } from '../../splash';

const appSetting = {};

appSetting.app = (parent) => {

  appSetting.app.para1 = node(`p:${language.current.menu.content.app.para1}`);

  appSetting.app.link1 = new Link({
    text: language.current.menu.content.app.link1,
    href: `https://github.com/zombieFox/${APP_NAME}/issues`,
    openNew: true
  });

  appSetting.app.para2 = node(`p:${language.current.menu.content.app.para2}`);

  appSetting.app.link2 = new Link({
    text: language.current.menu.content.app.link2,
    href: `https://github.com/zombieFox/${APP_NAME}/issues`,
    openNew: true
  });

  appSetting.app.link3 = new Link({
    text: language.current.menu.content.app.link3,
    href: `https://github.com/zombieFox/${APP_NAME}/issues`,
    openNew: true
  });

  const splash = new Splash();

  parent.appendChild(
    node('div', [
      splash.splash(),
      node('hr'),
      form.wrap({
        children: [
          appSetting.app.para1,
          form.indent({
            children: [
              node('p', [
                appSetting.app.link1.link()
              ])
            ]
          })
        ]
      }),
      form.wrap({
        children: [
          appSetting.app.para2,
          form.indent({
            children: [
              node('p', [
                appSetting.app.link2.link()
              ]),
              node('p', [
                appSetting.app.link3.link()
              ])
            ]
          })
        ]
      })
    ])
  );

};

export { appSetting };