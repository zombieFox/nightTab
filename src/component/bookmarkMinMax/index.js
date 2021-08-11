export const bookmarkMinMax = {
  display: {
    rotate: { min: -180, max: 180 },
    translate: { x: { min: -300, max: 300 }, y: { min: -300, max: 300 } },
    gutter: { min: 0, max: 500 },
    visual: {
      size: { min: 5, max: 200 },
      shadow: { size: { min: 0, max: 100 } }
    },
    name: { size: { min: 5, max: 200 } }
  },
  accent: {
    hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
    rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
  },
  color: {
    hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
    rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } },
    opacity: { min: 0, max: 100 }
  },
  border: { min: 0, max: 20 },
  background: { opacity: { min: 0, max: 100 } }
};
