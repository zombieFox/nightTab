export const hypnos = {
  name: 'Hypnos',
  color: { range: { primary: { h: 243, s: 26 } }, contrast: { start: 15, end: 50 } },
  accent: { hsl: { h: 30, s: 100, l: 80 }, rgb: { r: 255, g: 204, b: 153 } },
  font: { display: { name: 'Shadows Into Light', weight: 100, style: 'normal' }, ui: { name: 'Fira Code', weight: 400, style: 'normal' } },
  background: {
    type: 'image',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1628356492462.jpeg?raw=true', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 5, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 60,
  shadow: 25,
  style: 'dark',
  shade: { opacity: 20, blur: 0 },
  opacity: { general: 0 },
  layout: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 0 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 40 } },
  group: { openAll: { opacity: 0 } },
  toolbar: { opacity: 0 }
};
