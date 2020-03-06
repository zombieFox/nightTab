var header = (function() {

  var mod = {};

  mod.item = {
    move: function(data) {
      var item = JSON.parse(JSON.stringify(state.get.current().header.order[data.origin]));
      state.get.current().header.order.splice(data.origin, 1);
      state.get.current().header.order.splice(data.destination, 0, item);
    }
  };

  var bind = {};

  bind.resize = function() {
    window.addEventListener("resize", function() {
      render.color.scrolling();
    }, false);
  };

  bind.scroll = function() {
    window.addEventListener("scroll", function() {
      render.color.scrolling();
    }, false);
    helper.eA(".container").forEach(function(arrayItem, index) {
      arrayItem.addEventListener("transitionend", function() {
        render.color.scrolling();
      }, false);
    });
  };

  bind.fonts = function() {
    document.fonts.ready.then(function() {
      render.color.scrolling();
    });
  };

  bind.sort = {
    update: {
      func: function(event) {
        var positionData = {
          origin: event.detail.origin.index,
          destination: event.detail.destination.index
        };
        mod.item.move(positionData);
        data.save();
        render.control.clear();
        render.control.all();
        bind.sort.item();
        render.item.clear();
        render.item.all();
        greeting.render.clear();
        greeting.render.all();
        clock.render.clear();
        clock.render.all();
        transitional.render.clear();
        transitional.render.all();
        date.render.clear();
        date.render.all();
        control.render.dependents();
        control.render.update.control.header();
        control.bind.control.header();
        search.render.engine();
        search.bind.input();
        search.bind.clear();
        dropdown.bind.editAdd();
      },
      remove: function() {
        sortable(".header-order")[0].removeEventListener("sortupdate", bind.sort.update.func, false);
      }
    },
    item: function() {
      var placeholderFormWrap = helper.node("div|class:form-wrap");
      var placeholderFormInline = helper.node("div|class:form-inline");
      var placeholder = helper.node("div|class:header-item-sort-placeholder-edge")
      placeholderFormInline.appendChild(placeholder);
      placeholderFormWrap.appendChild(placeholderFormInline);
      sortable('.header-order', {
        orientation: "vertical",
        handle: ".header-order-control-item-handle",
        placeholder: placeholderFormWrap
      });
      bind.sort.update.remove();
      sortable(".header-order")[0].addEventListener("sortupdate", bind.sort.update.func, false, event);
    }
  };

  var render = {};

  render.area = {
    width: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-area-width", state.get.current().header.area.width + "%");
    }
  };

  render.color = {
    custom: function() {
      helper.e("html").style.setProperty("--header-color-custom", state.get.current().header.color.rgb.r + ", " + state.get.current().header.color.rgb.g + ", " + state.get.current().header.color.rgb.b);
    },
    scrolling: function() {
      var html = helper.e("html");
      var headerRect = helper.e(".header").getBoundingClientRect();
      var layoutRect = helper.e(".layout").getBoundingClientRect();
      var fontSize = parseInt(getComputedStyle(html).fontSize, 10);
      var scrollTop = document.documentElement.scrollTop;
      // var scrollHeight = document.documentElement.scrollHeight;
      var innerHeight = window.innerHeight;
      // if color show
      if (state.get.current().header.color.show) {
        // if layout is vertical
        if (state.get.current().layout.direction == "vertical") {
          // color on scroll or always
          if (state.get.current().header.color.style == "scroll") {
            // check header position
            if (state.get.current().layout.order == "headerlink") {
              // check scroll position
              if (scrollTop > fontSize * 2 && headerRect.top == 0) {
                helper.addClass(html, "is-header-color-style-scrolling");
              } else {
                helper.removeClass(html, "is-header-color-style-scrolling");
              };
            } else if (state.get.current().layout.order == "linkheader") {
              // check scroll position
              if (headerRect.bottom == innerHeight && (scrollTop + innerHeight) < ((scrollTop + layoutRect.bottom) - (fontSize * 2))) {
                helper.addClass(html, "is-header-color-style-scrolling");
              } else {
                helper.removeClass(html, "is-header-color-style-scrolling");
              };
            };
          };
        } else {
          helper.removeClass(html, "is-header-color-style-scrolling");
        };
      };
    }
  };

  render.opacity = function() {
    var html = helper.e("html");
    if (state.get.current().header.color.show) {
      html.style.setProperty("--header-opacity", state.get.current().header.color.opacity);
    };
  };

  render.border = function() {
    var html = helper.e("html");
    html.style.setProperty("--header-border-top", state.get.current().header.border.top);
    html.style.setProperty("--header-border-bottom", state.get.current().header.border.bottom);
  };

  render.control = {
    all: function() {
      var names = {
        greeting: "Greeting",
        clock: "Clock",
        transitional: "Transitional",
        date: "Date",
        search: "Search bar",
        editAdd: "Edit/Add",
        colorAccent: "Colour/Accent",
        menu: "Settings menu"
      };
      var headerOrder = helper.e(".header-order");
      state.get.current().header.order.forEach(function(arrayItem, index) {
        var formWrap = helper.node("div|class:form-wrap");
        var forminline = helper.node("div|class:form-inline");
        var formGroup = helper.node("div|class:form-group header-order-control");

        var buttonUp = helper.node("button|class:button form-group-item-shrink header-order-control-item header-order-control-item-up,tabindex:-1,title:Move this header item up");
        var buttonUpIcon = helper.node("span|class:button-icon icon-arrow-up");
        buttonUp.appendChild(buttonUpIcon);

        var linkHandle = helper.node("div|class:button form-group-item-shrink header-order-control-item header-order-control-item-handle,tabindex:-1,title:Drag header item to reorder");
        var linkHandleIcon = helper.node("span|class:button-icon icon-reorder");
        linkHandle.appendChild(linkHandleIcon);

        var buttonDown = helper.node("button|class:button form-group-item-shrink header-order-control-item header-order-control-item-down,tabindex:-1,title:Move this header item down");
        var buttonDownIcon = helper.node("span|class:button-icon icon-arrow-down");
        buttonDown.appendChild(buttonDownIcon);

        var name = helper.node("div:" + names[arrayItem]);

        formGroup.appendChild(buttonUp);
        formGroup.appendChild(linkHandle);
        formGroup.appendChild(buttonDown);

        forminline.appendChild(formGroup);
        forminline.appendChild(name);
        formWrap.appendChild(forminline);

        headerOrder.appendChild(formWrap);

        if (state.get.current().menu) {
          headerOrder.querySelectorAll("[tabindex]").forEach(function(arrayItem, index) {
            arrayItem.tabIndex = 1;
          });
        };

        buttonUp.addEventListener("click", function(event) {
          var positionData = {
            origin: index,
            destination: index - 1
          };
          if (positionData.destination < 0) {
            positionData.destination = 0
          };
          mod.item.move(positionData);
          data.save();
          render.control.clear();
          render.control.all();
          bind.sort.item();
          render.item.clear();
          render.item.all();
          greeting.render.clear();
          greeting.render.all();
          clock.render.clear();
          clock.render.all();
          transitional.render.clear();
          transitional.render.all();
          date.render.clear();
          date.render.all();
          control.render.dependents();
          control.render.update.control.header();
          control.bind.control.header();
          search.render.engine();
          search.bind.input();
          search.bind.clear();
          render.control.focus.up(positionData);
          dropdown.bind.editAdd();
        }, false);

        buttonDown.addEventListener("click", function(event) {
          var positionData = {
            origin: index,
            destination: index + 1
          };
          mod.item.move(positionData);
          data.save();
          render.control.clear();
          render.control.all();
          bind.sort.item();
          render.item.clear();
          render.item.all();
          greeting.render.clear();
          greeting.render.all();
          clock.render.clear();
          clock.render.all();
          transitional.render.clear();
          transitional.render.all();
          date.render.clear();
          date.render.all();
          control.render.dependents();
          control.render.update.control.header();
          control.bind.control.header();
          search.render.engine();
          search.bind.input();
          search.bind.clear();
          render.control.focus.down(positionData);
          dropdown.bind.editAdd();
        }, false);
      });
    },
    clear: function() {
      var headerOrder = helper.e(".header-order");
      while (headerOrder.lastChild) {
        headerOrder.removeChild(headerOrder.lastChild);
      };
    },
    focus: {
      up: function(positionData) {
        var allHeaderOrderControl = helper.eA(".header-order-control");
        var target = positionData.destination;
        if (target < 0) {
          target = 0;
        };
        var button = allHeaderOrderControl[target].querySelector(".header-order-control-item-up");
        button.focus();
      },
      down: function(positionData) {
        var allHeaderOrderControl = helper.eA(".header-order-control");
        var target = positionData.destination;
        if (target >= allHeaderOrderControl.length) {
          target = allHeaderOrderControl.length - 1;
        };
        var button = allHeaderOrderControl[target].querySelector(".header-order-control-item-down");
        button.focus();
      }
    },
    tabindex: function() {
      var allHeaderItemControl = helper.eA(".header-item-control");
      if (state.get.current().edit) {
        allHeaderItemControl.forEach(function(arrayItem, index) {
          arrayItem.tabIndex = 1;
        });
      } else {
        allHeaderItemControl.forEach(function(arrayItem, index) {
          arrayItem.tabIndex = -1;
        });
      };
    }
  };

  render.item = {
    all: function() {
      var headerSection = helper.e(".header");
      var headerArea = helper.node("div|class:header-area");
      var headerItemGrid = helper.node("div|class:header-item-grid");
      state.get.current().header.order.forEach(function(arrayItem, index) {
        if ((arrayItem == "clock" && (state.get.current().header.clock.seconds.show || state.get.current().header.clock.minutes.show || state.get.current().header.clock.hours.show)) ||
          (arrayItem == "date" && (state.get.current().header.date.day.show || state.get.current().header.date.date.show || state.get.current().header.date.month.show || state.get.current().header.date.year.show)) ||
          state.get.current().header[arrayItem].show) {
          var name = arrayItem.toLowerCase();
          headerItemGrid.appendChild(render.item.wrapper(name, render.item[arrayItem](name), index));
        };
      });
      headerArea.appendChild(headerItemGrid);
      headerSection.appendChild(headerArea);
    },
    clear: function() {
      var headerSection = helper.e(".header");
      while (headerSection.lastChild) {
        headerSection.removeChild(headerSection.lastChild);
      };
    },
    wrapper: function(name, item) {
      var headerItem = helper.node("div|class:header-item header-item-" + name + "");
      var headerItemBody = helper.node("div|class:header-item-body header-item-body-" + name);
      headerItemBody.appendChild(item);
      headerItem.appendChild(headerItemBody);
      return headerItem;
    },
    greeting: function(name) {
      return helper.node("p|class:" + name + "");
    },
    clock: function(name) {
      return helper.node("p|class:" + name + "");
    },
    transitional: function(name) {
      return helper.node("p|class:" + name + "");
    },
    date: function(name) {
      return helper.node("p|class:" + name + "");
    },
    search: function() {
      var headerSearchBody = helper.node("div|class:search-wrapper");
      var form = helper.node("form|class:search,action,method:get");
      var searchInput = helper.node("input|class:search-input,type:text,placeholder:Find or Search,name:q,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false,tabindex:1");
      var hiddenInput = helper.node("input|type:submit,value:Search,class:is-hidden");
      var clearButton = helper.node("button|class:search-clear search-clear button button-link,tabindex:1,disabled");
      var clearButtonIcon = helper.node("span|class:icon-close");
      clearButton.appendChild(clearButtonIcon);
      form.appendChild(searchInput);
      form.appendChild(hiddenInput);
      headerSearchBody.appendChild(form);
      headerSearchBody.appendChild(clearButton);

      if (state.get.current().header.search.style == "clear") {
        helper.addClass(searchInput, "input-clear");
      };

      if (state.get.current().header.search.newTab) {
        form.setAttribute("target", "_blank");
      };

      return headerSearchBody;
    },
    editAdd: function() {
      var formGroup = helper.node("div|class:header-editadd form-group form-group-nested-button");
      var formInputButton = helper.node("div|class:form-input-button form-input-hide");
      var controlEditInput = helper.node("input|id:control-edit,class:control-edit,type:checkbox,tabindex:1");
      var controlEditLabel = helper.node("label|for:control-edit");
      var controlEditLabelText = helper.node("span:Edit");
      var controlEditLabelIcon = helper.node("span|class:label-icon");
      controlEditLabel.appendChild(controlEditLabelText);
      controlEditLabel.appendChild(controlEditLabelIcon);
      formInputButton.appendChild(controlEditInput);
      formInputButton.appendChild(controlEditLabel);

      var formDropdown = helper.node("div|class:form-dropdown");
      var controlAddToggle = helper.node("button|class:control-add-toggle form-dropdown-toggle button,tabindex:1");
      var controlAddToggleText = helper.node("span:Add");
      controlAddToggle.appendChild(controlAddToggleText);
      var formDropdownMenu = helper.node("ul|class:list-unstyled form-dropdown-menu");
      var controlGroupAddLi = helper.node("li");
      var controlGroupAdd = helper.node("button|class:button button-block text-left form-dropdown-menu-item control-group-add,tabindex:1");
      var controlGroupAddText = helper.node("span:New Group|class:button-text");
      controlGroupAdd.appendChild(controlGroupAddText);
      controlGroupAddLi.appendChild(controlGroupAdd);
      var controlLinkAddLi = helper.node("li");
      var controlLinkAdd = helper.node("button|class:button button-block text-left form-dropdown-menu-item control-link-add,tabindex:1");
      var controlLinkAddText = helper.node("span:New Bookmark|class:button-text");
      controlLinkAdd.appendChild(controlLinkAddText);
      controlLinkAddLi.appendChild(controlLinkAdd);
      formDropdownMenu.appendChild(controlGroupAddLi);
      formDropdownMenu.appendChild(controlLinkAddLi);
      formDropdown.appendChild(controlAddToggle);
      formDropdown.appendChild(formDropdownMenu);

      if (state.get.current().header.editAdd.style == "clear") {
        helper.addClass(formInputButton, "form-input-button-link");
        helper.addClass(controlAddToggle, "button-link");
      };

      formGroup.appendChild(formInputButton);
      formGroup.appendChild(formDropdown);

      return formGroup;
    },
    colorAccent: function() {
      var formGroup = helper.node("div|class:header-coloraccent form-group form-group-nested-button");

      var colorInputButton = helper.node("div|class:form-input-button");
      var colorInput = helper.node("input|id:control-theme-color-rgb-color-quick,class:control-theme-color-rgb-color-quick,type:color,value:#000000,tabindex:1,autocomplete:off");
      var colorInputLabel = helper.node("label|for:control-theme-color-rgb-color-quick");
      var colorInputLabelText = helper.node("span:Colour");
      colorInputLabel.appendChild(colorInputLabelText);
      colorInputButton.appendChild(colorInput);
      colorInputButton.appendChild(colorInputLabel);

      var accentInputButton = helper.node("div|class:form-input-button");
      var accentInput = helper.node("input|id:control-theme-accent-rgb-color-quick,class:control-theme-accent-rgb-color-quick,type:color,value:#000000,tabindex:1,autocomplete:off");
      var accentInputLabel = helper.node("label|for:control-theme-accent-rgb-color-quick");
      var accentInputLabelText = helper.node("span:Accent");
      accentInputLabel.appendChild(accentInputLabelText);
      accentInputButton.appendChild(accentInput);
      accentInputButton.appendChild(accentInputLabel);

      if (state.get.current().header.colorAccent.dot.show) {
        helper.addClass(colorInputButton, "input-color-dot");
        helper.addClass(colorInputButton, "input-color-dot-shade");
        helper.addClass(accentInputButton, "input-color-dot");
        helper.addClass(accentInputButton, "input-color-dot-accent");
      } else {
        helper.addClass(colorInputButton, "form-input-hide");
        helper.addClass(accentInputButton, "form-input-hide");
      };

      if (state.get.current().header.colorAccent.style == "clear") {
        helper.addClass(colorInputButton, "form-input-button-link");
        helper.addClass(accentInputButton, "form-input-button-link");
      };

      formGroup.appendChild(colorInputButton);
      formGroup.appendChild(accentInputButton);
      return formGroup;
    },
    menu: function() {
      var button = helper.node("button|class:control-menu-open button,tabindex:1");
      var baselineAlignmentCharacter = helper.node("span:-|class:baseline-alignment-icon-character,aria-hidden:true");
      var buttonIcon = helper.node("span|class:icon-settings");
      if (state.get.current().header.menu.style == "clear") {
        helper.addClass(button, "button-link");
      };
      button.appendChild(baselineAlignmentCharacter);
      button.appendChild(buttonIcon);
      return button;
    }
  };

  render.greeting = {
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-greeting-size", state.get.current().header.greeting.size + "em");
    }
  };

  render.search = {
    width: {
      size: function() {
        var html = helper.e("html");
        html.style.setProperty("--header-search-width-size", state.get.current().header.search.width.size + "%");
      }
    },
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-search-size", state.get.current().header.search.size + "em");
    }
  };

  render.transitional = {
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-transitional-size", state.get.current().header.transitional.size + "em");
    }
  };

  render.clock = {
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-clock-size", state.get.current().header.clock.size + "em");
    }
  };

  render.date = {
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-date-size", state.get.current().header.date.size + "em");
    }
  };

  render.editadd = {
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-editadd-size", state.get.current().header.editAdd.size + "em");
    }
  };

  render.coloraccent = {
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-coloraccent-size", state.get.current().header.colorAccent.size + "em");
    }
  };

  render.menu = {
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-menu-size", state.get.current().header.menu.size + "em");
    }
  };

  var init = function() {
    bind.resize();
    bind.scroll();
    bind.fonts();
    render.item.all();
    render.area.width();
    render.color.scrolling();
    render.color.custom();
    render.opacity();
    render.border();
    render.greeting.size();
    render.transitional.size();
    render.clock.size();
    render.date.size();
    render.search.width.size();
    render.search.size();
    render.editadd.size();
    render.coloraccent.size();
    render.menu.size();
    render.control.all();
    bind.sort.item();
  };

  // exposed methods
  return {
    mod: mod,
    render: render,
    init: init
  };

})();
