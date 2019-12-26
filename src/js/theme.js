var theme = (function() {

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
    set: function(name) {
      helper.setObject({
        object: state.get.current(),
        path: "theme.accent.current",
        newValue: mod.preset.all[name].accent
      });
      helper.setObject({
        object: state.get.current(),
        path: "theme.color",
        newValue: mod.preset.all[name].color
      });
      helper.setObject({
        object: state.get.current(),
        path: "theme.style",
        newValue: mod.preset.all[name].style
      });
      helper.setObject({
        object: state.get.current(),
        path: "theme.radius",
        newValue: mod.preset.all[name].radius
      });
    },
    all: {
      nighttab: {
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
          }
        },
        accent: {
          r: 0,
          g: 80,
          b: 255
        },
        radius: 0.25,
        style: "dark"
      },
      midnight: {
        color: {
          hsl: {
            h: 215,
            s: 41,
            l: 48
          },
          rgb: {
            r: 72,
            g: 114,
            b: 172
          }
        },
        accent: {
          r: 37,
          g: 55,
          b: 134
        },
        radius: 0.5,
        style: "dark"
      },
      bluegum: {
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
          }
        },
        accent: {
          r: 255,
          g: 251,
          b: 0
        },
        radius: 0.2,
        style: "dark"
      },
      sharpmint: {
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
          }
        },
        accent: {
          r: 94,
          g: 255,
          b: 226
        },
        radius: 0.8,
        style: "dark"
      },
      snowblue: {
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
          }
        },
        accent: {
          r: 59,
          g: 207,
          b: 214
        },
        radius: 0,
        style: "light"
      },
      chocorum: {
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
          }
        },
        accent: {
          r: 196,
          g: 0,
          b: 66
        },
        radius: 0.75,
        style: "dark"
      },
      sunburst: {
        color: {
          hsl: {
            h: 54,
            s: 78,
            l: 47
          },
          rgb: {
            r: 213,
            g: 194,
            b: 26
          }
        },
        accent: {
          r: 255,
          g: 220,
          b: 22
        },
        radius: 0.5,
        style: "light"
      },
      coralgreen: {
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
          }
        },
        accent: {
          r: 255,
          g: 161,
          b: 161
        },
        radius: 2,
        style: "dark"
      },
      purplegem: {
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
          }
        },
        accent: {
          r: 110,
          g: 109,
          b: 208
        },
        radius: 0.40,
        style: "light"
      },
      hotpepper: {
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
          }
        },
        accent: {
          r: 255,
          g: 221,
          b: 0
        },
        radius: 0.6,
        style: "dark"
      },
      steelgrey: {
        color: {
          hsl: {
            h: 214,
            s: 25,
            l: 44
          },
          rgb: {
            r: 85,
            g: 110,
            b: 143
          }
        },
        accent: {
          r: 59,
          g: 95,
          b: 118
        },
        radius: 0.3,
        style: "light"
      },
      outrun: {
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
          }
        },
        accent: {
          r: 255,
          g: 0,
          b: 187
        },
        radius: 0,
        style: "dark"
      },
      pumpkin: {
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
          }
        },
        accent: {
          r: 238,
          g: 119,
          b: 34
        },
        radius: 0.2,
        style: "dark"
      },
      whoosh: {
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
          }
        },
        accent: {
          r: 238,
          g: 238,
          b: 34
        },
        radius: 1.2,
        style: "dark"
      }
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
      var shadeSteps = 10;
      var saturationShift = 0;
      var lightShift = 4;
      var html = helper.e("html");
      var hsl = helper.convertColor.rgb.hsl(state.get.current().theme.color.rgb);
      html.style.setProperty("--theme-shade", state.get.current().theme.color.rgb.r + ", " + state.get.current().theme.color.rgb.g + ", " + state.get.current().theme.color.rgb.b);
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
        } else {
          index = index;
        };
        html.style.setProperty(name + index, rgb.r + ", " + rgb.g + ", " + rgb.b);
      };
      for (var i = 1; i <= shadeSteps; i++) {
        var rgb = helper.convertColor.hsl.rgb({
          h: hsl.h,
          s: hsl.s - (saturationShift * i),
          l: hsl.l - (lightShift * i)
        });
        renderShade("--theme-shade-neg-", i, rgb);
      };
      for (var i = 1; i <= shadeSteps; i++) {
        var rgb = helper.convertColor.hsl.rgb({
          h: hsl.h,
          s: hsl.s + (saturationShift * i),
          l: hsl.l + (lightShift * i)
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

  render.preset = function() {
    var html = helper.e("html");
    for (var key in mod.preset.all) {
      var preset = mod.preset.all[key];
      var shadeSteps = 4;
      var lightShift = 12;
      var hsl = helper.convertColor.rgb.hsl(preset.color.rgb);
      var renderPreview = function(name, index, rgb) {
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
        } else {
          index = index;
        };
        html.style.setProperty(name + index, rgb.r + ", " + rgb.g + ", " + rgb.b);
      };
      for (var i = 1; i <= shadeSteps; i++) {
        var rgb;
        if (preset.style == "dark") {
          rgb = helper.convertColor.hsl.rgb({
            h: hsl.h,
            s: hsl.s,
            l: hsl.l - (lightShift * i)
          });
        } else if (preset.style == "light") {
          rgb = helper.convertColor.hsl.rgb({
            h: hsl.h,
            s: hsl.s,
            l: hsl.l + (lightShift * i)
          });
        };
        renderPreview("--theme-preset-background-" + key + "-", i, rgb);
      };
      html.style.setProperty("--theme-preset-accent-" + key, preset.accent.r + ", " + preset.accent.g + ", " + preset.accent.b);
    };
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

  var init = function() {
    style.check();
    accent.random();
    mod.accent.random();
    render.color.shade();
    render.accent.color();
    render.radius();
    render.preset();
  };

  // exposed methods
  return {
    init: init,
    mod: mod,
    render: render,
    style: style,
    accent: accent,
    preset: preset
  };

})();
