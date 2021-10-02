import { APP_NAME } from '../../../constants';

import * as form from '../../form';

import { Link } from '../../link';


import { node } from '../../../utility/node';

const supportSetting = {};

supportSetting.link = {
  url: 'https://github.com/zombieFox/' + APP_NAME + '/wiki/',
  page: {
    applyToAll: 'Applying-bookmark-settings-to-all',
    browser: 'Browser-support',
    cookies: 'Cookies-and-cache',
    data: 'Data-backup-and-restore',
    localBackgroundImage: 'Local-background-image',
    protectedUrl: 'Protected-URLs',
    recovering: 'Recovering-settings-and-bookmarks',
    resetting: 'Resetting-when-opening-the-browser',
    privacy: 'Respecting-your-privacy',
    backgroundImageVideo: 'Setting-a-background-video-or-image',
    firefox: 'Setting-' + APP_NAME + '-as-your-Firefox-homepage'
  }
};

supportSetting.support = (parent) => {

  const makeLinks = () => {

    const wrap = form.wrap();

    const list = node('ul|class:list-feature');

    for (var key in supportSetting.link.page) {

      const supportLink = new Link({
        text: supportSetting.link.page[key].replace(/-/g, ' '),
        href: supportSetting.link.url + supportSetting.link.page[key],
        openNew: true
      });

      list.appendChild(node('li', [supportLink.link()]));

    }

    wrap.appendChild(list);

    return wrap;

  };

  const para = node('p');

  para.innerHTML = `For more support or feedback, submit an ${(new Link({ text: 'Issue', href: `https://github.com/zombieFox/${APP_NAME}/issues`, openNew: true })).link().outerHTML} or check the ${(new Link({ text: 'Wiki', href: `https://github.com/zombieFox/${APP_NAME}/wiki`, openNew: true })).link().outerHTML}.`;

  parent.appendChild(
    node('div', [
      makeLinks(),
      node('hr'),
      para
    ])
  );

};

export { supportSetting };
