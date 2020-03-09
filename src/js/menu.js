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

  var bind = {};

  bind.focus = {
    loop: function(event) {
      var firstElement = helper.e(".control-menu-layout");
      var lastElement = helper.e(".menu-close-tab");
      if (event.keyCode == 9 && event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else if (event.keyCode == 9) {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      };
    },
    add: function() {
      window.addEventListener("keydown", bind.focus.loop, false);
    },
    remove: function() {
      window.removeEventListener("keydown", bind.focus.loop, false);
    }
  };

  render = {};

  render.panel = function() {
    if (state.get.current().menu) {
      helper.addClass(helper.e("html"), "is-menu-open");
    } else {
      helper.removeClass(helper.e("html"), "is-menu-open");
    };
  };

  render.nav = {
    active: function() {
      for (var key in mod.nav.state) {
        if (mod.nav.state[key]) {
          helper.removeClass(helper.e(".menu-content-" + key), "is-hidden");
        } else {
          helper.addClass(helper.e(".menu-content-" + key), "is-hidden");
        };
      };
    },
    tabindex: function() {
      var menu = helper.e(".menu");
      var menuCloseTab = helper.e(".menu-close-tab");
      var allMenuContent = helper.eA(".menu-content");
      allMenuContent.forEach(function(arrayItem, index) {
        arrayItem.querySelectorAll("[tabindex]").forEach(function(arrayItem, index) {
          if (state.get.current().menu) {
            arrayItem.tabIndex = 1;
          } else {
            arrayItem.tabIndex = -1;
          };
        });
      });
      if (state.get.current().menu) {
        menu.tabIndex = 1;
        menuCloseTab.tabIndex = 2;
      } else {
        menu.tabIndex = -1;
        menuCloseTab.tabIndex = -1;
      };
    },
    scroll: function() {
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

  render.tab = {
    active: function() {
      for (var key in mod.nav.state) {
        var controlMenu = helper.e(".control-menu-" + key);
        if (mod.nav.state[key]) {
          helper.addClass(controlMenu, "active");
        } else {
          helper.removeClass(controlMenu, "active");
        };
      };
    },
    tabindex: function() {
      var allMenuNavTab = helper.eA(".menu-nav-tab");
      allMenuNavTab.forEach(function(arrayItem, index) {
        if (state.get.current().menu) {
          arrayItem.tabIndex = 1;
        } else {
          arrayItem.tabIndex = -1;
        };
      });
    }
  };

  render.subnav = {
    active: function() {
      for (var key in mod.nav.state) {
        var menuSubnav = helper.e(".menu-subnav-" + key);
        if (menuSubnav) {
          if (mod.nav.state[key]) {
            helper.addClass(menuSubnav, "active");
          } else {
            helper.removeClass(menuSubnav, "active");
          };
        };
      };
    },
    tabindex: function() {
      for (var key in mod.nav.state) {
        var menuNavBody = helper.e(".menu-subnav-" + key);
        if (menuNavBody) {
          menuNavBody.querySelectorAll("[tabindex]").forEach(function(arrayItem, index) {
            if (mod.nav.state[key] && state.get.current().menu) {
              arrayItem.tabIndex = 1;
            } else {
              arrayItem.tabIndex = -1;
            };
          });
        };
      };
    },
    height: function() {
      var allMenuNavBody = helper.eA(".menu-subnav");
      allMenuNavBody.forEach(function(arrayItem, index) {
        helper.addClass(arrayItem, "active");
        arrayItem.setAttribute("style", "--menu-subnav-height:" + arrayItem.getBoundingClientRect().height + "px;");
        helper.removeClass(arrayItem, "active");
      });
    }
  };

  render.focus = function() {
    helper.e(".menu").focus();
  };

  render.removeStyle = function() {
    helper.e(".menu").removeAttribute("style");
  };

  var nav = function(name) {
    mod.nav.toggle(name);
    render.nav.active();
    render.nav.tabindex();
    render.tab.active();
    render.tab.tabindex();
    render.subnav.active();
    render.subnav.tabindex();
    render.nav.scroll(name);
  };

  var open = function() {
    mod.open();
    render.panel();
    render.focus();
    render.nav.active();
    render.nav.tabindex();
    render.tab.active();
    render.tab.tabindex();
    render.subnav.active();
    render.subnav.tabindex();
    render.nav.scroll(name);
    bind.focus.add();
    shade.open({
      action: function() {
        mod.close();
        render.panel();
        render.nav.active();
        render.nav.tabindex();
        render.tab.active();
        render.tab.tabindex();
        render.subnav.active();
        render.subnav.tabindex();
        bind.focus.remove();
        pagelock.unlock();
      }
    });
    pagelock.lock();
  };

  var close = function() {
    mod.close();
    render.panel();
    render.nav.active();
    render.nav.tabindex();
    render.tab.active();
    render.tab.tabindex();
    render.subnav.active();
    render.subnav.tabindex();
    bind.focus.remove();
    shade.close();
    pagelock.unlock();
  };

  var toggle = function() {
    if (state.get.current().menu) {
      close();
    } else {
      open();
    };
  };

  var init = function() {
    mod.close();
    render.removeStyle();
    render.subnav.height();
  };

  return {
    init: init,
    mod: mod,
    bind: bind,
    render: render,
    open: open,
    close: close,
    toggle: toggle,
    nav: nav
  };

})();
