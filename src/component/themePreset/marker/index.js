export const marker = {
  name: 'Marker',
  color: { range: { primary: { h: 0, s: 0 } }, contrast: { start: 56, end: 96 } },
  accent: { hsl: { h: 210, s: 33, l: 20 }, rgb: { r: 34, g: 51, b: 68 } },
  font: { display: { name: 'Permanent Marker', weight: 400, style: 'normal' }, ui: { name: 'Roboto Condensed', weight: 400, style: 'normal' } },
  background: {
    type: 'image',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1626365108115.jpeg?raw=true', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 25, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 30,
  shadow: 50,
  style: 'light',
  shade: { opacity: 30, blur: 0 },
  opacity: { general: 20 },
  layout: { divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 20 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 20 } },
  group: { openAll: { opacity: 20 } },
  toolbar: { opacity: 20 }
};
