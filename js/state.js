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
          separator: true
        }
      },
      clock: {
        hour24: true,
        show: {
          seconds: true,
          minutes: true,
          hours: true,
          separator: true,
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
        focus: false,
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
      show: {
        active: true,
        name: true,
        url: true
      },
      editObject: null,
      newTab: false,
      style: "block",
      sort: "none"
    },
    layout: {
      alignment: {
        horizontal: "left",
        vertical: "top"
      },
      container: "wide",
      scrollPastEnd: true,
      theme: {
        current: {
          r: 0,
          g: 255,
          b: 0,
        },
        random: {
          active: false,
          style: "any"
        }
      },
    },
    background: {
      image: {
        active: false,
        url: "../background/gray-steps.jpg",
        blur: 0,
        opacity: 1,
        grayscale: 0,
        accentOpacity: 0
      }
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
    change: change
  };

})();
