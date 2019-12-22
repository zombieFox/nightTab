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
      var hsl = helper.convert.rgb.hsl([state.get.current().theme.color.rgb.r, state.get.current().theme.color.rgb.g, state.get.current().theme.color.rgb.b]);
      state.get.current().theme.color.hsl.h = parseInt(hsl[0], 10);
      state.get.current().theme.color.hsl.s = parseInt(hsl[1], 10);
      state.get.current().theme.color.hsl.l = parseInt(hsl[2], 10);
    },
    rgb: function() {
      var rgb = helper.convert.hsl.rgb([state.get.current().theme.color.hsl.h, state.get.current().theme.color.hsl.s, state.get.current().theme.color.hsl.l]);
      state.get.current().theme.color.rgb.r = parseInt(rgb[0], 10);
      state.get.current().theme.color.rgb.g = parseInt(rgb[1], 10);
      state.get.current().theme.color.rgb.b = parseInt(rgb[2], 10);
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
        var hsl = color[state.get.current().theme.accent.random.style]();
        var randomColor = helper.hslToRgb({
          h: hsl.h,
          s: (hsl.s / 100),
          l: (hsl.l / 100)
        });
        helper.setObject({
          object: state.get.current(),
          path: "theme.accent.current",
          newValue: randomColor
        });
        helper.e(".control-theme-accent-current-quick").value = helper.rgbToHex(randomColor);
        helper.e(".control-theme-accent-current-picker").value = helper.rgbToHex(randomColor);
        helper.e(".control-theme-accent-current-hex").value = helper.rgbToHex(randomColor);
      };
    },
    input: {
      quick: function() {
        helper.e(".control-theme-accent-current-quick").value = helper.rgbToHex(state.get.current().theme.accent.current);
      },
      picker: function() {
        helper.e(".control-theme-accent-current-picker").value = helper.rgbToHex(state.get.current().theme.accent.current);
      },
      hex: function() {
        helper.e(".control-theme-accent-current-hex").value = helper.rgbToHex(state.get.current().theme.accent.current);
      }
    }
  };

  render.color = {
    shade: function() {

      var shadeSteps = 10;
      var sMod = 0;
      var lMod = 4;
      var html = helper.e("html");

      var hsl = helper.convert.rgb.hsl([state.get.current().theme.color.rgb.r, state.get.current().theme.color.rgb.g, state.get.current().theme.color.rgb.b]);

      // base color
      html.style.setProperty("--theme-shade", state.get.current().theme.color.rgb.r + ", " + state.get.current().theme.color.rgb.g + ", " + state.get.current().theme.color.rgb.b);

      for (var i = 1; i <= shadeSteps; i++) {
        var h = hsl[0];
        var s = (hsl[1] - (sMod * i));
        var l = (hsl[2] - (lMod * i));
        var rgb = helper.convert.hsl.rgb([h, s, l]);
        var number;
        if (i < 10) {
          number = "0" + i;
        } else {
          number = i
        };
        html.style.setProperty("--theme-shade-neg-" + number, parseInt(rgb[0], 10) + ", " + parseInt(rgb[1], 10) + ", " + parseInt(rgb[2], 10));
      };

      for (var i = 1; i <= shadeSteps; i++) {
        var h = hsl[0];
        var s = (hsl[1] + (sMod * i));
        var l = (hsl[2] + (lMod * i));
        var rgb = helper.convert.hsl.rgb([h, s, l]);
        var number;
        if (i < 10) {
          number = "0" + i;
        } else {
          number = i
        };
        html.style.setProperty("--theme-shade-pos-" + number, parseInt(rgb[0], 10) + ", " + parseInt(rgb[1], 10) + ", " + parseInt(rgb[2], 10));
      };

    },
    input: {
      picker: function() {
        helper.e(".control-theme-color-rgb-picker").value = helper.rgbToHex(state.get.current().theme.color.rgb);
      },
      hex: function() {
        helper.e(".control-theme-color-rgb-hex").value = helper.rgbToHex(state.get.current().theme.color.rgb);
      }
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
