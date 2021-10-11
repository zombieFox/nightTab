import { node } from '../../../utility/node';

import { APP_NAME } from '../../../constant';

import { Link } from '../../link';
import { Splash } from '../../splash';

const appSetting = {};

appSetting[APP_NAME.toLowerCase()] = (parent) => {

  const githubLink = new Link({ text: 'GitHub.', href: `https://github.com/zombieFox/${APP_NAME}`, openNew: true });

  const redditLink = new Link({ text: `Reddit ${APP_NAME} community.`, href: `https://www.reddit.com/r/${APP_NAME}`, openNew: true });

  const licenseLink = new Link({ text: 'GNU General Public License v3.0', href: `https://github.com/zombieFox/${APP_NAME}/blob/master/license`, openNew: true });

  const para1 = node('p');

  para1.innerHTML = `This project can be found on ${githubLink.link().outerHTML}`;

  const para2 = node('p');

  para2.innerHTML = `Share your setup with the ${redditLink.link().outerHTML}`;

  const para3 = node('p');

  para3.innerHTML = `${APP_NAME} uses the ${licenseLink.link().outerHTML}`;

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
