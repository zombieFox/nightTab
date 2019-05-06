var autoSuggest = (function() {

  var _timer_autoSuggest = null;
  var _currentInput;

  function _delayRender(options) {
    render(options);
  };

  function bind(override) {
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

  function _bind_autoSuggest(options) {
    if (options.input) {
      options.input.addEventListener("focus", function() {
        clearTimeout(_timer_autoSuggest);
        _timer_autoSuggest = setTimeout(_delayRender, 200, options);
      }, false);
      options.input.addEventListener("input", function() {
        clearTimeout(_timer_autoSuggest);
        _timer_autoSuggest = setTimeout(_delayRender, 200, options);
      }, false);
      options.input.addEventListener("keydown", function(event) {
        if (event.keyCode == 13) {
          destroy(options);
        };
      }, false);
    };
  };

  function _navigateResults(event) {
    var elementToFocus;
    var currentFocus = null;
    var all_anchor = helper.eA(".auto-suggest-link");
    var _findInput = function() {
      if (event.target.classList.contains("auto-suggest-field")) {
        _currentInput = event.target;
      };
    };
    var _findFocus = function() {
      for (var i = 0; i < all_anchor.length; i++) {
        if (all_anchor[i] == document.activeElement) {
          currentFocus = i;
        };
      };
    };
    _findInput();
    _findFocus();
    // down key or right key or tab key
    if (event.keyCode == 40 || event.keyCode == 39 || event.keyCode == 9) {
      event.preventDefault();
      if (currentFocus == null) {
        elementToFocus = all_anchor[0];
      } else {
        if (currentFocus < all_anchor.length - 1) {
          elementToFocus = all_anchor[currentFocus + 1];
        } else {
          elementToFocus = all_anchor[currentFocus];
        };
      };
      elementToFocus.focus();
    };
    // up key or left key or tab and shift key
    if (event.keyCode == 38 || event.keyCode == 37 || event.keyCode == 9 && event.shiftKey) {
      event.preventDefault();
      if (currentFocus == null) {
        elementToFocus = _currentInput;
      } else {
        if (currentFocus == 0) {
          elementToFocus = _currentInput;
        } else if (currentFocus > 0) {
          elementToFocus = all_anchor[currentFocus - 1];
        } else {
          elementToFocus = all_anchor[0];
        };
      };
      elementToFocus.focus();
    };
  };

  function _addDocumentEvent() {
    document.addEventListener("click", _checkClick, false);
    document.addEventListener("keydown", _navigateResults, false);
  };

  function _removeDocumentEvent() {
    document.removeEventListener("click", _checkClick, false);
    document.removeEventListener("keydown", _navigateResults, false);
  };

  function _checkClick(event) {
    if (!(event.target.classList.contains("auto-suggest-field"))) {
      destroy();
    };
  };

  function destroy() {
    var autoSuggestList = helper.e(".auto-suggest-list");
    if (autoSuggestList) {
      autoSuggestList.remove();
    };
    _removeDocumentEvent();
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
            return match;
          });
        };
      }
    };
    return action[options.type]();
  };

  function render(options) {
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
              if (arrayItem.styles.includes("solid")) {
                helper.e("#link-form-icon").setAttribute("class", "link-form-icon fas fa-" + arrayItem.name);
              } else if (arrayItem.styles.includes("brands")) {
                helper.e("#link-form-icon").setAttribute("class", "link-form-icon fab fa-" + arrayItem.name);
              };
              helper.e(".link-form-input-icon").value = arrayItem.name;
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
      var autoSuggestList = helper.e(".auto-suggest-list");
      if (autoSuggestList) {
        while (autoSuggestList.lastChild) {
          autoSuggestList.removeChild(autoSuggestList.lastChild);
        };
      } else {
        var style = {
          left: _currentInput.getBoundingClientRect().left,
          top: _currentInput.getBoundingClientRect().bottom + window.scrollY,
          width: _currentInput.getBoundingClientRect().width
        };
        var autoSuggestList = helper.node("ul|class:auto-suggest-list list-unstyled");
        body.appendChild(autoSuggestList);
        autoSuggestList.setAttribute("style", "width: " + style.width + "px; top: " + style.top + "px; left: " + style.left + "px;");
        _addDocumentEvent();
      };
      _populateList(autoSuggestList);
    };
    //
    // if (searchTerm != "") {
    //   console.log(suggestItems);
    if (suggestItems.length > 0) {
      _render_autoSuggestList();
    } else {
      destroy();
    };
    // } else {
    //   destroy();
    // };
  };

  // exposed methods
  return {
    bind: bind,
    destroy: destroy
  };

})();
