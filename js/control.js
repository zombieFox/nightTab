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
      if (state.get().header.clock.active) {
        helper.addClass(html, "is-clock");
      } else {
        helper.removeClass(html, "is-clock");
      };
    };
    var _search = function() {
      if (state.get().header.search.active) {
        helper.addClass(html, "is-search");
      } else {
        helper.removeClass(html, "is-search");
      };
      if (state.get().header.search.grow) {
        helper.addClass(html, "is-search-grow");
      } else {
        helper.removeClass(html, "is-search-grow");
      };
      helper.e(".control-header-search-engine-custom-url").value = state.get().header.search.engine.custom.url;
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
      view[state.get().link.style]();
    };
    var _layout = function() {
      helper.removeClass(html, "is-layout-fludi");
      helper.removeClass(html, "is-layout-wide");
      helper.removeClass(html, "is-layout-thin");
      helper.addClass(html, "is-layout-" + state.get().layout.container);
    };
    var _editAdd = function() {
      if (state.get().header.editAdd.active) {
        helper.addClass(html, "is-search-edit-add");
      } else {
        helper.removeClass(html, "is-search-edit-add");
      };
    };
    var _accent = function() {
      if (state.get().header.accent.active) {
        helper.addClass(html, "is-search-accent");
      } else {
        helper.removeClass(html, "is-search-accent");
      };
    };
    _alignment();
    _edit();
    _clock();
    _search();
    _editAdd();
    _accent();
    _link();
    _layout();
  };

  var _dependents = function(options) {
    var _clock = function() {
      if (state.get().header.clock.active) {
        helper.e(".control-header-clock-show-seconds").disabled = false;
        helper.e(".control-header-clock-show-seperator").disabled = false;
        helper.e(".control-header-clock-24").disabled = false;
      } else {
        helper.e(".control-header-clock-show-seconds").disabled = true;
        helper.e(".control-header-clock-show-seperator").disabled = true;
        helper.e(".control-header-clock-24").disabled = true;
      };
      if (state.get().header.clock.active && state.get().header.clock.hour24) {
        helper.e(".control-header-clock-show-leading-zero").disabled = false;
      } else {
        helper.e(".control-header-clock-show-leading-zero").disabled = true;
      };
      if (state.get().header.clock.active && !state.get().header.clock.hour24) {
        helper.e(".control-header-clock-show-meridiem").disabled = false;
      } else {
        helper.e(".control-header-clock-show-meridiem").disabled = true;
      };
    };
    var _search = function() {
      if (state.get().header.search.active) {
        helper.e(".control-header-search-grow").disabled = false;
        helper.e(".control-header-search-engine-google").disabled = false;
        helper.e(".control-header-search-engine-duckduckgo").disabled = false;
        helper.e(".control-header-search-engine-giphy").disabled = false;
        helper.e(".control-header-search-engine-custom").disabled = false;
      } else {
        helper.e(".control-header-search-grow").disabled = true;
        helper.e(".control-header-search-engine-google").disabled = true;
        helper.e(".control-header-search-engine-duckduckgo").disabled = true;
        helper.e(".control-header-search-engine-giphy").disabled = true;
        helper.e(".control-header-search-engine-custom").disabled = true;
      };
      if (state.get().header.search.active && state.get().header.search.engine.selected === "custom") {
        helper.e("[for=control-header-search-engine-custom-url]").removeAttribute("disabled");
        helper.e(".control-header-search-engine-custom-url").disabled = false;
      } else {
        helper.e("[for=control-header-search-engine-custom-url]").setAttribute("disabled", "");
        helper.e(".control-header-search-engine-custom-url").disabled = true;
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

    helper.e(".control-layout-theme").addEventListener("change", function() {
      state.change({
        path: "layout.theme",
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
    helper.eA("input[name='control-link-style']").forEach(function(arrayItem, index) {
      arrayItem.addEventListener("change", function() {
        state.change({
          path: "link.style",
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
    helper.e(".control-header-search-active").addEventListener("change", function() {
      state.change({
        path: "header.search.active",
        value: this.checked
      });
      render();
      _dependents();
      header.render();
      data.save();
    }, false);
    helper.e(".control-header-search-grow").addEventListener("change", function() {
      state.change({
        path: "header.search.grow",
        value: this.checked
      });
      render();
      _dependents();
      header.render();
      data.save();
    }, false);
    helper.eA("input[name='control-header-search-engine']").forEach(function(arrayItem, index) {
      arrayItem.addEventListener("change", function() {
        state.change({
          path: "header.search.engine.selected",
          value: this.value
        });
        render();
        _dependents();
        search.update();
        data.save();
      }, false);
    });
    helper.e(".control-header-search-engine-custom-url").addEventListener("input", function() {
      state.change({
        path: "header.search.engine.custom.url",
        value: this.value
      });
      search.update();
      data.save();
    });
    helper.e(".control-header-clock-active").addEventListener("change", function() {
      state.change({
        path: "header.clock.active",
        value: this.checked
      });
      render();
      _dependents();
      clock.clear();
      clock.render();
      header.render();
      data.save();
    }, false);
    helper.e(".control-header-clock-show-seconds").addEventListener("change", function() {
      state.change({
        path: "header.clock.show.seconds",
        value: this.checked
      });
      clock.clear();
      clock.render();
      header.render();
      data.save();
    }, false);
    helper.e(".control-header-clock-show-seperator").addEventListener("change", function() {
      state.change({
        path: "header.clock.show.seperator",
        value: this.checked
      });
      clock.clear();
      clock.render();
      header.render();
      data.save();
    }, false);
    helper.e(".control-header-clock-24").addEventListener("change", function() {
      state.change({
        path: "header.clock.hour24",
        value: this.checked
      });
      _dependents();
      clock.clear();
      clock.render();
      header.render();
      data.save();
    }, false);
    helper.e(".control-header-clock-show-leading-zero").addEventListener("change", function() {
      state.change({
        path: "header.clock.show.leadingZero",
        value: this.checked
      });
      _dependents();
      clock.clear();
      clock.render();
      header.render();
      data.save();
    }, false);
    helper.e(".control-header-clock-show-meridiem").addEventListener("change", function() {
      state.change({
        path: "header.clock.show.meridiem",
        value: this.checked
      });
      clock.clear();
      clock.render();
      header.render();
      data.save();
    }, false);
    helper.e(".control-header-edit-add-active").addEventListener("change", function() {
      state.change({
        path: "header.editAdd.active",
        value: this.checked
      });
      render();
      header.render();
      data.save();
    }, false);
    helper.e(".control-header-accent-active").addEventListener("change", function() {
      state.change({
        path: "header.accent.active",
        value: this.checked
      });
      render();
      header.render();
      data.save();
    }, false);
    helper.eA("input[name='control-layout-alignment']").forEach(function(arrayItem, index) {
      arrayItem.addEventListener("change", function() {
        state.change({
          path: "layout.alignment",
          value: this.value
        });
        render();
        data.save();
      }, false);
    });
    helper.eA("input[name='control-layout-container']").forEach(function(arrayItem, index) {
      arrayItem.addEventListener("change", function() {
        state.change({
          path: "layout.container",
          value: this.value
        });
        render();
        data.save();
      }, false);
    });
  };

  var update = function() {
    helper.e(".control-edit").checked = state.get().edit.active;
    helper.e(".control-layout-theme").value = helper.rgbToHex(state.get().layout.theme);
    helper.e(".control-link-new-tab").value = state.get().link.style.newTab;
    helper.e(".control-link-style-" + state.get().link.style).checked = true;
    helper.e(".control-link-sort-" + state.get().link.sort).checked = true;
    helper.e(".control-header-search-active").checked = state.get().header.search.active;
    helper.e(".control-header-search-grow").checked = state.get().header.search.grow;
    helper.e(".control-header-search-engine-" + state.get().header.search.engine.selected).checked = true;
    helper.e(".control-header-search-engine-custom-url").value = state.get().header.search.engine.custom.url;
    helper.e(".control-header-clock-active").checked = state.get().header.clock.active;
    helper.e(".control-header-clock-show-seconds").checked = state.get().header.clock.show.seconds;
    helper.e(".control-header-clock-show-seperator").checked = state.get().header.clock.show.seperator;
    helper.e(".control-header-clock-24").checked = state.get().header.clock.hour24;
    helper.e(".control-header-clock-show-leading-zero").checked = state.get().header.clock.show.leadingZero;
    helper.e(".control-header-clock-show-meridiem").checked = state.get().header.clock.show.meridiem;
    helper.e(".control-header-edit-add-active").checked = state.get().header.editAdd.active;
    helper.e(".control-header-accent-active").checked = state.get().header.accent.active;
    helper.e(".control-layout-alignment-" + state.get().layout.alignment).checked = true;
    helper.e(".control-layout-container-" + state.get().layout.container).checked = true;
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
