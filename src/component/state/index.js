const state = {};

state.current = {};

state.default = {
  layout: {
    area: {
      header: { width: 100, justify: 'center' },
      bookmark: { width: 100, justify: 'center' }
    },
    alignment: 'center-center',
    order: 'header-bookmark',
    direction: 'vertical',
    size: 100,
    width: 80,
    padding: 40,
    gutter: 20,
    breakpoint: 'xs',
    scrollbar: 'auto',
    title: '',
    overscroll: false
  },
  header: {
    item: { justify: 'left' },
    greeting: { show: false, type: 'good', custom: '', name: '', size: 100, newLine: false },
    transitional: { show: false, type: 'time-and-date', size: 100, newLine: false },
    clock: {
      hour: { show: true, display: 'number' },
      minute: { show: true, display: 'number' },
      second: { show: false, display: 'number' },
      separator: { show: true, text: '' },
      meridiem: { show: false },
      hour24: { show: true },
      size: 100,
      newLine: false
    },
    date: {
      day: { show: false, display: 'word', weekStart: 'monday', length: 'long' },
      date: { show: true, display: 'number', ordinal: true },
      month: { show: true, display: 'word', length: 'short', ordinal: true },
      year: { show: false, display: 'number' },
      separator: { show: true, text: '' },
      format: 'date-month',
      size: 100,
      newLine: false
    },
    search: {
      show: true,
      width: { by: 'auto', size: 30 },
      engine: { selected: 'google', custom: { name: '', url: '', queryName: '' } },
      text: { justify: 'center' },
      size: 100,
      newLine: false,
      newTab: false
    },
    order: [],
    edit: false
  },
  bookmark: {
    size: 100,
    url: { show: true },
    line: { show: true },
    shadow: { show: true },
    hoverScale: { show: true },
    orientation: 'bottom',
    style: 'block',
    newTab: false,
    edit: false,
    add: false,
    show: true
  },
  group: {
    area: { justify: 'left' },
    order: 'header-body',
    name: { size: 100 },
    toolbar: { size: 100 },
    edit: false,
    add: false
  },
  toolbar: { location: 'header', position: 'bottom-right', size: 100, accent: { show: true }, add: { show: true }, edit: { show: true }, newLine: false },
  theme: {
    color: { range: { primary: { h: 222, s: 14 } }, contrast: { start: 17, end: 83 }, shades: 14 },
    accent: { hsl: { h: 221, s: 100, l: 50 }, rgb: { r: 0, g: 80, b: 255 }, random: { active: false, style: 'any' }, cycle: { active: false, speed: 300, step: 10 } },
    font: {
      display: { name: '', weight: 400, style: 'normal' },
      ui: { name: '', weight: 400, style: 'normal' }
    },
    background: {
      type: 'theme',
      color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
        end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
    },
    opacity: { general: 100 },
    layout: { color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, blur: 0, opacity: 10 }, divider: { size: 0 } },
    header: { color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 10 }, search: { opacity: 100 } },
    bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 100 } },
    group: { toolbar: { opacity: 100 } },
    toolbar: { opacity: 100 },
    style: 'dark',
    radius: 25,
    shadow: 75,
    shade: { opacity: 30, blur: 0 },
    custom: { all: [], edit: false }
  },
  search: false,
  modal: false,
  menu: false
};

