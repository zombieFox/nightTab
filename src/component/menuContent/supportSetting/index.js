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
      label: language.current.menu.content.support.page.applyToAll,
      url: 'Applying-bookmark-settings-to-all'
    },
    browser: {
      label: language.current.menu.content.support.page.browser,
      url: 'Browser-support'
    },
    cookies: {
      label: language.current.menu.content.support.page.cookies,
      url: 'Cookies-and-cache'
    },
    data: {
      label: language.current.menu.content.support.page.data,
      url: 'Data-backup-and-restore'
    },
    localBackgroundImage: {
      label: language.current.menu.content.support.page.localBackgroundImage,
      url: 'Local-background-image'
    },
    protectedUrl: {
      label: language.current.menu.content.support.page.protectedUrl,
      url: 'Protected-URLs'
    },
    recovering: {
      label: language.current.menu.content.support.page.recovering,
      url: 'Recovering-settings-and-bookmarks'
    },
    resetting: {
      label: language.current.menu.content.support.page.resetting,
      url: 'Resetting-when-opening-the-browser'
    },
    privacy: {
      label: language.current.menu.content.support.page.privacy,
      url: 'Respecting-your-privacy'
    },
    backgroundImageVideo: {
      label: language.current.menu.content.support.page.backgroundImageVideo,
      url: 'Setting-a-background-video-or-image'
    },
    firefox: {
      label: language.current.menu.content.support.page.firefox,
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
        href: supportSetting.link.url + supportSetting.link.page[key].url,
        openNew: true
      });

      list.appendChild(node('li', [supportLink.link()]));

    }

    wrap.appendChild(list);

    return wrap;

  };

  supportSetting.support.para = node('p');

  supportSetting.support.para.innerHTML = language.current.menu.content.support.p1;

  supportSetting.support.linkIssue = new Link({
    text: language.current.menu.content.support.link1,
    href: `https://github.com/zombieFox/${APP_NAME}/issues`,
    openNew: true
  });

  supportSetting.support.linkWiki = new Link({
    text: language.current.menu.content.support.link2,
    href: `https://github.com/zombieFox/${APP_NAME}/wiki`,
    openNew: true
  });

  parent.appendChild(
    node('div', [
      makeLinks(),
      node('hr'),
      supportSetting.support.para,
      form.indent({
        children: [
          node('p', supportSetting.support.linkIssue.link()),
          node('p', supportSetting.support.linkWiki.link())
        ]
      })
    ])
  );

};

export { supportSetting };