import { message } from '../../message';

import * as form from '../../form';

import { node } from '../../../utility/node';

import { APP_NAME } from '../../../constant';

import { Link } from '../../link';
import { Splash } from '../../splash';

const appSetting = {};

appSetting.app = (parent) => {

  appSetting.app.para1 = node(`p:${message('menuContentAppPara1')}`);

  appSetting.app.link1 = new Link({
    text: message('menuContentAppLink1'),
    href: `https://www.reddit.com/r/${APP_NAME}`,
    openNew: true
  });

  appSetting.app.para2 = node(`p:${message('menuContentAppPara2')}`);

  appSetting.app.link2 = new Link({
    text: message('menuContentAppLink2'),
    href: `https://github.com/zombieFox/${APP_NAME}`,
    openNew: true
  });

  appSetting.app.link3 = new Link({
    text: message('menuContentAppLink3'),
    href: `https://github.com/zombieFox/${APP_NAME}/blob/master/license`,
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
