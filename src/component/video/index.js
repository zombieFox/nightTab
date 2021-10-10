
import { node } from '../../utility/node';
import { isValidString } from '../../utility/isValidString';

export const Video = function ({
  url = false
} = {}) {

  this.video = node('video|autoplay,loop,muted');

  this.source = node('source');

  this.video.appendChild(this.source);

  this.play = () => {
    this.video.play();
  };

  this.pause = () => {
    var playPromise = this.video.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.video.pause();
      });
    }
  };

  this.assemble = () => {

    this.video.muted = true;

    this.video.loop = true;

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
