var header = (function() {

  var _bind = function() {
    window.addEventListener("resize", function() {
      render();
    }, false);
    window.addEventListener("scroll", function() {
      render();
    }, false);
    helper.eA(".container").forEach(function(arrayItem, index) {
      arrayItem.addEventListener("transitionend", function() {
        render();
      }, false);
    });
  };

  var render = function() {
    var html = helper.e("html");
    var header = helper.e(".header");
    var link = helper.e(".link");
    var fontSize = parseInt(getComputedStyle(html).fontSize, 10);
    var scrollPosition = document.documentElement.scrollTop;
    var _margin = function() {
      var height = parseInt(getComputedStyle(header).height, 10);
      var marginValue;
      if (state.get().background.image.show && (state.get().header.shade.show && state.get().header.shade.style == "always") || state.get().header.shade.style == "always" || state.get().header.shade.border.bottom) {
        marginValue = (height + fontSize);
      } else {
        marginValue = height;
      };
      html.style.setProperty("--header-height", marginValue + "px");
    };
    var _color = function() {
      if (state.get().header.shade.show) {
        if (state.get().header.shade.style == "always") {
          html.style.setProperty("--header-shade-color", "var(--gray-01)");
          html.style.setProperty("--header-shade-color", "var(--gray-20)");
        } else if (state.get().header.shade.style == "scroll") {
          if (scrollPosition > (fontSize * 2)) {
            html.style.setProperty("--header-shade-color", "var(--gray-01)");
            html.style.setProperty("--header-shade-color", "var(--gray-20)");
          } else {
            html.style.setProperty("--header-shade-color", "transparent");
          };
        } else {
          html.style.setProperty("--header-shade-color", "transparent");
        };
      } else {
        html.style.setProperty("--header-shade-color", "transparent");
      };
    };
    var _opacity = function() {
      if (state.get().header.shade.show) {
        html.style.setProperty("--header-shade-opacity", state.get().header.shade.opacity);
      };
    };
    var _padding = function() {
      html.style.setProperty("--header-shade-padding", state.get().header.shade.padding);
    };
    _color();
    _opacity();
    _padding();
    _margin();
  };

  var init = function() {
    _bind();
    render();
  };

  // exposed methods
  return {
    init: init,
    render: render
  };

})();
