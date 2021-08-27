export const stria = {
  name: 'Stria',
  color: { range: { primary: { h: 305, s: 20 } }, contrast: { start: 20, end: 48 } },
  accent: { hsl: { h: 30, s: 80, l: 63 }, rgb: { r: 236, g: 161, b: 85 } },
  font: { display: { name: 'Gowun Batang', weight: 400, style: 'normal' }, ui: { name: '', weight: 400, style: 'normal' } },
  background: {
    type: 'image',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1626366147967.jpeg?raw=true', blur: 0, grayscale: 52, scale: 100, accent: 0, opacity: 40, vignette: { opacity: 25, start: 90, end: 20 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 40,
  shadow: 30,
  style: 'dark',
  shade: { opacity: 0, blur: 10 },
  opacity: { general: 100 },
  layout: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 50 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 50 } },
  group: { openAll: { opacity: 0 } },
  toolbar: { opacity: 0 }
};
