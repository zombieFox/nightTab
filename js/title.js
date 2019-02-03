var title = (function() {

  var render = function() {
    helper.e("title").textContent = state.get().layout.title;
  };

  var init = function() {
    render();
  };

  // exposed methods
  return {
    render: render,
    init: init
  };

})();
