export const trine = {
  name: 'Trine',
  color: { range: { primary: { h: 228, s: 71 } }, contrast: { start: 10, end: 60 } },
  accent: { hsl: { h: 180, s: 100, l: 50 }, rgb: { r: 0, g: 255, b: 255 } },
  font: { display: { name: 'Josefin Sans', weight: 300, style: 'normal' }, ui: { name: 'Roboto Slab', weight: 400, style: 'normal' } },
  background: {
    type: 'image',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1626365111390.jpeg?raw=true', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 30, vignette: { opacity: 50, start: 95, end: 60 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 50,
  shadow: 125,
  style: 'dark',
  shade: { opacity: 10, blur: 0 },
  opacity: { general: 100 },
  layout: { color: { by: 'theme', blur: 0, opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 40 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 100 } },
  group: { toolbar: { opacity: 40 } },
  toolbar: { opacity: 0 }
};
