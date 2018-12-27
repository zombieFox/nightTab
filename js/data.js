var data = (function() {

  var saveName = "nitghTab";

  var set = function(key, data) {
    localStorage.setItem(key, data);
  };

  var get = function(key) {
    return localStorage.getItem(key);
  };

  var clear = function(key) {
    localStorage.removeItem(key);
  };

  var save = function() {
    set(saveName, JSON.stringify(state.get()));
    console.log("data saved");
  };

  var restore = function() {
    var data = JSON.parse(get(saveName));
    if (data) {
      bookmarks.restore(data.bookmarks);
      theme.restore(data.theme);
      control.restore(data.control);
      console.log("data restored");
    };
  };

  var wipe = function() {
    clear(saveName);
  };

  var init = function() {
    if (get(saveName)) {
      restore();
    } else {
      save();
    };
  };

  return {
    init: init,
    save: save,
    clear: clear,
    set: set,
    get: get,
    wipe: wipe,
    restore: restore
  };

})();
