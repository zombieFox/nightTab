var header = (function() {

  var bind = {};

  bind.resize = function() {
    window.addEventListener("resize", function() {
      render.color.scrolling();
    }, false);
  };

  bind.scroll = function() {
    window.addEventListener("scroll", function() {
      render.color.scrolling();
    }, false);
    helper.eA(".container").forEach(function(arrayItem, index) {
      arrayItem.addEventListener("transitionend", function() {
        render.color.scrolling();
      }, false);
    });
  };

  bind.fonts = function() {
    document.fonts.ready.then(function() {
      render.color.scrolling();
    });
  };

  var render = {};

  render.area = {
    width: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-area-width", state.get.current().header.area.width + "%");
    }
  };

  render.color = {
    custom: function() {
      helper.e("html").style.setProperty("--header-color-custom", state.get.current().header.color.rgb.r + ", " + state.get.current().header.color.rgb.g + ", " + state.get.current().header.color.rgb.b);
    },
    scrolling: function() {
      var html = helper.e("html");
      var headerRect = helper.e(".header").getBoundingClientRect();
      var layoutRect = helper.e(".layout").getBoundingClientRect();
      var fontSize = parseInt(getComputedStyle(html).fontSize, 10);
      var scrollTop = document.documentElement.scrollTop;
      // var scrollHeight = document.documentElement.scrollHeight;
      var innerHeight = window.innerHeight;
      // if color show
      if (state.get.current().header.color.show) {
        // color always
        if (state.get.current().header.color.style == "scroll") {
          // check header position
          if (state.get.current().layout.order == "headerlink") {
            // check scroll position
            if (scrollTop > fontSize * 2 && headerRect.top == 0) {
              helper.addClass(html, "is-header-color-style-scrolling");
            } else {
              helper.removeClass(html, "is-header-color-style-scrolling");
            };
          } else if (state.get.current().layout.order == "linkheader") {
            // check scroll position
            if (headerRect.bottom == innerHeight && (scrollTop + innerHeight) < ((scrollTop + layoutRect.bottom) - (fontSize * 2))) {
              helper.addClass(html, "is-header-color-style-scrolling");
            } else {
              helper.removeClass(html, "is-header-color-style-scrolling");
            };
          };
        };
      };
    }
  };

  render.input = {
    picker: function() {
      helper.e(".control-header-color-rgb-picker").value = helper.convertColor.rgb.hex(state.get.current().header.color.rgb);
    },
    hex: function() {
      helper.e(".control-header-color-rgb-hex").value = helper.convertColor.rgb.hex(state.get.current().header.color.rgb);
    }
  };

  render.opacity = function() {
    var html = helper.e("html");
    if (state.get.current().header.color.show) {
      html.style.setProperty("--header-opacity", state.get.current().header.color.opacity);
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
          helper.removeClass(helper.getClosest(helper.e(".control-edit"), ".form-input-button"), "form-input-button-link");
          helper.removeClass(helper.e(".control-add-toggle"), "button-link");
          helper.removeClass(helper.getClosest(helper.e(".control-theme-color-rgb-quick"), ".form-input-button"), "form-input-button-link");
          helper.removeClass(helper.getClosest(helper.e(".control-theme-accent-rgb-quick"), ".form-input-button"), "form-input-button-link");
          helper.removeClass(helper.e(".control-menu-open"), "button-link");
        },
        clear: function() {
          helper.addClass(helper.getClosest(helper.e(".control-edit"), ".form-input-button"), "form-input-button-link");
          helper.addClass(helper.e(".control-add-toggle"), "button-link");
          helper.addClass(helper.getClosest(helper.e(".control-theme-color-rgb-quick"), ".form-input-button"), "form-input-button-link");
          helper.addClass(helper.getClosest(helper.e(".control-theme-accent-rgb-quick"), ".form-input-button"), "form-input-button-link");
          helper.addClass(helper.e(".control-menu-open"), "button-link");
        }
      };
      action[state.get.current().header.button.style]();
    },
    dot: function() {
      if (state.get.current().header.button.colorAccent.dot.show) {
        helper.addClass(helper.getClosest(helper.e(".control-theme-color-rgb-quick"), ".form-input-button"), "input-color-dot");
        helper.addClass(helper.getClosest(helper.e(".control-theme-color-rgb-quick"), ".form-input-button"), "input-color-dot-shade");
        helper.removeClass(helper.getClosest(helper.e(".control-theme-color-rgb-quick"), ".form-input-button"), "form-input-hide");
        helper.addClass(helper.getClosest(helper.e(".control-theme-accent-rgb-quick"), ".form-input-button"), "input-color-dot");
        helper.addClass(helper.getClosest(helper.e(".control-theme-accent-rgb-quick"), ".form-input-button"), "input-color-dot-accent");
        helper.removeClass(helper.getClosest(helper.e(".control-theme-accent-rgb-quick"), ".form-input-button"), "form-input-hide");
      } else {
        helper.removeClass(helper.getClosest(helper.e(".control-theme-color-rgb-quick"), ".form-input-button"), "input-color-dot");
        helper.removeClass(helper.getClosest(helper.e(".control-theme-color-rgb-quick"), ".form-input-button"), "input-color-dot-shade");
        helper.addClass(helper.getClosest(helper.e(".control-theme-color-rgb-quick"), ".form-input-button"), "form-input-hide");
        helper.removeClass(helper.getClosest(helper.e(".control-theme-accent-rgb-quick"), ".form-input-button"), "input-color-dot");
        helper.removeClass(helper.getClosest(helper.e(".control-theme-accent-rgb-quick"), ".form-input-button"), "input-color-dot-accent");
        helper.addClass(helper.getClosest(helper.e(".control-theme-accent-rgb-quick"), ".form-input-button"), "form-input-hide");
      };
    }
  };

  var init = function() {
    bind.resize();
    bind.scroll();
    bind.fonts();
    render.area.width();
    render.color.scrolling();
    render.color.custom();
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
    render.button.dot();
  };

  // exposed methods
  return {
    render: render,
    init: init
  };

})();
