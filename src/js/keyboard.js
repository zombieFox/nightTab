var keyboard = (function() {

  var bind = {};

  bind.esc = function() {
    window.addEventListener("keydown", function(event) {
      //  esc
      if (event.keyCode == 27) {
        if (state.get().edge) {
          edge.render.clear();
        } else if (state.get().menu) {
          menu.close();
          shade.close();
        } else if (state.get().autoSuggest) {
          autoSuggest.close();
        } else if (state.get().link.add) {
          link.add.close();
          shade.close();
        } else if (state.get().link.edit) {
          link.add.close();
          shade.close();
          control.render.update();
          control.render.class();
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
        if (!state.get().link.add) {
          if (state.get().menu) {
            menu.close();
          };
          if (state.get().modal) {
            modal.close();
          };
          link.add.open();
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
          link.add.close();
          shade.close();
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
        link.edit();
        link.tabindex();
        control.render.update();
        control.render.class();
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
