export const bean = {
  name: 'Bean',
  color: { range: { primary: { h: 191, s: 80 } }, contrast: { start: 7, end: 65 } },
  accent: { hsl: { h: 38, s: 100, l: 50 }, rgb: { r: 255, g: 160, b: 0 } },
  font: { display: { name: 'Life Savers', weight: 400, style: 'normal' }, ui: { name: 'Oswald', weight: 400, style: 'normal' } },
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
  radius: 50,
  shadow: 175,
  style: 'dark',
  shade: { opacity: 10, blur: 0 },
  opacity: { general: 0 },
  layout: { divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 0 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 100 } },
  group: { openAll: { opacity: 0 } },
  toolbar: { opacity: 0 }
};
