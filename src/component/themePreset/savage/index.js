export const savage = {
  name: 'Savage',
  color: { range: { primary: { h: 35, s: 7 } }, contrast: { start: 5, end: 30 } },
  accent: { hsl: { h: 0, s: 100, l: 50 }, rgb: { r: 255, g: 0, b: 0 } },
  font: { display: { name: 'Metal Mania', weight: 400, style: 'normal' }, ui: { name: 'Lato', weight: 400, style: 'normal' } },
  background: {
    type: 'gradient',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 180,
      start: { hsl: { h: 30, s: 5, l: 7 }, rgb: { r: 20, g: 19, b: 18 } },
      end: { hsl: { h: 0, s: 100, l: 13 }, rgb: { r: 66, g: 0, b: 0 } }
    },
    image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 0,
  shadow: 250,
  style: 'dark',
  shade: { opacity: 80, blur: 0 },
  opacity: { general: 100 },
  layout: { color: { by: 'theme', blur: 0, opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 100 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 100 } },
  group: { openAll: { opacity: 100 } },
  toolbar: { opacity: 100 }
};
