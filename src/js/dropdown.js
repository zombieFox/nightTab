var dropdown = (function() {

  var _currentFormDropdown = null;

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

  var documentEvent = {};

  documentEvent.add = function() {
    document.addEventListener("click", documentEvent.clickOut, false);
  };

  documentEvent.remove = function() {
    document.removeEventListener("click", documentEvent.clickOut, false);
  };

  documentEvent.clickOut = function() {
    if (!event.path.includes(_currentFormDropdown)) {
      close();
    };
  };

  bind.formDropdown = function() {
    var allFormDropdown = helper.eA(".form-dropdown");
    allFormDropdown.forEach(function(arrayItem, index) {
      var formDropdown = arrayItem;
      var formDropdownToggle = formDropdown.querySelector(".form-dropdown-toggle");
      var allFormDropdownMenuItem = formDropdown.querySelectorAll(".form-dropdown-menu-item");
      formDropdownToggle.addEventListener("click", function() {
        _currentFormDropdown = formDropdown;
        mod.toggle();
        render.toggle();
      }, false);
      allFormDropdownMenuItem.forEach(function(arrayItem, index) {
        arrayItem.addEventListener("click", function() {
          mod.close();
          render.close();
        }, false);
      });
    });
  };

  var render = {};

  render.offset = function() {
    var formDropdownMenu = _currentFormDropdown.querySelector(".form-dropdown-menu");
    var box = formDropdownMenu.getBoundingClientRect();
    if (box.left + box.width > window.innerWidth) {
      formDropdownMenu.style.right = "0";
      formDropdownMenu.style.left = "inherit";
    } else {
      formDropdownMenu.removeAttribute("style");
    };
  };

  render.toggle = function() {
    if (_currentFormDropdown.classList.contains("form-dropdown-open")) {
      mod.close();
      helper.removeClass(_currentFormDropdown, "form-dropdown-open");
      documentEvent.remove();
      render.offset();
      _currentFormDropdown = null;
    } else {
      mod.open();
      _currentFormDropdown = _currentFormDropdown;
      helper.addClass(_currentFormDropdown, "form-dropdown-open");
      documentEvent.add(_currentFormDropdown);
      render.offset();
    };
  };

  render.close = function() {
    mod.close();
    helper.removeClass(_currentFormDropdown, "form-dropdown-open");
    documentEvent.remove();
    render.offset();
    _currentFormDropdown = null;
  };

  var close = function() {
    mod.close();
    render.close();
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
