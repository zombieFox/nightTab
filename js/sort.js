var sort = (function() {

  var state = {
    view: "none"
  };

  var get = function(key) {
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

  var render = function(by) {
    // var action = {
    //   name: function() {
    //     helper.sortObject(bookmarks.get(), "name");
    //   },
    //   letter: function() {
    //     helper.sortObject(bookmarks.get(), "letter");
    //   }
    // };
    // action[by]();
    // links.clear();
    // links.render();
  };

  var init = function() {};

  return {
    init: init,
    state: state,
    get: get,
    toggle: toggle,
    render: render,
    restore: restore
  };

})();
