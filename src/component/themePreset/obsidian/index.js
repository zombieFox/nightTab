export const obsidian = {
  name: 'Obsidian',
  color: { range: { primary: { h: 200, s: 10 } }, contrast: { start: 5, end: 50 } },
  accent: { hsl: { h: 180, s: 100, l: 50 }, rgb: { r: 0, g: 255, b: 255 } },
  font: { display: { name: 'Zilla Slab', weight: 700, style: 'normal' }, ui: { name: 'Montserrat', weight: 400, style: 'normal' } },
  background: {
    type: 'image',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1629141031788.jpeg?raw=true', blur: 0, opacity: 10, scale: 100, grayscale: 0, accent: 0, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 25,
  shadow: 200,
  style: 'dark',
  shade: { opacity: 50, blur: 0 },
  opacity: { general: 100 },
  layout: { divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 100 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 100 } },
  group: { openAll: { opacity: 100 } },
  toolbar: { opacity: 100 }
};
