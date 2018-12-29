var state = (function() {

  var get = function() {
    var current = {
      bookmarks: bookmarks.get(),
      layout: layout.get(),
      control: control.get(),
      theme: theme.get(),
      clock: clock.get()
    };
    return current;
  };

  return {
    get: get
  };

})();
