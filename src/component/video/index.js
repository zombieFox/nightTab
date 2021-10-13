
import { node } from '../../utility/node';
import { isValidString } from '../../utility/isValidString';

export const Video = function ({
  url = false
} = {}) {

  this.video = node('video|autoplay,loop');

  this.source = node('source');

  this.video.appendChild(this.source);

  window.addEventListener('visibilitychange', e => {
    e.preventDefault();

    if (document.visibilityState === 'visible') {
      this.play();
    } else {
      this.pause();
    }
  });

  this.play = () => {
    this.video.play();
  };

  this.pause = () => {
    const playPromise = this.video.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.video.pause();
      });
    }
  };

  this.assemble = () => {

    this.video.loop = true;
    
    const params = new URLSearchParams(url);
    const volume = params.get('volume') / 100;

    this.video.volume = volume;

    this.video.autoplay = true;

    if (url.includes('mp4') || url.endsWith('mp4')) {

      this.source.type = 'video/mp4';

    } else if (url.includes('webm') || url.endsWith('webm')) {

      this.source.type = 'video/webm';

    }

    if (isValidString(url)) {

      this.source.src = url;

    }

  };

  this.assemble();

};
