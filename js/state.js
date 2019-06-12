var state = (function() {

  var current = {
    header: {
      area: {
        width: 100,
        alignment: {
          horizontal: "center"
        }
      },
      item: {
        alignment: {
          horizontal: "left"
        }
      },
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
        size: 1
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
          show: false,
          display: "number"
        },
        separator: {
          show: true
        },
        format: "datemonth",
        size: 1
      },
      search: {
        show: true,
        style: "auto",
        width: 30,
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
          align: "center"
        },
        size: 1
      },
      button: {
        editAdd: {
          show: true,
        },
        accent: {
          show: true,
        },
        size: 1
      },
      shade: {
        show: true,
        style: "scroll",
        opacity: 0.95,
        radius: false
      },
      padding: {
        top: 0,
        bottom: 0
      },
      border: {
        top: {
          show: false,
          width: 1
        },
        bottom: {
          show: false,
          width: 1
        }
      },
      greeting: {
        show: false,
        type: "good",
        name: "",
        size: 1
      },
      transitional: {
        show: false,
        type: "timeanddate",
        size: 1
      }
    },
    link: {
      area: {
        gap: 2,
        width: 100,
        alignment: {
          horizontal: "center"
        }
      },
      item: {
        size: 1,
        display: {
          show: true,
          size: 2,
          alignment: {
            horizontal: "right",
            vertical: "bottom"
          },
          letter: {
            size: 2
          },
          icon: {
            size: 2
          }
        },
        name: {
          show: true,
          size: 0.9,
        },
        url: {
          show: true,
          style: "dark"
        },
        line: {
          show: true
        }
      },
      show: true,
      newTab: false,
      edit: false,
      style: "block",
      sort: "none"
    },
    layout: {
      alignment: {
        horizontal: "center",
        vertical: "center"
      },
      padding: 4,
      gutter: 2,
      width: 80,
      scrollPastEnd: false,
      title: "New Tab"
    },
    theme: {
      accent: {
        current: {
          r: 0,
          g: 130,
          b: 250,
        },
        random: {
          active: false,
          style: "any"
        }
      },
      style: "dark",
      radius: 0.2
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
    edge: false,
    search: false,
    menu: false,
    modal: false,
    autoSuggest: false,
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
