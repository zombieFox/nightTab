var search = (function() {

  var bind = {};

  bind.input = function() {
    if (state.get.current().header.search.show) {
      var searchInput = helper.e(".search-input");
      searchInput.addEventListener("input", function() {
        check();
      }, false);
    };
  };

  bind.clear = function() {
    if (state.get.current().header.search.show) {
      var searchClear = helper.e(".search-clear");
      searchClear.addEventListener("click", function() {
        mod.searching.close();
        render.clear.input();
        render.clear.button();
        render.searching();
        link.groupAndItems();
      }, false);
    };
  };

  var mod = {};

  mod.searching = {
    open: function() {
      helper.setObject({
        object: state.get.current(),
        path: "search",
        newValue: true
      });
    },
    close: function() {
      helper.setObject({
        object: state.get.current(),
        path: "search",
        newValue: false
      });
    },
    get: function() {
      var searchInput = helper.e(".search-input");
      var string = searchInput.value.toLowerCase().replace(/\s/g, "");
      if (state.get.current().search) {
        bookmarks.get().forEach(function(arrayItem, index) {
          arrayItem.items.forEach(function(arrayItem, index) {
            var matchUrl = (arrayItem.url != null) && (arrayItem.url.replace(/^https?\:\/\//i, "").replace(/\/$/, "").toLowerCase().includes(string));
            var matchName = (arrayItem.name != null) && (arrayItem.name.toLowerCase().replace(/\s/g, "").includes(string));
            arrayItem.searchMatch = false;
            if (matchUrl || matchName) {
              arrayItem.searchMatch = true;
            };
          });
        });
      };
    },
    clear: function() {
      bookmarks.get().forEach(function(arrayItem, index) {
        arrayItem.items.forEach(function(arrayItem, index) {
          arrayItem.searchMatch = false;
        });
      });
    },
    count: {
      all: function() {
        var searchResultCount = 0;
        bookmarks.get().forEach(function(arrayItem, index) {
          arrayItem.items.forEach(function(arrayItem, index) {
            if (arrayItem.searchMatch) {
              searchResultCount = searchResultCount + 1;
            };
          });
        });
        return searchResultCount;
      },
      group: function(index) {
        var searchResultCount = 0;
        if (bookmarks.get()[index]) {
          bookmarks.get()[index].items.forEach(function(arrayItem, index) {
            if (arrayItem.searchMatch) {
              searchResultCount = searchResultCount + 1;
            };
          });
        };
        return searchResultCount;
      }
    }
  };

  var render = {};

  render.engine = function() {
    if (state.get.current().header.search.show) {
      var search = helper.e(".search");
      var searchInput = helper.e(".search-input");
      var placeholder = "";
      if (state.get.current().link.show) {
        placeholder = "Find bookmarks or search";
      } else {
        placeholder = "Search";
      };
      placeholder = placeholder + " " + state.get.current().header.search.engine[state.get.current().header.search.engine.selected].name;
      searchInput.setAttribute("placeholder", placeholder);
      search.setAttribute("action", state.get.current().header.search.engine[state.get.current().header.search.engine.selected].url);
    };
  };

  render.clear = {};

  render.clear.input = function() {
    var searchInput = helper.e(".search-input");
    searchInput.value = "";
    searchInput.focus();
  };

  render.clear.button = function() {
    var searchClear = helper.e(".search-clear");
    if (state.get.current().search) {
      searchClear.removeAttribute("disabled");
    } else {
      searchClear.setAttribute("disabled", "");
    };
  };

  render.focus = function() {
    if (state.get.current().header.search.focus) {
      window.addEventListener("load", function(event) {
        helper.e(".search-input").focus();
      });
    };
  };

  render.searching = function() {
    var html = helper.e("html");
    if (state.get.current().search) {
      helper.addClass(html, "is-header-searching");
    } else {
      helper.removeClass(html, "is-header-searching");
    };
  };

  render.check = function() {
    var searchInput = helper.e(".search-input");
    if (helper.checkValueString(searchInput.value)) {
      mod.searching.open();
    } else {
      mod.searching.close();
    };
  };

  var check = function() {
    render.check();
    render.searching();
    render.clear.button();
    link.groupAndItems();
  };

  var init = function() {
    bind.input();
    bind.clear();
    mod.searching.close();
    mod.searching.clear();
    render.engine();
    render.focus();
    render.searching();
  };

  // exposed methods
  return {
    init: init,
    mod: mod,
    bind: bind,
    render: render,
    check: check
  };

})();
