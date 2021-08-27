export const acrid = {
  name: 'Acrid',
  color: { range: { primary: { h: 301, s: 32 } }, contrast: { start: 11, end: 65 } },
  accent: { hsl: { h: 112, s: 100, l: 42 }, rgb: { r: 29, g: 213, b: 0 } },
  font: { display: { name: 'Titillium Web', weight: 400, style: 'italic' }, ui: { name: 'Inconsolata', weight: 400, style: 'normal' } },
  background: {
    type: 'gradient',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 154, s: 62, l: 24 }, rgb: { r: 23, g: 99, b: 66 } },
      end: { hsl: { h: 300, s: 42, l: 21 }, rgb: { r: 76, g: 31, b: 76 } }
    },
    image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 30,
  shadow: 75,
  style: 'dark',
  shade: { opacity: 20, blur: 0 },
  opacity: { general: 100 },
  layout: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 100 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 100 } },
  group: { openAll: { opacity: 100 } },
  toolbar: { opacity: 100 }
};
