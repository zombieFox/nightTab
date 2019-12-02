var pagelock = (function() {

  var mod = {};

  mod.lock = function() {
    helper.setObject({
      object: state.get.current(),
      path: "pagelock",
      newValue: true
    });
  };

  mod.unlock = function() {
    helper.setObject({
      object: state.get.current(),
      path: "pagelock",
      newValue: false
    });
  };

  mod.toggle = function() {
    if (state.get.current().menu || state.get.current().modal || state.get.current().autoSuggest) {
      mod.lock();
    } else {
      mod.unlock();
    };
  };

  var render = {};

  render.lock = function() {
    helper.addClass(helper.e("body"), "scroll-disabled");
  };

  render.unlock = function() {
    helper.removeClass(helper.e("body"), "scroll-disabled");
  };

  render.toggle = function() {
    if (state.get.current().pagelock) {
      render.lock();
    } else {
      render.unlock();
    };
  };

  var lock = function() {
    mod.lock();
    render.toggle();
  };

  var unlock = function() {
    mod.unlock();
    render.unlock();
  };

  var toggle = function() {
    mod.toggle();
    render.toggle();
  };

  // exposed methods
  return {
    mod: mod,
    render: render,
    toggle: toggle,
    lock: lock,
    unlock: unlock
  };

})();
