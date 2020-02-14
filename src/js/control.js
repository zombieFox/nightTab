var control = (function() {

  var mod = {};

  mod.header = [{
    element: ".control-menu-open",
    type: "button",
    func: function() {
      menu.open();
    },
  }, {
    element: ".control-link-add",
    type: "button",
    func: function() {
      link.add.item.open();
    }
  }, {
    element: ".control-group-add",
    type: "button",
    func: function() {
      link.add.group.open();
    }
  }, {
    element: ".control-edit",
    path: "edit",
    type: "checkbox",
    func: function() {
      link.tabindex();
      render.class();
    }
  }, {
    element: ".control-theme-color-rgb-color-quick",
    path: "theme.color.rgb",
    type: "color",
    mirrorElement: [{
      element: ".control-theme-color-rgb-color",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-text",
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }, {
      element: ".control-theme-color-hsl-h-range",
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-h-number",
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-s-range",
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-s-number",
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-l-range",
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-l-number",
      path: "theme.color.hsl.l",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-r-range",
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-r-number",
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-g-range",
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-g-number",
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-b-range",
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-b-number",
      path: "theme.color.rgb.b",
      type: "number"
    }],
    func: function() {
      theme.mod.color.hsl();
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-accent-rgb-color-quick",
    path: "theme.accent.rgb",
    type: "color",
    mirrorElement: [{
      element: ".control-theme-accent-rgb-color",
      path: "theme.accent.rgb",
      type: "color"
    }, {
      element: ".control-theme-accent-rgb-text",
      path: "theme.accent.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.render.accent.color();
      link.groupAndItems();
    }
  }];

  mod.menu = [{
    element: ".control-menu-layout",
    type: "button",
    func: function() {
      menu.nav(this.element, ".menu-content-area-layout");
    }
  }, {
    element: ".control-menu-header",
    type: "button",
    func: function() {
      menu.nav(this.element, ".menu-content-area-header");
    }
  }, {
    element: ".control-menu-groups",
    type: "button",
    func: function() {
      menu.nav(this.element, ".menu-content-area-groups");
    }
  }, {
    element: ".control-menu-bookmarks",
    type: "button",
    func: function() {
      menu.nav(this.element, ".menu-content-area-bookmarks");
    }
  }, {
    element: ".control-menu-theme",
    type: "button",
    func: function() {
      menu.nav(this.element, ".menu-content-area-theme");
    }
  }, {
    element: ".control-menu-background",
    type: "button",
    func: function() {
      menu.nav(this.element, ".menu-content-area-background");
    }
  }, {
    element: ".control-menu-data",
    type: "button",
    func: function() {
      menu.nav(this.element, ".menu-content-area-data");
    }
  }, {
    element: ".control-menu-coffee",
    type: "button",
    func: function() {
      menu.nav(this.element, ".menu-content-area-coffee");
    }
  }, {
    element: ".control-menu-nightTab",
    type: "button",
    func: function() {
      menu.nav(this.element, ".menu-content-area-nightTab");
    }
  }, {
    element: ".control-menu-close",
    type: "button",
    func: function() {
      menu.close();
    }
  }, {
    element: ".control-layout-size-range",
    path: "layout.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 50,
      max: 200,
      step: 5
    },
    mirrorElement: [{
      element: ".control-layout-size-number",
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
    element: ".control-layout-size-number",
    path: "layout.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 50,
      max: 200,
      step: 5
    },
    mirrorElement: [{
      element: ".control-layout-size-range",
      path: "layout.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      layout.render.size();
    }
  }, {
    element: ".control-layout-size-default",
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
      mod.default("layout.size");
      layout.render.size();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-layout-width-range",
    path: "layout.width",
    type: "range",
    valueModify: {
      min: 10,
      max: 100
    },
    mirrorElement: [{
      element: ".control-layout-width-number",
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
    element: ".control-layout-width-number",
    path: "layout.width",
    type: "number",
    valueModify: {
      min: 10,
      max: 100
    },
    mirrorElement: [{
      element: ".control-layout-width-range",
      path: "layout.width",
      type: "number"
    }],
    func: function() {
      render.class();
      layout.render.width();
    }
  }, {
    element: ".control-layout-width-default",
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
      mod.default("layout.width");
      layout.render.width();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-layout-alignment-topleft",
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-layout-alignment-topcenter",
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-layout-alignment-topright",
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-layout-alignment-centerleft",
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-layout-alignment-centercenter",
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-layout-alignment-centerright",
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-layout-alignment-bottomleft",
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-layout-alignment-bottomcenter",
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-layout-alignment-bottomright",
    path: "layout.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-layout-order-headerlink",
    path: "layout.order",
    type: "radio",
    func: function() {
      render.class();
      layout.render.order();
      header.render.color.scrolling();
    }
  }, {
    element: ".control-layout-order-linkheader",
    path: "layout.order",
    type: "radio",
    func: function() {
      render.class();
      layout.render.order();
      header.render.color.scrolling();
    }
  }, {
    element: ".control-layout-padding-range",
    path: "layout.padding",
    type: "range",
    valueModify: {
      min: 0,
      max: 40
    },
    mirrorElement: [{
      element: ".control-layout-padding-number",
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
    element: ".control-layout-padding-number",
    path: "layout.padding",
    type: "number",
    valueModify: {
      min: 0,
      max: 40
    },
    mirrorElement: [{
      element: ".control-layout-padding-range",
      path: "layout.padding",
      type: "range"
    }],
    func: function() {
      layout.render.padding();
    }
  }, {
    element: ".control-layout-padding-default",
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
      mod.default("layout.padding");
      layout.render.padding();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-layout-gutter-range",
    path: "layout.gutter",
    type: "range",
    valueModify: {
      min: 0,
      max: 40
    },
    mirrorElement: [{
      element: ".control-layout-gutter-number",
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
    element: ".control-layout-gutter-number",
    path: "layout.gutter",
    type: "number",
    valueModify: {
      min: 0,
      max: 40
    },
    mirrorElement: [{
      element: ".control-layout-gutter-range",
      path: "layout.gutter",
      type: "range"
    }],
    func: function() {
      layout.render.gutter();
    }
  }, {
    element: ".control-layout-gutter-default",
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
      mod.default("layout.gutter");
      layout.render.gutter();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-layout-title",
    path: "layout.title",
    type: "text",
    func: function() {
      layout.render.title();
    }
  }, {
    element: ".control-layout-scrollpastend",
    path: "layout.scrollPastEnd",
    type: "checkbox",
    func: function() {
      render.class();
      header.render.color.scrolling();
    }
  }, {
    element: ".control-layout-scrollbars-auto",
    path: "layout.scrollbars",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-layout-scrollbars-thin",
    path: "layout.scrollbars",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-layout-scrollbars-none",
    path: "layout.scrollbars",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-header-area-width-range",
    path: "header.area.width",
    type: "range",
    valueModify: {
      min: 10,
      max: 100
    },
    mirrorElement: [{
      element: ".control-header-area-width-number",
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
    element: ".control-header-area-width-number",
    path: "header.area.width",
    type: "number",
    valueModify: {
      min: 10,
      max: 100
    },
    mirrorElement: [{
      element: ".control-header-area-width-range",
      path: "header.area.width",
      type: "range"
    }],
    func: function() {
      header.render.area.width();
    }
  }, {
    element: ".control-header-area-width-default",
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
      mod.default("header.area.width");
      header.render.area.width();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-header-area-width-match",
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
      mod.default("header.area.width");
      header.render.area.width();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-header-area-alignment-left",
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
    element: ".control-header-area-alignment-center",
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
    element: ".control-header-area-alignment-right",
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
    element: ".control-header-item-alignment-left",
    path: "header.item.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-header-item-alignment-center",
    path: "header.item.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-header-item-alignment-right",
    path: "header.item.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-header-greeting-show",
    path: "header.greeting.show",
    type: "checkbox",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-greeting-type-good",
    path: "header.greeting.type",
    type: "radio",
    func: function() {
      greeting.render.clear();
      greeting.render.all();
    }
  }, {
    element: ".control-header-greeting-type-hello",
    path: "header.greeting.type",
    type: "radio",
    func: function() {
      greeting.render.clear();
      greeting.render.all();
    }
  }, {
    element: ".control-header-greeting-type-hi",
    path: "header.greeting.type",
    type: "radio",
    func: function() {
      greeting.render.clear();
      greeting.render.all();
    }
  }, {
    element: ".control-header-greeting-name",
    path: "header.greeting.name",
    type: "text",
    func: function() {
      greeting.render.clear();
      greeting.render.all();
    }
  }, {
    element: ".control-header-greeting-size-range",
    path: "header.greeting.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-header-greeting-size-number",
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
    element: ".control-header-greeting-size-number",
    path: "header.greeting.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-header-greeting-size-range",
      path: "header.greeting.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      header.render.greeting.size();
    }
  }, {
    element: ".control-header-greeting-size-default",
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
      mod.default("header.greeting.size");
      header.render.greeting.size();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-header-greeting-newline",
    path: "header.greeting.newLine",
    type: "checkbox",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-header-clock-hours-show",
    path: "header.clock.hours.show",
    type: "checkbox",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-clock-hours-display-number",
    path: "header.clock.hours.display",
    type: "radio",
    func: function() {
      clock.render.clear();
      clock.render.all();
    }
  }, {
    element: ".control-header-clock-hours-display-word",
    path: "header.clock.hours.display",
    type: "radio",
    func: function() {
      clock.render.clear();
      clock.render.all();
    }
  }, {
    element: ".control-header-clock-minutes-show",
    path: "header.clock.minutes.show",
    type: "checkbox",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-clock-minutes-display-number",
    path: "header.clock.minutes.display",
    type: "radio",
    func: function() {
      clock.render.clear();
      clock.render.all();
    }
  }, {
    element: ".control-header-clock-minutes-display-word",
    path: "header.clock.minutes.display",
    type: "radio",
    func: function() {
      clock.render.clear();
      clock.render.all();
    }
  }, {
    element: ".control-header-clock-seconds-show",
    path: "header.clock.seconds.show",
    type: "checkbox",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-clock-seconds-display-number",
    path: "header.clock.seconds.display",
    type: "radio",
    func: function() {
      clock.render.clear();
      clock.render.all();
    }
  }, {
    element: ".control-header-clock-seconds-display-word",
    path: "header.clock.seconds.display",
    type: "radio",
    func: function() {
      clock.render.clear();
      clock.render.all();
    }
  }, {
    element: ".control-header-clock-separator-show",
    path: "header.clock.separator.show",
    type: "checkbox",
    func: function() {
      clock.render.clear();
      clock.render.all();
    }
  }, {
    element: ".control-header-clock-hour24-show",
    path: "header.clock.hour24.show",
    type: "checkbox",
    func: function() {
      clock.render.clear();
      clock.render.all();
      render.dependents();
    }
  }, {
    element: ".control-header-clock-meridiem-show",
    path: "header.clock.meridiem.show",
    type: "checkbox",
    func: function() {
      clock.render.clear();
      clock.render.all();
      render.dependents();
    }
  }, {
    element: ".control-header-clock-size-range",
    path: "header.clock.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-header-clock-size-number",
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
    element: ".control-header-clock-size-number",
    path: "header.clock.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-header-clock-size-range",
      path: "header.clock.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      header.render.clock.size();
    }
  }, {
    element: ".control-header-clock-size-default",
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
      mod.default("header.clock.size");
      header.render.clock.size();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-header-clock-newline",
    path: "header.clock.newLine",
    type: "checkbox",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-header-transitional-show",
    path: "header.transitional.show",
    type: "checkbox",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-transitional-type-timeanddate",
    path: "header.transitional.type",
    type: "radio",
    func: function() {
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: ".control-header-transitional-type-its",
    path: "header.transitional.type",
    type: "radio",
    func: function() {
      transitional.render.clear();
      transitional.render.all();
    }
  }, {
    element: ".control-header-transitional-size-range",
    path: "header.transitional.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-header-transitional-size-number",
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
    element: ".control-header-transitional-size-number",
    path: "header.transitional.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-header-transitional-size-range",
      path: "header.transitional.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      header.render.transitional.size();
    }
  }, {
    element: ".control-header-transitional-size-default",
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
      mod.default("header.transitional.size");
      header.render.transitional.size();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-header-transitional-newline",
    path: "header.transitional.newLine",
    type: "checkbox",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-header-date-day-show",
    path: "header.date.day.show",
    type: "checkbox",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-date-day-display-number",
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
    element: ".control-header-date-day-week-start-monday",
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
    element: ".control-header-date-day-week-start-sunday",
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
    element: ".control-header-date-day-display-word",
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
    element: ".control-header-date-day-length-long",
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
    element: ".control-header-date-day-length-short",
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
    element: ".control-header-date-date-show",
    path: "header.date.date.show",
    type: "checkbox",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-date-date-display-number",
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
    element: ".control-header-date-date-display-word",
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
    element: ".control-header-date-date-ordinal",
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
    element: ".control-header-date-month-show",
    path: "header.date.month.show",
    type: "checkbox",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-date-month-display-number",
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
    element: ".control-header-date-month-ordinal",
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
    element: ".control-header-date-month-display-word",
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
    element: ".control-header-date-month-length-long",
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
    element: ".control-header-date-month-length-short",
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
    element: ".control-header-date-year-show",
    path: "header.date.year.show",
    type: "checkbox",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-date-year-display-number",
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
    element: ".control-header-date-year-display-word",
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
    element: ".control-header-date-separator-show",
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
    element: ".control-header-date-format-datemonth",
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
    element: ".control-header-date-format-monthdate",
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
    element: ".control-header-date-size-range",
    path: "header.date.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-header-date-size-number",
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
    element: ".control-header-date-size-number",
    path: "header.date.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-header-date-size-range",
      path: "header.date.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      header.render.date.size();
    }
  }, {
    element: ".control-header-date-size-default",
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
      mod.default("header.date.size");
      header.render.date.size();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-header-date-newline",
    path: "header.date.newLine",
    type: "checkbox",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-header-search-show",
    path: "header.search.show",
    type: "checkbox",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      header.render.search.width.size();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.class();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-search-width-by-auto",
    path: "header.search.width.by",
    type: "radio",
    func: function() {
      render.class();
      render.dependents();
      header.render.search.width.size();
    }
  }, {
    element: ".control-header-search-width-by-custom",
    path: "header.search.width.by",
    type: "radio",
    func: function() {
      render.class();
      render.dependents();
      header.render.search.width.size();
    }
  }, {
    element: ".control-header-search-width-size-range",
    path: "header.search.width.size",
    type: "range",
    valueModify: {
      min: 10,
      max: 100
    },
    mirrorElement: [{
      element: ".control-header-search-width-size-number",
      path: "header.search.width.size",
      type: "number",
    }],
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".search-wrapper"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".search-wrapper"),
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
            element: helper.e(".search-wrapper"),
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
      header.render.search.width.size();
    }
  }, {
    element: ".control-header-search-width-size-number",
    path: "header.search.width.size",
    type: "number",
    valueModify: {
      min: 10,
      max: 100
    },
    mirrorElement: [{
      element: ".control-header-search-width-size-range",
      path: "header.search.width.size",
      type: "range",
    }],
    func: function() {
      header.render.search.width.size();
    }
  }, {
    element: ".control-header-search-width-size-default",
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".search-wrapper"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.default("header.search.width.size");
      header.render.search.width.size();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-header-search-style-box",
    path: "header.search.style",
    type: "radio",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-search-style-clear",
    path: "header.search.style",
    type: "radio",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-search-focus",
    path: "header.search.focus",
    type: "checkbox"
  }, {
    element: ".control-header-search-engine-google",
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render.dependents();
      search.render.engine();
    }
  }, {
    element: ".control-header-search-engine-duckduckgo",
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render.dependents();
      search.render.engine();
    }
  }, {
    element: ".control-header-search-engine-youtube",
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render.dependents();
      search.render.engine();
    }
  }, {
    element: ".control-header-search-engine-giphy",
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render.dependents();
      search.render.engine();
    }
  }, {
    element: ".control-header-search-engine-bing",
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render.dependents();
      search.render.engine();
    }
  }, {
    element: ".control-header-search-engine-custom",
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render.dependents();
      search.render.engine();
    }
  }, {
    element: ".control-header-search-engine-custom-name",
    path: "header.search.engine.custom.name",
    type: "text",
    func: function() {
      search.render.engine();
    }
  }, {
    element: ".control-header-search-engine-custom-url",
    path: "header.search.engine.custom.url",
    type: "text",
    func: function() {
      search.render.engine();
    }
  }, {
    element: ".control-header-search-text-alignment-left",
    path: "header.search.text.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-header-search-text-alignment-center",
    path: "header.search.text.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-header-search-text-alignment-right",
    path: "header.search.text.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-header-search-size-range",
    path: "header.search.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-header-search-size-number",
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
    element: ".control-header-search-size-number",
    path: "header.search.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-header-search-size-range",
      path: "header.search.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      header.render.search.size();
    }
  }, {
    element: ".control-header-search-size-default",
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".search-wrapper"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.default("header.search.size");
      header.render.search.size();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-header-search-newline",
    path: "header.search.newLine",
    type: "checkbox",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-header-editadd-show",
    path: "header.editAdd.show",
    type: "checkbox",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
      render.dependents();
    }
  }, {
    element: ".control-header-editadd-style-box",
    path: "header.editAdd.style",
    type: "radio",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-editadd-style-clear",
    path: "header.editAdd.style",
    type: "radio",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-editadd-size-range",
    path: "header.editAdd.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-header-editadd-size-number",
      path: "header.editAdd.size",
      type: "number",
      valueConvert: ["float"]
    }],
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".header-editadd"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".header-editadd"),
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
            element: ".header-item-editadd",
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
      header.render.editadd.size();
    }
  }, {
    element: ".control-header-editadd-size-number",
    path: "header.editAdd.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-header-editadd-size-range",
      path: "header.editAdd.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      header.render.editadd.size();
    }
  }, {
    element: ".control-header-editadd-size-default",
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".header-editadd"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.default("header.editAdd.size");
      header.render.editadd.size();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-header-editadd-newline",
    path: "header.editAdd.newLine",
    type: "checkbox",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-header-coloraccent-show",
    path: "header.colorAccent.show",
    type: "checkbox",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-coloraccent-dot-show",
    path: "header.colorAccent.dot.show",
    type: "checkbox",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-coloraccent-style-box",
    path: "header.colorAccent.style",
    type: "radio",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-coloraccent-style-clear",
    path: "header.colorAccent.style",
    type: "radio",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-coloraccent-size-range",
    path: "header.colorAccent.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-header-coloraccent-size-number",
      path: "header.colorAccent.size",
      type: "number",
      valueConvert: ["float"]
    }],
    additionalEvents: [{
      event: "input",
      func: function() {
        edge.box.open({
          element: helper.e(".header-coloraccent"),
        });
      }
    }, {
      event: "mousedown",
      func: function() {
        edge.box.open({
          element: helper.e(".header-coloraccent"),
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
            element: ".header-item-coloraccent",
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
      header.render.coloraccent.size();
    }
  }, {
    element: ".control-header-coloraccent-size-number",
    path: "header.colorAccent.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-header-coloraccent-size-range",
      path: "header.colorAccent.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      header.render.coloraccent.size();
    }
  }, {
    element: ".control-header-coloraccent-size-default",
    type: "button",
    additionalEvents: [{
      event: "click",
      func: function() {
        edge.box.open({
          element: helper.e(".header-coloraccent"),
          delay: 500
        });
      }
    }],
    func: function() {
      mod.default("header.colorAccent.size");
      header.render.coloraccent.size();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-header-coloraccent-newline",
    path: "header.colorAccent.newLine",
    type: "checkbox",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-header-menu-style-box",
    path: "header.menu.style",
    type: "radio",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-menu-style-clear",
    path: "header.menu.style",
    type: "radio",
    func: function() {
      header.render.item.clear();
      header.render.item.all();
      greeting.render.clear();
      greeting.render.all();
      clock.render.clear();
      clock.render.all();
      transitional.render.clear();
      transitional.render.all();
      date.render.clear();
      date.render.all();
      render.dependents();
      render.update.control.header();
      bind.control.header();
      search.render.engine();
      search.bind.input();
      search.bind.clear();
      dropdown.bind.editAdd();
    }
  }, {
    element: ".control-header-menu-size-range",
    path: "header.menu.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-header-menu-size-number",
      path: "header.menu.size",
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
            element: ".control-menu-open",
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
      header.render.menu.size();
    }
  }, {
    element: ".control-header-menu-size-number",
    path: "header.menu.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-header-menu-size-range",
      path: "header.menu.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      header.render.menu.size();
    }
  }, {
    element: ".control-header-menu-size-default",
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
      mod.default("header.menu.size");
      header.render.menu.size();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-header-menu-newline",
    path: "header.menu.newLine",
    type: "checkbox",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-header-color-show",
    path: "header.color.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
      header.render.color.scrolling();
    }
  }, {
    element: ".control-header-color-style-always",
    path: "header.color.style",
    type: "radio",
    func: function() {
      render.class();
      header.render.color.scrolling();
    }
  }, {
    element: ".control-header-color-style-scroll",
    path: "header.color.style",
    type: "radio",
    func: function() {
      render.class();
      header.render.color.scrolling();
    }
  }, {
    element: ".control-header-color-by-theme",
    path: "header.color.by",
    type: "radio",
    func: function() {
      render.class();
      render.dependents();
    }
  }, {
    element: ".control-header-color-by-custom",
    path: "header.color.by",
    type: "radio",
    func: function() {
      render.class();
      render.dependents();
    }
  }, {
    element: ".control-header-color-rgb-range",
    path: "header.color.rgb",
    type: "color",
    mirrorElement: [{
      element: ".control-header-color-rgb-text",
      path: "header.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      header.render.color.custom();
    }
  }, {
    element: ".control-header-color-rgb-text",
    path: "header.color.rgb",
    type: "text",
    valueConvert: ["hexTextString"],
    mirrorElement: [{
      element: ".control-header-color-rgb-range",
      path: "header.color.rgb",
      type: "color"
    }],
    func: function() {
      header.render.color.custom();
    }
  }, {
    element: ".control-header-color-opacity-range",
    path: "header.color.opacity",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: ".control-header-color-opacity-number",
      path: "header.color.opacity",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      header.render.opacity();
    }
  }, {
    element: ".control-header-color-opacity-number",
    path: "header.color.opacity",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: ".control-header-color-opacity-range",
      path: "header.color.opacity",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      header.render.opacity();
    }
  }, {
    element: ".control-header-color-opacity-default",
    type: "button",
    func: function() {
      mod.default("header.color.opacity");
      header.render.opacity();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-header-radius",
    path: "header.radius",
    type: "checkbox",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-group-name-show",
    path: "group.name.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
    }
  }, {
    element: ".control-group-name-size-range",
    path: "group.name.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-group-name-size-number",
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
    element: ".control-group-name-size-number",
    path: "group.name.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-group-name-size-range",
      path: "group.name.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.group.size();
    }
  }, {
    element: ".control-group-name-size-default",
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
      mod.default("group.name.size");
      link.render.group.size();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-group-area-alignment-left",
    path: "group.area.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-group-area-alignment-center",
    path: "group.area.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-group-area-alignment-right",
    path: "group.area.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-group-order-headerbody",
    path: "group.order",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-group-order-bodyheader",
    path: "group.order",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-group-border-range",
    path: "group.border",
    type: "range",
    valueModify: {
      min: 0,
      max: 60
    },
    mirrorElement: [{
      element: ".control-group-border-number",
      path: "group.border",
      type: "number"
    }],
    func: function() {
      link.render.group.border();
      render.class();
    }
  }, {
    element: ".control-group-border-number",
    path: "group.border",
    type: "number",
    valueModify: {
      min: 0,
      max: 60
    },
    mirrorElement: [{
      element: ".control-group-border-range",
      path: "group.border",
      type: "range"
    }],
    func: function() {
      link.render.group.border();
      render.class();
    }
  }, {
    element: ".control-group-border-default",
    type: "button",
    func: function() {
      mod.default("group.border");
      link.render.group.border();
      render.class();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-header-border-top-range",
    path: "header.border.top",
    type: "range",
    valueModify: {
      min: 0,
      max: 60
    },
    mirrorElement: [{
      element: ".control-header-border-top-number",
      path: "header.border.top",
      type: "number"
    }],
    func: function() {
      header.render.border();
      render.class();
    }
  }, {
    element: ".control-header-border-top-number",
    path: "header.border.top",
    type: "number",
    valueModify: {
      min: 0,
      max: 60
    },
    mirrorElement: [{
      element: ".control-header-border-top-range",
      path: "header.border.top",
      type: "range"
    }],
    func: function() {
      header.render.border();
      render.class();
    }
  }, {
    element: ".control-header-border-top-default",
    type: "button",
    func: function() {
      mod.default("header.border.top");
      header.render.border();
      render.class();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-header-border-bottom-range",
    path: "header.border.bottom",
    type: "range",
    valueModify: {
      min: 0,
      max: 60
    },
    mirrorElement: [{
      element: ".control-header-border-bottom-number",
      path: "header.border.bottom",
      type: "number"
    }],
    func: function() {
      header.render.border();
      render.class();
    }
  }, {
    element: ".control-header-border-bottom-number",
    path: "header.border.bottom",
    type: "number",
    valueModify: {
      min: 0,
      max: 60
    },
    mirrorElement: [{
      element: ".control-header-border-bottom-range",
      path: "header.border.bottom",
      type: "range"
    }],
    func: function() {
      header.render.border();
      render.class();
    }
  }, {
    element: ".control-header-border-bottom-default",
    type: "button",
    func: function() {
      mod.default("header.border.bottom");
      header.render.border();
      render.class();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-header-position-sticky",
    path: "header.position",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-header-position-inline",
    path: "header.position",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-area-width-range",
    path: "link.area.width",
    type: "range",
    valueModify: {
      min: 10,
      max: 100
    },
    mirrorElement: [{
      element: ".control-link-area-width-number",
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
    element: ".control-link-area-width-number",
    path: "link.area.width",
    type: "number",
    valueModify: {
      min: 10,
      max: 100
    },
    mirrorElement: [{
      element: ".control-link-area-width-range",
      path: "link.area.width",
      type: "range"
    }],
    func: function() {
      link.render.area.width();
    }
  }, {
    element: ".control-link-area-width-default",
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
      mod.default("link.area.width");
      link.render.area.width();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-link-area-width-match",
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
      mod.default("link.area.width");
      link.render.area.width();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-link-area-alignment-left",
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
    element: ".control-link-area-alignment-center",
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
    element: ".control-link-area-alignment-right",
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
    element: ".control-link-item-size-range",
    path: "link.item.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 50,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-link-item-size-number",
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
    element: ".control-link-item-size-number",
    path: "link.item.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 50,
      max: 500,
      step: 10
    },
    mirrorElement: [{
      element: ".control-link-item-size-range",
      path: "link.item.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.size();
    }
  }, {
    element: ".control-link-show",
    path: "link.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
      search.render.engine();
    }
  }, {
    element: ".control-link-item-size-default",
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
      mod.default("link.item.size");
      link.render.item.size();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-link-item-display-alignment-topleft",
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-item-display-alignment-topcenter",
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-item-display-alignment-topright",
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-item-display-alignment-centerleft",
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-item-display-alignment-centercenter",
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-item-display-alignment-centerright",
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-item-display-alignment-bottomleft",
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-item-display-alignment-bottomcenter",
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-item-display-alignment-bottomright",
    path: "link.item.display.alignment",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-item-display-letcon-show",
    path: "link.item.display.letcon.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
    }
  }, {
    element: ".control-link-item-display-letcon-letter-size-range",
    path: "link.item.display.letcon.letter.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 3000,
      step: 10
    },
    mirrorElement: [{
      element: ".control-link-item-display-letcon-letter-size-number",
      path: "link.item.display.letcon.letter.size",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.display.letter();
    }
  }, {
    element: ".control-link-item-display-letcon-letter-size-number",
    path: "link.item.display.letcon.letter.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 3000,
      step: 10
    },
    mirrorElement: [{
      element: ".control-link-item-display-letcon-letter-size-range",
      path: "link.item.display.letcon.letter.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.display.letter();
    }
  }, {
    element: ".control-link-item-display-letcon-letter-size-default",
    type: "button",
    func: function() {
      mod.default("link.item.display.letcon.letter.size");
      link.render.item.display.letter();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-link-item-display-letcon-icon-size-range",
    path: "link.item.display.letcon.icon.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 3000,
      step: 10
    },
    mirrorElement: [{
      element: ".control-link-item-display-letcon-icon-size-number",
      path: "link.item.display.letcon.icon.size",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.display.icon();
    }
  }, {
    element: ".control-link-item-display-letcon-icon-size-number",
    path: "link.item.display.letcon.icon.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 3000,
      step: 10
    },
    mirrorElement: [{
      element: ".control-link-item-display-letcon-icon-size-range",
      path: "link.item.display.letcon.icon.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.display.icon();
    }
  }, {
    element: ".control-link-item-display-letcon-icon-size-default",
    type: "button",
    func: function() {
      mod.default("link.item.display.letcon.icon.size");
      link.render.item.display.icon();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-link-item-display-name-show",
    path: "link.item.display.name.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
    }
  }, {
    element: ".control-link-item-display-name-size-range",
    path: "link.item.display.name.size",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 3000,
      step: 10
    },
    mirrorElement: [{
      element: ".control-link-item-display-name-size-number",
      path: "link.item.display.name.size",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.name();
    }
  }, {
    element: ".control-link-item-display-name-size-number",
    path: "link.item.display.name.size",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 10,
      max: 3000,
      step: 10
    },
    mirrorElement: [{
      element: ".control-link-item-display-name-size-range",
      path: "link.item.display.name.size",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.name();
    }
  }, {
    element: ".control-link-item-display-name-size-default",
    type: "button",
    func: function() {
      mod.default("link.item.display.name.size");
      link.render.item.name();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-link-item-display-rotate-range",
    path: "link.item.display.rotate",
    type: "range",
    valueModify: {
      min: -180,
      max: 180
    },
    mirrorElement: [{
      element: ".control-link-item-display-rotate-number",
      path: "link.item.display.rotate",
      type: "number"
    }],
    func: function() {
      link.render.item.rotate();
    }
  }, {
    element: ".control-link-item-display-rotate-number",
    path: "link.item.display.rotate",
    type: "number",
    valueModify: {
      min: -180,
      max: 180
    },
    mirrorElement: [{
      element: ".control-link-item-display-rotate-range",
      path: "link.item.display.rotate",
      type: "range"
    }],
    func: function() {
      link.render.item.rotate();
    }
  }, {
    element: ".control-link-item-display-rotate-default",
    type: "button",
    func: function() {
      mod.default("link.item.display.rotate");
      link.render.item.rotate();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-link-item-display-translate-x-range",
    path: "link.item.display.translate.x",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: -1000,
      max: 1000,
      step: 10
    },
    mirrorElement: [{
      element: ".control-link-item-display-translate-x-number",
      path: "link.item.display.translate.x",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.translate.x();
    }
  }, {
    element: ".control-link-item-display-translate-x-number",
    path: "link.item.display.translate.x",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: -1000,
      max: 1000,
      step: 10
    },
    mirrorElement: [{
      element: ".control-link-item-display-translate-x-range",
      path: "link.item.display.translate.x",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.translate.x();
    }
  }, {
    element: ".control-link-item-display-translate-x-default",
    type: "button",
    func: function() {
      mod.default("link.item.display.translate.x");
      link.render.item.translate.x();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-link-item-display-translate-y-range",
    path: "link.item.display.translate.y",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: -1000,
      max: 1000,
      step: 10
    },
    mirrorElement: [{
      element: ".control-link-item-display-translate-y-number",
      path: "link.item.display.translate.y",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.translate.y();
    }
  }, {
    element: ".control-link-item-display-translate-y-number",
    path: "link.item.display.translate.y",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: -1000,
      max: 1000,
      step: 10
    },
    mirrorElement: [{
      element: ".control-link-item-display-translate-y-range",
      path: "link.item.display.translate.y",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      link.render.item.translate.y();
    }
  }, {
    element: ".control-link-item-display-translate-y-default",
    type: "button",
    func: function() {
      mod.default("link.item.display.translate.y");
      link.render.item.translate.y();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-link-item-display-gutter-range",
    path: "link.item.display.gutter",
    type: "range",
    valueModify: {
      min: 0,
      max: 40
    },
    mirrorElement: [{
      element: ".control-link-item-display-gutter-number",
      path: "link.item.display.gutter",
      type: "number"
    }],
    func: function() {
      link.render.item.gutter();
    }
  }, {
    element: ".control-link-item-display-gutter-number",
    path: "link.item.display.gutter",
    type: "number",
    valueModify: {
      min: 0,
      max: 40
    },
    mirrorElement: [{
      element: ".control-link-item-display-gutter-range",
      path: "link.item.display.gutter",
      type: "range"
    }],
    func: function() {
      link.render.item.gutter();
    }
  }, {
    element: ".control-link-item-display-gutter-default",
    type: "button",
    func: function() {
      mod.default("link.item.display.gutter");
      link.render.item.gutter();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-link-item-display-direction-horizontal",
    path: "link.item.display.direction",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-item-display-direction-vertical",
    path: "link.item.display.direction",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-item-display-order-letconname",
    path: "link.item.display.order",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-item-display-order-nameletcon",
    path: "link.item.display.order",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-item-url-show",
    path: "link.item.url.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
    }
  }, {
    element: ".control-link-item-line-show",
    path: "link.item.line.show",
    type: "checkbox",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-item-shadow-show",
    path: "link.item.shadow.show",
    type: "checkbox",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-item-hoverscale",
    path: "link.item.hoverScale.show",
    type: "checkbox",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-newtab",
    path: "link.newTab",
    type: "checkbox",
    func: function() {
      link.groupAndItems();
    }
  }, {
    element: ".control-link-item-color-by-theme",
    path: "link.item.color.by",
    type: "radio",
    func: function() {
      render.dependents();
      render.class();
    }
  }, {
    element: ".control-link-item-color-by-custom",
    path: "link.item.color.by",
    type: "radio",
    func: function() {
      render.dependents();
      render.class();
    }
  }, {
    element: ".control-link-item-color-rgb-range",
    path: "link.item.color.rgb",
    type: "color",
    mirrorElement: [{
      element: ".control-link-item-color-rgb-text",
      path: "link.item.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      link.render.item.color.custom();
    }
  }, {
    element: ".control-link-item-color-rgb-text",
    path: "link.item.color.rgb",
    type: "text",
    valueConvert: ["hexTextString"],
    mirrorElement: [{
      element: ".control-link-item-color-rgb-range",
      path: "link.item.color.rgb",
      type: "color"
    }],
    func: function() {
      link.render.item.color.custom();
    }
  }, {
    element: ".control-link-item-border-range",
    path: "link.item.border",
    type: "range",
    valueModify: {
      min: 0,
      max: 60
    },
    mirrorElement: [{
      element: ".control-link-item-border-number",
      path: "link.item.border",
      type: "number"
    }],
    func: function() {
      link.render.item.border();
      render.class();
    }
  }, {
    element: ".control-link-item-border-number",
    path: "link.item.border",
    type: "number",
    valueModify: {
      min: 0,
      max: 60
    },
    mirrorElement: [{
      element: ".control-link-item-border-range",
      path: "link.item.border",
      type: "range"
    }],
    func: function() {
      link.render.item.border();
      render.class();
    }
  }, {
    element: ".control-link-item-border-default",
    type: "button",
    func: function() {
      mod.default("link.item.border");
      render.class();
      link.render.item.border();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-link-style-block",
    path: "link.style",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-style-list",
    path: "link.style",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-orientation-top",
    path: "link.orientation",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-orientation-bottom",
    path: "link.orientation",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-link-sort-letter",
    type: "button",
    func: function() {
      bookmarks.sort("letter");
      link.groupAndItems();
    }
  }, {
    element: ".control-link-sort-icon",
    type: "button",
    func: function() {
      bookmarks.sort("icon");
      link.groupAndItems();
    }
  }, {
    element: ".control-link-sort-name",
    type: "button",
    func: function() {
      bookmarks.sort("name");
      link.groupAndItems();
    }
  }, {
    element: ".control-link-accent-clear",
    type: "button",
    func: function() {
      link.mod.accent.clear();
      link.groupAndItems();
    }
  }, {
    element: ".control-link-accent-set",
    type: "button",
    func: function() {
      link.mod.accent.rainbow();
      link.groupAndItems();
    }
  }, {
    element: ".control-theme-custom-add",
    type: "button",
    func: function() {
      menu.close();
      theme.custom.add();
    }
  }, {
    element: ".control-theme-custom-edit",
    path: "theme.custom.edit",
    type: "checkbox",
    func: function() {
      theme.render.custom.tabIndex();
      render.class();
    }
  }, {
    element: ".control-theme-style-dark",
    path: "theme.style",
    type: "radio",
    func: function() {
      theme.style.dark();
    }
  }, {
    element: ".control-theme-style-light",
    path: "theme.style",
    type: "radio",
    func: function() {
      theme.style.light();
    }
  }, {
    element: ".control-theme-font-display-name",
    path: "theme.font.display.name",
    type: "text",
    func: function() {
      theme.render.font.delay.display();
    }
  }, {
    element: ".control-theme-font-display-name-default",
    type: "button",
    func: function() {
      mod.default("theme.font.display.name");
      theme.render.font.display.name();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-theme-font-display-weight-range",
    path: "theme.font.display.weight",
    type: "range",
    valueModify: {
      min: 100,
      max: 900,
      step: 100
    },
    mirrorElement: [{
      element: ".control-theme-font-display-weight-number",
      path: "theme.font.display.weight",
      type: "number"
    }],
    func: function() {
      theme.render.font.display.weight();
    }
  }, {
    element: ".control-theme-font-display-weight-default",
    type: "button",
    func: function() {
      mod.default("theme.font.display.weight");
      theme.render.font.display.weight();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-theme-font-display-weight-number",
    path: "theme.font.display.weight",
    type: "number",
    valueModify: {
      min: 100,
      max: 900,
      step: 100
    },
    mirrorElement: [{
      element: ".control-theme-font-display-weight-range",
      path: "theme.font.display.weight",
      type: "range"
    }],
    func: function() {
      theme.render.font.display.weight();
    }
  }, {
    element: ".control-theme-font-display-light",
    type: "button",
    func: function() {
      theme.mod.font.display.light();
      theme.render.font.display.weight();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-theme-font-display-regular",
    type: "button",
    func: function() {
      theme.mod.font.display.regular();
      theme.render.font.display.weight();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-theme-font-display-bold",
    type: "button",
    func: function() {
      theme.mod.font.display.bold();
      theme.render.font.display.weight();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-theme-font-display-style-normal",
    path: "theme.font.display.style",
    type: "radio",
    func: function() {
      theme.render.font.display.style();
    }
  }, {
    element: ".control-theme-font-display-style-italic",
    path: "theme.font.display.style",
    type: "radio",
    func: function() {
      theme.render.font.display.style();
    }
  }, {
    element: ".control-theme-font-display-style-default",
    type: "button",
    func: function() {
      mod.default("theme.font.display.style");
      theme.render.font.display.style();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-theme-font-ui-name",
    path: "theme.font.ui.name",
    type: "text",
    func: function() {
      theme.render.font.delay.ui();
    }
  }, {
    element: ".control-theme-font-ui-name-default",
    type: "button",
    func: function() {
      mod.default("theme.font.ui.name");
      theme.render.font.ui.name();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-theme-font-ui-weight-range",
    path: "theme.font.ui.weight",
    type: "range",
    valueModify: {
      min: 100,
      max: 900,
      step: 100
    },
    mirrorElement: [{
      element: ".control-theme-font-ui-weight-number",
      path: "theme.font.ui.weight",
      type: "number"
    }],
    func: function() {
      theme.render.font.ui.weight();
    }
  }, {
    element: ".control-theme-font-ui-weight-default",
    type: "button",
    func: function() {
      mod.default("theme.font.ui.weight");
      theme.render.font.ui.weight();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-theme-font-ui-weight-number",
    path: "theme.font.ui.weight",
    type: "number",
    valueModify: {
      min: 100,
      max: 900,
      step: 100
    },
    mirrorElement: [{
      element: ".control-theme-font-ui-weight-range",
      path: "theme.font.ui.weight",
      type: "range"
    }],
    func: function() {
      theme.render.font.ui.weight();
    }
  }, {
    element: ".control-theme-font-ui-light",
    type: "button",
    func: function() {
      theme.mod.font.ui.light();
      theme.render.font.ui.weight();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-theme-font-ui-regular",
    type: "button",
    func: function() {
      theme.mod.font.ui.regular();
      theme.render.font.ui.weight();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-theme-font-ui-bold",
    type: "button",
    func: function() {
      theme.mod.font.ui.bold();
      theme.render.font.ui.weight();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-theme-font-ui-style-normal",
    path: "theme.font.ui.style",
    type: "radio",
    func: function() {
      theme.render.font.ui.style();
    }
  }, {
    element: ".control-theme-font-ui-style-italic",
    path: "theme.font.ui.style",
    type: "radio",
    func: function() {
      theme.render.font.ui.style();
    }
  }, {
    element: ".control-theme-font-ui-style-default",
    type: "button",
    func: function() {
      mod.default("theme.font.ui.style");
      theme.render.font.ui.style();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-theme-color-rgb-color",
    path: "theme.color.rgb",
    type: "color",
    mirrorElement: [{
      element: ".control-theme-color-rgb-color-quick",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-text",
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }, {
      element: ".control-theme-color-hsl-h-range",
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-h-number",
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-s-range",
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-s-number",
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-l-range",
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-l-number",
      path: "theme.color.hsl.l",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-r-range",
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-r-number",
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-g-range",
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-g-number",
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-b-range",
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-b-number",
      path: "theme.color.rgb.b",
      type: "number"
    }],
    func: function() {
      theme.mod.color.hsl();
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-color-rgb-text",
    path: "theme.color.rgb",
    type: "text",
    valueConvert: ["hexTextString"],
    mirrorElement: [{
      element: ".control-theme-color-rgb-color-quick",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-color",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-hsl-h-range",
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-h-number",
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-s-range",
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-s-number",
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-l-range",
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-l-number",
      path: "theme.color.hsl.l",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-r-range",
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-r-number",
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-g-range",
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-g-number",
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-b-range",
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-b-number",
      path: "theme.color.rgb.b",
      type: "number"
    }],
    func: function() {
      theme.mod.color.hsl();
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-color-rgb-default",
    type: "button",
    func: function() {
      mod.default("theme.color.rgb");
      theme.mod.color.hsl();
      theme.mod.color.generated();
      theme.render.color.shade();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-theme-color-hsl-h-range",
    path: "theme.color.hsl.h",
    type: "range",
    valueModify: {
      min: 0,
      max: 359
    },
    mirrorElement: [{
      element: ".control-theme-color-rgb-color-quick",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-color",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-text",
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }, {
      element: ".control-theme-color-hsl-h-number",
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-r-range",
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-r-number",
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-g-range",
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-g-number",
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-b-range",
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-b-number",
      path: "theme.color.rgb.b",
      type: "number"
    }],
    func: function() {
      theme.mod.color.rgb();
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-color-hsl-h-number",
    path: "theme.color.hsl.h",
    type: "number",
    valueModify: {
      min: 0,
      max: 359
    },
    mirrorElement: [{
      element: ".control-theme-color-rgb-color-quick",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-color",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-text",
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }, {
      element: ".control-theme-color-hsl-h-range",
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-r-range",
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-r-number",
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-g-range",
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-g-number",
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-b-range",
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-b-number",
      path: "theme.color.rgb.b",
      type: "number"
    }],
    func: function() {
      theme.mod.color.rgb();
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-color-hsl-s-range",
    path: "theme.color.hsl.s",
    type: "range",
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: ".control-theme-color-rgb-color-quick",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-color",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-text",
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }, {
      element: ".control-theme-color-hsl-s-number",
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-r-range",
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-r-number",
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-g-range",
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-g-number",
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-b-range",
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-b-number",
      path: "theme.color.rgb.b",
      type: "number"
    }],
    func: function() {
      theme.mod.color.rgb();
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-color-hsl-s-number",
    path: "theme.color.hsl.s",
    type: "number",
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: ".control-theme-color-rgb-color-quick",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-color",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-text",
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }, {
      element: ".control-theme-color-hsl-s-range",
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-r-range",
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-r-number",
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-g-range",
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-g-number",
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-b-range",
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-b-number",
      path: "theme.color.rgb.b",
      type: "number"
    }],
    func: function() {
      theme.mod.color.rgb();
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-color-hsl-l-range",
    path: "theme.color.hsl.l",
    type: "range",
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: ".control-theme-color-rgb-color-quick",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-color",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-text",
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }, {
      element: ".control-theme-color-hsl-l-number",
      path: "theme.color.hsl.l",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-r-range",
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-r-number",
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-g-range",
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-g-number",
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-b-range",
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-b-number",
      path: "theme.color.rgb.b",
      type: "number"
    }],
    func: function() {
      theme.mod.color.rgb();
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-color-hsl-l-number",
    path: "theme.color.hsl.l",
    type: "number",
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: ".control-theme-color-rgb-color-quick",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-color",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-text",
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }, {
      element: ".control-theme-color-hsl-l-range",
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-r-range",
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-r-number",
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-g-range",
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-g-number",
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: ".control-theme-color-rgb-b-range",
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: ".control-theme-color-rgb-b-number",
      path: "theme.color.rgb.b",
      type: "number"
    }],
    func: function() {
      theme.mod.color.rgb();
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-color-rgb-r-range",
    path: "theme.color.rgb.r",
    type: "range",
    valueModify: {
      min: 0,
      max: 255
    },
    mirrorElement: [{
      element: ".control-theme-color-rgb-color-quick",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-color",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-text",
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }, {
      element: ".control-theme-color-rgb-r-number",
      path: "theme.color.rgb.r",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-h-range",
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-h-number",
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-s-range",
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-s-number",
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-l-range",
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-l-number",
      path: "theme.color.hsl.l",
      type: "number"
    }],
    func: function() {
      theme.mod.color.hsl();
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-color-rgb-r-number",
    path: "theme.color.rgb.r",
    type: "number",
    valueModify: {
      min: 0,
      max: 255
    },
    mirrorElement: [{
      element: ".control-theme-color-rgb-color-quick",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-color",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-text",
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }, {
      element: ".control-theme-color-rgb-r-range",
      path: "theme.color.rgb.r",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-h-range",
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-h-number",
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-s-range",
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-s-number",
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-l-range",
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-l-number",
      path: "theme.color.hsl.l",
      type: "number"
    }],
    func: function() {
      theme.mod.color.hsl();
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-color-rgb-g-range",
    path: "theme.color.rgb.g",
    type: "range",
    valueModify: {
      min: 0,
      max: 255
    },
    mirrorElement: [{
      element: ".control-theme-color-rgb-color-quick",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-color",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-text",
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }, {
      element: ".control-theme-color-rgb-g-number",
      path: "theme.color.rgb.g",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-h-range",
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-h-number",
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-s-range",
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-s-number",
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-l-range",
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-l-number",
      path: "theme.color.hsl.l",
      type: "number"
    }],
    func: function() {
      theme.mod.color.hsl();
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-color-rgb-g-number",
    path: "theme.color.rgb.g",
    type: "number",
    valueModify: {
      min: 0,
      max: 255
    },
    mirrorElement: [{
      element: ".control-theme-color-rgb-color-quick",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-color",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-text",
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }, {
      element: ".control-theme-color-rgb-g-range",
      path: "theme.color.rgb.g",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-h-range",
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-h-number",
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-s-range",
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-s-number",
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-l-range",
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-l-number",
      path: "theme.color.hsl.l",
      type: "number"
    }],
    func: function() {
      theme.mod.color.hsl();
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-color-rgb-b-range",
    path: "theme.color.rgb.b",
    type: "range",
    valueModify: {
      min: 0,
      max: 255
    },
    mirrorElement: [{
      element: ".control-theme-color-rgb-color-quick",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-color",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-text",
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }, {
      element: ".control-theme-color-rgb-b-number",
      path: "theme.color.rgb.b",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-h-range",
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-h-number",
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-s-range",
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-s-number",
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-l-range",
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-l-number",
      path: "theme.color.hsl.l",
      type: "number"
    }],
    func: function() {
      theme.mod.color.hsl();
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-color-rgb-b-number",
    path: "theme.color.rgb.b",
    type: "number",
    valueModify: {
      min: 0,
      max: 255
    },
    mirrorElement: [{
      element: ".control-theme-color-rgb-color-quick",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-color",
      path: "theme.color.rgb",
      type: "color"
    }, {
      element: ".control-theme-color-rgb-text",
      path: "theme.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }, {
      element: ".control-theme-color-rgb-b-range",
      path: "theme.color.rgb.b",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-h-range",
      path: "theme.color.hsl.h",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-h-number",
      path: "theme.color.hsl.h",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-s-range",
      path: "theme.color.hsl.s",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-s-number",
      path: "theme.color.hsl.s",
      type: "number"
    }, {
      element: ".control-theme-color-hsl-l-range",
      path: "theme.color.hsl.l",
      type: "range"
    }, {
      element: ".control-theme-color-hsl-l-number",
      path: "theme.color.hsl.l",
      type: "number"
    }],
    func: function() {
      theme.mod.color.hsl();
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-color-contrast-light-range",
    path: "theme.color.contrast.light",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 100,
      max: 800,
      step: 10
    },
    mirrorElement: [{
      element: ".control-theme-color-contrast-light-number",
      path: "theme.color.contrast.light",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-color-contrast-light-number",
    path: "theme.color.contrast.light",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 100,
      max: 800,
      step: 10
    },
    mirrorElement: [{
      element: ".control-theme-color-contrast-light-range",
      path: "theme.color.contrast.light",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-color-contrast-light-default",
    type: "button",
    func: function() {
      mod.default("theme.color.contrast.light");
      theme.mod.color.generated();
      theme.render.color.shade();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-theme-color-contrast-dark-range",
    path: "theme.color.contrast.dark",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 100,
      max: 800,
      step: 10
    },
    mirrorElement: [{
      element: ".control-theme-color-contrast-dark-number",
      path: "theme.color.contrast.dark",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-color-contrast-dark-number",
    path: "theme.color.contrast.dark",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 100,
      max: 800,
      step: 10
    },
    mirrorElement: [{
      element: ".control-theme-color-contrast-dark-range",
      path: "theme.color.contrast.dark",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.mod.color.generated();
      theme.render.color.shade();
    }
  }, {
    element: ".control-theme-color-contrast-dark-default",
    type: "button",
    func: function() {
      mod.default("theme.color.contrast.dark");
      theme.mod.color.generated();
      theme.render.color.shade();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-theme-accent-rgb-color",
    path: "theme.accent.rgb",
    type: "color",
    mirrorElement: [{
      element: ".control-theme-accent-rgb-color-quick",
      path: "theme.accent.rgb",
      type: "color"
    }, {
      element: ".control-theme-accent-rgb-text",
      path: "theme.accent.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.render.accent.color();
      link.groupAndItems();
    }
  }, {
    element: ".control-theme-accent-rgb-text",
    path: "theme.accent.rgb",
    type: "text",
    valueConvert: ["hexTextString"],
    mirrorElement: [{
      element: ".control-theme-accent-rgb-color-quick",
      path: "theme.accent.rgb",
      type: "color"
    }, {
      element: ".control-theme-accent-rgb-color",
      path: "theme.accent.rgb",
      type: "color"
    }],
    func: function() {
      theme.render.accent.color();
      link.groupAndItems();
    }
  }, {
    element: ".control-theme-accent-rgb-default",
    type: "button",
    func: function() {
      mod.default("theme.accent.rgb");
      theme.render.accent.color();
      link.groupAndItems();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-theme-accent-random-active",
    path: "theme.accent.random.active",
    type: "checkbox",
    func: function() {
      render.dependents();
      theme.render.accent.color();
    }
  }, {
    element: ".control-theme-accent-random-style-any",
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-theme-accent-random-style-light",
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-theme-accent-random-style-dark",
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-theme-accent-random-style-pastel",
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-theme-accent-random-style-saturated",
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render.class();
    }
  }, {
    element: ".control-theme-accent-randomise",
    type: "button",
    mirrorElement: [{
      element: ".control-theme-accent-rgb-color-quick",
      path: "theme.accent.rgb",
      type: "color"
    }, {
      element: ".control-theme-accent-rgb-color",
      path: "theme.accent.rgb",
      type: "color"
    }, {
      element: ".control-theme-accent-rgb-text",
      path: "theme.accent.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      theme.accent.random();
      link.groupAndItems();
    }
  }, {
    element: ".control-theme-radius-range",
    path: "theme.radius",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 400,
      step: 5
    },
    mirrorElement: [{
      element: ".control-theme-radius-number",
      path: "theme.radius",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.render.radius();
      render.class();
    }
  }, {
    element: ".control-theme-radius-number",
    path: "theme.radius",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 400,
      step: 5
    },
    mirrorElement: [{
      element: ".control-theme-radius-range",
      path: "theme.radius",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.render.radius();
      render.class();
    }
  }, {
    element: ".control-theme-radius-default",
    type: "button",
    func: function() {
      mod.default("theme.radius");
      theme.render.radius();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-theme-shadow-range",
    path: "theme.shadow",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 300,
      step: 25
    },
    mirrorElement: [{
      element: ".control-theme-shadow-number",
      path: "theme.shadow",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.render.shadow();
    }
  }, {
    element: ".control-theme-shadow-number",
    path: "theme.shadow",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 300,
      step: 25
    },
    mirrorElement: [{
      element: ".control-theme-shadow-range",
      path: "theme.shadow",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.render.shadow();
    }
  }, {
    element: ".control-theme-shadow-default",
    type: "button",
    func: function() {
      mod.default("theme.shadow");
      theme.render.shadow();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-theme-shade-opacity-range",
    path: "theme.shade.opacity",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: ".control-theme-shade-opacity-number",
      path: "theme.shade.opacity",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.render.shade.opacity();
      render.class();
    }
  }, {
    element: ".control-theme-shade-opacity-number",
    path: "theme.shade.opacity",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: ".control-theme-shade-opacity-range",
      path: "theme.shade.opacity",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      theme.render.shade.opacity();
      render.class();
    }
  }, {
    element: ".control-theme-shade-opacity-default",
    type: "button",
    func: function() {
      mod.default("theme.shade.opacity");
      theme.render.shade.opacity();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-background-color-by-theme",
    path: "background.color.by",
    type: "radio",
    func: function() {
      render.dependents();
      render.class();
    }
  }, {
    element: ".control-background-color-by-custom",
    path: "background.color.by",
    type: "radio",
    func: function() {
      render.dependents();
      render.class();
    }
  }, {
    element: ".control-background-color-rgb-range",
    path: "background.color.rgb",
    type: "color",
    mirrorElement: [{
      element: ".control-background-color-rgb-text",
      path: "background.color.rgb",
      type: "text",
      valueConvert: ["hexTextString"]
    }],
    func: function() {
      background.render.color.custom();
    }
  }, {
    element: ".control-background-color-rgb-text",
    path: "background.color.rgb",
    type: "text",
    valueConvert: ["hexTextString"],
    mirrorElement: [{
      element: ".control-background-color-rgb-range",
      path: "background.color.rgb",
      type: "color"
    }],
    func: function() {
      background.render.color.custom();
    }
  }, {
    element: ".control-background-image-show",
    path: "background.image.show",
    type: "checkbox",
    func: function() {
      render.class();
      render.dependents();
      background.render.image();
    }
  }, {
    element: ".control-background-image-from-file",
    path: "background.image.from",
    type: "radio",
    func: function() {
      render.dependents();
      background.render.image();
    }
  }, {
    element: ".control-background-image-file",
    type: "file",
    func: function() {
      background.mod.import();
    }
  }, {
    element: ".control-background-image-file-clear",
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
    element: ".control-background-image-from-url",
    path: "background.image.from",
    type: "radio",
    func: function() {
      render.dependents();
      background.render.image();
    }
  }, {
    element: ".control-background-image-url",
    path: "background.image.url",
    type: "textarea",
    func: function() {
      background.render.image();
    }
  }, {
    element: ".control-background-image-opacity-range",
    path: "background.image.opacity",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: ".control-background-image-opacity-number",
      path: "background.image.opacity",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      background.render.opacity();
    }
  }, {
    element: ".control-background-image-opacity-number",
    path: "background.image.opacity",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: ".control-background-image-opacity-range",
      path: "background.image.opacity",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      background.render.opacity();
    }
  }, {
    element: ".control-background-image-opacity-default",
    type: "button",
    func: function() {
      mod.default("background.image.opacity");
      background.render.opacity();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-background-image-grayscale-range",
    path: "background.image.grayscale",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: ".control-background-image-grayscale-number",
      path: "background.image.grayscale",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      background.render.grayscale();
    }
  }, {
    element: ".control-background-image-grayscale-number",
    path: "background.image.grayscale",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: ".control-background-image-grayscale-range",
      path: "background.image.grayscale",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      background.render.grayscale();
    }
  }, {
    element: ".control-background-image-grayscale-default",
    type: "button",
    func: function() {
      mod.default("background.image.grayscale");
      background.render.grayscale();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-background-image-blur-range",
    path: "background.image.blur",
    type: "range",
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: ".control-background-image-blur-number",
      path: "background.image.blur",
      type: "number"
    }],
    func: function() {
      background.render.blur();
    }
  }, {
    element: ".control-background-image-blur-number",
    path: "background.image.blur",
    type: "number",
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: ".control-background-image-blur-range",
      path: "background.image.blur",
      type: "range"
    }],
    func: function() {
      background.render.blur();
    }
  }, {
    element: ".control-background-image-blur-default",
    type: "button",
    func: function() {
      mod.default("background.image.blur");
      background.render.blur();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-background-image-accent-range",
    path: "background.image.accent",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: ".control-background-image-accent-number",
      path: "background.image.accent",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      background.render.accent();
    }
  }, {
    element: ".control-background-image-accent-number",
    path: "background.image.accent",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 0,
      max: 100
    },
    mirrorElement: [{
      element: ".control-background-image-accent-range",
      path: "background.image.accent",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      background.render.accent();
    }
  }, {
    element: ".control-background-image-accent-default",
    type: "button",
    func: function() {
      mod.default("background.image.accent");
      background.render.accent();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-background-image-scale-range",
    path: "background.image.scale",
    type: "range",
    valueConvert: ["float"],
    valueModify: {
      min: 100,
      max: 1000
    },
    mirrorElement: [{
      element: ".control-background-image-scale-number",
      path: "background.image.scale",
      type: "number",
      valueConvert: ["float"]
    }],
    func: function() {
      background.render.scale();
    }
  }, {
    element: ".control-background-image-scale-number",
    path: "background.image.scale",
    type: "number",
    valueConvert: ["float"],
    valueModify: {
      min: 100,
      max: 1000
    },
    mirrorElement: [{
      element: ".control-background-image-scale-range",
      path: "background.image.scale",
      type: "range",
      valueConvert: ["float"]
    }],
    func: function() {
      background.render.scale();
    }
  }, {
    element: ".control-background-image-scale-default",
    type: "button",
    func: function() {
      mod.default("background.image.scale");
      background.render.scale();
      render.update.control.header();
      render.update.control.menu();
    }
  }, {
    element: ".control-data-import",
    type: "file",
    func: function() {
      data.mod.import();
    }
  }, {
    element: ".control-data-export",
    type: "a",
    func: function() {
      data.mod.export();
    }
  }, {
    element: ".control-data-clear",
    type: "a",
    func: function() {
      menu.close();
      data.render.clear();
    }
  }];

  mod.default = function(path) {
    helper.setObject({
      object: state.get.current(),
      path: path,
      newValue: helper.getObject({
        object: state.get.default(),
        path: path
      })
    });
  };

  var bind = {};

  bind.control = {
    supportedElement: ["checkbox", "radio", "text", "number", "range", "color", "textarea"],
    timer: {
      inputUpdate: null
    },
    value: {
      set: function(object) {
        if (object.path) {
          var newValue = bind.control.value.get[object.type](object);
          if (object.valueModify) {
            for (var key in object.valueModify) {
              newValue = bind.control.value.modify[key](newValue, object);
            };
          };
          if (object.valueConvert) {
            object.valueConvert.forEach(function(arrayItem, index) {
              newValue = bind.control.value.convert[arrayItem](newValue, object);
            });
          };
          helper.setObject({
            object: state.get.current(),
            path: object.path,
            newValue: newValue
          });
          console.log("state set", object.path, helper.getObject({
            object: state.get.current(),
            path: object.path
          }));
        };
      },
      get: {
        checkbox: function(object) {
          return helper.e(object.element).checked;
        },
        radio: function(object) {
          return helper.e(object.element).value;
        },
        text: function(object) {
          return helper.e(object.element).value;
        },
        textarea: function(object) {
          return helper.e(object.element).value;
        },
        number: function(object) {
          return parseInt(helper.e(object.element).value, 10);
        },
        range: function(object) {
          return parseInt(helper.e(object.element).value, 10);
        },
        color: function(object) {
          return helper.convertColor.hex.rgb(helper.e(object.element).value);
        }
      },
      convert: {
        reverse: function(value, object) {
          return parseInt(object.valueModify.max, 10) - value;
        },
        float: function(value, object) {
          return value / 100;
        },
        hexTextString: function(value, object) {
          return helper.convertColor.hex.rgb(value);
        }
      },
      modify: {
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
      }
    },
    eventType: {
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
    },
    action: function(object) {
      if (object.element) {
        helper.e(object.element).addEventListener(bind.control.eventType[object.type], function(event) {
          if (bind.control.supportedElement.includes(object.type)) {
            bind.control.value.set(object);
          };
          if (object.func) {
            object.func();
          };
          data.save();
        }, false);
      };
      if (object.additionalEvents) {
        object.additionalEvents.forEach(function(arrayItem, index) {
          helper.e(object.element).addEventListener(arrayItem.event, function(event) {
            arrayItem.func(event);
            data.save();
          }, false);
        });
      };
      if (object.mirrorElement) {
        object.mirrorElement.forEach(function(arrayItem, index) {
          helper.e(object.element).addEventListener(bind.control.eventType[object.type], function(event) {
            render.update.control.menu(arrayItem);
          }, false);
        });
      };
      if (object.valueModify) {
        object.mirrorElement.forEach(function(arrayItem, index) {
          helper.e(object.element).addEventListener(bind.control.eventType[object.type], function(event) {
            var _update = function() {
              render.update.control.menu(object);
            };
            clearTimeout(bind.control.timer.inputUpdate);
            bind.control.timer.inputUpdate = setTimeout(_update, 1000);
          }, false);
        });
      };
    },
    header: function(object) {
      if (object) {
        if (helper.e(object.element)) {
          bind.control.action(object);
        };
      } else {
        mod.header.forEach(function(arrayItem, index) {
          if (helper.e(arrayItem.element)) {
            bind.control.action(arrayItem);
          };
        });
      };
    },
    menu: function(object) {
      if (object) {
        if (helper.e(object.element)) {
          bind.control.action(object);
        };
      } else {
        mod.menu.forEach(function(arrayItem, index) {
          if (helper.e(arrayItem.element)) {
            bind.control.action(arrayItem);
          };
        });
      };
    }
  };

  var render = {};

  render.class = function() {
    var html = helper.e("html");
    var all = {
      edit: [{
        remove: [
          "is-edit"
        ],
        condition: function() {
          return state.get.current().edit;
        },
        name: "is-edit"
      }],
      layout: [{
        remove: [
          "is-layout-scrollpastend"
        ],
        condition: function() {
          return state.get.current().layout.scrollPastEnd;
        },
        name: "is-layout-scrollpastend"
      }, {
        remove: [
          "is-layout-alignment-topleft",
          "is-layout-alignment-topcenter",
          "is-layout-alignment-topright",
          "is-layout-alignment-centerleft",
          "is-layout-alignment-centercenter",
          "is-layout-alignment-centerright",
          "is-layout-alignment-bottomleft",
          "is-layout-alignment-bottomcenter",
          "is-layout-alignment-bottomright"
        ],
        name: "is-layout-alignment-" + state.get.current().layout.alignment
      }, {
        remove: [
          "is-layout-order-headerlink",
          "is-layout-order-linkheader"
        ],
        name: "is-layout-order-" + state.get.current().layout.order
      }, {
        remove: [
          "is-layout-scrollbars-auto",
          "is-layout-scrollbars-thin",
          "is-layout-scrollbars-none"
        ],
        name: "is-layout-scrollbars-" + state.get.current().layout.scrollbars
      }],
      header: {
        area: [{
          remove: [
            "is-header-area-alignment-left",
            "is-header-area-alignment-center",
            "is-header-area-alignment-right"
          ],
          name: "is-header-area-alignment-" + state.get.current().header.area.alignment
        }],
        item: [{
          remove: [
            "is-header-item-alignment-left",
            "is-header-item-alignment-center",
            "is-header-item-alignment-right"
          ],
          name: "is-header-item-alignment-" + state.get.current().header.item.alignment
        }],
        greeting: [{
          remove: [
            "is-header-item-newline-greeting"
          ],
          condition: function() {
            return state.get.current().header.greeting.newLine;
          },
          name: "is-header-item-newline-greeting"
        }],
        clock: [{
          remove: [
            "is-header-item-newline-clock"
          ],
          condition: function() {
            return state.get.current().header.clock.newLine;
          },
          name: "is-header-item-newline-clock"
        }],
        transitional: [{
          remove: [
            "is-header-item-newline-transitional"
          ],
          condition: function() {
            return state.get.current().header.transitional.newLine;
          },
          name: "is-header-item-newline-transitional"
        }],
        date: [{
          remove: [
            "is-header-item-newline-date"
          ],
          condition: function() {
            return state.get.current().header.date.newLine;
          },
          name: "is-header-item-newline-date"
        }],
        search: [{
          remove: [
            "is-header-search-text-alignment-left",
            "is-header-search-text-alignment-center",
            "is-header-search-text-alignment-right"
          ],
          condition: function() {
            return state.get.current().header.search.show;
          },
          name: "is-header-search-text-alignment-" + state.get.current().header.search.text.alignment
        }, {
          remove: [
            "is-header-search-width-by-custom",
            "is-header-search-width-by-auto"
          ],
          condition: function() {
            return state.get.current().header.search.show;
          },
          name: "is-header-search-width-by-" + state.get.current().header.search.width.by
        }, {
          condition: function() {
            return state.get.current().header.search.show;
          },
          name: "is-header-search-text-alignment-" + state.get.current().header.search.text.alignment
        }, {
          remove: [
            "is-header-item-newline-search"
          ],
          condition: function() {
            return state.get.current().header.search.newLine;
          },
          name: "is-header-item-newline-search"
        }],
        editadd: [{
          remove: [
            "is-header-item-newline-editadd"
          ],
          condition: function() {
            return state.get.current().header.editAdd.newLine;
          },
          name: "is-header-item-newline-editadd"
        }],
        coloraccent: [{
          remove: [
            "is-header-item-newline-coloraccent"
          ],
          condition: function() {
            return state.get.current().header.colorAccent.newLine;
          },
          name: "is-header-item-newline-coloraccent"
        }],
        menu: [{
          remove: [
            "is-header-item-newline-menu"
          ],
          condition: function() {
            return state.get.current().header.menu.newLine;
          },
          name: "is-header-item-newline-menu"
        }],
        color: [{
          remove: [
            "is-header-color-show"
          ],
          condition: function() {
            return state.get.current().header.color.show;
          },
          name: "is-header-color-show"
        }, {
          remove: [
            "is-header-color-style-scroll",
            "is-header-color-style-always"
          ],
          condition: function() {
            return state.get.current().header.color.show;
          },
          name: "is-header-color-style-" + state.get.current().header.color.style
        }, {
          remove: [
            "is-header-color-by-theme",
            "is-header-color-by-custom"
          ],
          condition: function() {
            return state.get.current().header.color.show;
          },
          name: "is-header-color-by-" + state.get.current().header.color.by
        }],
        radius: [{
          remove: [
            "is-header-radius"
          ],
          condition: function() {
            return (state.get.current().header.radius > 0);
          },
          name: "is-header-radius"
        }],
        border: [{
          remove: [
            "is-header-border-top"
          ],
          condition: function() {
            return (state.get.current().header.border.top > 0);
          },
          name: "is-header-border-top"
        }, {
          remove: [
            "is-header-border-bottom"
          ],
          condition: function() {
            return (state.get.current().header.border.bottom > 0);
          },
          name: "is-header-border-bottom"
        }],
        position: [{
          remove: [
            "is-header-position-sticky",
            "is-header-position-inline"
          ],
          name: "is-header-position-" + state.get.current().header.position
        }]
      },
      group: {
        area: [{
          remove: [
            "is-group-area-alignment-left",
            "is-group-area-alignment-center",
            "is-group-area-alignment-right"
          ],
          name: "is-group-area-alignment-" + state.get.current().group.area.alignment
        }],
        name: [{
          remove: [
            "is-group-name-show"
          ],
          condition: function() {
            return state.get.current().group.name.show;
          },
          name: "is-group-name-show"
        }],
        order: [{
          remove: [
            "is-group-order-headerbody",
            "is-group-order-bodyheader"
          ],
          name: "is-group-order-" + state.get.current().group.order
        }],
        border: [{
          remove: [
            "is-group-border"
          ],
          condition: function() {
            return (state.get.current().group.border > 0);
          },
          name: "is-group-border"
        }]
      },
      link: [{
        remove: [
          "is-link-show"
        ],
        condition: function() {
          return state.get.current().link.show;
        },
        name: "is-link-show"
      }, {
        remove: [
          "is-link-area-alignment-left",
          "is-link-area-alignment-center",
          "is-link-area-alignment-right"
        ],
        condition: function() {
          return state.get.current().link.show;
        },
        name: "is-link-area-alignment-" + state.get.current().link.area.alignment
      }, {
        remove: [
          "is-link-display-alignment-topleft",
          "is-link-display-alignment-topcenter",
          "is-link-display-alignment-topright",
          "is-link-display-alignment-centerleft",
          "is-link-display-alignment-centercenter",
          "is-link-display-alignment-centerright",
          "is-link-display-alignment-bottomleft",
          "is-link-display-alignment-bottomcenter",
          "is-link-display-alignment-bottomright"
        ],
        condition: function() {
          return state.get.current().link.show;
        },
        name: "is-link-display-alignment-" + state.get.current().link.item.display.alignment
      }, {
        remove: [
          "is-link-item-color-by-theme",
          "is-link-item-color-by-custom"
        ],
        condition: function() {
          return state.get.current().link.show;
        },
        name: "is-link-item-color-by-" + state.get.current().link.item.color.by
      }, {
        remove: [
          "is-link-item-display-direction-horizontal",
          "is-link-item-display-direction-vertical"
        ],
        condition: function() {
          return state.get.current().link.show;
        },
        name: "is-link-item-display-direction-" + state.get.current().link.item.display.direction
      }, {
        remove: [
          "is-link-item-display-order-letconname",
          "is-link-item-display-order-nameletcon"
        ],
        condition: function() {
          return state.get.current().link.show;
        },
        name: "is-link-item-display-order-" + state.get.current().link.item.display.order
      }, {
        remove: [
          "is-link-item-display-name-show"
        ],
        condition: function() {
          return (state.get.current().link.show && state.get.current().link.item.display.name.show);
        },
        name: "is-link-item-display-name-show"
      }, {
        remove: [
          "is-link-item-display-letcon-show"
        ],
        condition: function() {
          return (state.get.current().link.show && state.get.current().link.item.display.letcon.show);
        },
        name: "is-link-item-display-letcon-show"
      }, {
        remove: [
          "is-link-style-list",
          "is-link-style-block"
        ],
        condition: function() {
          return (state.get.current().link.show && state.get.current().link.show);
        },
        name: "is-link-style-" + state.get.current().link.style
      }, {
        remove: [
          "is-link-orientation-top",
          "is-link-orientation-bottom"
        ],
        condition: function() {
          return (state.get.current().link.show && state.get.current().link.show);
        },
        name: "is-link-orientation-" + state.get.current().link.orientation
      }, {
        remove: [
          "is-link-item-url-show"
        ],
        condition: function() {
          return (state.get.current().link.show && state.get.current().link.item.url.show);
        },
        name: "is-link-item-url-show"
      }, {
        remove: [
          "is-link-item-line-show"
        ],
        condition: function() {
          return (state.get.current().link.show && state.get.current().link.item.line.show);
        },
        name: "is-link-item-line-show"
      }, {
        remove: [
          "is-link-item-shadow-show"
        ],
        condition: function() {
          return (state.get.current().link.show && state.get.current().link.item.shadow.show);
        },
        name: "is-link-item-shadow-show"
      }, {
        remove: [
          "is-link-item-hoverscale-show"
        ],
        condition: function() {
          return (state.get.current().link.show && state.get.current().link.item.hoverScale.show);
        },
        name: "is-link-item-hoverscale-show"
      }, {
        remove: [
          "is-link-item-border"
        ],
        condition: function() {
          return (state.get.current().link.show && (state.get.current().link.item.border > 0));
        },
        name: "is-link-item-border"
      }],
      theme: [{
        remove: [
          "is-theme-style-dark",
          "is-theme-style-light",
        ],
        name: "is-theme-style-" + state.get.current().theme.style
      }, {
        remove: [
          "is-theme-custom-edit"
        ],
        condition: function() {
          return state.get.current().theme.custom.edit;
        },
        name: "is-theme-custom-edit"
      }, {
        remove: [
          "is-theme-radius"
        ],
        condition: function() {
          return (state.get.current().theme.radius > 0);
        },
        name: "is-theme-radius"
      }],
      background: [{
        remove: [
          "is-background-image-show"
        ],
        condition: function() {
          return state.get.current().background.image.show;
        },
        name: "is-background-image-show"
      }, {
        remove: [
          "is-background-color-by-theme",
          "is-background-color-by-custom"
        ],
        name: "is-background-color-by-" + state.get.current().background.color.by
      }]
    };

    var classCheck = function(array, debug) {
      array.forEach(function(arrayItem, index) {
        if ("remove" in arrayItem) {
          arrayItem.remove.forEach(function(arrayItem, index) {
            helper.removeClass(html, arrayItem);
          });
        };
        if ("condition" in arrayItem) {
          if (arrayItem.condition()) {
            helper.addClass(html, arrayItem.name);
          };
        } else {
          helper.addClass(html, arrayItem.name);
        };
      });
    };

    classCheck(all.edit, true);
    classCheck(all.layout);
    classCheck(all.header.area);
    classCheck(all.header.item);
    classCheck(all.header.greeting);
    classCheck(all.header.clock);
    classCheck(all.header.transitional);
    classCheck(all.header.date);
    classCheck(all.header.search);
    classCheck(all.header.editadd);
    classCheck(all.header.coloraccent);
    classCheck(all.header.menu);
    classCheck(all.header.color);
    classCheck(all.header.radius);
    classCheck(all.header.border);
    classCheck(all.header.position);
    classCheck(all.group.area);
    classCheck(all.group.name);
    classCheck(all.group.order);
    classCheck(all.group.border);
    classCheck(all.link);
    classCheck(all.theme);
    classCheck(all.background);
  };

  render.dependents = function() {
    var type = {
      control: ["input", "button", "textarea"],
      element: ["label", "p", "div"]
    };
    var disable = {
      control: function(control, state) {
        if (control) {
          if (state) {
            control.disabled = false;
          } else {
            control.disabled = true;
          };
        };
      },
      element: function(element, state) {
        if (element) {
          if (state) {
            helper.removeClass(element, "disabled");
          } else {
            helper.addClass(element, "disabled");
          };
        };
      }
    };
    var all = {
      edit: [{
        condition: function() {
          return (bookmarks.get().length > 0);
        },
        dependents: function() {
          return [
            "control-edit"
          ]
        }
      }],
      header: {
        greeting: [{
          condition: function() {
            return state.get.current().header.greeting.show;
          },
          dependents: function() {
            return [
              "[for=control-header-greeting-name]",
              ".control-header-greeting-name",
              ".control-header-greeting-type-good",
              ".control-header-greeting-type-hello",
              ".control-header-greeting-type-hi",
              "[for=control-header-greeting-size-range]",
              ".control-header-greeting-size-range",
              ".control-header-greeting-size-number",
              ".control-header-greeting-size-default",
              ".control-header-greeting-newline",
              ".control-header-greeting-newline-helper"
            ]
          }
        }],
        clock: [{
          condition: function() {
            var activeCount = 0;
            var toCheck = [state.get.current().header.clock.seconds.show, state.get.current().header.clock.minutes.show, state.get.current().header.clock.hours.show];
            toCheck.forEach(function(arrayItem, index) {
              if (arrayItem == true) {
                activeCount++;
              };
            });
            return (activeCount >= 2 && (state.get.current().header.clock.seconds.show || state.get.current().header.clock.minutes.show || state.get.current().header.clock.hours.show));
          },
          dependents: function() {
            return [
              ".control-header-clock-separator-show"
            ];
          }
        }, {
          condition: function() {
            return (state.get.current().header.clock.seconds.show || state.get.current().header.clock.minutes.show || state.get.current().header.clock.hours.show);
          },
          dependents: function() {
            return [
              ".control-header-clock-hour24-show",
              ".control-header-clock-meridiem-show"
            ];
          }
        }, {
          condition: function() {
            return ((state.get.current().header.clock.seconds.show || state.get.current().header.clock.minutes.show || state.get.current().header.clock.hours.show) && !state.get.current().header.clock.hour24.show);
          },
          dependents: function() {
            return [
              ".control-header-clock-meridiem-show"
            ];
          }
        }, {
          condition: function() {
            return state.get.current().header.clock.hours.show;
          },
          dependents: function() {
            return [
              ".control-header-clock-hours-display-number",
              ".control-header-clock-hours-display-word"
            ];
          }
        }, {
          condition: function() {
            return state.get.current().header.clock.minutes.show;
          },
          dependents: function() {
            return [
              ".control-header-clock-minutes-display-number",
              ".control-header-clock-minutes-display-word"
            ];
          }
        }, {
          condition: function() {
            return state.get.current().header.clock.seconds.show;
          },
          dependents: function() {
            return [
              ".control-header-clock-seconds-display-number",
              ".control-header-clock-seconds-display-word"
            ];
          }
        }, {
          condition: function() {
            return (state.get.current().header.clock.seconds.show || state.get.current().header.clock.minutes.show || state.get.current().header.clock.hours.show);
          },
          dependents: function() {
            return [
              "[for=control-header-clock-size-range]",
              ".control-header-clock-size-range",
              ".control-header-clock-size-number",
              ".control-header-clock-size-default",
              ".control-header-clock-newline",
              ".control-header-clock-newline-helper"
            ];
          }
        }],
        transitional: [{
          condition: function() {
            return (state.get.current().header.date.date.show || state.get.current().header.date.day.show || state.get.current().header.date.month.show || state.get.current().header.date.year.show || state.get.current().header.clock.seconds.show || state.get.current().header.clock.minutes.show || state.get.current().header.clock.hours.show);
          },
          dependents: function() {
            return [
              ".control-header-transitional-show",
              ".control-header-transitional-show-helper"
            ];
          }
        }, {
          condition: function() {
            return (state.get.current().header.transitional.show && ((state.get.current().header.date.date.show || state.get.current().header.date.day.show || state.get.current().header.date.month.show || state.get.current().header.date.year.show || state.get.current().header.clock.seconds.show || state.get.current().header.clock.minutes.show || state.get.current().header.clock.hours.show)));
          },
          dependents: function() {
            return [
              ".control-header-transitional-type-timeanddate",
              ".control-header-transitional-type-its",
              "[for=control-header-transitional-size-range]",
              ".control-header-transitional-size-range",
              ".control-header-transitional-size-number",
              ".control-header-transitional-size-default",
              '.control-header-transitional-newline',
              '.control-header-transitional-newline-helper'
            ];
          }
        }],
        date: [{
          condition: function() {
            var activeCount = 0;
            var toCheck = [state.get.current().header.date.day.show, state.get.current().header.date.date.show, state.get.current().header.date.month.show, state.get.current().header.date.year.show];
            toCheck.forEach(function(arrayItem, index) {
              if (arrayItem == true) {
                activeCount++;
              };
            });
            return (activeCount >= 2 && (state.get.current().header.date.day.show || state.get.current().header.date.date.show || state.get.current().header.date.month.show || state.get.current().header.date.year.show));
          },
          dependents: function() {
            return [
              ".control-header-date-separator-show"
            ];
          }
        }, {
          condition: function() {
            return (state.get.current().header.date.date.show && state.get.current().header.date.month.show);
          },
          dependents: function() {
            return [
              ".control-header-date-format-label",
              ".control-header-date-format-datemonth",
              ".control-header-date-format-monthdate"
            ];
          }
        }, {
          condition: function() {
            return state.get.current().header.date.day.show;
          },
          dependents: function() {
            return [
              ".control-header-date-day-display-number",
              ".control-header-date-day-display-word"
            ];
          }
        }, {
          condition: function() {
            return state.get.current().header.date.date.show;
          },
          dependents: function() {
            return [
              ".control-header-date-date-display-number",
              ".control-header-date-date-display-word",
              ".control-header-date-date-ordinal",
              ".control-header-date-date-ordinal-helper"
            ];
          }
        }, {
          condition: function() {
            return state.get.current().header.date.month.show;
          },
          dependents: function() {
            return [
              ".control-header-date-month-display-number",
              ".control-header-date-month-display-word"
            ];
          }
        }, {
          condition: function() {
            return state.get.current().header.date.year.show;
          },
          dependents: function() {
            return [".control-header-date-year-display-number",
              ".control-header-date-year-display-word"
            ];
          }
        }, {
          condition: function() {
            return (state.get.current().header.date.day.show && state.get.current().header.date.day.display == "number");
          },
          dependents: function() {
            return [
              ".control-header-date-day-week-start-label",
              ".control-header-date-day-week-start-monday",
              ".control-header-date-day-week-start-sunday",
              ".control-header-date-day-week-start-helper"
            ];
          }
        }, {
          condition: function() {
            return (state.get.current().header.date.day.show && state.get.current().header.date.day.display == "word");
          },
          dependents: function() {
            return [
              ".control-header-date-day-length-label",
              ".control-header-date-day-length-long",
              ".control-header-date-day-length-short"
            ];
          }
        }, {
          condition: function() {
            return (state.get.current().header.date.month.show && state.get.current().header.date.month.display == "word");
          },
          dependents: function() {
            return [
              ".control-header-date-month-length-label",
              ".control-header-date-month-length-long",
              ".control-header-date-month-length-short"
            ];
          }
        }, {
          condition: function() {
            return (state.get.current().header.date.month.show && state.get.current().header.date.month.display == "number");
          },
          dependents: function() {
            return [
              ".control-header-date-month-ordinal",
              ".control-header-date-month-ordinal-helper"
            ];
          }
        }, {
          condition: function() {
            return (state.get.current().header.date.day.show || state.get.current().header.date.date.show || state.get.current().header.date.month.show || state.get.current().header.date.year.show);
          },
          dependents: function() {
            return [
              "[for=control-header-date-size-range]",
              ".control-header-date-size-range",
              ".control-header-date-size-number",
              ".control-header-date-size-default",
              ".control-header-date-newline",
              ".control-header-date-newline-helper"
            ];
          }
        }],
        search: [{
          condition: function() {
            return state.get.current().header.search.show;
          },
          dependents: function() {
            return [
              ".control-header-search-width-by-label",
              ".control-header-search-width-by-auto",
              ".control-header-search-width-by-auto-helper",
              ".control-header-search-width-by-custom",
              ".control-header-search-width-by-custom-helper",
              ".control-header-search-width-size-range",
              ".control-header-search-width-size-number",
              ".control-header-search-width-size-default",
              ".control-header-search-style-label",
              ".control-header-search-style-box",
              ".control-header-search-style-clear",
              ".control-header-search-focus",
              ".control-header-search-focus-helper",
              ".control-header-search-engine-label",
              ".control-header-search-engine-google",
              ".control-header-search-engine-duckduckgo",
              ".control-header-search-engine-youtube",
              ".control-header-search-engine-giphy",
              ".control-header-search-engine-bing",
              ".control-header-search-engine-custom",
              ".control-header-search-text-alignment-grid",
              ".control-header-search-text-alignment-label",
              ".control-header-search-text-alignment-left",
              ".control-header-search-text-alignment-center",
              ".control-header-search-text-alignment-right",
              "[for=control-header-search-size-range]",
              ".control-header-search-size-range",
              ".control-header-search-size-number",
              ".control-header-search-size-default",
              ".control-header-search-size-helper",
              ".control-header-search-newline",
              ".control-header-search-newline-helper"
            ];
          }
        }, {
          condition: function() {
            return (state.get.current().header.search.show && state.get.current().header.search.engine.selected === "custom");
          },
          dependents: function() {
            return [
              "[for=control-header-search-engine-custom-name]",
              ".control-header-search-engine-custom-name",
              "[for=control-header-search-engine-custom-url]",
              ".control-header-search-engine-custom-url",
              ".control-header-search-engine-custom-helper"
            ];
          }
        }, {
          condition: function() {
            return (state.get.current().header.search.show && state.get.current().header.search.width.by === "custom");
          },
          dependents: function() {
            return [
              ".control-header-search-width-size-range",
              ".control-header-search-width-size-number",
              ".control-header-search-width-size-default"
            ];
          }
        }],
        editAdd: [{
          condition: function() {
            return state.get.current().header.editAdd.show;
          },
          dependents: function() {
            return [
              ".control-header-editadd-show-helper",
              ".control-header-editadd-style-label",
              ".control-header-editadd-style-box",
              ".control-header-editadd-style-clear",
              "[for=control-header-editadd-size-range]",
              ".control-header-editadd-size-range",
              ".control-header-editadd-size-number",
              ".control-header-editadd-size-default",
              ".control-header-editadd-newline",
              ".control-header-editadd-newline-helper"
            ];
          }
        }],
        colorAccent: [{
          condition: function() {
            return state.get.current().header.colorAccent.show;
          },
          dependents: function() {
            return [
              ".control-header-coloraccent-show-helper",
              ".control-header-coloraccent-dot-show",
              ".control-header-coloraccent-style-label",
              ".control-header-coloraccent-style-box",
              ".control-header-coloraccent-style-clear",
              "[for=control-header-coloraccent-size-range]",
              ".control-header-coloraccent-size-range",
              ".control-header-coloraccent-size-number",
              ".control-header-coloraccent-size-default",
              ".control-header-coloraccent-newline",
              ".control-header-coloraccent-newline-helper"
            ];
          }
        }],
        menu: [{
          condition: function() {
            return state.get.current().header.menu.show;
          },
          dependents: function() {
            return [
              "[for=control-header-menu-style-label]",
              ".control-header-menu-style-box",
              ".control-header-menu-style-clear",
              "[for=control-header-menu-size-range]",
              ".control-header-menu-size-range",
              ".control-header-menu-size-number",
              ".control-header-menu-size-default",
              ".control-header-menu-newline",
              ".control-header-menu-newline-helper"
            ];
          }
        }],
        color: [{
          condition: function() {
            return state.get.current().header.color.show;
          },
          dependents: function() {
            return [
              ".control-header-color-style-always",
              ".control-header-color-style-always-helper",
              ".control-header-color-style-scroll",
              ".control-header-color-style-scroll-helper",
              ".control-header-color-by-theme",
              ".control-header-color-by-theme-helper",
              ".control-header-color-by-custom",
              ".control-header-color-by-custom-helper",
              ".control-header-color-rgb-range",
              ".control-header-color-rgb-text",
              "[for=control-header-color-opacity-range]",
              ".control-header-color-opacity-range",
              ".control-header-color-opacity-number",
              ".control-header-color-opacity-default",
              ".control-header-radius",
              ".control-header-radius-helper"
            ];
          }
        }, {
          condition: function() {
            return (state.get.current().header.color.show && state.get.current().header.color.by == "custom");
          },
          dependents: function() {
            return [
              ".control-header-color-rgb-range",
              ".control-header-color-rgb-text"
            ];
          }
        }]
      },
      group: [{
        condition: function() {
          return state.get.current().group.name.show;
        },
        dependents: function() {
          return [
            "[for=control-group-name-size-range]",
            ".control-group-name-size-range",
            ".control-group-name-size-number",
            ".control-group-name-size-default"
          ];
        }
      }],
      link: [{
        condition: function() {
          return state.get.current().link.show;
        },
        dependents: function() {
          return [
            ".control-layout-order-headerlink",
            ".control-layout-order-linkheader",
            ".control-layout-order-helper",
            "[for=control-link-area-width-range]",
            ".control-link-area-width-range",
            ".control-link-area-width-number",
            ".control-link-area-width-default",
            ".control-link-area-width-match",
            ".control-link-area-width-helper",
            ".control-link-area-alignment-grid",
            ".control-link-area-alignment-label",
            ".control-link-area-alignment-left",
            ".control-link-area-alignment-center",
            ".control-link-area-alignment-right",
            ".control-link-area-alignment-helper",
            "[for=control-link-item-size-range]",
            ".control-link-item-size-range",
            ".control-link-item-size-number",
            ".control-link-item-size-default",
            ".control-link-item-display-letcon-show",
            ".control-link-item-display-name-show",
            ".control-link-item-url-show",
            ".control-link-item-line-show",
            ".control-link-item-shadow-show",
            ".control-link-item-shadow-show-helper",
            ".control-link-item-hoverscale",
            ".control-link-newtab",
            ".control-link-item-color-by-theme",
            ".control-link-item-color-by-theme-helper",
            ".control-link-item-color-by-custom",
            ".control-link-item-color-by-custom-helper",
            "[for=control-link-item-border-range]",
            ".control-link-item-border-range",
            ".control-link-item-border-number",
            ".control-link-item-border-default",
            ".control-link-style-block",
            ".control-link-style-block-helper",
            ".control-link-style-list",
            ".control-link-style-list-helper",
            ".control-link-orientation-top",
            ".control-link-orientation-bottom",
            ".control-link-orientation-helper",
            ".control-link-sort-name",
            ".control-link-sort-letter",
            ".control-link-sort-icon",
            ".control-link-accent-clear",
            ".control-link-accent-set",
            ".control-link-accent-set-helper"
          ];
        }
      }, {
        condition: function() {
          return (state.get.current().link.show && state.get.current().link.item.display.letcon.show);
        },
        dependents: function() {
          return [
            "[for=control-link-item-display-letcon-letter-size-range]",
            ".control-link-item-display-letcon-letter-size-range",
            ".control-link-item-display-letcon-letter-size-number",
            ".control-link-item-display-letcon-letter-size-default",
            "[for=control-link-item-display-letcon-icon-size-range]",
            ".control-link-item-display-letcon-icon-size-range",
            ".control-link-item-display-letcon-icon-size-number",
            ".control-link-item-display-letcon-icon-size-default"
          ];
        }
      }, {
        condition: function() {
          return (state.get.current().link.show && state.get.current().link.item.display.name.show);
        },
        dependents: function() {
          return [
            "[for=control-link-item-display-name-size-range]",
            ".control-link-item-display-name-size-range",
            ".control-link-item-display-name-size-number",
            ".control-link-item-display-name-size-default"
          ];
        }
      }, {
        condition: function() {
          return (state.get.current().link.show && (state.get.current().link.item.display.letcon.show || state.get.current().link.item.display.name.show));
        },
        dependents: function() {
          return [
            ".control-link-item-display-alignment-grid",
            ".control-link-item-display-alignment-label",
            ".control-link-item-display-alignment-topleft",
            ".control-link-item-display-alignment-topcenter",
            ".control-link-item-display-alignment-topright",
            ".control-link-item-display-alignment-centerleft",
            ".control-link-item-display-alignment-centercenter",
            ".control-link-item-display-alignment-centerright",
            ".control-link-item-display-alignment-bottomleft",
            ".control-link-item-display-alignment-bottomcenter",
            ".control-link-item-display-alignment-bottomright",
            "[for=control-link-item-display-rotate-range]",
            ".control-link-item-display-rotate-range",
            ".control-link-item-display-rotate-number",
            ".control-link-item-display-rotate-default",
            "[for=control-link-item-display-translate-x-range]",
            ".control-link-item-display-translate-x-range",
            ".control-link-item-display-translate-x-number",
            ".control-link-item-display-translate-x-default",
            "[for=control-link-item-display-translate-y-range]",
            ".control-link-item-display-translate-y-range",
            ".control-link-item-display-translate-y-number",
            ".control-link-item-display-translate-y-default"
          ];
        }
      }, {
        condition: function() {
          return (state.get.current().link.show && state.get.current().link.item.display.letcon.show && state.get.current().link.item.display.name.show);
        },
        dependents: function() {
          return [
            ".control-link-item-display-direction-horizontal",
            ".control-link-item-display-direction-vertical",
            ".control-link-item-display-order-letconname",
            ".control-link-item-display-order-nameletcon",
            ".control-link-item-display-direction-helper",
            ".control-link-item-display-order-helper",
            "[for=control-link-item-display-gutter-range]",
            ".control-link-item-display-gutter-range",
            ".control-link-item-display-gutter-number",
            ".control-link-item-display-gutter-default"
          ];
        }
      }, {
        condition: function() {
          return state.get.current().link.item.color.by == "custom";
        },
        dependents: function() {
          return [
            ".control-link-item-color-rgb-range",
            ".control-link-item-color-rgb-text"
          ];
        }
      }],
      theme: [{
        condition: function() {
          return (state.get.current().theme.custom.all.length > 0);
        },
        dependents: function() {
          return [
            ".control-theme-custom-edit"
          ];
        }
      }, {
        condition: function() {
          return state.get.current().theme.accent.random.active;
        },
        dependents: function() {
          return [
            ".control-theme-accent-random-style-any",
            ".control-theme-accent-random-style-light",
            ".control-theme-accent-random-style-dark",
            ".control-theme-accent-random-style-pastel",
            ".control-theme-accent-random-style-saturated",
            ".control-theme-accent-randomise"
          ];
        }
      }],
      background: [{
        condition: function() {
          return state.get.current().background.image.show;
        },
        dependents: function() {
          return [
            ".control-background-image-from-file",
            ".control-background-image-from-url",
            "[for=control-background-image-opacity-range]",
            ".control-background-image-opacity-range",
            ".control-background-image-opacity-number",
            ".control-background-image-opacity-default",
            "[for=control-background-image-blur-range]",
            ".control-background-image-blur-range",
            ".control-background-image-blur-number",
            ".control-background-image-blur-default",
            "[for=control-background-image-grayscale-range]",
            ".control-background-image-grayscale-range",
            ".control-background-image-grayscale-number",
            ".control-background-image-grayscale-default",
            "[for=control-background-image-accent-range]",
            ".control-background-image-accent-range",
            ".control-background-image-accent-number",
            ".control-background-image-accent-default",
            "[for=control-background-image-scale-range]",
            ".control-background-image-scale-range",
            ".control-background-image-scale-number",
            ".control-background-image-scale-default"
          ];
        }
      }, {
        condition: function() {
          return (state.get.current().background.image.show && state.get.current().background.image.from == "file");
        },
        dependents: function() {
          return [
            ".control-background-image-file-feedback",
            ".control-background-image-file",
            ".control-background-image-file-clear",
            ".control-background-image-file-helper"
          ];
        }
      }, {
        condition: function() {
          return (state.get.current().background.image.show && state.get.current().background.image.from == "url");
        },
        dependents: function() {
          return [
            ".control-background-image-url",
            ".control-background-image-url-helper"
          ];
        }
      }, {
        condition: function() {
          return (state.get.current().background.color.by == "custom");
        },
        dependents: function() {
          return [
            ".control-background-color-rgb-range",
            ".control-background-color-rgb-text"
          ];
        }
      }]
    };

    var disableCheck = function(array) {
      array.forEach(function(arrayItem, index) {
        var condition = arrayItem.condition();
        arrayItem.dependents().forEach(function(arrayItem, index) {
          var element = helper.eA(arrayItem);
          element.forEach(function(arrayItem, index) {
            var elementType = arrayItem.tagName.toLowerCase();
            if (type.control.includes(elementType)) {
              disable.control(arrayItem, condition);
            } else if (type.element.includes(elementType)) {
              disable.element(arrayItem, condition);
            };
          });

        });
      });
    };

    disableCheck(all.edit);
    disableCheck(all.header.greeting);
    disableCheck(all.header.clock);
    disableCheck(all.header.transitional);
    disableCheck(all.header.date);
    disableCheck(all.header.search);
    disableCheck(all.header.editAdd);
    disableCheck(all.header.colorAccent);
    disableCheck(all.header.menu);
    disableCheck(all.header.color);
    disableCheck(all.group);
    disableCheck(all.link);
    disableCheck(all.theme);
    disableCheck(all.background);
  };

  render.update = {
    value: {
      set: {
        checkbox: function(object) {
          helper.e(object.element).checked = helper.getObject({
            object: state.get.current(),
            path: object.path
          });
        },
        radio: function(object) {
          helper.e(object.element.substring(0, object.element.lastIndexOf("-") + 1) + helper.getObject({
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
              newValue = render.update.value.convert[arrayItem](newValue, object);
            });
          };
          helper.e(object.element).value = newValue;
        },
        textarea: function(object) {
          var newValue = helper.getObject({
            object: state.get.current(),
            path: object.path
          });
          if (object.valueConvert) {
            object.valueConvert.slice().reverse().forEach(function(arrayItem, index) {
              newValue = render.update.value.convert[arrayItem](newValue, object);
            });
          };
          helper.e(object.element).value = newValue;
        },
        number: function(object) {
          var newValue = helper.getObject({
            object: state.get.current(),
            path: object.path
          });
          if (object.valueConvert) {
            object.valueConvert.slice().reverse().forEach(function(arrayItem, index) {
              newValue = render.update.value.convert[arrayItem](newValue, object);
            });
          };
          helper.e(object.element).value = Math.round(newValue);
        },
        range: function(object) {
          var newValue = helper.getObject({
            object: state.get.current(),
            path: object.path
          });
          if (object.valueConvert) {
            object.valueConvert.slice().reverse().forEach(function(arrayItem, index) {
              newValue = render.update.value.convert[arrayItem](newValue, object);
            });
          };
          helper.e(object.element).value = newValue;
        },
        color: function(object) {
          helper.e(object.element).value = helper.convertColor.rgb.hex(helper.getObject({
            object: state.get.current(),
            path: object.path
          }));
        }
      },
      convert: {
        reverse: function(value, object) {
          return object.valueModify.max - value;
        },
        float: function(value, object) {
          return value * 100;
        },
        hexTextString: function(value, object) {
          return helper.convertColor.rgb.hex(value);
        }
      }
    },
    control: {
      header: function(object) {
        if (object) {
          if (bind.control.supportedElement.includes(object.type) && helper.e(object.element)) {
            render.update.value.set[object.type](object);
          };
        } else {
          mod.header.forEach(function(arrayItem, index) {
            if (bind.control.supportedElement.includes(arrayItem.type) && helper.e(arrayItem.element)) {
              render.update.value.set[arrayItem.type](arrayItem);
            };
          });
        };
      },
      menu: function(object) {
        if (object) {
          if (bind.control.supportedElement.includes(object.type)) {
            render.update.value.set[object.type](object);
          };
        } else {
          mod.menu.forEach(function(arrayItem, index) {
            if (bind.control.supportedElement.includes(arrayItem.type)) {
              render.update.value.set[arrayItem.type](arrayItem);
            };
          });
        };
      }
    }
  };

  render.input = {
    header: function() {
      mod.menu.forEach(function(arrayItem, index) {
        if (arrayItem.valueModify) {
          for (var key in arrayItem.valueModify) {
            helper.e(arrayItem.element)[key] = arrayItem.valueModify[key];
          };
        };
      });
    },
    menu: function() {
      mod.header.forEach(function(arrayItem, index) {
        if (arrayItem.valueModify) {
          for (var key in arrayItem.valueModify) {
            helper.e(arrayItem.element)[key] = arrayItem.valueModify[key];
          };
        };
      });
    }
  };

  var init = function() {
    bind.control.header();
    bind.control.menu();
    render.input.header();
    render.input.menu();
    render.update.control.header();
    render.update.control.menu();
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
