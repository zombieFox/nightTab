var keyboard = (function() {

  var bind = {};

  bind.esc = function() {
    window.addEventListener("keydown", function(event) {
      //  esc
      if (event.keyCode == 27) {
        if (state.get.current().edge) {
          edge.box.close();
        } else if (state.get.current().menu) {
          menu.close();
        } else if (state.get.current().dropdown) {
          dropdown.close();
        } else if (state.get.current().autoSuggest) {
          autoSuggest.close();
        } else if (state.get.current().link.edit) {
          link.edit.item.close();
          modal.close();
          shade.close();
          data.save();
        } else if (state.get.current().link.add) {
          link.add.item.close();
          modal.close();
          shade.close();
          data.save();
        } else if (state.get.current().group.edit) {
          link.edit.group.close();
          modal.close();
          shade.close();
          data.save();
        } else if (state.get.current().group.add) {
          link.add.group.close();
          modal.close();
          shade.close();
          data.save();
        } else if (state.get.current().modal) {
          modal.close();
          shade.close();
        } else if (state.get.current().edit) {
          link.edit.mode.close();
          data.save();
        };
        data.save();
      };
    }, false);
  };

  bind.ctrAltA = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+a
      if (event.ctrlKey && event.altKey && event.keyCode == 65) {
        if (state.get.current().menu) {
          menu.close();
        };
        if (state.get.current().modal && !state.get.current().link.add) {
          modal.close();
        };
        if (state.get.current().link.edit) {
          link.edit.item.close();
          modal.close();
          shade.close();
          data.save();
        };
        if (state.get.current().group.edit) {
          link.edit.group.close();
          modal.close();
          shade.close();
          data.save();
        };
        if (state.get.current().group.add) {
          link.add.group.close();
          modal.close();
          shade.close();
          data.save();
        };
        if (!state.get.current().link.add) {
          link.add.item.open();
        };
      };
    }, false);
  };

  bind.ctrAltG = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+g
      if (event.ctrlKey && event.altKey && event.keyCode == 71) {
        if (state.get.current().menu) {
          menu.close();
        };
        if (state.get.current().modal && !state.get.current().group.add) {
          modal.close();
        };
        if (state.get.current().link.edit) {
          link.edit.item.close();
          modal.close();
          shade.close();
          data.save();
        };
        if (state.get.current().link.add) {
          link.add.item.close();
          modal.close();
          shade.close();
          data.save();
        };
        if (state.get.current().group.edit) {
          link.edit.group.close();
          modal.close();
          shade.close();
          data.save();
        };
        if (!state.get.current().group.add) {
          link.add.group.open();
        };
      };
    }, false);
  };

  bind.ctrAltD = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+d
      if (event.ctrlKey && event.altKey && event.keyCode == 68) {
        theme.style.toggle();
        control.render.update.control.header();
        control.render.update.control.menu();
        data.save();
      };
    }, false);
  };

  bind.ctrAltM = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+m
      if (event.ctrlKey && event.altKey && event.keyCode == 77) {
        if (state.get.current().link.edit) {
          link.edit.item.close();
          modal.close();
          shade.close();
          data.save();
        };
        if (state.get.current().link.add) {
          link.add.item.close();
          modal.close();
          shade.close();
          data.save();
        };
        if (state.get.current().group.edit) {
          link.edit.group.close();
          modal.close();
          shade.close();
          data.save();
        };
        if (state.get.current().group.add) {
          link.add.group.close();
          modal.close();
          shade.close();
          data.save();
        };
        if (state.get.current().modal) {
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
        if (bookmarks.get().length > 0) {
          link.edit.mode.toggle();
        } else {
          link.edit.mode.close();
        };
        data.save();
      };
    }, false);
  };

  bind.ctrAltR = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+r
      if (state.get.current().theme.accent.random.active && event.ctrlKey && event.altKey && event.keyCode == 82) {
        theme.accent.random();
        control.render.update.control.header();
        control.render.update.control.menu();
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
