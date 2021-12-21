import { language } from '../../../language';

import { APP_NAME } from '../../../constant';

import * as form from '../../form';

import { Link } from '../../link';

import { node } from '../../../utility/node';

const supportSetting = {};

supportSetting.link = {
  url: 'https://github.com/zombieFox/' + APP_NAME + '/wiki/',
  page: {
    applyToAll: {
      label: language.current.menu.content.support.applyToAll,
      url: 'Applying-bookmark-settings-to-all'
    },
    browser: {
      label: language.current.menu.content.support.browser,
      url: 'Browser-support'
    },
    cookies: {
      label: language.current.menu.content.support.cookies,
      url: 'Cookies-and-cache'
    },
    data: {
      label: language.current.menu.content.support.data,
      url: 'Data-backup-and-restore'
    },
    localBackgroundImage: {
      label: language.current.menu.content.support.localBackgroundImage,
      url: 'Local-background-image'
    },
    protectedUrl: {
      label: language.current.menu.content.support.protectedUrl,
      url: 'Protected-URLs'
    },
    recovering: {
      label: language.current.menu.content.support.recovering,
      url: 'Recovering-settings-and-bookmarks'
    },
    resetting: {
      label: language.current.menu.content.support.resetting,
      url: 'Resetting-when-opening-the-browser'
    },
    privacy: {
      label: language.current.menu.content.support.privacy,
      url: 'Respecting-your-privacy'
    },
    backgroundImageVideo: {
      label: language.current.menu.content.support.backgroundImageVideo,
      url: 'Setting-a-background-video-or-image'
    },
    firefox: {
      label: language.current.menu.content.support.firefox,
      url: 'Setting-' + APP_NAME + '-as-your-Firefox-homepage'
    },
  }
};

supportSetting.support = (parent) => {

  const makeLinks = () => {

    const wrap = form.wrap();

    const list = node('ul|class:list-feature');

    for (var key in supportSetting.link.page) {

      const supportLink = new Link({
        text: supportSetting.link.page[key].label,
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