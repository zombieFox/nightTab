var autoSuggest = (function() {

  var _timer = null;
  var _currentInputOptions = {};
  var _autoSuggestActive = false;

  var mod = {};

  mod.open = function() {
    helper.setObject({
      object: state.get(),
      path: "autoSuggest",
      newValue: true
    });
  };

  mod.close = function() {
    helper.setObject({
      object: state.get(),
      path: "autoSuggest",
      newValue: false
    });
  };

  var bind = {};

  bind.input = function(override) {
    var options = {
      input: null,
      type: null,
      postFocus: null
    };
    if (override) {
      options = helper.applyOptions(options, override);
    };
    if (options.input) {
      options.input.addEventListener("focus", function() {
        if (!_autoSuggestActive) {
          clearTimeout(_timer);
          _timer = setTimeout(render.delay, 300, options);
        };
      }, false);
      options.input.addEventListener("input", function() {
        clearTimeout(_timer);
        _timer = setTimeout(render.delay, 300, options);
      }, false);
    };
  };

  bind.navigateResults = function(event) {
    var elementToFocus = null;
    var focusIndex = null;
    var allSuggestItems = helper.eA(".auto-suggest-item");
    var _findInput = function() {
      if (event.target.classList.contains("auto-suggest-input")) {
        _currentInputOptions.input = event.target;
      };
    };
    var _findFocus = function() {
      for (var i = 0; i < allSuggestItems.length; i++) {
        if (allSuggestItems[i] == document.activeElement) {
          focusIndex = i;
        };
      };
    };
    var _keyEvents = function() {
      // up
      if (event.keyCode == 38) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = allSuggestItems[allSuggestItems.length - 1];
        } else {
          if (focusIndex > 2 && focusIndex <= allSuggestItems.length - 1) {
            elementToFocus = allSuggestItems[focusIndex - 3];
          } else {
            elementToFocus = _currentInputOptions.input;
          };
        };
      };
      // down
      if (event.keyCode == 40) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = allSuggestItems[0];
        } else {
          if (focusIndex < allSuggestItems.length - 3) {
            elementToFocus = allSuggestItems[focusIndex + 3];
          } else {
            elementToFocus = _currentInputOptions.input;
          };
        };
      };
      // right
      if (event.keyCode == 39 && document.activeElement != _currentInputOptions.input) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = allSuggestItems[0];
        } else {
          if (focusIndex >= 0 && focusIndex < allSuggestItems.length - 1) {
            elementToFocus = allSuggestItems[focusIndex + 1];
          } else {
            elementToFocus = _currentInputOptions.input;
          };
        };
      };
      // left
      if (event.keyCode == 37 && document.activeElement != _currentInputOptions.input) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = allSuggestItems[allSuggestItems.length - 1];
        } else {
          if (focusIndex > 0 && focusIndex <= allSuggestItems.length - 1) {
            elementToFocus = allSuggestItems[focusIndex - 1];
          } else {
            elementToFocus = _currentInputOptions.input;
          };
        };
      };
      // tab
      if (!event.shiftKey && event.keyCode == 9 && document.activeElement == _currentInputOptions.input) {
        event.preventDefault();
        elementToFocus = allSuggestItems[0];
      };
      if (!event.shiftKey && event.keyCode == 9 && document.activeElement == allSuggestItems[allSuggestItems.length - 1]) {
        event.preventDefault();
        elementToFocus = _currentInputOptions.postFocus;
        render.close();
      };
      // shift tab
      if (event.shiftKey && event.keyCode == 9 && document.activeElement == allSuggestItems[0]) {
        event.preventDefault();
        elementToFocus = _currentInputOptions.input;
      };
      if (event.shiftKey && event.keyCode == 9 && document.activeElement == _currentInputOptions.input) {
        render.close();
      };
    };
    _findInput();
    _findFocus();
    _keyEvents();
    if (elementToFocus) {
      elementToFocus.focus();
    };
  };

  var documentEvent = {};

  documentEvent.add = function() {
    document.addEventListener("click", documentEvent.clickOut, false);
    document.addEventListener("keydown", bind.navigateResults, false);
  };

  documentEvent.remove = function() {
    document.removeEventListener("click", documentEvent.clickOut, false);
    document.removeEventListener("keydown", bind.navigateResults, false);
  };

  documentEvent.clickOut = function(event) {
    if (!(event.target.classList.contains("auto-suggest-list")) && !(event.target.classList.contains("auto-suggest-input"))) {
      render.close();
    };
  };

  var render = {};

  render.delay = function(options) {
    mod.open();
    render.open(options);
  };

  render.open = function(options) {
    _currentInputOptions = options;
    var body = helper.e("body");
    var suggestItems = render.suggestItems(options);
    var _populateList = function(list) {
      var action = {
        fontawesomeIcon: function() {
          suggestItems.forEach(function(arrayItem) {
            var li = helper.node("li|class:auto-suggest-list-item");
            var button = helper.node("button|tabindex:1,class:auto-suggest-item");
            var icon = helper.node("span|class:auto-suggest-icon fa-" + arrayItem.name);
            if (arrayItem.styles.includes("solid")) {
              helper.addClass(icon, "fas");
            } else if (arrayItem.styles.includes("brands")) {
              helper.addClass(icon, "fab");
            };
            button.addEventListener("click", function() {
              link.render.autoSuggestIconAction(arrayItem);
            }, false);
            var text = helper.node("span:" + arrayItem.label + "|class:auto-suggest-icon-text");
            button.appendChild(icon);
            button.appendChild(text);
            li.appendChild(button);
            list.appendChild(li);
          });
        }
      };
      action[_currentInputOptions.type]();
    };
    var _renderAutoSuggest = function() {
      var autoSuggestInput = helper.e(".auto-suggest-input");
      var autoSuggest = helper.e(".auto-suggest");
      var autoSuggestList = helper.e(".auto-suggest-list");
      if (autoSuggest) {
        while (autoSuggestList.lastChild) {
          autoSuggestList.removeChild(autoSuggestList.lastChild);
        };
      } else {
        var box = {
          left: autoSuggestInput.getBoundingClientRect().left,
          top: autoSuggestInput.getBoundingClientRect().bottom + window.scrollY,
          width: autoSuggestInput.getBoundingClientRect().width
        };
        var autoSuggest = helper.node("div|class:auto-suggest list-unstyled");
        var autoSuggestList = helper.node("ul|class:auto-suggest-list list-unstyled");
        autoSuggest.appendChild(autoSuggestList);
        body.appendChild(autoSuggest);
        autoSuggest.setAttribute("style", "width: " + box.width + "px; top: " + box.top + "px; left: " + box.left + "px;");
        documentEvent.add();
      };
      _populateList(autoSuggestList);
    };
    if (suggestItems.length > 0) {
      _autoSuggestActive = true;
      _renderAutoSuggest();
    } else {
      render.close();
    };
  };

  render.close = function() {
    mod.close();
    var autoSuggest = helper.e(".auto-suggest");
    if (autoSuggest) {
      autoSuggest.remove();
      documentEvent.remove();
      _currentInputOptions = {};
      _autoSuggestActive = false;
    };
  };

  render.suggestItems = function() {
    var searchTerm = _currentInputOptions.input.value.replace(/^\s+/, "").replace(/\s+$/, "").toLowerCase();
    var action = {
      fontawesomeIcon: function() {
        if (searchTerm == "" || searchTerm == undefined) {
          return fontawesome.icons;
        } else {
          return fontawesome.icons.filter(function(item) {
            var match = false;
            if (item.name.toLowerCase().includes(searchTerm) || item.label.toLowerCase().includes(searchTerm)) {
              match = true;
            };
            item.search.forEach(function(item, index) {
              if (item.toLowerCase().includes(searchTerm)) {
                match = true;
              };
            });
            item.styles.forEach(function(item, index) {
              if (item.toLowerCase().includes(searchTerm)) {
                match = true;
              };
            });
            return match;
          });
        };
      }
    };
    return action[_currentInputOptions.type]();
  };

  var close = function() {
    render.close();
  };

  // exposed methods
  return {
    bind: bind,
    render: render,
    close: close
  };

})();
