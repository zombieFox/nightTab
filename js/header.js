var header = (function() {

  var _bind = function() {
    window.addEventListener("resize", function() {
      render.shade();
    }, false);
    window.addEventListener("scroll", function() {
      render.shade();
    }, false);
    helper.eA(".container").forEach(function(arrayItem, index) {
      arrayItem.addEventListener("transitionend", function() {
        render.shade();
      }, false);
    });
    document.fonts.ready.then(function() {
      render.shade();
    });
  };

  var render = {
    width: {
      set: function() {
        _width();
      },
      match: function() {
        _match();
      }
    },
    shade: function() {
      _shade();
    },
    opacity: function() {
      _opacity();
    },
    padding: function() {
      _padding();
    },
    border: function() {
      _border();
    },
    search: function() {
      _search();
    }
  };

  var _width = function() {
    var html = helper.e("html");
    html.style.setProperty("--header-area-width", state.get().header.area.width + "%");
  };

  var _match = function() {
    helper.setObject({
      object: state.get(),
      path: "header.area.width",
      newValue: state.get().link.area.width
    });
    render.width.set();
  };

  var _shade = function() {
    var html = helper.e("html");
    var fontSize = parseInt(getComputedStyle(html).fontSize, 10);
    var scrollPosition = document.documentElement.scrollTop;
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
    var html = helper.e("html");
    if (state.get().header.shade.show) {
      html.style.setProperty("--header-shade-opacity", state.get().header.shade.opacity);
    };
  };

  var _padding = function() {
    var html = helper.e("html");
    html.style.setProperty("--header-shade-padding-multiplier-top", state.get().header.shade.padding.top);
    html.style.setProperty("--header-shade-padding-multiplier-bottom", state.get().header.shade.padding.bottom);
  };

  var _border = function() {
    var html = helper.e("html");
    html.style.setProperty("--header-border-width-multiplier-top", state.get().header.shade.border.top.width);
    html.style.setProperty("--header-border-width-multiplier-bottom", state.get().header.shade.border.bottom.width);
  };

  var _search = function() {
    var html = helper.e("html");
    if (state.get().header.search.show && state.get().header.search.width.style === "custom") {
      html.style.setProperty("--header-search-width", state.get().header.search.width.custom + "%");
    } else {
      html.style.removeProperty("--header-search-width");
    };
  };

  var init = function() {
    _bind();
    render.width.set();
    render.search();
    render.shade();
    render.opacity();
    render.padding();
    render.border();
  };

  // exposed methods
  return {
    render: render,
    init: init
  };

})();
