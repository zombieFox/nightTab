var menu = (function() {

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
