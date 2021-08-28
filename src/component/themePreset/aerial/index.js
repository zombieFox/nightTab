export const aerial = {
  name: 'Aerial',
  color: { range: { primary: { h: 200, s: 27 } }, contrast: { start: 11, end: 77 } },
  accent: { hsl: { h: 180, s: 100, l: 50 }, rgb: { r: 0, g: 255, b: 255 } },
  font: { display: { name: 'Unica One', weight: 400, style: 'normal' }, ui: { name: 'Inria Sans', weight: 400, style: 'normal' } },
  background: {
    type: 'video',
    color: { rgb: { r: 0, g: 0, b: 0 }, hsl: { h: 0, s: 0, l: 0 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 10, opacity: 60, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/videos/1626342605376.mp4?raw=true', blur: 0, grayscale: 0, scale: 100, accent: 20, opacity: 80, vignette: { opacity: 70, start: 90, end: 25 } }
  },
  radius: 25,
  shadow: 50,
  style: 'dark',
  shade: { opacity: 2, blur: 0 },
  opacity: { general: 0 },
  layout: { color: { by: 'custom', blur: 50, opacity: 40, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 1 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 0 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 0 } },
  group: { openAll: { opacity: 0 } },
  toolbar: { opacity: 0 }
};
