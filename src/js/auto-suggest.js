var autoSuggest = (function() {

  var _timer = null;
  var _currentInputOptions = {};
  var _autoSuggestActive = false;

  var _delayRender = function(options) {
    render(options);
  };

  var bind = function(override) {
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
          _timer = setTimeout(_delayRender, 300, options);
        };
      }, false);
      options.input.addEventListener("input", function() {
        clearTimeout(_timer);
        _timer = setTimeout(_delayRender, 300, options);
      }, false);
    };
  };

  var _navigateResults = function(event) {
    var elementToFocus = null;
    var focusIndex = null;
    var allSuggestItems = helper.eA(".auto-suggest-link");
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
        destroy();
      };
      // shift tab
      if (event.shiftKey && event.keyCode == 9 && document.activeElement == allSuggestItems[0]) {
        event.preventDefault();
        elementToFocus = _currentInputOptions.input;
      };
      if (event.shiftKey && event.keyCode == 9 && document.activeElement == _currentInputOptions.input) {
        destroy();
      };
    };
    _findInput();
    _findFocus();
    _keyEvents();
    if (elementToFocus) {
      elementToFocus.focus();
    };
  };

  var _addDocumentEvent = function() {
    document.addEventListener("click", _checkClick, false);
    document.addEventListener("keydown", _navigateResults, false);
  };

  var _removeDocumentEvent = function() {
    document.removeEventListener("click", _checkClick, false);
    document.removeEventListener("keydown", _navigateResults, false);
  };

  var _checkClick = function(event) {
    if (!(event.target.classList.contains("auto-suggest-list")) && !(event.target.classList.contains("auto-suggest-input"))) {
      destroy();
    };
  };

  var destroy = function() {
    var autoSuggestList = helper.e(".auto-suggest-list");
    if (autoSuggestList) {
      autoSuggestList.remove();
      _removeDocumentEvent();
      helper.setObject({
        object: state.get(),
        path: "autoSuggest",
        newValue: false
      });
      _currentInputOptions = {};
      _autoSuggestActive = false;
    };
  };

  var _getSuggestItems = function() {
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

  var render = function(options) {
    _currentInputOptions = options;
    var body = helper.e("body");
    var suggestItems = _getSuggestItems(options);
    var _populateList = function(list) {
      var action = {
        fontawesomeIcon: function() {
          suggestItems.forEach(function(arrayItem) {
            var li = helper.node("li|class:auto-suggest-list-item");
            var anchor = helper.node("a|href:#,tabindex:1,class:auto-suggest-link");
            var icon = helper.node("span|class:auto-suggest-icon fa-" + arrayItem.name);
            if (arrayItem.styles.includes("solid")) {
              helper.addClass(icon, "fas");
            } else if (arrayItem.styles.includes("brands")) {
              helper.addClass(icon, "fab");
            };
            anchor.addEventListener("click", function() {
              link.autoSuggestIconAction(arrayItem);
            }, false);
            var text = helper.node("span:" + arrayItem.label + "|class:auto-suggest-icon-text");
            anchor.appendChild(icon);
            anchor.appendChild(text);
            li.appendChild(anchor);
            list.appendChild(li);
          });
        }
      };
      action[_currentInputOptions.type]();
    };

    var _render_autoSuggestList = function() {
      var autoSuggestWrapper = helper.e(".auto-suggest-wrapper");
      var autoSuggestList = helper.e(".auto-suggest-list");
      if (autoSuggestList) {
        while (autoSuggestList.lastChild) {
          autoSuggestList.removeChild(autoSuggestList.lastChild);
        };
      } else {
        var style = {
          left: autoSuggestWrapper.getBoundingClientRect().left,
          top: autoSuggestWrapper.getBoundingClientRect().bottom + window.scrollY,
          width: autoSuggestWrapper.getBoundingClientRect().width
        };
        var autoSuggestList = helper.node("ul|class:auto-suggest-list list-unstyled");
        body.appendChild(autoSuggestList);
        autoSuggestList.setAttribute("style", "width: " + style.width + "px; top: " + style.top + "px; left: " + style.left + "px;");
        _addDocumentEvent();
      };
      _populateList(autoSuggestList);
    };
    if (suggestItems.length > 0) {
      _autoSuggestActive = true;
      helper.setObject({
        object: state.get(),
        path: "autoSuggest",
        newValue: true
      });
      _render_autoSuggestList();
    } else {
      destroy();
    };
  };

  // exposed methods
  return {
    bind: bind,
    destroy: destroy
  };

})();
