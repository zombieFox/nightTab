var control = (function() {

  var _allControl = [{
    element: helper.e(".control-layout-theme-current"),
    path: "control.layout.theme.current",
    type: "color"
  }, {
    element: helper.e(".button"),
    path: "menu.show",
    type: "button"
  }, {
    element: helper.e(".control-header-clock-show-hours"),
    path: "control.header.clock.show.hours",
    type: "checkbox"
  }, {
    element: helper.e(".control-header-clock-show-minutes"),
    path: "control.header.clock.show.minutes",
    type: "checkbox"
  }, {
    element: helper.e(".control-header-clock-show-seconds"),
    path: "control.header.clock.show.seconds",
    type: "checkbox"
  }, {
    element: helper.e(".control-header-clock-show-separator"),
    path: "control.header.clock.show.separator",
    type: "checkbox"
  }, {
    element: helper.e(".control-header-clock-24"),
    path: "control.header.clock.hour24",
    type: "checkbox"
  }, {
    element: helper.e(".control-header-clock-show-meridiem"),
    path: "control.header.clock.show.meridiem",
    type: "checkbox"
  }, {
    element: helper.e(".control-header-date-show-day"),
    path: "control.header.date.show.day",
    type: "checkbox"
  }, {
    element: helper.e(".control-header-date-show-date"),
    path: "control.header.date.show.date",
    type: "checkbox"
  }, {
    element: helper.e(".control-header-date-show-month"),
    path: "control.header.date.show.month",
    type: "checkbox"
  }, {
    element: helper.e(".control-header-date-show-year"),
    path: "control.header.date.show.year",
    type: "checkbox"
  }, {
    element: helper.e(".control-header-date-show-separator"),
    path: "control.header.date.show.separator",
    type: "checkbox"
  }, {
    element: helper.e(".control-header-date-character-length-short"),
    path: "control.header.date.character.length",
    type: "radio"
  }, {
    element: helper.e(".control-header-date-character-length-long"),
    path: "control.header.date.character.length",
    type: "radio"
  }, {
    element: helper.e(".control-header-search-show"),
    path: "control.header.search.show",
    type: "checkbox"
  }, {
    element: helper.e(".control-header-search-grow"),
    path: "control.header.search.grow",
    type: "checkbox"
  }, {
    element: helper.e(".control-header-search-focus"),
    path: "control.header.search.focus",
    type: "checkbox"
  }, {
    element: helper.e(".control-header-search-engine-google"),
    path: "control.header.search.engine.selected",
    type: "radio"
  }, {
    element: helper.e(".control-header-search-engine-duckduckgo"),
    path: "control.header.search.engine.selected",
    type: "radio"
  }, {
    element: helper.e(".control-header-search-engine-giphy"),
    path: "control.header.search.engine.selected",
    type: "radio"
  }, {
    element: helper.e(".control-header-search-engine-custom"),
    path: "control.header.search.engine.selected",
    type: "radio"
  }, {
    element: helper.e(".control-header-search-engine-custom-url"),
    path: "control.header.accent.show",
    type: "checkbox"
  }, {
    element: helper.e(".control-layout-alignment-horizontal-left"),
    path: "control.header.alignment.horizontal",
    type: "radio"
  }, {
    element: helper.e(".control-layout-alignment-horizontal-center"),
    path: "control.header.alignment.horizontal",
    type: "radio"
  }, {
    element: helper.e(".control-layout-alignment-horizontal-right"),
    path: "control.header.alignment.horizontal",
    type: "radio"
  }, {
    element: helper.e(".control-layout-alignment-vertical-top"),
    path: "control.header.alignment.vertical",
    type: "radio"
  }, {
    element: helper.e(".control-layout-alignment-vertical-center"),
    path: "control.header.alignment.vertical",
    type: "radio"
  }, {
    element: helper.e(".control-layout-alignment-vertical-bottom"),
    path: "control.header.alignment.vertical",
    type: "radio"
  }, {
    element: helper.e(".control-bookmarks-show-link"),
    path: "control.bookmarks.show.link",
    type: "checkbox"
  }, {
    element: helper.e(".control-bookmarks-show-name"),
    path: "control.bookmarks.show.name",
    type: "checkbox"
  }, {
    element: helper.e(".control-bookmarks-show-url"),
    path: "control.bookmarks.show.url",
    type: "checkbox"
  }, {
    element: helper.e(".control-bookmarks-new-tab"),
    path: "control.bookmarks.newTab",
    type: "checkbox"
  }, {
    element: helper.e(".control-bookmarks-style-block"),
    path: "control.bookmarks.style",
    type: "radio"
  }, {
    element: helper.e(".control-bookmarks-style-list"),
    path: "control.bookmarks.style",
    type: "radio"
  }, {
    element: helper.e(".control-bookmarks-sort-none"),
    path: "control.bookmarks.sort",
    type: "radio"
  }, {
    element: helper.e(".control-bookmarks-sort-name"),
    path: "control.bookmarks.sort",
    type: "radio"
  }, {
    element: helper.e(".control-bookmarks-sort-letter"),
    path: "control.bookmarks.sort",
    type: "radio"
  }, {
    element: helper.e(".control-layout-width-fluid"),
    path: "control.layout.width",
    type: "radio"
  }, {
    element: helper.e(".control-layout-width-wide"),
    path: "control.layout.width",
    type: "radio"
  }, {
    element: helper.e(".control-layout-width-thin"),
    path: "control.layout.width",
    type: "radio"
  }, {
    element: helper.e(".control-layout-scroll-past-end"),
    path: "control.layout.scrollPastEnd",
    type: "checkbox"
  }, {
    element: helper.e(".control-layout-theme-random-active"),
    path: "control.layout.theme.random.active",
    type: "checkbox"
  }, {
    element: helper.e(".control-layout-theme-style-any"),
    path: "control.layout.theme.random.style",
    type: "radio"
  }, {
    element: helper.e(".control-layout-theme-style-light"),
    path: "control.layout.theme.random.style",
    type: "radio"
  }, {
    element: helper.e(".control-layout-theme-style-dark"),
    path: "control.layout.theme.random.style",
    type: "radio"
  }, {
    element: helper.e(".control-layout-theme-style-pastel"),
    path: "control.layout.theme.random.style",
    type: "radio"
  }, {
    element: helper.e(".control-layout-theme-style-saturated"),
    path: "control.layout.theme.random.style",
    type: "radio"
  }, {
    element: helper.e(".control-background-image-show"),
    path: "control.background.image.show",
    type: "checkbox"
  }, {
    element: helper.e(".control-background-image-url"),
    path: "control.background.image.url",
    type: "text"
  }, {
    element: helper.e(".control-background-image-opacity"),
    path: "control.background.image.opacity",
    type: "range",
    valueMod: ["reverse", "float"]
  }, {
    element: helper.e(".control-background-image-grayscale"),
    path: "control.background.image.grayscale",
    type: "range",
    valueMod: ["float"]
  }, {
    element: helper.e(".control-background-image-blur"),
    path: "control.background.image.blur",
    type: "range"
  }, {
    element: helper.e(".control-background-image-accent"),
    path: "control.background.image.accent",
    type: "range",
    valueMod: ["float"]
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
    var bindControl = function(object) {
      var action = {
        input: function(object) {
          changeValue(object);
        },
        button: function(object) {
          toggleValue(object);
        }
      };
      object.element.addEventListener(eventType[object.type], function() {
        action[object.element.tagName.toLowerCase()](object);
        // if (object.element.invoke) {
        //   object.element.invoke.forEach(function(arrayItem, index) {
        //     invoke[arrayItem]();
        //   });
        // };
      }, false);
    };
    _allControl.forEach(function(arrayItem, index) {
      bindControl(arrayItem);
    });
    // helper.e(".control-menu").addEventListener("click", function() {
    //   menu.toggle();
    // }, false);
    // helper.e(".control-add").addEventListener("click", function() {
    //   link.add();
    // }, false);
    // helper.e(".control-edit").addEventListener("change", function() {
    //   render();
    //   dependents();
    //   data.save();
    // }, false);
    // helper.e(".control-layout-theme").addEventListener("change", function() {
    //   theme.render();
    //   data.save();
    // }, false);
    // helper.e(".control-layout-theme-random").addEventListener("change", function() {
    //   theme.render();
    //   dependents();
    //   data.save();
    // }, false);
    // helper.eA("input[name='control-layout-theme-style']").forEach(function(arrayItem, index) {
    //   arrayItem.addEventListener("change", function() {
    //     render();
    //     data.save();
    //   }, false);
    // });
    // helper.e(".control-link-new-tab").addEventListener("change", function() {
    //   link.clear();
    //   link.render();
    //   data.save();
    // });
    // helper.e(".control-link-show-active").addEventListener("change", function() {
    //   render();
    //   dependents();
    //   header.render();
    //   data.save();
    // });
    // helper.e(".control-link-show-name").addEventListener("change", function() {
    //   render();
    //   dependents();
    //   data.save();
    // });
    // helper.e(".control-link-show-url").addEventListener("change", function() {
    //   render();
    //   dependents();
    //   data.save();
    // });
    // helper.eA("input[name='control-link-style']").forEach(function(arrayItem, index) {
    //   arrayItem.addEventListener("change", function() {
    //     render();
    //     data.save();
    //   }, false);
    // });
    // helper.eA("input[name='control-link-sort']").forEach(function(arrayItem, index) {
    //   arrayItem.addEventListener("change", function() {
    //     link.clear();
    //     link.render();
    //     data.save();
    //   }, false);
    // });
    // helper.e(".control-header-search-active").addEventListener("change", function() {
    //   render();
    //   dependents();
    //   header.render();
    //   data.save();
    // }, false);
    // helper.e(".control-header-search-grow").addEventListener("change", function() {
    //   render();
    //   header.render();
    //   data.save();
    // }, false);
    // helper.e(".control-header-search-focus").addEventListener("change", function() {
    //   data.save();
    // }, false);
    // helper.eA("input[name='control-header-search-engine']").forEach(function(arrayItem, index) {
    //   arrayItem.addEventListener("change", function() {
    //     render();
    //     dependents();
    //     search.update();
    //     data.save();
    //   }, false);
    // });
    // helper.e(".control-header-search-engine-custom-url").addEventListener("input", function() {
    //   search.update();
    //   data.save();
    // }, false);
    // helper.e(".control-header-date-show-date").addEventListener("change", function() {
    //   render();
    //   dependents();
    //   date.clear();
    //   date.render();
    //   header.render();
    //   data.save();
    // }, false);
    // helper.e(".control-header-date-show-day").addEventListener("change", function() {
    //   render();
    //   dependents();
    //   date.clear();
    //   date.render();
    //   header.render();
    //   data.save();
    // }, false);
    // helper.e(".control-header-date-show-month").addEventListener("change", function() {
    //   render();
    //   dependents();
    //   date.clear();
    //   date.render();
    //   header.render();
    //   data.save();
    // }, false);
    // helper.e(".control-header-date-show-year").addEventListener("change", function() {
    //   render();
    //   dependents();
    //   date.clear();
    //   date.render();
    //   header.render();
    //   data.save();
    // }, false);
    // helper.e(".control-header-date-show-separator").addEventListener("change", function() {
    //   render();
    //   dependents();
    //   date.clear();
    //   date.render();
    //   header.render();
    //   data.save();
    // }, false);
    // helper.eA("input[name='control-header-date-character-length']").forEach(function(arrayItem, index) {
    //   arrayItem.addEventListener("change", function() {
    //     render();
    //     date.clear();
    //     date.render();
    //     header.render();
    //     data.save();
    //   }, false);
    // });
    // helper.e(".control-header-clock-show-seconds").addEventListener("change", function() {
    //   render();
    //   dependents();
    //   clock.clear();
    //   clock.render();
    //   header.render();
    //   data.save();
    // }, false);
    // helper.e(".control-header-clock-show-minutes").addEventListener("change", function() {
    //   render();
    //   dependents();
    //   clock.clear();
    //   clock.render();
    //   header.render();
    //   data.save();
    // }, false);
    // helper.e(".control-header-clock-show-hours").addEventListener("change", function() {
    //   render();
    //   dependents();
    //   clock.clear();
    //   clock.render();
    //   header.render();
    //   data.save();
    // }, false);
    // helper.e(".control-header-clock-show-separator").addEventListener("change", function() {
    //   clock.clear();
    //   clock.render();
    //   header.render();
    //   data.save();
    // }, false);
    // helper.e(".control-header-clock-24").addEventListener("change", function() {
    //   dependents();
    //   clock.clear();
    //   clock.render();
    //   header.render();
    //   data.save();
    // }, false);
    // helper.e(".control-header-clock-show-meridiem").addEventListener("change", function() {
    //   clock.clear();
    //   clock.render();
    //   header.render();
    //   data.save();
    // }, false);
    // helper.e(".control-header-edit-add-active").addEventListener("change", function() {
    //   render();
    //   header.render();
    //   data.save();
    // }, false);
    // helper.e(".control-header-accent-active").addEventListener("change", function() {
    //   render();
    //   header.render();
    //   data.save();
    // }, false);
    // helper.eA("input[name='control-layout-alignment-horizontal']").forEach(function(arrayItem, index) {
    //   arrayItem.addEventListener("change", function() {
    //     render();
    //     data.save();
    //   }, false);
    // });
    // helper.eA("input[name='control-layout-alignment-vertical']").forEach(function(arrayItem, index) {
    //   arrayItem.addEventListener("change", function() {
    //     render();
    //     data.save();
    //   }, false);
    // });
    // helper.eA("input[name='control-layout-container']").forEach(function(arrayItem, index) {
    //   arrayItem.addEventListener("change", function() {
    //     render();
    //     header.render();
    //     data.save();
    //   }, false);
    // });
    // helper.e(".control-layout-scroll-past-end").addEventListener("change", function() {
    //   render();
    //   data.save();
    // }, false);
    // helper.e(".control-background-image-active").addEventListener("change", function() {
    //   render();
    //   dependents();
    //   background.render();
    //   data.save();
    // }, false);
    // helper.e(".control-background-image-url").addEventListener("input", function() {
    //   background.render();
    //   data.save();
    // }, false);
    // helper.e(".control-background-image-opacity").addEventListener("input", function() {
    //   background.render();
    //   data.save();
    // }, false);
    // helper.e(".control-background-image-blur").addEventListener("input", function() {
    //   background.render();
    //   data.save();
    // }, false);
    // helper.e(".control-background-image-grayscale").addEventListener("input", function() {
    //   background.render();
    //   data.save();
    // }, false);
    // helper.e(".control-background-image-accent-opacity").addEventListener("input", function() {
    //   background.render();
    //   data.save();
    // }, false);
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
        helper.e(".control-link-show-name").disabled = false;
        helper.e(".control-link-show-url").disabled = false;
        helper.e(".control-link-style-block").disabled = false;
        helper.e(".control-link-style-list").disabled = false;
        helper.e(".control-link-new-tab").disabled = false;
        helper.e(".control-link-sort-none").disabled = false;
        helper.e(".control-link-sort-name").disabled = false;
        helper.e(".control-link-sort-letter").disabled = false;
        helper.e(".control-layout-alignment-vertical-top").disabled = true;
        helper.e(".control-layout-alignment-vertical-center").disabled = true;
        helper.e(".control-layout-alignment-vertical-bottom").disabled = true;
      } else {
        helper.e(".control-link-show-name").disabled = true;
        helper.e(".control-link-show-url").disabled = true;
        helper.e(".control-link-style-block").disabled = true;
        helper.e(".control-link-style-list").disabled = true;
        helper.e(".control-link-new-tab").disabled = true;
        helper.e(".control-link-sort-none").disabled = true;
        helper.e(".control-link-sort-name").disabled = true;
        helper.e(".control-link-sort-letter").disabled = true;
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
        helper.e("[for=control-background-image-accent-opacity]").removeAttribute("disabled");
        helper.e(".control-background-image-accent-opacity").disabled = false;
      } else {
        helper.e("[for=control-background-image-url]").setAttribute("disabled", "");
        helper.e(".control-background-image-url").disabled = true;
        helper.e("[for=control-background-image-opacity]").setAttribute("disabled", "");
        helper.e(".control-background-image-opacity").disabled = true;
        helper.e("[for=control-background-image-blur]").setAttribute("disabled", "");
        helper.e(".control-background-image-blur").disabled = true;
        helper.e("[for=control-background-image-grayscale]").setAttribute("disabled", "");
        helper.e(".control-background-image-grayscale").disabled = true;
        helper.e("[for=control-background-image-accent-opacity]").setAttribute("disabled", "");
        helper.e(".control-background-image-accent-opacity").disabled = true;
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
    var allControls = helper.eA("[data-control-options]");
    var eventType = {
      button: "click",
      checkbox: "change",
      radio: "change",
      text: "input",
      range: "input",
      color: "change"
    };
    var valueMod = {
      reverse: function(value, control) {
        return parseInt(control.max, 10) - value;
      },
      float: function(value, control) {
        return value * 100;
      }
    };
    var setValue = {
      checkbox: function(control, options) {
        control.checked = helper.getObject({
          object: state.get(),
          path: options.path
        });
      },
      radio: function(control, options) {
        helper.e("." + control.className.substring(0, control.className.lastIndexOf("-") + 1) + helper.getObject({
          object: state.get(),
          path: options.path
        })).checked = true;
      },
      text: function(control, options) {
        control.value = helper.getObject({
          object: state.get(),
          path: options.path
        });
      },
      range: function(control, options) {
        var newValue = helper.getObject({
          object: state.get(),
          path: options.path
        });
        if (options.valueMod) {
          options.valueMod.reverse().forEach(function(arrayItem, index) {
            newValue = valueMod[arrayItem](newValue, control);
          });
        };
        control.value = newValue;
      },
      color: function(control, options) {
        control.value = helper.rgbToHex(helper.getObject({
          object: state.get(),
          path: options.path
        }));
      }
    };
    allControls.forEach(function(arrayItem, index) {
      var options = helper.makeObject(arrayItem.dataset.controlOptions);
      if (arrayItem.tagName.toLowerCase() == "input") {
        setValue[options.type](arrayItem, options);
      };
    });
  };

  var init = function() {
    _bind();
    update();
    // dependents();
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
