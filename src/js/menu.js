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

  mod.nav = {
    state: {
      layout: true,
      header: false,
      bookmarks: false,
      groups: false,
      theme: false,
      background: false,
      data: false,
      coffee: false,
      nighttab: false
    },
    toggle: function(name) {
      for (var key in mod.nav.state) {
        mod.nav.state[key] = false;
      };
      mod.nav.state[name] = true;
    }
  };

  render.open = function() {
    helper.addClass(helper.e("html"), "is-menu-open");
  };

  render.close = function() {
    helper.removeClass(helper.e("html"), "is-menu-open");
  };

  render.nav = {
    tab: function() {
      for (var key in mod.nav.state) {
        var controlMenu = helper.e(".control-menu-" + key);
        if (mod.nav.state[key]) {
          helper.addClass(controlMenu, "active");
        } else {
          helper.removeClass(controlMenu, "active");
        };
      };
    },
    content: function() {
      for (var key in mod.nav.state) {
        if (mod.nav.state[key]) {
          helper.removeClass(helper.e(".menu-content-" + key), "is-hidden");
        } else {
          helper.addClass(helper.e(".menu-content-" + key), "is-hidden");
        };
      };
    },
    tabindex: function() {
      for (var key in mod.nav.state) {
        var menuContent = helper.e(".menu-content-" + key);
        if (mod.nav.state[key]) {
          menuContent.querySelectorAll("[tabindex]").forEach(function(arrayItem, index) {
            arrayItem.tabIndex = 1;
          });
        } else {
          menuContent.querySelectorAll("[tabindex]").forEach(function(arrayItem, index) {
            arrayItem.tabIndex = -1;
          });
        };
      };
    },
    scrollToTop: function() {
      if (window.innerWidth < 700) {
        helper.e(".menu-area").scrollTop = 0;
      } else {
        for (var key in mod.nav.state) {
          if (mod.nav.state[key]) {
            helper.e(".menu-content-" + key).scrollTop = 0;
          };
        };
      };
    }
  };

  render.focus = function() {
    helper.e(".menu").focus();
  };

  render.removeStyle = function() {
    helper.e(".menu").removeAttribute("style");
  };

  render.subnav = {
    height: function() {
      var allMenuNavBody = helper.eA(".menu-nav-body");
      allMenuNavBody.forEach(function(arrayItem, index) {
        arrayItem.setAttribute("style", "--menu-nav-body-height:" + arrayItem.getBoundingClientRect().height + "px;");
        if (index > 0) {
          helper.removeClass(arrayItem, "active");
        };
      });
    },
    body: function() {
      for (var key in mod.nav.state) {
        var menuNavBody = helper.e(".menu-nav-body-" + key);
        if (menuNavBody) {
          if (mod.nav.state[key]) {
            helper.addClass(menuNavBody, "active");
          } else {
            helper.removeClass(menuNavBody, "active");
          };
        };
      };
    },
    tabindex: function(name) {
      for (var key in mod.nav.state) {
        var menuNavBody = helper.e(".menu-nav-body-" + key);
        if (menuNavBody) {
          if (mod.nav.state[key]) {
            menuNavBody.querySelectorAll("[tabindex]").forEach(function(arrayItem, index) {
              arrayItem.tabIndex = 1;
            });
          } else {
            menuNavBody.querySelectorAll("[tabindex]").forEach(function(arrayItem, index) {
              arrayItem.tabIndex = -1;
            });
          };
        };
      };
    }
  };

  var nav = function(name) {
    mod.nav.toggle(name);
    render.nav.tab();
    render.nav.content();
    render.nav.tabindex();
    render.nav.scrollToTop(name);
    render.subnav.body();
    render.subnav.tabindex();
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
    render.subnav.height();
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
