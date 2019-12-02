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

  render.order = function() {
    var html = helper.e("html");
    var layout = helper.e(".layout");
    var header = helper.e(".header");
    var link = helper.e(".link");
    if (state.get.current().layout.order == "headerlink") {
      layout.insertBefore(header, link);
    } else if (state.get.current().layout.order == "linkheader") {
      layout.insertBefore(link, header);
    };
  };

  render.title = function() {
    var title = helper.e("title");
    title.textContent = state.get.current().layout.title;
  };

  var init = function() {
    render.width();
    render.padding();
    render.gutter();
    render.size();
    render.order();
    render.title();
  };

  // exposed methods
  return {
    render: render,
    init: init
  };

})();
