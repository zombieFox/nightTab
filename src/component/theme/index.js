import { state } from '../state';
import { APP_NAME } from '../../constant';
import { toolbar } from '../toolbar';
import { bookmark } from '../bookmark';
import { bookmarkDefault } from '../bookmarkDefault';
import { groupAndBookmark } from '../groupAndBookmark';
import { themeSetting } from '../menuContent/themeSetting';

import { Video } from '../video';

import { node } from '../../utility/node';
import { convertColor } from '../../utility/convertColor';
import { trimString } from '../../utility/trimString';
import { isValidString } from '../../utility/isValidString';
import { clearChildNode } from '../../utility/clearChildNode';
import { randomNumber } from '../../utility/randomNumber';
import { applyCSSVar } from '../../utility/applyCSSVar';
import { applyCSSClass } from '../../utility/applyCSSClass';
import { applyCSSState } from '../../utility/applyCSSState';

import WebFont from 'webfontloader';

import './index.css';

const theme = {};

theme.font = {};

theme.font.display = {
  timer: false,
  delay: () => {

    clearTimeout(theme.font.display.timer);

    theme.font.display.timer = setTimeout(theme.font.display.load, 600);

  },
  load: () => {

    const displayFont = trimString(state.get.current().theme.font.display.name);

    if (isValidString(displayFont)) {

      WebFont.load({
        // fontloading: (familyName, fvd) => { console.log('fontloading:', familyName); },
        google: { families: [trimString(displayFont) + ':100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i'] }
      });

    }

    theme.font.display.render();

  },
  render: () => {

    const html = document.querySelector('html');

    if (isValidString(trimString(state.get.current().theme.font.display.name))) {

      html.style.setProperty('--theme-font-display-name', '"' + trimString(state.get.current().theme.font.display.name) + '", "Fjalla One", sans-serif');

    } else {

      html.style.removeProperty('--theme-font-display-name');

    }

  }
};

theme.font.ui = {
  timer: false,
  delay: () => {

    clearTimeout(theme.font.ui.timer);

    theme.font.ui.timer = setTimeout(theme.font.ui.load, 600);

  },
  load: () => {

    const uiFont = trimString(state.get.current().theme.font.ui.name);

    if (isValidString(uiFont)) {

      WebFont.load({
        // fontloading: (familyName, fvd) => { console.log('fontloading:', familyName); },
        google: { families: [trimString(uiFont) + ':100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i'] }
      });

    }

    theme.font.ui.render();

  },
  render: () => {

    const html = document.querySelector('html');

    if (isValidString(trimString(state.get.current().theme.font.ui.name))) {

      html.style.setProperty('--theme-font-ui-name', '"' + trimString(state.get.current().theme.font.ui.name) + '", "Open Sans", sans-serif');

    } else {

      html.style.removeProperty('--theme-font-ui-name');

    }

  }
};

theme.color = {
  render: () => {
    const html = document.querySelector('html');

    let shades = (state.get.current().theme.color.contrast.end - state.get.current().theme.color.contrast.start) / (state.get.current().theme.color.shades - 1);

    for (var type in state.get.current().theme.color.range) {

      for (var i = 0; i < state.get.current().theme.color.shades; i++) {

        let hsl = JSON.parse(JSON.stringify(state.get.current().theme.color.range[type]));

        hsl.l = Math.round((shades * i) + state.get.current().theme.color.contrast.start);

        let rgb = convertColor.hsl.rgb(hsl);

        for (let key in rgb) {
          html.style.setProperty(`--theme-${type}-${i + 1}-${key}`, rgb[key]);
        }

        for (let key in hsl) {
          html.style.setProperty(`--theme-${type}-${i + 1}-${key}`, hsl[key]);
        }

      }

    }

    for (let i = 1; i <= state.get.current().theme.color.shades; i++) {
      html.style.setProperty(`--theme-primary-${i}`, `var(--theme-primary-${i}-h), calc(var(--theme-primary-${i}-s) * 1%), calc(var(--theme-primary-${i}-l) * 1%)`);
    }

  }
};

