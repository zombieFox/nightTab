export const terra = {
  name: 'Terra',
  color: { range: { primary: { h: 29, s: 28 } }, contrast: { start: 17, end: 83 } },
  accent: { hsl: { h: 270, s: 80, l: 37 }, rgb: { r: 94, g: 19, b: 170 } },
  font: { display: { name: 'Sansita Swashed', weight: 400, style: 'normal' }, ui: { name: '', weight: 400, style: 'normal' } },
  background: {
    type: 'gradient',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 180,
      start: { hsl: { h: 46, s: 52, l: 70 }, rgb: { r: 219, g: 200, b: 140 } },
      end: { hsl: { h: 342, s: 16, l: 52 }, rgb: { r: 152, g: 113, b: 125 } }
    },
    image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 75,
  shadow: 30,
  style: 'light',
  shade: { opacity: 4, blur: 4 },
  opacity: { general: 100 },
  layout: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 100 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 100 } },
  group: { openAll: { opacity: 0 } },
  toolbar: { opacity: 0 }
};
