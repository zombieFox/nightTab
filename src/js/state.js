var state = (function() {

  var mod = {};

  mod.current = {
    header: {
      area: {
        width: 100,
        justify: "center",
        align: "center"
      },
      item: {
        justify: "left"
      },
      greeting: {
        show: false,
        type: "good",
        name: "",
        size: 1,
        newLine: false
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
          show: false,
          display: "number"
        },
        separator: {
          show: true,
          text: ":"
        },
        meridiem: {
          show: true
        },
        hour24: {
          show: true
        },
        size: 1,
        newLine: false
      },
      transitional: {
        show: false,
        type: "timeanddate",
        size: 1,
        newLine: false
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
          show: true,
          text: "/"
        },
        format: "datemonth",
        size: 1,
        newLine: false
      },
      search: {
        show: true,
        style: "box",
        width: {
          by: "auto",
          size: 30
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
            name: "DuckDuckGo"
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
          },
          custom: {
            url: "",
            name: ""
          }
        },
        text: {
          justify: "center"
        },
        size: 1,
        opacity: 1,
        newLine: false,
        newTab: false
      },
      editAdd: {
        show: true,
        size: 1,
        opacity: 1,
        newLine: false
      },
      colorAccent: {
        dot: {
          show: true
        },
        show: true,
        size: 1,
        opacity: 1,
        newLine: false
      },
      menu: {
        show: true,
        size: 1,
        opacity: 1,
        newLine: false
      },
      order: ["greeting", "transitional", "clock", "date", "search", "editAdd", "colorAccent", "menu"],
      border: {
        top: 0,
        bottom: 0
      },
      color: {
        by: "theme",
        rgb: {
          r: 0,
          g: 0,
          b: 0
        },
        style: "scroll",
        opacity: 0.95,
        show: true,
        newLine: false
      },
      position: "sticky",
      radius: false
    },
    link: {
      area: {
        width: 100,
        direction: "ltr",
        justify: "center"
      },
      item: {
        color: {
          by: "theme",
          rgb: {
            r: 0,
            g: 0,
            b: 0
          }
        },
        display: {
          letcon: {
            show: true,
            letter: {
              size: 3
            },
            icon: {
              size: 3
            }
          },
          name: {
            show: true,
            size: 0.9
          },
          gutter: 2,
          direction: "vertical",
          order: "letconname",
          alignment: "centercenter",
          rotate: 0,
          translate: {
            x: 0,
            y: 0
          }
        },
        url: {
          show: true
        },
        line: {
          show: true
        },
        shadow: {
          show: true
        },
        hoverScale: {
          show: true
        },
        newTab: false,
        size: 1,
        border: 0,
        opacity: 1
      },
      show: true,
      add: false,
      edit: false,
      style: "block",
      orientation: "bottom"
    },
    group: {
      area: {
        justify: "left"
      },
      name: {
        show: true,
        size: 1
      },
      openAll: {
        show: true,
        size: 1,
        opacity: 1
      },
      border: 0,
      order: "headerbody",
      add: false,
      edit: false
    },
    layout: {
      alignment: "centercenter",
      order: "headerlink",
      direction: "vertical",
      padding: 4,
      gutter: 2,
      size: 1,
      width: 80,
      scrollPastEnd: false,
      scrollbars: "auto",
      title: "New Tab"
    },
    theme: {
      accent: {
        hsl: {
          h: 221,
          s: 100,
          l: 50
        },
        rgb: {
          r: 0,
          g: 80,
          b: 255
        },
        random: {
          active: false,
          style: "any"
        },
        cycle: {
          active: false,
          speed: 300,
          step: 10
        }
      },
      color: {
        hsl: {
          h: 222,
          s: 14,
          l: 56
        },
        rgb: {
          r: 129,
          g: 138,
          b: 160
        },
        contrast: {
          light: 4,
          dark: 4
        },
        generated: {}
      },
      font: {
        display: {
          name: "",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "",
          weight: 400,
          style: "normal"
        }
      },
      style: "dark",
      radius: 0.25,
      shadow: 0.75,
      shade: {
        opacity: 0.4
      },
      custom: {
        all: [],
        edit: false
      }
    },
    background: {
      color: {
        by: "theme",
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      },
      image: {
        show: false,
        from: "file",
        file: {
          name: "",
          data: ""
        },
        url: "",
        blur: 0,
        scale: 1,
        opacity: 1,
        grayscale: 0,
        accent: 0
      }
    },
    edit: false,
    pagelock: false,
    shade: false,
    edge: false,
    search: false,
    menu: false,
    modal: false,
    dropdown: false,
    autoSuggest: false
  };

  mod.default = {
    header: {
      area: {
        width: 100
      },
      clock: {
        separator: {
          text: ":"
        },
        size: 1
      },
      date: {
        separator: {
          text: "/"
        },
        size: 1
      },
      search: {
        width: {
          size: 30
        },
        size: 1,
        opacity: 1
      },
      editAdd: {
        size: 1,
        opacity: 1
      },
      colorAccent: {
        size: 1,
        opacity: 1
      },
      menu: {
        size: 1,
        opacity: 1
      },
      color: {
        opacity: 0.95
      },
      border: {
        top: 0,
        bottom: 0
      },
      greeting: {
        size: 1
      },
      transitional: {
        size: 1
      }
    },
    link: {
      area: {
        width: 100
      },
      item: {
        display: {
          letcon: {
            letter: {
              size: 3
            },
            icon: {
              size: 3
            }
          },
          name: {
            size: 0.9
          },
          gutter: 2,
          rotate: 0,
          translate: {
            x: 0,
            y: 0
          }
        },
        size: 1,
        border: 0,
        opacity: 1
      }
    },
    group: {
      name: {
        size: 1
      },
      openAll: {
        size: 1,
        opacity: 1
      },
      border: 0
    },
    layout: {
      padding: 4,
      gutter: 2,
      size: 1,
      width: 80
    },
    theme: {
      accent: {
        hsl: {
          h: 221,
          s: 100,
          l: 50
        },
        rgb: {
          r: 0,
          g: 80,
          b: 255
        },
        cycle: {
          speed: 300,
          step: 10
        }
      },
      color: {
        hsl: {
          h: 222,
          s: 14,
          l: 56
        },
        rgb: {
          r: 129,
          g: 138,
          b: 160
        },
        contrast: {
          light: 4,
          dark: 4
        }
      },
      font: {
        display: {
          name: "",
          weight: 400,
          style: "normal"
        },
        ui: {
          name: "",
          weight: 400,
          style: "normal"
        }
      },
      style: "dark",
      radius: 0.25,
      shadow: 0.75,
      shade: {
        opacity: 0.4
      }
    },
    background: {
      image: {
        blur: 0,
        scale: 1,
        opacity: 1,
        grayscale: 0,
        accent: 0
      }
    }
  };

  mod.get = {
    current: function() {
      return mod.current;
    },
    default: function() {
      return JSON.parse(JSON.stringify(mod.default));
    }
  };

  mod.restore = function(data) {
    if ("state" in data) {
      mod.current = data.state;
    };
  };

  var init = function() {
    if (data.load()) {
      mod.restore(data.load());
    };
  };

  var get = {
    current: function() {
      return mod.get.current();
    },
    default: function() {
      return mod.get.default();
    }
  };

  return {
    init: init,
    mod: mod,
    get: get
  };

})();
