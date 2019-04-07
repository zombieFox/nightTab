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

  var edge = function(action) {
    var header = helper.e(".header");
    var container = helper.makeNode({
      tag: "div",
      attr: [{
        key: "class",
        value: "header-edge"
      }]
    });
    var state = {
      show: function() {
        header.appendChild(container);
      },
      hide: function() {
        header.removeChild(helper.e(".header-edge"));
      }
    };
    state[action]();
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
      if (state.get().background.image.show && (state.get().header.shade.show && state.get().header.shade.style == "always") || state.get().header.shade.style == "always" || state.get().header.shade.border.bottom.show) {
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
        } else if (state.get().header.shade.style == "scroll") {
          if (scrollPosition > (fontSize * 2)) {
            html.style.setProperty("--header-shade-color", "var(--gray-01)");
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
      html.style.setProperty("--header-shade-padding-multiplier-top", state.get().header.shade.padding.top);
      html.style.setProperty("--header-shade-padding-multiplier-bottom", state.get().header.shade.padding.bottom);
    };
    var _border = function() {
      html.style.setProperty("--header-border-width-multiplier-top", state.get().header.shade.border.top.width);
      html.style.setProperty("--header-border-width-multiplier-bottom", state.get().header.shade.border.bottom.width);
    };
    _color();
    _opacity();
    _padding();
    _border();
    _margin();
  };

  var init = function() {
    _bind();
    render();
  };

  // exposed methods
  return {
    edge: edge,
    render: render,
    init: init
  };

})();
