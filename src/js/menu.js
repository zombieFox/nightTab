var menu = (function() {

  var mod = {};

  mod.open = function() {
    helper.setObject({
      object: state.get(),
      path: "menu",
      newValue: true
    });
  };

  mod.close = function() {
    helper.setObject({
      object: state.get(),
      path: "menu",
      newValue: false
    });
  };

  mod.toggle = function() {
    if (state.get().menu) {
      helper.setObject({
        object: state.get(),
        path: "menu",
        newValue: false
      });
    } else {
      render.scrollToTop();
      helper.setObject({
        object: state.get(),
        path: "menu",
        newValue: true
      });
    };
  };

  var render = {};

  render.scrollToTop = function() {
    if (window.innerWidth < 550) {
      helper.e(".menu-area").scrollTop = 0;
    } else {
      helper.e(".menu-content").scrollTop = 0;
    };
  };

  render.tab = function(menuNavButton, menuContentArea) {
    var allMenuNavButton = helper.eA(".menu-nav-button");
    var allMenuContentArea = helper.eA(".menu-content-area");
    allMenuNavButton.forEach(function(arrayItem, index) {
      helper.removeClass(arrayItem, "active");
    });
    allMenuContentArea.forEach(function(arrayItem, index) {
      helper.addClass(arrayItem, "is-hidden");
    });
    helper.addClass(menuNavButton, "active");
    helper.removeClass(menuContentArea, "is-hidden");
    render.scrollToTop();
  };

  render.toggle = function() {
    var html = helper.e("html");
    if (state.get().menu) {
      helper.addClass(html, "is-menu-open");
      helper.e(".menu").focus();
      shade.render({
        action: function() {
          mod.close();
          render.toggle();
          menu.render.tabindex.toggle();
          pagelock.render.toggle();
        }
      });
    } else {
      helper.removeClass(html, "is-menu-open");
    };
  };

  render.tabindex = {
    toggle: function() {
      var menu = helper.e(".menu");
      if (state.get().menu) {
        menu.tabIndex = 1;
        menu.querySelectorAll("[tabindex]").forEach(function(arrayItem, index) {
          arrayItem.tabIndex = 1;
        });
      } else {
        menu.tabIndex = -1;
        menu.querySelectorAll("[tabindex]").forEach(function(arrayItem, index) {
          arrayItem.tabIndex = -1;
        });
      };
    }
  };

  var init = function() {
    mod.close();
    render.toggle();
  };

  return {
    init: init,
    mod: mod,
    render: render
  };

})();
