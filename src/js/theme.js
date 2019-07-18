var theme = (function() {

  var mod = {};

  mod.theme = {
    light: function() {
      helper.setObject({
        object: state.get(),
        path: "theme.style",
        newValue: "light"
      });
    },
    dark: function() {
      helper.setObject({
        object: state.get(),
        path: "theme.style",
        newValue: "dark"
      });
    },
    toggle: function() {
      if (state.get().theme.style == "dark") {
        mod.theme.light();
      } else if (state.get().theme.style == "light") {
        mod.theme.dark();
      };
    }
  };

  var render = {};

  render.theme = function() {
    var html = helper.e("html");
    helper.removeClass(html, "is-theme-style-dark");
    helper.removeClass(html, "is-theme-style-light");
    helper.addClass(html, "is-theme-style-" + state.get().theme.style);
  };

  render.radius = function() {
    var html = helper.e("html");
    html.style.setProperty("--theme-radius", state.get().theme.radius + "rem");
  };

  render.accent = {
    color: function() {
      var html = helper.e("html");
      var color = state.get().theme.accent.current;
      html.style.setProperty("--theme-accent", color.r + ", " + color.g + ", " + color.b);
    },
    random: function() {
      if (state.get().theme.accent.random.active) {
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
        var hsl = color[state.get().theme.accent.random.style]();
        var randomColor = helper.hslToRgb({
          h: hsl.h,
          s: (hsl.s / 100),
          l: (hsl.l / 100)
        });
        helper.setObject({
          object: state.get(),
          path: "theme.accent.current",
          newValue: randomColor
        });
        helper.e(".control-theme-accent-current").value = helper.rgbToHex(randomColor);
      };
    }
  };

  var toggle = function() {
    mod.theme.toggle();
    render.theme();
  };

  var accent = function() {
    theme.render.accent.color();
    link.render.clear();
    link.render.item.all();
    sortable(".link-area");
  };

  var init = function() {
    render.theme();
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
