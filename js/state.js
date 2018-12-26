var state = (function() {

  var get = function() {
    var current = {
      bookmarks: bookmarks.get(),
      accent: theme.get()
    };
    return current;
  };

  return {
    get: get
  };

})();
