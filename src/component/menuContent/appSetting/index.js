import { language } from '../../../language';

import { node } from '../../../utility/node';

import { APP_NAME } from '../../../constant';

import { Link } from '../../link';
import { Splash } from '../../splash';

const appSetting = {};

appSetting.app = (parent) => {

  const githubLink = new Link({ text: language.current.menu.content.app.link1.a2, href: `https://github.com/zombieFox/${APP_NAME}`, openNew: true });

  const redditLink = new Link({ text: language.current.menu.content.app.link2.a2, href: `https://www.reddit.com/r/${APP_NAME}`, openNew: true });

  const licenseLink = new Link({ text: language.current.menu.content.app.link3.a2, href: `https://github.com/zombieFox/${APP_NAME}/blob/master/license`, openNew: true });

  const para1 = node('p');

  para1.innerHTML = `${language.current.menu.content.app.link1.a1} ${githubLink.link().outerHTML}`;

  const para2 = node('p');

  para2.innerHTML = `${language.current.menu.content.app.link2.a1} ${redditLink.link().outerHTML}`;

  const para3 = node('p');

  para3.innerHTML = `${language.current.menu.content.app.link3.a1} ${licenseLink.link().outerHTML}`;

  const splash = new Splash();

  parent.appendChild(
    node('div', [
      splash.splash(),
      node('hr'),
      para1,
      para2,
      para3
    ])
  );

};

export { appSetting };
