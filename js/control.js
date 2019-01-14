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
    var _date = function() {
      if (state.get().header.date.show.date || state.get().header.date.show.day || state.get().header.date.show.month || state.get().header.date.show.year) {
        helper.addClass(html, "is-date");
      } else {
        helper.removeClass(html, "is-date");
      };
    };
    var _clock = function() {
      if (state.get().header.clock.show.seconds || state.get().header.clock.show.minutes || state.get().header.clock.show.hours) {
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
      helper.removeClass(html, "is-layout-fluid");
      helper.removeClass(html, "is-layout-wide");
      helper.removeClass(html, "is-layout-thin");
      helper.addClass(html, "is-layout-" + state.get().layout.container);
      if (state.get().layout.scrollPastEnd) {
        helper.addClass(html, "is-scroll-past-end");
      } else {
        helper.removeClass(html, "is-scroll-past-end");
      };
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
    _date();
    _clock();
    _search();
    _editAdd();
    _accent();
    _link();
    _layout();
  };

  var dependents = function() {
    var _edit = function() {
      if (bookmarks.get().length > 0) {
        helper.e(".control-edit").disabled = false;
      } else {
        helper.e(".control-edit").disabled = true;
        helper.e(".control-edit").checked = false;
        state.change({
          path: "edit.active",
          value: false
        });
      };
    };
    var _date = function() {
      var activeCount = 0;
      var toCheck = [state.get().header.date.show.date, state.get().header.date.show.day, state.get().header.date.show.month, state.get().header.date.show.year];
      toCheck.forEach(function(arrayItem, index) {
        if (arrayItem == true) {
          activeCount++;
        };
      });
      if (activeCount >= 2 && (state.get().header.date.show.date || state.get().header.date.show.day || state.get().header.date.show.month || state.get().header.date.show.year)) {
        helper.e(".control-header-date-show-separator").disabled = false;
      } else {
        helper.e(".control-header-date-show-separator").disabled = true;
      };
      if (state.get().header.date.show.day || state.get().header.date.show.month) {
        helper.e(".control-header-date-character-length-short").disabled = false;
        helper.e(".control-header-date-character-length-long").disabled = false;
      } else {
        helper.e(".control-header-date-character-length-short").disabled = true;
        helper.e(".control-header-date-character-length-long").disabled = true;
      };
    };
    var _clock = function() {
      var activeCount = 0;
      var toCheck = [state.get().header.clock.show.seconds, state.get().header.clock.show.minutes, state.get().header.clock.show.hours];
      toCheck.forEach(function(arrayItem, index) {
        if (arrayItem == true) {
          activeCount++;
        };
      });
      if (activeCount >= 2 && (state.get().header.clock.show.seconds || state.get().header.clock.show.minutes || state.get().header.clock.show.hours)) {
        helper.e(".control-header-clock-show-separator").disabled = false;
      } else {
        helper.e(".control-header-clock-show-separator").disabled = true;
      };
      if (state.get().header.clock.show.seconds || state.get().header.clock.show.minutes || state.get().header.clock.show.hours) {
        helper.e(".control-header-clock-24").disabled = false;
        helper.e(".control-header-clock-show-meridiem").disabled = false;
      } else {
        helper.e(".control-header-clock-24").disabled = true;
        helper.e(".control-header-clock-show-meridiem").disabled = true;
      };
      if ((state.get().header.clock.show.seconds || state.get().header.clock.show.minutes || state.get().header.clock.show.hours) && !state.get().header.clock.hour24) {
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
        helper.e(".control-header-search-engine-label").removeAttribute("disabled");
      } else {
        helper.e(".control-header-search-grow").disabled = true;
        helper.e(".control-header-search-engine-google").disabled = true;
        helper.e(".control-header-search-engine-duckduckgo").disabled = true;
        helper.e(".control-header-search-engine-giphy").disabled = true;
        helper.e(".control-header-search-engine-custom").disabled = true;
        helper.e(".control-header-search-engine-label").setAttribute("disabled", "");
      };
      if (state.get().header.search.active && state.get().header.search.engine.selected === "custom") {
        helper.e("[for=control-header-search-engine-custom-url]").removeAttribute("disabled");
        helper.e(".control-header-search-engine-custom-url").disabled = false;
      } else {
        helper.e("[for=control-header-search-engine-custom-url]").setAttribute("disabled", "");
        helper.e(".control-header-search-engine-custom-url").disabled = true;
      };
    };
    var _theme = function() {
      if (state.get().layout.theme.random.active) {
        helper.eA("input[name='control-layout-theme-style']").forEach(function(arrayItem, index) {
          arrayItem.disabled = false;
        });
      } else {
        helper.eA("input[name='control-layout-theme-style']").forEach(function(arrayItem, index) {
          arrayItem.disabled = true;
        });
      };
    };
    _edit();
    _date();
    _clock();
    _search();
    _theme();
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
      dependents();
      data.save();
    }, false);
    helper.e(".control-layout-theme").addEventListener("change", function() {
      state.change({
        path: "layout.theme.current",
        value: helper.hexToRgb(this.value)
      });
      theme.render();
      data.save();
    }, false);
    helper.e(".control-layout-theme-random").addEventListener("change", function() {
      state.change({
        path: "layout.theme.random.active",
        value: this.checked
      });
      theme.render();
      dependents();
      data.save();
    }, false);
    helper.eA("input[name='control-layout-theme-style']").forEach(function(arrayItem, index) {
      arrayItem.addEventListener("change", function() {
        state.change({
          path: "layout.theme.random.style",
          value: this.value
        });
        render();
        data.save();
      }, false);
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
      dependents();
      header.render();
      data.save();
    }, false);
    helper.e(".control-header-search-grow").addEventListener("change", function() {
      state.change({
        path: "header.search.grow",
        value: this.checked
      });
      render();
      dependents();
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
        dependents();
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
    }, false);
    helper.e(".control-header-date-show-date").addEventListener("change", function() {
      state.change({
        path: "header.date.show.date",
        value: this.checked
      });
      render();
      dependents();
      date.clear();
      date.render();
      header.render();
      data.save();
    }, false);
    helper.e(".control-header-date-show-day").addEventListener("change", function() {
      state.change({
        path: "header.date.show.day",
        value: this.checked
      });
      render();
      dependents();
      date.clear();
      date.render();
      header.render();
      data.save();
    }, false);
    helper.e(".control-header-date-show-month").addEventListener("change", function() {
      state.change({
        path: "header.date.show.month",
        value: this.checked
      });
      render();
      dependents();
      date.clear();
      date.render();
      header.render();
      data.save();
    }, false);
    helper.e(".control-header-date-show-year").addEventListener("change", function() {
      state.change({
        path: "header.date.show.year",
        value: this.checked
      });
      render();
      dependents();
      date.clear();
      date.render();
      header.render();
      data.save();
    }, false);
    helper.e(".control-header-date-show-separator").addEventListener("change", function() {
      state.change({
        path: "header.date.show.separator",
        value: this.checked
      });
      render();
      dependents();
      date.clear();
      date.render();
      header.render();
      data.save();
    }, false);
    helper.eA("input[name='control-header-date-character-length']").forEach(function(arrayItem, index) {
      arrayItem.addEventListener("change", function() {
        state.change({
          path: "header.date.characterLength",
          value: this.value
        });
        render();
        date.clear();
        date.render();
        header.render();
        data.save();
      }, false);
    });
    helper.e(".control-header-clock-show-seconds").addEventListener("change", function() {
      state.change({
        path: "header.clock.show.seconds",
        value: this.checked
      });
      render();
      dependents();
      clock.clear();
      clock.render();
      header.render();
      data.save();
    }, false);
    helper.e(".control-header-clock-show-minutes").addEventListener("change", function() {
      state.change({
        path: "header.clock.show.minutes",
        value: this.checked
      });
      render();
      dependents();
      clock.clear();
      clock.render();
      header.render();
      data.save();
    }, false);
    helper.e(".control-header-clock-show-hours").addEventListener("change", function() {
      state.change({
        path: "header.clock.show.hours",
        value: this.checked
      });
      render();
      dependents();
      clock.clear();
      clock.render();
      header.render();
      data.save();
    }, false);
    helper.e(".control-header-clock-show-separator").addEventListener("change", function() {
      state.change({
        path: "header.clock.show.separator",
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
      dependents();
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
        header.render();
        data.save();
      }, false);
    });
    helper.e(".control-layout-scroll-past-end").addEventListener("change", function() {
      state.change({
        path: "layout.scrollPastEnd",
        value: this.checked
      });
      render();
      data.save();
    }, false);
  };

  var update = function() {
    helper.e(".control-edit").checked = state.get().edit.active;
    helper.e(".control-layout-theme").value = helper.rgbToHex(state.get().layout.theme.current);
    helper.e(".control-layout-theme-random").checked = state.get().layout.theme.random.active;
    helper.e(".control-layout-theme-style-" + state.get().layout.theme.random.style).checked = true;
    helper.e(".control-link-new-tab").value = state.get().link.style.newTab;
    helper.e(".control-link-style-" + state.get().link.style).checked = true;
    helper.e(".control-link-sort-" + state.get().link.sort).checked = true;
    helper.e(".control-header-search-active").checked = state.get().header.search.active;
    helper.e(".control-header-search-grow").checked = state.get().header.search.grow;
    helper.e(".control-header-search-engine-" + state.get().header.search.engine.selected).checked = true;
    helper.e(".control-header-search-engine-custom-url").value = state.get().header.search.engine.custom.url;
    helper.e(".control-header-date-show-date").checked = state.get().header.date.show.date;
    helper.e(".control-header-date-show-day").checked = state.get().header.date.show.day;
    helper.e(".control-header-date-show-month").checked = state.get().header.date.show.month;
    helper.e(".control-header-date-show-year").checked = state.get().header.date.show.year;
    helper.e(".control-header-date-show-separator").checked = state.get().header.date.show.separator;
    helper.e(".control-header-clock-show-seconds").checked = state.get().header.clock.show.seconds;
    helper.e(".control-header-clock-show-minutes").checked = state.get().header.clock.show.minutes;
    helper.e(".control-header-clock-show-hours").checked = state.get().header.clock.show.hours;
    helper.e(".control-header-clock-show-separator").checked = state.get().header.clock.show.separator;
    helper.e(".control-header-clock-24").checked = state.get().header.clock.hour24;
    helper.e(".control-header-clock-show-meridiem").checked = state.get().header.clock.show.meridiem;
    helper.e(".control-header-edit-add-active").checked = state.get().header.editAdd.active;
    helper.e(".control-header-accent-active").checked = state.get().header.accent.active;
    helper.e(".control-header-date-character-length-" + state.get().header.date.characterLength).checked = true;
    helper.e(".control-layout-alignment-" + state.get().layout.alignment).checked = true;
    helper.e(".control-layout-container-" + state.get().layout.container).checked = true;
    helper.e(".control-layout-scroll-past-end").checked = state.get().layout.scrollPastEnd;
  };

  var init = function() {
    _bind();
    update();
    dependents();
    render();
  };

  // exposed methods
  return {
    init: init,
    render: render,
    dependents: dependents,
    update: update
  };

})();
