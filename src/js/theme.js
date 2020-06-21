var theme = (function() {

  var _timerFontDisplay = null;
  var _timerFontUi = null;
  var _timerAccentCycle = null;

  var stagedThemeCustom = {
    position: {
      index: null
    },
    theme: {
      name: null,
      font: null,
      color: null,
      accent: {
        hsl: null,
        rgb: null
      },
      radius: null,
      shadow: null,
      style: null,
      shade: null,
      timestamp: null
    }
  };

  stagedThemeCustom.reset = function() {
    stagedThemeCustom.position.index = null;
    stagedThemeCustom.theme.name = null;
    stagedThemeCustom.theme.font = null;
    stagedThemeCustom.theme.color = null;
    stagedThemeCustom.theme.accent.hsl = null;
    stagedThemeCustom.theme.accent.rgb = null;
    stagedThemeCustom.theme.radius = null;
    stagedThemeCustom.theme.shadow = null;
    stagedThemeCustom.theme.style = null;
    stagedThemeCustom.theme.shade = null;
    stagedThemeCustom.theme.timestamp = null;
  };

  var bind = {};

  bind.accent = {
    cycle: {
      toggle: function() {
        if (state.get.current().theme.accent.cycle.active) {
          bind.accent.cycle.add();
        } else {
          bind.accent.cycle.remove();
        };
      },
      add: function() {
        _timerAccentCycle = setInterval(function() {
          accent.cycle();
          control.render.update.control.header(control.mod.header[5]);
          if (state.get.current().menu) {
            control.render.update.control.menu(control.mod.menu.controls.theme.accent[0]);
            control.render.update.control.menu(control.mod.menu.controls.theme.accent[1]);
            control.render.update.control.menu(control.mod.menu.controls.theme.accent[3]);
            control.render.update.control.menu(control.mod.menu.controls.theme.accent[4]);
            control.render.update.control.menu(control.mod.menu.controls.theme.accent[5]);
            control.render.update.control.menu(control.mod.menu.controls.theme.accent[6]);
            control.render.update.control.menu(control.mod.menu.controls.theme.accent[7]);
            control.render.update.control.menu(control.mod.menu.controls.theme.accent[8]);
            control.render.update.control.menu(control.mod.menu.controls.theme.accent[9]);
            control.render.update.control.menu(control.mod.menu.controls.theme.accent[10]);
            control.render.update.control.menu(control.mod.menu.controls.theme.accent[11]);
            control.render.update.control.menu(control.mod.menu.controls.theme.accent[12]);
            control.render.update.control.menu(control.mod.menu.controls.theme.accent[13]);
            control.render.update.control.menu(control.mod.menu.controls.theme.accent[14]);
          };
        }, state.get.current().theme.accent.cycle.speed);
      },
      remove: function() {
        clearInterval(_timerAccentCycle);
        _timerAccentCycle = null;
      }
    }
  };

  var mod = {};

  mod.apply = function(data) {
    helper.setObject({
      object: state.get.current(),
      path: "theme.font",
      newValue: data.font
    });
    helper.setObject({
      object: state.get.current(),
      path: "theme.color",
      newValue: data.color
    });
    helper.setObject({
      object: state.get.current(),
      path: "theme.accent.hsl",
      newValue: data.accent.hsl
    });
    helper.setObject({
      object: state.get.current(),
      path: "theme.accent.rgb",
      newValue: data.accent.rgb
    });
    helper.setObject({
      object: state.get.current(),
      path: "theme.radius",
      newValue: data.radius
    });
    helper.setObject({
      object: state.get.current(),
      path: "theme.shadow",
      newValue: data.shadow
    });
    helper.setObject({
      object: state.get.current(),
      path: "theme.style",
      newValue: data.style
    });
    helper.setObject({
      object: state.get.current(),
      path: "theme.shade",
      newValue: data.shade
    });
  };

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
    },
    system: function() {
      helper.setObject({
        object: state.get.current(),
        path: "theme.style",
        newValue: "system"
      });
    }
  };

  mod.accent = {
    hsl: function() {
      var hsl = helper.convertColor.rgb.hsl(state.get.current().theme.accent.rgb);
      helper.setObject({
        object: state.get.current(),
        path: "theme.accent.hsl",
        newValue: {
          h: Math.round(hsl.h),
          s: Math.round(hsl.s),
          l: Math.round(hsl.l)
        }
      });
    },
    rgb: function() {
      var rgb = helper.convertColor.hsl.rgb(state.get.current().theme.accent.hsl);
      helper.setObject({
        object: state.get.current(),
        path: "theme.accent.rgb",
        newValue: {
          r: Math.round(rgb.r),
          g: Math.round(rgb.g),
          b: Math.round(rgb.b)
        }
      });
    },
    random: function() {
      if (state.get.current().theme.accent.random.active) {
        var randomValue = function(min, max) {
          return Math.floor(Math.random() * (max - min) + 1) + min;
        };
        var color = {
          any: function() {
            return {
              h: randomValue(0, 360),
              s: randomValue(0, 100),
              l: randomValue(0, 100)
            };
          },
          light: function() {
            return {
              h: randomValue(0, 360),
              s: randomValue(50, 90),
              l: randomValue(50, 90)
            };
          },
          dark: function() {
            return {
              h: randomValue(0, 360),
              s: randomValue(10, 50),
              l: randomValue(10, 50)
            };
          },
          pastel: function() {
            return {
              h: randomValue(0, 360),
              s: 50,
              l: 80
            };
          },
          saturated: function() {
            return {
              h: randomValue(0, 360),
              s: 100,
              l: 50
            };
          }
        };
        var hsl = color[state.get.current().theme.accent.random.style]();
        var rgb = helper.convertColor.hsl.rgb(hsl);
        helper.setObject({
          object: state.get.current(),
          path: "theme.accent.rgb",
          newValue: {
            r: Math.round(rgb.r),
            g: Math.round(rgb.g),
            b: Math.round(rgb.b)
          }
        });
        helper.setObject({
          object: state.get.current(),
          path: "theme.accent.hsl",
          newValue: {
            h: Math.round(hsl.h),
            s: Math.round(hsl.s),
            l: Math.round(hsl.l)
          }
        });
      };
    },
    cycle: function() {
      var incrementVal = function(start, end, currentValue) {
        var newValue = currentValue + state.get.current().theme.accent.cycle.step;
        if (newValue > end) {
          newValue = start;
        };
        return newValue;
      };
      var hsl = helper.convertColor.rgb.hsl(state.get.current().theme.accent.rgb);
      hsl.h = incrementVal(0, 359, hsl.h);
      var rgb = helper.convertColor.hsl.rgb(hsl);
      helper.setObject({
        object: state.get.current(),
        path: "theme.accent.rgb",
        newValue: {
          r: Math.round(rgb.r),
          g: Math.round(rgb.g),
          b: Math.round(rgb.b)
        }
      });
      helper.setObject({
        object: state.get.current(),
        path: "theme.accent.hsl",
        newValue: {
          h: Math.round(hsl.h),
          s: Math.round(hsl.s),
          l: Math.round(hsl.l)
        }
      });
    },
    preset: {
      nameModifier: {
        "90": "Super extra light",
        "77": "Extra light",
        "63": "Light",
        "37": "Dark",
        "23": "Extra dark",
        "10": "Super extra dark"
      },
      all: [{
        name: "Grey",
        type: "grey",
        colors: [{
          h: 0,
          s: 0,
          l: 90
        }, {
          h: 0,
          s: 0,
          l: 77
        }, {
          h: 0,
          s: 0,
          l: 63
        }, {
          h: 0,
          s: 0,
          l: 50
        }, {
          h: 0,
          s: 0,
          l: 37
        }, {
          h: 0,
          s: 0,
          l: 23
        }, {
          h: 0,
          s: 0,
          l: 10
        }]
      }, {
        name: "Red",
        type: "primary",
        colors: [{
          h: 0,
          s: 40,
          l: 90
        }, {
          h: 0,
          s: 60,
          l: 77
        }, {
          h: 0,
          s: 80,
          l: 63
        }, {
          h: 0,
          s: 100,
          l: 50
        }, {
          h: 0,
          s: 80,
          l: 37
        }, {
          h: 0,
          s: 60,
          l: 23
        }, {
          h: 0,
          s: 40,
          l: 10
        }]
      }, {
        name: "Orange",
        type: "secondary",
        colors: [{
          h: 30,
          s: 40,
          l: 90
        }, {
          h: 30,
          s: 60,
          l: 77
        }, {
          h: 30,
          s: 80,
          l: 63
        }, {
          h: 30,
          s: 100,
          l: 50
        }, {
          h: 30,
          s: 80,
          l: 37
        }, {
          h: 30,
          s: 60,
          l: 23
        }, {
          h: 30,
          s: 40,
          l: 10
        }]
      }, {
        name: "Yellow",
        type: "primary",
        colors: [{
          h: 60,
          s: 40,
          l: 90
        }, {
          h: 60,
          s: 60,
          l: 77
        }, {
          h: 60,
          s: 80,
          l: 63
        }, {
          h: 60,
          s: 100,
          l: 50
        }, {
          h: 60,
          s: 80,
          l: 37
        }, {
          h: 60,
          s: 60,
          l: 23
        }, {
          h: 60,
          s: 40,
          l: 10
        }]
      }, {
        name: "Lime",
        type: "secondary",
        colors: [{
          h: 90,
          s: 40,
          l: 90
        }, {
          h: 90,
          s: 60,
          l: 77
        }, {
          h: 90,
          s: 80,
          l: 63
        }, {
          h: 90,
          s: 100,
          l: 50
        }, {
          h: 90,
          s: 80,
          l: 37
        }, {
          h: 90,
          s: 60,
          l: 23
        }, {
          h: 90,
          s: 40,
          l: 10
        }]
      }, {
        name: "Green",
        type: "primary",
        colors: [{
          h: 120,
          s: 40,
          l: 90
        }, {
          h: 120,
          s: 60,
          l: 77
        }, {
          h: 120,
          s: 80,
          l: 63
        }, {
          h: 120,
          s: 100,
          l: 50
        }, {
          h: 120,
          s: 80,
          l: 37
        }, {
          h: 120,
          s: 60,
          l: 23
        }, {
          h: 120,
          s: 40,
          l: 10
        }]
      }, {
        name: "Aqua",
        type: "secondary",
        colors: [{
          h: 150,
          s: 40,
          l: 90
        }, {
          h: 150,
          s: 60,
          l: 77
        }, {
          h: 150,
          s: 80,
          l: 63
        }, {
          h: 150,
          s: 100,
          l: 50
        }, {
          h: 150,
          s: 80,
          l: 37
        }, {
          h: 150,
          s: 60,
          l: 23
        }, {
          h: 150,
          s: 40,
          l: 10
        }]
      }, {
        name: "Cyan",
        type: "primary",
        colors: [{
          h: 180,
          s: 40,
          l: 90
        }, {
          h: 180,
          s: 60,
          l: 77
        }, {
          h: 180,
          s: 80,
          l: 63
        }, {
          h: 180,
          s: 100,
          l: 50
        }, {
          h: 180,
          s: 80,
          l: 37
        }, {
          h: 180,
          s: 60,
          l: 23
        }, {
          h: 180,
          s: 40,
          l: 10
        }]
      }, {
        name: "Teal",
        type: "secondary",
        colors: [{
          h: 210,
          s: 40,
          l: 90
        }, {
          h: 210,
          s: 60,
          l: 77
        }, {
          h: 210,
          s: 80,
          l: 63
        }, {
          h: 210,
          s: 100,
          l: 50
        }, {
          h: 210,
          s: 80,
          l: 37
        }, {
          h: 210,
          s: 60,
          l: 23
        }, {
          h: 210,
          s: 40,
          l: 10
        }]
      }, {
        name: "Blue",
        type: "primary",
        colors: [{
          h: 240,
          s: 40,
          l: 90
        }, {
          h: 240,
          s: 60,
          l: 77
        }, {
          h: 240,
          s: 80,
          l: 63
        }, {
          h: 240,
          s: 100,
          l: 50
        }, {
          h: 240,
          s: 80,
          l: 37
        }, {
          h: 240,
          s: 60,
          l: 23
        }, {
          h: 240,
          s: 40,
          l: 10
        }]
      }, {
        name: "Purple",
        type: "secondary",
        colors: [{
          h: 270,
          s: 40,
          l: 90
        }, {
          h: 270,
          s: 60,
          l: 77
        }, {
          h: 270,
          s: 80,
          l: 63
        }, {
          h: 270,
          s: 100,
          l: 50
        }, {
          h: 270,
          s: 80,
          l: 37
        }, {
          h: 270,
          s: 60,
          l: 23
        }, {
          h: 270,
          s: 40,
          l: 10
        }]
      }, {
        name: "Magenta",
        type: "primary",
        colors: [{
          h: 300,
          s: 40,
          l: 90
        }, {
          h: 300,
          s: 60,
          l: 77
        }, {
          h: 300,
          s: 80,
          l: 63
        }, {
          h: 300,
          s: 100,
          l: 50
        }, {
          h: 300,
          s: 80,
          l: 37
        }, {
          h: 300,
          s: 60,
          l: 23
        }, {
          h: 300,
          s: 40,
          l: 10
        }]
      }, {
        name: "Fuchsia",
        type: "secondary",
        colors: [{
          h: 330,
          s: 40,
          l: 90
        }, {
          h: 330,
          s: 60,
          l: 77
        }, {
          h: 330,
          s: 80,
          l: 63
        }, {
          h: 330,
          s: 100,
          l: 50
        }, {
          h: 330,
          s: 80,
          l: 37
        }, {
          h: 330,
          s: 60,
          l: 23
        }, {
          h: 330,
          s: 40,
          l: 10
        }]
      }],
      set: function(hsl) {
        var rgb = helper.convertColor.hsl.rgb(hsl);
        helper.setObject({
          object: state.get.current(),
          path: "theme.accent.hsl",
          newValue: {
            h: hsl.h,
            s: hsl.s,
            l: hsl.l
          }
        });
        helper.setObject({
          object: state.get.current(),
          path: "theme.accent.rgb",
          newValue: {
            r: Math.round(rgb.r),
            g: Math.round(rgb.g),
            b: Math.round(rgb.b)
          }
        });
      }
    }
  };

  mod.color = {
    hsl: function() {
      var hsl = helper.convertColor.rgb.hsl(state.get.current().theme.color.rgb);
      helper.setObject({
        object: state.get.current(),
        path: "theme.color.hsl",
        newValue: {
          h: Math.round(hsl.h),
          s: Math.round(hsl.s),
          l: Math.round(hsl.l)
        }
      });
    },
    rgb: function() {
      var rgb = helper.convertColor.hsl.rgb(state.get.current().theme.color.hsl);
      helper.setObject({
        object: state.get.current(),
        path: "theme.color.rgb",
        newValue: {
          r: Math.round(rgb.r),
          g: Math.round(rgb.g),
          b: Math.round(rgb.b)
        }
      });
    },
    generated: function() {
      var shadeMax = 10;
      var shadeMin = 1;
      var contrastNeg = state.get.current().theme.color.contrast.dark;
      var contrastPos = state.get.current().theme.color.contrast.light;
      var hsl = helper.convertColor.rgb.hsl(state.get.current().theme.color.rgb);
      var validateRGBNumber = function(rgb) {
        for (var key in rgb) {
          if (rgb[key] < 0) {
            rgb[key] = 0;
          } else if (rgb[key] > 255) {
            rgb[key] = 255;
          };
          rgb[key] = Math.round(rgb[key]);
        };
        return rgb;
      };
      // set light theme shades
      for (var i = shadeMax; i >= shadeMin; i--) {
        var rgb = helper.convertColor.hsl.rgb({
          h: hsl.h,
          s: hsl.s,
          l: hsl.l - (contrastNeg * i)
        });
        helper.setObject({
          object: state.get.current(),
          path: "theme.color.generated.negative." + i,
          newValue: validateRGBNumber(rgb)
        });
      };
      // set dark theme shades
      for (var i = shadeMin; i <= shadeMax; i++) {
        var rgb = helper.convertColor.hsl.rgb({
          h: hsl.h,
          s: hsl.s,
          l: hsl.l + (contrastPos * i)
        });
        helper.setObject({
          object: state.get.current(),
          path: "theme.color.generated.positive." + i,
          newValue: validateRGBNumber(rgb)
        });
      };
    }
  };

  mod.preset = {
    get: function(index) {
      return JSON.parse(JSON.stringify(mod.preset.all[index]));
    },
    all: [{
      name: "nightTab (default)",
      font: state.get.default().theme.font,
      color: state.get.default().theme.color,
      accent: {
        hsl: state.get.default().theme.accent.hsl,
        rgb: state.get.default().theme.accent.rgb
      },
      radius: state.get.default().theme.radius,
      shadow: state.get.default().theme.shadow,
      style: state.get.default().theme.style,
      shade: state.get.default().theme.shade
    }, {
      name: "Black",
      font: state.get.default().theme.font,
      color: {
        hsl: {
          h: 0,
          s: 0,
          l: 50
        },
        rgb: {
          r: 128,
          g: 128,
          b: 128
        },
        contrast: {
          light: 5,
          dark: 5
        }
      },
      accent: {
        hsl: {
          h: 0,
          s: 0,
          l: 50
        },
        rgb: {
          r: 128,
          g: 128,
          b: 128
        }
      },
      radius: state.get.default().theme.radius,
      shadow: state.get.default().theme.shadow,
      style: "dark",
      shade: state.get.default().theme.shade
    }, {
      name: "White",
      font: state.get.default().theme.font,
      color: {
        hsl: {
          h: 0,
          s: 0,
          l: 50
        },
        rgb: {
          r: 128,
          g: 128,
          b: 128
        },
        contrast: {
          light: 5,
          dark: 5
        }
      },
      accent: {
        hsl: {
          h: 0,
          s: 0,
          l: 50
        },
        rgb: {
          r: 128,
          g: 128,
          b: 128
        }
      },
      radius: state.get.default().theme.radius,
      shadow: state.get.default().theme.shadow,
      style: "light",
      shade: state.get.default().theme.shade
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
        }
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
        rgb: {
          r: 0,
          g: 17,
          b: 255
        },
        hsl: {
          h: 236,
          s: 100,
          l: 50
        }
      },
      radius: 0.5,
      shadow: 0.75,
      style: "dark",
      shade: {
        opacity: 0.1
      }
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
        }
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
        rgb: {
          r: 0,
          g: 255,
          b: 170
        },
        hsl: {
          h: 160,
          s: 100,
          l: 50
        }
      },
      radius: 0.1,
      shadow: 1,
      style: "dark",
      shade: {
        opacity: 0.9
      }
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
        }
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
        rgb: {
          r: 255,
          g: 251,
          b: 0
        },
        hsl: {
          h: 59,
          s: 100,
          l: 50
        }
      },
      radius: 0.2,
      shadow: 1.5,
      style: "dark",
      shade: {
        opacity: 0.7
      }
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
        }
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
        rgb: {
          r: 94,
          g: 255,
          b: 226
        },
        hsl: {
          h: 169,
          s: 100,
          l: 68
        }
      },
      radius: 0.8,
      shadow: 1,
      style: "dark",
      shade: {
        opacity: 0.4
      }
    }, {
      name: "Snow",
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
        }
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
        rgb: {
          r: 181,
          g: 226,
          b: 236
        },
        hsl: {
          h: 191,
          s: 59,
          l: 82
        }
      },
      radius: 0,
      shadow: 0.25,
      style: "light",
      shade: {
        opacity: 0.6
      }
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
        }
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
        rgb: {
          r: 196,
          g: 0,
          b: 66
        },
        hsl: {
          h: 340,
          s: 100,
          l: 38
        }
      },
      radius: 0.75,
      shadow: 1.75,
      style: "dark",
      shade: {
        opacity: 0.5
      }
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
        }
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
        rgb: {
          r: 255,
          g: 185,
          b: 0
        },
        hsl: {
          h: 44,
          s: 100,
          l: 50
        }
      },
      radius: 0.5,
      shadow: 0.25,
      style: "light",
      shade: {
        opacity: 0.9
      }
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
        }
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
        rgb: {
          r: 255,
          g: 161,
          b: 161
        },
        hsl: {
          h: 0,
          s: 100,
          l: 82
        }
      },
      radius: 2,
      shadow: 0.5,
      style: "dark",
      shade: {
        opacity: 0.1
      }
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
          light: 5,
          dark: 2
        }
      },
      accent: {
        rgb: {
          r: 0,
          g: 255,
          b: 102
        },
        hsl: {
          h: 144,
          s: 100,
          l: 50
        }
      },
      radius: 1,
      shadow: 1.5,
      style: "dark",
      shade: {
        opacity: 0.9
      }
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
        }
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
        rgb: {
          r: 110,
          g: 109,
          b: 208
        },
        hsl: {
          h: 241,
          s: 51,
          l: 62
        }
      },
      radius: 0.4,
      shadow: 0.5,
      style: "light",
      shade: {
        opacity: 0.3
      }
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
        }
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
        rgb: {
          r: 255,
          g: 150,
          b: 0
        },
        hsl: {
          h: 35,
          s: 100,
          l: 50
        }
      },
      radius: 0.6,
      shadow: 1,
      style: "dark",
      shade: {
        opacity: 0.1
      }
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
        }
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
        rgb: {
          r: 59,
          g: 95,
          b: 118
        },
        hsl: {
          h: 203,
          s: 33,
          l: 35
        }
      },
      radius: 0.3,
      shadow: 0.5,
      style: "light",
      shade: {
        opacity: 0.7
      }
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
        }
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
        rgb: {
          r: 255,
          g: 0,
          b: 187
        },
        hsl: {
          h: 316,
          s: 100,
          l: 50
        }
      },
      radius: 0,
      shadow: 0,
      style: "dark",
      shade: {
        opacity: 0.7
      }
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
        }
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
        rgb: {
          r: 238,
          g: 119,
          b: 34
        },
        hsl: {
          h: 25,
          s: 86,
          l: 53
        }
      },
      radius: 0.2,
      shadow: 1,
      style: "dark",
      shade: {
        opacity: 0.1
      }
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
        }
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
        rgb: {
          r: 238,
          g: 238,
          b: 34
        },
        hsl: {
          h: 60,
          s: 86,
          l: 53
        }
      },
      radius: 1.2,
      shadow: 0,
      style: "dark",
      shade: {
        opacity: 0.8
      }
    }, {
      name: "Elder Bean",
      font: {
        display: {
          name: "Life Savers",
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
          h: 191,
          s: 73,
          l: 48
        },
        rgb: {
          r: 33,
          g: 178,
          b: 211
        },
        contrast: {
          light: 5,
          dark: 4
        }
      },
      accent: {
        rgb: {
          r: 255,
          g: 160,
          b: 0
        },
        hsl: {
          h: 38,
          s: 100,
          l: 50
        }
      },
      radius: 0.5,
      shadow: 1.75,
      style: "dark",
      shade: {
        opacity: 0.1
      }
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
          r: 128,
          g: 128,
          b: 128
        },
        contrast: {
          light: 4,
          dark: 1
        }
      },
      accent: {
        rgb: {
          r: 34,
          g: 51,
          b: 68
        },
        hsl: {
          h: 210,
          s: 33,
          l: 20
        }
      },
      radius: 0.3,
      shadow: 0.5,
      style: "light",
      shade: {
        opacity: 0.9
      }
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
        rgb: {
          r: 21,
          g: 255,
          b: 0
        },
        hsl: {
          h: 115,
          s: 100,
          l: 50
        }
      },
      radius: 0.4,
      shadow: 1,
      style: "dark",
      shade: {
        opacity: 0.7
      }
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
        rgb: {
          r: 187,
          g: 17,
          b: 68
        },
        hsl: {
          h: 342,
          s: 83,
          l: 40
        }
      },
      radius: 0,
      shadow: 0,
      style: "light",
      shade: {
        opacity: 0.5
      }
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
        rgb: {
          r: 255,
          g: 0,
          b: 0
        },
        hsl: {
          h: 0,
          s: 100,
          l: 50
        }
      },
      radius: 0,
      shadow: 2.5,
      style: "dark",
      shade: {
        opacity: 0.8
      }
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
        rgb: {
          r: 0,
          g: 255,
          b: 255
        },
        hsl: {
          h: 180,
          s: 100,
          l: 50
        }
      },
      radius: 0.5,
      shadow: 1.25,
      style: "dark",
      shade: {
        opacity: 0.1
      }
    }, {
      name: "Obsidian",
      font: {
        display: {
          name: "Zilla Slab",
          weight: 700,
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
        rgb: {
          r: 0,
          g: 255,
          b: 255
        },
        hsl: {
          h: 180,
          s: 100,
          l: 50
        }
      },
      radius: 0.25,
      shadow: 2,
      style: "dark",
      shade: {
        opacity: 0.05
      }
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
        rgb: {
          r: 255,
          g: 204,
          b: 0
        },
        hsl: {
          h: 48,
          s: 100,
          l: 50
        }
      },
      radius: 0.8,
      shadow: 1,
      style: "dark",
      shade: {
        opacity: 0.8
      }
    }, {
      name: "Koto",
      font: {
        display: {
          name: "Dosis",
          weight: 200,
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
          h: 231,
          s: 56,
          l: 53
        },
        rgb: {
          r: 68,
          g: 88,
          b: 202
        },
        contrast: {
          light: 4.5,
          dark: 4
        }
      },
      accent: {
        rgb: {
          r: 255,
          g: 12,
          b: 88
        },
        hsl: {
          h: 341,
          s: 100,
          l: 52
        }
      },
      radius: 0.25,
      shadow: 0.5,
      style: "dark",
      shade: {
        opacity: 0.5
      }
    }, {
      name: "Acrid",
      font: {
        display: {
          name: "Titillium Web",
          weight: 400,
          style: "italic"
        },
        ui: {
          name: "Inconsolata",
          weight: 400,
          style: "normal"
        }
      },
      color: {
        hsl: {
          h: 301,
          s: 32,
          l: 57
        },
        rgb: {
          r: 180,
          g: 110,
          b: 179
        },
        contrast: {
          light: 4,
          dark: 4.6
        }
      },
      accent: {
        rgb: {
          r: 29,
          g: 213,
          b: 0
        },
        hsl: {
          h: 112,
          s: 100,
          l: 42
        }
      },
      radius: 0.3,
      shadow: 0.75,
      style: "dark",
      shade: {
        opacity: 0.2
      }
    }, {
      name: "Nord",
      font: {
        display: {
          name: "Rubik",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "Inter",
          weight: 400,
          style: "normal"
        }
      },
      color: {
        hsl: {
          h: 220,
          s: 16,
          l: 41
        },
        rgb: {
          r: 88,
          g: 99,
          b: 121
        },
        contrast: {
          light: 5.3,
          dark: 2.5
        }
      },
      accent: {
        hsl: {
          h: 213,
          s: 32,
          l: 52
        },
        rgb: {
          r: 94,
          g: 129,
          b: 172
        }
      },
      radius: 0.75,
      shadow: 1,
      style: "dark",
      shade: {
        opacity: 0.05
      }
    }]
  };

  mod.custom = {
    get: function(index) {
      return JSON.parse(JSON.stringify(state.get.current().theme.custom.all[index]));
    },
    add: function() {
      state.get.current().theme.custom.all.push(JSON.parse(JSON.stringify(stagedThemeCustom.theme)));
    },
    edit: function() {
      state.get.current().theme.custom.all.splice(stagedThemeCustom.position.index, 1, JSON.parse(JSON.stringify(stagedThemeCustom.theme)));
    },
    remove: function(copyStagedThemeCustom) {
      state.get.current().theme.custom.all.splice(stagedThemeCustom.position.index, 1);
    },
    close: function() {
      helper.setObject({
        object: state.get.current(),
        path: "theme.custom.edit",
        newValue: false
      });
    }
  };

  mod.font = {
    display: {
      light: function() {
        helper.setObject({
          object: state.get.current(),
          path: "theme.font.display.weight",
          newValue: 300
        });
      },
      regular: function() {
        helper.setObject({
          object: state.get.current(),
          path: "theme.font.display.weight",
          newValue: 400
        });
      },
      bold: function() {
        helper.setObject({
          object: state.get.current(),
          path: "theme.font.display.weight",
          newValue: 700
        });
      }
    },
    ui: {
      light: function() {
        helper.setObject({
          object: state.get.current(),
          path: "theme.font.ui.weight",
          newValue: 300
        });
      },
      regular: function() {
        helper.setObject({
          object: state.get.current(),
          path: "theme.font.ui.weight",
          newValue: 400
        });
      },
      bold: function() {
        helper.setObject({
          object: state.get.current(),
          path: "theme.font.ui.weight",
          newValue: 700
        });
      }
    }
  };

  var render = {};

  render.style = {
    dark: function() {
      var html = helper.e("html");
      helper.addClass(html, "is-theme-style-dark");
      helper.removeClass(html, "is-theme-style-light");
      helper.removeClass(html, "is-theme-style-system");
    },
    light: function() {
      var html = helper.e("html");
      helper.removeClass(html, "is-theme-style-dark");
      helper.addClass(html, "is-theme-style-light");
      helper.removeClass(html, "is-theme-style-system");
    },
    system: function() {
      var html = helper.e("html");
      helper.removeClass(html, "is-theme-style-dark");
      helper.removeClass(html, "is-theme-style-light");
      helper.addClass(html, "is-theme-style-system");
    }
  };

  render.accent = {
    color: function() {
      var html = helper.e("html");
      var rgb = state.get.current().theme.accent.rgb;
      html.style.setProperty("--theme-accent-r", rgb.r);
      html.style.setProperty("--theme-accent-g", rgb.g);
      html.style.setProperty("--theme-accent-b", rgb.b);
    },
    preset: function() {
      var themeAccentPreset = helper.e(".theme-accent-preset");

      var _makeAccentButton = function(name, type, hsl) {
        var themeAccentPresetItem = helper.node("button|class:theme-accent-preset-item theme-accent-preset-type-" + type + " button button-block button-ring,title:" + name + ",tabindex:-1");
        var themeAccentPresetItemName = helper.node("span:" + name + "|class:sr-only");
        themeAccentPresetItem.appendChild(themeAccentPresetItemName);
        themeAccentPresetItem.style.setProperty("--theme-accent-preset-item-color-h", hsl.h);
        themeAccentPresetItem.style.setProperty("--theme-accent-preset-item-color-s", hsl.s);
        themeAccentPresetItem.style.setProperty("--theme-accent-preset-item-color-l", hsl.l);
        themeAccentPresetItem.addEventListener("click", function() {
          mod.accent.preset.set(hsl);
          data.save();
          render.accent.color();
          control.render.update.control.header();
          control.render.update.control.menu();
        });
        return themeAccentPresetItem;
      };

      mod.accent.preset.all.forEach(function(arrayItem, index) {
        var name = arrayItem.name;
        var type = arrayItem.type;
        arrayItem.colors.forEach(function(arrayItem, index) {
          var fullName;
          if (mod.accent.preset.nameModifier[arrayItem.l] != undefined) {
            fullName = mod.accent.preset.nameModifier[arrayItem.l] + " " + name.toLowerCase();
          } else {
            fullName = name;
          };
          themeAccentPreset.appendChild(_makeAccentButton(fullName, type, arrayItem));
        });
      });

    }
  };

  render.color = {
    shade: function() {
      var html = helper.e("html");
      // negative
      for (var i = 10; i >= 1; i--) {
        var rgb = state.get.current().theme.color.generated.negative[i];
        var number = i;
        if (i < 10) {
          number = "0" + number;
        };
        html.style.setProperty("--theme-shade-negative-" + number, rgb.r + ", " + rgb.g + ", " + rgb.b);
      };
      // neutral
      var rgb = state.get.current().theme.color.rgb;
      html.style.setProperty("--theme-shade", rgb.r + ", " + rgb.g + ", " + rgb.b);
      // positive
      for (var i = 1; i <= 10; i++) {
        var rgb = state.get.current().theme.color.generated.positive[i];
        var number = i;
        if (i < 10) {
          number = "0" + number;
        };
        html.style.setProperty("--theme-shade-positive-" + number, rgb.r + ", " + rgb.g + ", " + rgb.b);
      };
    }
  };

  render.font = {
    load: {
      display: function() {
        var displayFont = helper.trimString(state.get.current().theme.font.display.name);
        if (helper.checkIfValidString(displayFont)) {
          WebFont.load({
            // fontloading: function(familyName, fvd) {
            //   console.log("fontloading:", familyName);
            // },
            google: {
              families: [helper.trimString(state.get.current().theme.font.display.name) + ":100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"],
            }
          });
        };
        render.font.display.name();
      },
      ui: function() {
        var uiFont = helper.trimString(state.get.current().theme.font.ui.name);
        if (helper.checkIfValidString(uiFont)) {
          WebFont.load({
            // fontloading: function(familyName, fvd) {
            //   console.log("fontloading:", familyName);
            // },
            google: {
              families: [helper.trimString(state.get.current().theme.font.ui.name) + ":100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"],
            }
          });
        };
        render.font.ui.name();
      }
    },
    delay: {
      display: function() {
        clearTimeout(_timerFontDisplay);
        _timerFontDisplay = setTimeout(render.font.load.display, 600);
      },
      ui: function() {
        clearTimeout(_timerFontUi);
        _timerFontUi = setTimeout(render.font.load.ui, 600);
      }
    },
    display: {
      name: function() {
        var html = helper.e("html");
        if (helper.checkIfValidString(state.get.current().theme.font.display.name)) {
          html.style.setProperty("--theme-font-display-name", "\"" + helper.trimString(state.get.current().theme.font.display.name) + "\", \"Fjalla One\", sans-serif");
        } else {
          html.style.removeProperty("--theme-font-display-name");
        };
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
        if (helper.checkIfValidString(state.get.current().theme.font.ui.name)) {
          html.style.setProperty("--theme-font-ui-name", "\"" + helper.trimString(state.get.current().theme.font.ui.name) + "\", \"Open Sans\", sans-serif");
        } else {
          html.style.removeProperty("--theme-font-ui-name");
        };
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

  render.radius = function() {
    var html = helper.e("html");
    html.style.setProperty("--theme-radius", state.get.current().theme.radius + "rem");
  };

  render.shadow = function() {
    var html = helper.e("html");
    html.style.setProperty("--theme-shadow", state.get.current().theme.shadow);
  };

  render.preset = function() {
    var themePreset = helper.e(".theme-preset");
    var formInline = helper.node("div|class:form-inline");
    var allThemePreset = JSON.parse(JSON.stringify(mod.preset.all));
    allThemePreset.forEach(function(arrayItem, index) {
      var themePresetItem = helper.node("div|class:theme-preset-item");
      var themePresetTile = helper.node("div|class:theme-preset-tile");
      var themePresetButton = helper.node("button|class:theme-preset-button button button-block button-ring,tabindex:-1");
      var themePresetPreview = helper.node("span|class:theme-preset-preview");
      var shadeSteps = 4;
      var rgb = arrayItem.color.rgb;
      var hsl = arrayItem.color.hsl;
      for (var i = 1; i <= shadeSteps; i++) {
        if (i > 1) {
          var shiftDark = function() {
            rgb = helper.convertColor.hsl.rgb({
              h: hsl.h,
              s: hsl.s,
              l: hsl.l - ((arrayItem.color.contrast.dark) * (i * 2))
            });
          };
          var shiftLight = function() {
            rgb = helper.convertColor.hsl.rgb({
              h: hsl.h,
              s: hsl.s,
              l: hsl.l + ((arrayItem.color.contrast.light) * (i * 2))
            });
          };
          if (arrayItem.style == "dark") {
            shiftDark();
          } else if (arrayItem.style == "light") {
            shiftLight();
          } else if (arrayItem.style == "system") {
            if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
              shiftDark();
            } else if (window.matchMedia("(prefers-color-scheme:light)").matches) {
              shiftLight();
            };
          };
        };
        for (var colorKey in rgb) {
          if (rgb[colorKey] < 0) {
            rgb[colorKey] = 0;
          } else if (rgb[colorKey] > 255) {
            rgb[colorKey] = 255;
          };
          rgb[colorKey] = Math.round(rgb[colorKey]);
        };
        var themePresetBackground = helper.node("span|class:theme-preset-background-0" + i);
        themePresetPreview.style.setProperty("--theme-preset-background-0" + i, rgb.r + ", " + rgb.g + ", " + rgb.b);
        themePresetPreview.appendChild(themePresetBackground);
      };
      var themePresetAccent = helper.node("span|class:theme-preset-accent");
      themePresetPreview.style.setProperty("--theme-preset-accent", arrayItem.accent.rgb.r + ", " + arrayItem.accent.rgb.g + ", " + arrayItem.accent.rgb.b);
      themePresetPreview.appendChild(themePresetAccent);

      if (helper.checkIfValidString(arrayItem.name)) {
        var themePresetName = helper.node("span:" + arrayItem.name + "|class:theme-preset-name");
        themePresetPreview.appendChild(themePresetName);
      };

      themePresetButton.appendChild(themePresetPreview);
      themePresetTile.appendChild(themePresetButton);
      themePresetItem.appendChild(themePresetTile);
      formInline.appendChild(themePresetItem);

      themePresetButton.addEventListener("click", function() {
        mod.apply(mod.preset.get(index));
        data.save();
        mod.color.generated();
        render.font.display.name();
        render.font.display.weight();
        render.font.display.style();
        render.font.ui.name();
        render.font.ui.weight();
        render.font.ui.style();
        render.color.shade();
        render.accent.color();
        render.radius();
        render.shadow();
        render.shade.opacity();
        render.themeMetaTag();
        style.check();
        control.render.update.control.header();
        control.render.update.control.menu();
        control.render.class();
        render.font.load.display();
        render.font.load.ui();
      }, false);
    });
    themePreset.appendChild(formInline);
  };

  render.custom = {
    all: function() {
      var themeCustomSaved = helper.e(".theme-custom");
      var formInline = helper.node("div|class:form-inline");
      var allThemeCuston = JSON.parse(JSON.stringify(state.get.current().theme.custom.all));
      if (allThemeCuston.length > 0) {
        allThemeCuston.forEach(function(arrayItem, index) {
          var themeCustomItem = helper.node("div|class:theme-custom-item");
          var themeCustomTile = helper.node("div|class:theme-custom-tile");
          var themeCustomButton = helper.node("button|class:theme-custom-button button button-block button-ring,tabindex:-1");
          var themeCustomPreview = helper.node("span|class:theme-custom-preview");
          var themeCustomControl = helper.node("div|class:theme-custom-control");
          var themeCustomEdit = helper.node("button|class:theme-custom-control-item theme-custom-control-item-remove button,tabindex:-1");
          var themeCustomEditIcon = helper.node("span|class:button-icon icon-edit");
          var themeCustomRemove = helper.node("button|class:theme-custom-control-item theme-custom-control-item-remove button,tabindex:-1");
          var themeCustomRemoveIcon = helper.node("span|class:button-icon icon-close");
          var shadeSteps = 4;
          var rgb = arrayItem.color.rgb;
          var hsl = arrayItem.color.hsl;
          for (var i = 1; i <= shadeSteps; i++) {
            if (i > 1) {
              var shiftDark = function() {
                rgb = helper.convertColor.hsl.rgb({
                  h: hsl.h,
                  s: hsl.s,
                  l: hsl.l - ((arrayItem.color.contrast.dark) * (i * 2))
                });
              };
              var shiftLight = function() {
                rgb = helper.convertColor.hsl.rgb({
                  h: hsl.h,
                  s: hsl.s,
                  l: hsl.l + ((arrayItem.color.contrast.light) * (i * 2))
                });
              };
              if (arrayItem.style == "dark") {
                shiftDark();
              } else if (arrayItem.style == "light") {
                shiftLight();
              } else if (arrayItem.style == "system") {
                if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
                  shiftDark();
                } else if (window.matchMedia("(prefers-color-scheme:light)").matches) {
                  shiftLight();
                };
              };
            };
            for (var colorKey in rgb) {
              if (rgb[colorKey] < 0) {
                rgb[colorKey] = 0;
              } else if (rgb[colorKey] > 255) {
                rgb[colorKey] = 255;
              };
              rgb[colorKey] = Math.round(rgb[colorKey]);
            };
            var themeCustomBackground = helper.node("span|class:theme-custom-background-0" + i);
            themeCustomPreview.style.setProperty("--theme-custom-background-0" + i, rgb.r + ", " + rgb.g + ", " + rgb.b);
            themeCustomPreview.appendChild(themeCustomBackground);
          };
          var themeCustomAccent = helper.node("span|class:theme-custom-accent");
          themeCustomPreview.style.setProperty("--theme-custom-accent", arrayItem.accent.rgb.r + ", " + arrayItem.accent.rgb.g + ", " + arrayItem.accent.rgb.b);
          themeCustomPreview.appendChild(themeCustomAccent);
          if (helper.checkIfValidString(arrayItem.name)) {
            themeCustomPreview.appendChild(helper.node("span:" + helper.trimString(arrayItem.name) + "|class:theme-custom-name"));
          };
          themeCustomButton.appendChild(themeCustomPreview);
          themeCustomEdit.appendChild(themeCustomEditIcon);
          themeCustomRemove.appendChild(themeCustomRemoveIcon);
          themeCustomControl.appendChild(themeCustomEdit);
          themeCustomControl.appendChild(themeCustomRemove);
          themeCustomTile.appendChild(themeCustomButton);
          themeCustomTile.appendChild(themeCustomControl);
          themeCustomItem.appendChild(themeCustomTile);
          formInline.appendChild(themeCustomItem);

          stagedThemeCustom.position.index = index;
          stagedThemeCustom.theme = arrayItem;
          var copyStagedThemeCustom = JSON.parse(JSON.stringify(stagedThemeCustom));

          themeCustomButton.addEventListener("click", function() {
            mod.apply(mod.custom.get(index));
            data.save();
            mod.color.generated();
            render.font.display.name();
            render.font.display.weight();
            render.font.display.style();
            render.font.ui.name();
            render.font.ui.weight();
            render.font.ui.style();
            render.color.shade();
            render.accent.color();
            render.radius();
            render.shadow();
            render.shade.opacity();
            render.themeMetaTag();
            render.font.load.display();
            render.font.load.ui();
            style.check();
            control.render.update.control.header();
            control.render.update.control.menu();
            control.render.class();
          }, false);

          themeCustomEdit.addEventListener("click", function() {
            menu.close();
            render.custom.edit(copyStagedThemeCustom);
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
    form: function(override) {
      var options = {
        useStagedTheme: null
      };
      if (override) {
        options = helper.applyOptions(options, override);
      };
      var form = helper.node("form|class:group-form");

      var nameFieldset = helper.node("fieldset");
      var nameFormWrap = helper.node("div|class:form-wrap");
      var nameLabel = helper.node("label:Name|for:theme-name");
      var nameInput = helper.node("input|id:theme-name,class:theme-name mb-0,type:text,tabindex:1,placeholder:Example theme,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");

      var randomFormWrap = helper.node("div|class:form-wrap");
      var randomButton = helper.node("button:Random Theme name|class:button button-line,type:button,tabindex:1");

      randomFormWrap.appendChild(randomButton);

      nameFormWrap.appendChild(nameLabel);
      nameFormWrap.appendChild(nameInput);
      nameFieldset.appendChild(nameFormWrap);
      nameFieldset.appendChild(randomFormWrap);

      form.appendChild(nameFieldset);

      if (options.useStagedTheme) {
        nameInput.value = stagedThemeCustom.theme.name;
      };

      nameInput.addEventListener("input", function() {
        stagedThemeCustom.theme.name = this.value;
      }, false);

      randomButton.addEventListener("click", function(event) {
        var randomName = helper.randomString({
          adjectivesCount: helper.randomNumber(1, 3)
        });
        stagedThemeCustom.theme.name = randomName;
        nameInput.value = randomName;
      }, false);

      form.addEventListener("keydown", function(event) {
        if (event.keyCode == 13) {
          event.preventDefault();
          return false;
        };
      }, false);
      return form;
    },
    add: function() {
      var successAction = function() {
        stagedThemeCustom.theme.font = state.get.current().theme.font;
        stagedThemeCustom.theme.color = state.get.current().theme.color;
        stagedThemeCustom.theme.accent.hsl = state.get.current().theme.accent.hsl;
        stagedThemeCustom.theme.accent.rgb = state.get.current().theme.accent.rgb;
        stagedThemeCustom.theme.radius = state.get.current().theme.radius;
        stagedThemeCustom.theme.shadow = state.get.current().theme.shadow;
        stagedThemeCustom.theme.style = state.get.current().theme.style;
        stagedThemeCustom.theme.shade = state.get.current().theme.shade;
        stagedThemeCustom.theme.timestamp = new Date().getTime();
        mod.custom.add();
        data.save();
        custom.check();
        render.custom.clear();
        render.custom.all();
        shade.close();
        pagelock.unlock();
        stagedThemeCustom.reset();
        control.render.dependents();
      };
      var cancelAction = function() {
        shade.close();
        pagelock.unlock();
        stagedThemeCustom.reset();
      };
      modal.open({
        heading: "Save current Theme",
        content: render.custom.form(),
        successAction: successAction,
        cancelAction: cancelAction,
        actionText: "Save",
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
    edit: function(copyStagedThemeCustom) {
      stagedThemeCustom.position.index = JSON.parse(JSON.stringify(copyStagedThemeCustom.position.index));
      stagedThemeCustom.theme = JSON.parse(JSON.stringify(copyStagedThemeCustom.theme));
      var form = render.custom.form({
        useStagedTheme: true
      });
      var heading;
      if (helper.checkIfValidString(stagedThemeCustom.theme.name)) {
        heading = "Edit " + stagedThemeCustom.theme.name;
      } else {
        heading = "Edit unnamed theme";
      };
      var successAction = function() {
        mod.custom.edit();
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
        successAction: successAction,
        cancelAction: cancelAction,
        actionText: "Save",
        size: "small",
        content: form
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
      if (helper.checkIfValidString(stagedThemeCustom.theme.name)) {
        heading = "Remove " + stagedThemeCustom.theme.name;
      } else {
        heading = "Remove unnamed theme";
      };
      var successAction = function() {
        mod.custom.remove();
        data.save();
        custom.check();
        render.custom.clear();
        render.custom.all();
        shade.close();
        pagelock.unlock();
        stagedThemeCustom.reset();
        control.render.update.control.header();
        control.render.update.control.menu();
        control.render.class();
        control.render.dependents();
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
    clear: function() {
      var themeCustom = helper.e(".theme-custom");
      while (themeCustom.lastChild) {
        themeCustom.removeChild(themeCustom.lastChild);
      };
    },
    tabIndex: function() {
      if (state.get.current().theme.custom.edit && state.get.current().menu) {
        helper.eA(".theme-custom-control-item").forEach(function(arrayItem, index) {
          arrayItem.tabIndex = 1;
        });
      } else {
        helper.eA(".theme-custom-control-item").forEach(function(arrayItem, index) {
          arrayItem.tabIndex = -1;
        });
      };
    },
    formWrap: {
      open: function() {
        var themeCustom = helper.e(".theme-custom");
        helper.removeClass(themeCustom, "form-wrap-hide-space");
      },
      close: function() {
        var themeCustom = helper.e(".theme-custom");
        helper.addClass(themeCustom, "form-wrap-hide-space");
      }
    }
  };

  render.shade = {
    opacity: function() {
      var html = helper.e("html");
      html.style.setProperty("--theme-shade-opacity", state.get.current().theme.shade.opacity);
    }
  };

  render.themeMetaTag = function() {
    var head = helper.e("head");
    var metaThemeColor = helper.e(".meta-theme-color");
    if (metaThemeColor) {
      metaThemeColor.remove();
    };
    var meta = helper.node("meta|class:meta-theme-color,name:theme-color,content:" + helper.convertColor.rgb.hex(state.get.current().theme.color.generated.negative[10]));
    head.appendChild(meta);
  };

  var accent = {
    random: function() {
      mod.accent.random();
      render.accent.color();
    },
    cycle: function() {
      mod.accent.cycle();
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
    system: function() {
      mod.style.system();
      render.style.system();
    },
    check: function() {
      if (state.get.current().theme.style == "dark") {
        style.dark();
      } else if (state.get.current().theme.style == "light") {
        style.light();
      } else if (state.get.current().theme.style == "system") {
        style.system();
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

  var custom = {
    add: function() {
      render.custom.add();
    },
    edit: function() {
      render.custom.edit();
      render.custom.tabIndex();
    },
    check: function() {
      if (state.get.current().theme.custom.all.length > 0) {
        render.custom.formWrap.open();
      } else {
        mod.custom.close();
        render.custom.formWrap.close();
      };
    }
  };

  var init = function() {
    mod.color.generated();
    mod.accent.random();
    mod.custom.close();
    bind.accent.cycle.toggle();
    render.font.load.display();
    render.font.load.ui();
    render.font.display.name();
    render.font.display.weight();
    render.font.display.style();
    render.font.ui.name();
    render.font.ui.weight();
    render.font.ui.style();
    render.color.shade();
    render.accent.color();
    render.accent.preset();
    render.radius();
    render.shadow();
    render.shade.opacity();
    render.preset();
    render.custom.all();
    render.themeMetaTag();
    custom.check();
  };

  // exposed methods
  return {
    init: init,
    mod: mod,
    bind: bind,
    render: render,
    style: style,
    accent: accent,
    custom: custom
  };

})();
