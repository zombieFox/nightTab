import { APP_NAME } from '../../constant';

import { state } from '../state';

import { default as bn } from '../../locale/bn/messages.json';
import { default as de } from '../../locale/de/messages.json';
import { default as en_GB } from '../../locale/en_GB/messages.json';
import { default as en_US } from '../../locale/en_US/messages.json';
import { default as es } from '../../locale/es/messages.json';
import { default as fil } from '../../locale/fil/messages.json';
import { default as fr } from '../../locale/fr/messages.json';
import { default as gu } from '../../locale/gu/messages.json';
import { default as hi } from '../../locale/hi/messages.json';
import { default as id } from '../../locale/id/messages.json';
import { default as it } from '../../locale/it/messages.json';
import { default as ja } from '../../locale/ja/messages.json';
import { default as ms } from '../../locale/ms/messages.json';
import { default as pt } from '../../locale/pt/messages.json';
import { default as ru } from '../../locale/ru/messages.json';
import { default as uk } from '../../locale/uk/messages.json';
import { default as vi } from '../../locale/vi/messages.json';

const message = {};

message.language = { bn, de, en_GB, en_US, es, fil, fr, gu, hi, id, it, ja, ms, pt, ru, uk, vi };

message.language.list = () => {

  return [
    { id: 'system', name: message.get('menuContentLanguageSystem') }, // automatic
    { id: 'bn', name: 'বাংলা' }, // Bengali
    { id: 'de', name: 'Deutsch' }, // German
    { id: 'en_GB', name: 'English (Great Britain)' }, // English (Great Britain)
    { id: 'en_US', name: 'English (USA)' }, // English (USA)
    { id: 'es', name: 'Español' }, // Spanish
    { id: 'fil', name: 'Filipino' }, // Filipino
    { id: 'fr', name: 'Français' }, // French
    { id: 'gu', name: 'ગુજરાતી' }, // Gujarati
    { id: 'hi', name: 'हिंदी' }, // Hindi
    { id: 'id', name: 'Indonesia' }, // Indonesian
    { id: 'it', name: 'Italiano' }, // Italian
    { id: 'ja', name: '日本語' }, // Japanese
    { id: 'ms', name: 'Melayu' }, // Malay
    { id: 'pt', name: 'Português' }, // Portuguese
    { id: 'ru', name: 'Pусский' }, // Russian
    { id: 'uk', name: 'український' }, // Ukrainian
    { id: 'vi', name: 'англійська' } // Vietnamese
  ];

};

message.language.name = () => message.language.list().map(item => item.name);

message.language.id = () => message.language.list().map(item => item.id);

message.get = (stringId) => {

  let string;

  switch (state.get.current().language) {

    case 'system':
      // language set to use system language

      if (chrome.i18n) {

        // installed as extension, use browser language
        string = chrome.i18n.getMessage(stringId);

      } else {

        // not installed as extension, use default language
        string = message.language.en_GB[stringId].message;

      }

      break;

    default:
      // language set to use user choice

      if (stringId in message.language[state.get.current().language]) {

        // string found in chosen language
        string = message.language[state.get.current().language][stringId].message;

      } else {

        // or use default language
        string = message.language.en_GB[stringId].message;

      }

      break;

  }

  if (string.indexOf('{appName}') > -1) {

    string = string.replaceAll('{appName}', APP_NAME);

  }

  return string;

};

export { message };
