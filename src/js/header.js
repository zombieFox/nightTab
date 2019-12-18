var header = (function() {

  var bind = {};

  bind.resize = function() {
    window.addEventListener("resize", function() {
      render.shade();
    }, false);
  };

  bind.scroll = function() {
    window.addEventListener("scroll", function() {
      render.shade();
    }, false);
    helper.eA(".container").forEach(function(arrayItem, index) {
      arrayItem.addEventListener("transitionend", function() {
        render.shade();
      }, false);
    });
  };

  bind.fonts = function() {
    document.fonts.ready.then(function() {
      render.shade();
    });
  };

  var render = {};

  render.area = {
    width: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-area-width", state.get.current().header.area.width + "%");
    }
  };

  render.shade = function() {
    var html = helper.e("html");
    var headerRect = helper.e(".header").getBoundingClientRect();
    var layoutRect = helper.e(".layout").getBoundingClientRect();
    var fontSize = parseInt(getComputedStyle(html).fontSize, 10);
    var scrollTop = document.documentElement.scrollTop;
    // var scrollHeight = document.documentElement.scrollHeight;
    var innerHeight = window.innerHeight;
    // if shade show
    if (state.get.current().header.shade.show) {
      // shade always
      if (state.get.current().header.shade.style == "always") {
        helper.removeClass(html, "is-header-shade-style-scroll");
        helper.addClass(html, "is-header-shade-style-always");
        // shade scroll
      } else if (state.get.current().header.shade.style == "scroll") {
        helper.removeClass(html, "is-header-shade-style-always");
        // check header position
        if (state.get.current().layout.order == "headerlink") {
          // check scroll position
          if (scrollTop > fontSize * 2 && headerRect.top == 0) {
            helper.addClass(html, "is-header-shade-style-scroll");
          } else {
            helper.removeClass(html, "is-header-shade-style-scroll");
          };
        } else if (state.get.current().layout.order == "linkheader") {
          // check scroll position
          if (headerRect.bottom == innerHeight && (scrollTop + innerHeight) < ((scrollTop + layoutRect.bottom) - (fontSize * 2))) {
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

  render.opacity = function() {
    var html = helper.e("html");
    if (state.get.current().header.shade.show) {
      html.style.setProperty("--header-shade-opacity", state.get.current().header.shade.opacity);
    };
  };

  render.border = function() {
    var html = helper.e("html");
    html.style.setProperty("--header-border-top", state.get.current().header.border.top);
    html.style.setProperty("--header-border-bottom", state.get.current().header.border.bottom);
  };

  render.search = {
    width: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-search-width", state.get.current().header.search.width + "%");
    },
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-search-size", state.get.current().header.search.size + "em");
    }
  };

  render.greeting = {
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-greeting-size", state.get.current().header.greeting.size + "em");
    }
  };

  render.transitional = {
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-transitional-size", state.get.current().header.transitional.size + "em");
    }
  };

  render.clock = {
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-clock-size", state.get.current().header.clock.size + "em");
    }
  };

  render.date = {
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-date-size", state.get.current().header.date.size + "em");
    }
  };

  render.button = {
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-button-size", state.get.current().header.button.size + "em");
    },
    style: function() {
      var action = {
        box: function() {
          helper.removeClass(helper.getClosest(helper.e(".control-edit"), ".input-wrap"), "input-button-link");
          helper.removeClass(helper.e(".control-add-toggle"), "button-link");
          helper.removeClass(helper.getClosest(helper.e(".control-theme-accent-current-quick"), ".input-wrap"), "input-button-link");
          helper.removeClass(helper.e(".control-menu-open"), "button-link");
        },
        clear: function() {
          helper.addClass(helper.getClosest(helper.e(".control-edit"), ".input-wrap"), "input-button-link");
          helper.addClass(helper.e(".control-add-toggle"), "button-link");
          helper.addClass(helper.getClosest(helper.e(".control-theme-accent-current-quick"), ".input-wrap"), "input-button-link");
          helper.addClass(helper.e(".control-menu-open"), "button-link");
        }
      };
      action[state.get.current().header.button.style]();
    }
  };

  var init = function() {
    bind.resize();
    bind.scroll();
    bind.fonts();
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
