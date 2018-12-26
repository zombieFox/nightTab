var state = (function() {

  var get = function() {
    var current = {
      bookmarks: bookmarks.get(),
      control: control.get(),
      theme: theme.get()
    };
    return current;
  };

  return {
    get: get
  };

})();
