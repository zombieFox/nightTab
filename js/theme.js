var theme = (function() {

  var toggle = function() {
    var mode = {
      dark: function() {
        helper.setObject({
          object: state.get(),
          path: "layout.theme.mode",
          newValue: "light"
        })
      },
      light: function() {
        helper.setObject({
          object: state.get(),
          path: "layout.theme.mode",
          newValue: "dark"
        })
      }
    };
    mode[state.get().layout.theme.mode]();
  };

  // exposed methods
  return {
    toggle: toggle
  };

})();
