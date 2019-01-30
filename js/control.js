var control = (function() {

  var _allControl = [{
    element: helper.e(".control-menu"),
    type: "button",
    func: function() {
      menu.toggle();
    }
  }, {
    element: helper.e(".control-add"),
    type: "button",
    func: function() {
      link.add();
    }
  }, {
    element: helper.e(".control-edit"),
    path: "bookmarks.edit",
    type: "checkbox",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-theme-current"),
    path: "layout.theme.current",
    type: "color",
    func: function() {
      theme.render();
    }
  }, {
    element: helper.e(".control-header-clock-show-hours"),
    path: "header.clock.show.hours",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      clock.clear();
      clock.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-clock-show-minutes"),
    path: "header.clock.show.minutes",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      clock.clear();
      clock.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-clock-show-seconds"),
    path: "header.clock.show.seconds",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      clock.clear();
      clock.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-clock-show-separator"),
    path: "header.clock.show.separator",
    type: "checkbox",
    func: function() {
      clock.clear();
      clock.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-clock-24"),
    path: "header.clock.hour24",
    type: "checkbox",
    func: function() {
      dependents();
      clock.clear();
      clock.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-clock-show-meridiem"),
    path: "header.clock.show.meridiem",
    type: "checkbox",
    func: function() {
      dependents();
      clock.clear();
      clock.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-date-show-day"),
    path: "header.date.show.day",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      date.clear();
      date.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-date-show-date"),
    path: "header.date.show.date",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      date.clear();
      date.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-date-show-month"),
    path: "header.date.show.month",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      date.clear();
      date.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-date-show-year"),
    path: "header.date.show.year",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      date.clear();
      date.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-date-show-separator"),
    path: "header.date.show.separator",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      date.clear();
      date.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-date-character-length-short"),
    path: "header.date.character.length",
    type: "radio",
    func: function() {
      render();
      date.clear();
      date.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-date-character-length-long"),
    path: "header.date.character.length",
    type: "radio",
    func: function() {
      render();
      date.clear();
      date.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-search-show"),
    path: "header.search.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      header.render();
    }
  }, {
    element: helper.e(".control-header-search-grow"),
    path: "header.search.grow",
    type: "checkbox",
    func: function() {
      render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-search-focus"),
    path: "header.search.focus",
    type: "checkbox",
    func: function() {}
  }, {
    element: helper.e(".control-header-search-engine-google"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render();
      dependents();
      search.update();
    }
  }, {
    element: helper.e(".control-header-search-engine-duckduckgo"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render();
      dependents();
      search.update();
    }
  }, {
    element: helper.e(".control-header-search-engine-giphy"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render();
      dependents();
      search.update();
    }
  }, {
    element: helper.e(".control-header-search-engine-custom"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render();
      dependents();
      search.update();
    }
  }, {
    element: helper.e(".control-header-search-engine-custom-url"),
    path: "header.accent.show",
    type: "checkbox",
    func: function() {
      search.update();
    }
  }, {
    element: helper.e(".control-layout-alignment-horizontal-left"),
    path: "header.alignment.horizontal",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-horizontal-center"),
    path: "header.alignment.horizontal",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-horizontal-right"),
    path: "header.alignment.horizontal",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-vertical-top"),
    path: "header.alignment.vertical",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-vertical-center"),
    path: "header.alignment.vertical",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-vertical-bottom"),
    path: "header.alignment.vertical",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-bookmarks-show-link"),
    path: "bookmarks.show.link",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      header.render();
    }
  }, {
    element: helper.e(".control-bookmarks-show-name"),
    path: "bookmarks.show.name",
    type: "checkbox",
    func: function() {
      render();
      dependents();
    }
  }, {
    element: helper.e(".control-bookmarks-show-url"),
    path: "bookmarks.show.url",
    type: "checkbox",
    func: function() {
      render();
      dependents();
    }
  }, {
    element: helper.e(".control-bookmarks-new-tab"),
    path: "bookmarks.newTab",
    type: "checkbox",
    func: function() {
      link.clear();
      link.render();
    }
  }, {
    element: helper.e(".control-bookmarks-style-block"),
    path: "bookmarks.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-bookmarks-style-list"),
    path: "bookmarks.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-bookmarks-sort-none"),
    path: "bookmarks.sort",
    type: "radio",
    func: function() {
      link.clear();
      link.render();
    }
  }, {
    element: helper.e(".control-bookmarks-sort-name"),
    path: "bookmarks.sort",
    type: "radio",
    func: function() {
      link.clear();
      link.render();
    }
  }, {
    element: helper.e(".control-bookmarks-sort-letter"),
    path: "bookmarks.sort",
    type: "radio",
    func: function() {
      link.clear();
      link.render();
    }
  }, {
    element: helper.e(".control-layout-width-fluid"),
    path: "layout.width",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-width-wide"),
    path: "layout.width",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-width-thin"),
    path: "layout.width",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-scroll-past-end"),
    path: "layout.scrollPastEnd",
    type: "checkbox",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-theme-random-active"),
    path: "layout.theme.random.active",
    type: "checkbox",
    func: function() {
      theme.render();
    }
  }, {
    element: helper.e(".control-layout-theme-style-any"),
    path: "layout.theme.random.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-theme-style-light"),
    path: "layout.theme.random.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-theme-style-dark"),
    path: "layout.theme.random.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-theme-style-pastel"),
    path: "layout.theme.random.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-theme-style-saturated"),
    path: "layout.theme.random.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-background-image-show"),
    path: "background.image.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      background.render();
    }
  }, {
    element: helper.e(".control-background-image-url"),
    path: "background.image.url",
    type: "text",
    func: function() {
      background.render();
    }
  }, {
    element: helper.e(".control-background-image-opacity"),
    path: "background.image.opacity",
    type: "range",
    valueMod: ["reverse", "float"],
    func: function() {
      background.render();
    }
  }, {
    element: helper.e(".control-background-image-grayscale"),
    path: "background.image.grayscale",
    type: "range",
    valueMod: ["float"],
    func: function() {
      background.render();
    }
  }, {
    element: helper.e(".control-background-image-blur"),
    path: "background.image.blur",
    type: "range",
    func: function() {
      background.render();
    }
  }, {
    element: helper.e(".control-background-image-accent"),
    path: "background.image.accent",
    type: "range",
    valueMod: ["float"],
    func: function() {
      background.render();
    }
  }];

  var _bind = function() {
    var eventType = {
      button: "click",
      checkbox: "change",
      radio: "change",
      text: "input",
      range: "input",
      color: "change"
    };
    var valueType = {
      checkbox: function(object) {
        return object.element.checked;
      },
      radio: function(object) {
        return object.element.value;
      },
      text: function(object) {
        return object.element.value;
      },
      range: function(object) {
        return parseInt(object.element.value, 10);
      },
      color: function(object) {
        return helper.hexToRgb(object.element.value);
      }
    };
    var valueMod = {
      reverse: function(value, object) {
        return parseInt(object.element.max, 10) - value;
      },
      float: function(value, object) {
        return value / 100;
      }
    };
    var toggleValue = function(object) {
      if (helper.getObject({
          object: state.get(),
          path: object.path
        })) {
        state.change({
          path: object.path,
          value: false
        });
      } else {
        state.change({
          path: object.path,
          value: true
        });
      };
    };
    var changeValue = function(object) {
      if (object.path) {
        var newValue = valueType[object.type](object);
        if (object.valueMod) {
          object.valueMod.forEach(function(arrayItem, index) {
            newValue = valueMod[arrayItem](newValue, object);
          });
        };
        helper.setObject({
          object: state.get(),
          path: object.path,
          newValue: newValue
        });
        console.log(
          object.path,
          helper.getObject({
            object: state.get(),
            path: object.path
          })
        );
      };
    };
    var bindControl = function(object) {
      var action = {
        input: function(object) {
          changeValue(object);
          if (object.func) {
            object.func();
          };
        },
        button: function(object) {
          if (object.func) {
            object.func();
          };
          // toggleValue(object);
        }
      };
      object.element.addEventListener(eventType[object.type], function() {
        action[object.element.tagName.toLowerCase()](object);
        data.save();
      }, false);
    };
    _allControl.forEach(function(arrayItem, index) {
      bindControl(arrayItem);
    });
  };

  var render = function() {
    var html = helper.e("html");
    var _edit = function() {
      if (state.get().bookmarks.edit) {
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
      if (state.get().header.search.show) {
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
      helper.removeClass(html, "is-alignment-horizontal-left");
      helper.removeClass(html, "is-alignment-horizontal-center");
      helper.removeClass(html, "is-alignment-horizontal-right");
      helper.removeClass(html, "is-alignment-vertical-top");
      helper.removeClass(html, "is-alignment-vertical-center");
      helper.removeClass(html, "is-alignment-vertical-bottom");
      helper.addClass(html, "is-alignment-horizontal-" + state.get().header.alignment.horizontal);
      helper.addClass(html, "is-alignment-vertical-" + state.get().header.alignment.vertical);
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
      view[state.get().bookmarks.style]();
      if (state.get().bookmarks.show.link) {
        helper.addClass(html, "is-link");
      } else {
        helper.removeClass(html, "is-link");
      };
      if (state.get().bookmarks.show.name) {
        helper.addClass(html, "is-link-name");
      } else {
        helper.removeClass(html, "is-link-name");
      };
      if (state.get().bookmarks.show.url) {
        helper.addClass(html, "is-link-url");
      } else {
        helper.removeClass(html, "is-link-url");
      };
    };
    var _layout = function() {
      helper.removeClass(html, "is-layout-fluid");
      helper.removeClass(html, "is-layout-wide");
      helper.removeClass(html, "is-layout-thin");
      helper.addClass(html, "is-layout-" + state.get().layout.width);
      if (state.get().layout.scrollPastEnd) {
        helper.addClass(html, "is-scroll-past-end");
      } else {
        helper.removeClass(html, "is-scroll-past-end");
      };
    };
    var _editAdd = function() {
      if (state.get().header.editAdd.show) {
        helper.addClass(html, "is-search-edit-add");
      } else {
        helper.removeClass(html, "is-search-edit-add");
      };
    };
    var _accent = function() {
      if (state.get().header.accent.show) {
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
      if (state.get().header.search.show) {
        helper.e(".control-header-search-grow").disabled = false;
        helper.e(".control-header-search-focus").disabled = false;
        helper.e(".control-header-search-engine-google").disabled = false;
        helper.e(".control-header-search-engine-duckduckgo").disabled = false;
        helper.e(".control-header-search-engine-giphy").disabled = false;
        helper.e(".control-header-search-engine-custom").disabled = false;
        helper.e(".control-header-search-engine-label").removeAttribute("disabled");
      } else {
        helper.e(".control-header-search-grow").disabled = true;
        helper.e(".control-header-search-focus").disabled = true;
        helper.e(".control-header-search-engine-google").disabled = true;
        helper.e(".control-header-search-engine-duckduckgo").disabled = true;
        helper.e(".control-header-search-engine-giphy").disabled = true;
        helper.e(".control-header-search-engine-custom").disabled = true;
        helper.e(".control-header-search-engine-label").setAttribute("disabled", "");
      };
      if (state.get().header.search.show && state.get().header.search.engine.selected === "custom") {
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
    var _link = function() {
      if (state.get().bookmarks.show.link) {
        helper.e(".control-bookmarks-show-name").disabled = false;
        helper.e(".control-bookmarks-show-url").disabled = false;
        helper.e(".control-bookmarks-style-block").disabled = false;
        helper.e(".control-bookmarks-style-list").disabled = false;
        helper.e(".control-bookmarks-new-tab").disabled = false;
        helper.e(".control-bookmarks-sort-none").disabled = false;
        helper.e(".control-bookmarks-sort-name").disabled = false;
        helper.e(".control-bookmarks-sort-letter").disabled = false;
        helper.e(".control-layout-alignment-vertical-top").disabled = true;
        helper.e(".control-layout-alignment-vertical-center").disabled = true;
        helper.e(".control-layout-alignment-vertical-bottom").disabled = true;
      } else {
        helper.e(".control-bookmarks-show-name").disabled = true;
        helper.e(".control-bookmarks-show-url").disabled = true;
        helper.e(".control-bookmarks-style-block").disabled = true;
        helper.e(".control-bookmarks-style-list").disabled = true;
        helper.e(".control-bookmarks-new-tab").disabled = true;
        helper.e(".control-bookmarks-sort-none").disabled = true;
        helper.e(".control-bookmarks-sort-name").disabled = true;
        helper.e(".control-bookmarks-sort-letter").disabled = true;
        helper.e(".control-layout-alignment-vertical-top").disabled = false;
        helper.e(".control-layout-alignment-vertical-center").disabled = false;
        helper.e(".control-layout-alignment-vertical-bottom").disabled = false;
      };
    };
    var _background = function() {
      if (state.get().background.image.show) {
        helper.e("[for=control-background-image-url]").removeAttribute("disabled");
        helper.e(".control-background-image-url").disabled = false;
        helper.e("[for=control-background-image-opacity]").removeAttribute("disabled");
        helper.e(".control-background-image-opacity").disabled = false;
        helper.e("[for=control-background-image-blur]").removeAttribute("disabled");
        helper.e(".control-background-image-blur").disabled = false;
        helper.e("[for=control-background-image-grayscale]").removeAttribute("disabled");
        helper.e(".control-background-image-grayscale").disabled = false;
        helper.e("[for=control-background-image-accent]").removeAttribute("disabled");
        helper.e(".control-background-image-accent").disabled = false;
      } else {
        helper.e("[for=control-background-image-url]").setAttribute("disabled", "");
        helper.e(".control-background-image-url").disabled = true;
        helper.e("[for=control-background-image-opacity]").setAttribute("disabled", "");
        helper.e(".control-background-image-opacity").disabled = true;
        helper.e("[for=control-background-image-blur]").setAttribute("disabled", "");
        helper.e(".control-background-image-blur").disabled = true;
        helper.e("[for=control-background-image-grayscale]").setAttribute("disabled", "");
        helper.e(".control-background-image-grayscale").disabled = true;
        helper.e("[for=control-background-image-accent]").setAttribute("disabled", "");
        helper.e(".control-background-image-accent").disabled = true;
      };
    };
    _edit();
    _date();
    _clock();
    _search();
    _theme();
    _link();
    _background();
  };

  var update = function() {
    var eventType = {
      button: "click",
      checkbox: "change",
      radio: "change",
      text: "input",
      range: "input",
      color: "change"
    };
    var valueMod = {
      reverse: function(value, element) {
        return parseInt(element.max, 10) - value;
      },
      float: function(value, element) {
        return value * 100;
      }
    };
    var setValue = {
      checkbox: function(object) {
        object.element.checked = helper.getObject({
          object: state.get(),
          path: object.path
        });
      },
      radio: function(object) {
        helper.e("." + object.element.className.substring(0, object.element.className.lastIndexOf("-") + 1) + helper.getObject({
          object: state.get(),
          path: object.path
        })).checked = true;
      },
      text: function(object) {
        object.element.value = helper.getObject({
          object: state.get(),
          path: object.path
        });
      },
      range: function(object) {
        var newValue = helper.getObject({
          object: state.get(),
          path: object.path
        });
        if (object.valueMod) {
          object.valueMod.slice().reverse().forEach(function(arrayItem, index) {
            newValue = valueMod[arrayItem](newValue, object.element);
          });
        };
        object.element.value = newValue;
      },
      color: function(object) {
        object.element.value = helper.rgbToHex(helper.getObject({
          object: state.get(),
          path: object.path
        }));
      }
    };
    _allControl.forEach(function(arrayItem, index) {
      if (arrayItem.element.tagName.toLowerCase() == "input") {
        setValue[arrayItem.type](arrayItem);
      };
    });
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
