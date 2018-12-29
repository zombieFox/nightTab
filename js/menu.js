var menu = (function() {

  var state = {
    open: false
  };

  var get = function() {
    return state;
  };

  var close = function() {
    state.open = false;
  };

  var open = function() {
    state.open = true;
  };

  var toggle = function() {
    if (state.open) {
      state.open = false;
    } else {
      state.open = true;
    };
  };

  var render = function() {
    var body = helper.e("body");
    if (state.open) {
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
    get: get,
    toggle: toggle,
    render: render
  };

})();
