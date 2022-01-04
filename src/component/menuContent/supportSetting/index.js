import { message } from '../../message';

import { APP_NAME } from '../../../constant';

import * as form from '../../form';

import { Link } from '../../link';

import { node } from '../../../utility/node';

const supportSetting = {};

supportSetting.supportPage = {
  get: () => {

    const supportLink = {};

    supportLink.baseUrl = 'https://github.com/zombieFox/' + APP_NAME + '/wiki/';

    supportLink.page = {
      applyToAll: {
        label: message.get('menuContentSupportPageApplyToAll'),
        url: 'Applying-bookmark-settings-to-all'
      },
      browser: {
        label: message.get('menuContentSupportPageBrowser'),
        url: 'Browser-support'
      },
      cookies: {
        label: message.get('menuContentSupportPageCookies'),
        url: 'Cookies-and-cache'
      },
      data: {
        label: message.get('menuContentSupportPageData'),
        url: 'Data-backup-and-restore'
      },
      localBackgroundImage: {
        label: message.get('menuContentSupportPageLocalBackgroundImage'),
        url: 'Local-background-image'
      },
      protectedUrl: {
        label: message.get('menuContentSupportPageProtectedUrl'),
        url: 'Protected-URLs'
      },
      recovering: {
        label: message.get('menuContentSupportPageRecovering'),
        url: 'Recovering-settings-and-bookmarks'
      },
      resetting: {
        label: message.get('menuContentSupportPageResetting'),
        url: 'Resetting-when-opening-the-browser'
      },
      privacy: {
        label: message.get('menuContentSupportPagePrivacy'),
        url: 'Respecting-your-privacy'
      },
      backgroundImageVideo: {
        label: message.get('menuContentSupportPageBackgroundImageVideo'),
        url: 'Setting-a-background-video-or-image'
      },
      firefox: {
        label: message.get('menuContentSupportPageFirefox'),
        url: 'Setting-' + APP_NAME + '-as-your-Firefox-homepage'
      },
    };

    return supportLink;

  }
};

supportSetting.support = (parent) => {

  const makeLinks = () => {

    const wrap = form.wrap();

    const list = node('ul|class:list-feature');

    const supportLink = supportSetting.supportPage.get();

    for (var key in supportLink.page) {

      const linkItem = new Link({
        text: supportLink.page[key].label,
        href: supportLink.baseUrl + supportLink.page[key].url,
        openNew: true
      });

      list.appendChild(node('li', [linkItem.link()]));

    }

    wrap.appendChild(list);

    return wrap;

  };

  supportSetting.support.para = node('p');

  supportSetting.support.para.innerHTML = message.get('menuContentSupportPara');

  supportSetting.support.linkIssue = new Link({
    text: message.get('menuContentSupportLink1'),
    href: `https://github.com/zombieFox/${APP_NAME}/issues`,
    openNew: true
  });

  supportSetting.support.linkWiki = new Link({
    text: message.get('menuContentSupportLink2'),
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
