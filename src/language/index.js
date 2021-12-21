import { state } from '../component/state';

import { APP_NAME } from '../constant';

import { default as en } from './en.json';
import { default as de } from './de.json';

const language = { en, de };

language.init = () => {

  let languageString = JSON.stringify(language[state.get.current().language]);

  language.current = JSON.parse(languageString.replaceAll('{appName}', APP_NAME));

};

language.current = en;

export { language };