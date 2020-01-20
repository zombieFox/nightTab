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
    element: helper.e(".control-theme-accent-rgb-color"),
    path: "theme.accent.rgb",
    type: "color",
    mirrorElement: [{
      element: helper.e(".control-theme-accent-rgb-range"),
      path: "theme.accent.rgb",
      type: "color"
    }, {
      element: helper.e(".control-theme-accent-rgb-text"),
      path: "theme.accent.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.render.accent.color();
      link.groupAndItems();
    }
  }, {
    element: helper.e(".control-layout-size-range"),
    path: "layout.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 50,
      max: 200,
      step: 5
    },
    mirrorElement: [{
      element: helper.e(".control-layout-size-number"),
      path: "layout.size",
      type: "number",
      valueConvert: ["float"]
    }],
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
    }
  }, {
    element: helper.e(".control-layout-size-number"),
    path: "layout.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 50,
      max: 200,
      step: 5
    },
    mirrorElement: [{
      element: helper.e(".control-layout-size-range"),
      path: "layout.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      layout.render.size();
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
        object: state.get.default(),
        path: "layout.size"
      }));
      layout.render.size();
      render.update();
    }
  }, {
    element: helper.e(".control-layout-width-range"),
    path: "layout.width",
    type: "range",
    valueModify: {
      min: 10,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-layout-width-number"),
      path: "layout.width",
      type: "number"
    }],
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
    }
  }, {
    element: helper.e(".control-layout-width-number"),
    path: "layout.width",
    type: "number",
    valueModify: {
      min: 10,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-layout-width-range"),
      path: "layout.width",
      type: "number"
    }],
    func: function() {
      render.class();
      layout.render.width();
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
        object: state.get.default(),
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
      header.render.color.scrolling();
    }
  }, {
    element: helper.e(".control-layout-order-linkheader"),
    path: "layout.order",
    type: "radio",
    func: function() {
      render.class();
      layout.render.order();
      header.render.color.scrolling();
    }
  }, {
    element: helper.e(".control-layout-padding-range"),
    path: "layout.padding",
    type: "range",
    valueModify: {
      min: 0,
      max: 40
    },
    mirrorElement: [{
      element: helper.e(".control-layout-padding-number"),
      path: "layout.padding",
      type: "number"
    }],
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
    }
  }, {
    element: helper.e(".control-layout-padding-number"),
    path: "layout.padding",
    type: "number",
    valueModify: {
      min: 0,
      max: 40
    },
    mirrorElement: [{
      element: helper.e(".control-layout-padding-range"),
      path: "layout.padding",
      type: "range"
    }],
    func: function() {
      layout.render.padding();
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
        object: state.get.default(),
        path: "layout.padding"
      }));
      layout.render.padding();
      render.update();
    }
  }, {
    element: helper.e(".control-layout-gutter-range"),
    path: "layout.gutter",
    type: "range",
    valueModify: {
      min: 0,
      max: 40
    },
    mirrorElement: [{
      element: helper.e(".control-layout-gutter-number"),
      path: "layout.gutter",
      type: "number"
    }],
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
    }
  }, {
    element: helper.e(".control-layout-gutter-number"),
    path: "layout.gutter",
    type: "number",
    valueModify: {
      min: 0,
      max: 40
    },
    mirrorElement: [{
      element: helper.e(".control-layout-gutter-range"),
      path: "layout.gutter",
      type: "range"
    }],
    func: function() {
      layout.render.gutter();
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
        object: state.get.default(),
        path: "layout.gutter"
      }));
      layout.render.gutter();
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
      header.render.color.scrolling();
    }
  }, {
    element: helper.e(".control-header-area-width-range"),
    path: "header.area.width",
    type: "range",
    valueModify: {
      min: 10,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-header-area-width-number"),
      path: "header.area.width",
      type: "number"
    }],
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
    }
  }, {
    element: helper.e(".control-header-area-width-number"),
    path: "header.area.width",
    type: "number",
    valueModify: {
      min: 10,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-header-area-width-range"),
      path: "header.area.width",
      type: "range"
    }],
    func: function() {
      header.render.area.width();
    }
  }, {
    element: helper.e(".control-header-area-width-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".header-area"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("header.area.width", helper.getObject({
        object: state.get.default(),
        path: "header.area.width"
      }));
      header.render.area.width();
      render.update();
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
    element: helper.e(".control-header-greeting-size-range"),
    path: "header.greeting.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-header-greeting-size-number"),
      path: "header.greeting.size",
      type: "number",
      valueConvert: ["float"]
    }],
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
    }
  }, {
    element: helper.e(".control-header-greeting-size-number"),
    path: "header.greeting.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-header-greeting-size-range"),
      path: "header.greeting.size",
      type: "range",
      valueConvert: ["float"]
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
        edge.box.open({
          element: helper.e(".greeting"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("header.greeting.size", helper.getObject({
        object: state.get.default(),
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
    element: helper.e(".control-header-transitional-size-range"),
    path: "header.transitional.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-header-transitional-size-number"),
      path: "header.transitional.size",
      type: "number",
      valueConvert: ["float"]
    }],
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
    }
  }, {
    element: helper.e(".control-header-transitional-size-number"),
    path: "header.transitional.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-header-transitional-size-range"),
      path: "header.transitional.size",
      type: "range",
      valueConvert: ["float"]
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
        edge.box.open({
          element: helper.e(".transitional"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("header.transitional.size", helper.getObject({
        object: state.get.default(),
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
    element: helper.e(".control-header-clock-size-range"),
    path: "header.clock.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-header-clock-size-number"),
      path: "header.clock.size",
      type: "number",
      valueConvert: ["float"]
    }],
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
    }
  }, {
    element: helper.e(".control-header-clock-size-number"),
    path: "header.clock.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-header-clock-size-range"),
      path: "header.clock.size",
      type: "range",
      valueConvert: ["float"]
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
        edge.box.open({
          element: helper.e(".clock"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("header.clock.size", helper.getObject({
        object: state.get.default(),
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
    element: helper.e(".control-header-date-size-range"),
    path: "header.date.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-header-date-size-number"),
      path: "header.date.size",
      type: "number",
      valueConvert: ["float"]
    }],
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
    }
  }, {
    element: helper.e(".control-header-date-size-number"),
    path: "header.date.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-header-date-size-range"),
      path: "header.date.size",
      type: "range",
      valueConvert: ["float"]
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
        edge.box.open({
          element: helper.e(".date"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("header.date.size", helper.getObject({
        object: state.get.default(),
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
    func: function() {
      render.class();
      render.dependents();
      header.render.search.width();
    }
  }, {
    element: helper.e(".control-header-search-style-custom"),
    path: "header.search.style",
    type: "radio",
    func: function() {
      render.class();
      render.dependents();
      header.render.search.width();
    }
  }, {
    element: helper.e(".control-header-search-width-range"),
    path: "header.search.width",
    type: "range",
    valueModify: {
      min: 10,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-header-search-width-number"),
      path: "header.search.width",
      type: "number",
    }],
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
    }
  }, {
    element: helper.e(".control-header-search-width-number"),
    path: "header.search.width",
    type: "number",
    valueModify: {
      min: 10,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-header-search-width-range"),
      path: "header.search.width",
      type: "range",
    }],
    func: function() {
      header.render.search.width();
    }
  }, {
    element: helper.e(".control-header-search-width-default"),
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
      mod.setValue("header.search.width", helper.getObject({
        object: state.get.default(),
        path: "header.search.width"
      }));
      header.render.search.width();
      render.update();
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
    element: helper.e(".control-header-search-size-range"),
    path: "header.search.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-header-search-size-number"),
      path: "header.search.size",
      type: "number",
      valueConvert: ["float"]
    }],
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".search"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".search"),
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
            element: helper.e(".search"),
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
    }
  }, {
    element: helper.e(".control-header-search-size-number"),
    path: "header.search.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-header-search-size-range"),
      path: "header.search.size",
      type: "range",
      valueConvert: ["float"]
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
        edge.box.open({
          element: helper.e(".header-search-input"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("header.search.size", helper.getObject({
        object: state.get.default(),
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
    element: helper.e(".control-header-button-coloraccent-show"),
    path: "header.button.colorAccent.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
    }
  }, {
    element: helper.e(".control-header-button-coloraccent-dot-show"),
    path: "header.button.colorAccent.dot.show",
    type: "checkbox",
    func: function() {
      header.render.button.dot();
    }
  }, {
    element: helper.e(".control-header-button-size-range"),
    path: "header.button.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-header-button-size-number"),
      path: "header.button.size",
      type: "number",
      valueConvert: ["float"]
    }],
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
    }
  }, {
    element: helper.e(".control-header-button-size-number"),
    path: "header.button.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-header-button-size-range"),
      path: "header.button.size",
      type: "range",
      valueConvert: ["float"]
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
        edge.box.open({
          element: helper.e(".control-menu-open"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("header.button.size", helper.getObject({
        object: state.get.default(),
        path: "header.button.size"
      }));
      header.render.button.size();
      render.update();
    }
  }, {
    element: helper.e(".control-header-color-show"),
    path: "header.color.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
      header.render.color.scrolling();
    }
  }, {
    element: helper.e(".control-header-color-style-always"),
    path: "header.color.style",
    type: "radio",
    func: function() {
      render.class();
      header.render.color.scrolling();
    }
  }, {
    element: helper.e(".control-header-color-style-scroll"),
    path: "header.color.style",
    type: "radio",
    func: function() {
      render.class();
      header.render.color.scrolling();
    }
  }, {
    element: helper.e(".control-header-color-by-theme"),
    path: "header.color.by",
    type: "radio",
    func: function() {
      render.class();
      render.dependents();
    }
  }, {
    element: helper.e(".control-header-color-by-custom"),
    path: "header.color.by",
    type: "radio",
    func: function() {
      render.class();
      render.dependents();
    }
  }, {
    element: helper.e(".control-header-color-rgb-range"),
    path: "header.color.rgb",
    type: "color",
    mirrorElement: [{
      element: helper.e(".control-header-color-rgb-text"),
      path: "header.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      header.render.color.custom();
    }
  }, {
    element: helper.e(".control-header-color-rgb-text"),
    path: "header.color.rgb",
    type: "text",
    valueConvert: ["hexTextString"],
    mirrorElement: [{
      element: helper.e(".control-header-color-rgb-range"),
      path: "header.color.rgb",
      type: "color"
    }],
    func: function() {
      header.render.color.custom();
    }
  }, {
    element: helper.e(".control-header-color-opacity-range"),
    path: "header.color.opacity",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-header-color-opacity-number"),
      path: "header.color.opacity",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      header.render.opacity();
    }
  }, {
    element: helper.e(".control-header-color-opacity-number"),
    path: "header.color.opacity",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-header-color-opacity-range"),
      path: "header.color.opacity",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      header.render.opacity();
    }
  }, {
    element: helper.e(".control-header-color-opacity-default"),
    type: "button",
    func: function() {
      mod.setValue("header.color.opacity", helper.getObject({
        object: state.get.default(),
        path: "header.color.opacity"
      }));
      header.render.opacity();
      render.update();
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
    element: helper.e(".control-group-name-size-range"),
    path: "group.name.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-group-name-size-number"),
      path: "group.name.size",
      type: "number",
      valueConvert: ["float"]
    }],
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
    }
  }, {
    element: helper.e(".control-group-name-size-number"),
    path: "group.name.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-group-name-size-range"),
      path: "group.name.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.group.size();
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
        object: state.get.default(),
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
    element: helper.e(".control-group-border-range"),
    path: "group.border",
    type: "range",
    valueModify: {
      min: 0,
      max: 60
    },
    mirrorElement: [{
      element: helper.e(".control-group-border-number"),
      path: "group.border",
      type: "number"
    }],
    func: function() {
      link.render.group.border();
      render.class();
    }
  }, {
    element: helper.e(".control-group-border-number"),
    path: "group.border",
    type: "number",
    valueModify: {
      min: 0,
      max: 60
    },
    mirrorElement: [{
      element: helper.e(".control-group-border-range"),
      path: "group.border",
      type: "range"
    }],
    func: function() {
      link.render.group.border();
      render.class();
    }
  }, {
    element: helper.e(".control-group-border-default"),
    type: "button",
    func: function() {
      mod.setValue("group.border", helper.getObject({
        object: state.get.default(),
        path: "group.border"
      }));
      link.render.group.border();
      render.class();
      render.update();
    }
  }, {
    element: helper.e(".control-header-border-top-range"),
    path: "header.border.top",
    type: "range",
    valueModify: {
      min: 0,
      max: 60
    },
    mirrorElement: [{
      element: helper.e(".control-header-border-top-number"),
      path: "header.border.top",
      type: "number"
    }],
    func: function() {
      header.render.border();
      render.class();
    }
  }, {
    element: helper.e(".control-header-border-top-number"),
    path: "header.border.top",
    type: "number",
    valueModify: {
      min: 0,
      max: 60
    },
    mirrorElement: [{
      element: helper.e(".control-header-border-top-range"),
      path: "header.border.top",
      type: "range"
    }],
    func: function() {
      header.render.border();
      render.class();
    }
  }, {
    element: helper.e(".control-header-border-top-default"),
    type: "button",
    func: function() {
      mod.setValue("header.border.top", helper.getObject({
        object: state.get.default(),
        path: "header.border.top"
      }));
      header.render.border();
      render.class();
      render.update();
    }
  }, {
    element: helper.e(".control-header-border-bottom-range"),
    path: "header.border.bottom",
    type: "range",
    valueModify: {
      min: 0,
      max: 60
    },
    mirrorElement: [{
      element: helper.e(".control-header-border-bottom-number"),
      path: "header.border.bottom",
      type: "number"
    }],
    func: function() {
      header.render.border();
      render.class();
    }
  }, {
    element: helper.e(".control-header-border-bottom-number"),
    path: "header.border.bottom",
    type: "number",
    valueModify: {
      min: 0,
      max: 60
    },
    mirrorElement: [{
      element: helper.e(".control-header-border-bottom-range"),
      path: "header.border.bottom",
      type: "range"
    }],
    func: function() {
      header.render.border();
      render.class();
    }
  }, {
    element: helper.e(".control-header-border-bottom-default"),
    type: "button",
    func: function() {
      mod.setValue("header.border.bottom", helper.getObject({
        object: state.get.default(),
        path: "header.border.bottom"
      }));
      header.render.border();
      render.class();
      render.update();
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
    element: helper.e(".control-link-area-width-range"),
    path: "link.area.width",
    type: "range",
    valueModify: {
      min: 10,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-link-area-width-number"),
      path: "link.area.width",
      type: "number"
    }],
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
    }
  }, {
    element: helper.e(".control-link-area-width-number"),
    path: "link.area.width",
    type: "number",
    valueModify: {
      min: 10,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-link-area-width-range"),
      path: "link.area.width",
      type: "range"
    }],
    func: function() {
      link.render.area.width();
    }
  }, {
    element: helper.e(".control-link-area-width-default"),
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".group"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.setValue("link.area.width", helper.getObject({
        object: state.get.default(),
        path: "link.area.width"
      }));
      link.render.area.width();
      render.update();
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
    element: helper.e(".control-link-item-size-range"),
    path: "link.item.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 50,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-link-item-size-number"),
      path: "link.item.size",
      type: "number",
      valueConvert: ["float"]
    }],
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
    }
  }, {
    element: helper.e(".control-link-item-size-number"),
    path: "link.item.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 50,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-link-item-size-range"),
      path: "link.item.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.size();
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
        object: state.get.default(),
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
    element: helper.e(".control-link-item-display-letcon-letter-size-range"),
    path: "link.item.display.letcon.letter.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 3000,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-link-item-display-letcon-letter-size-number"),
      path: "link.item.display.letcon.letter.size",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.display.letter();
    }
  }, {
    element: helper.e(".control-link-item-display-letcon-letter-size-number"),
    path: "link.item.display.letcon.letter.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 3000,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-link-item-display-letcon-letter-size-range"),
      path: "link.item.display.letcon.letter.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.display.letter();
    }
  }, {
    element: helper.e(".control-link-item-display-letcon-letter-size-default"),
    type: "button",
    func: function() {
      mod.setValue("link.item.display.letcon.letter.size", helper.getObject({
        object: state.get.default(),
        path: "link.item.display.letcon.letter.size"
      }));
      link.render.item.display.letter();
      render.update();
    }
  }, {
    element: helper.e(".control-link-item-display-letcon-icon-size-range"),
    path: "link.item.display.letcon.icon.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 3000,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-link-item-display-letcon-icon-size-number"),
      path: "link.item.display.letcon.icon.size",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.display.icon();
    }
  }, {
    element: helper.e(".control-link-item-display-letcon-icon-size-number"),
    path: "link.item.display.letcon.icon.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 3000,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-link-item-display-letcon-icon-size-range"),
      path: "link.item.display.letcon.icon.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.display.icon();
    }
  }, {
    element: helper.e(".control-link-item-display-letcon-icon-size-default"),
    type: "button",
    func: function() {
      mod.setValue("link.item.display.letcon.icon.size", helper.getObject({
        object: state.get.default(),
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
    element: helper.e(".control-link-item-display-name-size-range"),
    path: "link.item.display.name.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 3000,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-link-item-display-name-size-number"),
      path: "link.item.display.name.size",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.name();
    }
  }, {
    element: helper.e(".control-link-item-display-name-size-number"),
    path: "link.item.display.name.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 3000,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-link-item-display-name-size-range"),
      path: "link.item.display.name.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.name();
    }
  }, {
    element: helper.e(".control-link-item-display-name-size-default"),
    type: "button",
    func: function() {
      mod.setValue("link.item.display.name.size", helper.getObject({
        object: state.get.default(),
        path: "link.item.display.name.size"
      }));
      link.render.item.name();
      render.update();
    }
  }, {
    element: helper.e(".control-link-item-display-rotate-range"),
    path: "link.item.display.rotate",
    type: "range",
    valueModify: {
      min: -180,
      max: 180
    },
    mirrorElement: [{
      element: helper.e(".control-link-item-display-rotate-number"),
      path: "link.item.display.rotate",
      type: "number"
    }],
    func: function() {
      link.render.item.rotate();
    }
  }, {
    element: helper.e(".control-link-item-display-rotate-number"),
    path: "link.item.display.rotate",
    type: "number",
    valueModify: {
      min: -180,
      max: 180
    },
    mirrorElement: [{
      element: helper.e(".control-link-item-display-rotate-range"),
      path: "link.item.display.rotate",
      type: "range"
    }],
    func: function() {
      link.render.item.rotate();
    }
  }, {
    element: helper.e(".control-link-item-display-rotate-default"),
    type: "button",
    func: function() {
      mod.setValue("link.item.display.rotate", helper.getObject({
        object: state.get.default(),
        path: "link.item.display.rotate"
      }));
      link.render.item.rotate();
      render.update();
    }
  }, {
    element: helper.e(".control-link-item-display-translate-x-range"),
    path: "link.item.display.translate.x",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: -1000,
      max: 1000,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-link-item-display-translate-x-number"),
      path: "link.item.display.translate.x",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.translate.x();
    }
  }, {
    element: helper.e(".control-link-item-display-translate-x-number"),
    path: "link.item.display.translate.x",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: -1000,
      max: 1000,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-link-item-display-translate-x-range"),
      path: "link.item.display.translate.x",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.translate.x();
    }
  }, {
    element: helper.e(".control-link-item-display-translate-x-default"),
    type: "button",
    func: function() {
      mod.setValue("link.item.display.translate.x", helper.getObject({
        object: state.get.default(),
        path: "link.item.display.translate.x"
      }));
      link.render.item.translate.x();
      render.update();
    }
  }, {
    element: helper.e(".control-link-item-display-translate-y-range"),
    path: "link.item.display.translate.y",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: -1000,
      max: 1000,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-link-item-display-translate-y-number"),
      path: "link.item.display.translate.y",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.translate.y();
    }
  }, {
    element: helper.e(".control-link-item-display-translate-y-number"),
    path: "link.item.display.translate.y",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: -1000,
      max: 1000,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-link-item-display-translate-y-range"),
      path: "link.item.display.translate.y",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.translate.y();
    }
  }, {
    element: helper.e(".control-link-item-display-translate-y-default"),
    type: "button",
    func: function() {
      mod.setValue("link.item.display.translate.y", helper.getObject({
        object: state.get.default(),
        path: "link.item.display.translate.y"
      }));
      link.render.item.translate.y();
      render.update();
    }
  }, {
    element: helper.e(".control-link-item-display-gutter-range"),
    path: "link.item.display.gutter",
    type: "range",
    valueModify: {
      min: 0,
      max: 40
    },
    mirrorElement: [{
      element: helper.e(".control-link-item-display-gutter-number"),
      path: "link.item.display.gutter",
      type: "number"
    }],
    func: function() {
      link.render.item.gutter();
    }
  }, {
    element: helper.e(".control-link-item-display-gutter-number"),
    path: "link.item.display.gutter",
    type: "number",
    valueModify: {
      min: 0,
      max: 40
    },
    mirrorElement: [{
      element: helper.e(".control-link-item-display-gutter-range"),
      path: "link.item.display.gutter",
      type: "range"
    }],
    func: function() {
      link.render.item.gutter();
    }
  }, {
    element: helper.e(".control-link-item-display-gutter-default"),
    type: "button",
    func: function() {
      mod.setValue("link.item.display.gutter", helper.getObject({
        object: state.get.default(),
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
    element: helper.e(".control-link-item-color-by-theme"),
    path: "link.item.color.by",
    type: "radio",
    func: function() {
      render.dependents();
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-color-by-custom"),
    path: "link.item.color.by",
    type: "radio",
    func: function() {
      render.dependents();
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-color-rgb-range"),
    path: "link.item.color.rgb",
    type: "color",
    mirrorElement: [{
      element: helper.e(".control-link-item-color-rgb-text"),
      path: "link.item.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      link.render.item.color.custom();
    }
  }, {
    element: helper.e(".control-link-item-color-rgb-text"),
    path: "link.item.color.rgb",
    type: "text",
    valueConvert: ["hexTextString"],
    mirrorElement: [{
      element: helper.e(".control-link-item-color-rgb-range"),
      path: "link.item.color.rgb",
      type: "color"
    }],
    func: function() {
      link.render.item.color.custom();
    }
  }, {
    element: helper.e(".control-link-item-border-range"),
    path: "link.item.border",
    type: "range",
    valueModify: {
      min: 0,
      max: 60
    },
    mirrorElement: [{
      element: helper.e(".control-link-item-border-number"),
      path: "link.item.border",
      type: "number"
    }],
    func: function() {
      link.render.item.border();
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-border-number"),
    path: "link.item.border",
    type: "number",
    valueModify: {
      min: 0,
      max: 60
    },
    mirrorElement: [{
      element: helper.e(".control-link-item-border-range"),
      path: "link.item.border",
      type: "range"
    }],
    func: function() {
      link.render.item.border();
      render.class();
    }
  }, {
    element: helper.e(".control-link-item-border-default"),
    type: "button",
    func: function() {
      mod.setValue("link.item.border", helper.getObject({
        object: state.get.default(),
        path: "link.item.border"
      }));
      render.class();
      link.render.item.border();
      render.update();
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
    element: helper.e(".control-theme-custom-add"),
    type: "button",
    func: function() {
      menu.close();
      theme.custom.add();
    }
  }, {
    element: helper.e(".control-theme-custom-edit"),
    path: "theme.custom.edit",
    type: "checkbox",
    func: function() {
      theme.render.custom.tabIndex();
      render.class();
    }
  }, {
    element: helper.e(".control-theme-style-dark"),
    path: "theme.style",
    type: "radio",
    func: function() {
      theme.style.dark();
    }
  }, {
    element: helper.e(".control-theme-style-light"),
    path: "theme.style",
    type: "radio",
    func: function() {
      theme.style.light();
    }
  }, {
    element: helper.e(".control-theme-font-display-name"),
    path: "theme.font.display.name",
    type: "text",
    func: function() {
      theme.render.font.delay.display();
    }
  }, {
    element: helper.e(".control-theme-font-display-name-default"),
    type: "button",
    func: function() {
      mod.setValue("theme.font.display.name", helper.getObject({
        object: state.get.default(),
        path: "theme.font.display.name"
      }));
      theme.render.font.display.name();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-font-display-weight-range"),
    path: "theme.font.display.weight",
    type: "range",
    valueModify: {
      min: 100,
      max: 900,
      step: 100
    },
    mirrorElement: [{
      element: helper.e(".control-theme-font-display-weight-number"),
      path: "theme.font.display.weight",
      type: "number"
    }],
    func: function() {
      theme.render.font.display.weight();
    }
  }, {
    element: helper.e(".control-theme-font-display-weight-default"),
    type: "button",
    func: function() {
      mod.setValue("theme.font.display.weight", helper.getObject({
        object: state.get.default(),
        path: "theme.font.display.weight"
      }));
      theme.render.font.display.weight();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-font-display-weight-number"),
    path: "theme.font.display.weight",
    type: "number",
    valueModify: {
      min: 100,
      max: 900,
      step: 100
    },
    mirrorElement: [{
      element: helper.e(".control-theme-font-display-weight-range"),
      path: "theme.font.display.weight",
      type: "range"
    }],
    func: function() {
      theme.render.font.display.weight();
    }
  }, {
    element: helper.e(".control-theme-font-display-light"),
    type: "button",
    func: function() {
      theme.mod.font.display.light();
      theme.render.font.display.weight();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-font-display-regular"),
    type: "button",
    func: function() {
      theme.mod.font.display.regular();
      theme.render.font.display.weight();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-font-display-bold"),
    type: "button",
    func: function() {
      theme.mod.font.display.bold();
      theme.render.font.display.weight();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-font-display-style-normal"),
    path: "theme.font.display.style",
    type: "radio",
    func: function() {
      theme.render.font.display.style();
    }
  }, {
    element: helper.e(".control-theme-font-display-style-italic"),
    path: "theme.font.display.style",
    type: "radio",
    func: function() {
      theme.render.font.display.style();
    }
  }, {
    element: helper.e(".control-theme-font-display-style-default"),
    type: "button",
    func: function() {
      mod.setValue("theme.font.display.style", helper.getObject({
        object: state.get.default(),
        path: "theme.font.display.style"
      }));
      theme.render.font.display.style();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-font-ui-name"),
    path: "theme.font.ui.name",
    type: "text",
    func: function() {
      theme.render.font.delay.ui();
    }
  }, {
    element: helper.e(".control-theme-font-ui-name-default"),
    type: "button",
    func: function() {
      mod.setValue("theme.font.ui.name", helper.getObject({
        object: state.get.default(),
        path: "theme.font.ui.name"
      }));
      theme.render.font.ui.name();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-font-ui-weight-range"),
    path: "theme.font.ui.weight",
    type: "range",
    valueModify: {
      min: 100,
      max: 900,
      step: 100
    },
    mirrorElement: [{
      element: helper.e(".control-theme-font-ui-weight-number"),
      path: "theme.font.ui.weight",
      type: "number"
    }],
    func: function() {
      theme.render.font.ui.weight();
    }
  }, {
    element: helper.e(".control-theme-font-ui-weight-default"),
    type: "button",
    func: function() {
      mod.setValue("theme.font.ui.weight", helper.getObject({
        object: state.get.default(),
        path: "theme.font.ui.weight"
      }));
      theme.render.font.ui.weight();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-font-ui-weight-number"),
    path: "theme.font.ui.weight",
    type: "number",
    valueModify: {
      min: 100,
      max: 900,
      step: 100
    },
    mirrorElement: [{
      element: helper.e(".control-theme-font-ui-weight-range"),
      path: "theme.font.ui.weight",
      type: "range"
    }],
    func: function() {
      theme.render.font.ui.weight();
    }
  }, {
    element: helper.e(".control-theme-font-ui-light"),
    type: "button",
    func: function() {
      theme.mod.font.ui.light();
      theme.render.font.ui.weight();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-font-ui-regular"),
    type: "button",
    func: function() {
      theme.mod.font.ui.regular();
      theme.render.font.ui.weight();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-font-ui-bold"),
    type: "button",
    func: function() {
      theme.mod.font.ui.bold();
      theme.render.font.ui.weight();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-font-ui-style-normal"),
    path: "theme.font.ui.style",
    type: "radio",
    func: function() {
      theme.render.font.ui.style();
    }
  }, {
    element: helper.e(".control-theme-font-ui-style-italic"),
    path: "theme.font.ui.style",
    type: "radio",
    func: function() {
      theme.render.font.ui.style();
    }
  }, {
    element: helper.e(".control-theme-font-ui-style-default"),
    type: "button",
    func: function() {
      mod.setValue("theme.font.ui.style", helper.getObject({
        object: state.get.default(),
        path: "theme.font.ui.style"
      }));
      theme.render.font.ui.style();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-color-rgb-color"),
    path: "theme.color.rgb",
    type: "color",
    mirrorElement: [{
      element: helper.e(".control-theme-color-hsl-h-range"),
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-h-number"),
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-s-range"),
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-s-number"),
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-l-range"),
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-l-number"),
      path: "theme.color.hsl.l",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-r-range"),
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-r-number"),
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-g-range"),
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-g-number"),
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-b-range"),
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-b-number"),
      path: "theme.color.rgb.b",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-range"),
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: helper.e(".control-theme-color-rgb-text"),
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.mod.color.hsl();
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-rgb-range"),
    path: "theme.color.rgb",
    type: "color",
    mirrorElement: [{
      element: helper.e(".control-theme-color-hsl-h-range"),
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-h-number"),
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-s-range"),
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-s-number"),
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-l-range"),
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-l-number"),
      path: "theme.color.hsl.l",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-r-range"),
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-r-number"),
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-g-range"),
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-g-number"),
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-b-range"),
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-b-number"),
      path: "theme.color.rgb.b",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-color"),
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }, {
      element: helper.e(".control-theme-color-rgb-text"),
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.mod.color.hsl();
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-rgb-text"),
    path: "theme.color.rgb",
    type: "text",
    valueConvert: ["hexTextString"],
    mirrorElement: [{
      element: helper.e(".control-theme-color-hsl-h-range"),
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-h-number"),
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-s-range"),
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-s-number"),
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-l-range"),
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-l-number"),
      path: "theme.color.hsl.l",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-r-range"),
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-r-number"),
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-g-range"),
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-g-number"),
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-b-range"),
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-b-number"),
      path: "theme.color.rgb.b",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-color"),
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }, {
      element: helper.e(".control-theme-color-rgb-range"),
      path: "theme.color.rgb",
      type: "color"
    }],
    func: function() {
      theme.mod.color.hsl();
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-rgb-default"),
    type: "button",
    func: function() {
      mod.setValue("theme.color.rgb", helper.getObject({
        object: state.get.default(),
        path: "theme.color.rgb"
      }));
      theme.mod.color.hsl();
      theme.render.color.shade();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-color-hsl-h-range"),
    path: "theme.color.hsl.h",
    type: "range",
    valueModify: {
      min: 0,
      max: 359
    },
    mirrorElement: [{
      element: helper.e(".control-theme-color-hsl-h-number"),
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-r-range"),
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-r-number"),
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-g-range"),
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-g-number"),
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-b-range"),
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-b-number"),
      path: "theme.color.rgb.b",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-range"),
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: helper.e(".control-theme-color-rgb-text"),
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.mod.color.rgb();
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-hsl-h-number"),
    path: "theme.color.hsl.h",
    type: "number",
    valueModify: {
      min: 0,
      max: 359
    },
    mirrorElement: [{
      element: helper.e(".control-theme-color-hsl-h-range"),
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-r-range"),
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-r-number"),
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-g-range"),
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-g-number"),
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-b-range"),
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-b-number"),
      path: "theme.color.rgb.b",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-range"),
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: helper.e(".control-theme-color-rgb-text"),
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.mod.color.rgb();
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-hsl-s-range"),
    path: "theme.color.hsl.s",
    type: "range",
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-theme-color-hsl-s-number"),
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-r-range"),
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-r-number"),
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-g-range"),
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-g-number"),
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-b-range"),
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-b-number"),
      path: "theme.color.rgb.b",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-range"),
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: helper.e(".control-theme-color-rgb-text"),
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.mod.color.rgb();
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-hsl-s-number"),
    path: "theme.color.hsl.s",
    type: "number",
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-theme-color-hsl-s-range"),
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-r-range"),
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-r-number"),
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-g-range"),
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-g-number"),
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-b-range"),
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-b-number"),
      path: "theme.color.rgb.b",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-range"),
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: helper.e(".control-theme-color-rgb-text"),
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.mod.color.rgb();
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-hsl-l-range"),
    path: "theme.color.hsl.l",
    type: "range",
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-theme-color-hsl-l-number"),
      path: "theme.color.hsl.l",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-r-range"),
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-r-number"),
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-g-range"),
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-g-number"),
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-b-range"),
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-b-number"),
      path: "theme.color.rgb.b",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-range"),
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: helper.e(".control-theme-color-rgb-text"),
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.mod.color.rgb();
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-hsl-l-number"),
    path: "theme.color.hsl.l",
    type: "number",
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-theme-color-hsl-l-range"),
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-r-range"),
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-r-number"),
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-g-range"),
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-g-number"),
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-b-range"),
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-rgb-b-number"),
      path: "theme.color.rgb.b",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-range"),
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: helper.e(".control-theme-color-rgb-text"),
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.mod.color.rgb();
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-rgb-r-range"),
    path: "theme.color.rgb.r",
    type: "range",
    valueModify: {
      min: 0,
      max: 255
    },
    mirrorElement: [{
      element: helper.e(".control-theme-color-rgb-r-number"),
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-h-range"),
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-h-number"),
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-s-range"),
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-s-number"),
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-l-range"),
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-l-number"),
      path: "theme.color.hsl.l",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-range"),
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: helper.e(".control-theme-color-rgb-text"),
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.mod.color.hsl();
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-rgb-r-number"),
    path: "theme.color.rgb.r",
    type: "number",
    valueModify: {
      min: 0,
      max: 255
    },
    mirrorElement: [{
      element: helper.e(".control-theme-color-rgb-r-range"),
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-h-range"),
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-h-number"),
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-s-range"),
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-s-number"),
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-l-range"),
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-l-number"),
      path: "theme.color.hsl.l",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-range"),
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: helper.e(".control-theme-color-rgb-text"),
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.mod.color.hsl();
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-rgb-g-range"),
    path: "theme.color.rgb.g",
    type: "range",
    valueModify: {
      min: 0,
      max: 255
    },
    mirrorElement: [{
      element: helper.e(".control-theme-color-rgb-g-number"),
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-h-range"),
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-h-number"),
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-s-range"),
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-s-number"),
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-l-range"),
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-l-number"),
      path: "theme.color.hsl.l",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-range"),
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: helper.e(".control-theme-color-rgb-text"),
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.mod.color.hsl();
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-rgb-g-number"),
    path: "theme.color.rgb.g",
    type: "number",
    valueModify: {
      min: 0,
      max: 255
    },
    mirrorElement: [{
      element: helper.e(".control-theme-color-rgb-g-range"),
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-h-range"),
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-h-number"),
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-s-range"),
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-s-number"),
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-l-range"),
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-l-number"),
      path: "theme.color.hsl.l",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-range"),
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: helper.e(".control-theme-color-rgb-text"),
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.mod.color.hsl();
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-rgb-b-range"),
    path: "theme.color.rgb.b",
    type: "range",
    valueModify: {
      min: 0,
      max: 255
    },
    mirrorElement: [{
      element: helper.e(".control-theme-color-rgb-b-number"),
      path: "theme.color.rgb.b",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-h-range"),
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-h-number"),
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-s-range"),
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-s-number"),
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-l-range"),
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-l-number"),
      path: "theme.color.hsl.l",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-range"),
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: helper.e(".control-theme-color-rgb-text"),
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.mod.color.hsl();
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-rgb-b-number"),
    path: "theme.color.rgb.b",
    type: "number",
    valueModify: {
      min: 0,
      max: 255
    },
    mirrorElement: [{
      element: helper.e(".control-theme-color-rgb-b-range"),
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-h-range"),
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-h-number"),
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-s-range"),
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-s-number"),
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-hsl-l-range"),
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: helper.e(".control-theme-color-hsl-l-number"),
      path: "theme.color.hsl.l",
      type: "number"
    }, {
      element: helper.e(".control-theme-color-rgb-range"),
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: helper.e(".control-theme-color-rgb-text"),
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.mod.color.hsl();
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-contrast-light-range"),
    path: "theme.color.contrast.light",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 100,
      max: 800,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-theme-color-contrast-light-number"),
      path: "theme.color.contrast.light",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-contrast-light-number"),
    path: "theme.color.contrast.light",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 100,
      max: 800,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-theme-color-contrast-light-range"),
      path: "theme.color.contrast.light",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-contrast-light-default"),
    type: "button",
    func: function() {
      mod.setValue("theme.color.contrast.light", helper.getObject({
        object: state.get.default(),
        path: "theme.color.contrast.light"
      }));
      theme.render.color.shade();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-color-contrast-dark-range"),
    path: "theme.color.contrast.dark",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 100,
      max: 800,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-theme-color-contrast-dark-number"),
      path: "theme.color.contrast.dark",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-contrast-dark-number"),
    path: "theme.color.contrast.dark",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 100,
      max: 800,
      step: 10
    },
    mirrorElement: [{
      element: helper.e(".control-theme-color-contrast-dark-range"),
      path: "theme.color.contrast.dark",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.render.color.shade();
    }
  }, {
    element: helper.e(".control-theme-color-contrast-dark-default"),
    type: "button",
    func: function() {
      mod.setValue("theme.color.contrast.dark", helper.getObject({
        object: state.get.default(),
        path: "theme.color.contrast.dark"
      }));
      theme.render.color.shade();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-accent-rgb-range"),
    path: "theme.accent.rgb",
    type: "color",
    mirrorElement: [{
      element: helper.e(".control-theme-accent-rgb-color"),
      path: "theme.accent.rgb",
      type: "color"
    }, {
      element: helper.e(".control-theme-accent-rgb-text"),
      path: "theme.accent.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.render.accent.color();
      link.groupAndItems();
    }
  }, {
    element: helper.e(".control-theme-accent-rgb-text"),
    path: "theme.accent.rgb",
    type: "text",
    valueConvert: ["hexTextString"],
    mirrorElement: [{
      element: helper.e(".control-theme-accent-rgb-color"),
      path: "theme.accent.rgb",
      type: "color"
    }, {
      element: helper.e(".control-theme-accent-rgb-range"),
      path: "theme.accent.rgb",
      type: "color"
    }],
    func: function() {
      theme.render.accent.color();
      link.groupAndItems();
    }
  }, {
    element: helper.e(".control-theme-accent-rgb-default"),
    type: "button",
    func: function() {
      mod.setValue("theme.accent.rgb", helper.getObject({
        object: state.get.default(),
        path: "theme.accent.rgb"
      }));
      theme.render.accent.color();
      link.groupAndItems();
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
    mirrorElement: [{
      element: helper.e(".control-theme-accent-rgb-color"),
      path: "theme.accent.rgb",
      type: "color"
    }, {
      element: helper.e(".control-theme-accent-rgb-range"),
      path: "theme.accent.rgb",
      type: "color"
    }, {
      element: helper.e(".control-theme-accent-rgb-text"),
      path: "theme.accent.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.accent.random();
      link.groupAndItems();
    }
  }, {
    element: helper.e(".control-theme-radius-range"),
    path: "theme.radius",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 400,
      step: 5
    },
    mirrorElement: [{
      element: helper.e(".control-theme-radius-number"),
      path: "theme.radius",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.render.radius();
      render.class();
    }
  }, {
    element: helper.e(".control-theme-radius-number"),
    path: "theme.radius",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 400,
      step: 5
    },
    mirrorElement: [{
      element: helper.e(".control-theme-radius-range"),
      path: "theme.radius",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.render.radius();
      render.class();
    }
  }, {
    element: helper.e(".control-theme-radius-default"),
    type: "button",
    func: function() {
      mod.setValue("theme.radius", helper.getObject({
        object: state.get.default(),
        path: "theme.radius"
      }));
      theme.render.radius();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-shadow-range"),
    path: "theme.shadow",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 300,
      step: 25
    },
    mirrorElement: [{
      element: helper.e(".control-theme-shadow-number"),
      path: "theme.shadow",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.render.shadow();
    }
  }, {
    element: helper.e(".control-theme-shadow-number"),
    path: "theme.shadow",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 300,
      step: 25
    },
    mirrorElement: [{
      element: helper.e(".control-theme-shadow-range"),
      path: "theme.shadow",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.render.shadow();
    }
  }, {
    element: helper.e(".control-theme-shadow-default"),
    type: "button",
    func: function() {
      mod.setValue("theme.shadow", helper.getObject({
        object: state.get.default(),
        path: "theme.shadow"
      }));
      theme.render.shadow();
      render.update();
    }
  }, {
    element: helper.e(".control-theme-shade-opacity-range"),
    path: "theme.shade.opacity",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-theme-shade-opacity-number"),
      path: "theme.shade.opacity",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.render.shade.opacity();
      render.class();
    }
  }, {
    element: helper.e(".control-theme-shade-opacity-number"),
    path: "theme.shade.opacity",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-theme-shade-opacity-range"),
      path: "theme.shade.opacity",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.render.shade.opacity();
      render.class();
    }
  }, {
    element: helper.e(".control-theme-shade-opacity-default"),
    type: "button",
    func: function() {
      mod.setValue("theme.shade.opacity", helper.getObject({
        object: state.get.default(),
        path: "theme.shade.opacity"
      }));
      theme.render.shade.opacity();
      render.update();
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
    element: helper.e(".control-background-color-rgb-range"),
    path: "background.color.rgb",
    type: "color",
    mirrorElement: [{
      element: helper.e(".control-background-color-rgb-text"),
      path: "background.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      background.render.color.custom();
    }
  }, {
    element: helper.e(".control-background-color-rgb-text"),
    path: "background.color.rgb",
    type: "text",
    valueConvert: ["hexTextString"],
    mirrorElement: [{
      element: helper.e(".control-background-color-rgb-range"),
      path: "background.color.rgb",
      type: "color"
    }],
    func: function() {
      background.render.color.custom();
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
    element: helper.e(".control-background-image-opacity-range"),
    path: "background.image.opacity",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-background-image-opacity-number"),
      path: "background.image.opacity",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      background.render.opacity();
    }
  }, {
    element: helper.e(".control-background-image-opacity-number"),
    path: "background.image.opacity",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-background-image-opacity-range"),
      path: "background.image.opacity",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      background.render.opacity();
    }
  }, {
    element: helper.e(".control-background-image-opacity-default"),
    type: "button",
    func: function() {
      mod.setValue("background.image.opacity", helper.getObject({
        object: state.get.default(),
        path: "background.image.opacity"
      }));
      background.render.opacity();
      render.update();
    }
  }, {
    element: helper.e(".control-background-image-grayscale-range"),
    path: "background.image.grayscale",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-background-image-grayscale-number"),
      path: "background.image.grayscale",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      background.render.grayscale();
    }
  }, {
    element: helper.e(".control-background-image-grayscale-number"),
    path: "background.image.grayscale",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-background-image-grayscale-range"),
      path: "background.image.grayscale",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      background.render.grayscale();
    }
  }, {
    element: helper.e(".control-background-image-grayscale-default"),
    type: "button",
    func: function() {
      mod.setValue("background.image.grayscale", helper.getObject({
        object: state.get.default(),
        path: "background.image.grayscale"
      }));
      background.render.grayscale();
      render.update();
    }
  }, {
    element: helper.e(".control-background-image-blur-range"),
    path: "background.image.blur",
    type: "range",
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-background-image-blur-number"),
      path: "background.image.blur",
      type: "number"
    }],
    func: function() {
      background.render.blur();
    }
  }, {
    element: helper.e(".control-background-image-blur-number"),
    path: "background.image.blur",
    type: "number",
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-background-image-blur-range"),
      path: "background.image.blur",
      type: "range"
    }],
    func: function() {
      background.render.blur();
    }
  }, {
    element: helper.e(".control-background-image-blur-default"),
    type: "button",
    func: function() {
      mod.setValue("background.image.blur", helper.getObject({
        object: state.get.default(),
        path: "background.image.blur"
      }));
      background.render.blur();
      render.update();
    }
  }, {
    element: helper.e(".control-background-image-accent-range"),
    path: "background.image.accent",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-background-image-accent-number"),
      path: "background.image.accent",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      background.render.accent();
    }
  }, {
    element: helper.e(".control-background-image-accent-number"),
    path: "background.image.accent",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: helper.e(".control-background-image-accent-range"),
      path: "background.image.accent",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      background.render.accent();
    }
  }, {
    element: helper.e(".control-background-image-accent-default"),
    type: "button",
    func: function() {
      mod.setValue("background.image.accent", helper.getObject({
        object: state.get.default(),
        path: "background.image.accent"
      }));
      background.render.accent();
      render.update();
    }
  }, {
    element: helper.e(".control-background-image-scale-range"),
    path: "background.image.scale",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 100,
      max: 1000
    },
    mirrorElement: [{
      element: helper.e(".control-background-image-scale-number"),
      path: "background.image.scale",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      background.render.scale();
    }
  }, {
    element: helper.e(".control-background-image-scale-number"),
    path: "background.image.scale",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 100,
      max: 1000
    },
    mirrorElement: [{
      element: helper.e(".control-background-image-scale-range"),
      path: "background.image.scale",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      background.render.scale();
    }
  }, {
    element: helper.e(".control-background-image-scale-default"),
    type: "button",
    func: function() {
      mod.setValue("background.image.scale", helper.getObject({
        object: state.get.default(),
        path: "background.image.scale"
      }));
      background.render.scale();
      render.update();
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
    var _timerInputupdate = null;
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
        var newValue = object.element.value;
        return parseInt(newValue, 10);
      },
      range: function(object) {
        return parseInt(object.element.value, 10);
      },
      color: function(object) {
        return helper.convertColor.hex.rgb(object.element.value);
      }
    };
    var valueConvert = {
      reverse: function(value, object) {
        return parseInt(object.element.max, 10) - value;
      },
      float: function(value, object) {
        return value / 100;
      },
      hexTextString: function(value, object) {
        return helper.convertColor.hex.rgb(value);
      }
    };
    var valueModify = {
      min: function(value, object) {
        if (isNaN(value) || value < object.valueModify.min) {
          value = object.valueModify.min;
        };
        return value;
      },
      max: function(value, object) {
        if (value > object.valueModify.max) {
          value = object.valueModify.max;
        };
        return value;
      },
      step: function(value, object) {
        value = Math.round(value / object.valueModify.step) * object.valueModify.step;
        return value;
      }
    };
    var setValue = function(object) {
      if (object.path) {
        var newValue = valueType[object.type](object);
        if (object.valueModify) {
          for (var key in object.valueModify) {
            newValue = valueModify[key](newValue, object);
          };
        };
        if (object.valueConvert) {
          object.valueConvert.forEach(function(arrayItem, index) {
            newValue = valueConvert[arrayItem](newValue, object);
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
          setValue(object);
          if (object.func) {
            object.func();
          };
        },
        textarea: function(object, event) {
          setValue(object);
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
        object.additionalEvents.forEach(function(arrayItem, index) {
          object.element.addEventListener(arrayItem.event, function(event) {
            arrayItem.func(event);
            data.save();
          }, false);
        });
      };
      if (object.mirrorElement) {
        object.mirrorElement.forEach(function(arrayItem, index) {
          object.element.addEventListener(eventType[object.type], function(event) {
            render.update(arrayItem);
          }, false);
        });
      };
      if (object.valueModify) {
        object.mirrorElement.forEach(function(arrayItem, index) {
          object.element.addEventListener(eventType[object.type], function(event) {
            var _update = function() {
              render.update(object);
            };
            clearTimeout(_timerInputupdate);
            _timerInputupdate = setTimeout(_update, 1000);
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
        if (state.get.current().header.button.colorAccent.show) {
          helper.addClass(html, "is-header-button-coloraccent-show");
        } else {
          helper.removeClass(html, "is-header-button-coloraccent-show");
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
      var _color = function() {
        helper.removeClass(html, "is-header-color-show");
        helper.removeClass(html, "is-header-color-style-scroll");
        helper.removeClass(html, "is-header-color-style-always");
        helper.removeClass(html, "is-header-color-by-theme");
        helper.removeClass(html, "is-header-color-by-custom");
        if (state.get.current().header.color.show) {
          helper.addClass(html, "is-header-color-show");
          helper.addClass(html, "is-header-color-style-" + state.get.current().header.color.style);
          helper.addClass(html, "is-header-color-by-" + state.get.current().header.color.by);
        };
      };
      var _radius = function() {
        helper.removeClass(html, "is-header-radius");
        if (state.get.current().header.radius > 0) {
          helper.addClass(html, "is-header-radius");
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
      _color();
      _radius();
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
      helper.removeClass(html, "is-link-item-color-by-theme");
      helper.removeClass(html, "is-link-item-color-by-custom");
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
        helper.addClass(html, "is-link-item-color-by-" + state.get.current().link.item.color.by);
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
      helper.removeClass(html, "is-theme-custom-edit");
      helper.removeClass(html, "is-theme-radius");
      if (state.get.current().theme.custom.edit) {
        helper.addClass(html, "is-theme-custom-edit");
      };
      if (state.get.current().theme.radius > 0) {
        helper.addClass(html, "is-theme-radius");
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
          _disable.element("[for=control-header-clock-size-range]", false);
          _disable.input(".control-header-clock-size-range", false);
          _disable.input(".control-header-clock-size-number", false);
          _disable.input(".control-header-clock-size-default", false);
        } else {
          _disable.element("[for=control-header-clock-size-range]", true);
          _disable.input(".control-header-clock-size-range", true);
          _disable.input(".control-header-clock-size-number", true);
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
          _disable.element("[for=control-header-date-size-range]", false);
          _disable.input(".control-header-date-size-range", false);
          _disable.input(".control-header-date-size-number", false);
          _disable.input(".control-header-date-size-default", false);
        } else {
          _disable.element("[for=control-header-date-size-range]", true);
          _disable.input(".control-header-date-size-range", true);
          _disable.input(".control-header-date-size-number", true);
          _disable.input(".control-header-date-size-default", true);
        };
      };
      var _shade = function() {
        if (state.get.current().header.color.show) {
          _disable.input(".control-header-color-style-always", false);
          _disable.element(".control-header-color-style-always-helper", false);
          _disable.input(".control-header-color-style-scroll", false);
          _disable.element(".control-header-color-style-scroll-helper", false);
          _disable.input(".control-header-color-by-theme", false);
          _disable.element(".control-header-color-by-theme-helper", false);
          _disable.input(".control-header-color-by-custom", false);
          _disable.element(".control-header-color-by-custom-helper", false);
          _disable.input(".control-header-color-rgb-range", false);
          _disable.input(".control-header-color-rgb-text", false);
          _disable.element("[for=control-header-color-opacity-range]", false);
          _disable.input(".control-header-color-opacity-range", false);
          _disable.input(".control-header-color-opacity-number", false);
          _disable.input(".control-header-color-opacity-default", false);
          _disable.input(".control-header-radius", false);
          _disable.element(".control-header-radius-helper", false);
        } else {
          _disable.input(".control-header-color-style-always", true);
          _disable.element(".control-header-color-style-always-helper", true);
          _disable.input(".control-header-color-style-scroll", true);
          _disable.element(".control-header-color-style-scroll-helper", true);
          _disable.input(".control-header-color-by-theme", true);
          _disable.element(".control-header-color-by-theme-helper", true);
          _disable.input(".control-header-color-by-custom", true);
          _disable.element(".control-header-color-by-custom-helper", true);
          _disable.input(".control-header-color-rgb-range", true);
          _disable.input(".control-header-color-rgb-text", true);
          _disable.element("[for=control-header-color-opacity-range]", true);
          _disable.input(".control-header-color-opacity-range", true);
          _disable.input(".control-header-color-opacity-number", true);
          _disable.input(".control-header-color-opacity-default", true);
          _disable.input(".control-header-radius", true);
          _disable.element(".control-header-radius-helper", true);
        };
        if (state.get.current().header.color.show && state.get.current().header.color.by == "theme") {
          _disable.input(".control-header-color-rgb-range", true);
          _disable.input(".control-header-color-rgb-text", true);
        } else if (state.get.current().header.color.show && state.get.current().header.color.by == "custom") {
          _disable.input(".control-header-color-rgb-range", false);
          _disable.input(".control-header-color-rgb-text", false);
        };
      };
      var _button = function() {
        _disable.input(".control-header-button-coloraccent-dot-show", true);
        if (state.get.current().header.button.colorAccent.show) {
          _disable.input(".control-header-button-coloraccent-dot-show", false);
        };
      };
      var _search = function() {
        if (state.get.current().header.search.show) {
          _disable.element(".control-header-search-style-label", false);
          _disable.input(".control-header-search-style-auto", false);
          _disable.element(".control-header-search-style-auto-helper", false);
          _disable.input(".control-header-search-style-custom", false);
          _disable.element(".control-header-search-style-custom-helper", false);
          _disable.input(".control-header-search-width-range", false);
          _disable.input(".control-header-search-width-number", false);
          _disable.input(".control-header-search-width-default", false);
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
          _disable.element("[for=control-header-search-size-range]", false);
          _disable.input(".control-header-search-size-range", false);
          _disable.input(".control-header-search-size-number", false);
          _disable.input(".control-header-search-size-default", false);
          _disable.element(".control-header-search-size-helper", false);
        } else {
          _disable.element(".control-header-search-style-label", true);
          _disable.input(".control-header-search-style-auto", true);
          _disable.element(".control-header-search-style-auto-helper", true);
          _disable.input(".control-header-search-style-custom", true);
          _disable.element(".control-header-search-style-custom-helper", true);
          _disable.input(".control-header-search-width-range", true);
          _disable.input(".control-header-search-width-number", true);
          _disable.input(".control-header-search-width-default", true);
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
          _disable.element("[for=control-header-search-size-range]", true);
          _disable.input(".control-header-search-size-range", true);
          _disable.input(".control-header-search-size-number", true);
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
          _disable.input(".control-header-search-width-range", false);
          _disable.input(".control-header-search-width-number", false);
          _disable.input(".control-header-search-width-default", false);
        } else {
          _disable.input(".control-header-search-width-range", true);
          _disable.input(".control-header-search-width-number", true);
          _disable.input(".control-header-search-width-default", true);
        };
      };
      var _greeting = function() {
        if (state.get.current().header.greeting.show) {
          _disable.element("[for=control-header-greeting-name]", false);
          _disable.input(".control-header-greeting-name", false);
          _disable.input(".control-header-greeting-type-good", false);
          _disable.input(".control-header-greeting-type-hello", false);
          _disable.input(".control-header-greeting-type-hi", false);
          _disable.element("[for=control-header-greeting-size-range]", false);
          _disable.input(".control-header-greeting-size-range", false);
          _disable.input(".control-header-greeting-size-number", false);
          _disable.input(".control-header-greeting-size-default", false);
        } else {
          _disable.element("[for=control-header-greeting-name]", true);
          _disable.input(".control-header-greeting-name", true);
          _disable.input(".control-header-greeting-type-good", true);
          _disable.input(".control-header-greeting-type-hello", true);
          _disable.input(".control-header-greeting-type-hi", true);
          _disable.element("[for=control-header-greeting-size-range]", true);
          _disable.input(".control-header-greeting-size-range", true);
          _disable.input(".control-header-greeting-size-number", true);
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
          _disable.element("[for=control-header-transitional-size-range]", false);
          _disable.input(".control-header-transitional-size-range", false);
          _disable.input(".control-header-transitional-size-number", false);
          _disable.input(".control-header-transitional-size-default", false);
        } else {
          _disable.input(".control-header-transitional-type-timeanddate", true);
          _disable.input(".control-header-transitional-type-its", true);
          _disable.element("[for=control-header-transitional-size-range]", true);
          _disable.input(".control-header-transitional-size-range", true);
          _disable.input(".control-header-transitional-size-number", true);
          _disable.input(".control-header-transitional-size-default", true);
        };
      };
      _clock();
      _date();
      _shade();
      _button();
      _search();
      _greeting();
      _transitional();
    };
    var _edit = function() {
      _disable.input(".control-edit", true);
      if (bookmarks.get().length > 0) {
        _disable.input(".control-edit", false);
      };
    };
    var _group = function() {
      _disable.element("[for=control-group-name-size-range]", true);
      _disable.input(".control-group-name-size-range", true);
      _disable.input(".control-group-name-size-number", true);
      _disable.input(".control-group-name-size-default", true);
      if (state.get.current().group.name.show) {
        _disable.element("[for=control-group-name-size-range]", false);
        _disable.input(".control-group-name-size-range", false);
        _disable.input(".control-group-name-size-number", false);
        _disable.input(".control-group-name-size-default", false);
      };
    };
    var _link = function() {
      _disable.input(".control-layout-order-headerlink", true);
      _disable.input(".control-layout-order-linkheader", true);
      _disable.element(".control-layout-order-helper", true);
      _disable.element("[for=control-link-area-width-range]", true);
      _disable.input(".control-link-area-width-range", true);
      _disable.input(".control-link-area-width-number", true);
      _disable.input(".control-link-area-width-default", true);
      _disable.input(".control-link-area-width-match", true);
      _disable.element(".control-link-area-width-helper", true);
      _disable.element(".control-link-area-alignment-grid", true);
      _disable.element(".control-link-area-alignment-label", true);
      _disable.input(".control-link-area-alignment-left", true);
      _disable.input(".control-link-area-alignment-center", true);
      _disable.input(".control-link-area-alignment-right", true);
      _disable.element(".control-link-area-alignment-helper", true);
      _disable.element("[for=control-link-item-size-range]", true);
      _disable.input(".control-link-item-size-range", true);
      _disable.input(".control-link-item-size-number", true);
      _disable.input(".control-link-item-size-default", true);
      _disable.input(".control-link-item-display-letcon-show", true);
      _disable.element("[for=control-link-item-display-letcon-letter-size-range]", true);
      _disable.input(".control-link-item-display-letcon-letter-size-range", true);
      _disable.input(".control-link-item-display-letcon-letter-size-number", true);
      _disable.input(".control-link-item-display-letcon-letter-size-default", true);
      _disable.element("[for=control-link-item-display-letcon-icon-size-range]", true);
      _disable.input(".control-link-item-display-letcon-icon-size-range", true);
      _disable.input(".control-link-item-display-letcon-icon-size-number", true);
      _disable.input(".control-link-item-display-letcon-icon-size-default", true);
      _disable.input(".control-link-item-display-name-show", true);
      _disable.element("[for=control-link-item-display-name-size-range]", true);
      _disable.input(".control-link-item-display-name-size-range", true);
      _disable.input(".control-link-item-display-name-size-number", true);
      _disable.input(".control-link-item-display-name-size-default", true);
      _disable.element("[for=control-link-item-display-rotate-range]", true);
      _disable.input(".control-link-item-display-rotate-range", true);
      _disable.input(".control-link-item-display-rotate-number", true);
      _disable.input(".control-link-item-display-rotate-default", true);
      _disable.element("[for=control-link-item-display-translate-x-range]", true);
      _disable.input(".control-link-item-display-translate-x-range", true);
      _disable.input(".control-link-item-display-translate-x-number", true);
      _disable.input(".control-link-item-display-translate-x-default", true);
      _disable.element("[for=control-link-item-display-translate-y-range]", true);
      _disable.input(".control-link-item-display-translate-y-range", true);
      _disable.input(".control-link-item-display-translate-y-number", true);
      _disable.input(".control-link-item-display-translate-y-default", true);
      _disable.element("[for=control-link-item-display-gutter-range]", true);
      _disable.input(".control-link-item-display-gutter-range", true);
      _disable.input(".control-link-item-display-gutter-number", true);
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
      _disable.element(".control-link-item-shadow-show-helper", true);
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
      _disable.input(".control-link-item-color-by-theme", true);
      _disable.element(".control-link-item-color-by-theme-helper", true);
      _disable.input(".control-link-item-color-by-custom", true);
      _disable.element(".control-link-item-color-by-custom-helper", true);
      _disable.input(".control-link-item-color-rgb-range", true);
      _disable.input(".control-link-item-color-rgb-text", true);
      _disable.element("[for=control-link-item-border-range]", true);
      _disable.input(".control-link-item-border-range", true);
      _disable.input(".control-link-item-border-number", true);
      _disable.input(".control-link-item-border-default", true);
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
        _disable.element("[for=control-link-area-width-range]", false);
        _disable.input(".control-link-area-width-range", false);
        _disable.input(".control-link-area-width-number", false);
        _disable.input(".control-link-area-width-default", false);
        _disable.input(".control-link-area-width-match", false);
        _disable.element(".control-link-area-width-helper", false);
        _disable.element(".control-link-area-alignment-grid", false);
        _disable.element(".control-link-area-alignment-label", false);
        _disable.input(".control-link-area-alignment-left", false);
        _disable.input(".control-link-area-alignment-center", false);
        _disable.input(".control-link-area-alignment-right", false);
        _disable.element(".control-link-area-alignment-helper", false);
        _disable.element("[for=control-link-item-size-range]", false);
        _disable.input(".control-link-item-size-range", false);
        _disable.input(".control-link-item-size-number", false);
        _disable.input(".control-link-item-size-default", false);
        _disable.input(".control-link-item-display-letcon-show", false);
        _disable.input(".control-link-item-display-name-show", false);
        _disable.input(".control-link-item-url-show", false);
        _disable.input(".control-link-item-line-show", false);
        _disable.input(".control-link-item-shadow-show", false);
        _disable.element(".control-link-item-shadow-show-helper", false);
        _disable.input(".control-link-item-hoverscale", false);
        _disable.input(".control-link-newtab", false);
        _disable.input(".control-link-item-color-by-theme", false);
        _disable.element(".control-link-item-color-by-theme-helper", false);
        _disable.input(".control-link-item-color-by-custom", false);
        _disable.element(".control-link-item-color-by-custom-helper", false);
        _disable.element("[for=control-link-item-border-range]", false);
        _disable.input(".control-link-item-border-range", false);
        _disable.input(".control-link-item-border-number", false);
        _disable.input(".control-link-item-border-default", false);
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
          _disable.element("[for=control-link-item-display-letcon-letter-size-range]", false);
          _disable.input(".control-link-item-display-letcon-letter-size-range", false);
          _disable.input(".control-link-item-display-letcon-letter-size-number", false);
          _disable.input(".control-link-item-display-letcon-letter-size-default", false);
          _disable.element("[for=control-link-item-display-letcon-icon-size-range]", false);
          _disable.input(".control-link-item-display-letcon-icon-size-range", false);
          _disable.input(".control-link-item-display-letcon-icon-size-number", false);
          _disable.input(".control-link-item-display-letcon-icon-size-default", false);
        };
        if (state.get.current().link.item.display.name.show) {
          _disable.element("[for=control-link-item-display-name-size-range]", false);
          _disable.input(".control-link-item-display-name-size-range", false);
          _disable.input(".control-link-item-display-name-size-number", false);
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
          _disable.element("[for=control-link-item-display-rotate-range]", false);
          _disable.input(".control-link-item-display-rotate-range", false);
          _disable.input(".control-link-item-display-rotate-number", false);
          _disable.input(".control-link-item-display-rotate-default", false);
          _disable.element("[for=control-link-item-display-translate-x-range]", false);
          _disable.input(".control-link-item-display-translate-x-range", false);
          _disable.input(".control-link-item-display-translate-x-number", false);
          _disable.input(".control-link-item-display-translate-x-default", false);
          _disable.element("[for=control-link-item-display-translate-y-range]", false);
          _disable.input(".control-link-item-display-translate-y-range", false);
          _disable.input(".control-link-item-display-translate-y-number", false);
          _disable.input(".control-link-item-display-translate-y-default", false);
        };
        if (state.get.current().link.item.display.letcon.show && state.get.current().link.item.display.name.show) {
          _disable.input(".control-link-item-display-direction-horizontal", false);
          _disable.input(".control-link-item-display-direction-vertical", false);
          _disable.input(".control-link-item-display-order-letconname", false);
          _disable.input(".control-link-item-display-order-nameletcon", false);
          _disable.element(".control-link-item-display-direction-helper", false);
          _disable.element(".control-link-item-display-order-helper", false);
          _disable.element("[for=control-link-item-display-gutter-range]", false);
          _disable.input(".control-link-item-display-gutter-range", false);
          _disable.input(".control-link-item-display-gutter-number", false);
          _disable.input(".control-link-item-display-gutter-default", false);
        };
        if (state.get.current().link.item.color.by == "custom") {
          _disable.input(".control-link-item-color-rgb-range", false);
          _disable.input(".control-link-item-color-rgb-text", false);
        };
      };
    };
    var _theme = function() {
      _disable.input(".control-theme-custom-edit", true);
      _disable.input(".control-theme-accent-random-style-any", true);
      _disable.input(".control-theme-accent-random-style-light", true);
      _disable.input(".control-theme-accent-random-style-dark", true);
      _disable.input(".control-theme-accent-random-style-pastel", true);
      _disable.input(".control-theme-accent-random-style-saturated", true);
      _disable.input(".control-theme-accent-randomise", true);
      if (state.get.current().theme.custom.all.length > 0) {
        _disable.input(".control-theme-custom-edit", false);
      };
      if (state.get.current().theme.accent.random.active) {
        _disable.input(".control-theme-accent-random-style-any", false);
        _disable.input(".control-theme-accent-random-style-light", false);
        _disable.input(".control-theme-accent-random-style-dark", false);
        _disable.input(".control-theme-accent-random-style-pastel", false);
        _disable.input(".control-theme-accent-random-style-saturated", false);
        _disable.input(".control-theme-accent-randomise", false);
      };
    };
    var _background = function() {
      if (state.get.current().background.image.show) {
        _disable.input(".control-background-image-from-file", false);
        _disable.input(".control-background-image-from-url", false);
        _disable.element("[for=control-background-image-opacity-range]", false);
        _disable.input(".control-background-image-opacity-range", false);
        _disable.input(".control-background-image-opacity-number", false);
        _disable.input(".control-background-image-opacity-default", false);
        _disable.element("[for=control-background-image-blur-range]", false);
        _disable.input(".control-background-image-blur-range", false);
        _disable.input(".control-background-image-blur-number", false);
        _disable.input(".control-background-image-blur-default", false);
        _disable.element("[for=control-background-image-grayscale-range]", false);
        _disable.input(".control-background-image-grayscale-range", false);
        _disable.input(".control-background-image-grayscale-number", false);
        _disable.input(".control-background-image-grayscale-default", false);
        _disable.element("[for=control-background-image-accent-range]", false);
        _disable.input(".control-background-image-accent-range", false);
        _disable.input(".control-background-image-accent-number", false);
        _disable.input(".control-background-image-accent-default", false);
        _disable.element("[for=control-background-image-scale-range]", false);
        _disable.input(".control-background-image-scale-range", false);
        _disable.input(".control-background-image-scale-number", false);
        _disable.input(".control-background-image-scale-default", false);
      } else {
        _disable.input(".control-background-image-from-file", true);
        _disable.input(".control-background-image-from-url", true);
        _disable.element("[for=control-background-image-opacity-range]", true);
        _disable.input(".control-background-image-opacity-range", true);
        _disable.input(".control-background-image-opacity-number", true);
        _disable.input(".control-background-image-opacity-default", true);
        _disable.element("[for=control-background-image-blur-range]", true);
        _disable.input(".control-background-image-blur-range", true);
        _disable.input(".control-background-image-blur-number", true);
        _disable.input(".control-background-image-blur-default", true);
        _disable.element("[for=control-background-image-grayscale-range]", true);
        _disable.input(".control-background-image-grayscale-range", true);
        _disable.input(".control-background-image-grayscale-number", true);
        _disable.input(".control-background-image-grayscale-default", true);
        _disable.element("[for=control-background-image-accent-range]", true);
        _disable.input(".control-background-image-accent-range", true);
        _disable.input(".control-background-image-accent-number", true);
        _disable.input(".control-background-image-accent-default", true);
        _disable.element("[for=control-background-image-scale-range]", true);
        _disable.input(".control-background-image-scale-range", true);
        _disable.input(".control-background-image-scale-number", true);
        _disable.input(".control-background-image-scale-default", true);
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
        _disable.input(".control-background-color-rgb-range", true);
        _disable.input(".control-background-color-rgb-text", true);
      } else if (state.get.current().background.color.by == "custom") {
        _disable.input(".control-background-color-rgb-range", false);
        _disable.input(".control-background-color-rgb-text", false);
      };
    };
    _header();
    _edit();
    _group();
    _link();
    _theme();
    _background();
  };

  render.update = function(object) {
    var valueConvert = {
      reverse: function(value, object) {
        return object.valueModify.max - value;
      },
      float: function(value, object) {
        return value * 100;
      },
      hexTextString: function(value, object) {
        return helper.convertColor.rgb.hex(value);
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
        if (object.valueConvert) {
          object.valueConvert.slice().reverse().forEach(function(arrayItem, index) {
            newValue = valueConvert[arrayItem](newValue, object);
          });
        };
        object.element.value = newValue;
      },
      textarea: function(object) {
        var newValue = helper.getObject({
          object: state.get.current(),
          path: object.path
        });
        if (object.valueConvert) {
          object.valueConvert.slice().reverse().forEach(function(arrayItem, index) {
            newValue = valueConvert[arrayItem](newValue, object);
          });
        };
        object.element.value = newValue;
      },
      number: function(object) {
        var newValue = helper.getObject({
          object: state.get.current(),
          path: object.path
        });
        if (object.valueConvert) {
          object.valueConvert.slice().reverse().forEach(function(arrayItem, index) {
            newValue = valueConvert[arrayItem](newValue, object);
          });
        };
        object.element.value = Math.round(newValue);
      },
      range: function(object) {
        var newValue = helper.getObject({
          object: state.get.current(),
          path: object.path
        });
        if (object.valueConvert) {
          object.valueConvert.slice().reverse().forEach(function(arrayItem, index) {
            newValue = valueConvert[arrayItem](newValue, object);
          });
        };
        object.element.value = newValue;
      },
      color: function(object) {
        object.element.value = helper.convertColor.rgb.hex(helper.getObject({
          object: state.get.current(),
          path: object.path
        }));
      }
    };
    var supportedType = ["checkbox", "radio", "text", "number", "range", "color", "textarea"];
    if (object) {
      if (supportedType.includes(object.element.type)) {
        setValue[object.type](object);
      };
    } else {
      _allControl.forEach(function(arrayItem, index) {
        if (supportedType.includes(arrayItem.element.type)) {
          setValue[arrayItem.type](arrayItem);
        };
      });
    }
  };

  render.input = function() {
    _allControl.forEach(function(arrayItem, index) {
      if (arrayItem.valueModify) {
        if (arrayItem.valueModify) {
          for (var key in arrayItem.valueModify) {
            arrayItem.element[key] = arrayItem.valueModify[key];
          };
        };
      };
    });
  };

  var init = function() {
    bind.controls();
    render.input();
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
