var control = (function() {

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
        object: state.get(),
        newValue: options.value
      });
      console.log(state.get());
    };
  };

  var render = function() {
    var html = helper.e("html");
    var _edit = function() {
      if (state.get().edit.active) {
        helper.addClass(html, "is-edit");
      } else {
        helper.removeClass(html, "is-edit");
      };
    };
    var _clock = function() {
      if (state.get().clock.active) {
        helper.addClass(html, "is-clock");
      } else {
        helper.removeClass(html, "is-clock");
      };
    };
    var _search = function() {
      if (state.get().search.active) {
        helper.addClass(html, "is-search");
      } else {
        helper.removeClass(html, "is-search");
      };
      if (state.get().search.grow) {
        helper.addClass(html, "is-search-grow");
      } else {
        helper.removeClass(html, "is-search-grow");
      };
      helper.e(".control-search-engine-custom-url").value = state.get().search.engine.custom.url;
    };
    var _alignment = function() {
      helper.removeClass(html, "is-alignment-left");
      helper.removeClass(html, "is-alignment-center");
      helper.removeClass(html, "is-alignment-right");
      helper.addClass(html, "is-alignment-" + state.get().layout.alignment);
    };
    var _link = function() {
      var view = {
        block: function() {
          helper.addClass(html, "is-link-block");
          helper.removeClass(html, "is-link-list");
        },
        list: function() {
          helper.removeClass(html, "is-link-block");
          helper.addClass(html, "is-link-list");
        }
      };
      view[state.get().link.view]();
    };
    var _layout = function() {
      helper.removeClass(html, "is-layout-fludi");
      helper.removeClass(html, "is-layout-wide");
      helper.removeClass(html, "is-layout-thin");
      helper.addClass(html, "is-layout-" + state.get().layout.containerWidth);
    };
    _alignment();
    _edit();
    _clock();
    _search();
    _link();
    _layout();
  };

  var _dependents = function(options) {
    var _clock = function() {
      if (state.get().clock.active) {
        helper.e(".control-clock-seconds").disabled = false;
        helper.e(".control-clock-seperator").disabled = false;
        helper.e(".control-clock-24").disabled = false;
      } else {
        helper.e(".control-clock-seconds").disabled = true;
        helper.e(".control-clock-seperator").disabled = true;
        helper.e(".control-clock-24").disabled = true;
      };
      if (state.get().clock.active && state.get().clock.hour24) {
        helper.e(".control-clock-leading-zero").disabled = false;
      } else {
        helper.e(".control-clock-leading-zero").disabled = true;
      };
      if (state.get().clock.active && !state.get().clock.hour24) {
        helper.e(".control-clock-meridiem").disabled = false;
      } else {
        helper.e(".control-clock-meridiem").disabled = true;
      };
    };
    var _search = function() {
      if (state.get().search.active) {
        helper.e(".control-search-grow").disabled = false;
        helper.e(".control-search-engine-google").disabled = false;
        helper.e(".control-search-engine-giphy").disabled = false;
        helper.e(".control-search-engine-duckduckgo").disabled = false;
        helper.e(".control-search-engine-custom").disabled = false;
      } else {
        helper.e(".control-search-grow").disabled = true;
        helper.e(".control-search-engine-google").disabled = true;
        helper.e(".control-search-engine-giphy").disabled = true;
        helper.e(".control-search-engine-duckduckgo").disabled = true;
        helper.e(".control-search-engine-custom").disabled = true;
      };
      if (state.get().search.active && state.get().search.engine.selected === "custom") {
        helper.e("[for=control-search-engine-custom-url]").removeAttribute("disabled");
        helper.e(".control-search-engine-custom-url").disabled = false;
      } else {
        helper.e("[for=control-search-engine-custom-url]").setAttribute("disabled", "");
        helper.e(".control-search-engine-custom-url").disabled = true;
      };
    };
    _clock();
    _search();
  };

  var _bind = function() {
    helper.e(".control-menu").addEventListener("click", function() {
      menu.toggle();
    }, false);

    helper.e(".control-add").addEventListener("click", function() {
      link.add();
    }, false);

    helper.e(".control-edit").addEventListener("change", function() {
      state.change({
        path: "edit.active",
        value: this.checked
      });
      render();
      data.save();
    }, false);

    helper.e(".control-clock-active").addEventListener("change", function() {
      state.change({
        path: "clock.active",
        value: this.checked
      });
      render();
      _dependents();
      clock.clear();
      clock.render();
      header.render();
      data.save();
    }, false);

    helper.e(".control-clock-seconds").addEventListener("change", function() {
      state.change({
        path: "clock.show.seconds",
        value: this.checked
      });
      clock.clear();
      clock.render();
      header.render();
      data.save();
    }, false);

    helper.e(".control-clock-seperator").addEventListener("change", function() {
      state.change({
        path: "clock.show.seperator",
        value: this.checked
      });
      clock.clear();
      clock.render();
      header.render();
      data.save();
    }, false);

    helper.e(".control-clock-24").addEventListener("change", function() {
      state.change({
        path: "clock.hour24",
        value: this.checked
      });
      _dependents();
      clock.clear();
      clock.render();
      header.render();
      data.save();
    }, false);

    helper.e(".control-clock-leading-zero").addEventListener("change", function() {
      state.change({
        path: "clock.show.leadingZero",
        value: this.checked
      });
      _dependents();
      clock.clear();
      clock.render();
      header.render();
      data.save();
    }, false);

    helper.e(".control-clock-meridiem").addEventListener("change", function() {
      state.change({
        path: "clock.show.meridiem",
        value: this.checked
      });
      clock.clear();
      clock.render();
      header.render();
      data.save();
    }, false);

    helper.eA("input[name='control-link-view']").forEach(function(arrayItem, index) {
      arrayItem.addEventListener("change", function() {
        state.change({
          path: "link.view",
          value: this.value
        });
        render();
        data.save();
      }, false);
    });

    helper.eA("input[name='control-link-sort']").forEach(function(arrayItem, index) {
      arrayItem.addEventListener("change", function() {
        state.change({
          path: "link.sort",
          value: this.value
        });
        link.clear();
        link.render();
        data.save();
      }, false);
    });

    helper.eA("input[name='control-alignment']").forEach(function(arrayItem, index) {
      arrayItem.addEventListener("change", function() {
        state.change({
          path: "layout.alignment",
          value: this.value
        });
        render();
        data.save();
      }, false);
    });

    helper.e(".control-search-active").addEventListener("change", function() {
      state.change({
        path: "search.active",
        value: this.checked
      });
      render();
      _dependents();
      header.render();
      data.save();
    }, false);

    helper.e(".control-search-grow").addEventListener("change", function() {
      state.change({
        path: "search.grow",
        value: this.checked
      });
      render();
      _dependents();
      header.render();
      data.save();
    }, false);

    helper.eA("input[name='control-search-engine']").forEach(function(arrayItem, index) {
      arrayItem.addEventListener("change", function() {
        state.change({
          path: "search.engine.selected",
          value: this.value
        });
        render();
        _dependents();
        search.update();
        data.save();
      }, false);
    });

    helper.e(".control-search-engine-custom-url").addEventListener("input", function() {
      state.change({
        path: "search.engine.custom.url",
        value: this.value
      });
      search.update();
      data.save();
    });

    helper.e(".control-theme").addEventListener("change", function() {
      state.change({
        path: "theme",
        value: helper.hexToRgb(this.value)
      });
      theme.render();
      data.save();
    });

    helper.e(".control-link-new-tab").addEventListener("change", function() {
      state.change({
        path: "link.newTab",
        value: this.checked
      });
      link.clear();
      link.render();
      data.save();
    });

    helper.eA("input[name='control-container-width']").forEach(function(arrayItem, index) {
      arrayItem.addEventListener("change", function() {
        state.change({
          path: "layout.containerWidth",
          value: this.value
        });
        render();
        data.save();
        header.render();
      }, false);
    });
  };

  var update = function() {
    helper.e(".control-search-active").checked = state.get().search.active;
    helper.e(".control-search-grow").checked = state.get().search.grow;
    helper.e(".control-clock-active").checked = state.get().clock.active;
    helper.e(".control-clock-seconds").checked = state.get().clock.show.seconds;
    helper.e(".control-clock-seperator").checked = state.get().clock.show.seperator;
    helper.e(".control-clock-meridiem").checked = state.get().clock.show.meridiem;
    helper.e(".control-clock-24").checked = state.get().clock.hour24;
    helper.e(".control-clock-leading-zero").checked = state.get().clock.show.leadingZero;
    helper.e(".control-edit").checked = state.get().edit.active;
    helper.e(".control-link-view-" + state.get().link.view).checked = true;
    helper.e(".control-link-sort-" + state.get().link.sort).checked = true;
    helper.e(".control-alignment-" + state.get().layout.alignment).checked = true;
    helper.e(".control-search-engine-" + state.get().search.engine.selected).checked = true;
    helper.e(".control-search-engine-custom-url").value = state.get().search.engine.custom.url;
    helper.e(".control-link-new-tab").value = state.get().link.newTab;
    helper.e(".control-container-width-" + state.get().layout.containerWidth).checked = true;
  };

  var init = function() {
    _bind();
    update();
    _dependents();
    render();
  };

  // exposed methods
  return {
    init: init,
    update: update,
    render: render
  };

})();
