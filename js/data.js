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
    var data = {
      state: state.get(),
      bookmarks: bookmarks.get()
    };
    set(saveName, JSON.stringify(data));
    console.log("data saved");
  };

  var load = function() {
    var data = JSON.parse(get(saveName));
    return data;
  };

  var wipe = function() {
    clear(saveName);
  };

  return {
    save: save,
    clear: clear,
    set: set,
    get: get,
    wipe: wipe,
    load: load
  };

})();
