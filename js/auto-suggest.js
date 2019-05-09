var autoSuggest = (function() {

  var _timer_autoSuggest = null;
  var _currentInput;

  var _delayRender = function(options) {
    render(options);
  };

  var bind = function(override) {
    var options = {
      input: null,
      type: null
    };
    if (override) {
      options = helper.applyOptions(options, override);
    };
    if (options.input) {
      _bind_autoSuggest(options);
    };
  };

  var _bind_autoSuggest = function(options) {
    if (options.input) {
      options.input.addEventListener("focus", function() {
        clearTimeout(_timer_autoSuggest);
        _timer_autoSuggest = setTimeout(_delayRender, 300, options);
      }, false);
      options.input.addEventListener("input", function() {
        clearTimeout(_timer_autoSuggest);
        _timer_autoSuggest = setTimeout(_delayRender, 300, options);
      }, false);
    };
  };

  var _navigateResults = function(event) {
    var elementToFocus = null;
    var focusIndex = null;
    var all_anchor = helper.eA(".auto-suggest-link");
    var _findInput = function() {
      if (event.target.classList.contains("auto-suggest-input")) {
        _currentInput = event.target;
      };
    };
    var _findFocus = function() {
      for (var i = 0; i < all_anchor.length; i++) {
        if (all_anchor[i] == document.activeElement) {
          focusIndex = i;
        };
      };
    };
    var _keyEvents = function() {
      // up
      if (event.keyCode == 38) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = all_anchor[all_anchor.length - 1];
        } else {
          if (focusIndex > 2 && focusIndex <= all_anchor.length - 1) {
            elementToFocus = all_anchor[focusIndex - 3];
          } else {
            elementToFocus = _currentInput;
          };
        };
      };
      // down
      if (event.keyCode == 40) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = all_anchor[0];
        } else {
          if (focusIndex < all_anchor.length - 3) {
            elementToFocus = all_anchor[focusIndex + 3];
          } else {
            elementToFocus = _currentInput;
          };
        };
      };
      // right
      if (event.keyCode == 39 || event.keyCode == 9) {
        if (document.activeElement != _currentInput) {
          event.preventDefault();
          if (focusIndex == null) {
            elementToFocus = all_anchor[0];
          } else {
            if (focusIndex >= 0 && focusIndex < all_anchor.length - 1) {
              elementToFocus = all_anchor[focusIndex + 1];
            } else {
              elementToFocus = _currentInput;
            };
          };
        };
      };
      // left
      if (event.keyCode == 37 || event.keyCode == 9 && event.shiftKey) {
        if (document.activeElement != _currentInput) {
          event.preventDefault();
          if (focusIndex == null) {
            elementToFocus = all_anchor[all_anchor.length - 1];
          } else {
            if (focusIndex > 0 && focusIndex <= all_anchor.length - 1) {
              elementToFocus = all_anchor[focusIndex - 1];
            } else {
              elementToFocus = _currentInput;
            };
          };
        };
      };
      // tab
      if (event.keyCode == 9) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = all_anchor[0];
        } else {
          if (focusIndex >= 0 && focusIndex < all_anchor.length - 1) {
            elementToFocus = all_anchor[focusIndex + 1];
          } else {
            elementToFocus = _currentInput;
          };
        };
      };
      // shift tab
      if (event.shiftKey && event.keyCode == 9) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = all_anchor[all_anchor.length - 1];
        } else {
          if (focusIndex > 0 && focusIndex <= all_anchor.length - 1) {
            elementToFocus = all_anchor[focusIndex - 1];
          } else {
            elementToFocus = _currentInput;
          };
        };
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
    };
  };

  var _getSuggestItems = function(options) {
    var searchTerm = options.input.value.replace(/^\s+/, "").replace(/\s+$/, "").toLowerCase();
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
    return action[options.type]();
  };

  var render = function(options) {
    _currentInput = options.input;
    var body = helper.e("body");
    var suggestItems = _getSuggestItems(options);
    // console.log(suggestItems);
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
      action[options.type]();
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
      autoSuggestList.scrollTop = 0;
    };

    if (suggestItems.length > 0) {
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