theme.accent = {};

theme.accent.random = {
  render: () => {

    if (state.get.current().theme.accent.random.active) {

      const randomAccentType = {
        any: () => { return { h: randomNumber(0, 360), s: randomNumber(0, 100), l: randomNumber(0, 100) }; },
        light: () => { return { h: randomNumber(0, 360), s: randomNumber(50, 90), l: randomNumber(50, 90) }; },
        dark: () => { return { h: randomNumber(0, 360), s: randomNumber(10, 50), l: randomNumber(10, 50) }; },
        pastel: () => { return { h: randomNumber(0, 360), s: 50, l: 80 }; },
        saturated: () => { return { h: randomNumber(0, 360), s: 100, l: 50 }; }
      };

      const hsl = randomAccentType[state.get.current().theme.accent.random.style]();

      const rgb = convertColor.hsl.rgb(hsl);

      state.get.current().theme.accent.rgb = rgb;

      state.get.current().theme.accent.hsl = hsl;

    }

  }
};

theme.accent.rainbow = {
  render: () => {

    const units = 360 / bookmark.count();

    let degree = 0;

    bookmark.all.forEach((item) => {

      item.items.forEach((item) => {

        item.accent.by = 'custom';

        item.accent.hsl = { h: Math.round(degree), s: 100, l: 50 };

        item.accent.rgb = convertColor.hsl.rgb(item.accent.hsl);

        degree = degree + units;

      });

    });

    groupAndBookmark.render();

  },
  clear: () => {

    bookmark.all.forEach((item) => {

      item.items.forEach((item) => {

        item.accent = JSON.parse(JSON.stringify(bookmarkDefault.accent));

      });

    });

    groupAndBookmark.render();

  }
};

theme.accent.cycle = {
  timer: false,
  bind: () => {

    if (state.get.current().theme.accent.cycle.active) {

      clearInterval(theme.accent.cycle.timer);

      theme.accent.cycle.timer = setInterval(() => {

        theme.accent.cycle.render();

        if (state.get.current().menu) {
          themeSetting.control.accent.color.update();
        }

        if (state.get.current().toolbar.accent.show) {
          toolbar.current.update.accent();
        }

      }, state.get.current().theme.accent.cycle.speed);

    } else {

      clearInterval(theme.accent.cycle.timer);

      theme.accent.cycle.timer = false;

    }

  },
  render: () => {

    let newValue = state.get.current().theme.accent.hsl.h + state.get.current().theme.accent.cycle.step;

    if (newValue > 359) { newValue = 0; }

    state.get.current().theme.accent.hsl.h = newValue;

    state.get.current().theme.accent.rgb = convertColor.hsl.rgb(state.get.current().theme.accent.hsl);

    applyCSSVar([
      'theme.accent.rgb.r',
      'theme.accent.rgb.g',
      'theme.accent.rgb.b',
      'theme.accent.hsl.h',
      'theme.accent.hsl.s',
      'theme.accent.hsl.l'
    ]);

  }
};

theme.style = {
  bind: () => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      theme.style.initial();
    });
  },
  initial: () => {
    switch (state.get.current().theme.style) {

      case 'dark':
      case 'light':

        localStorage.setItem(APP_NAME + 'Style', state.get.current().theme.style);
        break;

      case 'system':

        if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
          localStorage.setItem(APP_NAME + 'Style', 'dark');
        } else if (window.matchMedia('(prefers-color-scheme:light)').matches) {
          localStorage.setItem(APP_NAME + 'Style', 'light');
        }
        break;

    }
  },
  dark: () => {
    state.get.current().theme.style = 'dark';
    theme.style.initial();
    applyCSSClass('theme.style');
  },
  light: () => {
    state.get.current().theme.style = 'light';
    theme.style.initial();
    applyCSSClass('theme.style');
  },
  toggle: () => {
    switch (state.get.current().theme.style) {

      case 'dark':
        theme.style.light();
        break;

      case 'light':
        theme.style.dark();
        break;

    }
  }
};

