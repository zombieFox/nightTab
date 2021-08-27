export const origin = {
  name: 'Origin',
  color: { range: { primary: { h: 222, s: 14 } }, contrast: { start: 8, end: 88 } },
  accent: { hsl: { h: 30, s: 100, l: 50 }, rgb: { r: 255, g: 128, b: 0 } },
  font: { display: { name: 'Fira Sans', weight: 400, style: 'normal' }, ui: { name: 'Noto Sans', weight: 400, style: 'normal' } },
  background: {
    type: 'image',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1626472271306.jpeg?raw=true', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 20, vignette: { opacity: 20, start: 90, end: 40 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 50,
  shadow: 75,
  style: 'dark',
  shade: { opacity: 0, blur: 10 },
  opacity: { general: 0 },
  layout: { color: { by: 'theme', blur: 0, opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 0 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 1, opacity: 0 } },
  group: { openAll: { opacity: 0 } },
  toolbar: { opacity: 0 }
};
