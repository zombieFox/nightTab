var search = (function() {

  var bind = function() {
    var searchInput = helper.e(".search-input");
    var searchClear = helper.e(".search-clear");
    searchClear.addEventListener("click", function() {
      if (search.value != "") {
        searchInput.value = "";
      };
      updateSearchClear();
      searchInput.focus();
      links.clear();
      links.render();
    }, false);
    searchInput.addEventListener("input", function() {
      _findResults(this.value);
    }, false);
    searchInput.addEventListener("keyup", function() {
      updateSearchClear();
    }, false);
  };

  var updateSearchClear = function() {
    var searchInput = helper.e(".search-input");
    var searchClear = helper.e(".search-clear");
    if (searchInput.value != "") {
      helper.removeClass(searchClear, "is-hidden");
    } else {
      helper.addClass(searchClear, "is-hidden");
    }
  };

  var _findResults = function(string) {
    var searchResult = [];
    bookmarks.get().forEach(function(arrayItem, index) {
      if (arrayItem.url.replace(/^https?\:\/\//i, "").replace(/\/$/, "").toLowerCase().includes(string.toLowerCase()) || arrayItem.name.toLowerCase().includes(string.toLowerCase())) {
        searchResult.push(arrayItem);
      };
      links.clear();
      links.render(searchResult);
    });
  };

  var clear = function() {};

  var render = function() {};

  var init = function() {
    bind();
  };

  // exposed methods
  return {
    init: init,
    render: render,
    clear: clear
  };

})();
