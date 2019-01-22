var background = (function() {

  var render = function() {
    var html = helper.e("html");
    var background = helper.e(".background");
    if (state.get().background.image.active) {
      helper.removeClass(background, "is-hidden");
      if (state.get().background.image.url != "") {
        html.style.setProperty("--background-image", "url(\"" + state.get().background.image.url + "\")");
      } else {
        html.style.setProperty("--background-image", "none");
      };
      if (state.get().background.image.blur > 0) {
        html.style.setProperty("--background-blur", state.get().background.image.blur + "px");
      } else {
        html.style.setProperty("--background-blur", "none");
      };
      if (state.get().background.image.grayscale > 0) {
        html.style.setProperty("--background-grayscale", state.get().background.image.grayscale);
      } else {
        html.style.setProperty("--background-grayscale", "none");
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
    } else {
      helper.addClass(background, "is-hidden");
      html.style.setProperty("--background-image", "none");
      html.style.setProperty("--background-blur", "none");
      html.style.setProperty("--background-grayscale", "none");
      html.style.setProperty("--background-opacity", "none");
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
