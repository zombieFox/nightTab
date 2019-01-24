var background = (function() {

  var render = function() {
    var html = helper.e("html");
    var background = helper.e(".background");
    var backgroundImage = helper.e(".background-image");
    if (state.get().background.image.active) {
      helper.removeClass(background, "is-hidden");
      html.style.setProperty("--background-image", "url(\"" + state.get().background.image.url + "\")");
      html.style.setProperty("--background-blur", state.get().background.image.blur + "px");
      html.style.setProperty("--background-grayscale", state.get().background.image.grayscale);
      html.style.setProperty("--background-opacity", state.get().background.image.opacity);
      html.style.setProperty("--background-accent-opacity", state.get().background.image.accentOpacity);
      if (state.get().background.image.blur > 0 && state.get().background.image.grayscale > 0) {
        backgroundImage.style.setProperty("filter", "blur(var(--background-blur)) grayscale(var(--background-grayscale))");
      } else if (state.get().background.image.blur > 0 && state.get().background.image.grayscale == 0) {
        backgroundImage.style.setProperty("filter", "blur(var(--background-blur))");
      } else if (state.get().background.image.blur == 0 && state.get().background.image.grayscale > 0) {
        backgroundImage.style.setProperty("filter", "grayscale(var(--background-grayscale))");
      };
    } else {
      helper.addClass(background, "is-hidden");
      html.style.setProperty("--background-image", "none");
      html.style.setProperty("--background-blur", "none");
      html.style.setProperty("--background-grayscale", "none");
      html.style.setProperty("--background-opacity", "none");
      html.style.setProperty("--background-accent-opacity", "none");
      backgroundImage.style.setProperty("filter", "none");
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