state.minMax = {
  header: {
    greeting: { size: { min: 50, max: 500 } },
    transitional: { size: { min: 50, max: 500 } },
    clock: { size: { min: 50, max: 500 } },
    date: { size: { min: 50, max: 500 } },
    search: { size: { min: 50, max: 500 }, width: { size: { min: 10, max: 100 } } }
  },
  bookmark: { size: { min: 50, max: 500 } },
  group: {
    name: { size: { min: 50, max: 500 } },
    toolbar: { size: { min: 50, max: 500 } }
  },
  layout: {
    area: {
      header: { width: { min: 10, max: 100 } },
      bookmark: { width: { min: 10, max: 100 } }
    },
    size: { min: 10, max: 200 },
    width: { min: 10, max: 100 },
    padding: { min: 0, max: 300 },
    gutter: { min: 0, max: 300 }
  },
  toolbar: { size: { min: 50, max: 500 } },
  theme: {
    color: {
      range: { primary: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 } } },
      contrast: { start: { min: 0, max: 100 }, end: { min: 0, max: 100 } }
    },
    accent: {
      hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
      rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } },
      cycle: { speed: { min: 100, max: 1000 }, step: { min: 1, max: 100 } }
    },
    font: {
      display: { weight: { min: 100, max: 900 } },
      ui: { weight: { min: 100, max: 900 } }
    },
    opacity: {
      general: { min: 0, max: 100 },
      toolbar: { min: 0, max: 100 },
      bookmark: { min: 0, max: 100 },
      search: { min: 0, max: 100 },
      toolbar: { min: 0, max: 100 }
    },
    layout: {
      color: {
        hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
        rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } },
        blur: { min: 0, max: 200 },
        opacity: { min: 0, max: 100 }
      },
      divider: { size: { min: 0, max: 10 } }
    },
    header: {
      color: {
        hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
        rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } },
        opacity: { min: 0, max: 100 }
      },
      search: { opacity: { min: 0, max: 100 } }
    },
    bookmark: {
      color: {
        hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
        rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } },
        opacity: { min: 0, max: 100 }
      },
      item: { border: { min: 0, max: 20 }, opacity: { min: 0, max: 100 } }
    },
    group: { toolbar: { opacity: { min: 0, max: 100 } } },
    toolbar: { opacity: { min: 0, max: 100 } },
    background: {
      color: {
        hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
        rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
      },
      gradient: {
        angle: { min: 0, max: 360 },
        start: {
          hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
          rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
        },
        end: {
          hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
          rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
        },
      },
      image: { blur: { min: 0, max: 200 }, grayscale: { min: 0, max: 100 }, scale: { min: 100, max: 400 }, accent: { min: 0, max: 100 }, opacity: { min: 0, max: 100 }, vignette: { opacity: { min: 0, max: 100 }, start: { min: 0, max: 100 }, end: { min: 0, max: 100 } } },
      video: { blur: { min: 0, max: 200 }, grayscale: { min: 0, max: 100 }, scale: { min: 100, max: 400 }, accent: { min: 0, max: 100 }, opacity: { min: 0, max: 100 }, vignette: { opacity: { min: 0, max: 100 }, start: { min: 0, max: 100 }, end: { min: 0, max: 100 } } }
    },
    radius: { min: 0, max: 500 },
    shadow: { min: 0, max: 300 },
    shade: { opacity: { min: 0, max: 100 }, blur: { min: 0, max: 200 } }
  }
};

state.step = {
  theme: {
    font: {
      display: { weight: 100 },
      ui: { weight: 100 }
    }
  }
};

state.option = {
  layout: {
    area: {
      header: { justify: ['left', 'center', 'right'], align: ['left', 'center', 'right'] },
      bookmark: { justify: ['left', 'center', 'right'], align: ['left', 'center', 'right'] }
    },
    alignment: ['top-left', 'top-center', 'top-right', 'center-left', 'center-center', 'center-right', 'bottom-left', 'bottom-center', 'bottom-right'],
    direction: ['horizontal', 'vertical'],
    order: ['header-bookmark', 'bookmark-header'],
    scrollbar: ['auto', 'thin', 'none']
  },
  header: {
    item: { justify: ['left', 'center', 'right'] },
    search: { width: { by: ['auto', 'custom'] }, text: { justify: ['left', 'center', 'right'] } }
  },
  bookmark: {
    item: { justify: ['left', 'center', 'right'] },
    orientation: ['top', 'bottom'],
    style: ['block', 'list']
  },
  group: {
    area: { justify: ['left', 'center', 'right'] },
    order: ['header-body', 'body-header']
  },
  toolbar: {
    location: ['corner', 'header'],
    position: ['top-left', 'top-right', 'bottom-right', 'bottom-left']
  },
  theme: {
    accent: { random: { style: ['any', 'light', 'dark', 'pastel', 'saturated'] } },
    style: ['dark', 'light', 'system'],
    layout: { color: { by: ['theme', 'custom'] } },
    header: { color: { by: ['theme', 'custom'] } },
    bookmark: { color: { by: ['theme', 'custom'] } },
    background: { type: ['theme', 'accent', 'color', 'gradient', 'image', 'video'] }
  }
};

state.get = {
  current: () => { return state.current },
  default: () => { return JSON.parse(JSON.stringify(state.default)) },
  minMax: () => { return JSON.parse(JSON.stringify(state.minMax)) },
  step: () => { return JSON.parse(JSON.stringify(state.step)) },
  option: () => { return JSON.parse(JSON.stringify(state.option)) }
};

state.set = {
  restore: {
    setup: (dataToRestore) => {

      state.current.layout = dataToRestore.state.layout;
      state.current.header = dataToRestore.state.header;
      state.current.bookmark = dataToRestore.state.bookmark;
      state.current.group = dataToRestore.state.group;
      state.current.toolbar = dataToRestore.state.toolbar;
      console.log('setup restored');

    },
    theme: (dataToRestore) => {

      state.current.theme = dataToRestore.state.theme;
      console.log('theme restored');

    }
  },
  default: () => {

    state.current = state.get.default();
    console.log('state set to default');

  }
};

export { state };
