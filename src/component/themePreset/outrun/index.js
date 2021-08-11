export const outrun = {
  name: 'Outrun',
  color: { range: { primary: { h: 227, s: 52 } }, contrast: { start: 20, end: 80 } },
  accent: { hsl: { h: 316, s: 100, l: 50 }, rgb: { r: 255, g: 0, b: 187 } },
  font: { display: { name: 'Major Mono Display', weight: 400, style: 'normal' }, ui: { name: 'Roboto Condensed', weight: 400, style: 'normal' } },
  background: {
    type: 'image',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1626365114391.jpeg?raw=true', blur: 0, grayscale: 0, scale: 100, accent: 60, opacity: 70, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 25,
  shadow: 0,
  style: 'dark',
  shade: { opacity: 70, blur: 0 },
  opacity: { general: 100 },
  layout: { divider: { size: 1 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 100 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 100 } },
  group: { openAll: { opacity: 100 } },
  toolbar: { opacity: 0 }
};
