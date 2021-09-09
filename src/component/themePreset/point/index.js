export const point = {
  name: 'Point',
  color: { range: { primary: { h: 146, s: 20, l: 24 } }, contrast: { start: 20, end: 60 } },
  accent: { hsl: { h: 30, s: 80, l: 63 }, rgb: { r: 236, g: 161, b: 85 } },
  font: { display: { name: 'Klee One', weight: 600, style: 'normal' }, ui: { name: 'Klee One', weight: 400, style: 'normal' } },
  background: {
    type: 'image',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1629583136673.jpeg?raw=true\n\nhttps://github.com/zombieFox/nightTabAssets/blob/main/images/1629583172118.jpeg?raw=true\n\nhttps://github.com/zombieFox/nightTabAssets/blob/main/images/1629583176908.jpeg?raw=true\n\nhttps://github.com/zombieFox/nightTabAssets/blob/main/images/1629583180203.jpeg?raw=true\n\nhttps://github.com/zombieFox/nightTabAssets/blob/main/images/1629583182863.jpeg?raw=true', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 25, vignette: { opacity: 55, start: 90, end: 10 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 25,
  shadow: 125,
  style: 'dark',
  shade: { opacity: 4, blur: 0 },
  opacity: { general: 45 },
  layout: { color: { by: 'theme', blur: 0, opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 45 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 45 } },
  group: { toolbar: { opacity: 45 } },
  toolbar: { opacity: 45 }
};
