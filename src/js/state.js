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
          bing: {
            url: "https://www.bing.com/search?q=",
            name: "Bing"
          },          custom: {
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
        style: "box",
        size: 1
      },
      shade: {
        show: true,
        style: "scroll",
        opacity: 0.95
      },
      border: {
        top: 0,
        bottom: 0
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
      },
      radius: false
    },
    link: {
      area: {
        width: 100,
        alignment: {
          horizontal: "center"
        }
      },
      item: {
        display: {
          show: true,
          size: 2,
          alignment: {
            horizontal: "center",
            vertical: "center"
          },
          letter: {
            size: 3
          },
          icon: {
            size: 3
          }
        },
        name: {
          show: true,
          size: 0.9,
        },
        url: true,
        size: 1,
        line: true,
        hoverScale: true
      },
      show: true,
      newTab: false,
      edit: false,
      style: "block"
    },
    layout: {
      alignment: {
        horizontal: "center",
        vertical: "center"
      },
      order: "headerLink",
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
          g: 80,
          b: 255
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
        url: "",
        blur: 0,
        scale: 1,
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
