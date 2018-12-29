var layout = (function() {

  var state = {
    show: {
      block: true,
      list: false
    }
  };

  var get = function() {
    return state;
  };

  var toggle = function(override) {
    var options = {
      path: null,
      value: null
    };
    if (override) {
      options = helper.applyOptions(options, override);
    };
    if (options.path != null) {
      for (var key in state.show) {
        state.show[key] = false;
      };
      helper.setObject({
        path: options.path,
        object: state,
        newValue: options.value
      });
    };
  };

  var render = function() {
    var html = helper.e("html");
    for (var key in state.show) {
      if (state.show[key]) {
        helper.addClass(html, "is-layout-" + key);
      } else {
        helper.removeClass(html, "is-layout-" + key);
      };
    };
  };

  var restore = function(object) {
    if (object) {
      state = object;
    };
  };

  var init = function() {
    render();
  };

  // exposed methods
  return {
    state: state,
    get: get,
    init: init,
    toggle: toggle,
    render: render,
    restore: restore
  };

})();
