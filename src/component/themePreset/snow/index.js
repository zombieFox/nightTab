export const snow = {
  name: 'Snow',
  color: { range: { primary: { h: 217, s: 46 } }, contrast: { start: 75, end: 95 } },
  accent: { hsl: { h: 191, s: 59, l: 82 }, rgb: { r: 181, g: 226, b: 236 } },
  font: { display: { name: 'Righteous', weight: 400, style: 'normal' }, ui: { name: 'Raleway', weight: 400, style: 'normal' } },
  background: {
    type: 'gradient',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 360,
      start: { hsl: { h: 286, s: 15, l: 96 }, rgb: { r: 246, g: 243, b: 246 } },
      end: { hsl: { h: 204, s: 52, l: 81 }, rgb: { r: 181, g: 212, b: 232 } }
    },
    image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 0,
  shadow: 25,
  style: 'light',
  shade: { opacity: 60, blur: 0 },
  opacity: { general: 80 },
  layout: { color: { by: 'theme', blur: 0, opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 80 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 2, opacity: 80 } },
  group: { openAll: { opacity: 80 } },
  toolbar: { opacity: 80 }
};
