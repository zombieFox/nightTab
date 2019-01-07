var theme = (function() {

  var render = function() {
    var html = helper.e("html");
    var color = state.get().layout.theme.current;
    html.style.setProperty("--accent", color.r + ", " + color.g + ", " + color.b);
  };

  var random = function() {
    if (state.get().layout.theme.random) {
      var randomColor = {
        r: helper.randomNumber(0, 255),
        g: helper.randomNumber(0, 255),
        b: helper.randomNumber(0, 255)
      };
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
