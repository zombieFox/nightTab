var background = (function() {

  var render = function() {
    console.log(state.get().background.image.blur);
    var html = helper.e("html");
    if (state.get().background.image.active && state.get().background.image.url != "") {
      html.style.setProperty("--background-image", "url(\"" + state.get().background.image.url + "\")");
    } else {
      html.style.setProperty("--background-image", "none");
    };
    if (state.get().background.image.blur > 0) {
      html.style.setProperty("--background-blur", state.get().background.image.blur + "px");
    } else {
      html.style.setProperty("--background-blur", "none");
    };
    if (state.get().background.image.opacity < 1) {
      html.style.setProperty("--background-opacity", state.get().background.image.opacity);
    } else {
      html.style.setProperty("--background-opacity", "none");
    };
    if (state.get().background.image.accentOpacity > 0) {
      html.style.setProperty("--background-accent-opacity", state.get().background.image.accentOpacity);
    } else {
      html.style.setProperty("--background-accent-opacity", "none");
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
