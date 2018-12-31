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
      state.get().search.searching = true;
    } else {
      state.get().search.searching = false;
    };
  };

  var _searchClear = function() {
    var searchInput = helper.e(".search-input");
    var searchClear = helper.e(".search-clear");
    if (state.get().search.searching) {
      searchClear.removeAttribute("disabled");
    } else {
      searchClear.setAttribute("disabled", "");
    };
  };

  var render = function() {
    var searchInput = helper.e(".search-input");
    if (state.get().search.searching) {
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

  var update = function() {
    var search = helper.e(".search");
    search.setAttribute("action", state.get().search.engine[state.get().search.engine.selected].url);
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
