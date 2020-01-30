var header = (function() {

  var mod = {};

  mod.item = {
    all: {
      greeting: {
        name: "Greeting",
        item: function() {
          return render.item.para("greeting");
        }
      },
      clock: {
        name: "Clock",
        item: function() {
          return render.item.para("clock");
        }
      },
      transitional: {
        name: "Transitional text",
        item: function() {
          return render.item.para("transitional");
        }
      },
      date: {
        name: "Date",
        item: function() {
          return render.item.para("date");
        }
      },
      search: {
        name: "Search",
        item: function() {
          return render.item.search();
        }
      },
      editAdd: {
        name: "Edit/Add buttons",
        item: function() {
          return render.item.button.editAdd();
        }
      },
      colorAccent: {
        name: "Colour/Accent buttons",
        item: function() {
          return render.item.button.quickColors();
        }
      },
      menu: {
        name: "Menu button",
        item: function() {
          return render.item.button.menu();
        }
      }
    },
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
        // color always
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
      var headerOrder = helper.e(".header-order");
      var ul = helper.node("ul|class:header-order-list");
      state.get.current().header.order.forEach(function(arrayItem, index) {
        var itemLi = helper.node("li:" + mod.item.all[arrayItem].name);
        ul.appendChild(itemLi);
      });
      headerOrder.appendChild(ul);
      sortable('.header-order-list', {
        placeholder: "<li></li>"
      });
      sortable(".header-order-list")[0].addEventListener("sortupdate", function(event) {
        var positionData = {
          origin: event.detail.origin.index,
          destination: event.detail.destination.index
        };
        mod.item.move(positionData);
        data.save();
        render.item.clear();
        render.item.all();
        clock.render.all();
        date.render.all();
        greeting.render.all();
        transitional.render.all();
        // temp bind
        // control.bind.controls(control._allControl[0]);
        search.bind.input();
        search.bind.clear();
      }, false);
    },
    clear: function() {
      var headerOrder = helper.e(".header-order");
      while (headerOrder.lastChild) {
        headerOrder.removeChild(headerArea.lastChild);
      };
    }
  };

  render.item = {
    all: function() {
      var headerArea = helper.e(".header-area");
      var headerItemGrid = helper.node("div|class:header-item-grid");
      state.get.current().header.order.forEach(function(arrayItem, index) {
        headerItemGrid.appendChild(render.item.wrapper(arrayItem, mod.item.all[arrayItem].item()));
      });
      headerArea.appendChild(headerItemGrid);
    },
    clear: function() {
      var headerArea = helper.e(".header-area");
      while (headerArea.lastChild) {
        headerArea.removeChild(headerArea.lastChild);
      };
    },
    wrapper: function(name, item) {
      var headerItem = helper.node("div|class:header-item header-" + name + "");
      var headerItemBody = helper.node("div|class:header-" + name + "-body");
      headerItemBody.appendChild(item);
      headerItem.appendChild(headerItemBody);
      return headerItem;
    },
    para: function(itemName) {
      return helper.node("p|class:" + itemName + "");
    },
    search: function() {
      var headerSearchBody = helper.node("div|class:header-search-body");
      var form = helper.node("form|class:search,action,method:get");
      var searchInput = helper.node("input|class:header-search-input search-input,type:text,placeholder:Find or Search,name:q,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false,tabindex:1");
      var hiddenInput = helper.node("input|type:submit,value:Search,class:is-hidden");
      var clearButton = helper.node("button|class:header-search-clear search-clear button button-link,tabindex:1,disabled");
      var clearButtonIcon = helper.node("span|class:icon-close");
      clearButton.appendChild(clearButtonIcon);
      form.appendChild(searchInput);
      form.appendChild(hiddenInput);
      headerSearchBody.appendChild(form);
      headerSearchBody.appendChild(clearButton);
      return headerSearchBody;
    },
    button: {
      menu: function() {
        var button = helper.node("button|class:control-menu-open button,tabindex:1");
        var buttonIcon = helper.node("span|class:icon-settings");
        if (state.get.current().header.button.style == "clear") {
          helper.addClass(button, "button-link");
        };
        button.appendChild(buttonIcon);
        return button;
      },
      editAdd: function() {
        var formGroup = helper.node("div|class:form-group form-group-nested-button");
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

        if (state.get.current().header.button.style == "clear") {
          helper.addClass(formInputButton, "form-input-button-link");
          helper.addClass(controlAddToggle, "button-link");
        };

        formGroup.appendChild(formInputButton);
        formGroup.appendChild(formDropdown);

        return formGroup;
      },
      quickColors: function() {
        var formGroup = helper.node("div|class:form-group form-group-nested-button");

        var colorInputButton = helper.node("div|class:form-input-button");
        var colorInput = helper.node("input|id:control-theme-color-rgb-color-quick,class:control-theme-color-rgb-color-quick,type:color,value:#000000,tabindex:1");
        var colorInputLabel = helper.node("label|for:control-theme-color-rgb-color-quick");
        var colorInputLabelText = helper.node("span:Colour");
        colorInputLabel.appendChild(colorInputLabelText);
        colorInputButton.appendChild(colorInput);
        colorInputButton.appendChild(colorInputLabel);

        var accentInputButton = helper.node("div|class:form-input-button");
        var accentInput = helper.node("input|id:control-theme-accent-rgb-color-quick,class:control-theme-accent-rgb-color-quick,type:color,value:#000000,tabindex:1");
        var accentInputLabel = helper.node("label|for:control-theme-accent-rgb-color-quick");
        var accentInputLabelText = helper.node("span:Accent");
        accentInputLabel.appendChild(accentInputLabelText);
        accentInputButton.appendChild(accentInput);
        accentInputButton.appendChild(accentInputLabel);

        if (state.get.current().header.button.colorAccent.dot.show) {
          helper.addClass(colorInputButton, "input-color-dot");
          helper.addClass(colorInputButton, "input-color-dot-shade");
          helper.addClass(accentInputButton, "input-color-dot");
          helper.addClass(accentInputButton, "input-color-dot-accent");
        } else {
          helper.addClass(colorInputButton, "form-input-hide");
          helper.addClass(accentInputButton, "form-input-hide");
        };

        if (state.get.current().header.button.style == "clear") {
          helper.addClass(colorInputButton, "form-input-button-link");
          helper.addClass(accentInputButton, "form-input-button-link");
        };

        formGroup.appendChild(colorInputButton);
        formGroup.appendChild(accentInputButton);
        return formGroup;
      }
    }
  };

  render.greeting = {
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-greeting-size", state.get.current().header.greeting.size + "em");
    }
  };

  render.search = {
    width: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-search-width", state.get.current().header.search.width + "%");
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

  render.button = {
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--header-button-size", state.get.current().header.button.size + "em");
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
    render.search.width();
    render.search.size();
    render.button.size();
    render.control.all();
  };

  // exposed methods
  return {
    mod: mod,
    render: render,
    init: init
  };

})();
