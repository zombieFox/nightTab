import { state } from '../component/state';
import { get } from './get';

export const applyCSSVar = (path) => {

  const html = document.querySelector('html');

  const apply = (path) => {

    html.style.setProperty('--' + path.replace(/\./g, '-').toLowerCase(), get({
      object: state.get.current(),
      path: path
    }));

  };

  if (Array.isArray(path)) {

    path.forEach((item, i) => { apply(item); });

  } else {

    apply(path);

  };

};
