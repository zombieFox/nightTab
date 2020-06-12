var layout = (function() {

  var render = {};

  render.width = function() {
    var html = helper.e("html");
    html.style.setProperty("--layout-width", state.get.current().layout.width + "%");
  };

  render.padding = function() {
    var html = helper.e("html");
    html.style.setProperty("--layout-padding", state.get.current().layout.padding);
  };

  render.gutter = function() {
    var html = helper.e("html");
    html.style.setProperty("--layout-gutter", state.get.current().layout.gutter);
  };

  render.size = function() {
    var html = helper.e("html");
    html.style.setProperty("--layout-size", state.get.current().layout.size);
  };

  render.title = function() {
    var title = helper.e("title");
    if (helper.checkValueString(state.get.current().layout.title)) {
      title.textContent = helper.trimString(state.get.current().layout.title);
    } else {
      title.textContent = "New tab";
    };
  };

  var init = function() {
    render.width();
    render.padding();
    render.gutter();
    render.size();
    render.title();
  };

  // exposed methods
  return {
    render: render,
    init: init
  };

})();
