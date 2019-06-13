var layout = (function() {

  var render = {
    width: function() {
      _renderWidth();
    },
    padding: function() {
      _renderPadding();
    },
    gutter: function() {
      _renderGutter();
    }
  };

  var _renderWidth = function() {
    var html = helper.e("html");
    html.style.setProperty("--layout-width", state.get().layout.width + "%");
  };

  var _renderPadding = function() {
    var html = helper.e("html");
    html.style.setProperty("--layout-padding-multiplier", state.get().layout.padding);
  };

  var _renderGutter = function() {
    var html = helper.e("html");
    html.style.setProperty("--layout-gutter-multiplier", state.get().layout.gutter);
  };

  var init = function() {
    render.width();
    render.padding();
    render.gutter();
  };

  // exposed methods
  return {
    render: render,
    init: init
  };

})();
