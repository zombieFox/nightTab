var accent = (function() {

  var render = function() {
    var html = helper.e("html");
    var color = state.get().theme.accent.current;
    html.style.setProperty("--theme-accent", color.r + ", " + color.g + ", " + color.b);
  };

  var random = function() {
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
  };

  var init = function() {
    random();
    render();
  };

  // exposed methods
  return {
    init: init,
    render: render,
    random: random
  };

})();
