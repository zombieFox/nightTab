var menu = (function() {

  var _bind = function() {
    var allMenuNavButton = helper.eA(".menu-nav-button");
    var menuClose = helper.e(".menu-close");
    allMenuNavButton.forEach(function(arrayItem, index) {
      arrayItem.addEventListener("click", function() {
        _tab(this);
      }, false);
    });
    menuClose.addEventListener("click", function() {
      close();
      shade.destroy();
    }, false);
  };

  var _scrollToTop = function() {
    if (window.innerWidth < 550) {
      helper.e(".menu-area").scrollTop = 0;
    } else {
      helper.e(".menu-content").scrollTop = 0;
    };
  };

  var _tab = function(button) {
    var allMenuNavButton = helper.eA(".menu-nav-button");
    var allMenuContentArea = helper.eA(".menu-content-area");
    var target = helper.e(button.dataset.target);
    allMenuNavButton.forEach(function(arrayItem, index) {
      helper.removeClass(arrayItem, "active");
    });
    allMenuContentArea.forEach(function(arrayItem, index) {
      helper.addClass(arrayItem, "is-hidden");
    });
    helper.addClass(button, "active");
    helper.removeClass(target, "is-hidden");
    _scrollToTop();
  };

  var close = function() {
    helper.setObject({
      object: state.get(),
      path: "menu",
      newValue: false
    });
    render();
  };

  var open = function() {
    _scrollToTop();
    helper.setObject({
      object: state.get(),
      path: "menu",
      newValue: true
    });
    render();
  };

  var toggle = function() {
    if (state.get().menu) {
      helper.setObject({
        object: state.get(),
        path: "menu",
        newValue: false
      });
    } else {
      _scrollToTop();
      helper.setObject({
        object: state.get(),
        path: "menu",
        newValue: true
      });
    };
    render();
  };

  var render = function() {
    var html = helper.e("html");
    if (state.get().menu) {
      helper.addClass(html, "is-menu-open");
      helper.e(".menu").focus();
      shade.render({
        action: function() {
          close();
          page.update();
        }
      });
    } else {
      helper.removeClass(html, "is-menu-open");
    };
  };

  var init = function() {
    _bind();
    close();
  };

  return {
    init: init,
    close: close,
    open: open,
    toggle: toggle,
    render: render
  };

})();
