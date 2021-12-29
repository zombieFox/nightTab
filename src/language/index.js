import { state } from '../component/state';

import { APP_NAME } from '../constant';

import { default as en_GB } from './en_GB.json';
import { default as en_US } from './en_US.json';
import { default as de } from './de.json';
import { default as fr } from './fr.json';
import { default as es } from './es.json';
import { default as hi } from './hi.json';
import { default as ja_JP } from './ja_JP.json';
import { default as ru } from './ru.json';

const language = { en_GB, en_US, de, fr, es, hi, ja_JP, ru };

language.list = [
  { code: 'de', name: 'Deutsch' },
  { code: 'en_GB', name: 'English (United Kingdom)' },
  { code: 'en_US', name: 'English (United States)' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'ja_JP', name: '日本語' },
  { code: 'ru', name: 'Pусский' }
];

language.name = () => language.list.map(item => item.name);

language.code = () => language.list.map(item => item.code);

language.current = en_GB;

language.init = () => {

  let languageString = JSON.stringify(language[state.get.current().language]);

  language.current = JSON.parse(languageString.replaceAll('{appName}', APP_NAME));

};

export { language };