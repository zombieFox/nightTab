var state = (function() {

  var current = {
    bookmarks: bookmarks.get(),
    edit: {
      active: false
    },
    layout: {
      alignment: "left",
      view: "block"
    },
    links: {
      editIndex: null,
      action: null
    },
    search: {
      searching: false,
      active: true,
      engine: {
        selected: "google",
        google: {
          name: "google",
          url: "https://www.google.com/search"
        },
        duckduckgo: {
          name: "google",
          url: "https://duckduckgo.com/"
        },
        custom: {
          url: ""
        }
      }
    },
    sort: {
      view: "none"
    },
    clock: {
      active: true,
      hour24: true,
      show: {
        seconds: true,
        seperator: true,
        meridiem: true
      }
    },
    theme: {
      r: 0,
      g: 255,
      b: 0,
    },
    menu: {
      open: false
    }
  };

  var get = function() {
    return current;
  };

  var restore = function(object) {
    if (object) {
      current = object;
    };
  };

  var change = function(override) {
    var options = {
      path: null,
      value: null
    };
    if (override) {
      options = helper.applyOptions(options, override);
    };
    if (options.path != null) {
      helper.setObject({
        path: options.path,
        object: current,
        newValue: options.value
      });
    };
  };

  return {
    get: get,
    change: change,
    restore: restore
  };

})();
