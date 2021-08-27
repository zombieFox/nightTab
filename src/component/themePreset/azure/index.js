export const azure = {
  name: 'Azure',
  color: { range: { primary: { h: 215, s: 35 } }, contrast: { start: 13, end: 40 } },
  accent: { hsl: { h: 180, s: 100, l: 50 }, rgb: { r: 0, g: 255, b: 255 } },
  font: { display: { name: 'Unica One', weight: 400, style: 'normal' }, ui: { name: 'Inria Sans', weight: 400, style: 'normal' } },
  background: {
    type: 'gradient',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 180,
      start: { hsl: { h: 200, s: 46, l: 33 }, rgb: { r: 45, g: 97, b: 123 } },
      end: { hsl: { h: 212, s: 49, l: 9 }, rgb: { r: 12, g: 22, b: 34 } }
    },
    image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 25,
  shadow: 50,
  style: 'dark',
  shade: { opacity: 10, blur: 10 },
  opacity: { general: 0 },
  layout: { divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 0 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 30 } },
  group: { openAll: { opacity: 0 } },
  toolbar: { opacity: 0 }
};
