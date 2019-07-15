var search = (function() {

  var bind = function() {
    var searchInput = helper.e(".search-input");
    var searchClear = helper.e(".search-clear");
    searchInput.addEventListener("input", function() {
      _toggle();
      render.clear.button();
      link.clear();
      link.render.item.all();
      sortable(".link-area");
    }, false);
    searchClear.addEventListener("click", function() {
      render.clear.input();
      _toggle();
      render.clear.button();
      link.clear();
      link.render.item.all();
      sortable(".link-area");
    }, false);
  };

  var _toggle = function() {
    var html = helper.e("html");
    var searchInput = helper.e(".search-input");
    if (searchInput.value != "") {
      helper.setObject({
        object: state.get(),
        path: "search",
        newValue: true
      });
      helper.addClass(html, "is-header-searching");
    } else {
      helper.setObject({
        object: state.get(),
        path: "search",
        newValue: false
      });
      helper.removeClass(html, "is-header-searching");
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

  render.clear = {
    input: function() {
      var searchInput = helper.e(".search-input");
      searchInput.value = "";
      searchInput.focus();
    },
    button: function() {
      var searchClear = helper.e(".search-clear");
      if (state.get().search) {
        searchClear.removeAttribute("disabled");
      } else {
        searchClear.setAttribute("disabled", "");
      };
    }
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
    render.engine();
    _toggle();
    _focus();
  };

  // exposed methods
  return {
    init: init,
    get: get,
    render: render
  };

})();