theme.background = {
  element: {
    background: node('div|class:background'),
    type: {
      theme: node('div|class:theme-background-type theme-background-type-theme'),
      accent: node('div|class:theme-background-type theme-background-type-accent'),
      color: node('div|class:theme-background-type theme-background-type-color'),
      gradient: node('div|class:theme-background-type theme-background-type-gradient'),
      image: {
        imageElement: node('div|class:theme-background-type theme-background-type-image'),
        wrap: node('div|class:theme-background-type-image-wrap'),
        accent: node('div|class:theme-background-type-image-accent'),
        vignette: node('div|class:theme-background-type-image-vignette')
      },
      video: {
        videoElement: node('div|class:theme-background-type theme-background-type-video'),
        wrap: node('div|class:theme-background-type-video-wrap'),
        accent: node('div|class:theme-background-type-video-accent'),
        vignette: node('div|class:theme-background-type-video-vignette')
      },
    },
    video: false
  }
};

theme.background.area = {
  render: () => {
    state.get.option().theme.background.type.forEach((item) => {

      switch (item) {

        case 'image':

          theme.background.element.type.image.imageElement.appendChild(theme.background.element.type.image.wrap);
          theme.background.element.type.image.imageElement.appendChild(theme.background.element.type.image.accent);
          theme.background.element.type.image.imageElement.appendChild(theme.background.element.type.image.vignette);
          theme.background.element.background.appendChild(theme.background.element.type.image.imageElement);

          break;

        case 'video':

          theme.background.element.type.video.videoElement.appendChild(theme.background.element.type.video.wrap);
          theme.background.element.type.video.videoElement.appendChild(theme.background.element.type.video.accent);
          theme.background.element.type.video.videoElement.appendChild(theme.background.element.type.video.vignette);
          theme.background.element.background.appendChild(theme.background.element.type.video.videoElement);

          break;

        default:

          theme.background.element.background.appendChild(theme.background.element.type[item]);

      }

    });

    document.querySelector('body').appendChild(theme.background.element.background);

  }
};

theme.background.image = {
  timer: false,
  delay: () => {

    if (theme.background.image.timer) {
      clearTimeout(theme.background.image.timer);
      
      theme.background.image.timer = false;
    }
    
    const timeout = state.get.current().theme.background.image.refresh;

    if (timeout) {
      theme.background.image.timer = setInterval(() => {
        theme.background.image.render();
      }, timeout * 1000 * 60);
    }

  },
  load: () => {

    theme.background.image.delay();
    theme.background.image.render();

  },
  render: () => {

    const html = document.querySelector('html');

    if (isValidString(state.get.current().theme.background.image.url)) {

      const allUrls = trimString(state.get.current().theme.background.image.url).split(/\s+/).filter((item) => { return item != ''; });

      html.style.setProperty('--theme-background-image', 'url("' + allUrls[Math.floor(Math.random() * allUrls.length)] + '")');

    } else {

      html.style.removeProperty('--theme-background-image');

    }

  }
};

theme.background.video = {
  render: () => {

    if (isValidString(state.get.current().theme.background.video.url)) {

      const allUrls = trimString(state.get.current().theme.background.video.url).split(/\s+/).filter((item) => { return item != ''; });

      theme.background.element.video = new Video({
        url: allUrls[Math.floor(Math.random() * allUrls.length)]
      });

      theme.background.element.video.bind.add();

      theme.background.element.type.video.wrap.appendChild(theme.background.element.video.video);

    } else {

      theme.background.video.clear();

    }

  },
  clear: () => {

    if (theme.background.element.video) {

      theme.background.element.video.bind.remove();

      theme.background.element.video = false;

      clearChildNode(theme.background.element.type.video.wrap);

    }

  }
};

