var search = (function() {

  var bind = function() {
    var searchInput = helper.e(".search-input");
    var searchClear = helper.e(".search-clear");
    searchInput.addEventListener("input", function() {
      _toggle(this);
      _searchClear();
      render();
    }, false);
    searchClear.addEventListener("click", function() {
      _toggle(this);
      _searchClear();
      clear();
    }, false);
  };

  var _toggle = function(input) {
    if (input.value != "") {
      state.get().header.search.searching = true;
    } else {
      state.get().header.search.searching = false;
    };
  };

  var _searchClear = function() {
    var searchInput = helper.e(".search-input");
    var searchClear = helper.e(".search-clear");
    if (state.get().header.search.searching) {
      searchClear.removeAttribute("disabled");
    } else {
      searchClear.setAttribute("disabled", "");
    };
  };

  var render = function() {
    var searchInput = helper.e(".search-input");
    if (state.get().header.search.searching) {
      var searchedBookmarks = [];
      bookmarks.get().forEach(function(arrayItem, index) {
        if (arrayItem.url.replace(/^https?\:\/\//i, "").replace(/\/$/, "").toLowerCase().includes(searchInput.value.toLowerCase().replace(/\s/g, "")) || arrayItem.name.toLowerCase().includes(searchInput.value.toLowerCase().replace(/\s/g, ""))) {
          var copy = JSON.parse(JSON.stringify(arrayItem));
          copy.index = index;
          searchedBookmarks.push(copy);
        };
      });
      link.clear();
      link.render(searchedBookmarks);
    } else {
      link.clear();
      link.render();
    };
  };

  var update = function() {
    var search = helper.e(".search");
    search.setAttribute("action", state.get().header.search.engine[state.get().header.search.engine.selected].url);
  };

  var clear = function() {
    var searchInput = helper.e(".search-input");
    searchInput.value = "";
    searchInput.focus();
    link.clear();
    link.render();
  };

  var init = function() {
    bind();
    update();
  };

  // exposed methods
  return {
    init: init,
    render: render,
    update: update,
    clear: clear
  };

})();
