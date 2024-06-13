import { APP_NAME } from '../../constant';

import { browserDetect } from '../browserDetect';

// import { default as bn } from '../../locale/bn/messages.json';
// import { default as de } from '../../locale/de/messages.json';
// import { default as en_GB } from '../../locale/en_GB/messages.json';
// import { default as en_US } from '../../locale/en_US/messages.json';
// import { default as es } from '../../locale/es/messages.json';
// import { default as fil } from '../../locale/fil/messages.json';
// import { default as fr } from '../../locale/fr/messages.json';
// import { default as gu } from '../../locale/gu/messages.json';
// import { default as hi } from '../../locale/hi/messages.json';
// import { default as id } from '../../locale/id/messages.json';
// import { default as it } from '../../locale/it/messages.json';
// import { default as ja } from '../../locale/ja/messages.json';
// import { default as ms } from '../../locale/ms/messages.json';
// import { default as pt } from '../../locale/pt/messages.json';
// import { default as ru } from '../../locale/ru/messages.json';
// import { default as uk } from '../../locale/uk/messages.json';
// import { default as vi } from '../../locale/vi/messages.json';

const message = {};

message.language = {
  // pack: { bn, de, en_GB, en_US, es, fil, fr, gu, hi, id, it, ja, ms, pt, ru, uk, vi }
};

// message.language.list = () => {
//
//   const list = [
//     { code: 'bn', name: 'বাংলা' }, // Bengali
//     { code: 'de', name: 'Deutsch' }, // German
//     { code: 'en_GB', name: 'English' }, // English GB
//     { code: 'en_US', name: 'English' }, // English USA
//     { code: 'es', name: 'Español' }, // Spanish
//     { code: 'fil', name: 'Filipino' }, // Filipino
//     { code: 'fr', name: 'Français' }, // French
//     { code: 'gu', name: 'ગુજરાતી' }, // Gujarati
//     { code: 'hi', name: 'हिंदी' }, // Hindi
//     { code: 'id', name: 'Indonesia' }, // Indonesian
//     { code: 'it', name: 'Italiano' }, // Italian
//     { code: 'ja', name: '日本語' }, // Japanese
//     { code: 'ms', name: 'Melayu' }, // Malay
//     { code: 'pt', name: 'Português' }, // Portuguese
//     { code: 'ru', name: 'Pусский' }, // Russian
//     { code: 'uk', name: 'український' }, // Ukrainian
//     { code: 'vi', name: 'англійська' } // Vietnamese
//   ];
//
//   list.forEach((item) => {
//
//     if (item.code.indexOf('_') > -1) {
//       item.name = `${item.name} — ${(item.code.substring(0, item.code.indexOf('_'))).toUpperCase()} (${item.code.substring(item.code.indexOf('_') + 1, item.code.length)})`;
//     } else {
//       item.name = `${item.name} — ${(item.code).toUpperCase()}`;
//     }
//
//   });
//
//   list.unshift({ name: '—', disabled: true });
//
//   list.unshift({ code: 'system', name: message.get('menuContentLanguageSystem') });
//
//   return list;
//
// };

// message.language.name = () => message.language.list().map(item => item.name);

// message.language.code = () => message.language.list().map(item => item.code);

message.get = (stringId) => {

  let string;

  if (browserDetect().chrome && typeof chrome != 'undefined') {
    // if browser is chrome

    if ('i18n' in chrome) {
      // if installed as extension

      string = chrome.i18n.getMessage(stringId);

    }

  } else if (browserDetect().firefox && typeof browser != 'undefined') {
    // if browser is firefox

    if ('i18n' in browser) {
      // if installed as addon

      string = browser.i18n.getMessage(stringId);

    }

  } else {

    string = message.language.pack.en_GB[stringId].message;

  }

  // switch (state.get.current().language) {
  //
  //   // use system language
  //   case 'system':
  //
  //     if (browserDetect().chrome && typeof chrome != 'undefined') {
  //       // if browser is chrome
  //
  //       if ('i18n' in chrome) {
  //         // if installed as extension
  //
  //         string = chrome.i18n.getMessage(stringId);
  //
  //       } else {
  //
  //         string = message.language.pack.en_GB[stringId].message;
  //
  //       }
  //
  //     } else if (browserDetect().firefox && typeof browser != 'undefined') {
  //       // if browser is firefox
  //
  //       if ('i18n' in browser) {
  //         // if installed as addon
  //
  //         string = browser.i18n.getMessage(stringId);
  //
  //       } else {
  //
  //         string = message.language.pack.en_GB[stringId].message;
  //
  //       }
  //
  //     } else {
  //
  //       string = message.language.pack.en_GB[stringId].message;
  //
  //     }
  //
  //     break;
  //
  //     // use manually selected language
  //   default:
  //
  //     if (stringId in message.language.pack[state.get.current().language]) {
  //
  //       // string found in chosen language
  //       string = message.language.pack[state.get.current().language][stringId].message;
  //
  //     } else {
  //
  //       // or use default language
  //       string = message.language.pack.en_GB[stringId].message;
  //
  //     }
  //
  //     break;
  //
  // }

  if (string && string.indexOf('{appName}') > -1) {

    string = string.replaceAll('{appName}', APP_NAME);

  }

  return string;

};

export { message };