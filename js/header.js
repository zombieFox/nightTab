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

  var setSizeDefault = function(pathCurrent, pathDefault) {
    helper.setObject({
      object: state.get(),
      path: pathCurrent,
      newValue: helper.getObject({
        object: state.get(),
        path: pathDefault
      })
    });
  };

  var render = {
    width: function() {
      _renderWidth();
    },
    shade: function() {
      _renderShade();
    },
    opacity: function() {
      _renderOpacity();
    },
    padding: function() {
      _renderPadding();
    },
    border: function() {
      _renderBorder();
    },
    search: function() {
      _renderSearch();
    },
    greeting: {
      size: function() {
        _renderGreetingSize();
      }
    }
  };

  var _renderWidth = function() {
    var html = helper.e("html");
    html.style.setProperty("--header-area-width", state.get().header.area.width + "%");
  };

  var _renderShade = function() {
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

  var _renderOpacity = function() {
    var html = helper.e("html");
    if (state.get().header.shade.show) {
      html.style.setProperty("--header-shade-opacity", state.get().header.shade.opacity);
    };
  };

  var _renderPadding = function() {
    var html = helper.e("html");
    html.style.setProperty("--header-padding-top-multiplier", state.get().header.padding.top);
    html.style.setProperty("--header-padding-bottom-multiplier", state.get().header.padding.bottom);
  };

  var _renderBorder = function() {
    var html = helper.e("html");
    html.style.setProperty("--header-border-width-top-multiplier", state.get().header.border.top.width);
    html.style.setProperty("--header-border-width-bottom-multiplier", state.get().header.border.bottom.width);
  };

  var _renderSearch = function() {
    var html = helper.e("html");
    if (state.get().header.search.show && state.get().header.search.width.style === "custom") {
      html.style.setProperty("--header-search-width", state.get().header.search.width.custom + "%");
    } else {
      html.style.removeProperty("--header-search-width");
    };
  };

  var _renderGreetingSize = function() {
    var html = helper.e("html");
    html.style.setProperty("--header-greeting-size", state.get().header.greeting.size + "em");
  };

  var init = function() {
    _bind();
    render.width();
    render.search();
    render.shade();
    render.opacity();
    render.padding();
    render.border();
    render.greeting.size();
  };

  // exposed methods
  return {
    setSizeDefault: setSizeDefault,
    render: render,
    init: init
  };

})();
