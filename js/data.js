var data = (function() {

  var saveName = "nitghTab";

  var set = function(key, data) {
    localStorage.setItem(key, data);
  };

  var setOption = function(options) {
    options && localStorage.setItem(options.key || saveName, JSON.stringify({
      version: options.version || version.get(),
      state: options.state || state.get(),
      bookmarks: options.bookmarks || bookmarks.get()
    }));
  };

  var get = function(key = saveName) {
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
  };

  var wipe = function() {
    remove(saveName);
  };

  var load = function() {
    return JSON.parse(get(saveName));
  };

  var restore = function() {
    var data = load();
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
    restore();
  };

  return {
    init: init,
    save: save,
    remove: remove,
    set: set,
    get: get,
    load: load,
    wipe: wipe,
    restore: restore,
    setOption: setOption,
  };

})();
