var theme = (function() {

  var state = {
    r: 255,
    g: 170,
    b: 51,
  };

  var get = function() {
    return state;
  };

  var bind = function() {
    var themeAccent = helper.e(".theme-input");
    themeAccent.addEventListener("change", function() {
      _updateAcent(this);
      render();
      data.save();
    });
  };

  var _updateAcent = function(input) {
    state = helper.hexToRgb(input.value);
  };

  var _updateInput = function() {
    var themeAccent = helper.e(".theme-input");
    themeAccent.value = helper.rgbToHex(state);
  };

  var render = function() {
    var html = helper.e("html");
    html.style.setProperty("--accent", state.r + ", " + state.g + ", " + state.b);
  };

  var restore = function(object) {
    if (object) {
      state = object;
    };
  };

  var init = function() {
    bind();
    _updateInput();
    render();
  };

  // exposed methods
  return {
    init: init,
    get: get,
    restore: restore,
    render: render
  };

})();
