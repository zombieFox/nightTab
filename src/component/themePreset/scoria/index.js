export const scoria = {
  name: 'Scoria',
  color: { range: { primary: { h: 338, s: 76 } }, contrast: { start: 20, end: 65 } },
  accent: { hsl: { h: 210, s: 80, l: 63 }, rgb: { r: 85, g: 161, b: 236 } },
  font: { display: { name: 'Zen Loop', weight: 400, style: 'normal' }, ui: { name: 'Montserrat', weight: 400, style: 'normal' } },
  background: {
    type: 'image',
    color: { hsl: { h: 221, s: 40, l: 17 }, rgb: { r: 26, g: 37, b: 61 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1626775107287.jpeg?raw=true', blur: 4, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 60,
  shadow: 100,
  style: 'dark',
  shade: { opacity: 0, blur: 90 },
  opacity: { general: 80 },
  layout: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 80 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 80 } },
  group: { openAll: { opacity: 80 } },
  toolbar: { opacity: 80 }
};
