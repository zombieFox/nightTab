var control = (function() {

  var state = {
    edit: false,
    show: {
      clock: true,
      search: true,
    }
  };

  var get = function() {
    return state;
  };

  var toggle = function(override) {
    var options = {
      path: null,
      value: null
    };
    if (override) {
      options = helper.applyOptions(options, override);
    };
    if (options.path != null) {
      helper.setObject({
        path: options.path,
        object: state,
        newValue: options.value
      });
    };
  };

  var render = function() {
    var _renderState = function() {
      var html = helper.e("html");
      for (var key in state) {
        if (typeof state[key] == "boolean" && state[key]) {
          helper.addClass(html, "is-" + key);
        } else {
          helper.removeClass(html, "is-" + key);
        };
      };
    };
    var _renderShow = function() {
      for (var key in state.show) {
        var headElement = helper.e(".control-" + key);
        if (state.show[key]) {
          helper.removeClass(headElement, "is-hidden");
        } else {
          helper.addClass(headElement, "is-hidden");
        };
      };
    };
    _renderState();
    _renderShow();
  };

  var _bind = function() {
    helper.e(".control-toggle-menu").addEventListener("click", function() {
      menu.toggle();
      menu.render();
    }, false);

    helper.e(".control-toggle-search").addEventListener("change", function() {
      toggle({
        path: "show.search",
        value: this.checked
      });
      render({
        path: "show.search",
        element: ".head-search"
      });
      data.save();
    }, false);

    helper.e(".control-toggle-clock").addEventListener("change", function() {
      toggle({
        path: "show.clock",
        value: this.checked
      });
      render({
        path: "show.clock",
        element: ".head-clock"
      });
      clock.clear();
      clock.render();
      data.save();
    }, false);

    helper.e(".control-toggle-clock-seconds").addEventListener("change", function() {
      clock.toggle({
        path: "show.seconds",
        value: this.checked
      });
      clock.clear();
      clock.render();
      data.save();
    }, false);

    helper.e(".control-toggle-clock-seperator").addEventListener("change", function() {
      clock.toggle({
        path: "show.seperator",
        value: this.checked
      });
      clock.clear();
      clock.render();
      data.save();
    }, false);

    helper.e(".control-toggle-clock-24").addEventListener("change", function() {
      clock.toggle({
        path: "hour24",
        value: this.checked
      });
      clock.clear();
      clock.render();
      data.save();
    }, false);

    helper.eA("input[name='control-layout']").forEach(function(arrayItem, index) {
      arrayItem.addEventListener("change", function() {
        layout.toggle({
          path: "show." + this.value,
          value: this.checked
        });
        layout.render();
        data.save();
      }, false);
    });

    helper.e(".control-add").addEventListener("click", function() {
      links.add();
    }, false);

    helper.e(".control-toggle-edit").addEventListener("change", function() {
      toggle({
        path: "edit",
        value: this.checked
      });
      render();
      data.save();
    }, false);

    // var controlSortName = helper.e(".control-sort-name");
    // var controlSortLetter = helper.e(".control-sort-letter");
    // controlSortName.addEventListener("click", function() {
    //   links.sort("name");
    //   data.save();
    // }, false);
    // controlSortLetter.addEventListener("click", function() {
    //   links.sort("letter");
    //   data.save();
    // }, false);
  };

  var _update = function() {
    helper.e(".control-toggle-search").checked = state.show.search;
    helper.e(".control-toggle-clock").checked = state.show.clock;
    helper.e(".control-toggle-clock-seconds").checked = clock.get().show.seconds;
    helper.e(".control-toggle-clock-seperator").checked = clock.get().show.seperator;
    helper.e(".control-toggle-clock-24").checked = clock.get().hour24;
    helper.e(".control-toggle-edit").checked = state.edit;
    for (var key in layout.get().show) {
      if (layout.get().show[key]) {
        helper.e(".control-layout-" + key).checked = layout.get().show[key]
      };
    };
  };

  var restore = function(object) {
    if (object) {
      state = object;
    };
  };

  var init = function() {
    _bind();
    _update();
    render();
  };

  // exposed methods
  return {
    init: init,
    get: get,
    restore: restore,
    render: render
  };

})();
