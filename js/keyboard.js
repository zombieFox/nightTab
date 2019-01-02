var keyboard = (function() {

  var _bind = function() {
    window.addEventListener("keydown", function(event) {
      //  esc
      if (event.keyCode == 27) {
        if (state.get().menu.open) {
          console.log(1);
          menu.close();
          shade.destroy();
        } else if (state.get().modal.active) {
          console.log(2);
          modal.destroy();
          shade.destroy();
        } else if (state.get().edit.active) {
          console.log(3);
          state.change({
            path: "edit.active",
            value: false
          });
          control.update();
          control.render();
        };
      };
      // ctrl+alt+a
      if (event.ctrlKey && event.altKey && event.keyCode == 65) {
        menu.close();
        links.add();
      };
      // ctrl+alt+m
      if (event.ctrlKey && event.altKey && event.keyCode == 77) {
        shade.destroy();
        modal.destroy();
        menu.toggle();
      };
      // ctrl+alt+e
      if (event.ctrlKey && event.altKey && event.keyCode == 69) {
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
