var search = (function() {

  var bind = {};

  bind.input = function() {
    var searchInput = helper.e(".search-input");
    searchInput.addEventListener("input", function() {
      mod.searching.set();
      render.clear.button();
      link.render.clear();
      link.render.item.all();
      sortable(".link-area");
    }, false);
  };

  bind.clear = function() {
    var searchClear = helper.e(".search-clear");
    searchClear.addEventListener("click", function() {
      render.clear.input();
      mod.searching.set();
      render.clear.button();
      link.render.clear();
      link.render.item.all();
      sortable(".link-area");
    }, false);
  };

  var mod = {};

  mod.searching = {
    set: function() {
      helper.setObject({
        object: state.get(),
        path: "search",
        newValue: helper.e(".search-input").value != ""
      });
    }
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
        if (arrayItem.url != null) {
          if (arrayItem.url.replace(/^https?\:\/\//i, "").replace(/\/$/, "").toLowerCase().includes(searchInput.value.toLowerCase().replace(/\s/g, ""))) {
            var bookmarkDataCopy = JSON.parse(JSON.stringify(arrayItem));
            searchedBookmarks.matching.push(bookmarkDataCopy);
          };
        } else if (arrayItem.name != null) {
          if (arrayItem.name.toLowerCase().includes(searchInput.value.toLowerCase().replace(/\s/g, ""))) {
            var bookmarkDataCopy = JSON.parse(JSON.stringify(arrayItem));
            searchedBookmarks.matching.push(bookmarkDataCopy);
          };
        };
      });
      return searchedBookmarks;
    };
  };

  var render = {};

  render.engine = function() {
    var search = helper.e(".search");
    var searchInput = helper.e(".search-input");
    var placeholder = "";
    if (state.get().link.show) {
      placeholder = "Find bookmarks or search";
    } else {
      placeholder = "Search";
    };
    placeholder = placeholder + " " + state.get().header.search.engine[state.get().header.search.engine.selected].name;
    searchInput.setAttribute("placeholder", placeholder);
    search.setAttribute("action", state.get().header.search.engine[state.get().header.search.engine.selected].url);
  };

  render.clear = {};

  render.clear.input = function() {
    var searchInput = helper.e(".search-input");
    searchInput.value = "";
    searchInput.focus();
  };

  render.clear.button = function() {
    var searchClear = helper.e(".search-clear");
    if (state.get().search) {
      searchClear.removeAttribute("disabled");
    } else {
      searchClear.setAttribute("disabled", "");
    };
  };

  render.focus = function() {
    if (state.get().header.search.focus) {
      window.addEventListener("load", function(event) {
        helper.e(".search-input").focus();
      });
    };
  };

  render.searching = function() {
    var html = helper.e("html");
    var searchInput = helper.e(".search-input");
    if (searchInput.value != "") {
      helper.addClass(html, "is-header-searching");
    } else {
      helper.removeClass(html, "is-header-searching");
    };
  };

  var init = function() {
    bind.input();
    bind.clear();
    mod.searching.set();
    render.engine();
    render.focus();
    render.searching();
  };

  // exposed methods
  return {
    init: init,
    get: get,
    render: render
  };

})();
