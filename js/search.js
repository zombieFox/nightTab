var search = (function() {

  var bind = function() {
    var searchInput = helper.e(".search-input");
    var searchClear = helper.e(".search-clear");
    searchInput.addEventListener("input", function() {
      _updateState(this);
      _updateSearchClear();
      _findLinks();
    }, false);
    searchClear.addEventListener("click", function() {
      _updateState(this);
      _updateSearchClear();
      clear();
    }, false);
  };

  var _updateState = function(input) {
    if (input.value != "") {
      state.search = true;
    } else {
      state.search = false;
    };
  };

  var _updateSearchClear = function() {
    var searchInput = helper.e(".search-input");
    var searchClear = helper.e(".search-clear");
    if (state.search) {
      searchClear.removeAttribute("disabled");
    } else {
      searchClear.setAttribute("disabled", "");
    };
  };

  var _findLinks = function() {
    var searchInput = helper.e(".search-input");
    if (state.search) {
      var searchResult = [];
      bookmarks.get().forEach(function(arrayItem, index) {
        if (arrayItem.url.replace(/^https?\:\/\//i, "").replace(/\/$/, "").toLowerCase().includes(searchInput.value.toLowerCase()) || arrayItem.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
          var copy = JSON.parse(JSON.stringify(arrayItem));
          copy.index = index;
          searchResult.push(copy);
        };
      });
      links.clear();
      links.render(searchResult);
    } else {
      links.clear();
      links.render();
    };
  };

  var clear = function() {
    var searchInput = helper.e(".search-input");
    searchInput.value = "";
    searchInput.focus();
    links.clear();
    links.render();
  };

  var init = function() {
    bind();
  };

  // exposed methods
  return {
    init: init,
    clear: clear
  };

})();
