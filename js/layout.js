var layout = (function() {

  var _timer = null;

  var render = function() {
    var html = helper.e("html");
    html.style.setProperty("--layout-width", helper.getObject({
      object: state.get(),
      path: "layout.width"
    }) + "%");
  };

  var edge = function(type) {
    var html = helper.e("html");
    var action = {
      show: function() {
        helper.addClass(html, "is-layout-edge");
      },
      hide: function() {
        helper.removeClass(html, "is-layout-edge");
      },
      flash: function() {
        helper.addClass(html, "is-layout-edge");
        clearTimeout(_timer);
        _timer = setTimeout(edge, 500, "hide");
      }
    };
    action[type]();
  };

  var init = function() {
    render();
  };

  // exposed methods
  return {
    edge: edge,
    render: render,
    init: init
  };

})();
