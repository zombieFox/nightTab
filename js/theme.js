var theme = (function() {

  var graysLightToDark = [
    [38, 40, 49],
    [47, 51, 62],
    [57, 62, 75],
    [67, 73, 88],
    [77, 84, 101],
    [87, 95, 114],
    [97, 106, 127],
    [107, 117, 140],
    [117, 128, 153],
    [127, 139, 166],
    [137, 151, 180],
    [149, 162, 187],
    [162, 173, 195],
    [174, 184, 203],
    [187, 195, 211],
    [199, 206, 218],
    [212, 217, 226],
    [224, 228, 234],
    [237, 239, 242],
    [250, 250, 250]
  ];

  var modeNeutralText = {
    dark: [255, 255, 255],
    light: [0, 0, 0]
  }

  var render = function() {
    var _renderTheme = function() {
      var mode = {
        dark: function() {
          graysLightToDark.slice().forEach(function(item, index) {
            var index = index + 1;
            if (index < 10) {
              index = "0" + index;
            };
            html.style.setProperty("--gray-" + index, item[0] + ", " + item[1] + ", " + item[2]);
            html.style.setProperty("--mode-neutral-text", modeNeutralText.dark);
          });
        },
        light: function() {
          graysLightToDark.slice().reverse().forEach(function(item, index) {
            index = index + 1;
            if (index < 10) {
              index = "0" + index;
            };
            html.style.setProperty("--gray-" + index, item[0] + ", " + item[1] + ", " + item[2]);
            html.style.setProperty("--mode-neutral-text", modeNeutralText.light);
          });
        }
      };
      mode[state.get().layout.theme.mode]();
    };
    var _renderAccent = function() {
      var color = state.get().layout.theme.accent.current;
      html.style.setProperty("--accent", color.r + ", " + color.g + ", " + color.b);
    };
    var html = helper.e("html");
    _renderAccent();
    _renderTheme();
  };

  var random = function() {
    if (state.get().layout.theme.accent.random.active) {
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
      var hsl = color[state.get().layout.theme.accent.random.style]();
      var randomColor = helper.hslToRgb({
        h: hsl.h,
        s: (hsl.s / 100),
        l: (hsl.l / 100)
      });
      helper.setObject({
        object: state.get(),
        path: "layout.theme.accent.current",
        newValue: randomColor
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
