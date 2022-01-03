import { APP_NAME } from '../../constant';

import { default as en_GB } from '../../locale/en_GB/messages.json';

export const message = (id) => {

  let string;

  if (chrome.i18n) {

    string = chrome.i18n.getMessage(id);

  } else {

    string = en_GB[id].message;

  }

  string = string.replaceAll('{appName}', APP_NAME);

  return string;

};
