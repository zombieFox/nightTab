var theme = (function() {

  var accent = {
    r: 255,
    g: 170,
    b: 51,
  };

  var get = function() {
    return accent;
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
    accent = helper.hexToRgb(input.value);
  };

  var _updateInput = function() {
    var themeAccent = helper.e(".theme-input");
    themeAccent.value = helper.rgbToHex(accent);
  };

  var render = function(input) {
    var html = helper.e("html");
    html.style.setProperty("--accent", accent.r + ", " + accent.g + ", " + accent.b);
  };

  var restore = function(object) {
    if (object) {
      accent = object;
      _updateInput();
      render();
    };
  };

  var init = function() {
    bind();
  };

  // exposed methods
  return {
    init: init,
    get: get,
    restore: restore,
    render: render
  };

})();
