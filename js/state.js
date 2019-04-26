var state = (function() {

  var current = {
    header: {
      clock: {
        hours: {
          show: true,
          display: "number"
        },
        minutes: {
          show: true,
          display: "number"
        },
        seconds: {
          show: true,
          display: "number"
        },
        separator: {
          show: true
        },
        meridiem: {
          show: true
        },
        hour24: {
          show: true
        },
      },
      date: {
        day: {
          show: true,
          display: "word",
          weekStart: "monday",
          length: "long"
        },
        date: {
          show: true,
          display: "number",
          ordinal: true
        },
        month: {
          show: true,
          display: "word",
          length: "long",
          ordinal: true
        },
        year: {
          show: true,
          display: "number"
        },
        separator: {
          show: true
        },
        format: "datemonth"
      },
      search: {
        show: true,
        width: {
          style: "auto",
          custom: 30
        },
        focus: false,
        engine: {
          selected: "google",
          google: {
            url: "https://www.google.com/search",
            name: "Google"
          },
          duckduckgo: {
            url: "https://duckduckgo.com/",
            name: "Duck Duck Go"
          },
          youtube: {
            url: "https://www.youtube.com/results?search_query=",
            name: "YouTube"
          },
          giphy: {
            url: "https://giphy.com/search/",
            name: "Giphy"
          },
          custom: {
            url: "",
            name: ""
          }
        },
        text: {
          align: "left"
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
        padding: {
          top: 10,
          bottom: 10
        },
        style: "scroll",
        opacity: 0.95,
        border: {
          top: {
            show: false,
            width: 1
          },
          bottom: {
            show: false,
            width: 1
          }
        }
      },
      greeting: {
        show: false,
        type: "good",
        name: ""
      },
      transitional: {
        show: false,
        type: "timeanddate"
      }
    },
    bookmarks: {
      link: {
        show: true
      },
      name: {
        show: true
      },
      url: {
        show: true,
        style: "dark"
      },
      newTab: false,
      edit: false,
      editObject: null,
      style: "block",
      sort: "none"
    },
    layout: {
      width: 72,
      scrollPastEnd: true,
      title: "New Tab"
    },
    theme: {
      accent: {
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
      style: "dark"
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
