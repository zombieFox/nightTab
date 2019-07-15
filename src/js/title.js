var title = (function() {

  var render = {};

  render.name = function() {
    helper.e("title").textContent = state.get().layout.title;
  };

  var init = function() {
    render.name();
  };

  // exposed methods
  return {
    render: render,
    init: init
  };

})();
