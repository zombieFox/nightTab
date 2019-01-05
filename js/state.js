var state = (function() {

  var current = {
    header: {
      date: {
        characterLength: "short",
        show: {
          date: true,
          day: false,
          month: true,
          year: false,
          seperator: true
        }
      },
      clock: {
        hour24: true,
        show: {
          seconds: true,
          minutes: true,
          hours: true,
          seperator: true,
          meridiem: true
        }
      },
      editAdd: {
        active: true,
      },
      accent: {
        active: true,
      },
      search: {
        searching: false,
        active: true,
        grow: true,
        engine: {
          selected: "google",
          google: {
            url: "https://www.google.com/search"
          },
          duckduckgo: {
            url: "https://duckduckgo.com/"
          },
          giphy: {
            url: "https://giphy.com/search/"
          },
          custom: {
            url: ""
          }
        }
      },
      buttons: {
        show: true
      }
    },
    link: {
      editObject: null,
      action: null,
      newTab: false,
      style: "block",
      sort: "none"
    },
    layout: {
      alignment: "left",
      container: "wide",
      scrollPastEnd: true,
      theme: {
        r: 0,
        g: 255,
        b: 0,
      },
    },
    edit: {
      active: false
    },
    menu: {
      open: false
    },
    modal: {
      active: false
    }
  };

  var get = function() {
    return current;
  };

  var restore = function(data) {
    if ("state" in data) {
      current = data.state;
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

  var init = function() {
    if (data.load()) {
      restore(data.load());
    };
  };

  return {
    init: init,
    get: get,
    change: change,
    restore: restore
  };

})();
