export const mint = {
  name: 'Mint',
  color: { range: { primary: { h: 157, s: 50 } }, contrast: { start: 12, end: 50 } },
  accent: { hsl: { h: 169, s: 100, l: 68 }, rgb: { r: 94, g: 255, b: 226 } },
  font: { display: { name: 'Unica One', weight: 400, style: 'normal' }, ui: { name: 'Montserrat', weight: 400, style: 'normal' } },
  background: {
    type: 'color',
    color: { hsl: { h: 154, s: 69, l: 32 }, rgb: { r: 25, g: 138, b: 89 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 80,
  shadow: 100,
  style: 'dark',
  shade: { opacity: 40, blur: 20 },
  opacity: { general: 100 },
  layout: { color: { by: 'theme', blur: 0, opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 100 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 100 } },
  group: { openAll: { opacity: 100 } },
  toolbar: { opacity: 100 }
};
