var layout = (function() {

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
    view[state.get().layout.view]();
  };

  var init = function() {
    render();
  };

  // exposed methods
  return {
    init: init,
    render: render
  };

})();
