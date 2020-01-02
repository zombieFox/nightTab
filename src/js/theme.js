var theme = (function() {

  var _timerFontDisplay = null;
  var _timerFontUi = null;
  var _customThemeName = null;
  var _customThemeEdit = false;

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
      var selectedPreset = mod.preset.get(name);
      helper.setObject({
        object: state.get.current(),
        path: "theme.style",
        newValue: selectedPreset.style
      });
      helper.setObject({
        object: state.get.current(),
        path: "theme.font",
        newValue: selectedPreset.font
      });
      helper.setObject({
        object: state.get.current(),
        path: "theme.color",
        newValue: selectedPreset.color
      });
      helper.setObject({
        object: state.get.current(),
        path: "theme.accent.current",
        newValue: selectedPreset.accent
      });
      helper.setObject({
        object: state.get.current(),
        path: "theme.radius",
        newValue: selectedPreset.radius
      });
    },
    get: function(name) {
      return JSON.parse(JSON.stringify(mod.preset.all[name]));
    },
    all: {
      nighttab: {
        font: {
          display: {
            name: "Fjalla One Regular",
            weight: 400,
            style: "normal"
          },
          ui: {
            name: "Open Sans",
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
        font: {
          display: {
            name: "Gugi",
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
            h: 222,
            s: 42,
            l: 46
          },
          rgb: {
            r: 68,
            g: 98,
            b: 168
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
      pym: {
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
          }
        },
        accent: {
          r: 0,
          g: 255,
          b: 170
        },
        radius: 0.1,
        style: "dark"
      },
      cruiser: {
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
      snowglow: {
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
      rumble: {
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
      sollight: {
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
      artdeco: {
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
      macaroon: {
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
      steel: {
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
      bubblegum: {
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
          }
        },
        accent: {
          r: 238,
          g: 238,
          b: 34
        },
        radius: 1.2,
        style: "dark"
      },
      elderbean: {
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
            h: 193,
            s: 47,
            l: 43
          },
          rgb: {
            r: 58,
            g: 140,
            b: 163
          }
        },
        accent: {
          r: 255,
          g: 160,
          b: 0
        },
        radius: 0.5,
        style: "dark"
      }
    }
  };

  mod.custom = {
    set: function(data) {
      helper.setObject({
        object: state.get.current(),
        path: "theme.style",
        newValue: data.style
      });
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
        path: "theme.accent.current",
        newValue: data.accent
      });
      helper.setObject({
        object: state.get.current(),
        path: "theme.radius",
        newValue: data.radius
      });
    },
    add: function(name) {
      var themeName;
      if (name == null) {
        themeName = "";
      } else {
        themeName = name;
      };
      var newTheme = {
        name: themeName,
        style: state.get.current().theme.style,
        font: state.get.current().theme.font,
        color: state.get.current().theme.color,
        accent: state.get.current().theme.accent.current,
        radius: state.get.current().theme.radius
      };
      state.get.current().theme.custom.push(newTheme);
    },
    remove: function() {

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
        var name = state.get.current().theme.font.display.name.trim().replace(/\s+/g, "+");
        var html = helper.e("html");
        var link = helper.e(".theme-font-display-name-link");
        if (link) {
          link.remove();
        };
        html.style.removeProperty("--theme-font-display-name");
        if (name != "") {
          var head = helper.e("head");
          var link = helper.makeNode({
            tag: "link",
            attr: [{
              key: "class",
              value: "theme-font-display-name-link"
            }, {
              key: "href",
              value: "https://fonts.googleapis.com/css?family=" + name + ":100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
            }, {
              key: "rel",
              value: "stylesheet"
            }]
          });
          head.appendChild(link);
          html.style.setProperty("--theme-font-display-name", "\"" + state.get.current().theme.font.display.name.trim().replace(/\s\s+/g, " ") + "\"" + ", \"Fjalla One Regular\", sans-serif");
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
        var name = state.get.current().theme.font.ui.name.trim().replace(/\s+/g, "+");
        var html = helper.e("html");
        var link = helper.eA(".theme-font-ui-name-link");
        if (link.length > 0) {
          link.forEach(function(arrayItem, item) {
            arrayItem.remove();
          });
          html.style.removeProperty("--theme-font-ui-name");
        };
        if (name != "") {
          var head = helper.e("head");
          var link = helper.makeNode({
            tag: "link",
            attr: [{
              key: "class",
              value: "theme-font-ui-name-link"
            }, {
              key: "href",
              value: "https://fonts.googleapis.com/css?family=" + name + ":100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
            }, {
              key: "rel",
              value: "stylesheet"
            }]
          });
          head.appendChild(link);
          html.style.setProperty("--theme-font-ui-name", "\"" + state.get.current().theme.font.ui.name.trim().replace(/\s\s+/g, " ") + "\"" + ", \"Open Sans\", sans-serif");
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

  render.preset = function() {
    var html = helper.e("html");
    for (var key in mod.preset.all) {
      var preset = mod.preset.all[key];
      var shadeSteps = 4;
      var lightShift = 12;
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
      var rgb = preset.color.rgb;
      var hsl = helper.convertColor.rgb.hsl(rgb);
      for (var i = 1; i <= shadeSteps; i++) {
        if (i > 1) {
          if (preset.style == "dark") {
            rgb = helper.convertColor.hsl.rgb({
              h: hsl.h,
              s: hsl.s,
              l: hsl.l - (lightShift * (i - 1))
            });
          } else if (preset.style == "light") {
            rgb = helper.convertColor.hsl.rgb({
              h: hsl.h,
              s: hsl.s,
              l: hsl.l + (lightShift * (i - 1))
            });
          };
        };
        renderPreview("--theme-preset-background-" + key + "-", i, rgb);
      };
      html.style.setProperty("--theme-preset-accent-" + key, preset.accent.r + ", " + preset.accent.g + ", " + preset.accent.b);
      // if (preset.font.display != "") {
      //   html.style.setProperty("--theme-preset-font-display-" + key, "\"" + preset.font.display.name + "\", sans-serif");
      // };
      // if (preset.font.ui != "") {
      //   html.style.setProperty("--theme-preset-font-ui-" + key, "\"" + preset.font.ui.name + "\", sans-serif");
      // };
      // if (preset.style == "dark") {
      //   html.style.setProperty("--theme-preset-font-color-" + key, "var(--theme-white)");
      // } else if (preset.style == "light") {
      //   html.style.setProperty("--theme-preset-font-color-" + key, "var(--theme-black)");
      // };
    };
  };

  render.custom = {
    all: function() {
      var themeCustomSaved = helper.e(".theme-custom-saved");
      var customThemes = state.get.current().theme.custom;
      var formInline = helper.node("div|class:form-inline")
      customThemes.forEach(function(arrayItem, index) {
        var themeCustom = helper.node("div|class:theme-custom");
        var buttonWrap = helper.node("div|class:button-wrap")
        var themeCustomButton = helper.node("button|class:theme-custom-button button mb-0,tabindex:-1");
        var themeCustomPreview = helper.node("span|class:theme-custom-preview");
        var themeCustomBackground01 = helper.node("span|class:theme-custom-background-01");
        var themeCustomBackground02 = helper.node("span|class:theme-custom-background-02");
        var themeCustomBackground03 = helper.node("span|class:theme-custom-background-03");
        var themeCustomBackground04 = helper.node("span|class:theme-custom-background-04");
        var themeCustomAccent = helper.node("span|class:theme-custom-accent");
        var themeCustomName = helper.node("span:" + arrayItem.name + "|class:theme-custom-name");
        var themeCustomRemoveButton = helper.node("button|class:theme-custom-remove-button button mb-0,tabindex:-1");
        var themeCustomRemoveButtonIcon = helper.node("spa|class:button-icon icon-close");


        var colors = [];
        var shadeSteps = 4;
        var lightShift = 12;
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
          colors.push([rgb.r, rgb.g, rgb.b]);
        };
        var rgb = arrayItem.color.rgb;
        var hsl = helper.convertColor.rgb.hsl(rgb);
        for (var i = 1; i <= shadeSteps; i++) {
          if (i > 1) {
            if (arrayItem.style == "dark") {
              rgb = helper.convertColor.hsl.rgb({
                h: hsl.h,
                s: hsl.s,
                l: hsl.l - (lightShift * (i - 1))
              });
            } else if (arrayItem.style == "light") {
              rgb = helper.convertColor.hsl.rgb({
                h: hsl.h,
                s: hsl.s,
                l: hsl.l + (lightShift * (i - 1))
              });
            };
          };
          renderPreview("--theme-preset-background-" + "-", i, rgb);
        };

        themeCustomBackground01.style.setProperty("background-color", "rgb(" + colors[0][0] + ", " + colors[0][1] + ", " + colors[0][2] + ")");
        themeCustomBackground02.style.setProperty("background-color", "rgb(" + colors[1][0] + ", " + colors[1][1] + ", " + colors[1][2] + ")");
        themeCustomBackground03.style.setProperty("background-color", "rgb(" + colors[2][0] + ", " + colors[2][1] + ", " + colors[2][2] + ")");
        themeCustomBackground04.style.setProperty("background-color", "rgb(" + colors[3][0] + ", " + colors[3][1] + ", " + colors[3][2] + ")");
        themeCustomAccent.style.setProperty("background-color", "rgb(" + arrayItem.accent.r + ", " + arrayItem.accent.g + ", " + arrayItem.accent.b + ")");

        themeCustomPreview.appendChild(themeCustomBackground01);
        themeCustomPreview.appendChild(themeCustomBackground02);
        themeCustomPreview.appendChild(themeCustomBackground03);
        themeCustomPreview.appendChild(themeCustomBackground04);
        themeCustomPreview.appendChild(themeCustomAccent);
        themeCustomPreview.appendChild(themeCustomName);
        themeCustomButton.appendChild(themeCustomPreview);
        themeCustomRemoveButton.appendChild(themeCustomRemoveButtonIcon);
        themeCustom.appendChild(themeCustomButton);
        themeCustom.appendChild(themeCustomRemoveButton);
        buttonWrap.appendChild(themeCustom);
        formInline.appendChild(buttonWrap);



        themeCustomButton.addEventListener("click", function() {
          mod.custom.set(JSON.parse(JSON.stringify(arrayItem)));
          render.font.display.name();
          render.font.display.weight();
          render.font.display.style();
          render.font.ui.name();
          render.font.ui.weight();
          render.font.ui.style();
          style.check();
          render.color.shade();
          render.accent.color();
          render.radius();
          link.groupAndItems();
          control.render.update();
          control.render.class();
          data.save();
        }, false);

      });
      themeCustomSaved.appendChild(formInline);
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
          _customThemeName = this.value;
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
        mod.custom.add(_customThemeName);
        render.custom.clear();
        render.custom.all();
        shade.close();
        pagelock.unlock();
        _customThemeName = null;
      };
      var cancelAction = function() {
        shade.close();
        pagelock.unlock();
        _customThemeName = null;
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
          _customThemeName = null;
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
      var themeCustom = helper.e(".theme-custom-saved");
      while (themeCustom.lastChild) {
        themeCustom.removeChild(themeCustom.lastChild);
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
