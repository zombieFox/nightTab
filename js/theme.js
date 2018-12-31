var theme = (function() {

  var _updateInput = function() {
    var controlTheme = helper.e(".control-theme");
    controlTheme.value = helper.rgbToHex(state.get().theme);
  };

  var render = function() {
    var html = helper.e("html");
    var color = state.get().theme;
    html.style.setProperty("--accent", color.r + ", " + color.g + ", " + color.b);
  };

  var init = function() {
    _updateInput();
    render();
  };

  // exposed methods
  return {
    init: init,
    render: render
  };

})();
