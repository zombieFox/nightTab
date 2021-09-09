export const comet = {
  name: 'Comet',
  color: { range: { primary: { h: 207, s: 87 } }, contrast: { start: 30, end: 90 } },
  accent: { hsl: { h: 0, s: 0, l: 100 }, rgb: { r: 255, g: 255, b: 255 } },
  font: { display: { name: 'Bungee Hairline', weight: 700, style: 'normal' }, ui: { name: 'Quicksand', weight: 400, style: 'normal' } },
  background: {
    type: 'image',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 145,
      start: { hsl: { h: 209, s: 100, l: 9 }, rgb: { r: 0, g: 24, b: 46 } },
      end: { hsl: { h: 207, s: 86, l: 27 }, rgb: { r: 10, g: 75, b: 128 } }
    },
    image: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/images/1629912579015.jpeg?raw=true\n\nhttps://github.com/zombieFox/nightTabAssets/blob/main/images/1629911101180.jpeg?raw=true\n\nhttps://github.com/zombieFox/nightTabAssets/blob/main/images/1629911104436.jpeg?raw=true', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 80, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  radius: 35,
  shadow: 80,
  style: 'dark',
  shade: { opacity: 15, blur: 0 },
  opacity: { general: 0 },
  layout: { color: { by: 'theme', blur: 0, opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, divider: { size: 0 } },
  header: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 20 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 20 } },
  group: { toolbar: { opacity: 0 } },
  toolbar: { opacity: 0 }
};
