var theme = (function() {

  var render = function() {
    var html = helper.e("html");
    var color = state.get().layout.theme;
    html.style.setProperty("--accent", color.r + ", " + color.g + ", " + color.b);
  };

  var init = function() {
    render();
  };

  // exposed methods
  return {
    init: init,
    render: render
  };

})();
