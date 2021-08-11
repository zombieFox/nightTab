export const rumble = {
  name: 'Rumble',
  color: { range: { primary: { h: 267, s: 10 } }, contrast: { start: 16, end: 40 } },
  accent: { hsl: { h: 340, s: 100, l: 38 }, rgb: { r: 196, g: 0, b: 66 } },
  font: { display: { name: 'Odibee Sans', weight: 400, style: 'normal' }, ui: { name: 'Roboto Condensed', weight: 400, style: 'normal' } },
  background: {
    type: 'image',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1628615254892.jpeg?raw=true', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 12, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 75,
  shadow: 175,
  style: 'dark',
  shade: { opacity: 20, blur: 0 },
  opacity: { general: 100 },
  layout: { divider: { size: 1 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 50 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 50 } },
  group: { openAll: { opacity: 0 } },
  toolbar: { opacity: 0 }
};
