export const neon = {
  name: 'Neon',
  color: { range: { primary: { h: 219, s: 45, l: 22 } }, contrast: { start: 15, end: 93 } },
  accent: { hsl: { h: 330, s: 100, l: 50 }, rgb: { r: 255, g: 0, b: 128 } },
  font: { display: { name: 'Dosis', weight: 300, style: 'normal' }, ui: { name: 'Inria Sans', weight: 300, style: 'normal' } },
  background: {
    type: 'image',
    color: { rgb: { r: 0, g: 0, b: 0 }, hsl: { h: 0, s: 0, l: 0 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    // image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1629106513649.jpeg?raw=true', blur: 0, opacity: 20, scale: 100, grayscale: 0, accent: 0, vignette: { opacity: 0, start: 90, end: 70 } },
    image: { url: 'https://i.redd.it/alebbb3ho4c51.png', blur: 0, opacity: 20, scale: 100, grayscale: 0, accent: 0, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 4, opacity: 20, scale: 100, grayscale: 0, accent: 0, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 25,
  shadow: 100,
  style: 'dark',
  shade: { opacity: 8, blur: 0 },
  opacity: { general: 0 },
  layout: { divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 0 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 45 } },
  group: { openAll: { opacity: 0 } },
  toolbar: { opacity: 0 }
};
