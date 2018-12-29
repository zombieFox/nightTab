var layout = (function() {

  var state = {
    view: "block"
  };

  var get = function() {
    return state;
  };

  var restore = function(object) {
    if (object) {
      state = object;
    };
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
      helper.setObject({
        path: options.path,
        object: state,
        newValue: options.value
      });
    };
  };

  var render = function() {
    var html = helper.e("html");
    var view = {
      block: function() {
        helper.addClass(html, "is-layout-block");
        helper.removeClass(html, "is-layout-list");
      },
      list: function() {
        helper.removeClass(html, "is-layout-block");
        helper.addClass(html, "is-layout-list");
      }
    };
    view[state.view]();
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
