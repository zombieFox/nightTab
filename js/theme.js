var theme = (function() {

  var toggle = function() {
    var style = {
      dark: function() {
        helper.setObject({
          object: state.get(),
          path: "theme.style",
          newValue: "light"
        })
      },
      light: function() {
        helper.setObject({
          object: state.get(),
          path: "theme.style",
          newValue: "dark"
        })
      }
    };
    style[state.get().theme.style]();
  };

  var render = {
    radius: function() {
      _renderRadius();
    }
  };

  var _renderRadius = function() {
    var html = helper.e("html");
    html.style.setProperty("--radius", state.get().theme.radius + "rem");
  };

  var init = function() {
    render.radius();
  };

  // exposed methods
  return {
    render: render,
    toggle: toggle,
    init: init
  };

})();
