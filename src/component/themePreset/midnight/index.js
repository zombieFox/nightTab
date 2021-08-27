export const midnight = {
  name: 'Midnight',
  color: { range: { primary: { h: 221, s: 40 } }, contrast: { start: 12, end: 50 } },
  accent: { hsl: { h: 236, s: 100, l: 50 }, rgb: { r: 0, g: 17, b: 255 } },
  font: { display: { name: 'Megrim', weight: 400, style: 'normal' }, ui: { name: 'Lato', weight: 400, style: 'normal' } },
  background: {
    type: 'video',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/videos/1626351787997.mp4?raw=true', blur: 0, grayscale: 100, scale: 100, accent: 15, opacity: 30, vignette: { opacity: 40, start: 90, end: 50 } }
  },
  radius: 50,
  shadow: 75,
  style: 'dark',
  shade: { opacity: 10, blur: 0 },
  opacity: { general: 0 },
  layout: { color: { by: 'theme', blur: 0, opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 0 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 100 } },
  group: { openAll: { opacity: 0 } },
  toolbar: { opacity: 0 }
};
