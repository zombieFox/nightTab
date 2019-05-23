var layout = (function() {

  var render = function() {
    var html = helper.e("html");
    html.style.setProperty("--layout-width", helper.getObject({
      object: state.get(),
      path: "layout.width"
    }) + "%");
  };

  var init = function() {
    render();
  };

  // exposed methods
  return {
    render: render,
    init: init
  };

})();
