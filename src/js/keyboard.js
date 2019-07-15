var keyboard = (function() {

  var _bind = function() {
    window.addEventListener("keydown", function(event) {
      //  esc
      if (event.keyCode == 27) {
        if (state.get().edge) {
          edge.render.clear();
        } else if (state.get().menu) {
          menu.close();
          shade.destroy();
        } else if (state.get().autoSuggest) {
          autoSuggest.destroy();
        } else if (state.get().modal) {
          modal.destroy();
          shade.destroy();
        } else if (state.get().link.edit) {
          helper.setObject({
            object: state.get(),
            path: "link.edit",
            newValue: false
          });
          control.update();
          control.render();
        };
        data.save();
      };
      // ctrl+alt+a
      if (event.ctrlKey && event.altKey && event.keyCode == 65) {
        if (state.get().link.show) {
          menu.close();
          link.add();
        };
      };
      // ctrl+alt+d
      if (event.ctrlKey && event.altKey && event.keyCode == 68) {
        theme.toggle();
        theme.render.theme();
        control.update();
        data.save();
      };
      // ctrl+alt+m
      if (event.ctrlKey && event.altKey && event.keyCode == 77) {
        shade.destroy();
        modal.destroy();
        menu.toggle();
      };
      // ctrl+alt+e
      if (event.ctrlKey && event.altKey && event.keyCode == 69) {
        if (state.get().link.show && bookmarks.get().length > 0) {
          if (state.get().link.edit) {
            helper.setObject({
              object: state.get(),
              path: "link.edit",
              newValue: false
            });
          } else {
            helper.setObject({
              object: state.get(),
              path: "link.edit",
              newValue: true
            });
          };
          control.update();
          control.render();
          data.save();
        };
      };
      // ctrl+alt+r
      if (state.get().theme.accent.random.active && event.ctrlKey && event.altKey && event.keyCode == 82) {
        accent.random();
        accent.render();
        link.clear();
        link.render.item.all();
        sortable(".link-area");
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