theme.init = () => {
  theme.style.initial();
  theme.style.bind();
  theme.color.render();
  theme.accent.random.render();
  theme.accent.cycle.bind();
  theme.font.display.load();
  theme.font.ui.load();
  theme.background.area.render();
  theme.background.image.load();
  theme.background.video.render();
  applyCSSVar([
    'theme.accent.rgb.r',
    'theme.accent.rgb.g',
    'theme.accent.rgb.b',
    'theme.accent.hsl.h',
    'theme.accent.hsl.s',
    'theme.accent.hsl.l',
    'theme.font.display.weight',
    'theme.font.display.style',
    'theme.font.ui.weight',
    'theme.font.ui.style',
    'theme.opacity.general',
    'theme.background.color.rgb.r',
    'theme.background.color.rgb.g',
    'theme.background.color.rgb.b',
    'theme.background.color.hsl.h',
    'theme.background.color.hsl.s',
    'theme.background.color.hsl.l',
    'theme.background.image.blur',
    'theme.background.image.grayscale',
    'theme.background.image.scale',
    'theme.background.image.accent',
    'theme.background.image.opacity',
    'theme.background.image.vignette.opacity',
    'theme.background.image.vignette.start',
    'theme.background.image.vignette.end',
    'theme.background.video.blur',
    'theme.background.video.grayscale',
    'theme.background.video.scale',
    'theme.background.video.accent',
    'theme.background.video.opacity',
    'theme.background.video.vignette.opacity',
    'theme.background.video.vignette.start',
    'theme.background.video.vignette.end',
    'theme.background.gradient.angle',
    'theme.background.gradient.start.rgb.r',
    'theme.background.gradient.start.rgb.g',
    'theme.background.gradient.start.rgb.b',
    'theme.background.gradient.start.hsl.h',
    'theme.background.gradient.start.hsl.s',
    'theme.background.gradient.start.hsl.l',
    'theme.background.gradient.end.rgb.r',
    'theme.background.gradient.end.rgb.g',
    'theme.background.gradient.end.rgb.b',
    'theme.background.gradient.end.hsl.h',
    'theme.background.gradient.end.hsl.s',
    'theme.background.gradient.end.hsl.l',
    'theme.radius',
    'theme.shadow',
    'theme.shade.opacity',
    'theme.shade.blur',
    'theme.layout.color.rgb.r',
    'theme.layout.color.rgb.g',
    'theme.layout.color.rgb.b',
    'theme.layout.color.hsl.h',
    'theme.layout.color.hsl.s',
    'theme.layout.color.hsl.l',
    'theme.layout.color.opacity',
    'theme.layout.color.blur',
    'theme.layout.divider.size',
    'theme.header.color.rgb.r',
    'theme.header.color.rgb.g',
    'theme.header.color.rgb.b',
    'theme.header.color.hsl.h',
    'theme.header.color.hsl.s',
    'theme.header.color.hsl.l',
    'theme.header.color.opacity',
    'theme.header.search.opacity',
    'theme.bookmark.color.rgb.r',
    'theme.bookmark.color.rgb.g',
    'theme.bookmark.color.rgb.b',
    'theme.bookmark.color.hsl.h',
    'theme.bookmark.color.hsl.s',
    'theme.bookmark.color.hsl.l',
    'theme.bookmark.color.opacity',
    'theme.bookmark.item.opacity',
    'theme.toolbar.opacity',
    'theme.group.toolbar.opacity'
  ]);
  applyCSSClass([
    'theme.style',
    'theme.background.type',
    'theme.layout.color.by',
    'theme.header.color.by',
    'theme.bookmark.color.by'
  ]);
  applyCSSState([
    'theme.layout.divider.size',
    'theme.accent.cycle.active'
  ]);
};

export { theme };