var theme = (function() {

  var _update = function() {
    var controlTheme = helper.e(".control-theme");
    controlTheme.value = helper.rgbToHex(state.get().theme);
  };

  var render = function() {
    var html = helper.e("html");
    var color = state.get().theme;
    html.style.setProperty("--accent", color.r + ", " + color.g + ", " + color.b);
  };

  var init = function() {
    _update();
    render();
  };

  // exposed methods
  return {
    init: init,
    render: render
  };

})();
