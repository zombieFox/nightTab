var theme = (function() {

  var _timerFontDisplay = null;
  var _timerFontUi = null;
  var _customThemeEdit = false;

  var stagedThemeCustom = {
    position: {
      index: null
    },
    theme: {
      name: null,
      style: null,
      font: null,
      color: null,
      accent: null,
      radius: null,
      timestamp: null
    }
  };

  stagedThemeCustom.reset = function() {
    stagedThemeCustom.position.index = null;
    stagedThemeCustom.theme.name = null;
    stagedThemeCustom.theme.style = null;
    stagedThemeCustom.theme.font = null;
    stagedThemeCustom.theme.color = null;
    stagedThemeCustom.theme.accent = null;
    stagedThemeCustom.theme.radius = null;
    stagedThemeCustom.theme.timestamp = null;
  };

  var mod = {};

  mod.style = {
    light: function() {
      helper.setObject({
        object: state.get.current(),
        path: "theme.style",
        newValue: "light"
      });
    },
    dark: function() {
      helper.setObject({
        object: state.get.current(),
        path: "theme.style",
        newValue: "dark"
      });
    }
  };

  mod.accent = {
    random: function() {
      if (state.get.current().theme.accent.random.active) {
        var randomVal = function(min, max) {
          return Math.floor(Math.random() * (max - min) + 1) + min;
        };
        var color = {
          any: function() {
            return {
              h: randomVal(0, 360),
              s: randomVal(0, 100),
              l: randomVal(0, 100)
            };
          },
          light: function() {
            return {
              h: randomVal(0, 360),
              s: randomVal(50, 90),
              l: randomVal(50, 90)
            };
          },
          dark: function() {
            return {
              h: randomVal(0, 360),
              s: randomVal(10, 50),
              l: randomVal(10, 50)
            };
          },
          pastel: function() {
            return {
              h: randomVal(0, 360),
              s: 50,
              l: 80
            };
          },
          saturated: function() {
            return {
              h: randomVal(0, 360),
              s: 100,
              l: 50
            };
          }
        };
        var rgb = helper.convertColor.hsl.rgb(color[state.get.current().theme.accent.random.style]());
        var hex = helper.convertColor.rgb.hex(rgb);
        helper.setObject({
          object: state.get.current(),
          path: "theme.accent.current",
          newValue: {
            r: parseInt(rgb.r, 10),
            g: parseInt(rgb.g, 10),
            b: parseInt(rgb.b, 10)
          }
        });
      };
    }
  };

  mod.color = {
    hsl: function() {
      var hsl = helper.convertColor.rgb.hsl(state.get.current().theme.color.rgb);
      helper.setObject({
        object: state.get.current(),
        path: "theme.color.hsl",
        newValue: {
          h: parseInt(hsl.h, 10),
          s: parseInt(hsl.s, 10),
          l: parseInt(hsl.l, 10)
        }
      });
    },
    rgb: function() {
      var rgb = helper.convertColor.hsl.rgb(state.get.current().theme.color.hsl);
      helper.setObject({
        object: state.get.current(),
        path: "theme.color.rgb",
        newValue: {
          r: parseInt(rgb.r, 10),
          g: parseInt(rgb.g, 10),
          b: parseInt(rgb.b, 10)
        }
      });
    }
  };

  mod.preset = {
    set: function(themePreset) {
      helper.setObject({
        object: state.get.current(),
        path: "theme.style",
        newValue: themePreset.style
      });
      helper.setObject({
        object: state.get.current(),
        path: "theme.font",
        newValue: themePreset.font
      });
      helper.setObject({
        object: state.get.current(),
        path: "theme.color",
        newValue: themePreset.color
      });
      helper.setObject({
        object: state.get.current(),
        path: "theme.accent.current",
        newValue: themePreset.accent
      });
      helper.setObject({
        object: state.get.current(),
        path: "theme.radius",
        newValue: themePreset.radius
      });
    },
    get: function(index) {
      return JSON.parse(JSON.stringify(mod.preset.all[index]));
    },
    all: [{
      name: "nightTab (default)",
      font: {
        display: {
          name: "",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "",
          weight: 400,
          style: "normal"
        },
      },
      color: {
        hsl: {
          h: 222,
          s: 14,
          l: 56
        },
        rgb: {
          r: 129,
          g: 138,
          b: 160
        },
        contrast: {
          light: 4,
          dark: 4
        }
      },
      accent: {
        r: 0,
        g: 80,
        b: 255
      },
      radius: 0.25,
      style: "dark"
    }, {
      name: "Midnight",
      font: {
        display: {
          name: "Megrim",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Lato",
          weight: 400,
          style: "normal"
        },
      },
      color: {
        hsl: {
          h: 221,
          s: 40,
          l: 48
        },
        rgb: {
          r: 73,
          g: 104,
          b: 171
        },
        contrast: {
          light: 4,
          dark: 3.5
        }
      },
      accent: {
        r: 0,
        g: 17,
        b: 255
      },
      radius: 0.5,
      style: "dark"
    }, {
      name: "Lex",
      font: {
        display: {
          name: "Autour One",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Solway",
          weight: 400,
          style: "normal"
        },
      },
      color: {
        hsl: {
          h: 278,
          s: 73,
          l: 50
        },
        rgb: {
          r: 153,
          g: 34,
          b: 221
        },
        contrast: {
          light: 4,
          dark: 4
        }
      },
      accent: {
        r: 0,
        g: 255,
        b: 170
      },
      radius: 0.1,
      style: "dark"
    }, {
      name: "Cruiser",
      font: {
        display: {
          name: "Alatsi",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Source Sans Pro",
          weight: 400,
          style: "normal"
        },
      },
      color: {
        hsl: {
          h: 217,
          s: 46,
          l: 60
        },
        rgb: {
          r: 106,
          g: 142,
          b: 199
        },
        contrast: {
          light: 4,
          dark: 4
        }
      },
      accent: {
        r: 255,
        g: 251,
        b: 0
      },
      radius: 0.2,
      style: "dark"
    }, {
      name: "Sharp Mint",
      font: {
        display: {
          name: "Unica One",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Montserrat",
          weight: 400,
          style: "normal"
        },
      },
      color: {
        hsl: {
          h: 157,
          s: 50,
          l: 49
        },
        rgb: {
          r: 63,
          g: 191,
          b: 143
        },
        contrast: {
          light: 4,
          dark: 4
        }
      },
      accent: {
        r: 94,
        g: 255,
        b: 226
      },
      radius: 0.8,
      style: "dark"
    }, {
      name: "Snow Glow",
      font: {
        display: {
          name: "Righteous",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Raleway",
          weight: 400,
          style: "normal"
        },
      },
      color: {
        hsl: {
          h: 217,
          s: 46,
          l: 58
        },
        rgb: {
          r: 98,
          g: 136,
          b: 197
        },
        contrast: {
          light: 4.4,
          dark: 1.5
        }
      },
      accent: {
        r: 59,
        g: 207,
        b: 214
      },
      radius: 0,
      style: "light"
    }, {
      name: "Rumble",
      font: {
        display: {
          name: "Odibee Sans",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Roboto Condensed",
          weight: 400,
          style: "normal"
        },
      },
      color: {
        hsl: {
          h: 25,
          s: 29,
          l: 48
        },
        rgb: {
          r: 159,
          g: 118,
          b: 87
        },
        contrast: {
          light: 5,
          dark: 3.5
        }
      },
      accent: {
        r: 196,
        g: 0,
        b: 66
      },
      radius: 0.75,
      style: "dark"
    }, {
      name: "Sol",
      font: {
        display: {
          name: "Fredoka One",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Muli",
          weight: 400,
          style: "normal"
        },
      },
      color: {
        hsl: {
          h: 56,
          s: 100,
          l: 30
        },
        rgb: {
          r: 153,
          g: 142,
          b: 0
        },
        contrast: {
          light: 2,
          dark: 1
        }
      },
      accent: {
        r: 255,
        g: 185,
        b: 0
      },
      radius: 0.5,
      style: "light"
    }, {
      name: "Art Deco",
      font: {
        display: {
          name: "Poiret One",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Lato",
          weight: 400,
          style: "normal"
        },
      },
      color: {
        hsl: {
          h: 184,
          s: 38,
          l: 61
        },
        rgb: {
          r: 119,
          g: 188,
          b: 194
        },
        contrast: {
          light: 1,
          dark: 4
        }
      },
      accent: {
        r: 255,
        g: 161,
        b: 161
      },
      radius: 2,
      style: "dark"
    }, {
      name: "Grimm",
      font: {
        display: {
          name: "Griffy",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Roboto Slab",
          weight: 400,
          style: "normal"
        }
      },
      color: {
        hsl: {
          h: 283,
          s: 7,
          l: 40
        },
        rgb: {
          r: 105,
          g: 94,
          b: 109
        },
        contrast: {
          light: 7,
          dark: 2
        }
      },
      accent: {
        r: 0,
        g: 255,
        b: 102
      },
      radius: 1,
      style: "dark"
    }, {
      name: "Macaroon",
      font: {
        display: {
          name: "Calistoga",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Source Sans Pro",
          weight: 400,
          style: "normal"
        },
      },
      color: {
        hsl: {
          h: 301,
          s: 28,
          l: 56
        },
        rgb: {
          r: 175,
          g: 112,
          b: 173
        },
        contrast: {
          light: 3,
          dark: 2
        }
      },
      accent: {
        r: 110,
        g: 109,
        b: 208
      },
      radius: 0.40,
      style: "light"
    }, {
      name: "Hot Pepper",
      font: {
        display: {
          name: "Big Shoulders Display",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Montserrat",
          weight: 400,
          style: "normal"
        },
      },
      color: {
        hsl: {
          h: 0,
          s: 69,
          l: 62
        },
        rgb: {
          r: 224,
          g: 91,
          b: 91
        },
        contrast: {
          light: 3.5,
          dark: 4.5
        }
      },
      accent: {
        r: 255,
        g: 150,
        b: 0
      },
      radius: 0.6,
      style: "dark"
    }, {
      name: "Steel",
      font: {
        display: {
          name: "Abel",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Raleway",
          weight: 400,
          style: "normal"
        },
      },
      color: {
        hsl: {
          h: 214,
          s: 30,
          l: 44
        },
        rgb: {
          r: 78,
          g: 107,
          b: 145
        },
        contrast: {
          light: 3.5,
          dark: 3
        }
      },
      accent: {
        r: 59,
        g: 95,
        b: 118
      },
      radius: 0.3,
      style: "light"
    }, {
      name: "Outrun",
      font: {
        display: {
          name: "Major Mono Display",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Roboto Condensed",
          weight: 400,
          style: "normal"
        },
      },
      color: {
        hsl: {
          h: 227,
          s: 52,
          l: 55
        },
        rgb: {
          r: 80,
          g: 106,
          b: 199
        },
        contrast: {
          light: 4,
          dark: 4
        }
      },
      accent: {
        r: 255,
        g: 0,
        b: 187
      },
      radius: 0,
      style: "dark"
    }, {
      name: "Pumpkin",
      font: {
        display: {
          name: "Girassol",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Muli",
          weight: 400,
          style: "normal"
        },
      },
      color: {
        hsl: {
          h: 198,
          s: 0,
          l: 46
        },
        rgb: {
          r: 117,
          g: 117,
          b: 117
        },
        contrast: {
          light: 5,
          dark: 3.5
        }
      },
      accent: {
        r: 238,
        g: 119,
        b: 34
      },
      radius: 0.2,
      style: "dark"
    }, {
      name: "Funkadelic",
      font: {
        display: {
          name: "Monoton",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Lato",
          weight: 400,
          style: "normal"
        },
      },
      color: {
        hsl: {
          h: 307,
          s: 100,
          l: 59
        },
        rgb: {
          r: 254,
          g: 45,
          b: 230
        },
        contrast: {
          light: 4,
          dark: 4
        }
      },
      accent: {
        r: 238,
        g: 238,
        b: 34
      },
      radius: 1.2,
      style: "dark"
    }, {
      name: "Elder Bean",
      font: {
        display: {
          name: "Life Savers",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Quicksand",
          weight: 400,
          style: "normal"
        },
      },
      color: {
        hsl: {
          h: 191,
          s: 86,
          l: 46
        },
        rgb: {
          r: 16,
          g: 181,
          b: 218
        },
        contrast: {
          light: 5,
          dark: 4
        }
      },
      accent: {
        r: 255,
        g: 160,
        b: 0
      },
      radius: 0.5,
      style: "dark"
    }, {
      name: "Marker",
      font: {
        display: {
          name: "Permanent Marker",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Roboto Condensed",
          weight: 400,
          style: "normal"
        }
      },
      color: {
        hsl: {
          h: 0,
          s: 0,
          l: 50
        },
        rgb: {
          r: 127,
          g: 127,
          b: 127
        },
        contrast: {
          light: 5.3,
          dark: 4
        }
      },
      accent: {
        r: 0,
        g: 0,
        b: 0
      },
      radius: 0.3,
      style: "light"
    }, {
      name: "Kapow",
      font: {
        display: {
          name: "Bangers",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Sniglet",
          weight: 400,
          style: "normal"
        }
      },
      color: {
        hsl: {
          h: 194,
          s: 77,
          l: 50
        },
        rgb: {
          r: 29,
          g: 179,
          b: 225
        },
        contrast: {
          light: 4.5,
          dark: 2.6
        }
      },
      accent: {
        r: 21,
        g: 255,
        b: 0
      },
      radius: 0.4,
      style: "dark"
    }, {
      name: "Dash",
      font: {
        display: {
          name: "Fredericka the Great",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Oswald",
          weight: 400,
          style: "normal"
        }
      },
      color: {
        hsl: {
          h: 211,
          s: 10,
          l: 50
        },
        rgb: {
          r: 114,
          g: 127,
          b: 140
        },
        contrast: {
          light: 5,
          dark: 2
        }
      },
      accent: {
        r: 187,
        g: 17,
        b: 68
      },
      radius: 0,
      style: "light"
    }, {
      name: "Savage",
      font: {
        display: {
          name: "Metal Mania",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Lato",
          weight: 400,
          style: "normal"
        }
      },
      color: {
        hsl: {
          h: 35,
          s: 7,
          l: 37
        },
        rgb: {
          r: 100,
          g: 95,
          b: 87
        },
        contrast: {
          light: 5.2,
          dark: 3.2
        }
      },
      accent: {
        r: 255,
        g: 0,
        b: 0
      },
      radius: 0,
      style: "dark"
    }, {
      name: "Trine",
      font: {
        display: {
          name: "Josefin Sans",
          weight: 300,
          style: "normal"
        },
        ui: {
          name: "Roboto Slab",
          weight: 400,
          style: "normal"
        }
      },
      color: {
        hsl: {
          h: 228,
          s: 71,
          l: 50
        },
        rgb: {
          r: 36,
          g: 73,
          b: 218
        },
        contrast: {
          light: 4.2,
          dark: 3.9
        }
      },
      accent: {
        r: 0,
        g: 255,
        b: 255
      },
      radius: 0.5,
      style: "dark"
    }, {
      name: "Obsidian",
      font: {
        display: {
          name: "Zilla Slab",
          weight: 900,
          style: "normal"
        },
        ui: {
          name: "Montserrat",
          weight: 400,
          style: "normal"
        }
      },
      color: {
        hsl: {
          h: 200,
          s: 10,
          l: 43
        },
        rgb: {
          r: 98,
          g: 113,
          b: 120
        },
        contrast: {
          light: 4,
          dark: 4
        }
      },
      accent: {
        r: 0,
        g: 255,
        b: 255
      },
      radius: 0.25,
      style: "dark"
    }, {
      name: "Earthquake",
      font: {
        display: {
          name: "Tulpen One",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Barlow Condensed",
          weight: 400,
          style: "normal"
        }
      },
      color: {
        hsl: {
          h: 0,
          s: 13,
          l: 37
        },
        rgb: {
          r: 106,
          g: 82,
          b: 82
        },
        contrast: {
          light: 6.3,
          dark: 2
        }
      },
      accent: {
        r: 255,
        g: 204,
        b: 0
      },
      radius: 0.80,
      style: "dark"
    }]
  };

  mod.custom = {
    set: function(themeCustom) {
      helper.setObject({
        object: state.get.current(),
        path: "theme.style",
        newValue: themeCustom.style
      });
      helper.setObject({
        object: state.get.current(),
        path: "theme.font",
        newValue: themeCustom.font
      });
      helper.setObject({
        object: state.get.current(),
        path: "theme.color",
        newValue: themeCustom.color
      });
      helper.setObject({
        object: state.get.current(),
        path: "theme.accent.current",
        newValue: themeCustom.accent
      });
      helper.setObject({
        object: state.get.current(),
        path: "theme.radius",
        newValue: themeCustom.radius
      });
    },
    get: function(index) {
      return JSON.parse(JSON.stringify(state.get.current().theme.custom[index]));
    },
    add: function() {
      state.get.current().theme.custom.push(JSON.parse(JSON.stringify(stagedThemeCustom.theme)));
    },
    remove: function(copyStagedThemeCustom) {
      state.get.current().theme.custom.splice(stagedThemeCustom.position.index, 1);
    }
  };

  var render = {};

  render.style = {
    dark: function() {
      var html = helper.e("html");
      helper.addClass(html, "is-theme-style-dark");
      helper.removeClass(html, "is-theme-style-light");
    },
    light: function() {
      var html = helper.e("html");
      helper.removeClass(html, "is-theme-style-dark");
      helper.addClass(html, "is-theme-style-light");
    }
  };

  render.radius = function() {
    var html = helper.e("html");
    html.style.setProperty("--theme-radius", state.get.current().theme.radius + "rem");
  };

  render.accent = {
    color: function() {
      var html = helper.e("html");
      var color = state.get.current().theme.accent.current;
      html.style.setProperty("--theme-accent", color.r + ", " + color.g + ", " + color.b);
    },
    input: {
      quick: function() {
        helper.e(".control-theme-accent-current-quick").value = helper.convertColor.rgb.hex(state.get.current().theme.accent.current);
      },
      picker: function() {
        helper.e(".control-theme-accent-current-picker").value = helper.convertColor.rgb.hex(state.get.current().theme.accent.current);
      },
      hex: function() {
        helper.e(".control-theme-accent-current-hex").value = helper.convertColor.rgb.hex(state.get.current().theme.accent.current);
      }
    }
  };

  render.color = {
    shade: function() {
      var shadeMax = 10;
      var shadeMin = 1;
      var contrastNeg = state.get.current().theme.color.contrast.dark;
      var contrastPos = state.get.current().theme.color.contrast.light;
      var html = helper.e("html");
      var hsl = helper.convertColor.rgb.hsl(state.get.current().theme.color.rgb);
      var renderShade = function(name, index, rgb) {
        for (var key in rgb) {
          if (rgb[key] < 0) {
            rgb[key] = 0;
          } else if (rgb[key] > 255) {
            rgb[key] = 255;
          };
          rgb[key] = parseInt(rgb[key], 10);
        };
        if (index < 10) {
          index = "0" + index;
        };
        html.style.setProperty(name + index, rgb.r + ", " + rgb.g + ", " + rgb.b);
      };
      // set light theme shades
      for (var i = shadeMax; i >= shadeMin; i--) {
        var rgb = helper.convertColor.hsl.rgb({
          h: hsl.h,
          s: hsl.s,
          l: hsl.l - (contrastNeg * i)
        });
        renderShade("--theme-shade-neg-", i, rgb);
      };
      // set primary theme shades
      html.style.setProperty("--theme-shade", state.get.current().theme.color.rgb.r + ", " + state.get.current().theme.color.rgb.g + ", " + state.get.current().theme.color.rgb.b);
      // set dark theme shades
      for (var i = shadeMin; i <= shadeMax; i++) {
        var rgb = helper.convertColor.hsl.rgb({
          h: hsl.h,
          s: hsl.s,
          l: hsl.l + (contrastPos * i)
        });
        renderShade("--theme-shade-pos-", i, rgb);
      };
    },
    input: {
      quick: function() {
        helper.e(".control-theme-color-rgb-quick").value = helper.convertColor.rgb.hex(state.get.current().theme.color.rgb);
      },
      picker: function() {
        helper.e(".control-theme-color-rgb-picker").value = helper.convertColor.rgb.hex(state.get.current().theme.color.rgb);
      },
      hex: function() {
        helper.e(".control-theme-color-rgb-hex").value = helper.convertColor.rgb.hex(state.get.current().theme.color.rgb);
      },
      range: {
        hsl: function() {
          helper.e(".control-theme-color-hsl-h").value = state.get.current().theme.color.hsl.h;
          helper.e(".control-theme-color-hsl-s").value = state.get.current().theme.color.hsl.s;
          helper.e(".control-theme-color-hsl-l").value = state.get.current().theme.color.hsl.l;
          helper.e(".control-theme-color-hsl-h-count").textContent = state.get.current().theme.color.hsl.h;
          helper.e(".control-theme-color-hsl-s-count").textContent = state.get.current().theme.color.hsl.s;
          helper.e(".control-theme-color-hsl-l-count").textContent = state.get.current().theme.color.hsl.l;
        },
        rgb: function() {
          helper.e(".control-theme-color-rgb-r").value = state.get.current().theme.color.rgb.r;
          helper.e(".control-theme-color-rgb-g").value = state.get.current().theme.color.rgb.g;
          helper.e(".control-theme-color-rgb-b").value = state.get.current().theme.color.rgb.b;
          helper.e(".control-theme-color-rgb-r-count").textContent = state.get.current().theme.color.rgb.r;
          helper.e(".control-theme-color-rgb-g-count").textContent = state.get.current().theme.color.rgb.g;
          helper.e(".control-theme-color-rgb-b-count").textContent = state.get.current().theme.color.rgb.b;
        }
      }
    }
  };

  render.font = {
    delay: {
      display: function() {
        clearTimeout(_timerFontDisplay);
        _timerFontDisplay = setTimeout(render.font.display.name, 600);
      },
      ui: function() {
        clearTimeout(_timerFontUi);
        _timerFontUi = setTimeout(render.font.ui.name, 600);
      }
    },
    display: {
      name: function() {
        var html = helper.e("html");
        var removeLink = function() {
          var link = helper.e(".theme-font-display-name");
          if (link) {
            link.remove();
          };
          html.style.removeProperty("--theme-font-display-name");
        };
        var addLink = function() {
          var name = state.get.current().theme.font.display.name.trim().replace(/\s+/g, "+");
          if (name != "") {
            var head = helper.e("head");
            var link = helper.makeNode({
              tag: "link",
              attr: [{
                key: "class",
                value: "theme-font-display-name"
              }, {
                key: "href",
                value: "https://fonts.googleapis.com/css?family=" + name + ":100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
              }, {
                key: "rel",
                value: "stylesheet"
              }]
            });
            head.appendChild(link);
            html.style.setProperty("--theme-font-display-name", "\"" + state.get.current().theme.font.display.name.trim().replace(/\s\s+/g, " ") + "\"" + ", \"Fjalla One\", sans-serif");
          };
        };
        removeLink();
        addLink();
      },
      weight: function() {
        var html = helper.e("html");
        html.style.setProperty("--theme-font-display-weight", state.get.current().theme.font.display.weight);
      },
      style: function() {
        var html = helper.e("html");
        html.style.removeProperty("--theme-font-display-style");
        html.style.setProperty("--theme-font-display-style", state.get.current().theme.font.display.style);
      }
    },
    ui: {
      name: function() {
        var html = helper.e("html");
        var removeLink = function() {
          var link = helper.e(".theme-font-ui-name");
          if (link) {
            link.remove();
          };
          html.style.removeProperty("--theme-font-ui-name");
        };
        var addLink = function() {
          var name = state.get.current().theme.font.ui.name.trim().replace(/\s+/g, "+");
          if (name != "") {
            if (name != state.get.current().theme.font.display.name) {
              var head = helper.e("head");
              var link = helper.makeNode({
                tag: "link",
                attr: [{
                  key: "class",
                  value: "theme-font-ui-name"
                }, {
                  key: "href",
                  value: "https://fonts.googleapis.com/css?family=" + name + ":100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
                }, {
                  key: "rel",
                  value: "stylesheet"
                }]
              });
              head.appendChild(link);
            };
            html.style.setProperty("--theme-font-ui-name", "\"" + state.get.current().theme.font.ui.name.trim().replace(/\s\s+/g, " ") + "\"" + ", \"Open Sans\", sans-serif");
          };
        };
        removeLink();
        addLink();
      },
      weight: function() {
        var html = helper.e("html");
        html.style.setProperty("--theme-font-ui-weight", state.get.current().theme.font.ui.weight);
      },
      style: function() {
        var html = helper.e("html");
        html.style.removeProperty("--theme-font-ui-style");
        html.style.setProperty("--theme-font-ui-style", state.get.current().theme.font.ui.style);
      }
    }
  };

  render.preset = function() {
    var themePreset = helper.e(".theme-preset");
    var formInline = helper.node("div|class:form-inline");
    var allThemePreset = JSON.parse(JSON.stringify(mod.preset.all));
    allThemePreset.forEach(function(arrayItem, index) {
      var themePresetItem = helper.node("div|class:theme-preset-item");
      var themePresetTile = helper.node("div|class:theme-preset-tile");
      var themePresetButton = helper.node("button|class:theme-preset-button button mb-0,tabindex:-1");
      var themePresetPreview = helper.node("span|class:theme-preset-preview");
      var shadeSteps = 4;
      var rgb = arrayItem.color.rgb;
      var hsl = helper.convertColor.rgb.hsl(rgb);
      for (var i = 1; i <= shadeSteps; i++) {
        if (i > 1) {
          if (arrayItem.style == "dark") {
            rgb = helper.convertColor.hsl.rgb({
              h: hsl.h,
              s: hsl.s,
              l: hsl.l - ((arrayItem.color.contrast.dark) * (i * 2))
            });
          } else if (arrayItem.style == "light") {
            rgb = helper.convertColor.hsl.rgb({
              h: hsl.h,
              s: hsl.s,
              l: hsl.l + ((arrayItem.color.contrast.light) * (i * 2))
            });
          };
        };
        for (var colorKey in rgb) {
          if (rgb[colorKey] < 0) {
            rgb[colorKey] = 0;
          } else if (rgb[colorKey] > 255) {
            rgb[colorKey] = 255;
          };
          rgb[colorKey] = parseInt(rgb[colorKey], 10);
        };
        var themePresetBackground = helper.node("span|class:theme-preset-background-0" + i);
        themePresetBackground.style.setProperty("background-color", "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")");
        themePresetPreview.appendChild(themePresetBackground);
      };
      var themePresetAccent = helper.node("span|class:theme-preset-accent");
      themePresetAccent.style.setProperty("background-color", "rgb(" + arrayItem.accent.r + ", " + arrayItem.accent.g + ", " + arrayItem.accent.b + ")");
      themePresetPreview.appendChild(themePresetAccent);
      if (arrayItem.name != null && arrayItem.name != "") {
        var themePresetName = helper.node("span:" + arrayItem.name + "|class:theme-preset-name");
        themePresetPreview.appendChild(themePresetName);
      };

      themePresetButton.appendChild(themePresetPreview);
      themePresetTile.appendChild(themePresetButton);
      themePresetItem.appendChild(themePresetTile);
      formInline.appendChild(themePresetItem);

      themePresetButton.addEventListener("click", function() {
        mod.preset.set(mod.preset.get(index));
        data.save();
        render.font.display.name();
        render.font.display.weight();
        render.font.display.style();
        render.font.ui.name();
        render.font.ui.weight();
        render.font.ui.style();
        render.color.shade();
        render.accent.color();
        render.radius();
        style.check();
        link.groupAndItems();
        control.render.update();
        control.render.class();
      }, false);
    });
    themePreset.appendChild(formInline);
  };

  render.custom = {
    all: function() {
      var themeCustomSaved = helper.e(".theme-custom");
      var formInline = helper.node("div|class:form-inline");
      var allThemeCuston = JSON.parse(JSON.stringify(state.get.current().theme.custom));
      if (allThemeCuston.length > 0) {
        allThemeCuston.forEach(function(arrayItem, index) {
          var themeCustomItem = helper.node("div|class:theme-custom-item");
          var themeCustomTile = helper.node("div|class:theme-custom-tile");
          var themeCustomButton = helper.node("button|class:theme-custom-button button mb-0,tabindex:-1");
          var themeCustomPreview = helper.node("span|class:theme-custom-preview");
          var themeCustomControl = helper.node("div|class:theme-custom-control");
          var themeCustomRemove = helper.node("button|class:theme-custom-control-item theme-custom-control-item-remove button mb-0,tabindex:-2");
          var themeCustomRemoveIcon = helper.node("spa|class:button-icon icon-close");
          var shadeSteps = 4;
          var rgb = arrayItem.color.rgb;
          var hsl = helper.convertColor.rgb.hsl(rgb);
          for (var i = 1; i <= shadeSteps; i++) {
            if (i > 1) {
              if (arrayItem.style == "dark") {
                rgb = helper.convertColor.hsl.rgb({
                  h: hsl.h,
                  s: hsl.s,
                  l: hsl.l - ((arrayItem.color.contrast.dark) * (i * 2))
                });
              } else if (arrayItem.style == "light") {
                rgb = helper.convertColor.hsl.rgb({
                  h: hsl.h,
                  s: hsl.s,
                  l: hsl.l + ((arrayItem.color.contrast.light) * (i * 2))
                });
              };
            };
            for (var colorKey in rgb) {
              if (rgb[colorKey] < 0) {
                rgb[colorKey] = 0;
              } else if (rgb[colorKey] > 255) {
                rgb[colorKey] = 255;
              };
              rgb[colorKey] = parseInt(rgb[colorKey], 10);
            };
            var themeCustomBackground = helper.node("span|class:theme-custom-background-0" + i);
            themeCustomBackground.style.setProperty("background-color", "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")");
            themeCustomPreview.appendChild(themeCustomBackground);
          };
          var themeCustomAccent = helper.node("span|class:theme-custom-accent");
          themeCustomAccent.style.setProperty("background-color", "rgb(" + arrayItem.accent.r + ", " + arrayItem.accent.g + ", " + arrayItem.accent.b + ")");
          themeCustomPreview.appendChild(themeCustomAccent);
          if (arrayItem.name != null && arrayItem.name != "") {
            var themeCustomName = helper.node("span:" + arrayItem.name + "|class:theme-custom-name");
            themeCustomPreview.appendChild(themeCustomName);
          };

          themeCustomButton.appendChild(themeCustomPreview);
          themeCustomRemove.appendChild(themeCustomRemoveIcon);
          themeCustomControl.appendChild(themeCustomRemove);
          themeCustomTile.appendChild(themeCustomButton);
          themeCustomTile.appendChild(themeCustomControl);
          themeCustomItem.appendChild(themeCustomTile);
          formInline.appendChild(themeCustomItem);

          stagedThemeCustom.position.index = index;
          stagedThemeCustom.theme = arrayItem;
          var copyStagedThemeCustom = JSON.parse(JSON.stringify(stagedThemeCustom));

          themeCustomButton.addEventListener("click", function() {
            mod.custom.set(mod.custom.get(index));
            data.save();
            render.font.display.name();
            render.font.display.weight();
            render.font.display.style();
            render.font.ui.name();
            render.font.ui.weight();
            render.font.ui.style();
            render.color.shade();
            render.accent.color();
            render.radius();
            style.check();
            link.groupAndItems();
            control.render.update();
            control.render.class();
          }, false);

          themeCustomRemove.addEventListener("click", function() {
            menu.close();
            render.custom.remove(copyStagedThemeCustom);
          }, false);

          stagedThemeCustom.reset();
        });
        themeCustomSaved.appendChild(formInline);
        themeCustomSaved.appendChild(helper.node("hr"));
      };
    },
    add: function() {
      var form = function() {
        var form = helper.node("form|class:group-form");
        var fieldset = helper.node("fieldset");
        var inputWrap = helper.node("div|class:input-wrap");
        var label = helper.node("label:Name|for:theme-name");
        var input = helper.node("input|id:theme-name,class:theme-name mb-0,type:text,tabindex:1,placeholder:Example theme,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
        inputWrap.appendChild(label);
        inputWrap.appendChild(input);
        fieldset.appendChild(inputWrap);
        form.appendChild(fieldset);
        input.addEventListener("input", function() {
          stagedThemeCustom.theme.name = this.value;
        }, false);
        form.addEventListener("keydown", function(event) {
          if (event.keyCode == 13) {
            event.preventDefault();
            return false;
          };
        }, false);
        return form;
      };
      var successAction = function() {
        stagedThemeCustom.theme.style = state.get.current().theme.style;
        stagedThemeCustom.theme.font = state.get.current().theme.font;
        stagedThemeCustom.theme.color = state.get.current().theme.color;
        stagedThemeCustom.theme.accent = state.get.current().theme.accent.current;
        stagedThemeCustom.theme.radius = state.get.current().theme.radius;
        stagedThemeCustom.theme.timestamp = new Date().getTime();
        mod.custom.add();
        data.save();
        render.custom.clear();
        render.custom.all();
        shade.close();
        pagelock.unlock();
        stagedThemeCustom.reset();
      };
      var cancelAction = function() {
        shade.close();
        pagelock.unlock();
        stagedThemeCustom.reset();
      };
      modal.open({
        heading: "Save current Theme",
        successAction: successAction,
        cancelAction: cancelAction,
        actionText: "Save",
        size: "small",
        content: form()
      });
      shade.open({
        action: function() {
          modal.close();
          pagelock.unlock();
          stagedThemeCustom.reset();
        }
      });
      pagelock.lock();
    },
    remove: function(copyStagedThemeCustom) {
      stagedThemeCustom.position.index = JSON.parse(JSON.stringify(copyStagedThemeCustom.position.index));
      stagedThemeCustom.theme = JSON.parse(JSON.stringify(copyStagedThemeCustom.theme));
      var heading;
      if (stagedThemeCustom.theme.name != null && stagedThemeCustom.theme.name != "") {
        heading = "Remove " + stagedThemeCustom.theme.name;
      } else {
        heading = "Remove unnamed theme";
      };
      var successAction = function() {
        mod.custom.remove();
        data.save();
        render.custom.clear();
        render.custom.all();
        shade.close();
        pagelock.unlock();
        stagedThemeCustom.reset();
      };
      var cancelAction = function() {
        shade.close();
        pagelock.unlock();
        stagedThemeCustom.reset();
      };
      modal.open({
        heading: heading,
        content: "Are you sure you want to remove this Theme? This can not be undone.",
        successAction: successAction,
        cancelAction: cancelAction,
        actionText: "Remove",
        size: "small"
      });
      shade.open({
        action: function() {
          modal.close();
          pagelock.unlock();
          stagedThemeCustom.reset();
        }
      });
      pagelock.lock();
    },
    edit: function() {
      var html = helper.e("html");
      if (_customThemeEdit) {
        _customThemeEdit = false;
        helper.removeClass(html, "is-theme-custom-edit");
      } else {
        _customThemeEdit = true;
        helper.addClass(html, "is-theme-custom-edit");
      };
    },
    clear: function() {
      var themeCustom = helper.e(".theme-custom");
      while (themeCustom.lastChild) {
        themeCustom.removeChild(themeCustom.lastChild);
      };
    },
    tabIndex: function() {
      if (_customThemeEdit) {
        helper.eA(".theme-custom-control-item").forEach(function(arrayItem, index) {
          if (arrayItem.tabIndex == -2) {
            arrayItem.tabIndex = 1;
          };
        });
      } else {
        helper.eA(".theme-custom-control-item").forEach(function(arrayItem, index) {
          if (arrayItem.tabIndex == 1) {
            arrayItem.tabIndex = -2;
          };
        });
      };
    }
  };

  var accent = {
    random: function() {
      mod.accent.random();
      render.accent.color();
    }
  };

  var style = {
    dark: function() {
      mod.style.dark();
      render.style.dark();
    },
    light: function() {
      mod.style.light();
      render.style.light();
    },
    check: function() {
      if (state.get.current().theme.style == "dark") {
        style.dark();
      } else if (state.get.current().theme.style == "light") {
        style.light();
      };
    },
    toggle: function() {
      if (state.get.current().theme.style == "dark") {
        style.light();
      } else if (state.get.current().theme.style == "light") {
        style.dark();
      };
    }
  }

  var preset = function(name) {
    mod.preset.set(name);
  };

  var custom = {
    add: function() {
      render.custom.add();
    },
    edit: function() {
      render.custom.edit();
      render.custom.tabIndex();
    }
  };

  var init = function() {
    style.check();
    accent.random();
    mod.accent.random();
    render.font.display.name();
    render.font.display.weight();
    render.font.display.style();
    render.font.ui.name();
    render.font.ui.weight();
    render.font.ui.style();
    render.color.shade();
    render.accent.color();
    render.radius();
    render.preset();
    render.custom.all();
  };

  // exposed methods
  return {
    init: init,
    mod: mod,
    render: render,
    style: style,
    accent: accent,
    preset: preset,
    custom: custom
  };

})();
