var ready = (function() {

  var bind = {};

  bind.loaded = {
    func: function() {
      render.loaded();
      bind.loaded.remove();
    },
    add: function() {
      window.addEventListener("load", bind.loaded.func, false);
    },
    remove: function() {
      window.removeEventListener("load", bind.loaded.func);
    }
  };

  var render = {};

  render.loaded = function() {
    var html = helper.e("html");
    helper.addClass(html, "is-ready");
  };

  var init = function() {
    bind.loaded.add();
  };

  // exposed methods
  return {
    init: init,
    bind: bind,
    render: render
  };

})();
