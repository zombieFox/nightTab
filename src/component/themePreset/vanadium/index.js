export const vanadium = {
  name: 'Vanadium',
  color: { range: { primary: { h: 218, s: 33 } }, contrast: { start: 15, end: 65 } },
  accent: { hsl: { h: 30, s: 100, l: 50 }, rgb: { r: 255, g: 128, b: 0 } },
  font: { display: { name: 'Grenze Gotisch', weight: 100, style: 'normal' }, ui: { name: 'Roboto', weight: 400, style: 'normal' } },
  background: {
    type: 'video',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/videos/1626342631982.mp4?raw=true', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 30, vignette: { opacity: 60, start: 90, end: 20 } }
  },
  radius: 25,
  shadow: 25,
  style: 'dark',
  shade: { opacity: 20, blur: 10 },
  opacity: { general: 100 },
  layout: { color: { by: 'custom', blur: 0, opacity: 20, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 40 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 40 } },
  group: { openAll: { opacity: 0 } },
  toolbar: { opacity: 0 }
};
