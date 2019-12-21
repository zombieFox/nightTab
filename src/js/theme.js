var theme = (function() {

  var mod = {};

  mod.theme = {
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
    toggle: function() {
      if (state.get.current().theme.style == "dark") {
        mod.theme.light();
      } else if (state.get.current().theme.style == "light") {
        mod.theme.dark();
      };
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
    spread: function() {

      var hsl = helper.convert.rgb.hsl([state.get.current().theme.color.r, state.get.current().theme.color.g, state.get.current().theme.color.b]);
      var shadeSteps = 10;
      var sMod = 0;
      var lMod = 4;
      var html = helper.e("html");

      var rgb = helper.convert.hsl.rgb(hsl);
      // console.log(parseInt(rgb[0], 10) + ", " +  parseInt(rgb[1], 10) + ", " + parseInt(rgb[2], 10));
      // base color
      html.style.setProperty("--theme-shade", parseInt(rgb[0], 10) + ", " +  parseInt(rgb[1], 10) + ", " + parseInt(rgb[2], 10));

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
        // console.log(parseInt(rgb[0], 10) + ", " + parseInt(rgb[1], 10) + ", " + parseInt(rgb[2], 10));
        // dark shades
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
        // light shades
        // console.log(parseInt(rgb[0], 10) + ", " + parseInt(rgb[1], 10) + ", " + parseInt(rgb[2], 10));
        html.style.setProperty("--theme-shade-pos-" + number, parseInt(rgb[0], 10) + ", " + parseInt(rgb[1], 10) + ", " + parseInt(rgb[2], 10));
      };

    },
    input: {
      picker: function() {
        helper.e(".control-theme-color-picker").value = helper.rgbToHex(state.get.current().theme.color);
      },
      hex: function() {
        helper.e(".control-theme-color-hex").value = helper.rgbToHex(state.get.current().theme.color);
      }
    },
    range: function() {
      helper.e(".control-theme-color-r").value = state.get.current().theme.color.r;
      helper.e(".control-theme-color-g").value = state.get.current().theme.color.g;
      helper.e(".control-theme-color-b").value = state.get.current().theme.color.b;
      helper.e(".control-theme-color-r-count").textContent = state.get.current().theme.color.r;
      helper.e(".control-theme-color-g-count").textContent = state.get.current().theme.color.g;
      helper.e(".control-theme-color-b-count").textContent = state.get.current().theme.color.b;
    }
  };

  var toggle = function() {
    mod.theme.toggle();
    render.theme();
  };

  var accent = function() {
    theme.render.accent.color();
  };

  var init = function() {
    render.theme();
    render.color.spread();
    render.accent.random();
    render.accent.color();
    render.radius();
  };

  // exposed methods
  return {
    init: init,
    render: render,
    toggle: toggle,
    accent: accent
  };

})();
