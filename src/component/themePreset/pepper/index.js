export const pepper = {
  name: 'Pepper',
  color: { range: { primary: { h: 0, s: 69 } }, contrast: { start: 15, end: 80 } },
  accent: { rgb: { r: 255, g: 150, b: 0 }, hsl: { h: 35, s: 100, l: 50 } },
  font: { display: { name: 'Big Shoulders Display', weight: 400, style: 'normal' }, ui: { name: 'Montserrat', weight: 400, style: 'normal' } },
  background: {
    type: 'image',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 30,
      start: { hsl: { h: 358, s: 100, l: 15 }, rgb: { r: 77, g: 0, b: 3 } },
      end: { hsl: { h: 9, s: 99, l: 40 }, rgb: { r: 203, g: 31, b: 1 } }
    },
    image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1628355202943.jpeg?raw=true', blur: 0, grayscale: 100, scale: 100, accent: 0, opacity: 15, vignette: { opacity: 25, start: 90, end: 35 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 60,
  shadow: 100,
  style: 'dark',
  shade: { opacity: 10, blur: 0 },
  opacity: { general: 25 },
  layout: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 1 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 25 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 25 } },
  group: { openAll: { opacity: 25 } },
  toolbar: { opacity: 25 }
};
