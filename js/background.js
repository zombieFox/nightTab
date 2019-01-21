var background = (function() {

  var render = function() {
    var html = helper.e("html");
    if (state.get().background.image.active && state.get().background.image.url != "") {
        html.style.setProperty("--background-image", "url(\"" + state.get().background.image.url + "\")");
        html.style.setProperty("--background-opacity", state.get().background.image.opacity);
        html.style.setProperty("--background-blur", state.get().background.image.blur + "px");
        html.style.setProperty("--background-accent-opacity", state.get().background.image.accentOpacity);
    } else {
      html.style.setProperty("--background-image", "none");
      html.style.setProperty("--background-opacity", 1);
      html.style.setProperty("--background-blur", 0);
      html.style.setProperty("--background-accent-opacity", 0);
    };
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
