var search = (function() {

  var bind = function() {
    var searchInput = helper.e(".search-input");
    var searchClear = helper.e(".search-clear");
    searchInput.addEventListener("input", function() {
      _toggle(this);
      _searchClear();
      link.clear();
      link.render();
    }, false);
    searchClear.addEventListener("click", function() {
      _toggle(this);
      _searchClear();
      clear();
    }, false);
  };

  var _toggle = function(input) {
    if (input.value != "") {
      helper.setObject({
        object: state.get(),
        path: "search",
        newValue: true
      });
    } else {
      helper.setObject({
        object: state.get(),
        path: "search",
        newValue: false
      });
    };
  };

  var _searchClear = function() {
    var searchInput = helper.e(".search-input");
    var searchClear = helper.e(".search-clear");
    if (state.get().search) {
      searchClear.removeAttribute("disabled");
    } else {
      searchClear.setAttribute("disabled", "");
    };
  };

  var get = function() {
    var searchInput = helper.e(".search-input");
    if (state.get().search) {
      var searchedBookmarks = {
        total: 0,
        matching: []
      };
      searchedBookmarks.total = bookmarks.get().length;
      bookmarks.get().forEach(function(arrayItem, index) {
        if (arrayItem.url.replace(/^https?\:\/\//i, "").replace(/\/$/, "").toLowerCase().includes(searchInput.value.toLowerCase().replace(/\s/g, "")) || arrayItem.name.toLowerCase().includes(searchInput.value.toLowerCase().replace(/\s/g, ""))) {
          var bookmarkDataCopy = JSON.parse(JSON.stringify(arrayItem));
          searchedBookmarks.matching.push(bookmarkDataCopy);
        };
      });
      return searchedBookmarks;
    };
  };

  var render = function() {
    var search = helper.e(".search");
    var searchInput = helper.e(".search-input");
    if (state.get().bookmarks.link.show) {
      searchInput.setAttribute("placeholder", "Find or Search");
    } else {
      searchInput.setAttribute("placeholder", "Search");
    };
    search.setAttribute("action", state.get().header.search.engine[state.get().header.search.engine.selected].url);
  };

  var clear = function() {
    var searchInput = helper.e(".search-input");
    searchInput.value = "";
    searchInput.focus();
    link.clear();
    link.render();
  };

  var _focus = function() {
    if (state.get().header.search.focus) {
      window.addEventListener("load", function(event) {
        helper.e(".search-input").focus();
      });
    };
  };

  var init = function() {
    bind();
    render();
    _focus();
  };

  // exposed methods
  return {
    init: init,
    get: get,
    render: render,
    clear: clear
  };

})();
