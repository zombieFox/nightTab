import { state } from '../component/state';
import { get } from './get';

export const applyCSSClass = (path) => {

  const html = document.querySelector('html');

  const apply = (path) => {

    get({
      object: state.get.option(),
      path: path
    }).forEach((item) => {

      html.classList.remove('is-' + path.replace(/\./g, '-').toLowerCase() + '-' + item);

    });

    html.classList.add('is-' + path.replace(/\./g, '-').toLowerCase() + '-' + get({
      object: state.get.current(),
      path: path
    }));

  };

  if (Array.isArray(path)) {

    path.forEach((item) => { apply(item); });

  } else {

    apply(path);

  }

};
