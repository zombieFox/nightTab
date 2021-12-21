import { state } from '../component/state';

import { default as en } from './en.json';
import { default as de } from './de.json';

const language = { en, de };

language.current = () => {
  return language[state.get.current().language];
};

export { language };
