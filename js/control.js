var control = (function() {

  var _allControl = [{
    element: helper.e(".control-menu"),
    type: "button",
    func: function() {
      menu.toggle();
      page.update();
    }
  }, {
    element: helper.e(".control-link-add"),
    type: "button",
    func: function() {
      link.add();
    }
  }, {
    element: helper.e(".control-link-edit"),
    path: "link.edit",
    type: "checkbox",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-theme-accent-current"),
    path: "theme.accent.current",
    type: "color",
    func: function() {
      accent.render();
    }
  }, {
    element: helper.e(".control-layout-width"),
    path: "layout.width",
    type: "range",
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render({
          element: helper.e(".main"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render({
          element: helper.e(".main"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render({
            element: helper.e(".main"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.destroy();
      }
    }],
    func: function() {
      render();
      layout.render.width();
    }
  }, {
    element: helper.e(".control-layout-alignment-horizontal-left"),
    path: "layout.alignment.horizontal",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render({
          element: helper.e(".main"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-horizontal-center"),
    path: "layout.alignment.horizontal",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render({
          element: helper.e(".main"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-horizontal-right"),
    path: "layout.alignment.horizontal",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render({
          element: helper.e(".main"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-vertical-top"),
    path: "layout.alignment.vertical",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render({
          element: helper.e(".main"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-vertical-center"),
    path: "layout.alignment.vertical",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render({
          element: helper.e(".main"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-vertical-bottom"),
    path: "layout.alignment.vertical",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render({
          element: helper.e(".main"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-padding"),
    path: "layout.padding",
    type: "range",
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render({
          element: helper.e(".main"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render({
          element: helper.e(".main"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render({
            element: helper.e(".main"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.destroy();
      }
    }],
    func: function() {
      layout.render.padding();
    }
  }, {
    element: helper.e(".control-layout-gutter"),
    path: "layout.gutter",
    type: "range",
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render({
          element: helper.e(".main"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render({
          element: helper.e(".main"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render({
            element: helper.e(".main"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.destroy();
      }
    }],
    func: function() {
      layout.render.gutter();
    }
  }, {
    element: helper.e(".control-layout-title"),
    path: "layout.title",
    type: "text",
    func: function() {
      title.render();
    }
  }, {
    element: helper.e(".control-layout-scroll-past-end"),
    path: "layout.scrollPastEnd",
    type: "checkbox",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-area-width"),
    path: "header.area.width",
    type: "range",
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render({
          element: helper.e(".header-area")
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render({
          element: helper.e(".header-area")
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render({
            element: helper.e(".header-area"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.destroy();
      }
    }],
    func: function() {
      header.render.area.width();
    }
  }, {
    element: helper.e(".control-header-area-width-match"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.render({
          element: helper.e(".header-area"),
          delay: 500
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.destroy();
      }
    }],
    func: function() {
      _setValue("header.area.width", helper.getObject({
        object: state.get(),
        path: "link.area.width"
      }));
      header.render.area.width();
      update();
    }
  }, {
    element: helper.e(".control-header-area-alignment-horizontal-left"),
    path: "header.area.alignment.horizontal",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render({
          element: helper.e(".header-area"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-area-alignment-horizontal-center"),
    path: "header.area.alignment.horizontal",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render({
          element: helper.e(".header-area"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-area-alignment-horizontal-right"),
    path: "header.area.alignment.horizontal",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render({
          element: helper.e(".header-area"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-item-alignment-horizontal-left"),
    path: "header.item.alignment.horizontal",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-item-alignment-horizontal-center"),
    path: "header.item.alignment.horizontal",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-item-alignment-horizontal-right"),
    path: "header.item.alignment.horizontal",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-greeting-show"),
    path: "header.greeting.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      greeting.clear();
      greeting.render();
    }
  }, {
    element: helper.e(".control-header-greeting-type-good"),
    path: "header.greeting.type",
    type: "radio",
    func: function() {
      greeting.clear();
      greeting.render();
    }
  }, {
    element: helper.e(".control-header-greeting-type-hello"),
    path: "header.greeting.type",
    type: "radio",
    func: function() {
      greeting.clear();
      greeting.render();
    }
  }, {
    element: helper.e(".control-header-greeting-type-hi"),
    path: "header.greeting.type",
    type: "radio",
    func: function() {
      greeting.clear();
      greeting.render();
    }
  }, {
    element: helper.e(".control-header-greeting-name"),
    path: "header.greeting.name",
    type: "text",
    func: function() {
      greeting.clear();
      greeting.render();
    }
  }, {
    element: helper.e(".control-header-greeting-size"),
    path: "header.greeting.size",
    type: "range",
    valueMod: ["float"],
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render({
          element: helper.e(".greeting"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render({
          element: helper.e(".greeting"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render({
            element: helper.e(".greeting"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.destroy();
      }
    }],
    func: function() {
      header.render.greeting.size();
    }
  }, {
    element: helper.e(".control-header-greeting-size-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.render({
          element: helper.e(".greeting"),
          delay: 500
        });
      }
    }],
    func: function() {
      _setValue("header.greeting.size", 1);
      header.render.greeting.size();
      update();
    }
  }, {
    element: helper.e(".control-header-transitional-show"),
    path: "header.transitional.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-transitional-type-timeanddate"),
    path: "header.transitional.type",
    type: "radio",
    func: function() {
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-transitional-type-its"),
    path: "header.transitional.type",
    type: "radio",
    func: function() {
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-transitional-size"),
    path: "header.transitional.size",
    type: "range",
    valueMod: ["float"],
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render({
          element: helper.e(".transitional"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render({
          element: helper.e(".transitional"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render({
            element: helper.e(".transitional"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.destroy();
      }
    }],
    func: function() {
      header.render.transitional.size();
    }
  }, {
    element: helper.e(".control-header-transitional-size-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.render({
          element: helper.e(".transitional"),
          delay: 500
        });
      }
    }],
    func: function() {
      _setValue("header.transitional.size", 1);
      header.render.transitional.size();
      update();
    }
  }, {
    element: helper.e(".control-header-clock-hours-show"),
    path: "header.clock.hours.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      clock.clear();
      clock.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-clock-hours-display-number"),
    path: "header.clock.hours.display",
    type: "radio",
    func: function() {
      clock.clear();
      clock.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-clock-hours-display-word"),
    path: "header.clock.hours.display",
    type: "radio",
    func: function() {
      clock.clear();
      clock.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-clock-minutes-show"),
    path: "header.clock.minutes.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      clock.clear();
      clock.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-clock-minutes-display-number"),
    path: "header.clock.minutes.display",
    type: "radio",
    func: function() {
      clock.clear();
      clock.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-clock-minutes-display-word"),
    path: "header.clock.minutes.display",
    type: "radio",
    func: function() {
      clock.clear();
      clock.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-clock-seconds-show"),
    path: "header.clock.seconds.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      clock.clear();
      clock.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-clock-seconds-display-number"),
    path: "header.clock.seconds.display",
    type: "radio",
    func: function() {
      clock.clear();
      clock.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-clock-seconds-display-word"),
    path: "header.clock.seconds.display",
    type: "radio",
    func: function() {
      clock.clear();
      clock.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-clock-separator-show"),
    path: "header.clock.separator.show",
    type: "checkbox",
    func: function() {
      clock.clear();
      clock.render();
      greeting.clear();
      greeting.render();
    }
  }, {
    element: helper.e(".control-header-clock-hour24-show"),
    path: "header.clock.hour24.show",
    type: "checkbox",
    func: function() {
      dependents();
      clock.clear();
      clock.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-clock-meridiem-show"),
    path: "header.clock.meridiem.show",
    type: "checkbox",
    func: function() {
      dependents();
      clock.clear();
      clock.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-clock-size"),
    path: "header.clock.size",
    type: "range",
    valueMod: ["float"],
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render({
          element: helper.e(".clock"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render({
          element: helper.e(".clock"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render({
            element: helper.e(".clock"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.destroy();
      }
    }],
    func: function() {
      header.render.clock.size();
    }
  }, {
    element: helper.e(".control-header-clock-size-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.render({
          element: helper.e(".clock"),
          delay: 500
        });
      }
    }],
    func: function() {
      _setValue("header.clock.size", 1);
      header.render.clock.size();
      update();
    }
  }, {
    element: helper.e(".control-header-date-day-show"),
    path: "header.date.day.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-day-display-number"),
    path: "header.date.day.display",
    type: "radio",
    func: function() {
      dependents();
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-day-week-start-monday"),
    path: "header.date.day.weekStart",
    type: "radio",
    func: function() {
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-day-week-start-sunday"),
    path: "header.date.day.weekStart",
    type: "radio",
    func: function() {
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-day-display-word"),
    path: "header.date.day.display",
    type: "radio",
    func: function() {
      dependents();
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-day-length-long"),
    path: "header.date.day.length",
    type: "radio",
    func: function() {
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-day-length-short"),
    path: "header.date.day.length",
    type: "radio",
    func: function() {
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-date-show"),
    path: "header.date.date.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-date-display-number"),
    path: "header.date.date.display",
    type: "radio",
    func: function() {
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-date-display-word"),
    path: "header.date.date.display",
    type: "radio",
    func: function() {
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-date-ordinal"),
    path: "header.date.date.ordinal",
    type: "checkbox",
    func: function() {
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-month-show"),
    path: "header.date.month.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-month-display-number"),
    path: "header.date.month.display",
    type: "radio",
    func: function() {
      dependents();
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-month-ordinal"),
    path: "header.date.month.ordinal",
    type: "checkbox",
    func: function() {
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-month-display-word"),
    path: "header.date.month.display",
    type: "radio",
    func: function() {
      dependents();
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-month-length-long"),
    path: "header.date.month.length",
    type: "radio",
    func: function() {
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-month-length-short"),
    path: "header.date.month.length",
    type: "radio",
    func: function() {
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-year-show"),
    path: "header.date.year.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-year-display-number"),
    path: "header.date.year.display",
    type: "radio",
    func: function() {
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-year-display-word"),
    path: "header.date.year.display",
    type: "radio",
    func: function() {
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-separator-show"),
    path: "header.date.separator.show",
    type: "checkbox",
    func: function() {
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-format-datemonth"),
    path: "header.date.format",
    type: "radio",
    func: function() {
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-format-monthdate"),
    path: "header.date.format",
    type: "radio",
    func: function() {
      date.clear();
      date.render();
      greeting.clear();
      greeting.render();
      transitional.clear();
      transitional.render();
    }
  }, {
    element: helper.e(".control-header-date-size"),
    path: "header.date.size",
    type: "range",
    valueMod: ["float"],
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render({
          element: helper.e(".date"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render({
          element: helper.e(".date"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render({
            element: helper.e(".date"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.destroy();
      }
    }],
    func: function() {
      header.render.date.size();
    }
  }, {
    element: helper.e(".control-header-date-size-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.render({
          element: helper.e(".date"),
          delay: 500
        });
      }
    }],
    func: function() {
      _setValue("header.date.size", 1);
      header.render.date.size();
      update();
    }
  }, {
    element: helper.e(".control-header-search-show"),
    path: "header.search.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      header.render.search.width();
    }
  }, {
    element: helper.e(".control-header-search-style-auto"),
    path: "header.search.style",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render({
          element: helper.e(".header-search-input"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
      dependents();
      header.render.search.width();
    }
  }, {
    element: helper.e(".control-header-search-style-custom"),
    path: "header.search.style",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render({
          element: helper.e(".header-search-input"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
      dependents();
      header.render.search.width();
    }
  }, {
    element: helper.e(".control-header-search-width"),
    path: "header.search.width",
    type: "range",
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render({
          element: helper.e(".header-search-input"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render({
          element: helper.e(".header-search-input"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render({
            element: helper.e(".header-search-input"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.destroy();
      }
    }],
    func: function() {
      header.render.search.width();
    }
  }, {
    element: helper.e(".control-header-search-focus"),
    path: "header.search.focus",
    type: "checkbox"
  }, {
    element: helper.e(".control-header-search-engine-google"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      dependents();
      search.render();
    }
  }, {
    element: helper.e(".control-header-search-engine-duckduckgo"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      dependents();
      search.render();
    }
  }, {
    element: helper.e(".control-header-search-engine-youtube"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      dependents();
      search.render();
    }
  }, {
    element: helper.e(".control-header-search-engine-giphy"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      dependents();
      search.render();
    }
  }, {
    element: helper.e(".control-header-search-engine-custom"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      dependents();
      search.render();
    }
  }, {
    element: helper.e(".control-header-search-engine-custom-name"),
    path: "header.search.engine.custom.name",
    type: "text",
    func: function() {
      search.render();
    }
  }, {
    element: helper.e(".control-header-search-engine-custom-url"),
    path: "header.search.engine.custom.url",
    type: "text",
    func: function() {
      search.render();
    }
  }, {
    element: helper.e(".control-header-search-text-align-left"),
    path: "header.search.text.align",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-search-text-align-center"),
    path: "header.search.text.align",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-search-text-align-right"),
    path: "header.search.text.align",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-search-size"),
    path: "header.search.size",
    type: "range",
    valueMod: ["float"],
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render({
          element: helper.e(".header-search-input"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render({
          element: helper.e(".header-search-input"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render({
            element: helper.e(".header-search-input"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.destroy();
      }
    }],
    func: function() {
      header.render.search.size();
    }
  }, {
    element: helper.e(".control-header-search-size-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.render({
          element: helper.e(".header-search-input"),
          delay: 500
        });
      }
    }],
    func: function() {
      _setValue("header.search.size", 1);
      header.render.search.size();
      update();
    }
  }, {
    element: helper.e(".control-header-button-style-box"),
    path: "header.button.style",
    type: "radio",
    func: function() {
      header.render.button.style();
    }
  }, {
    element: helper.e(".control-header-button-style-clear"),
    path: "header.button.style",
    type: "radio",
    func: function() {
      header.render.button.style();
    }
  }, {
    element: helper.e(".control-header-button-edit-add-show"),
    path: "header.button.editAdd.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
    }
  }, {
    element: helper.e(".control-header-button-accent-show"),
    path: "header.button.accent.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
    }
  }, {
    element: helper.e(".control-header-button-size"),
    path: "header.button.size",
    type: "range",
    valueMod: ["float"],
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render({
          element: helper.e(".control-menu"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render({
          element: helper.e(".control-menu"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render({
            element: helper.e(".control-menu"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.destroy();
      }
    }],
    func: function() {
      header.render.button.size();
    }
  }, {
    element: helper.e(".control-header-button-size-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.render({
          element: helper.e(".control-menu"),
          delay: 500
        });
      }
    }],
    func: function() {
      _setValue("header.button.size", 1);
      header.render.button.size();
      update();
    }
  }, {
    element: helper.e(".control-header-shade-show"),
    path: "header.shade.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      header.render.shade();
    }
  }, {
    element: helper.e(".control-header-shade-style-always"),
    path: "header.shade.style",
    type: "radio",
    func: function() {
      render();
      header.render.shade();
    }
  }, {
    element: helper.e(".control-header-shade-style-scroll"),
    path: "header.shade.style",
    type: "radio",
    func: function() {
      render();
      header.render.shade();
    }
  }, {
    element: helper.e(".control-header-shade-opacity"),
    path: "header.shade.opacity",
    type: "range",
    valueMod: ["reverse", "float"],
    func: function() {
      header.render.opacity();
    }
  }, {
    element: helper.e(".control-header-radius"),
    path: "header.radius",
    type: "checkbox",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-border-top"),
    path: "header.border.top",
    type: "range",
    func: function() {
      header.render.border();
      render();
    }
  }, {
    element: helper.e(".control-header-border-bottom"),
    path: "header.border.bottom",
    type: "range",
    func: function() {
      header.render.border();
      render();
    }
  }, {
    element: helper.e(".control-link-area-width"),
    path: "link.area.width",
    type: "range",
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render({
          element: helper.e(".link-area"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render({
          element: helper.e(".link-area"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render({
            element: helper.e(".link-area"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.destroy();
      }
    }],
    func: function() {
      link.render.area.width();
    }
  }, {
    element: helper.e(".control-link-area-width-match"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.render({
          element: helper.e(".link-area"),
          delay: 500
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.destroy();
      }
    }],
    func: function() {
      _setValue("link.area.width", helper.getObject({
        object: state.get(),
        path: "header.area.width"
      }));
      link.render.area.width();
      update();
    }
  }, {
    element: helper.e(".control-link-area-alignment-horizontal-left"),
    path: "link.area.alignment.horizontal",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render({
          element: helper.e(".link-area"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-area-alignment-horizontal-center"),
    path: "link.area.alignment.horizontal",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render({
          element: helper.e(".link-area"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-area-alignment-horizontal-right"),
    path: "link.area.alignment.horizontal",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render({
          element: helper.e(".link-area"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-item-size"),
    path: "link.item.size",
    type: "range",
    valueMod: ["float"],
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render({
          element: helper.e(".link-item"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render({
          element: helper.e(".link-item"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.destroy();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render({
            element: helper.e(".link-item"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.destroy();
      }
    }],
    func: function() {
      link.render.item.size();
    }
  }, {
    element: helper.e(".control-link-item-size-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.render({
          element: helper.e(".link-item"),
          delay: 500
        });
      }
    }],
    func: function() {
      _setValue("link.item.size", 1);
      link.render.item.size();
      update();
    }
  }, {
    element: helper.e(".control-link-show"),
    path: "link.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      search.render();
    }
  }, {
    element: helper.e(".control-link-item-display-show"),
    path: "link.item.display.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
    }
  }, {
    element: helper.e(".control-link-item-display-letter-size"),
    path: "link.item.display.letter.size",
    type: "range",
    valueMod: ["float"],
    func: function() {
      link.render.item.display.letter();
    }
  }, {
    element: helper.e(".control-link-item-display-letter-size-default"),
    type: "button",
    func: function() {
      _setValue("link.item.display.letter.size", 3);
      link.render.item.display.letter();
      update();
    }
  }, {
    element: helper.e(".control-link-item-display-icon-size"),
    path: "link.item.display.icon.size",
    type: "range",
    valueMod: ["float"],
    func: function() {
      link.render.item.display.icon();
    }
  }, {
    element: helper.e(".control-link-item-display-icon-size-default"),
    type: "button",
    func: function() {
      _setValue("link.item.display.icon.size", 3);
      link.render.item.display.icon();
      update();
    }
  }, {
    element: helper.e(".control-link-item-name-show"),
    path: "link.item.name.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
    }
  }, {
    element: helper.e(".control-link-item-name-size"),
    path: "link.item.name.size",
    type: "range",
    valueMod: ["float"],
    func: function() {
      link.render.item.name();
    }
  }, {
    element: helper.e(".control-link-item-name-size-default"),
    type: "button",
    func: function() {
      _setValue("link.item.name.size", 0.9);
      link.render.item.name();
      update();
    }
  }, {
    element: helper.e(".control-link-item-url-show"),
    path: "link.item.url.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
    }
  }, {
    element: helper.e(".control-link-item-url-style-dark"),
    path: "link.item.url.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-item-url-style-light"),
    path: "link.item.url.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-item-line"),
    path: "link.item.line",
    type: "checkbox",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-item-hover-scale"),
    path: "link.item.hoverScale",
    type: "checkbox",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-horizontal-left"),
    path: "link.item.display.alignment.horizontal",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-horizontal-center"),
    path: "link.item.display.alignment.horizontal",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-horizontal-right"),
    path: "link.item.display.alignment.horizontal",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-vertical-top"),
    path: "link.item.display.alignment.vertical",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-vertical-center"),
    path: "link.item.display.alignment.vertical",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-vertical-bottom"),
    path: "link.item.display.alignment.vertical",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-new-tab"),
    path: "link.newTab",
    type: "checkbox",
    func: function() {
      link.clear();
      link.render.item.all();
    }
  }, {
    element: helper.e(".control-link-style-block"),
    path: "link.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-style-list"),
    path: "link.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-sort-letter"),
    type: "button",
    func: function() {
      bookmarks.sort("letter");
      link.clear();
      link.render.item.all();
    }
  }, {
    element: helper.e(".control-link-sort-icon"),
    type: "button",
    func: function() {
      bookmarks.sort("icon");
      link.clear();
      link.render.item.all();
    }
  }, {
    element: helper.e(".control-link-sort-name"),
    type: "button",
    func: function() {
      bookmarks.sort("name");
      link.clear();
      link.render.item.all();
    }
  }, {
    element: helper.e(".control-theme-style-dark"),
    path: "theme.style",
    type: "radio",
    func: function() {
      render();
      accent.render();
    }
  }, {
    element: helper.e(".control-theme-style-light"),
    path: "theme.style",
    type: "radio",
    func: function() {
      render();
      accent.render();
    }
  }, {
    element: helper.e(".control-theme-radius"),
    path: "theme.radius",
    type: "range",
    valueMod: ["float"],
    func: function() {
      theme.render.radius();
    }
  }, {
    element: helper.e(".control-theme-radius-default"),
    type: "button",
    func: function() {
      _setValue("theme.radius", 0.2);
      theme.render.radius();
      update();
    }
  }, {
    element: helper.e(".control-theme-accent-random-active"),
    path: "theme.accent.random.active",
    type: "checkbox",
    func: function() {
      dependents();
      accent.render();
    }
  }, {
    element: helper.e(".control-theme-accent-random-style-any"),
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-theme-accent-random-style-light"),
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-theme-accent-random-style-dark"),
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-theme-accent-random-style-pastel"),
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-theme-accent-random-style-saturated"),
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-theme-accent-randomise"),
    type: "button",
    func: function() {
      accent.random();
      accent.render();
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
  }, {
    element: helper.e(".control-background-image-scale"),
    path: "background.image.scale",
    type: "range",
    valueMod: ["float"],
    func: function() {
      background.render();
    }
  }];

  var _setValue = function(path, value) {
    helper.setObject({
      object: state.get(),
      path: path,
      newValue: value
    });
  };

  var _renderItemDisplayLetter = function() {
    var html = helper.e("html");
    html.style.setProperty("--link-item-display-letter-size", state.get().link.item.display.letter.size + "em");
  };

  var bind = function() {
    var eventType = {
      button: "click",
      checkbox: "change",
      radio: "change",
      text: "input",
      number: "input",
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
      number: function(object) {
        return parseInt(object.element.value, 10);
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
        // console.log("state set", object.path, helper.getObject({
        //   object: state.get(),
        //   path: object.path
        // }));
      };
    };
    var bindControl = function(object) {
      var action = {
        input: function(object, event) {
          changeValue(object);
          if (object.func) {
            object.func();
          };
        },
        button: function(object, event) {
          if (object.func) {
            object.func();
          };
        }
      };
      object.element.addEventListener(eventType[object.type], function(event) {
        action[object.element.tagName.toLowerCase()](object, event);
        data.save();
      }, false);
      if (object.additionalEvents) {
        object.additionalEvents.forEach(function(item, index) {
          object.element.addEventListener(item.event, function(event) {
            item.func(event);
            data.save();
          }, false);
        });
      };
    };
    _allControl.forEach(function(arrayItem, index) {
      bindControl(arrayItem);
    });
  };

  var render = function() {
    var html = helper.e("html");
    var _menu = function() {
      helper.addClass(html, "is-menu");
    };
    var _header = function() {
      var _area = function() {
        helper.removeClass(html, "is-header-area-alignment-horizontal-left");
        helper.removeClass(html, "is-header-area-alignment-horizontal-center");
        helper.removeClass(html, "is-header-area-alignment-horizontal-right");
        helper.addClass(html, "is-header-area-alignment-horizontal-" + state.get().header.area.alignment.horizontal);
      };
      var _item = function() {
        helper.removeClass(html, "is-header-item-alignment-horizontal-left");
        helper.removeClass(html, "is-header-item-alignment-horizontal-center");
        helper.removeClass(html, "is-header-item-alignment-horizontal-right");
        helper.addClass(html, "is-header-item-alignment-horizontal-" + state.get().header.item.alignment.horizontal);
      };
      var _clock = function() {
        if (state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show) {
          helper.addClass(html, "is-header-clock-show");
        } else {
          helper.removeClass(html, "is-header-clock-show");
        };
      };
      var _date = function() {
        if (state.get().header.date.date.show || state.get().header.date.day.show || state.get().header.date.month.show || state.get().header.date.year.show) {
          helper.addClass(html, "is-header-date-show");
        } else {
          helper.removeClass(html, "is-header-date-show");
        };
      };
      var _search = function() {
        helper.removeClass(html, "is-header-search-show");
        helper.removeClass(html, "is-header-search-style-custom");
        helper.removeClass(html, "is-header-search-style-auto");
        helper.removeClass(html, "is-header-search-text-align-left");
        helper.removeClass(html, "is-header-search-text-align-center");
        helper.removeClass(html, "is-header-search-text-align-right");
        if (state.get().header.search.show) {
          helper.addClass(html, "is-header-search-show");
          helper.addClass(html, "is-header-search-style-" + state.get().header.search.style);
          helper.addClass(html, "is-header-search-text-align-" + state.get().header.search.text.align);
        };
        helper.e(".control-header-search-engine-custom-name").value = state.get().header.search.engine.custom.name;
        helper.e(".control-header-search-engine-custom-url").value = state.get().header.search.engine.custom.url;
      };
      var _editAdd = function() {
        if (state.get().header.button.editAdd.show) {
          helper.addClass(html, "is-header-button-edit-add-show");
        } else {
          helper.removeClass(html, "is-header-button-edit-add-show");
        };
      };
      var _accent = function() {
        if (state.get().header.button.accent.show) {
          helper.addClass(html, "is-header-button-accent-show");
        } else {
          helper.removeClass(html, "is-header-button-accent-show");
        };
      };
      var _greeting = function() {
        if (state.get().header.greeting.show) {
          helper.addClass(html, "is-header-greeting-show");
        } else {
          helper.removeClass(html, "is-header-greeting-show");
        };
      };
      var _transitional = function() {
        if (state.get().header.transitional.show && (state.get().header.date.date.show || state.get().header.date.day.show || state.get().header.date.month.show || state.get().header.date.year.show || state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show)) {
          helper.addClass(html, "is-header-transitional-show");
        } else {
          helper.removeClass(html, "is-header-transitional-show");
        };
      };
      var _shade = function() {
        helper.removeClass(html, "is-header-shade-show");
        helper.removeClass(html, "is-header-shade-style-always");
        helper.removeClass(html, "is-header-shade-style-scroll");
        if (state.get().header.shade.show) {
          helper.addClass(html, "is-header-shade-show");
          helper.addClass(html, "is-header-shade-style-" + state.get().header.shade.style);
        };
        if (state.get().header.radius) {
          helper.addClass(html, "is-header-radius");
        } else {
          helper.removeClass(html, "is-header-radius");
        };
      };
      var _border = function() {
        helper.removeClass(html, "is-header-border-top");
        helper.removeClass(html, "is-header-border-bottom");
        if (state.get().header.border.top > 0) {
          helper.addClass(html, "is-header-border-top");
        };
        if (state.get().header.border.bottom > 0) {
          helper.addClass(html, "is-header-border-bottom");
        };
      };
      _area();
      _item();
      _clock();
      _date();
      _search();
      _editAdd();
      _accent();
      _shade();
      _border();
      _greeting();
      _transitional();
    };
    var _link = function() {
      helper.removeClass(html, "is-link-show");
      helper.removeClass(html, "is-link-area-alignment-horizontal-left");
      helper.removeClass(html, "is-link-area-alignment-horizontal-center");
      helper.removeClass(html, "is-link-area-alignment-horizontal-right");
      helper.removeClass(html, "is-link-name-show");
      helper.removeClass(html, "is-link-display-show");
      helper.removeClass(html, "is-link-display-alignment-horizontal-left");
      helper.removeClass(html, "is-link-display-alignment-horizontal-center");
      helper.removeClass(html, "is-link-display-alignment-horizontal-right");
      helper.removeClass(html, "is-link-display-alignment-vertical-top");
      helper.removeClass(html, "is-link-display-alignment-vertical-center");
      helper.removeClass(html, "is-link-display-alignment-vertical-bottom");
      helper.removeClass(html, "is-link-url-show");
      helper.removeClass(html, "is-link-url-style-light");
      helper.removeClass(html, "is-link-url-style-dark");
      helper.removeClass(html, "is-link-item-line");
      helper.removeClass(html, "is-link-item-hover-scale");
      helper.removeClass(html, "is-link-item-alignment-horizontal-left");
      helper.removeClass(html, "is-link-item-alignment-horizontal-center");
      helper.removeClass(html, "is-link-item-alignment-horizontal-right");
      helper.removeClass(html, "is-link-style-list");
      helper.removeClass(html, "is-link-style-block");
      helper.removeClass(html, "is-link-edit");
      link.render.tabIndex();
      if (state.get().link.show) {
        helper.addClass(html, "is-link-show");
        helper.addClass(html, "is-link-area-alignment-horizontal-" + state.get().link.area.alignment.horizontal);
        helper.addClass(html, "is-link-display-alignment-horizontal-" + state.get().link.item.display.alignment.horizontal);
        helper.addClass(html, "is-link-display-alignment-vertical-" + state.get().link.item.display.alignment.vertical);
        helper.addClass(html, "is-link-style-" + state.get().link.style);
        helper.addClass(html, "is-link-url-style-" + state.get().link.item.url.style);
        if (state.get().link.item.name.show) {
          helper.addClass(html, "is-link-name-show");
        };
        if (state.get().link.item.display.show) {
          helper.addClass(html, "is-link-display-show");
        };
        if (state.get().link.item.url.show) {
          helper.addClass(html, "is-link-url-show");
        };
        if (state.get().link.item.line) {
          helper.addClass(html, "is-link-item-line");
        };
        if (state.get().link.item.hoverScale) {
          helper.addClass(html, "is-link-item-hover-scale");
        };
        if (state.get().link.edit) {
          helper.addClass(html, "is-link-edit");
          link.render.tabIndex();
        };
      };
    };
    var _layout = function() {
      helper.removeClass(html, "is-layout-scroll-past-end");
      helper.removeClass(html, "is-layout-alignment-horizontal-left");
      helper.removeClass(html, "is-layout-alignment-horizontal-center");
      helper.removeClass(html, "is-layout-alignment-horizontal-right");
      helper.removeClass(html, "is-layout-alignment-vertical-top");
      helper.removeClass(html, "is-layout-alignment-vertical-center");
      helper.removeClass(html, "is-layout-alignment-vertical-bottom");
      helper.addClass(html, "is-layout-alignment-horizontal-" + state.get().layout.alignment.horizontal);
      helper.addClass(html, "is-layout-alignment-vertical-" + state.get().layout.alignment.vertical);
      if (state.get().layout.scrollPastEnd) {
        helper.addClass(html, "is-layout-scroll-past-end");
      };
    };
    var _theme = function() {
      helper.removeClass(html, "is-theme-style-dark");
      helper.removeClass(html, "is-theme-style-light");
      helper.addClass(html, "is-theme-style-" + state.get().theme.style);
    };
    var _background = function() {
      if (state.get().background.image.show) {
        helper.addClass(html, "is-background-image-show");
      } else {
        helper.removeClass(html, "is-background-image-show");
      };
    };
    _menu();
    _header();
    _link();
    _layout();
    _theme();
    _background();
  };

  var dependents = function() {
    var _header = function() {
      var _clock = function() {
        var activeCount = 0;
        var toCheck = [state.get().header.clock.seconds.show, state.get().header.clock.minutes.show, state.get().header.clock.hours.show];
        toCheck.forEach(function(arrayItem, index) {
          if (arrayItem == true) {
            activeCount++;
          };
        });
        if (activeCount >= 2 && (state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show)) {
          helper.e(".control-header-clock-separator-show").disabled = false;
        } else {
          helper.e(".control-header-clock-separator-show").disabled = true;
        };
        if (state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show) {
          helper.e(".control-header-clock-hour24-show").disabled = false;
          helper.e(".control-header-clock-meridiem-show").disabled = false;
        } else {
          helper.e(".control-header-clock-hour24-show").disabled = true;
          helper.e(".control-header-clock-meridiem-show").disabled = true;
        };
        if ((state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show) && !state.get().header.clock.hour24.show) {
          helper.e(".control-header-clock-meridiem-show").disabled = false;
        } else {
          helper.e(".control-header-clock-meridiem-show").disabled = true;
        };
        if (state.get().header.clock.hours.show) {
          helper.e(".control-header-clock-hours-display-number").disabled = false;
          helper.e(".control-header-clock-hours-display-word").disabled = false;
        } else {
          helper.e(".control-header-clock-hours-display-number").disabled = true;
          helper.e(".control-header-clock-hours-display-word").disabled = true;
        };
        if (state.get().header.clock.minutes.show) {
          helper.e(".control-header-clock-minutes-display-number").disabled = false;
          helper.e(".control-header-clock-minutes-display-word").disabled = false;
        } else {
          helper.e(".control-header-clock-minutes-display-number").disabled = true;
          helper.e(".control-header-clock-minutes-display-word").disabled = true;
        };
        if (state.get().header.clock.seconds.show) {
          helper.e(".control-header-clock-seconds-display-number").disabled = false;
          helper.e(".control-header-clock-seconds-display-word").disabled = false;
        } else {
          helper.e(".control-header-clock-seconds-display-number").disabled = true;
          helper.e(".control-header-clock-seconds-display-word").disabled = true;
        };
        if (state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show) {
          helper.e("[for=control-header-clock-size]").removeAttribute("disabled");
          helper.e(".control-header-clock-size").disabled = false;
          helper.e(".control-header-clock-size-default").disabled = false;
        } else {
          helper.e("[for=control-header-clock-size]").setAttribute("disabled", "");
          helper.e(".control-header-clock-size").disabled = true;
          helper.e(".control-header-clock-size-default").disabled = true;
        };
      };
      var _date = function() {
        var activeCount = 0;
        var toCheck = [state.get().header.date.day.show, state.get().header.date.date.show, state.get().header.date.month.show, state.get().header.date.year.show];
        toCheck.forEach(function(arrayItem, index) {
          if (arrayItem == true) {
            activeCount++;
          };
        });
        if (activeCount >= 2 && (state.get().header.date.day.show || state.get().header.date.date.show || state.get().header.date.month.show || state.get().header.date.year.show)) {
          helper.e(".control-header-date-separator-show").disabled = false;
        } else {
          helper.e(".control-header-date-separator-show").disabled = true;
        };
        if (state.get().header.date.date.show && state.get().header.date.month.show) {
          helper.e(".control-header-date-format-label").removeAttribute("disabled");
          helper.e(".control-header-date-format-datemonth").disabled = false;
          helper.e(".control-header-date-format-monthdate").disabled = false;
        } else {
          helper.e(".control-header-date-format-label").setAttribute("disabled", "");
          helper.e(".control-header-date-format-datemonth").disabled = true;
          helper.e(".control-header-date-format-monthdate").disabled = true;
        };
        if (state.get().header.date.day.show) {
          helper.e(".control-header-date-day-display-number").disabled = false;
          helper.e(".control-header-date-day-display-word").disabled = false;
        } else {
          helper.e(".control-header-date-day-display-number").disabled = true;
          helper.e(".control-header-date-day-display-word").disabled = true;
        };
        if (state.get().header.date.date.show) {
          helper.e(".control-header-date-date-display-number").disabled = false;
          helper.e(".control-header-date-date-display-word").disabled = false;
          helper.e(".control-header-date-date-ordinal").disabled = false;
        } else {
          helper.e(".control-header-date-date-display-number").disabled = true;
          helper.e(".control-header-date-date-display-word").disabled = true;
          helper.e(".control-header-date-date-ordinal").disabled = true;
        };
        if (state.get().header.date.month.show) {
          helper.e(".control-header-date-month-display-number").disabled = false;
          helper.e(".control-header-date-month-display-word").disabled = false;
        } else {
          helper.e(".control-header-date-month-display-number").disabled = true;
          helper.e(".control-header-date-month-display-word").disabled = true;
        };
        if (state.get().header.date.year.show) {
          helper.e(".control-header-date-year-display-number").disabled = false;
          helper.e(".control-header-date-year-display-word").disabled = false;
        } else {
          helper.e(".control-header-date-year-display-number").disabled = true;
          helper.e(".control-header-date-year-display-word").disabled = true;
        };
        if (state.get().header.date.day.show && state.get().header.date.day.display == "number") {
          helper.e(".control-header-date-day-week-start-label").removeAttribute("disabled");
          helper.e(".control-header-date-day-week-start-monday").disabled = false;
          helper.e(".control-header-date-day-week-start-sunday").disabled = false;
        } else {
          helper.e(".control-header-date-day-week-start-label").setAttribute("disabled", "");
          helper.e(".control-header-date-day-week-start-monday").disabled = true;
          helper.e(".control-header-date-day-week-start-sunday").disabled = true;
        };
        if (state.get().header.date.day.show && state.get().header.date.day.display == "word") {
          helper.e(".control-header-date-day-length-label").removeAttribute("disabled");
          helper.e(".control-header-date-day-length-long").disabled = false;
          helper.e(".control-header-date-day-length-short").disabled = false;
        } else {
          helper.e(".control-header-date-day-length-label").setAttribute("disabled", "");
          helper.e(".control-header-date-day-length-long").disabled = true;
          helper.e(".control-header-date-day-length-short").disabled = true;
        };
        if (state.get().header.date.month.show && state.get().header.date.month.display == "word") {
          helper.e(".control-header-date-month-length-label").removeAttribute("disabled");
          helper.e(".control-header-date-month-length-long").disabled = false;
          helper.e(".control-header-date-month-length-short").disabled = false;
        } else {
          helper.e(".control-header-date-month-length-label").setAttribute("disabled", "");
          helper.e(".control-header-date-month-length-long").disabled = true;
          helper.e(".control-header-date-month-length-short").disabled = true;
        };
        if (state.get().header.date.month.show && state.get().header.date.month.display == "number") {
          helper.e(".control-header-date-month-ordinal").disabled = false;
        } else {
          helper.e(".control-header-date-month-ordinal").disabled = true;
        };
        if (state.get().header.date.day.show || state.get().header.date.date.show || state.get().header.date.month.show || state.get().header.date.year.show) {
          helper.e("[for=control-header-date-size]").removeAttribute("disabled");
          helper.e(".control-header-date-size").disabled = false;
          helper.e(".control-header-date-size-default").disabled = false;
        } else {
          helper.e("[for=control-header-date-size]").setAttribute("disabled", "");
          helper.e(".control-header-date-size").disabled = true;
          helper.e(".control-header-date-size-default").disabled = true;
        };
      };
      var _shade = function() {
        if (state.get().header.shade.show) {
          helper.e(".control-header-shade-style-always").disabled = false;
          helper.e(".control-header-shade-style-scroll").disabled = false;
          helper.e("[for=control-header-shade-opacity]").removeAttribute("disabled");
          helper.e(".control-header-shade-opacity").disabled = false;
          helper.e(".control-header-radius").disabled = false;
        } else {
          helper.e(".control-header-shade-style-always").disabled = true;
          helper.e(".control-header-shade-style-scroll").disabled = true;
          helper.e("[for=control-header-shade-opacity]").setAttribute("disabled", "");
          helper.e(".control-header-shade-opacity").disabled = true;
          helper.e(".control-header-radius").disabled = true;
        };
      };
      var _search = function() {
        if (state.get().header.search.show) {
          helper.e(".control-header-search-style-label").removeAttribute("disabled");
          helper.e(".control-header-search-style-auto").disabled = false;
          helper.e(".control-header-search-style-custom").disabled = false;
          helper.e("[for=control-header-search-width]").removeAttribute("disabled");
          helper.e(".control-header-search-width").disabled = false;
          helper.e(".control-header-search-focus").disabled = false;
          helper.e(".control-header-search-engine-label").removeAttribute("disabled");
          helper.e(".control-header-search-engine-google").disabled = false;
          helper.e(".control-header-search-engine-duckduckgo").disabled = false;
          helper.e(".control-header-search-engine-youtube").disabled = false;
          helper.e(".control-header-search-engine-giphy").disabled = false;
          helper.e(".control-header-search-engine-custom").disabled = false;
          helper.e(".control-header-search-text-align-label").removeAttribute("disabled");
          helper.e(".control-header-search-text-align-left").disabled = false;
          helper.e(".control-header-search-text-align-center").disabled = false;
          helper.e(".control-header-search-text-align-right").disabled = false;
          helper.e("[for=control-header-search-size]").removeAttribute("disabled");
          helper.e(".control-header-search-size").disabled = false;
          helper.e(".control-header-search-size-default").disabled = false;
        } else {
          helper.e(".control-header-search-style-label").setAttribute("disabled", "");
          helper.e(".control-header-search-style-auto").disabled = true;
          helper.e(".control-header-search-style-custom").disabled = true;
          helper.e("[for=control-header-search-width]").setAttribute("disabled", "");
          helper.e(".control-header-search-width").disabled = true;
          helper.e(".control-header-search-focus").disabled = true;
          helper.e(".control-header-search-engine-label").setAttribute("disabled", "");
          helper.e(".control-header-search-engine-google").disabled = true;
          helper.e(".control-header-search-engine-duckduckgo").disabled = true;
          helper.e(".control-header-search-engine-youtube").disabled = true;
          helper.e(".control-header-search-engine-giphy").disabled = true;
          helper.e(".control-header-search-engine-custom").disabled = true;
          helper.e(".control-header-search-text-align-label").setAttribute("disabled", "");
          helper.e(".control-header-search-text-align-left").disabled = true;
          helper.e(".control-header-search-text-align-center").disabled = true;
          helper.e(".control-header-search-text-align-right").disabled = true;
          helper.e("[for=control-header-search-size]").setAttribute("disabled", "");
          helper.e(".control-header-search-size").disabled = true;
          helper.e(".control-header-search-size-default").disabled = true;
        };
        if (state.get().header.search.show && state.get().header.search.engine.selected === "custom") {
          helper.e("[for=control-header-search-engine-custom-name]").removeAttribute("disabled");
          helper.e(".control-header-search-engine-custom-name").disabled = false;
          helper.e("[for=control-header-search-engine-custom-url]").removeAttribute("disabled");
          helper.e(".control-header-search-engine-custom-url").disabled = false;
        } else {
          helper.e("[for=control-header-search-engine-custom-name]").setAttribute("disabled", "");
          helper.e(".control-header-search-engine-custom-name").disabled = true;
          helper.e("[for=control-header-search-engine-custom-url]").setAttribute("disabled", "");
          helper.e(".control-header-search-engine-custom-url").disabled = true;
        };
        if (state.get().header.search.show && state.get().header.search.style === "custom") {
          helper.e("[for=control-header-search-width]").removeAttribute("disabled");
          helper.e(".control-header-search-width").disabled = false;
        } else {
          helper.e("[for=control-header-search-width]").setAttribute("disabled", "");
          helper.e(".control-header-search-width").disabled = true;
        };
      };
      var _greeting = function() {
        if (state.get().header.greeting.show) {
          helper.e("[for=control-header-greeting-name]").removeAttribute("disabled");
          helper.e(".control-header-greeting-name").disabled = false;
          helper.e(".control-header-greeting-type-good").disabled = false;
          helper.e(".control-header-greeting-type-hello").disabled = false;
          helper.e(".control-header-greeting-type-hi").disabled = false;
          helper.e("[for=control-header-greeting-size]").removeAttribute("disabled");
          helper.e(".control-header-greeting-size").disabled = false;
          helper.e(".control-header-greeting-size-default").disabled = false;
        } else {
          helper.e("[for=control-header-greeting-name]").setAttribute("disabled", "");
          helper.e(".control-header-greeting-name").disabled = true;
          helper.e(".control-header-greeting-type-good").disabled = true;
          helper.e(".control-header-greeting-type-hello").disabled = true;
          helper.e(".control-header-greeting-type-hi").disabled = true;
          helper.e("[for=control-header-greeting-size]").setAttribute("disabled", "");
          helper.e(".control-header-greeting-size").disabled = true;
          helper.e(".control-header-greeting-size-default").disabled = true;
        };
      };
      var _transitional = function() {
        if (state.get().header.date.date.show || state.get().header.date.day.show || state.get().header.date.month.show || state.get().header.date.year.show || state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show) {
          helper.e(".control-header-transitional-show").disabled = false;
        } else {
          helper.e(".control-header-transitional-show").disabled = true;
        };
        if (state.get().header.transitional.show && ((state.get().header.date.date.show || state.get().header.date.day.show || state.get().header.date.month.show || state.get().header.date.year.show || state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show))) {
          helper.e(".control-header-transitional-type-timeanddate").disabled = false;
          helper.e(".control-header-transitional-type-its").disabled = false;
          helper.e("[for=control-header-transitional-size]").removeAttribute("disabled");
          helper.e(".control-header-transitional-size").disabled = false;
          helper.e(".control-header-transitional-size-default").disabled = false;
        } else {
          helper.e(".control-header-transitional-type-timeanddate").disabled = true;
          helper.e(".control-header-transitional-type-its").disabled = true;
          helper.e("[for=control-header-transitional-size]").setAttribute("disabled", "");
          helper.e(".control-header-transitional-size").disabled = true;
          helper.e(".control-header-transitional-size-default").disabled = true;
        };
      };
      _clock();
      _date();
      _shade();
      _search();
      _greeting();
      _transitional();
    };
    var _edit = function() {
      if (bookmarks.get().length > 0) {
        helper.e(".control-link-edit").disabled = false;
      } else {
        helper.e(".control-link-edit").disabled = true;
        helper.e(".control-link-edit").checked = false;
      };
    };
    var _link = function() {
      helper.e("[for=control-link-area-width]").setAttribute("disabled", "");
      helper.e(".control-link-area-width").disabled = true;
      helper.e(".control-link-area-width-match").disabled = true;
      helper.e(".control-link-area-alignment-horizontal-label").setAttribute("disabled", "");
      helper.e(".control-link-area-alignment-horizontal-left").disabled = true;
      helper.e(".control-link-area-alignment-horizontal-center").disabled = true;
      helper.e(".control-link-area-alignment-horizontal-right").disabled = true;
      helper.e("[for=control-link-item-size]").setAttribute("disabled", "");
      helper.e(".control-link-item-size").disabled = true;
      helper.e(".control-link-item-size-default").disabled = true;
      helper.e(".control-link-item-display-show").disabled = true;
      helper.e("[for=control-link-item-display-letter-size]").setAttribute("disabled", "");
      helper.e(".control-link-item-display-letter-size").disabled = true;
      helper.e(".control-link-item-display-letter-size-default").disabled = true;
      helper.e("[for=control-link-item-display-icon-size]").setAttribute("disabled", "");
      helper.e(".control-link-item-display-icon-size").disabled = true;
      helper.e(".control-link-item-display-icon-size-default").disabled = true;
      helper.e(".control-link-item-name-show").disabled = true;
      helper.e("[for=control-link-item-name-size]").setAttribute("disabled", "");
      helper.e(".control-link-item-name-size").disabled = true;
      helper.e(".control-link-item-name-size-default").disabled = true;
      helper.e(".control-link-item-url-show").disabled = true;
      helper.e(".control-link-item-url-style-dark").disabled = true;
      helper.e(".control-link-item-url-style-light").disabled = true;
      helper.e(".control-link-item-line").disabled = true;
      helper.e(".control-link-item-hover-scale").disabled = true;
      helper.e(".control-link-item-display-alignment-horizontal-label").setAttribute("disabled", "");
      helper.e(".control-link-item-display-alignment-horizontal-left").disabled = true;
      helper.e(".control-link-item-display-alignment-horizontal-center").disabled = true;
      helper.e(".control-link-item-display-alignment-horizontal-right").disabled = true;
      helper.e(".control-link-item-display-alignment-vertical-label").setAttribute("disabled", "");
      helper.e(".control-link-item-display-alignment-vertical-top").disabled = true;
      helper.e(".control-link-item-display-alignment-vertical-center").disabled = true;
      helper.e(".control-link-item-display-alignment-vertical-bottom").disabled = true;
      helper.e(".control-link-new-tab").disabled = true;
      helper.e(".control-link-style-block").disabled = true;
      helper.e(".control-link-style-list").disabled = true;
      helper.e(".control-link-sort-name").disabled = true;
      helper.e(".control-link-sort-letter").disabled = true;
      helper.e(".control-link-sort-icon").disabled = true;
      if (state.get().link.show) {
        helper.e("[for=control-link-area-width]").removeAttribute("disabled");
        helper.e(".control-link-area-width").disabled = false;
        helper.e(".control-link-area-width-match").disabled = false;
        helper.e(".control-link-area-alignment-horizontal-label").removeAttribute("disabled");
        helper.e(".control-link-area-alignment-horizontal-left").disabled = false;
        helper.e(".control-link-area-alignment-horizontal-center").disabled = false;
        helper.e(".control-link-area-alignment-horizontal-right").disabled = false;
        helper.e("[for=control-link-item-size]").removeAttribute("disabled");
        helper.e(".control-link-item-size").disabled = false;
        helper.e(".control-link-item-size-default").disabled = false;
        helper.e(".control-link-item-display-show").disabled = false;
        helper.e(".control-link-item-name-show").disabled = false;
        helper.e(".control-link-item-url-show").disabled = false;
        helper.e(".control-link-item-line").disabled = false;
        helper.e(".control-link-item-hover-scale").disabled = false;
        helper.e(".control-link-new-tab").disabled = false;
        helper.e(".control-link-style-block").disabled = false;
        helper.e(".control-link-style-list").disabled = false;
        helper.e(".control-link-sort-name").disabled = false;
        helper.e(".control-link-sort-letter").disabled = false;
        helper.e(".control-link-sort-icon").disabled = false;
        if (state.get().link.item.display.show) {
          helper.e("[for=control-link-item-display-letter-size]").removeAttribute("disabled");
          helper.e(".control-link-item-display-letter-size").disabled = false;
          helper.e(".control-link-item-display-letter-size-default").disabled = false;
          helper.e("[for=control-link-item-display-icon-size]").removeAttribute("disabled");
          helper.e(".control-link-item-display-icon-size").disabled = false;
          helper.e(".control-link-item-display-icon-size-default").disabled = false;
        };
        if (state.get().link.item.name.show) {
          helper.e("[for=control-link-item-name-size]").removeAttribute("disabled");
          helper.e(".control-link-item-name-size").disabled = false;
          helper.e(".control-link-item-name-size-default").disabled = false;
        };
        if (state.get().link.item.display.show || state.get().link.item.name.show || state.get().link.item.url.show) {
          helper.e(".control-link-item-display-alignment-horizontal-label").removeAttribute("disabled");
          helper.e(".control-link-item-display-alignment-horizontal-left").disabled = false;
          helper.e(".control-link-item-display-alignment-horizontal-center").disabled = false;
          helper.e(".control-link-item-display-alignment-horizontal-right").disabled = false;
          helper.e(".control-link-item-display-alignment-vertical-label").removeAttribute("disabled");
          helper.e(".control-link-item-display-alignment-vertical-top").disabled = false;
          helper.e(".control-link-item-display-alignment-vertical-center").disabled = false;
          helper.e(".control-link-item-display-alignment-vertical-bottom").disabled = false;
        };
        if (state.get().link.item.url.show) {
          helper.e(".control-link-item-url-style-dark").disabled = false;
          helper.e(".control-link-item-url-style-light").disabled = false;
        };
      };
    };
    var _theme = function() {
      if (state.get().theme.accent.random.active) {
        helper.e(".control-theme-accent-random-style-any").disabled = false;
        helper.e(".control-theme-accent-random-style-light").disabled = false;
        helper.e(".control-theme-accent-random-style-dark").disabled = false;
        helper.e(".control-theme-accent-random-style-pastel").disabled = false;
        helper.e(".control-theme-accent-random-style-saturated").disabled = false;
        helper.e(".control-theme-accent-randomise").disabled = false;
      } else {
        helper.e(".control-theme-accent-random-style-any").disabled = true;
        helper.e(".control-theme-accent-random-style-light").disabled = true;
        helper.e(".control-theme-accent-random-style-dark").disabled = true;
        helper.e(".control-theme-accent-random-style-pastel").disabled = true;
        helper.e(".control-theme-accent-random-style-saturated").disabled = true;
        helper.e(".control-theme-accent-randomise").disabled = true;
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
        helper.e("[for=control-background-image-scale]").removeAttribute("disabled");
        helper.e(".control-background-image-scale").disabled = false;
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
        helper.e("[for=control-background-image-scale]").setAttribute("disabled", "");
        helper.e(".control-background-image-scale").disabled = true;
      };
    };
    _header();
    _edit();
    _link();
    _theme();
    _background();
  };

  var update = function() {
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
      number: function(object) {
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
    bind();
    update();
    dependents();
    render();
  };

  // exposed methods
  return {
    init: init,
    bind: bind,
    render: render,
    dependents: dependents,
    update: update
  };

})();
