var menu = (function() {

  var _bind = function() {
    var allMenuNavButton = helper.eA(".menu-nav-button");
    allMenuNavButton.forEach(function(arrayItem, index) {
      arrayItem.addEventListener("click", function() {
        _tab(this);
      }, false);
    });
  };

  var _tab = function(button) {
    var allMenuNavButton = helper.eA(".menu-nav-button");
    var allMenuArea = helper.eA(".menu-area");
    var target = helper.e(button.dataset.target);
    allMenuNavButton.forEach(function(arrayItem, index) {
      helper.removeClass(arrayItem, "active");
    });
    allMenuArea.forEach(function(arrayItem, index) {
      helper.removeClass(arrayItem, "active");
    });
    helper.addClass(button, "active");
    helper.addClass(target, "active");
  };

  var close = function() {
    state.get().menu.active = false;
    render();
  };

  var open = function() {
    state.get().menu.active = true;
    render();
  };

  var toggle = function() {
    if (state.get().menu.active) {
      state.get().menu.active = false;
    } else {
      state.get().menu.active = true;
    };
    render();
  };

  var render = function() {
    var html = helper.e("html");
    if (state.get().menu.active) {
      helper.addClass(html, "is-menu-open");
      shade.render({
        action: function() {
          close();
          render();
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
