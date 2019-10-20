var dropdown = (function() {

  var mod = {};

  mod.open = function() {
    helper.setObject({
      object: state.get(),
      path: "dropdown",
      newValue: true
    });
  };

  mod.close = function() {
    helper.setObject({
      object: state.get(),
      path: "dropdown",
      newValue: false
    });
  };

  mod.toggle = function() {
    if (state.get().dropdown) {
      helper.setObject({
        object: state.get(),
        path: "dropdown",
        newValue: false
      });
    } else {
      helper.setObject({
        object: state.get(),
        path: "dropdown",
        newValue: true
      });
    };
  };

  var bind = {};

  bind.formDropdown = function() {
    var allFormDropdown = helper.eA(".form-dropdown");
    allFormDropdown.forEach(function(arrayItem, index) {
      var formDropdown = arrayItem;
      var formDropdownToggle = formDropdown.querySelector(".form-dropdown-toggle");
      var allFormDropdownMenuItem = formDropdown.querySelectorAll(".form-dropdown-menu-item");
      formDropdownToggle.addEventListener("click", function() {
        mod.toggle();
        render.toggle(formDropdown);
        render.offset(formDropdown);
      }, false);
      allFormDropdownMenuItem.forEach(function(arrayItem, index) {
        arrayItem.addEventListener("click", function() {
          mod.close();
          render.close(formDropdown);
        }, false);
      });
    });
  };

  var render = {};

  render.offset = function(formDropdown) {
    var formDropdownMenu = formDropdown.querySelector(".form-dropdown-menu");
    var box = formDropdownMenu.getBoundingClientRect();
    if (box.left + box.width > window.innerWidth) {
      formDropdownMenu.style.right = "0";
      formDropdownMenu.style.left = "inherit";
    } else {
      formDropdownMenu.removeAttribute("style");
    };
  };

  render.toggle = function(formDropdown) {
    if (formDropdown.classList.contains("form-dropdown-open")) {
      mod.close();
      helper.removeClass(formDropdown, "form-dropdown-open");
    } else {
      mod.open();
      helper.addClass(formDropdown, "form-dropdown-open");
    };
  };

  render.close = function(formDropdown) {
    mod.close();
    helper.removeClass(formDropdown, "form-dropdown-open");
  };

  render.open = function(formDropdown) {
    mod.open();
    helper.addClass(formDropdown, "form-dropdown-open");
  };

  var close = function() {
    mod.close();
    var allFormDropdown = helper.eA(".form-dropdown");
    allFormDropdown.forEach(function(arrayItem, index) {
      helper.removeClass(arrayItem, "form-dropdown-open");
    });
  };

  var init = function() {
    mod.close();
    bind.formDropdown();
  };

  // exposed methods
  return {
    init: init,
    bind: bind,
    render: render,
    close: close
  };

})();
