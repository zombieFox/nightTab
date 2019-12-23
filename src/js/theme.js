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

  var render = {};

  render.theme = function() {
    var html = helper.e("html");
    helper.removeClass(html, "is-theme-style-dark");
    helper.removeClass(html, "is-theme-style-light");
    helper.addClass(html, "is-theme-style-" + state.get.current().theme.style);
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
        helper.e(".control-theme-accent-current-quick").value = hex;
        helper.e(".control-theme-accent-current-picker").value = hex;
        helper.e(".control-theme-accent-current-hex").value = hex;
      };
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

  var toggle = function() {
    if (state.get.current().theme.style == "dark") {
      mod.style.light();
    } else if (state.get.current().theme.style == "light") {
      mod.style.dark();
    };
    render.theme();
  };

  var accent = function() {
    theme.render.accent.color();
  };

  var init = function() {
    render.theme();
    render.color.shade();
    render.accent.random();
    render.accent.color();
    render.radius();
  };

  // exposed methods
  return {
    init: init,
    mod: mod,
    render: render,
    toggle: toggle,
    accent: accent
  };

})();
