export const sol = {
  name: 'Sol',
  color: { range: { primary: { h: 52, s: 100 } }, contrast: { start: 0, end: 90 } },
  accent: { hsl: { h: 44, s: 100, l: 50 }, rgb: { r: 255, g: 185, b: 0 } },
  font: { display: { name: 'Fredoka One', weight: 400, style: 'normal' }, ui: { name: 'Muli', weight: 400, style: 'normal' } },
  background: {
    type: 'accent',
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
  shadow: 25,
  style: 'light',
  shade: { opacity: 60, blur: 0 },
  opacity: { general: 100 },
  layout: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 10 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 100 } },
  group: { openAll: { opacity: 10 } },
  toolbar: { opacity: 10 }
};
