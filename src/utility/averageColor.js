export const averageColor = function(rgb1, rgb2) {

  return {
    r: Math.round(Math.sqrt(Math.pow(rgb1.r, 1.75) + Math.pow(rgb2.r, 1.75) / 2)),
    g: Math.round(Math.sqrt(Math.pow(rgb1.g, 1.75) + Math.pow(rgb2.g, 1.75) / 2)),
    b: Math.round(Math.sqrt(Math.pow(rgb1.b, 1.75) + Math.pow(rgb2.b, 1.75) / 2))
  };

};
