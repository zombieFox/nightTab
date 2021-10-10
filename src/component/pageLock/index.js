import { state } from '../state';

const pageLock = {};

pageLock.render = () => {

  const html = document.querySelector('html');

  if (state.get.current().modal || state.get.current().menu) {
    html.classList.add('is-scroll-disabled');
  } else {
    html.classList.remove('is-scroll-disabled');
  }

};

pageLock.init = () => {
  state.get.current().modal = false;
  state.get.current().menu = false;
};

export { pageLock };
