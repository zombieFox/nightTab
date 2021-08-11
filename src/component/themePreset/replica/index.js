export const replica = {
  name: 'Replica',
  color: { range: { primary: { h: 212, s: 23 } }, contrast: { start: 54, end: 100 } },
  accent: { hsl: { h: 210, s: 40, l: 30 }, rgb: { r: 51, g: 85, b: 119 } },
  font: { display: { name: 'Abel', weight: 400, style: 'normal' }, ui: { name: 'Raleway', weight: 400, style: 'normal' } },
  background: {
    type: 'image',
    color: { rgb: { r: 255, g: 255, b: 255 }, hsl: { h: 0, s: 0, l: 0 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1626366863277.jpeg?raw=true', blur: 0, grayscale: 0, opacity: 40, scale: 100, accent: 0, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, opacity: 50, scale: 100, accent: 0, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 0,
  shadow: 0,
  style: 'light',
  shade: { opacity: 50, blur: 5 },
  opacity: { general: 0 },
  layout: { divider: { size: 1 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 0 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 0 } },
  group: { openAll: { opacity: 0 } },
  toolbar: { opacity: 0 }
};
