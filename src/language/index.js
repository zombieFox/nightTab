import { state } from '../component/state';

import { APP_NAME } from '../constant';

import { default as en } from './en.json';
import { default as de } from './de.json';
import { default as fr } from './fr.json';
import { default as es } from './es.json';
import { default as hi } from './hi.json';
import { default as ru } from './ru.json';

const language = { en, de, fr, es, hi, ru };

language.name = {
  en: ['English', 'German', 'French', 'Spanish', 'Hindi', 'Russian'],
  de: ['Englisch', 'Deutsch', 'Französisch', 'Spanisch', 'Hindi', 'Russisch'],
  fr: ['Anglais', 'Allemand', 'Français', 'Espagnol', 'Hindi', 'Russe'],
  es: ['Inglés', 'Alemán', 'Francés', 'Español', 'Hindi', 'Ruso'],
  hi: ['अंग्रेजी', 'जर्मन', 'फ्रेंच', 'स्पैनिश', 'हिंदी', 'रूसी'],
  ru: ['Английский', 'немецкий', 'французский', 'испанский', 'хинди', 'русский']
};

language.code = ['en', 'de', 'fr', 'es', 'hi', 'ru'];

language.current = en;

language.init = () => {

  let languageString = JSON.stringify(language[state.get.current().language]);

  language.current = JSON.parse(languageString.replaceAll('{appName}', APP_NAME));

};

export { language };
