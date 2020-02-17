var menu = (function() {

  var mod = {};

  mod.open = function() {
    helper.setObject({
      object: state.get.current(),
      path: "menu",
      newValue: true
    });
  };

  mod.close = function() {
    helper.setObject({
      object: state.get.current(),
      path: "menu",
      newValue: false
    });
  };

  var render = {};

  render.scrollToTop = function(name) {
    if (window.innerWidth < 700) {
      helper.e(".menu-area").scrollTop = 0;
    } else {
      if (name) {
        helper.e(".menu-content-" + name).scrollTop = 0;
      } else {
        var allMenuContentArea = helper.eA(".menu-content");
        allMenuContentArea.forEach(function(arrayItem, index) {
          arrayItem.scrollTop = 0;
        });
      };
    };
  };

  render.nav = function(name) {
    var allMenuNavTab = helper.eA(".menu-nav-tab");
    var allMenuContentArea = helper.eA(".menu-content");

    allMenuNavTab.forEach(function(arrayItem, index) {
      helper.removeClass(arrayItem, "active");
    });
    allMenuContentArea.forEach(function(arrayItem, index) {
      helper.addClass(arrayItem, "is-hidden");
    });

    var control = helper.e(".control-menu-" + name);
    var content = helper.e(".menu-content-" + name);

    if (control) {
      helper.addClass(control, "active");
    };
    if (content) {
      helper.removeClass(content, "is-hidden");
    };
  };

  render.subnav = {
    calculate: function() {
      var allMenuNavBody = helper.eA(".menu-nav-body");
      allMenuNavBody.forEach(function(arrayItem, index) {
        arrayItem.setAttribute("style", "--menu-nav-body-height:" + arrayItem.getBoundingClientRect().height + "px;");
        if (index > 0) {
          helper.removeClass(arrayItem, "active");
        };
      });
    },
    toggle: function(name) {
      var allMenuNavBody = helper.eA(".menu-nav-body");
      allMenuNavBody.forEach(function(arrayItem, index) {
        helper.removeClass(arrayItem, "active");
      });
      var body = helper.e(".menu-nav-body-" + name);
      if (body) {
        helper.addClass(body, "active");
      };
    }
  };

  render.tabindex = {
    toggle: function() {
      var menu = helper.e(".menu");
      if (state.get.current().menu) {
        menu.tabIndex = 1;
        menu.querySelectorAll("[tabindex]").forEach(function(arrayItem, index) {
          if (arrayItem.tabIndex == -1) {
            arrayItem.tabIndex = 1;
          };
        });
      } else {
        menu.tabIndex = -1;
        menu.querySelectorAll("[tabindex]").forEach(function(arrayItem, index) {
          if (arrayItem.tabIndex == 1) {
            arrayItem.tabIndex = -1;
          };
        });
      };
    }
  };

  render.focus = function() {
    helper.e(".menu").focus();
  };

  render.open = function() {
    helper.addClass(helper.e("html"), "is-menu-open");
  };

  render.close = function() {
    helper.removeClass(helper.e("html"), "is-menu-open");
  };

  render.removeStyle = function() {
    helper.e(".menu").removeAttribute("style");
  };

  var nav = function(name) {
    render.nav(name);
    render.subnav.toggle(name);
    render.scrollToTop(name);
  };

  var toggle = function() {
    if (state.get.current().menu) {
      close();
    } else {
      open();
    };
  };

  var open = function() {
    mod.open();
    render.open();
    render.focus();
    render.scrollToTop();
    render.tabindex.toggle();
    shade.open({
      action: function() {
        mod.close();
        render.close();
        render.tabindex.toggle();
        pagelock.unlock();
      }
    });
    pagelock.lock();
  };

  var close = function() {
    mod.close();
    render.close();
    render.tabindex.toggle();
    shade.close();
    pagelock.unlock();
  };

  var init = function() {
    mod.close();
    render.close();
    render.removeStyle();
    render.subnav.calculate();
  };

  return {
    init: init,
    mod: mod,
    render: render,
    open: open,
    close: close,
    toggle: toggle,
    nav: nav
  };

})();
