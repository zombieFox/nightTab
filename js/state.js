var state = (function() {

  var current = {
    header: {
      clock: {
        hour24: true,
        show: {
          hours: true,
          minutes: true,
          seconds: true,
          separator: true,
          meridiem: true
        }
      },
      date: {
        show: {
          day: false,
          date: true,
          month: true,
          year: false,
          separator: true
        },
        character: {
          length: "short"
        }
      },
      search: {
        show: true,
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
      alignment: {
        horizontal: "left",
        vertical: "top"
      },
      editAdd: {
        show: true,
      },
      accent: {
        show: true,
      },
      shade: {
        show: true,
        style: "scroll",
        opacity: 0.95,
        border: {
          top: false,
          bottom: false
        }
      }
    },
    bookmarks: {
      show: {
        link: true,
        name: true,
        url: true
      },
      newTab: false,
      edit: false,
      editObject: null,
      style: "block",
      sort: "none"
    },
    layout: {
      width: "wide",
      scrollPastEnd: true,
      title: "New Tab",
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
      }
    },
    background: {
      image: {
        show: false,
        url: "../background/gray-steps.jpg",
        blur: 0,
        opacity: 1,
        grayscale: 0,
        accent: 0
      }
    },
    search: false,
    menu: false,
    modal: false
  };

  var get = function() {
    return current;
  };

  var restore = function(data) {
    if ("state" in data) {
      current = data.state;
    };
  };

  // var change = function(override) {
  //   var options = {
  //     path: null,
  //     value: null
  //   };
  //   if (override) {
  //     options = helper.applyOptions(options, override);
  //   };
  //   if (options.path != null) {
  //     helper.setObject({
  //       path: options.path,
  //       object: current,
  //       newValue: options.value
  //     });
  //   };
  // };

  var init = function() {
    if (data.load()) {
      restore(data.load());
    };
  };

  return {
    init: init,
    get: get
  };

})();
