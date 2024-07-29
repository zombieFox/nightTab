export const lunar = {
  name: 'Lunar',
  color: { range: { primary: { h: 0, s: 0 } }, contrast: { start: 8, end: 48 } },
  accent: { hsl: { h: 214, s: 81, l: 56 }, rgb: { r: 50, g: 129, b: 234 } },
  font: { display: { name: 'Nunito', weight: 700, style: 'normal' }, ui: { name: 'Inter', weight: 300, style: 'normal' } },
  background: {
    type: 'theme',
    color: { hsl: { h: 0, s: 0, l: 8 }, rgb: { r: 22, g: 22, b: 22 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 0, s: 0, l: 18 }, rgb: { r: 22, g: 22, b: 22 } },
      end: { hsl: { h: 0, s: 0, l: 5 }, rgb: { r: 37, g: 37, b: 37 } }
    },
    image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 75,
  shadow: 100,
  style: 'dark',
  shade: { opacity: 10, blur: 0 },
  opacity: { general: 100 },
  layout: { color: { by: 'theme', blur: 0, opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 100 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 100 } },
  group: { toolbar: { opacity: 100 } },
  toolbar: { opacity: 100 }
};
