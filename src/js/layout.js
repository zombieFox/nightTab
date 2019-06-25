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
    },
    order: function() {
      _renderOrder();
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

  var _renderOrder = function() {
    var html = helper.e("html");
    var layout = helper.e(".layout");
    var header = helper.e(".header");
    var link = helper.e(".link");
    if (state.get().layout.order == "headerLink") {
      layout.insertBefore(header, link);
    } else if (state.get().layout.order == "linkHeader") {
      layout.insertBefore(link, header);
    };
  };

  var init = function() {
    render.width();
    render.padding();
    render.gutter();
    render.order();
  };

  // exposed methods
  return {
    render: render,
    init: init
  };

})();
