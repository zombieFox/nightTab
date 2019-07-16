var control = (function() {

  var _allControl = [{
    element: helper.e(".control-menu-open"),
    type: "button",
    func: function() {
      menu.mod.open();
      menu.render.toggle();
      menu.render.tabindex.toggle();
      pagelock.render.toggle();
    }
  }, {
    element: helper.e(".control-menu-layout"),
    type: "button",
    func: function() {
      menu.render.tab(this.element, helper.e(".menu-content-area-layout"));
    }
  }, {
    element: helper.e(".control-menu-header"),
    type: "button",
    func: function() {
      menu.render.tab(this.element, helper.e(".menu-content-area-header"));
    }
  }, {
    element: helper.e(".control-menu-bookmarks"),
    type: "button",
    func: function() {
      menu.render.tab(this.element, helper.e(".menu-content-area-bookmarks"));
    }
  }, {
    element: helper.e(".control-menu-theme"),
    type: "button",
    func: function() {
      menu.render.tab(this.element, helper.e(".menu-content-area-theme"));
    }
  }, {
    element: helper.e(".control-menu-background"),
    type: "button",
    func: function() {
      menu.render.tab(this.element, helper.e(".menu-content-area-background"));
    }
  }, {
    element: helper.e(".control-menu-data"),
    type: "button",
    func: function() {
      menu.render.tab(this.element, helper.e(".menu-content-area-data"));
    }
  }, {
    element: helper.e(".control-menu-nightTab"),
    type: "button",
    func: function() {
      menu.render.tab(this.element, helper.e(".menu-content-area-nightTab"));
    }
  }, {
    element: helper.e(".control-menu-close"),
    type: "button",
    func: function() {
      shade.destroy();
      menu.mod.close();
      menu.render.toggle();
      menu.render.tabindex.toggle();
      pagelock.render.toggle();
    }
  }, {
    element: helper.e(".control-link-add"),
    type: "button",
    func: function() {
      link.render.add();
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
      theme.render.accent.color();
      link.render.clear();
      link.render.item.all();
      sortable(".link-area");
    }
  }, {
    element: helper.e(".control-layout-width"),
    path: "layout.width",
    type: "range",
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render.box({
          element: helper.e(".layout"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render.box({
          element: helper.e(".layout"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render.box({
            element: helper.e(".layout"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.render.clear();
      }
    }],
    func: function() {
      render();
      layout.render.width();
    }
  }, {
    element: helper.e(".control-layout-alignment-topleft"),
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-topcenter"),
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-topright"),
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-centerleft"),
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-centercenter"),
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-centerright"),
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-bottomleft"),
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-bottomcenter"),
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-bottomright"),
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-order-headerlink"),
    path: "layout.order",
    type: "radio",
    func: function() {
      render();
      layout.render.order();
      header.render.shade();
    }
  }, {
    element: helper.e(".control-layout-order-linkheader"),
    path: "layout.order",
    type: "radio",
    func: function() {
      render();
      layout.render.order();
      header.render.shade();
    }
  }, {
    element: helper.e(".control-layout-padding"),
    path: "layout.padding",
    type: "range",
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render.box({
          element: helper.e(".layout"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render.box({
          element: helper.e(".layout"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render.box({
            element: helper.e(".layout"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.render.clear();
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
        edge.render.box({
          element: helper.e(".layout"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render.box({
          element: helper.e(".layout"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render.box({
            element: helper.e(".layout"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.render.clear();
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
      layout.render.title();
    }
  }, {
    element: helper.e(".control-layout-scrollpastend"),
    path: "layout.scrollPastEnd",
    type: "checkbox",
    func: function() {
      render();
      header.render.shade();
    }
  }, {
    element: helper.e(".control-header-area-width"),
    path: "header.area.width",
    type: "range",
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render.box({
          element: helper.e(".header-area")
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render.box({
          element: helper.e(".header-area")
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render.box({
            element: helper.e(".header-area"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.render.clear();
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
        edge.render.box({
          element: helper.e(".header-area"),
          delay: 500
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.render.clear();
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
    element: helper.e(".control-header-area-alignment-left"),
    path: "header.area.alignment",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render.box({
          element: helper.e(".header-area"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-area-alignment-center"),
    path: "header.area.alignment",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render.box({
          element: helper.e(".header-area"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-area-alignment-right"),
    path: "header.area.alignment",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render.box({
          element: helper.e(".header-area"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-item-alignment-left"),
    path: "header.item.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-item-alignment-center"),
    path: "header.item.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-item-alignment-right"),
    path: "header.item.alignment",
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
      greeting.render.clear();
      greeting.render.all();
    }
  }, {
    element: helper.e(".control-header-greeting-type-good"),
    path: "header.greeting.type",
    type: "radio",
    func: function() {
      greeting.render.clear();
      greeting.render.all();
    }
  }, {
    element: helper.e(".control-header-greeting-type-hello"),
    path: "header.greeting.type",
    type: "radio",
    func: function() {
      greeting.render.clear();
      greeting.render.all();
    }
  }, {
    element: helper.e(".control-header-greeting-type-hi"),
    path: "header.greeting.type",
    type: "radio",
    func: function() {
      greeting.render.clear();
      greeting.render.all();
    }
  }, {
    element: helper.e(".control-header-greeting-name"),
    path: "header.greeting.name",
    type: "text",
    func: function() {
      greeting.render.clear();
      greeting.render.all();
    }
  }, {
    element: helper.e(".control-header-greeting-size"),
    path: "header.greeting.size",
    type: "range",
    valueMod: ["float"],
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render.box({
          element: helper.e(".greeting"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render.box({
          element: helper.e(".greeting"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render.box({
            element: helper.e(".greeting"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.render.clear();
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
        edge.render.box({
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
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-transitional-type-timeanddate"),
    path: "header.transitional.type",
    type: "radio",
    func: function() {
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-transitional-type-its"),
    path: "header.transitional.type",
    type: "radio",
    func: function() {
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-transitional-size"),
    path: "header.transitional.size",
    type: "range",
    valueMod: ["float"],
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render.box({
          element: helper.e(".transitional"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render.box({
          element: helper.e(".transitional"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render.box({
            element: helper.e(".transitional"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.render.clear();
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
        edge.render.box({
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
      clock.render.clear();
      clock.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-clock-hours-display-number"),
    path: "header.clock.hours.display",
    type: "radio",
    func: function() {
      clock.render.clear();
      clock.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-clock-hours-display-word"),
    path: "header.clock.hours.display",
    type: "radio",
    func: function() {
      clock.render.clear();
      clock.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-clock-minutes-show"),
    path: "header.clock.minutes.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      clock.render.clear();
      clock.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-clock-minutes-display-number"),
    path: "header.clock.minutes.display",
    type: "radio",
    func: function() {
      clock.render.clear();
      clock.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-clock-minutes-display-word"),
    path: "header.clock.minutes.display",
    type: "radio",
    func: function() {
      clock.render.clear();
      clock.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-clock-seconds-show"),
    path: "header.clock.seconds.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      clock.render.clear();
      clock.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-clock-seconds-display-number"),
    path: "header.clock.seconds.display",
    type: "radio",
    func: function() {
      clock.render.clear();
      clock.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-clock-seconds-display-word"),
    path: "header.clock.seconds.display",
    type: "radio",
    func: function() {
      clock.render.clear();
      clock.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-clock-separator-show"),
    path: "header.clock.separator.show",
    type: "checkbox",
    func: function() {
      clock.render.clear();
      clock.render.all();
      greeting.render.clear();
      greeting.render.all();
    }
  }, {
    element: helper.e(".control-header-clock-hour24-show"),
    path: "header.clock.hour24.show",
    type: "checkbox",
    func: function() {
      dependents();
      clock.render.clear();
      clock.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-clock-meridiem-show"),
    path: "header.clock.meridiem.show",
    type: "checkbox",
    func: function() {
      dependents();
      clock.render.clear();
      clock.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-clock-size"),
    path: "header.clock.size",
    type: "range",
    valueMod: ["float"],
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render.box({
          element: helper.e(".clock"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render.box({
          element: helper.e(".clock"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render.box({
            element: helper.e(".clock"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.render.clear();
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
        edge.render.box({
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
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-day-display-number"),
    path: "header.date.day.display",
    type: "radio",
    func: function() {
      dependents();
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-day-week-start-monday"),
    path: "header.date.day.weekStart",
    type: "radio",
    func: function() {
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-day-week-start-sunday"),
    path: "header.date.day.weekStart",
    type: "radio",
    func: function() {
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-day-display-word"),
    path: "header.date.day.display",
    type: "radio",
    func: function() {
      dependents();
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-day-length-long"),
    path: "header.date.day.length",
    type: "radio",
    func: function() {
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-day-length-short"),
    path: "header.date.day.length",
    type: "radio",
    func: function() {
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-date-show"),
    path: "header.date.date.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-date-display-number"),
    path: "header.date.date.display",
    type: "radio",
    func: function() {
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-date-display-word"),
    path: "header.date.date.display",
    type: "radio",
    func: function() {
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-date-ordinal"),
    path: "header.date.date.ordinal",
    type: "checkbox",
    func: function() {
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-month-show"),
    path: "header.date.month.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-month-display-number"),
    path: "header.date.month.display",
    type: "radio",
    func: function() {
      dependents();
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-month-ordinal"),
    path: "header.date.month.ordinal",
    type: "checkbox",
    func: function() {
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-month-display-word"),
    path: "header.date.month.display",
    type: "radio",
    func: function() {
      dependents();
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-month-length-long"),
    path: "header.date.month.length",
    type: "radio",
    func: function() {
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-month-length-short"),
    path: "header.date.month.length",
    type: "radio",
    func: function() {
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-year-show"),
    path: "header.date.year.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-year-display-number"),
    path: "header.date.year.display",
    type: "radio",
    func: function() {
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-year-display-word"),
    path: "header.date.year.display",
    type: "radio",
    func: function() {
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-separator-show"),
    path: "header.date.separator.show",
    type: "checkbox",
    func: function() {
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-format-datemonth"),
    path: "header.date.format",
    type: "radio",
    func: function() {
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-format-monthdate"),
    path: "header.date.format",
    type: "radio",
    func: function() {
      date.render.clear();
      date.render.all();
      greeting.render.clear();
      greeting.render.all();
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: helper.e(".control-header-date-size"),
    path: "header.date.size",
    type: "range",
    valueMod: ["float"],
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.render.box({
          element: helper.e(".date"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render.box({
          element: helper.e(".date"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render.box({
            element: helper.e(".date"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.render.clear();
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
        edge.render.box({
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
        edge.render.box({
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
        edge.render.box({
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
        edge.render.box({
          element: helper.e(".header-search-input"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render.box({
          element: helper.e(".header-search-input"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render.box({
            element: helper.e(".header-search-input"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.render.clear();
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
      search.render.engine();
    }
  }, {
    element: helper.e(".control-header-search-engine-duckduckgo"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      dependents();
      search.render.engine();
    }
  }, {
    element: helper.e(".control-header-search-engine-youtube"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      dependents();
      search.render.engine();
    }
  }, {
    element: helper.e(".control-header-search-engine-giphy"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      dependents();
      search.render.engine();
    }
  }, {
    element: helper.e(".control-header-search-engine-bing"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      dependents();
      search.render.engine();
    }
  }, {
    element: helper.e(".control-header-search-engine-custom"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      dependents();
      search.render.engine();
    }
  }, {
    element: helper.e(".control-header-search-engine-custom-name"),
    path: "header.search.engine.custom.name",
    type: "text",
    func: function() {
      search.render.engine();
    }
  }, {
    element: helper.e(".control-header-search-engine-custom-url"),
    path: "header.search.engine.custom.url",
    type: "text",
    func: function() {
      search.render.engine();
    }
  }, {
    element: helper.e(".control-header-search-text-alignment-left"),
    path: "header.search.text.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-search-text-alignment-center"),
    path: "header.search.text.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-search-text-alignment-right"),
    path: "header.search.text.alignment",
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
        edge.render.box({
          element: helper.e(".header-search-input"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render.box({
          element: helper.e(".header-search-input"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render.box({
            element: helper.e(".header-search-input"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.render.clear();
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
        edge.render.box({
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
    element: helper.e(".control-header-button-editadd-show"),
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
        edge.render.box({
          element: helper.e(".control-menu-open"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render.box({
          element: helper.e(".control-menu-open"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render.box({
            element: helper.e(".control-menu-open"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.render.clear();
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
        edge.render.box({
          element: helper.e(".control-menu-open"),
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
        edge.render.box({
          element: helper.e(".link-area"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render.box({
          element: helper.e(".link-area"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render.box({
            element: helper.e(".link-area"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.render.clear();
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
        edge.render.box({
          element: helper.e(".link-area"),
          delay: 500
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.render.clear();
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
    element: helper.e(".control-link-area-alignment-left"),
    path: "link.area.alignment",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render.box({
          element: helper.e(".link-area"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-area-alignment-center"),
    path: "link.area.alignment",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render.box({
          element: helper.e(".link-area"),
          delay: 500
        });
      }
    }],
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-area-alignment-right"),
    path: "link.area.alignment",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.render.box({
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
        edge.render.box({
          element: helper.e(".link-item"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.render.box({
          element: helper.e(".link-item"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.render.clear();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.render.box({
            element: helper.e(".link-item"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.render.clear();
      }
    }],
    func: function() {
      link.render.item.size();
    }
  }, {
    element: helper.e(".control-link-show"),
    path: "link.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      search.render.engine();
    }
  }, {
    element: helper.e(".control-link-item-size-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.render.box({
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
    element: helper.e(".control-link-item-display-alignment-topleft"),
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-topcenter"),
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-topright"),
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-centerleft"),
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-centercenter"),
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-centerright"),
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-bottomleft"),
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-bottomcenter"),
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-bottomright"),
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render();
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
    element: helper.e(".control-link-item-order-displayname"),
    path: "link.item.order",
    type: "radio",
    func: function() {
      link.render.clear();
      link.render.item.all();
      sortable(".link-area");
    }
  }, {
    element: helper.e(".control-link-item-order-namedisplay"),
    path: "link.item.order",
    type: "radio",
    func: function() {
      link.render.clear();
      link.render.item.all();
      sortable(".link-area");
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
    element: helper.e(".control-link-item-line-show"),
    path: "link.item.line.show",
    type: "checkbox",
    func: function() {
      render();
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
    element: helper.e(".control-link-item-hoverscale"),
    path: "link.item.hoverScale",
    type: "checkbox",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-link-newtab"),
    path: "link.newTab",
    type: "checkbox",
    func: function() {
      link.render.clear();
      link.render.item.all();
      sortable(".link-area");
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
      link.render.clear();
      link.render.item.all();
      sortable(".link-area");
    }
  }, {
    element: helper.e(".control-link-sort-icon"),
    type: "button",
    func: function() {
      bookmarks.sort("icon");
      link.render.clear();
      link.render.item.all();
      sortable(".link-area");
    }
  }, {
    element: helper.e(".control-link-sort-name"),
    type: "button",
    func: function() {
      bookmarks.sort("name");
      link.render.clear();
      link.render.item.all();
      sortable(".link-area");
    }
  }, {
    element: helper.e(".control-link-accent-clear"),
    type: "button",
    func: function() {
      link.mod.accent.clear();
      link.render.clear();
      link.render.item.all();
      sortable(".link-area");
    }
  }, {
    element: helper.e(".control-link-accent-set"),
    type: "button",
    func: function() {
      link.mod.accent.rainbow();
      link.render.clear();
      link.render.item.all();
      sortable(".link-area");
    }
  }, {
    element: helper.e(".control-theme-style-dark"),
    path: "theme.style",
    type: "radio",
    func: function() {
      theme.render.theme();
    }
  }, {
    element: helper.e(".control-theme-style-light"),
    path: "theme.style",
    type: "radio",
    func: function() {
      theme.render.theme();
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
      theme.render.accent.color();
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
      theme.render.accent.random();
      theme.render.accent.color();
      link.render.clear();
      link.render.item.all();
      sortable(".link-area");
    }
  }, {
    element: helper.e(".control-background-image-show"),
    path: "background.image.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      background.render.image();
    }
  }, {
    element: helper.e(".control-background-image-from-file"),
    path: "background.image.from",
    type: "radio",
    func: function() {
      dependents();
      background.render.image();
    }
  }, {
    element: helper.e(".control-background-image-file"),
    type: "file",
    func: function() {
      background.importData();
    }
  }, {
    element: helper.e(".control-background-image-file-clear"),
    type: "button",
    func: function() {
      background.mod.clear.file();
      background.render.input.clear();
      background.render.image();
      background.render.feedback.clear();
      background.render.feedback.empty();
    }
  }, {
    element: helper.e(".control-background-image-from-url"),
    path: "background.image.from",
    type: "radio",
    func: function() {
      dependents();
      background.render.image();
    }
  }, {
    element: helper.e(".control-background-image-url"),
    path: "background.image.url",
    type: "text",
    func: function() {
      background.render.image();
    }
  }, {
    element: helper.e(".control-background-image-opacity"),
    path: "background.image.opacity",
    type: "range",
    valueMod: ["reverse", "float"],
    func: function() {
      background.render.opacity();
    }
  }, {
    element: helper.e(".control-background-image-grayscale"),
    path: "background.image.grayscale",
    type: "range",
    valueMod: ["float"],
    func: function() {
      background.render.grayscale();
    }
  }, {
    element: helper.e(".control-background-image-blur"),
    path: "background.image.blur",
    type: "range",
    func: function() {
      background.render.blur();
    }
  }, {
    element: helper.e(".control-background-image-accent"),
    path: "background.image.accent",
    type: "range",
    valueMod: ["float"],
    func: function() {
      background.render.accent();
    }
  }, {
    element: helper.e(".control-background-image-scale"),
    path: "background.image.scale",
    type: "range",
    valueMod: ["float"],
    func: function() {
      background.render.scale();
    }
  }, {
    element: helper.e(".control-data-import"),
    type: "file",
    func: function() {
      data.importData();
    }
  }, {
    element: helper.e(".control-data-export"),
    type: "a",
    func: function() {
      data.exportData();
    }
  }, {
    element: helper.e(".control-data-clear"),
    type: "a",
    func: function() {
      menu.close();
      data.clearData();
    }
  }];

  var _setValue = function(path, value) {
    helper.setObject({
      object: state.get(),
      path: path,
      newValue: value
    });
  };

  var bind = function() {
    var eventType = {
      a: "click",
      button: "click",
      checkbox: "change",
      radio: "change",
      text: "input",
      number: "input",
      range: "input",
      color: "change",
      file: "change"
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
        a: function(object, event) {
          if (object.func) {
            object.func();
          };
        },
        button: function(object, event) {
          if (object.func) {
            object.func();
          };
        },
        input: function(object, event) {
          changeValue(object);
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
        helper.removeClass(html, "is-header-area-alignment-left");
        helper.removeClass(html, "is-header-area-alignment-center");
        helper.removeClass(html, "is-header-area-alignment-right");
        helper.addClass(html, "is-header-area-alignment-" + state.get().header.area.alignment);
      };
      var _item = function() {
        helper.removeClass(html, "is-header-item-alignment-left");
        helper.removeClass(html, "is-header-item-alignment-center");
        helper.removeClass(html, "is-header-item-alignment-right");
        helper.addClass(html, "is-header-item-alignment-" + state.get().header.item.alignment);
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
        helper.removeClass(html, "is-header-search-text-alignment-left");
        helper.removeClass(html, "is-header-search-text-alignment-center");
        helper.removeClass(html, "is-header-search-text-alignment-right");
        if (state.get().header.search.show) {
          helper.addClass(html, "is-header-search-show");
          helper.addClass(html, "is-header-search-style-" + state.get().header.search.style);
          helper.addClass(html, "is-header-search-text-alignment-" + state.get().header.search.text.alignment);
        };
        helper.e(".control-header-search-engine-custom-name").value = state.get().header.search.engine.custom.name;
        helper.e(".control-header-search-engine-custom-url").value = state.get().header.search.engine.custom.url;
      };
      var _button = function() {
        if (state.get().header.button.editAdd.show) {
          helper.addClass(html, "is-header-button-editadd-show");
        } else {
          helper.removeClass(html, "is-header-button-editadd-show");
        };
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
        if (state.get().header.shade.show) {
          helper.addClass(html, "is-header-shade-show");
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
      _button();
      _shade();
      _border();
      _greeting();
      _transitional();
    };
    var _link = function() {
      helper.removeClass(html, "is-link-show");
      helper.removeClass(html, "is-link-area-alignment-left");
      helper.removeClass(html, "is-link-area-alignment-center");
      helper.removeClass(html, "is-link-area-alignment-right");
      helper.removeClass(html, "is-link-name-show");
      helper.removeClass(html, "is-link-display-show");
      helper.removeClass(html, "is-link-display-alignment-topleft");
      helper.removeClass(html, "is-link-display-alignment-topcenter");
      helper.removeClass(html, "is-link-display-alignment-topright");
      helper.removeClass(html, "is-link-display-alignment-centerleft");
      helper.removeClass(html, "is-link-display-alignment-centercenter");
      helper.removeClass(html, "is-link-display-alignment-centerright");
      helper.removeClass(html, "is-link-display-alignment-bottomleft");
      helper.removeClass(html, "is-link-display-alignment-bottomcenter");
      helper.removeClass(html, "is-link-display-alignment-bottomright");
      helper.removeClass(html, "is-link-url-show");
      helper.removeClass(html, "is-link-item-line-show");
      helper.removeClass(html, "is-link-item-hoverscale");
      helper.removeClass(html, "is-link-item-alignment-left");
      helper.removeClass(html, "is-link-item-alignment-center");
      helper.removeClass(html, "is-link-item-alignment-right");
      helper.removeClass(html, "is-link-style-list");
      helper.removeClass(html, "is-link-style-block");
      helper.removeClass(html, "is-link-edit");
      link.render.tabIndex();
      if (state.get().link.show) {
        helper.addClass(html, "is-link-show");
        helper.addClass(html, "is-link-area-alignment-" + state.get().link.area.alignment);
        helper.addClass(html, "is-link-display-alignment-" + state.get().link.item.display.alignment);
        helper.addClass(html, "is-link-style-" + state.get().link.style);
        if (state.get().link.item.name.show) {
          helper.addClass(html, "is-link-name-show");
        };
        if (state.get().link.item.display.show) {
          helper.addClass(html, "is-link-display-show");
        };
        if (state.get().link.item.url.show) {
          helper.addClass(html, "is-link-url-show");
        };
        if (state.get().link.item.line.show) {
          helper.addClass(html, "is-link-item-line-show");
        };
        if (state.get().link.item.hoverScale) {
          helper.addClass(html, "is-link-item-hoverscale");
        };
        if (state.get().link.edit) {
          helper.addClass(html, "is-link-edit");
          link.render.tabIndex();
        };
      };
    };
    var _layout = function() {
      helper.removeClass(html, "is-layout-scrollpastend");
      helper.removeClass(html, "is-layout-alignment-topleft");
      helper.removeClass(html, "is-layout-alignment-topcenter");
      helper.removeClass(html, "is-layout-alignment-topright");
      helper.removeClass(html, "is-layout-alignment-centerleft");
      helper.removeClass(html, "is-layout-alignment-centercenter");
      helper.removeClass(html, "is-layout-alignment-centerright");
      helper.removeClass(html, "is-layout-alignment-bottomleft");
      helper.removeClass(html, "is-layout-alignment-bottomcenter");
      helper.removeClass(html, "is-layout-alignment-bottomright");
      helper.removeClass(html, "is-layout-order-headerlink");
      helper.removeClass(html, "is-layout-order-linkheader");
      helper.addClass(html, "is-layout-alignment-" + state.get().layout.alignment);
      helper.addClass(html, "is-layout-order-" + state.get().layout.order);
      if (state.get().layout.scrollPastEnd) {
        helper.addClass(html, "is-layout-scrollpastend");
      };
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
    _background();
  };

  var dependents = function() {
    var disable = {
      input: function(input, disabled) {
        if (disabled) {
          helper.e(input).disabled = true;
        } else {
          helper.e(input).disabled = false;
        };
      },
      element: function(className, disabled) {
        var allHelper = helper.eA(className);
        if (disabled) {
          allHelper.forEach(function(arrayItem, index) {
            helper.addClass(arrayItem, "disabled");
          });
        } else {
          allHelper.forEach(function(arrayItem, index) {
            helper.removeClass(arrayItem, "disabled");
          });
        };
      }
    };
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
          disable.input(".control-header-clock-separator-show", false);
        } else {
          disable.input(".control-header-clock-separator-show", true);
        };
        if (state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show) {
          disable.input(".control-header-clock-hour24-show", false);
          disable.input(".control-header-clock-meridiem-show", false);
        } else {
          disable.input(".control-header-clock-hour24-show", true);
          disable.input(".control-header-clock-meridiem-show", true);
        };
        if ((state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show) && !state.get().header.clock.hour24.show) {
          disable.input(".control-header-clock-meridiem-show", false);
        } else {
          disable.input(".control-header-clock-meridiem-show", true);
        };
        if (state.get().header.clock.hours.show) {
          disable.input(".control-header-clock-hours-display-number", false);
          disable.input(".control-header-clock-hours-display-word", false);
        } else {
          disable.input(".control-header-clock-hours-display-number", true);
          disable.input(".control-header-clock-hours-display-word", true);
        };
        if (state.get().header.clock.minutes.show) {
          disable.input(".control-header-clock-minutes-display-number", false);
          disable.input(".control-header-clock-minutes-display-word", false);
        } else {
          disable.input(".control-header-clock-minutes-display-number", true);
          disable.input(".control-header-clock-minutes-display-word", true);
        };
        if (state.get().header.clock.seconds.show) {
          disable.input(".control-header-clock-seconds-display-number", false);
          disable.input(".control-header-clock-seconds-display-word", false);
        } else {
          disable.input(".control-header-clock-seconds-display-number", true);
          disable.input(".control-header-clock-seconds-display-word", true);
        };
        if (state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show) {
          disable.element("[for=control-header-clock-size]", false);
          disable.input(".control-header-clock-size", false);
          disable.input(".control-header-clock-size-default", false);
        } else {
          disable.element("[for=control-header-clock-size]", true);
          disable.input(".control-header-clock-size", true);
          disable.input(".control-header-clock-size-default", true);
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
          disable.input(".control-header-date-separator-show", false);
        } else {
          disable.input(".control-header-date-separator-show", true);
        };
        if (state.get().header.date.date.show && state.get().header.date.month.show) {
          disable.element(".control-header-date-format-label", false);
          disable.input(".control-header-date-format-datemonth", false);
          disable.input(".control-header-date-format-monthdate", false);
        } else {
          disable.element(".control-header-date-format-label", true);
          disable.input(".control-header-date-format-datemonth", true);
          disable.input(".control-header-date-format-monthdate", true);
        };
        if (state.get().header.date.day.show) {
          disable.input(".control-header-date-day-display-number", false);
          disable.input(".control-header-date-day-display-word", false);
        } else {
          disable.input(".control-header-date-day-display-number", true);
          disable.input(".control-header-date-day-display-word", true);
        };
        if (state.get().header.date.date.show) {
          disable.input(".control-header-date-date-display-number", false);
          disable.input(".control-header-date-date-display-word", false);
          disable.input(".control-header-date-date-ordinal", false);
          disable.element(".control-header-date-date-ordinal-helper", false);
        } else {
          disable.input(".control-header-date-date-display-number", true);
          disable.input(".control-header-date-date-display-word", true);
          disable.input(".control-header-date-date-ordinal", true);
          disable.element(".control-header-date-date-ordinal-helper", true);
        };
        if (state.get().header.date.month.show) {
          disable.input(".control-header-date-month-display-number", false);
          disable.input(".control-header-date-month-display-word", false);
        } else {
          disable.input(".control-header-date-month-display-number", true);
          disable.input(".control-header-date-month-display-word", true);
        };
        if (state.get().header.date.year.show) {
          disable.input(".control-header-date-year-display-number", false);
          disable.input(".control-header-date-year-display-word", false);
        } else {
          disable.input(".control-header-date-year-display-number", true);
          disable.input(".control-header-date-year-display-word", true);
        };
        if (state.get().header.date.day.show && state.get().header.date.day.display == "number") {
          disable.element(".control-header-date-day-week-start-label", false);
          disable.input(".control-header-date-day-week-start-monday", false);
          disable.input(".control-header-date-day-week-start-sunday", false);
          disable.element(".control-header-date-day-week-start-helper", false);
        } else {
          disable.element(".control-header-date-day-week-start-label", true);
          disable.input(".control-header-date-day-week-start-monday", true);
          disable.input(".control-header-date-day-week-start-sunday", true);
          disable.element(".control-header-date-day-week-start-helper", true);
        };
        if (state.get().header.date.day.show && state.get().header.date.day.display == "word") {
          disable.element(".control-header-date-day-length-label", false);
          disable.input(".control-header-date-day-length-long", false);
          disable.input(".control-header-date-day-length-short", false);
        } else {
          disable.element(".control-header-date-day-length-label", true);
          disable.input(".control-header-date-day-length-long", true);
          disable.input(".control-header-date-day-length-short", true);
        };
        if (state.get().header.date.month.show && state.get().header.date.month.display == "word") {
          disable.element(".control-header-date-month-length-label", false);
          disable.input(".control-header-date-month-length-long", false);
          disable.input(".control-header-date-month-length-short", false);
        } else {
          disable.element(".control-header-date-month-length-label", true);
          disable.input(".control-header-date-month-length-long", true);
          disable.input(".control-header-date-month-length-short", true);
        };
        if (state.get().header.date.month.show && state.get().header.date.month.display == "number") {
          disable.input(".control-header-date-month-ordinal", false);
          disable.element(".control-header-date-month-ordinal-helper", false);
        } else {
          disable.input(".control-header-date-month-ordinal", true);
          disable.element(".control-header-date-month-ordinal-helper", true);
        };
        if (state.get().header.date.day.show || state.get().header.date.date.show || state.get().header.date.month.show || state.get().header.date.year.show) {
          disable.element("[for=control-header-date-size]", false);
          disable.input(".control-header-date-size", false);
          disable.input(".control-header-date-size-default", false);
        } else {
          disable.element("[for=control-header-date-size]", true);
          disable.input(".control-header-date-size", true);
          disable.input(".control-header-date-size-default", true);
        };
      };
      var _shade = function() {
        if (state.get().header.shade.show) {
          disable.input(".control-header-shade-style-always", false);
          disable.element(".control-header-shade-style-always-helper", false);
          disable.input(".control-header-shade-style-scroll", false);
          disable.element(".control-header-shade-style-scroll-helper", false);
          disable.element("[for=control-header-shade-opacity]", false);
          disable.input(".control-header-shade-opacity", false);
          disable.input(".control-header-radius", false);
        } else {
          disable.input(".control-header-shade-style-always", true);
          disable.element(".control-header-shade-style-always-helper", true);
          disable.input(".control-header-shade-style-scroll", true);
          disable.element(".control-header-shade-style-scroll-helper", true);
          disable.element("[for=control-header-shade-opacity]", true);
          disable.input(".control-header-shade-opacity", true);
          disable.input(".control-header-radius", true);
        };
      };
      var _search = function() {
        if (state.get().header.search.show) {
          disable.element(".control-header-search-style-label", false);
          disable.input(".control-header-search-style-auto", false);
          disable.element(".control-header-search-style-auto-helper", false);
          disable.input(".control-header-search-style-custom", false);
          disable.element(".control-header-search-style-custom-helper", false);
          disable.element("[for=control-header-search-width]", false);
          disable.input(".control-header-search-width", false);
          disable.input(".control-header-search-focus", false);
          disable.element(".control-header-search-focus-helper", false);
          disable.element(".control-header-search-engine-label", false);
          disable.input(".control-header-search-engine-google", false);
          disable.input(".control-header-search-engine-duckduckgo", false);
          disable.input(".control-header-search-engine-youtube", false);
          disable.input(".control-header-search-engine-giphy", false);
          disable.input(".control-header-search-engine-bing", false);
          disable.input(".control-header-search-engine-custom", false);
          disable.element(".control-header-search-text-alignment-grid", false);
          disable.element(".control-header-search-text-alignment-label", false);
          disable.input(".control-header-search-text-alignment-left", false);
          disable.input(".control-header-search-text-alignment-center", false);
          disable.input(".control-header-search-text-alignment-right", false);
          disable.element("[for=control-header-search-size]", false);
          disable.input(".control-header-search-size", false);
          disable.input(".control-header-search-size-default", false);
          disable.element(".control-header-search-size-helper", false);
        } else {
          disable.element(".control-header-search-style-label", true);
          disable.input(".control-header-search-style-auto", true);
          disable.element(".control-header-search-style-auto-helper", true);
          disable.input(".control-header-search-style-custom", true);
          disable.element(".control-header-search-style-custom-helper", true);
          disable.element("[for=control-header-search-width]", true);
          disable.input(".control-header-search-width", true);
          disable.input(".control-header-search-focus", true);
          disable.element(".control-header-search-focus-helper", true);
          disable.element(".control-header-search-engine-label", true);
          disable.input(".control-header-search-engine-google", true);
          disable.input(".control-header-search-engine-duckduckgo", true);
          disable.input(".control-header-search-engine-youtube", true);
          disable.input(".control-header-search-engine-giphy", true);
          disable.input(".control-header-search-engine-bing", true);
          disable.input(".control-header-search-engine-custom", true);
          disable.element(".control-header-search-text-alignment-grid", true);
          disable.element(".control-header-search-text-alignment-label", true);
          disable.input(".control-header-search-text-alignment-left", true);
          disable.input(".control-header-search-text-alignment-center", true);
          disable.input(".control-header-search-text-alignment-right", true);
          disable.element("[for=control-header-search-size]", true);
          disable.input(".control-header-search-size", true);
          disable.input(".control-header-search-size-default", true);
          disable.element(".control-header-search-size-helper", true);
        };
        if (state.get().header.search.show && state.get().header.search.engine.selected === "custom") {
          disable.element("[for=control-header-search-engine-custom-name]", false);
          disable.input(".control-header-search-engine-custom-name", false);
          disable.element("[for=control-header-search-engine-custom-url]", false);
          disable.input(".control-header-search-engine-custom-url", false);
          disable.element(".control-header-search-engine-custom-helper", false);
        } else {
          disable.element("[for=control-header-search-engine-custom-name]", true);
          disable.input(".control-header-search-engine-custom-name", true);
          disable.element("[for=control-header-search-engine-custom-url]", true);
          disable.input(".control-header-search-engine-custom-url", true);
          disable.element(".control-header-search-engine-custom-helper", true);
        };
        if (state.get().header.search.show && state.get().header.search.style === "custom") {
          disable.element("[for=control-header-search-width]", false);
          disable.input(".control-header-search-width", false);
        } else {
          disable.element("[for=control-header-search-width]", true);
          disable.input(".control-header-search-width", true);
        };
      };
      var _greeting = function() {
        if (state.get().header.greeting.show) {
          disable.element("[for=control-header-greeting-name]", false);
          disable.input(".control-header-greeting-name", false);
          disable.input(".control-header-greeting-type-good", false);
          disable.input(".control-header-greeting-type-hello", false);
          disable.input(".control-header-greeting-type-hi", false);
          disable.element("[for=control-header-greeting-size]", false);
          disable.input(".control-header-greeting-size", false);
          disable.input(".control-header-greeting-size-default", false);
        } else {
          disable.element("[for=control-header-greeting-name]", true);
          disable.input(".control-header-greeting-name", true);
          disable.input(".control-header-greeting-type-good", true);
          disable.input(".control-header-greeting-type-hello", true);
          disable.input(".control-header-greeting-type-hi", true);
          disable.element("[for=control-header-greeting-size]", true);
          disable.input(".control-header-greeting-size", true);
          disable.input(".control-header-greeting-size-default", true);
        };
      };
      var _transitional = function() {
        if (state.get().header.date.date.show || state.get().header.date.day.show || state.get().header.date.month.show || state.get().header.date.year.show || state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show) {
          disable.input(".control-header-transitional-show", false);
          disable.element(".control-header-transitional-show-helper", false);
        } else {
          disable.input(".control-header-transitional-show", true);
          disable.element(".control-header-transitional-show-helper", true);
        };
        if (state.get().header.transitional.show && ((state.get().header.date.date.show || state.get().header.date.day.show || state.get().header.date.month.show || state.get().header.date.year.show || state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show))) {
          disable.input(".control-header-transitional-type-timeanddate", false);
          disable.input(".control-header-transitional-type-its", false);
          disable.element("[for=control-header-transitional-size]", false);
          disable.input(".control-header-transitional-size", false);
          disable.input(".control-header-transitional-size-default", false);
        } else {
          disable.input(".control-header-transitional-type-timeanddate", true);
          disable.input(".control-header-transitional-type-its", true);
          disable.element("[for=control-header-transitional-size]", true);
          disable.input(".control-header-transitional-size", true);
          disable.input(".control-header-transitional-size-default", true);
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
        disable.input(".control-link-edit", false);
      } else {
        disable.input(".control-link-edit", false);
      };
    };
    var _link = function() {
      disable.input(".control-layout-order-headerlink", true);
      disable.input(".control-layout-order-linkheader", true);
      disable.element(".control-layout-order-helper", true);
      disable.element("[for=control-link-area-width]", true);
      disable.input(".control-link-area-width", true);
      disable.input(".control-link-area-width-match", true);
      disable.element(".control-link-area-width-helper", true);
      disable.element(".control-link-area-alignment-grid", true);
      disable.element(".control-link-area-alignment-label", true);
      disable.input(".control-link-area-alignment-left", true);
      disable.input(".control-link-area-alignment-center", true);
      disable.input(".control-link-area-alignment-right", true);
      disable.element(".control-link-area-alignment-helper", true);
      disable.element("[for=control-link-item-size]", true);
      disable.input(".control-link-item-size", true);
      disable.input(".control-link-item-size-default", true);
      disable.input(".control-link-item-display-show", true);
      disable.element("[for=control-link-item-display-letter-size]", true);
      disable.input(".control-link-item-display-letter-size", true);
      disable.input(".control-link-item-display-letter-size-default", true);
      disable.element("[for=control-link-item-display-icon-size]", true);
      disable.input(".control-link-item-display-icon-size", true);
      disable.input(".control-link-item-display-icon-size-default", true);
      disable.input(".control-link-item-name-show", true);
      disable.element("[for=control-link-item-name-size]", true);
      disable.input(".control-link-item-name-size", true);
      disable.input(".control-link-item-name-size-default", true);
      disable.input(".control-link-item-order-displayname", true);
      disable.input(".control-link-item-order-namedisplay", true);
      disable.element(".control-link-item-order-namedisplay-helper", true);
      disable.input(".control-link-item-url-show", true);
      disable.input(".control-link-item-line-show", true);
      disable.input(".control-link-item-hoverscale", true);
      disable.element(".control-link-item-display-alignment-grid", true);
      disable.element(".control-link-item-display-alignment-label", true);
      disable.input(".control-link-item-display-alignment-topleft", true);
      disable.input(".control-link-item-display-alignment-topcenter", true);
      disable.input(".control-link-item-display-alignment-topright", true);
      disable.input(".control-link-item-display-alignment-centerleft", true);
      disable.input(".control-link-item-display-alignment-centercenter", true);
      disable.input(".control-link-item-display-alignment-centerright", true);
      disable.input(".control-link-item-display-alignment-bottomleft", true);
      disable.input(".control-link-item-display-alignment-bottomcenter", true);
      disable.input(".control-link-item-display-alignment-bottomright", true);
      disable.input(".control-link-newtab", true);
      disable.input(".control-link-style-block", true);
      disable.element(".control-link-style-block-helper", true);
      disable.input(".control-link-style-list", true);
      disable.element(".control-link-style-list-helper", true);
      disable.input(".control-link-sort-name", true);
      disable.input(".control-link-sort-letter", true);
      disable.input(".control-link-sort-icon", true);
      disable.input(".control-link-accent-clear", true);
      disable.input(".control-link-accent-set", true);
      if (state.get().link.show) {
        disable.input(".control-layout-order-headerlink", false);
        disable.input(".control-layout-order-linkheader", false);
        disable.element(".control-layout-order-helper", false);
        disable.element("[for=control-link-area-width]", false);
        disable.input(".control-link-area-width", false);
        disable.input(".control-link-area-width-match", false);
        disable.element(".control-link-area-width-helper", false);
        disable.element(".control-link-area-alignment-grid", false);
        disable.element(".control-link-area-alignment-label", false);
        disable.input(".control-link-area-alignment-left", false);
        disable.input(".control-link-area-alignment-center", false);
        disable.input(".control-link-area-alignment-right", false);
        disable.element(".control-link-area-alignment-helper", false);
        disable.element("[for=control-link-item-size]", false);
        disable.input(".control-link-item-size", false);
        disable.input(".control-link-item-size-default", false);
        disable.input(".control-link-item-display-show", false);
        disable.input(".control-link-item-name-show", false);
        disable.input(".control-link-item-url-show", false);
        disable.input(".control-link-item-line-show", false);
        disable.input(".control-link-item-hoverscale", false);
        disable.input(".control-link-newtab", false);
        disable.input(".control-link-style-block", false);
        disable.element(".control-link-style-block-helper", false);
        disable.input(".control-link-style-list", false);
        disable.element(".control-link-style-list-helper", false);
        disable.input(".control-link-sort-name", false);
        disable.input(".control-link-sort-letter", false);
        disable.input(".control-link-sort-icon", false);
        disable.input(".control-link-accent-clear", false);
        disable.input(".control-link-accent-set", false);
        if (state.get().link.item.display.show) {
          disable.element("[for=control-link-item-display-letter-size]", false);
          disable.input(".control-link-item-display-letter-size", false);
          disable.input(".control-link-item-display-letter-size-default", false);
          disable.element("[for=control-link-item-display-icon-size]", false);
          disable.input(".control-link-item-display-icon-size", false);
          disable.input(".control-link-item-display-icon-size-default", false);
        };
        if (state.get().link.item.name.show) {
          disable.element("[for=control-link-item-name-size]", false);
          disable.input(".control-link-item-name-size", false);
          disable.input(".control-link-item-name-size-default", false);
        };
        if (state.get().link.item.display.show || state.get().link.item.name.show) {
          disable.element(".control-link-item-display-alignment-grid", false);
          disable.element(".control-link-item-display-alignment-label", false);
          disable.input(".control-link-item-display-alignment-topleft", false);
          disable.input(".control-link-item-display-alignment-topcenter", false);
          disable.input(".control-link-item-display-alignment-topright", false);
          disable.input(".control-link-item-display-alignment-centerleft", false);
          disable.input(".control-link-item-display-alignment-centercenter", false);
          disable.input(".control-link-item-display-alignment-centerright", false);
          disable.input(".control-link-item-display-alignment-bottomleft", false);
          disable.input(".control-link-item-display-alignment-bottomcenter", false);
          disable.input(".control-link-item-display-alignment-bottomright", false);
        };
        if (state.get().link.item.display.show && state.get().link.item.name.show) {
          disable.input(".control-link-item-order-displayname", false);
          disable.input(".control-link-item-order-namedisplay", false);
          disable.element(".control-link-item-order-namedisplay-helper", false);
        };
      };
    };
    var _theme = function() {
      if (state.get().theme.accent.random.active) {
        disable.input(".control-theme-accent-random-style-any", false);
        disable.input(".control-theme-accent-random-style-light", false);
        disable.input(".control-theme-accent-random-style-dark", false);
        disable.input(".control-theme-accent-random-style-pastel", false);
        disable.input(".control-theme-accent-random-style-saturated", false);
        disable.input(".control-theme-accent-randomise", false);
      } else {
        disable.input(".control-theme-accent-random-style-any", true);
        disable.input(".control-theme-accent-random-style-light", true);
        disable.input(".control-theme-accent-random-style-dark", true);
        disable.input(".control-theme-accent-random-style-pastel", true);
        disable.input(".control-theme-accent-random-style-saturated", true);
        disable.input(".control-theme-accent-randomise", true);
      };
    };
    var _background = function() {
      if (state.get().background.image.show) {
        disable.input(".control-background-image-from-file", false);
        disable.input(".control-background-image-from-url", false);
        disable.element("[for=control-background-image-opacity]", false);
        disable.input(".control-background-image-opacity", false);
        disable.element("[for=control-background-image-blur]", false);
        disable.input(".control-background-image-blur", false);
        disable.element("[for=control-background-image-grayscale]", false);
        disable.input(".control-background-image-grayscale", false);
        disable.element("[for=control-background-image-accent]", false);
        disable.input(".control-background-image-accent", false);
        disable.element("[for=control-background-image-scale]", false);
        disable.input(".control-background-image-scale", false);
      } else {
        disable.input(".control-background-image-from-file", true);
        disable.input(".control-background-image-from-url", true);
        disable.element("[for=control-background-image-opacity]", true);
        disable.input(".control-background-image-opacity", true);
        disable.element("[for=control-background-image-blur]", true);
        disable.input(".control-background-image-blur", true);
        disable.element("[for=control-background-image-grayscale]", true);
        disable.input(".control-background-image-grayscale", true);
        disable.element("[for=control-background-image-accent]", true);
        disable.input(".control-background-image-accent", true);
        disable.element("[for=control-background-image-scale]", true);
        disable.input(".control-background-image-scale", true);
      };
      if (state.get().background.image.show && state.get().background.image.from == "file") {
        disable.element(".control-background-image-file-feedback", false);
        disable.input(".control-background-image-file", false);
        disable.input(".control-background-image-file-clear", false);
        disable.element(".control-background-image-file-helper", false);
      } else {
        disable.element(".control-background-image-file-feedback", true);
        disable.input(".control-background-image-file", true);
        disable.input(".control-background-image-file-clear", true);
        disable.element(".control-background-image-file-helper", true);
      };
      if (state.get().background.image.show && state.get().background.image.from == "url") {
        disable.input(".control-background-image-url", false);
        disable.element(".control-background-image-url-helper", false);
      } else {
        disable.input(".control-background-image-url", true);
        disable.element(".control-background-image-url-helper", true);
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
    var supportedType = ["checkbox", "radio", "text", "number", "range", "color"];
    _allControl.forEach(function(arrayItem, index) {
      if (supportedType.includes(arrayItem.element.type)) {
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
