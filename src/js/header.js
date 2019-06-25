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
      },
      style: function() {
        _renderButtonStyle();
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
    var scrollTop = document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight;
    var innerHeight = window.innerHeight;
    // if shade show
    if (state.get().header.shade.show) {
      // shade always
      if (state.get().header.shade.style == "always") {
        helper.removeClass(html, "is-header-shade-style-scroll");
        helper.addClass(html, "is-header-shade-style-always");
        // shade scroll
      } else if (state.get().header.shade.style == "scroll") {
        helper.removeClass(html, "is-header-shade-style-always");
        // check header position
        if (state.get().layout.order == "headerLink") {
          // check scroll position
          if (scrollTop > fontSize * 2) {
            helper.addClass(html, "is-header-shade-style-scroll");
          } else {
            helper.removeClass(html, "is-header-shade-style-scroll");
          };
        } else if (state.get().layout.order == "linkHeader") {
          // check scroll position
          if (scrollTop < (scrollHeight - innerHeight) - (fontSize * 2)) {
            helper.addClass(html, "is-header-shade-style-scroll");
          } else {
            helper.removeClass(html, "is-header-shade-style-scroll");
          };
        };
      };
    } else {
      helper.removeClass(html, "is-header-shade-style-scroll");
      helper.removeClass(html, "is-header-shade-style-always");
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
    html.style.setProperty("--header-border-top", state.get().header.border.top);
    html.style.setProperty("--header-border-bottom", state.get().header.border.bottom);
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

  var _renderButtonStyle = function() {
    var action = {
      box: function() {
        helper.removeClass(helper.getClosest(helper.e(".control-link-edit"), ".input-wrap"), "input-button-link");
        helper.removeClass(helper.getClosest(helper.e(".control-theme-accent-current"), ".input-wrap"), "input-button-link");
        helper.removeClass(helper.e(".control-link-add"), "button-link");
        helper.removeClass(helper.e(".control-menu"), "button-link");
      },
      clear: function() {
        helper.addClass(helper.getClosest(helper.e(".control-link-edit"), ".input-wrap"), "input-button-link");
        helper.addClass(helper.getClosest(helper.e(".control-theme-accent-current"), ".input-wrap"), "input-button-link");
        helper.addClass(helper.e(".control-link-add"), "button-link");
        helper.addClass(helper.e(".control-menu"), "button-link");
      }
    };
    action[state.get().header.button.style]();
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
    render.button.style();
  };

  // exposed methods
  return {
    render: render,
    init: init
  };

})();
