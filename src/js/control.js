var control = (function() {

  var _allControl = [{
    element: helper.e(".control-menu-open"),
    type: "button",
    func: function() {
      menu.open();
    }
  }, {
    element: helper.e(".control-menu-layout"),
    type: "button",
    func: function() {
      menu.nav(this.element, helper.e(".menu-content-area-layout"));
    }
  }, {
    element: helper.e(".control-menu-header"),
    type: "button",
    func: function() {
      menu.nav(this.element, helper.e(".menu-content-area-header"));
    }
  }, {
    element: helper.e(".control-menu-groups"),
    type: "button",
    func: function() {
      menu.nav(this.element, helper.e(".menu-content-area-groups"));
    }
  }, {
    element: helper.e(".control-menu-bookmarks"),
    type: "button",
    func: function() {
      menu.nav(this.element, helper.e(".menu-content-area-bookmarks"));
    }
  }, {
    element: helper.e(".control-menu-theme"),
    type: "button",
    func: function() {
      menu.nav(this.element, helper.e(".menu-content-area-theme"));
    }
  }, {
    element: helper.e(".control-menu-background"),
    type: "button",
    func: function() {
      menu.nav(this.element, helper.e(".menu-content-area-background"));
    }
  }, {
    element: helper.e(".control-menu-data"),
    type: "button",
    func: function() {
      menu.nav(this.element, helper.e(".menu-content-area-data"));
    }
  }, {
    element: helper.e(".control-menu-nightTab"),
    type: "button",
    func: function() {
      menu.nav(this.element, helper.e(".menu-content-area-nightTab"));
    }
  }, {
    element: helper.e(".control-menu-close"),
    type: "button",
    func: function() {
      menu.close();
    }
  }, {
    element: helper.e(".control-link-add"),
    type: "button",
    func: function() {
      link.add.item.open();
    }
  }, {
    element: helper.e(".control-group-add"),
    type: "button",
    func: function() {
      link.add.group.open();
    }
  }, {
    element: helper.e(".control-edit"),
    path: "edit",
    type: "checkbox",
    func: function() {
      link.tabindex();
      render.class();
    }
  }, {
    element: helper.e(".control-theme-accent-current-quick"),
    path: "theme.accent.current",
    type: "color",
    func: function() {
      theme.accent();
      theme.render.accent.input.picker();
      theme.render.accent.input.hex();
      link.groupAndItems();
    }
  }, {
    element: helper.e(".control-layout-width"),
    path: "layout.width",
    type: "range",
    rangeCountElement: helper.e(".control-layout-width-count"),
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".layout"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".layout"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.box.open({
            element: helper.e(".layout"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.box.close();
      }
    }],
    func: function() {
      render.class();
      layout.render.width();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-layout-width-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".layout"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("layout.width", helper.getObject({
        object: state.mod.default,
        path: "layout.width"
      }));
      layout.render.width();
      render.update();
    }
  }, {
    element: helper.e(".control-layout-alignment-topleft"),
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-layout-alignment-topcenter"),
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-layout-alignment-topright"),
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-layout-alignment-centerleft"),
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-layout-alignment-centercenter"),
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-layout-alignment-centerright"),
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-layout-alignment-bottomleft"),
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-layout-alignment-bottomcenter"),
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-layout-alignment-bottomright"),
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-layout-order-headerlink"),
    path: "layout.order",
    type: "radio",
    func: function() {
      render.class();
      layout.render.order();
      header.render.shade();
    }
  }, {
    element: helper.e(".control-layout-order-linkheader"),
    path: "layout.order",
    type: "radio",
    func: function() {
      render.class();
      layout.render.order();
      header.render.shade();
    }
  }, {
    element: helper.e(".control-layout-padding"),
    path: "layout.padding",
    type: "range",
    rangeCountElement: helper.e(".control-layout-padding-count"),
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".layout"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".layout"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.box.open({
            element: helper.e(".layout"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.box.close();
      }
    }],
    func: function() {
      layout.render.padding();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-layout-padding-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".layout"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("layout.padding", helper.getObject({
        object: state.mod.default,
        path: "layout.padding"
      }));
      layout.render.padding();
      render.update();
    }
  }, {
    element: helper.e(".control-layout-gutter"),
    path: "layout.gutter",
    type: "range",
    rangeCountElement: helper.e(".control-layout-gutter-count"),
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".layout"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".layout"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.box.open({
            element: helper.e(".layout"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.box.close();
      }
    }],
    func: function() {
      layout.render.gutter();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-layout-gutter-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".layout"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("layout.gutter", helper.getObject({
        object: state.mod.default,
        path: "layout.gutter"
      }));
      layout.render.gutter();
      render.update();
    }
  }, {
    element: helper.e(".control-layout-size"),
    path: "layout.size",
    type: "range",
    valueMod: ["float"],
    rangeCountElement: helper.e(".control-layout-size-count"),
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".layout"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".layout"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.box.open({
            element: helper.e(".layout"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.box.close();
      }
    }],
    func: function() {
      layout.render.size();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-layout-size-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".layout"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("layout.size", helper.getObject({
        object: state.mod.default,
        path: "layout.size"
      }));
      layout.render.size();
      render.update();
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
      render.class();
      header.render.shade();
    }
  }, {
    element: helper.e(".control-header-area-width"),
    path: "header.area.width",
    type: "range",
    rangeCountElement: helper.e(".control-header-area-width-count"),
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".header-area")
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".header-area")
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.box.open({
            element: helper.e(".header-area"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.box.close();
      }
    }],
    func: function() {
      header.render.area.width();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-header-area-width-match"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".header-area"),
          delay: 500
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.box.close();
      }
    }],
    func: function() {
      mod.setValue("header.area.width", helper.getObject({
        object: state.get.current(),
        path: "link.area.width"
      }));
      header.render.area.width();
      render.update();
    }
  }, {
    element: helper.e(".control-header-area-alignment-left"),
    path: "header.area.alignment",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.box.open({
          element: helper.e(".header-area"),
          delay: 500
        });
      }
    }],
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-header-area-alignment-center"),
    path: "header.area.alignment",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.box.open({
          element: helper.e(".header-area"),
          delay: 500
        });
      }
    }],
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-header-area-alignment-right"),
    path: "header.area.alignment",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.box.open({
          element: helper.e(".header-area"),
          delay: 500
        });
      }
    }],
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-header-item-alignment-left"),
    path: "header.item.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-header-item-alignment-center"),
    path: "header.item.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-header-item-alignment-right"),
    path: "header.item.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-header-greeting-show"),
    path: "header.greeting.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
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
    rangeCountElement: helper.e(".control-header-greeting-size-count"),
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".greeting"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".greeting"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.box.open({
            element: helper.e(".greeting"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.box.close();
      }
    }],
    func: function() {
      header.render.greeting.size();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-header-greeting-size-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".greeting"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("header.greeting.size", helper.getObject({
        object: state.mod.default,
        path: "header.greeting.size"
      }));
      header.render.greeting.size();
      render.update();
    }
  }, {
    element: helper.e(".control-header-transitional-show"),
    path: "header.transitional.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
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
    rangeCountElement: helper.e(".control-header-transitional-size-count"),
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".transitional"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".transitional"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.box.open({
            element: helper.e(".transitional"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.box.close();
      }
    }],
    func: function() {
      header.render.transitional.size();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-header-transitional-size-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".transitional"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("header.transitional.size", helper.getObject({
        object: state.mod.default,
        path: "header.transitional.size"
      }));
      header.render.transitional.size();
      render.update();
    }
  }, {
    element: helper.e(".control-header-clock-hours-show"),
    path: "header.clock.hours.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
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
      render.class();
      render.dependents();
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
      render.class();
      render.dependents();
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
      render.dependents();
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
      render.dependents();
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
    rangeCountElement: helper.e(".control-header-clock-size-count"),
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".clock"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".clock"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.box.open({
            element: helper.e(".clock"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.box.close();
      }
    }],
    func: function() {
      header.render.clock.size();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-header-clock-size-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".clock"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("header.clock.size", helper.getObject({
        object: state.mod.default,
        path: "header.clock.size"
      }));
      header.render.clock.size();
      render.update();
    }
  }, {
    element: helper.e(".control-header-date-day-show"),
    path: "header.date.day.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
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
      render.dependents();
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
      render.dependents();
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
      render.class();
      render.dependents();
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
      render.class();
      render.dependents();
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
      render.dependents();
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
      render.dependents();
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
      render.class();
      render.dependents();
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
    rangeCountElement: helper.e(".control-header-date-size-count"),
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".date"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".date"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.box.open({
            element: helper.e(".date"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.box.close();
      }
    }],
    func: function() {
      header.render.date.size();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-header-date-size-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".date"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("header.date.size", helper.getObject({
        object: state.mod.default,
        path: "header.date.size"
      }));
      header.render.date.size();
      render.update();
    }
  }, {
    element: helper.e(".control-header-search-show"),
    path: "header.search.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
      header.render.search.width();
    }
  }, {
    element: helper.e(".control-header-search-style-auto"),
    path: "header.search.style",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.box.open({
          element: helper.e(".header-search-input"),
          delay: 500
        });
      }
    }],
    func: function() {
      render.class();
      render.dependents();
      header.render.search.width();
    }
  }, {
    element: helper.e(".control-header-search-style-custom"),
    path: "header.search.style",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.box.open({
          element: helper.e(".header-search-input"),
          delay: 500
        });
      }
    }],
    func: function() {
      render.class();
      render.dependents();
      header.render.search.width();
    }
  }, {
    element: helper.e(".control-header-search-width"),
    path: "header.search.width",
    type: "range",
    rangeCountElement: helper.e(".control-header-search-width-count"),
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".header-search-input"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".header-search-input"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.box.open({
            element: helper.e(".header-search-input"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.box.close();
      }
    }],
    func: function() {
      header.render.search.width();
      render.range.count(this);
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
      render.dependents();
      search.render.engine();
    }
  }, {
    element: helper.e(".control-header-search-engine-duckduckgo"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render.dependents();
      search.render.engine();
    }
  }, {
    element: helper.e(".control-header-search-engine-youtube"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render.dependents();
      search.render.engine();
    }
  }, {
    element: helper.e(".control-header-search-engine-giphy"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render.dependents();
      search.render.engine();
    }
  }, {
    element: helper.e(".control-header-search-engine-bing"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render.dependents();
      search.render.engine();
    }
  }, {
    element: helper.e(".control-header-search-engine-custom"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render.dependents();
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
      render.class();
    }
  }, {
    element: helper.e(".control-header-search-text-alignment-center"),
    path: "header.search.text.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-header-search-text-alignment-right"),
    path: "header.search.text.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-header-search-size"),
    path: "header.search.size",
    type: "range",
    valueMod: ["float"],
    rangeCountElement: helper.e(".control-header-search-size-count"),
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".header-search-input"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".header-search-input"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.box.open({
            element: helper.e(".header-search-input"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.box.close();
      }
    }],
    func: function() {
      header.render.search.size();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-header-search-size-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".header-search-input"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("header.search.size", helper.getObject({
        object: state.mod.default,
        path: "header.search.size"
      }));
      header.render.search.size();
      render.update();
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
      render.class();
      render.dependents();
    }
  }, {
    element: helper.e(".control-header-button-accent-show"),
    path: "header.button.accent.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
    }
  }, {
    element: helper.e(".control-header-button-size"),
    path: "header.button.size",
    type: "range",
    valueMod: ["float"],
    rangeCountElement: helper.e(".control-header-button-size-count"),
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".control-menu-open"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".control-menu-open"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.box.open({
            element: helper.e(".control-menu-open"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.box.close();
      }
    }],
    func: function() {
      header.render.button.size();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-header-button-size-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".control-menu-open"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("header.button.size", helper.getObject({
        object: state.mod.default,
        path: "header.button.size"
      }));
      header.render.button.size();
      render.update();
    }
  }, {
    element: helper.e(".control-header-shade-show"),
    path: "header.shade.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
      header.render.shade();
    }
  }, {
    element: helper.e(".control-header-shade-style-always"),
    path: "header.shade.style",
    type: "radio",
    func: function() {
      render.class();
      header.render.shade();
    }
  }, {
    element: helper.e(".control-header-shade-style-scroll"),
    path: "header.shade.style",
    type: "radio",
    func: function() {
      render.class();
      header.render.shade();
    }
  }, {
    element: helper.e(".control-header-shade-opacity"),
    path: "header.shade.opacity",
    type: "range",
    valueMod: ["reverse", "float"],
    rangeCountElement: helper.e(".control-header-shade-opacity-count"),
    func: function() {
      header.render.opacity();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-header-radius"),
    path: "header.radius",
    type: "checkbox",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-group-name-show"),
    path: "group.name.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
    }
  }, {
    element: helper.e(".control-group-name-size"),
    path: "group.name.size",
    type: "range",
    valueMod: ["float"],
    rangeCountElement: helper.e(".control-group-name-size-count"),
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".group-name-text"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".group-name-text"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.box.open({
            element: helper.e(".group-name-text"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.box.close();
      }
    }],
    func: function() {
      link.render.group.size();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-group-name-size-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".group-name-text"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("group.name.size", helper.getObject({
        object: state.mod.default,
        path: "group.name.size"
      }));
      link.render.group.size();
      render.update();
    }
  }, {
    element: helper.e(".control-group-area-alignment-left"),
    path: "group.area.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-group-area-alignment-center"),
    path: "group.area.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-group-area-alignment-right"),
    path: "group.area.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-group-order-headerbody"),
    path: "group.order",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-group-order-bodyheader"),
    path: "group.order",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-group-border"),
    path: "group.border",
    type: "range",
    rangeCountElement: helper.e(".control-group-border-count"),
    func: function() {
      link.render.group.border();
      render.class();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-header-border-top"),
    path: "header.border.top",
    type: "range",
    rangeCountElement: helper.e(".control-header-border-top-count"),
    func: function() {
      header.render.border();
      render.class();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-header-border-bottom"),
    path: "header.border.bottom",
    type: "range",
    rangeCountElement: helper.e(".control-header-border-bottom-count"),
    func: function() {
      header.render.border();
      render.class();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-header-position-sticky"),
    path: "header.position",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-header-position-inline"),
    path: "header.position",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-area-width"),
    path: "link.area.width",
    type: "range",
    rangeCountElement: helper.e(".control-link-area-width-count"),
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".group"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".group"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.box.open({
            element: helper.e(".group"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.box.close();
      }
    }],
    func: function() {
      link.render.area.width();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-link-area-width-match"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".group"),
          delay: 500
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.box.close();
      }
    }],
    func: function() {
      mod.setValue("link.area.width", helper.getObject({
        object: state.get.current(),
        path: "header.area.width"
      }));
      link.render.area.width();
      render.update();
    }
  }, {
    element: helper.e(".control-link-area-alignment-left"),
    path: "link.area.alignment",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.box.open({
          element: helper.e(".group"),
          delay: 500
        });
      }
    }],
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-area-alignment-center"),
    path: "link.area.alignment",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.box.open({
          element: helper.e(".group"),
          delay: 500
        });
      }
    }],
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-area-alignment-right"),
    path: "link.area.alignment",
    type: "radio",
    additionalEvents: [{
      event: "change",
      func: function() {
        edge.box.open({
          element: helper.e(".group"),
          delay: 500
        });
      }
    }],
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-size"),
    path: "link.item.size",
    type: "range",
    valueMod: ["float"],
    rangeCountElement: helper.e(".control-link-item-size-count"),
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".link-item"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".link-item"),
        });
      }
    }, {
      event: "mouseup",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "touchend",
      func: function() {
        edge.box.close();
      }
    }, {
      event: "keydown",
      func: function() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
          edge.box.open({
            element: helper.e(".link-item"),
          });
        };
      }
    }, {
      event: "keyup",
      func: function() {
        edge.box.close();
      }
    }],
    func: function() {
      link.render.item.size();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-link-show"),
    path: "link.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
      search.render.engine();
    }
  }, {
    element: helper.e(".control-link-item-size-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".link-item"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("link.item.size", helper.getObject({
        object: state.mod.default,
        path: "link.item.size"
      }));
      link.render.item.size();
      render.update();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-topleft"),
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-topcenter"),
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-topright"),
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-centerleft"),
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-centercenter"),
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-centerright"),
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-bottomleft"),
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-bottomcenter"),
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-display-alignment-bottomright"),
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-display-letcon-show"),
    path: "link.item.display.letcon.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
    }
  }, {
    element: helper.e(".control-link-item-display-letcon-letter-size"),
    path: "link.item.display.letcon.letter.size",
    type: "range",
    valueMod: ["float"],
    rangeCountElement: helper.e(".control-link-item-display-letcon-letter-size-count"),
    func: function() {
      link.render.item.display.letter();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-link-item-display-letcon-letter-size-default"),
    type: "button",
    func: function() {
      mod.setValue("link.item.display.letcon.letter.size", helper.getObject({
        object: state.mod.default,
        path: "link.item.display.letcon.letter.size"
      }));
      link.render.item.display.letter();
      render.update();
    }
  }, {
    element: helper.e(".control-link-item-display-letcon-icon-size"),
    path: "link.item.display.letcon.icon.size",
    type: "range",
    valueMod: ["float"],
    rangeCountElement: helper.e(".control-link-item-display-letcon-icon-size-count"),
    func: function() {
      link.render.item.display.icon();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-link-item-display-letcon-icon-size-default"),
    type: "button",
    func: function() {
      mod.setValue("link.item.display.letcon.icon.size", helper.getObject({
        object: state.mod.default,
        path: "link.item.display.letcon.icon.size"
      }));
      link.render.item.display.icon();
      render.update();
    }
  }, {
    element: helper.e(".control-link-item-display-name-show"),
    path: "link.item.display.name.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
    }
  }, {
    element: helper.e(".control-link-item-display-name-size"),
    path: "link.item.display.name.size",
    type: "range",
    valueMod: ["float"],
    rangeCountElement: helper.e(".control-link-item-display-name-size-count"),
    func: function() {
      link.render.item.name();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-link-item-display-name-size-default"),
    type: "button",
    func: function() {
      mod.setValue("link.item.display.name.size", helper.getObject({
        object: state.mod.default,
        path: "link.item.display.name.size"
      }));
      link.render.item.name();
      render.update();
    }
  }, {
    element: helper.e(".control-link-item-display-rotate"),
    path: "link.item.display.rotate",
    type: "range",
    rangeCountElement: helper.e(".control-link-item-display-rotate-count"),
    func: function() {
      link.render.item.rotate();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-link-item-display-rotate-default"),
    type: "button",
    func: function() {
      mod.setValue("link.item.display.rotate", helper.getObject({
        object: state.mod.default,
        path: "link.item.display.rotate"
      }));
      link.render.item.rotate();
      render.update();
    }
  }, {
    element: helper.e(".control-link-item-display-translate-x"),
    path: "link.item.display.translate.x",
    type: "range",
    valueMod: ["float"],
    rangeCountElement: helper.e(".control-link-item-display-translate-x-count"),
    func: function() {
      link.render.item.translate.x();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-link-item-display-translate-x-default"),
    type: "button",
    func: function() {
      mod.setValue("link.item.display.translate.x", helper.getObject({
        object: state.mod.default,
        path: "link.item.display.translate.x"
      }));
      link.render.item.translate.x();
      render.update();
    }
  }, {
    element: helper.e(".control-link-item-display-translate-y"),
    path: "link.item.display.translate.y",
    type: "range",
    valueMod: ["float"],
    rangeCountElement: helper.e(".control-link-item-display-translate-y-count"),
    func: function() {
      link.render.item.translate.y();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-link-item-display-translate-y-default"),
    type: "button",
    func: function() {
      mod.setValue("link.item.display.translate.y", helper.getObject({
        object: state.mod.default,
        path: "link.item.display.translate.y"
      }));
      link.render.item.translate.y();
      render.update();
    }
  }, {
    element: helper.e(".control-link-item-display-gutter"),
    path: "link.item.display.gutter",
    type: "range",
    rangeCountElement: helper.e(".control-link-item-display-gutter-count"),
    func: function() {
      link.render.item.gutter();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-link-item-display-gutter-default"),
    type: "button",
    func: function() {
      mod.setValue("link.item.display.gutter", helper.getObject({
        object: state.mod.default,
        path: "link.item.display.gutter"
      }));
      link.render.item.gutter();
      render.update();
    }
  }, {
    element: helper.e(".control-link-item-display-direction-horizontal"),
    path: "link.item.display.direction",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-display-direction-vertical"),
    path: "link.item.display.direction",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-display-order-letconname"),
    path: "link.item.display.order",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-display-order-nameletcon"),
    path: "link.item.display.order",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-url-show"),
    path: "link.item.url.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
    }
  }, {
    element: helper.e(".control-link-item-line-show"),
    path: "link.item.line.show",
    type: "checkbox",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-shadow-show"),
    path: "link.item.shadow.show",
    type: "checkbox",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-hoverscale"),
    path: "link.item.hoverScale.show",
    type: "checkbox",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-newtab"),
    path: "link.newTab",
    type: "checkbox",
    func: function() {
      link.groupAndItems();
    }
  }, {
    element: helper.e(".control-link-item-border"),
    path: "link.item.border",
    type: "range",
    rangeCountElement: helper.e(".control-link-item-border-count"),
    func: function() {
      render.class();
      link.render.item.border();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-link-style-block"),
    path: "link.style",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-style-list"),
    path: "link.style",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-orientation-top"),
    path: "link.orientation",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-orientation-bottom"),
    path: "link.orientation",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-link-sort-letter"),
    type: "button",
    func: function() {
      bookmarks.sort("letter");
      link.groupAndItems();
    }
  }, {
    element: helper.e(".control-link-sort-icon"),
    type: "button",
    func: function() {
      bookmarks.sort("icon");
      link.groupAndItems();
    }
  }, {
    element: helper.e(".control-link-sort-name"),
    type: "button",
    func: function() {
      bookmarks.sort("name");
      link.groupAndItems();
    }
  }, {
    element: helper.e(".control-link-accent-clear"),
    type: "button",
    func: function() {
      link.mod.accent.clear();
      link.groupAndItems();
    }
  }, {
    element: helper.e(".control-link-accent-set"),
    type: "button",
    func: function() {
      link.mod.accent.rainbow();
      link.groupAndItems();
    }
  }, {
    element: helper.e(".control-theme-accent-current-picker"),
    path: "theme.accent.current",
    type: "color",
    func: function() {
      theme.accent();
      theme.render.accent.input.quick();
      theme.render.accent.input.hex();
      link.groupAndItems();
    }
  }, {
    element: helper.e(".control-theme-accent-current-hex"),
    path: "theme.accent.current",
    type: "text",
    valueMod: ["hexTextString"],
    func: function() {
      theme.accent();
      theme.render.accent.input.picker();
      theme.render.accent.input.quick();
      link.groupAndItems();
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
    rangeCountElement: helper.e(".control-theme-radius-count"),
    func: function() {
      theme.render.radius();
      render.class();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-theme-radius-default"),
    type: "button",
    func: function() {
      mod.setValue("theme.radius", helper.getObject({
        object: state.mod.default,
        path: "theme.radius"
      }));
      theme.render.radius();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-color-picker"),
    path: "theme.color",
    type: "color",
    func: function() {
      theme.render.color.spread();
      theme.render.color.input.hex();
      theme.render.color.range();
    }
  }, {
    element: helper.e(".control-theme-color-hex"),
    path: "theme.color",
    type: "text",
    valueMod: ["hexTextString"],
    func: function() {
      theme.render.color.spread();
      theme.render.color.input.picker();
      theme.render.color.range();
    }
  }, {
    element: helper.e(".control-theme-color-r"),
    path: "theme.color.r",
    type: "range",
    rangeCountElement: helper.e(".control-theme-color-r-count"),
    func: function() {
      theme.render.color.spread();
      theme.render.color.input.picker();
      theme.render.color.input.hex();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-theme-color-g"),
    path: "theme.color.g",
    type: "range",
    rangeCountElement: helper.e(".control-theme-color-g-count"),
    func: function() {
      theme.render.color.spread();
      theme.render.color.input.picker();
      theme.render.color.input.hex();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-theme-color-b"),
    path: "theme.color.b",
    type: "range",
    rangeCountElement: helper.e(".control-theme-color-b-count"),
    func: function() {
      theme.render.color.spread();
      theme.render.color.input.picker();
      theme.render.color.input.hex();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-theme-color-default"),
    type: "button",
    func: function() {
      mod.setValue("theme.color", helper.getObject({
        object: state.mod.default,
        path: "theme.color"
      }));
      theme.render.color.spread();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-accent-random-active"),
    path: "theme.accent.random.active",
    type: "checkbox",
    func: function() {
      render.dependents();
      theme.render.accent.color();
    }
  }, {
    element: helper.e(".control-theme-accent-random-style-any"),
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-theme-accent-random-style-light"),
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-theme-accent-random-style-dark"),
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-theme-accent-random-style-pastel"),
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-theme-accent-random-style-saturated"),
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: helper.e(".control-theme-accent-randomise"),
    type: "button",
    func: function() {
      theme.render.accent.random();
      theme.render.accent.color();
      link.groupAndItems();
    }
  }, {
    element: helper.e(".control-background-color-by-theme"),
    path: "background.color.by",
    type: "radio",
    func: function() {
      render.dependents();
      render.class();
    }
  }, {
    element: helper.e(".control-background-color-by-custom"),
    path: "background.color.by",
    type: "radio",
    func: function() {
      render.dependents();
      render.class();
    }
  }, {
    element: helper.e(".control-background-color-custom-current-picker"),
    path: "background.color.custom",
    type: "color",
    func: function() {
      background.render.color.custom();
      background.render.input.hex();
    }
  }, {
    element: helper.e(".control-background-color-custom-current-hex"),
    path: "background.color.custom",
    type: "text",
    valueMod: ["hexTextString"],
    func: function() {
      background.render.color.custom();
      background.render.input.picker();
    }
  }, {
    element: helper.e(".control-background-image-show"),
    path: "background.image.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
      background.render.image();
    }
  }, {
    element: helper.e(".control-background-image-from-file"),
    path: "background.image.from",
    type: "radio",
    func: function() {
      render.dependents();
      background.render.image();
    }
  }, {
    element: helper.e(".control-background-image-file"),
    type: "file",
    func: function() {
      background.mod.import();
    }
  }, {
    element: helper.e(".control-background-image-file-clear"),
    type: "button",
    func: function() {
      background.mod.clear.file();
      background.render.input.clear();
      background.render.image();
      background.render.feedback.clear({
        animate: true
      });
      background.render.feedback.empty();
    }
  }, {
    element: helper.e(".control-background-image-from-url"),
    path: "background.image.from",
    type: "radio",
    func: function() {
      render.dependents();
      background.render.image();
    }
  }, {
    element: helper.e(".control-background-image-url"),
    path: "background.image.url",
    type: "textarea",
    func: function() {
      background.render.image();
    }
  }, {
    element: helper.e(".control-background-image-opacity"),
    path: "background.image.opacity",
    type: "range",
    valueMod: ["reverse", "float"],
    rangeCountElement: helper.e(".control-background-image-opacity-count"),
    func: function() {
      background.render.opacity();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-background-image-grayscale"),
    path: "background.image.grayscale",
    type: "range",
    valueMod: ["float"],
    rangeCountElement: helper.e(".control-background-image-grayscale-count"),
    func: function() {
      background.render.grayscale();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-background-image-blur"),
    path: "background.image.blur",
    type: "range",
    rangeCountElement: helper.e(".control-background-image-blur-count"),
    func: function() {
      background.render.blur();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-background-image-accent"),
    path: "background.image.accent",
    type: "range",
    valueMod: ["float"],
    rangeCountElement: helper.e(".control-background-image-accent-count"),
    func: function() {
      background.render.accent();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-background-image-scale"),
    path: "background.image.scale",
    type: "range",
    valueMod: ["float"],
    rangeCountElement: helper.e(".control-background-image-scale-count"),
    func: function() {
      background.render.scale();
      render.range.count(this);
    }
  }, {
    element: helper.e(".control-data-import"),
    type: "file",
    func: function() {
      data.mod.import();
    }
  }, {
    element: helper.e(".control-data-export"),
    type: "a",
    func: function() {
      data.mod.export();
    }
  }, {
    element: helper.e(".control-data-clear"),
    type: "a",
    func: function() {
      menu.close();
      data.render.clear();
    }
  }];

  var mod = {};

  mod.setValue = function(path, value) {
    helper.setObject({
      object: state.get.current(),
      path: path,
      newValue: value
    });
  };

  var bind = {};

  bind.controls = function() {
    var eventType = {
      a: "click",
      button: "click",
      checkbox: "change",
      radio: "change",
      text: "input",
      textarea: "input",
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
      textarea: function(object) {
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
      },
      hexTextString: function(value, object) {
        return helper.hexToRgb(value);
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
          object: state.get.current(),
          path: object.path,
          newValue: newValue
        });
        // console.log("state set", object.path, helper.getObject({
        //   object: state.get.current(),
        //   path: object.path
        // }));
      };
    };
    var bindControl = function(object) {
      var controlType = {
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
        },
        textarea: function(object, event) {
          changeValue(object);
          if (object.func) {
            object.func();
          };
        }
      };
      object.element.addEventListener(eventType[object.type], function(event) {
        controlType[object.element.tagName.toLowerCase()](object, event);
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

  var render = {};

  render.class = function() {
    var html = helper.e("html");
    var _edit = function() {
      helper.removeClass(html, "is-edit");
      if (state.get.current().edit) {
        helper.addClass(html, "is-edit");
      };
    };
    var _menu = function() {
      helper.addClass(html, "is-menu");
    };
    var _header = function() {
      var _area = function() {
        helper.removeClass(html, "is-header-area-alignment-left");
        helper.removeClass(html, "is-header-area-alignment-center");
        helper.removeClass(html, "is-header-area-alignment-right");
        helper.addClass(html, "is-header-area-alignment-" + state.get.current().header.area.alignment);
      };
      var _item = function() {
        helper.removeClass(html, "is-header-item-alignment-left");
        helper.removeClass(html, "is-header-item-alignment-center");
        helper.removeClass(html, "is-header-item-alignment-right");
        helper.addClass(html, "is-header-item-alignment-" + state.get.current().header.item.alignment);
      };
      var _clock = function() {
        if (state.get.current().header.clock.seconds.show || state.get.current().header.clock.minutes.show || state.get.current().header.clock.hours.show) {
          helper.addClass(html, "is-header-clock-show");
        } else {
          helper.removeClass(html, "is-header-clock-show");
        };
      };
      var _date = function() {
        if (state.get.current().header.date.date.show || state.get.current().header.date.day.show || state.get.current().header.date.month.show || state.get.current().header.date.year.show) {
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
        if (state.get.current().header.search.show) {
          helper.addClass(html, "is-header-search-show");
          helper.addClass(html, "is-header-search-style-" + state.get.current().header.search.style);
          helper.addClass(html, "is-header-search-text-alignment-" + state.get.current().header.search.text.alignment);
        };
        helper.e(".control-header-search-engine-custom-name").value = state.get.current().header.search.engine.custom.name;
        helper.e(".control-header-search-engine-custom-url").value = state.get.current().header.search.engine.custom.url;
      };
      var _button = function() {
        if (state.get.current().header.button.editAdd.show) {
          helper.addClass(html, "is-header-button-editadd-show");
        } else {
          helper.removeClass(html, "is-header-button-editadd-show");
        };
        if (state.get.current().header.button.accent.show) {
          helper.addClass(html, "is-header-button-accent-show");
        } else {
          helper.removeClass(html, "is-header-button-accent-show");
        };
      };
      var _greeting = function() {
        if (state.get.current().header.greeting.show) {
          helper.addClass(html, "is-header-greeting-show");
        } else {
          helper.removeClass(html, "is-header-greeting-show");
        };
      };
      var _transitional = function() {
        if (state.get.current().header.transitional.show && (state.get.current().header.date.date.show || state.get.current().header.date.day.show || state.get.current().header.date.month.show || state.get.current().header.date.year.show || state.get.current().header.clock.seconds.show || state.get.current().header.clock.minutes.show || state.get.current().header.clock.hours.show)) {
          helper.addClass(html, "is-header-transitional-show");
        } else {
          helper.removeClass(html, "is-header-transitional-show");
        };
      };
      var _shade = function() {
        helper.removeClass(html, "is-header-shade-show");
        if (state.get.current().header.shade.show) {
          helper.addClass(html, "is-header-shade-show");
        };
        if (state.get.current().header.radius) {
          helper.addClass(html, "is-header-radius");
        } else {
          helper.removeClass(html, "is-header-radius");
        };
      };
      var _border = function() {
        helper.removeClass(html, "is-header-border-top");
        helper.removeClass(html, "is-header-border-bottom");
        if (state.get.current().header.border.top > 0) {
          helper.addClass(html, "is-header-border-top");
        };
        if (state.get.current().header.border.bottom > 0) {
          helper.addClass(html, "is-header-border-bottom");
        };
      };
      var _position = function() {
        helper.removeClass(html, "is-header-position-sticky");
        helper.removeClass(html, "is-header-position-inline");
        helper.addClass(html, "is-header-position-" + state.get.current().header.position);
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
      _position();
      _transitional();
    };
    var _group = function() {
      var _area = function() {
        helper.removeClass(html, "is-group-area-alignment-left");
        helper.removeClass(html, "is-group-area-alignment-center");
        helper.removeClass(html, "is-group-area-alignment-right");
        helper.addClass(html, "is-group-area-alignment-" + state.get.current().group.area.alignment);
      };
      var _name = function() {
        if (state.get.current().group.name.show) {
          helper.addClass(html, "is-group-name-show");
        } else {
          helper.removeClass(html, "is-group-name-show");
        };
      };
      var _order = function() {
        helper.removeClass(html, "is-group-order-headerbody");
        helper.removeClass(html, "is-group-order-bodyheader");
        helper.addClass(html, "is-group-order-" + state.get.current().group.order);
      };
      var _border = function() {
        helper.removeClass(html, "is-group-border");
        if (state.get.current().group.border > 0) {
          helper.addClass(html, "is-group-border");
        };
      };
      _area();
      _name();
      _order();
      _border();
    };
    var _link = function() {
      helper.removeClass(html, "is-link-show");
      helper.removeClass(html, "is-link-area-alignment-left");
      helper.removeClass(html, "is-link-area-alignment-center");
      helper.removeClass(html, "is-link-area-alignment-right");
      helper.removeClass(html, "is-link-display-alignment-topleft");
      helper.removeClass(html, "is-link-display-alignment-topcenter");
      helper.removeClass(html, "is-link-display-alignment-topright");
      helper.removeClass(html, "is-link-display-alignment-centerleft");
      helper.removeClass(html, "is-link-display-alignment-centercenter");
      helper.removeClass(html, "is-link-display-alignment-centerright");
      helper.removeClass(html, "is-link-display-alignment-bottomleft");
      helper.removeClass(html, "is-link-display-alignment-bottomcenter");
      helper.removeClass(html, "is-link-display-alignment-bottomright");
      helper.removeClass(html, "is-link-item-display-direction-horizontal");
      helper.removeClass(html, "is-link-item-display-direction-vertical");
      helper.removeClass(html, "is-link-item-display-order-letconname");
      helper.removeClass(html, "is-link-item-display-order-nameletcon");
      helper.removeClass(html, "is-link-item-display-name-show");
      helper.removeClass(html, "is-link-item-display-letcon-show");
      helper.removeClass(html, "is-link-item-url-show");
      helper.removeClass(html, "is-link-item-line-show");
      helper.removeClass(html, "is-link-item-shadow-show");
      helper.removeClass(html, "is-link-item-hoverscale-show");
      helper.removeClass(html, "is-link-item-border");
      helper.removeClass(html, "is-link-style-list");
      helper.removeClass(html, "is-link-style-block");
      helper.removeClass(html, "is-link-orientation-top");
      helper.removeClass(html, "is-link-orientation-bottom");
      if (state.get.current().link.show) {
        helper.addClass(html, "is-link-show");
        helper.addClass(html, "is-link-area-alignment-" + state.get.current().link.area.alignment);
        helper.addClass(html, "is-link-item-display-direction-" + state.get.current().link.item.display.direction);
        helper.addClass(html, "is-link-item-display-order-" + state.get.current().link.item.display.order);
        helper.addClass(html, "is-link-display-alignment-" + state.get.current().link.item.display.alignment);
        helper.addClass(html, "is-link-style-" + state.get.current().link.style);
        helper.addClass(html, "is-link-orientation-" + state.get.current().link.orientation);
        if (state.get.current().link.item.display.letcon.show) {
          helper.addClass(html, "is-link-item-display-letcon-show");
        };
        if (state.get.current().link.item.display.name.show) {
          helper.addClass(html, "is-link-item-display-name-show");
        };
        if (state.get.current().link.item.url.show) {
          helper.addClass(html, "is-link-item-url-show");
        };
        if (state.get.current().link.item.line.show) {
          helper.addClass(html, "is-link-item-line-show");
        };
        if (state.get.current().link.item.shadow.show) {
          helper.addClass(html, "is-link-item-shadow-show");
        };
        if (state.get.current().link.item.hoverScale.show) {
          helper.addClass(html, "is-link-item-hoverscale-show");
        };
        if (state.get.current().link.item.border > 0) {
          helper.addClass(html, "is-link-item-border");
        };
      };
    };
    var _theme = function() {
      if (state.get.current().theme.radius > 0) {
        helper.addClass(html, "is-theme-radius");
      } else {
        helper.removeClass(html, "is-theme-radius");
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
      helper.addClass(html, "is-layout-alignment-" + state.get.current().layout.alignment);
      helper.addClass(html, "is-layout-order-" + state.get.current().layout.order);
      if (state.get.current().layout.scrollPastEnd) {
        helper.addClass(html, "is-layout-scrollpastend");
      };
    };
    var _background = function() {
      helper.removeClass(html, "is-background-color-by-theme");
      helper.removeClass(html, "is-background-color-by-custom");
      helper.addClass(html, "is-background-color-by-" + state.get.current().background.color.by);
      if (state.get.current().background.image.show) {
        helper.addClass(html, "is-background-image-show");
      } else {
        helper.removeClass(html, "is-background-image-show");
      };
    };
    _edit();
    _menu();
    _header();
    _group();
    _link();
    _theme();
    _layout();
    _background();
  };

  render.dependents = function() {
    var _disable = {
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
        var toCheck = [state.get.current().header.clock.seconds.show, state.get.current().header.clock.minutes.show, state.get.current().header.clock.hours.show];
        toCheck.forEach(function(arrayItem, index) {
          if (arrayItem == true) {
            activeCount++;
          };
        });
        if (activeCount >= 2 && (state.get.current().header.clock.seconds.show || state.get.current().header.clock.minutes.show || state.get.current().header.clock.hours.show)) {
          _disable.input(".control-header-clock-separator-show", false);
        } else {
          _disable.input(".control-header-clock-separator-show", true);
        };
        if (state.get.current().header.clock.seconds.show || state.get.current().header.clock.minutes.show || state.get.current().header.clock.hours.show) {
          _disable.input(".control-header-clock-hour24-show", false);
          _disable.input(".control-header-clock-meridiem-show", false);
        } else {
          _disable.input(".control-header-clock-hour24-show", true);
          _disable.input(".control-header-clock-meridiem-show", true);
        };
        if ((state.get.current().header.clock.seconds.show || state.get.current().header.clock.minutes.show || state.get.current().header.clock.hours.show) && !state.get.current().header.clock.hour24.show) {
          _disable.input(".control-header-clock-meridiem-show", false);
        } else {
          _disable.input(".control-header-clock-meridiem-show", true);
        };
        if (state.get.current().header.clock.hours.show) {
          _disable.input(".control-header-clock-hours-display-number", false);
          _disable.input(".control-header-clock-hours-display-word", false);
        } else {
          _disable.input(".control-header-clock-hours-display-number", true);
          _disable.input(".control-header-clock-hours-display-word", true);
        };
        if (state.get.current().header.clock.minutes.show) {
          _disable.input(".control-header-clock-minutes-display-number", false);
          _disable.input(".control-header-clock-minutes-display-word", false);
        } else {
          _disable.input(".control-header-clock-minutes-display-number", true);
          _disable.input(".control-header-clock-minutes-display-word", true);
        };
        if (state.get.current().header.clock.seconds.show) {
          _disable.input(".control-header-clock-seconds-display-number", false);
          _disable.input(".control-header-clock-seconds-display-word", false);
        } else {
          _disable.input(".control-header-clock-seconds-display-number", true);
          _disable.input(".control-header-clock-seconds-display-word", true);
        };
        if (state.get.current().header.clock.seconds.show || state.get.current().header.clock.minutes.show || state.get.current().header.clock.hours.show) {
          _disable.element("[for=control-header-clock-size]", false);
          _disable.input(".control-header-clock-size", false);
          _disable.element(".control-header-clock-size-count", false);
          _disable.input(".control-header-clock-size-default", false);
        } else {
          _disable.element("[for=control-header-clock-size]", true);
          _disable.input(".control-header-clock-size", true);
          _disable.element(".control-header-clock-size-count", true);
          _disable.input(".control-header-clock-size-default", true);
        };
      };
      var _date = function() {
        var activeCount = 0;
        var toCheck = [state.get.current().header.date.day.show, state.get.current().header.date.date.show, state.get.current().header.date.month.show, state.get.current().header.date.year.show];
        toCheck.forEach(function(arrayItem, index) {
          if (arrayItem == true) {
            activeCount++;
          };
        });
        if (activeCount >= 2 && (state.get.current().header.date.day.show || state.get.current().header.date.date.show || state.get.current().header.date.month.show || state.get.current().header.date.year.show)) {
          _disable.input(".control-header-date-separator-show", false);
        } else {
          _disable.input(".control-header-date-separator-show", true);
        };
        if (state.get.current().header.date.date.show && state.get.current().header.date.month.show) {
          _disable.element(".control-header-date-format-label", false);
          _disable.input(".control-header-date-format-datemonth", false);
          _disable.input(".control-header-date-format-monthdate", false);
        } else {
          _disable.element(".control-header-date-format-label", true);
          _disable.input(".control-header-date-format-datemonth", true);
          _disable.input(".control-header-date-format-monthdate", true);
        };
        if (state.get.current().header.date.day.show) {
          _disable.input(".control-header-date-day-display-number", false);
          _disable.input(".control-header-date-day-display-word", false);
        } else {
          _disable.input(".control-header-date-day-display-number", true);
          _disable.input(".control-header-date-day-display-word", true);
        };
        if (state.get.current().header.date.date.show) {
          _disable.input(".control-header-date-date-display-number", false);
          _disable.input(".control-header-date-date-display-word", false);
          _disable.input(".control-header-date-date-ordinal", false);
          _disable.element(".control-header-date-date-ordinal-helper", false);
        } else {
          _disable.input(".control-header-date-date-display-number", true);
          _disable.input(".control-header-date-date-display-word", true);
          _disable.input(".control-header-date-date-ordinal", true);
          _disable.element(".control-header-date-date-ordinal-helper", true);
        };
        if (state.get.current().header.date.month.show) {
          _disable.input(".control-header-date-month-display-number", false);
          _disable.input(".control-header-date-month-display-word", false);
        } else {
          _disable.input(".control-header-date-month-display-number", true);
          _disable.input(".control-header-date-month-display-word", true);
        };
        if (state.get.current().header.date.year.show) {
          _disable.input(".control-header-date-year-display-number", false);
          _disable.input(".control-header-date-year-display-word", false);
        } else {
          _disable.input(".control-header-date-year-display-number", true);
          _disable.input(".control-header-date-year-display-word", true);
        };
        if (state.get.current().header.date.day.show && state.get.current().header.date.day.display == "number") {
          _disable.element(".control-header-date-day-week-start-label", false);
          _disable.input(".control-header-date-day-week-start-monday", false);
          _disable.input(".control-header-date-day-week-start-sunday", false);
          _disable.element(".control-header-date-day-week-start-helper", false);
        } else {
          _disable.element(".control-header-date-day-week-start-label", true);
          _disable.input(".control-header-date-day-week-start-monday", true);
          _disable.input(".control-header-date-day-week-start-sunday", true);
          _disable.element(".control-header-date-day-week-start-helper", true);
        };
        if (state.get.current().header.date.day.show && state.get.current().header.date.day.display == "word") {
          _disable.element(".control-header-date-day-length-label", false);
          _disable.input(".control-header-date-day-length-long", false);
          _disable.input(".control-header-date-day-length-short", false);
        } else {
          _disable.element(".control-header-date-day-length-label", true);
          _disable.input(".control-header-date-day-length-long", true);
          _disable.input(".control-header-date-day-length-short", true);
        };
        if (state.get.current().header.date.month.show && state.get.current().header.date.month.display == "word") {
          _disable.element(".control-header-date-month-length-label", false);
          _disable.input(".control-header-date-month-length-long", false);
          _disable.input(".control-header-date-month-length-short", false);
        } else {
          _disable.element(".control-header-date-month-length-label", true);
          _disable.input(".control-header-date-month-length-long", true);
          _disable.input(".control-header-date-month-length-short", true);
        };
        if (state.get.current().header.date.month.show && state.get.current().header.date.month.display == "number") {
          _disable.input(".control-header-date-month-ordinal", false);
          _disable.element(".control-header-date-month-ordinal-helper", false);
        } else {
          _disable.input(".control-header-date-month-ordinal", true);
          _disable.element(".control-header-date-month-ordinal-helper", true);
        };
        if (state.get.current().header.date.day.show || state.get.current().header.date.date.show || state.get.current().header.date.month.show || state.get.current().header.date.year.show) {
          _disable.element("[for=control-header-date-size]", false);
          _disable.input(".control-header-date-size", false);
          _disable.element(".control-header-date-size-count", false);
          _disable.input(".control-header-date-size-default", false);
        } else {
          _disable.element("[for=control-header-date-size]", true);
          _disable.input(".control-header-date-size", true);
          _disable.element(".control-header-date-size-count", true);
          _disable.input(".control-header-date-size-default", true);
        };
      };
      var _shade = function() {
        if (state.get.current().header.shade.show) {
          _disable.input(".control-header-shade-style-always", false);
          _disable.element(".control-header-shade-style-always-helper", false);
          _disable.input(".control-header-shade-style-scroll", false);
          _disable.element(".control-header-shade-style-scroll-helper", false);
          _disable.element("[for=control-header-shade-opacity]", false);
          _disable.input(".control-header-shade-opacity", false);
          _disable.element(".control-header-shade-opacity-count", false);
          _disable.input(".control-header-radius", false);
        } else {
          _disable.input(".control-header-shade-style-always", true);
          _disable.element(".control-header-shade-style-always-helper", true);
          _disable.input(".control-header-shade-style-scroll", true);
          _disable.element(".control-header-shade-style-scroll-helper", true);
          _disable.element("[for=control-header-shade-opacity]", true);
          _disable.input(".control-header-shade-opacity", true);
          _disable.element(".control-header-shade-opacity-count", true);
          _disable.input(".control-header-radius", true);
        };
      };
      var _search = function() {
        if (state.get.current().header.search.show) {
          _disable.element(".control-header-search-style-label", false);
          _disable.input(".control-header-search-style-auto", false);
          _disable.element(".control-header-search-style-auto-helper", false);
          _disable.input(".control-header-search-style-custom", false);
          _disable.element(".control-header-search-style-custom-helper", false);
          _disable.element("[for=control-header-search-width]", false);
          _disable.input(".control-header-search-width", false);
          _disable.element(".control-header-search-width-count", false);
          _disable.input(".control-header-search-focus", false);
          _disable.element(".control-header-search-focus-helper", false);
          _disable.element(".control-header-search-engine-label", false);
          _disable.input(".control-header-search-engine-google", false);
          _disable.input(".control-header-search-engine-duckduckgo", false);
          _disable.input(".control-header-search-engine-youtube", false);
          _disable.input(".control-header-search-engine-giphy", false);
          _disable.input(".control-header-search-engine-bing", false);
          _disable.input(".control-header-search-engine-custom", false);
          _disable.element(".control-header-search-text-alignment-grid", false);
          _disable.element(".control-header-search-text-alignment-label", false);
          _disable.input(".control-header-search-text-alignment-left", false);
          _disable.input(".control-header-search-text-alignment-center", false);
          _disable.input(".control-header-search-text-alignment-right", false);
          _disable.element("[for=control-header-search-size]", false);
          _disable.input(".control-header-search-size", false);
          _disable.element(".control-header-search-size-count", false);
          _disable.input(".control-header-search-size-default", false);
          _disable.element(".control-header-search-size-helper", false);
        } else {
          _disable.element(".control-header-search-style-label", true);
          _disable.input(".control-header-search-style-auto", true);
          _disable.element(".control-header-search-style-auto-helper", true);
          _disable.input(".control-header-search-style-custom", true);
          _disable.element(".control-header-search-style-custom-helper", true);
          _disable.element("[for=control-header-search-width]", true);
          _disable.input(".control-header-search-width", true);
          _disable.element(".control-header-search-width-count", true);
          _disable.input(".control-header-search-focus", true);
          _disable.element(".control-header-search-focus-helper", true);
          _disable.element(".control-header-search-engine-label", true);
          _disable.input(".control-header-search-engine-google", true);
          _disable.input(".control-header-search-engine-duckduckgo", true);
          _disable.input(".control-header-search-engine-youtube", true);
          _disable.input(".control-header-search-engine-giphy", true);
          _disable.input(".control-header-search-engine-bing", true);
          _disable.input(".control-header-search-engine-custom", true);
          _disable.element(".control-header-search-text-alignment-grid", true);
          _disable.element(".control-header-search-text-alignment-label", true);
          _disable.input(".control-header-search-text-alignment-left", true);
          _disable.input(".control-header-search-text-alignment-center", true);
          _disable.input(".control-header-search-text-alignment-right", true);
          _disable.element("[for=control-header-search-size]", true);
          _disable.input(".control-header-search-size", true);
          _disable.element(".control-header-search-size-count", true);
          _disable.input(".control-header-search-size-default", true);
          _disable.element(".control-header-search-size-helper", true);
        };
        if (state.get.current().header.search.show && state.get.current().header.search.engine.selected === "custom") {
          _disable.element("[for=control-header-search-engine-custom-name]", false);
          _disable.input(".control-header-search-engine-custom-name", false);
          _disable.element("[for=control-header-search-engine-custom-url]", false);
          _disable.input(".control-header-search-engine-custom-url", false);
          _disable.element(".control-header-search-engine-custom-helper", false);
        } else {
          _disable.element("[for=control-header-search-engine-custom-name]", true);
          _disable.input(".control-header-search-engine-custom-name", true);
          _disable.element("[for=control-header-search-engine-custom-url]", true);
          _disable.input(".control-header-search-engine-custom-url", true);
          _disable.element(".control-header-search-engine-custom-helper", true);
        };
        if (state.get.current().header.search.show && state.get.current().header.search.style === "custom") {
          _disable.element("[for=control-header-search-width]", false);
          _disable.input(".control-header-search-width", false);
          _disable.element(".control-header-search-width-count", false);
        } else {
          _disable.element("[for=control-header-search-width]", true);
          _disable.input(".control-header-search-width", true);
          _disable.element(".control-header-search-width-count", true);
        };
      };
      var _greeting = function() {
        if (state.get.current().header.greeting.show) {
          _disable.element("[for=control-header-greeting-name]", false);
          _disable.input(".control-header-greeting-name", false);
          _disable.input(".control-header-greeting-type-good", false);
          _disable.input(".control-header-greeting-type-hello", false);
          _disable.input(".control-header-greeting-type-hi", false);
          _disable.element("[for=control-header-greeting-size]", false);
          _disable.input(".control-header-greeting-size", false);
          _disable.element(".control-header-greeting-size-count", false);
          _disable.input(".control-header-greeting-size-default", false);
        } else {
          _disable.element("[for=control-header-greeting-name]", true);
          _disable.input(".control-header-greeting-name", true);
          _disable.input(".control-header-greeting-type-good", true);
          _disable.input(".control-header-greeting-type-hello", true);
          _disable.input(".control-header-greeting-type-hi", true);
          _disable.element("[for=control-header-greeting-size]", true);
          _disable.input(".control-header-greeting-size", true);
          _disable.element(".control-header-greeting-size-count", true);
          _disable.input(".control-header-greeting-size-default", true);
        };
      };
      var _transitional = function() {
        if (state.get.current().header.date.date.show || state.get.current().header.date.day.show || state.get.current().header.date.month.show || state.get.current().header.date.year.show || state.get.current().header.clock.seconds.show || state.get.current().header.clock.minutes.show || state.get.current().header.clock.hours.show) {
          _disable.input(".control-header-transitional-show", false);
          _disable.element(".control-header-transitional-show-helper", false);
        } else {
          _disable.input(".control-header-transitional-show", true);
          _disable.element(".control-header-transitional-show-helper", true);
        };
        if (state.get.current().header.transitional.show && ((state.get.current().header.date.date.show || state.get.current().header.date.day.show || state.get.current().header.date.month.show || state.get.current().header.date.year.show || state.get.current().header.clock.seconds.show || state.get.current().header.clock.minutes.show || state.get.current().header.clock.hours.show))) {
          _disable.input(".control-header-transitional-type-timeanddate", false);
          _disable.input(".control-header-transitional-type-its", false);
          _disable.element("[for=control-header-transitional-size]", false);
          _disable.input(".control-header-transitional-size", false);
          _disable.element(".control-header-transitional-size-count", false);
          _disable.input(".control-header-transitional-size-default", false);
        } else {
          _disable.input(".control-header-transitional-type-timeanddate", true);
          _disable.input(".control-header-transitional-type-its", true);
          _disable.element("[for=control-header-transitional-size]", true);
          _disable.input(".control-header-transitional-size", true);
          _disable.element(".control-header-transitional-size-count", true);
          _disable.input(".control-header-transitional-size-default", true);
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
        _disable.input(".control-edit", false);
      } else {
        _disable.input(".control-edit", true);
      };
    };
    var _group = function() {
      if (state.get.current().group.name.show) {
        _disable.element("[for=control-group-name-size]", false);
        _disable.input(".control-group-name-size", false);
        _disable.element(".control-group-name-size-count", false);
        _disable.input(".control-group-name-size-default", false);
      } else {
        _disable.element("[for=control-group-name-size]", true);
        _disable.input(".control-group-name-size", true);
        _disable.element(".control-group-name-size-count", true);
        _disable.input(".control-group-name-size-default", true);
      };
    };
    var _link = function() {
      _disable.input(".control-layout-order-headerlink", true);
      _disable.input(".control-layout-order-linkheader", true);
      _disable.element(".control-layout-order-helper", true);
      _disable.element("[for=control-link-area-width]", true);
      _disable.input(".control-link-area-width", true);
      _disable.element(".control-link-area-width-count", true);
      _disable.input(".control-link-area-width-match", true);
      _disable.element(".control-link-area-width-helper", true);
      _disable.element(".control-link-area-alignment-grid", true);
      _disable.element(".control-link-area-alignment-label", true);
      _disable.input(".control-link-area-alignment-left", true);
      _disable.input(".control-link-area-alignment-center", true);
      _disable.input(".control-link-area-alignment-right", true);
      _disable.element(".control-link-area-alignment-helper", true);
      _disable.element("[for=control-link-item-size]", true);
      _disable.input(".control-link-item-size", true);
      _disable.element(".control-link-item-size-count", true);
      _disable.input(".control-link-item-size-default", true);
      _disable.input(".control-link-item-display-letcon-show", true);
      _disable.element("[for=control-link-item-display-letcon-letter-size]", true);
      _disable.input(".control-link-item-display-letcon-letter-size", true);
      _disable.element(".control-link-item-display-letcon-letter-size-count", true);
      _disable.input(".control-link-item-display-letcon-letter-size-default", true);
      _disable.element("[for=control-link-item-display-letcon-icon-size]", true);
      _disable.input(".control-link-item-display-letcon-icon-size", true);
      _disable.element(".control-link-item-display-letcon-icon-size-count", true);
      _disable.input(".control-link-item-display-letcon-icon-size-default", true);
      _disable.input(".control-link-item-display-name-show", true);
      _disable.element("[for=control-link-item-display-name-size]", true);
      _disable.input(".control-link-item-display-name-size", true);
      _disable.element(".control-link-item-display-name-size-count", true);
      _disable.input(".control-link-item-display-name-size-default", true);
      _disable.element("[for=control-link-item-display-rotate]", true);
      _disable.input(".control-link-item-display-rotate", true);
      _disable.element(".control-link-item-display-rotate-count", true);
      _disable.input(".control-link-item-display-rotate-default", true);
      _disable.element("[for=control-link-item-display-translate-x]", true);
      _disable.input(".control-link-item-display-translate-x", true);
      _disable.element(".control-link-item-display-translate-x-count", true);
      _disable.input(".control-link-item-display-translate-x-default", true);
      _disable.element("[for=control-link-item-display-translate-y]", true);
      _disable.input(".control-link-item-display-translate-y", true);
      _disable.element(".control-link-item-display-translate-y-count", true);
      _disable.input(".control-link-item-display-translate-y-default", true);
      _disable.element("[for=control-link-item-display-gutter]", true);
      _disable.input(".control-link-item-display-gutter", true);
      _disable.element(".control-link-item-display-gutter-count", true);
      _disable.input(".control-link-item-display-gutter-default", true);
      _disable.input(".control-link-item-display-direction-horizontal", true);
      _disable.input(".control-link-item-display-direction-vertical", true);
      _disable.input(".control-link-item-display-order-letconname", true);
      _disable.input(".control-link-item-display-order-nameletcon", true);
      _disable.element(".control-link-item-display-direction-helper", true);
      _disable.element(".control-link-item-display-order-helper", true);
      _disable.input(".control-link-item-url-show", true);
      _disable.input(".control-link-item-line-show", true);
      _disable.input(".control-link-item-shadow-show", true);
      _disable.input(".control-link-item-hoverscale", true);
      _disable.element(".control-link-item-display-alignment-grid", true);
      _disable.element(".control-link-item-display-alignment-label", true);
      _disable.input(".control-link-item-display-alignment-topleft", true);
      _disable.input(".control-link-item-display-alignment-topcenter", true);
      _disable.input(".control-link-item-display-alignment-topright", true);
      _disable.input(".control-link-item-display-alignment-centerleft", true);
      _disable.input(".control-link-item-display-alignment-centercenter", true);
      _disable.input(".control-link-item-display-alignment-centerright", true);
      _disable.input(".control-link-item-display-alignment-bottomleft", true);
      _disable.input(".control-link-item-display-alignment-bottomcenter", true);
      _disable.input(".control-link-item-display-alignment-bottomright", true);
      _disable.input(".control-link-newtab", true);
      _disable.element("[for=control-link-item-border]", true);
      _disable.input(".control-link-item-border", true);
      _disable.element(".control-link-item-border-count", true);
      _disable.input(".control-link-style-block", true);
      _disable.element(".control-link-style-block-helper", true);
      _disable.input(".control-link-style-list", true);
      _disable.element(".control-link-style-list-helper", true);
      _disable.input(".control-link-orientation-top", true);
      _disable.input(".control-link-orientation-bottom", true);
      _disable.element(".control-link-orientation-helper", true);
      _disable.input(".control-link-sort-name", true);
      _disable.input(".control-link-sort-letter", true);
      _disable.input(".control-link-sort-icon", true);
      _disable.input(".control-link-accent-clear", true);
      _disable.input(".control-link-accent-set", true);
      _disable.element(".control-link-accent-set-helper", true);
      if (state.get.current().link.show) {
        _disable.input(".control-layout-order-headerlink", false);
        _disable.input(".control-layout-order-linkheader", false);
        _disable.element(".control-layout-order-helper", false);
        _disable.element("[for=control-link-area-width]", false);
        _disable.input(".control-link-area-width", false);
        _disable.element(".control-link-area-width-count", false);
        _disable.input(".control-link-area-width-match", false);
        _disable.element(".control-link-area-width-helper", false);
        _disable.element(".control-link-area-alignment-grid", false);
        _disable.element(".control-link-area-alignment-label", false);
        _disable.input(".control-link-area-alignment-left", false);
        _disable.input(".control-link-area-alignment-center", false);
        _disable.input(".control-link-area-alignment-right", false);
        _disable.element(".control-link-area-alignment-helper", false);
        _disable.element("[for=control-link-item-size]", false);
        _disable.input(".control-link-item-size", false);
        _disable.element(".control-link-item-size-count", false);
        _disable.input(".control-link-item-size-default", false);
        _disable.input(".control-link-item-display-letcon-show", false);
        _disable.input(".control-link-item-display-name-show", false);
        _disable.input(".control-link-item-url-show", false);
        _disable.input(".control-link-item-line-show", false);
        _disable.input(".control-link-item-shadow-show", false);
        _disable.input(".control-link-item-hoverscale", false);
        _disable.input(".control-link-newtab", false);
        _disable.element("[for=control-link-item-border]", false);
        _disable.input(".control-link-item-border", false);
        _disable.element(".control-link-item-border-count", false);
        _disable.input(".control-link-style-block", false);
        _disable.element(".control-link-style-block-helper", false);
        _disable.input(".control-link-style-list", false);
        _disable.element(".control-link-style-list-helper", false);
        _disable.input(".control-link-orientation-top", false);
        _disable.input(".control-link-orientation-bottom", false);
        _disable.element(".control-link-orientation-helper", false);
        _disable.input(".control-link-sort-name", false);
        _disable.input(".control-link-sort-letter", false);
        _disable.input(".control-link-sort-icon", false);
        _disable.input(".control-link-accent-clear", false);
        _disable.input(".control-link-accent-set", false);
        _disable.element(".control-link-accent-set-helper", false);
        if (state.get.current().link.item.display.letcon.show) {
          _disable.element("[for=control-link-item-display-letcon-letter-size]", false);
          _disable.input(".control-link-item-display-letcon-letter-size", false);
          _disable.element(".control-link-item-display-letcon-letter-size-count", false);
          _disable.input(".control-link-item-display-letcon-letter-size-default", false);
          _disable.element("[for=control-link-item-display-letcon-icon-size]", false);
          _disable.input(".control-link-item-display-letcon-icon-size", false);
          _disable.element(".control-link-item-display-letcon-icon-size-count", false);
          _disable.input(".control-link-item-display-letcon-icon-size-default", false);
        };
        if (state.get.current().link.item.display.name.show) {
          _disable.element("[for=control-link-item-display-name-size]", false);
          _disable.input(".control-link-item-display-name-size", false);
          _disable.element(".control-link-item-display-name-size-count", false);
          _disable.input(".control-link-item-display-name-size-default", false);
        };
        if (state.get.current().link.item.display.letcon.show || state.get.current().link.item.display.name.show) {
          _disable.element(".control-link-item-display-alignment-grid", false);
          _disable.element(".control-link-item-display-alignment-label", false);
          _disable.input(".control-link-item-display-alignment-topleft", false);
          _disable.input(".control-link-item-display-alignment-topcenter", false);
          _disable.input(".control-link-item-display-alignment-topright", false);
          _disable.input(".control-link-item-display-alignment-centerleft", false);
          _disable.input(".control-link-item-display-alignment-centercenter", false);
          _disable.input(".control-link-item-display-alignment-centerright", false);
          _disable.input(".control-link-item-display-alignment-bottomleft", false);
          _disable.input(".control-link-item-display-alignment-bottomcenter", false);
          _disable.input(".control-link-item-display-alignment-bottomright", false);
          _disable.element("[for=control-link-item-display-rotate]", false);
          _disable.input(".control-link-item-display-rotate", false);
          _disable.element(".control-link-item-display-rotate-count", false);
          _disable.input(".control-link-item-display-rotate-default", false);
          _disable.element("[for=control-link-item-display-translate-x]", false);
          _disable.input(".control-link-item-display-translate-x", false);
          _disable.element(".control-link-item-display-translate-x-count", false);
          _disable.input(".control-link-item-display-translate-x-default", false);
          _disable.element("[for=control-link-item-display-translate-y]", false);
          _disable.input(".control-link-item-display-translate-y", false);
          _disable.element(".control-link-item-display-translate-y-count", false);
          _disable.input(".control-link-item-display-translate-y-default", false);
        };
        if (state.get.current().link.item.display.letcon.show && state.get.current().link.item.display.name.show) {
          _disable.input(".control-link-item-display-direction-horizontal", false);
          _disable.input(".control-link-item-display-direction-vertical", false);
          _disable.input(".control-link-item-display-order-letconname", false);
          _disable.input(".control-link-item-display-order-nameletcon", false);
          _disable.element(".control-link-item-display-direction-helper", false);
          _disable.element(".control-link-item-display-order-helper", false);
          _disable.element("[for=control-link-item-display-gutter]", false);
          _disable.input(".control-link-item-display-gutter", false);
          _disable.element(".control-link-item-display-gutter-count", false);
          _disable.input(".control-link-item-display-gutter-default", false);
        };
      };
    };
    var _theme = function() {
      if (state.get.current().theme.accent.random.active) {
        _disable.input(".control-theme-accent-random-style-any", false);
        _disable.input(".control-theme-accent-random-style-light", false);
        _disable.input(".control-theme-accent-random-style-dark", false);
        _disable.input(".control-theme-accent-random-style-pastel", false);
        _disable.input(".control-theme-accent-random-style-saturated", false);
        _disable.input(".control-theme-accent-randomise", false);
      } else {
        _disable.input(".control-theme-accent-random-style-any", true);
        _disable.input(".control-theme-accent-random-style-light", true);
        _disable.input(".control-theme-accent-random-style-dark", true);
        _disable.input(".control-theme-accent-random-style-pastel", true);
        _disable.input(".control-theme-accent-random-style-saturated", true);
        _disable.input(".control-theme-accent-randomise", true);
      };
    };
    var _background = function() {
      if (state.get.current().background.image.show) {
        _disable.input(".control-background-image-from-file", false);
        _disable.input(".control-background-image-from-url", false);
        _disable.element("[for=control-background-image-opacity]", false);
        _disable.input(".control-background-image-opacity", false);
        _disable.element(".control-background-image-opacity-count", false);
        _disable.element("[for=control-background-image-blur]", false);
        _disable.input(".control-background-image-blur", false);
        _disable.element(".control-background-image-blur-count", false);
        _disable.element("[for=control-background-image-grayscale]", false);
        _disable.input(".control-background-image-grayscale", false);
        _disable.element(".control-background-image-grayscale-count", false);
        _disable.element("[for=control-background-image-accent]", false);
        _disable.input(".control-background-image-accent", false);
        _disable.element(".control-background-image-accent-count", false);
        _disable.element("[for=control-background-image-scale]", false);
        _disable.input(".control-background-image-scale", false);
        _disable.element(".control-background-image-scale-count", false);
      } else {
        _disable.input(".control-background-image-from-file", true);
        _disable.input(".control-background-image-from-url", true);
        _disable.element("[for=control-background-image-opacity]", true);
        _disable.input(".control-background-image-opacity", true);
        _disable.element(".control-background-image-opacity-count", true);
        _disable.element("[for=control-background-image-blur]", true);
        _disable.input(".control-background-image-blur", true);
        _disable.element(".control-background-image-blur-count", true);
        _disable.element("[for=control-background-image-grayscale]", true);
        _disable.input(".control-background-image-grayscale", true);
        _disable.element(".control-background-image-grayscale-count", true);
        _disable.element("[for=control-background-image-accent]", true);
        _disable.input(".control-background-image-accent", true);
        _disable.element(".control-background-image-accent-count", true);
        _disable.element("[for=control-background-image-scale]", true);
        _disable.input(".control-background-image-scale", true);
        _disable.element(".control-background-image-scale-count", true);
      };
      if (state.get.current().background.image.show && state.get.current().background.image.from == "file") {
        _disable.element(".control-background-image-file-feedback", false);
        _disable.input(".control-background-image-file", false);
        _disable.input(".control-background-image-file-clear", false);
        _disable.element(".control-background-image-file-helper", false);
      } else {
        _disable.element(".control-background-image-file-feedback", true);
        _disable.input(".control-background-image-file", true);
        _disable.input(".control-background-image-file-clear", true);
        _disable.element(".control-background-image-file-helper", true);
      };
      if (state.get.current().background.image.show && state.get.current().background.image.from == "url") {
        _disable.input(".control-background-image-url", false);
        _disable.element(".control-background-image-url-helper", false);
      } else {
        _disable.input(".control-background-image-url", true);
        _disable.element(".control-background-image-url-helper", true);
      };
      if (state.get.current().background.color.by == "theme") {
        _disable.input(".control-background-color-custom-current-picker", true);
        _disable.input(".control-background-color-custom-current-hex", true);
        _disable.element(".control-background-color-theme-helper", true);
      } else if (state.get.current().background.color.by == "custom") {
        _disable.input(".control-background-color-custom-current-picker", false);
        _disable.input(".control-background-color-custom-current-hex", false);
        _disable.element(".control-background-color-theme-helper", false);
      };
    };
    _header();
    _edit();
    _group();
    _link();
    _theme();
    _background();
  };

  render.update = function() {
    var valueMod = {
      reverse: function(value, element) {
        return parseInt(element.max, 10) - value;
      },
      float: function(value, element) {
        return value * 100;
      },
      hexTextString: function(value, element) {
        return helper.rgbToHex(value);
      }
    };
    var setValue = {
      checkbox: function(object) {
        object.element.checked = helper.getObject({
          object: state.get.current(),
          path: object.path
        });
      },
      radio: function(object) {
        helper.e("." + object.element.className.substring(0, object.element.className.lastIndexOf("-") + 1) + helper.getObject({
          object: state.get.current(),
          path: object.path
        })).checked = true;
      },
      text: function(object) {
        var newValue = helper.getObject({
          object: state.get.current(),
          path: object.path
        });
        if (object.valueMod) {
          object.valueMod.slice().reverse().forEach(function(arrayItem, index) {
            newValue = valueMod[arrayItem](newValue, object.element);
          });
        };
        object.element.value = newValue;
      },
      textarea: function(object) {
        var newValue = helper.getObject({
          object: state.get.current(),
          path: object.path
        });
        if (object.valueMod) {
          object.valueMod.slice().reverse().forEach(function(arrayItem, index) {
            newValue = valueMod[arrayItem](newValue, object.element);
          });
        };
        object.element.value = newValue;
      },
      number: function(object) {
        object.element.value = helper.getObject({
          object: state.get.current(),
          path: object.path
        });
      },
      range: function(object) {
        var newValue = helper.getObject({
          object: state.get.current(),
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
          object: state.get.current(),
          path: object.path
        }));
      }
    };
    var supportedType = ["checkbox", "radio", "text", "number", "range", "color", "textarea"];
    _allControl.forEach(function(arrayItem, index) {
      if (supportedType.includes(arrayItem.element.type)) {
        setValue[arrayItem.type](arrayItem);
      };
      if (arrayItem.rangeCountElement) {
        render.range.count(arrayItem);
      };
    });
  };

  render.range = {
    count: function(control) {
      control.rangeCountElement.textContent = control.element.value;
    }
  };

  var init = function() {
    bind.controls();
    render.update();
    render.dependents();
    render.class();
  };

  // exposed methods
  return {
    init: init,
    mod: mod,
    bind: bind,
    render: render
  };

})();
