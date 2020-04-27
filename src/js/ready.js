var ready = (function() {

  var _timer = null;

  var bind = {};

  bind.loaded = {
    func: function() {
      render.loaded();
      clearTimeout(_timer);
    },
    timer: function() {
      _timer = setTimeout(bind.loaded.func, 300);
    }
  };

  var render = {};

  render.loaded = function() {
    var html = helper.e("html");
    helper.addClass(html, "is-ready");
  };

  var init = function() {
    bind.loaded.timer();
  };

  // exposed methods
  return {
    init: init,
    bind: bind,
    render: render
  };

})();
