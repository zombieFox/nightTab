var keyboard = (function() {

  var bind = {};

  bind.esc = function() {
    window.addEventListener("keydown", function(event) {
      //  esc
      if (event.keyCode == 27) {
        if (state.get().edge) {
          edge.box.close();
        } else if (state.get().menu) {
          menu.close();
        } else if (state.get().dropdown) {
          dropdown.close();
        } else if (state.get().autoSuggest) {
          autoSuggest.close();
        } else if (state.get().link.add) {
          link.add.item.close();
        } else if (state.get().group.add) {
          link.add.group.close();
        } else if (state.get().link.edit) {
          link.edit.close();
          data.save();
        } else if (state.get().modal) {
          modal.close();
          shade.close();
        };
        data.save();
      };
    }, false);
  };

  bind.ctrAltA = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+a
      if (event.ctrlKey && event.altKey && event.keyCode == 65) {
        if (state.get().group.add) {
          link.add.group.close();
        };
        if (!state.get().link.add) {
          if (state.get().menu) {
            menu.close();
          };
          if (state.get().modal) {
            modal.close();
          };
          link.add.item.open();
        };
      };
    }, false);
  };

  bind.ctrAltG = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+g
      if (event.ctrlKey && event.altKey && event.keyCode == 71) {
        if (state.get().link.add) {
          link.add.item.close();
        };
        if (!state.get().group.add) {
          if (state.get().menu) {
            menu.close();
          };
          if (state.get().modal) {
            modal.close();
          };
          link.add.group.open();
        };
      };
    }, false);
  };

  bind.ctrAltD = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+d
      if (event.ctrlKey && event.altKey && event.keyCode == 68) {
        theme.toggle();
        control.render.update();
        data.save();
      };
    }, false);
  };

  bind.ctrAltM = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+m
      if (event.ctrlKey && event.altKey && event.keyCode == 77) {
        if (state.get().link.add) {
          link.add.item.close();
          link.add.group.close();
        } else if (state.get().modal) {
          modal.close();
          shade.close();
        };
        menu.toggle();
      };
    }, false);
  };

  bind.ctrAltE = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+e
      if (event.ctrlKey && event.altKey && event.keyCode == 69) {
        link.edit.toggle();
        data.save();
      };
    }, false);
  };

  bind.ctrAltR = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+r
      if (state.get().theme.accent.random.active && event.ctrlKey && event.altKey && event.keyCode == 82) {
        theme.render.accent.random();
        theme.render.accent.color();
        link.groupAndItems();
        data.save();
      };
    }, false);
  };

  var init = function() {
    bind.esc();
    bind.ctrAltA();
    bind.ctrAltG();
    bind.ctrAltD();
    bind.ctrAltM();
    bind.ctrAltE();
    bind.ctrAltR();
  };

  return {
    init: init,
    bind: bind
  };

})();
