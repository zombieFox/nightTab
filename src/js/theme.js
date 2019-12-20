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

      console.log(helper.convert.hsl.rgb([hsl[0], hsl[1], hsl[2]]));

      var sMod = 4;
      var lMod = 0;

      // helper.e(".menu-content").style.setProperty("background-color", "hsl(" + hsl[0] + "," + hsl[1] + "%," + hsl[2] + "%)");

      helper.e("html").style.setProperty("--theme-shade-neg-10", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 10)), 10), parseInt((hsl[2] - (sMod * 10)), 10)]
      ));

      helper.e("html").style.setProperty("--theme-shade-neg-09", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 9)), 10), parseInt((hsl[2] - (sMod * 9)), 10)]
      ));

      helper.e("html").style.setProperty("--theme-shade-neg-08", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 8)), 10), parseInt((hsl[2] - (sMod * 8)), 10)]
      ));

      helper.e("html").style.setProperty("--theme-shade-neg-07", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 7)), 10), parseInt((hsl[2] - (sMod * 7)), 10)]
      ));

      helper.e("html").style.setProperty("--theme-shade-neg-06", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 6)), 10), parseInt((hsl[2] - (sMod * 6)), 10)]
      ));

      helper.e("html").style.setProperty("--theme-shade-neg-05", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 5)), 10), parseInt((hsl[2] - (sMod * 5)), 10)]
      ));

      helper.e("html").style.setProperty("--theme-shade-neg-04", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 4)), 10), parseInt((hsl[2] - (sMod * 4)), 10)]
      ));

      helper.e("html").style.setProperty("--theme-shade-neg-03", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 3)), 10), parseInt((hsl[2] - (sMod * 3)), 10)]
      ));

      helper.e("html").style.setProperty("--theme-shade-neg-02", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 2)), 10), parseInt((hsl[2] - (sMod * 2)), 10)]
      ));

      helper.e("html").style.setProperty("--theme-shade-neg-01", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 1)), 10), parseInt((hsl[2] - (sMod * 1)), 10)]
      ));


      helper.e("html").style.setProperty("--theme-shade", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt(hsl[1], 10), parseInt(hsl[2], 10)]
      ));


      helper.e("html").style.setProperty("--theme-shade-pos-01", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 1)), 10), parseInt((hsl[2] + (sMod * 1)), 10)]
      ));

      helper.e("html").style.setProperty("--theme-shade-pos-02", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 2)), 10), parseInt((hsl[2] + (sMod * 2)), 10)]
      ));

      helper.e("html").style.setProperty("--theme-shade-pos-03", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 3)), 10), parseInt((hsl[2] + (sMod * 3)), 10)]
      ));

      helper.e("html").style.setProperty("--theme-shade-pos-04", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 4)), 10), parseInt((hsl[2] + (sMod * 4)), 10)]
      ));

      helper.e("html").style.setProperty("--theme-shade-pos-05", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 5)), 10), parseInt((hsl[2] + (sMod * 5)), 10)]
      ));

      helper.e("html").style.setProperty("--theme-shade-pos-06", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 6)), 10), parseInt((hsl[2] + (sMod * 6)), 10)]
      ));

      helper.e("html").style.setProperty("--theme-shade-pos-07", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 7)), 10), parseInt((hsl[2] + (sMod * 7)), 10)]
      ));

      helper.e("html").style.setProperty("--theme-shade-pos-08", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 8)), 10), parseInt((hsl[2] + (sMod * 8)), 10)]
      ));

      helper.e("html").style.setProperty("--theme-shade-pos-09", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 9)), 10), parseInt((hsl[2] + (sMod * 9)), 10)]
      ));

      helper.e("html").style.setProperty("--theme-shade-pos-10", helper.convert.hsl.rgb(
        [parseInt(hsl[0], 10), parseInt((hsl[1] - (lMod * 10)), 10), parseInt((hsl[2] + (sMod * 10)), 10)]
      ));


    },
    input: {
      quick: function() {
        helper.e(".control-theme-color-quick").value = helper.rgbToHex(state.get.current().theme.color);
      },
      picker: function() {
        helper.e(".control-theme-color-picker").value = helper.rgbToHex(state.get.current().theme.color);
      },
      hex: function() {
        helper.e(".control-theme-color-hex").value = helper.rgbToHex(state.get.current().theme.color);
      }
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
