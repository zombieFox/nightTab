var theme = (function() {

  var render = function() {
    var html = helper.e("html");
    var color = state.get().layout.theme.current;
    html.style.setProperty("--accent", color.r + ", " + color.g + ", " + color.b);
  };

  var random = function() {
    if (state.get().layout.theme.random) {
      var randomVal = function(min, max) {
        return Math.floor(Math.random() * (max - min) + 1) + min;
      };
      var color = {
        light: function() {
          return {
            h: randomVal(0, 360),
            s: randomVal(50, 100),
            l: randomVal(50, 90)
          };
        },
        dark: function() {
          return {
            h: randomVal(0, 360),
            s: randomVal(0, 50),
            l: randomVal(0, 40)
          };
        }
      };
      var hsl = color.light();
      var randomColor = helper.hslToRgb({
        h: hsl.h,
        s: (hsl.s / 100),
        l: (hsl.l / 100)
      });
      state.change({
        path: "layout.theme.current",
        value: randomColor
      });
    };
  };

  var init = function() {
    random();
    render();
  };

  // exposed methods
  return {
    init: init,
    random: random,
    render: render
  };

})();
