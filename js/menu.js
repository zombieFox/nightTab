var menu = (function() {

  var close = function() {
    state.get().menu.open = false;
  };

  var open = function() {
    state.get().menu.open = true;
  };

  var toggle = function() {
    if (state.get().menu.open) {
      state.get().menu.open = false;
    } else {
      state.get().menu.open = true;
    };
  };

  var render = function() {
    var body = helper.e("body");
    if (state.get().menu.open) {
      helper.addClass(body, "is-open");
      shade.render({
        action: function() {
          close();
          render();
        }
      });
    } else {
      helper.removeClass(body, "is-open");
    };
  };

  return {
    close: close,
    open: open,
    toggle: toggle,
    render: render
  };

})();
