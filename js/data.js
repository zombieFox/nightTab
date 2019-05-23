var data = (function() {

  var saveName = "nitghTab";

  var set = function(key, data) {
    localStorage.setItem(key, data);
  };

  var get = function(key) {
    return localStorage.getItem(key);
  };

  var remove = function(key) {
    localStorage.removeItem(key);
  };

  var save = function() {
    var data = {
      version: version.get(),
      state: state.get(),
      bookmarks: bookmarks.get()
    };
    set(saveName, JSON.stringify(data));
    console.log("data saved");
  };

  var wipe = function() {
    remove(saveName);
  };

  var load = function() {
    var data = JSON.parse(get(saveName));
    return data;
  };

  var restore = function(data) {
    if (data) {
      if (!("version" in data) || data.version != version.get()) {
        console.log("data version " + data.version + " found less than current");
        data = update.run(data);
        set(saveName, JSON.stringify(data));
      } else {
        console.log("data version " + version.get() + " no need to run update");
      };
    } else {
      console.log("no data found to load");
    };
  };

  var init = function() {
    restore(load());
  };

  return {
    init: init,
    save: save,
    remove: remove,
    set: set,
    get: get,
    load: load,
    wipe: wipe,
    restore: restore
  };

})();
