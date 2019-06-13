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
    area: {
      width: function() {
        _renderWidth();
      }
    },
    shade: function() {
      _renderShade();
    },
    opacity: function() {
      _renderOpacity();
    },
    border: function() {
      _renderBorder();
    },
    search: {
      width: function() {
        _renderSearchWidth();
      },
      size: function() {
        _renderSearchSize();
      }
    },
    greeting: {
      size: function() {
        _renderGreetingSize();
      }
    },
    transitional: {
      size: function() {
        _renderTransitionalSize();
      }
    },
    clock: {
      size: function() {
        _renderClockSize();
      }
    },
    date: {
      size: function() {
        _renderDateSize();
      }
    },
    button: {
      size: function() {
        _renderButtonSize();
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

  var _renderBorder = function() {
    var html = helper.e("html");
    html.style.setProperty("--header-border-width-top-multiplier", state.get().header.border.top.width);
    html.style.setProperty("--header-border-width-bottom-multiplier", state.get().header.border.bottom.width);
  };

  var _renderSearchWidth = function() {
    var html = helper.e("html");
    html.style.setProperty("--header-search-width", state.get().header.search.width + "%");
  };

  var _renderSearchSize = function() {
    var html = helper.e("html");
    html.style.setProperty("--header-search-size", state.get().header.search.size + "em");
  };

  var _renderGreetingSize = function() {
    var html = helper.e("html");
    html.style.setProperty("--header-greeting-size", state.get().header.greeting.size + "em");
  };

  var _renderTransitionalSize = function() {
    var html = helper.e("html");
    html.style.setProperty("--header-transitional-size", state.get().header.transitional.size + "em");
  };

  var _renderClockSize = function() {
    var html = helper.e("html");
    html.style.setProperty("--header-clock-size", state.get().header.clock.size + "em");
  };

  var _renderDateSize = function() {
    var html = helper.e("html");
    html.style.setProperty("--header-date-size", state.get().header.date.size + "em");
  };

  var _renderButtonSize = function() {
    var html = helper.e("html");
    html.style.setProperty("--header-button-size", state.get().header.button.size + "em");
  };

  var init = function() {
    _bind();
    render.area.width();
    render.shade();
    render.opacity();
    render.border();
    render.greeting.size();
    render.transitional.size();
    render.clock.size();
    render.date.size();
    render.search.width();
    render.search.size();
    render.button.size();
  };

  // exposed methods
  return {
    render: render,
    init: init
  };

})();
