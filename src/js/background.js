var background = (function() {

  var render = function() {
    var html = helper.e("html");
    html.style.setProperty("--background-image", "url(\"" + state.get().background.image.url + "\")");
    html.style.setProperty("--background-blur", state.get().background.image.blur + "px");
    html.style.setProperty("--background-grayscale", state.get().background.image.grayscale);
    html.style.setProperty("--background-opacity", state.get().background.image.opacity);
    html.style.setProperty("--background-scale", state.get().background.image.scale);
    html.style.setProperty("--background-accent-opacity", state.get().background.image.accent);
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
