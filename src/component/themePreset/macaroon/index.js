export const macaroon = {
  name: 'Macaroon',
  color: { range: { primary: { h: 301, s: 28 } }, contrast: { start: 55, end: 80 } },
  accent: { hsl: { h: 241, s: 51, l: 62 }, rgb: { r: 110, g: 109, b: 208 } },
  font: { display: { name: 'Calistoga', weight: 400, style: 'normal' }, ui: { name: 'Source Sans Pro', weight: 400, style: 'normal' } },
  background: {
    type: 'video',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/videos/1626342625654.mp4?raw=true', blur: 0, grayscale: 90, scale: 100, accent: 0, opacity: 10, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 40,
  shadow: 50,
  style: 'light',
  shade: { opacity: 30, blur: 0 },
  opacity: { general: 100 },
  layout: { divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 100 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 100 } },
  group: { openAll: { opacity: 100 } },
  toolbar: { opacity: 100 }
};
