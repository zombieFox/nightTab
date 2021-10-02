export const convertColor = {
  rgb: {},
  hsl: {},
  hex: {}
};

convertColor.rgb.hsl = (rgb) => {
  var r = rgb.r / 255;
  var g = rgb.g / 255;
  var b = rgb.b / 255;
  var min = Math.min(r, g, b);
  var max = Math.max(r, g, b);
  var delta = max - min;
  var h;
  var s;

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }

  var l = (min + max) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
};

convertColor.rgb.hex = (args) => {
  var integer = ((Math.round(args.r) & 0xFF) << 16) +
    ((Math.round(args.g) & 0xFF) << 8) +
    (Math.round(args.b) & 0xFF);

  var string = integer.toString(16);

  return '#' + '000000'.substring(string.length) + string;
};

convertColor.hsl.rgb = (hsl) => {
  var h = hsl.h / 360;
  var s = hsl.s / 100;
  var l = hsl.l / 100;
  var t2;
  var t3;
  var val;

  if (s === 0) {
    val = l * 255;
    return {
      r: Math.round(val),
      g: Math.round(val),
      b: Math.round(val)
    };
  }

  if (l < 0.5) {
    t2 = l * (1 + s);
  } else {
    t2 = l + s - l * s;
  }

  var t1 = 2 * l - t2;

  var rgb = [0, 0, 0];

  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * -(i - 1);

    if (t3 < 0) {
      t3++;
    }

    if (t3 > 1) {
      t3--;
    }

    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }

    rgb[i] = val * 255;
  }

  return {
    r: Math.round(rgb[0]),
    g: Math.round(rgb[1]),
    b: Math.round(rgb[2])
  };
};

convertColor.hex.rgb = (args) => {
  var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);

  if (!match) {
    return {
      r: 0,
      g: 0,
      b: 0
    };
  }

  var colorString = match[0];

  if (match[0].length === 3) {
    colorString = colorString.split('').map((char) => {
      return char + char;
    }).join('');
  }

  var integer = parseInt(colorString, 16);
  var r = (integer >> 16) & 0xFF;
  var g = (integer >> 8) & 0xFF;
  var b = integer & 0xFF;

  return {
    r: r,
    g: g,
    b: b
  };
};
