var keyboard = (function() {

  var _bind = function() {
    window.addEventListener("keydown", function(event) {
      //  esc
      if (event.keyCode == 27) {
        if (state.get().menu.active) {
          menu.close();
          shade.destroy();
        } else if (state.get().modal.active) {
          modal.destroy();
          shade.destroy();
        } else if (state.get().edit.active) {
          state.change({
            path: "edit.active",
            value: false
          });
          control.update();
          control.render();
        };
        data.save();
      };
      // ctrl+alt+a
      if (event.ctrlKey && event.altKey && event.keyCode == 65) {
        if (state.get().link.show.active) {
          menu.close();
          link.add();
        };
      };
      // ctrl+alt+m
      if (event.ctrlKey && event.altKey && event.keyCode == 77) {
        shade.destroy();
        modal.destroy();
        menu.toggle();
      };
      // ctrl+alt+e
      if (event.ctrlKey && event.altKey && event.keyCode == 69) {
        if (state.get().link.show.active) {
          if (state.get().edit.active) {
            state.change({
              path: "edit.active",
              value: false
            });
          } else {
            state.change({
              path: "edit.active",
              value: true
            });
          };
          control.update();
          control.render();
          data.save();
        };
      };
      // ctrl+alt+r
      if (event.ctrlKey && event.altKey && event.keyCode == 82) {
        theme.random();
        theme.render();
        data.save();
      };
    }, false);
  };

  var init = function() {
    _bind();
  };

  return {
    init: init
  };

})();
