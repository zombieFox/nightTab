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

  // exposed methods
  return {
    toggle: toggle
  };

})();
