var state = (function() {

  var mod = {};

  mod.current = {
    header: {
      area: {
        width: 100,
        alignment: "center"
      },
      item: {
        alignment: "left"
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
          alignment: "center"
        },
        size: 1
      },
      button: {
        editAdd: {
          show: true
        },
        colorAccent: {
          show: true,
          dot: {
            show: true
          }
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
      position: "sticky",
      radius: false
    },
    link: {
      area: {
        width: 100,
        alignment: "center"
      },
      item: {
        color: {
          by: "theme",
          custom: {
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
        border: 0
      },
      show: true,
      add: false,
      edit: false,
      style: "block",
      orientation: "bottom"
    },
    group: {
      area: {
        alignment: "left"
      },
      name: {
        show: true,
        size: 1
      },
      border: 0,
      order: "headerbody",
      add: false,
      edit: false
    },
    layout: {
      alignment: "centercenter",
      order: "headerlink",
      padding: 4,
      gutter: 2,
      size: 1,
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
        }
      },
      style: "dark",
      radius: 0.25
    },
    background: {
      color: {
        by: "theme",
        custom: {
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
        size: 1
      },
      date: {
        size: 1
      },
      search: {
        size: 1
      },
      button: {
        size: 1
      },
      greeting: {
        size: 1
      },
      transitional: {
        size: 1
      }
    },
    group: {
      name: {
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
        size: 1
      }
    },
    layout: {
      padding: 4,
      gutter: 2,
      size: 1,
      width: 80
    },
    theme: {
      accent: {
        current: {
          r: 0,
          g: 80,
          b: 255
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
        }
      },
      radius: 0.25
    }
  };

  mod.preset = {
    nighttab: {
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
        }
      },
      accent: {
        r: 0,
        g: 80,
        b: 255
      },
      radius: 0.25,
      style: "dark"
    },
    nightingaleblue: {
      color: {
        hsl: {
          h: 220,
          s: 60,
          l: 50
        },
        rgb: {
          r: 51,
          g: 102,
          b: 204
        }
      },
      accent: {
        r: 255,
        g: 0,
        b: 119
      },
      radius: 0.5,
      style: "dark"
    },
    bluegum: {
      color: {
        hsl: {
          h: 217,
          s: 46,
          l: 64
        },
        rgb: {
          r: 120,
          g: 153,
          b: 205
        }
      },
      accent: {
        r: 255,
        g: 251,
        b: 0
      },
      radius: 0.2,
      style: "dark"
    },
    sharpmint: {
      color: {
        hsl: {
          h: 157,
          s: 50,
          l: 49
        },
        rgb: {
          r: 63,
          g: 191,
          b: 143
        }
      },
      accent: {
        r: 255,
        g: 10,
        b: 178
      },
      radius: 0.8,
      style: "dark"
    },
    snowblue: {
      color: {
        hsl: {
          h: 197,
          s: 14,
          l: 61
        },
        rgb: {
          r: 141,
          g: 161,
          b: 169
        }
      },
      accent: {
        r: 105,
        g: 183,
        b: 214
      },
      radius: 0,
      style: "light"
    },
    coralgreen: {
      color: {
        hsl: {
          h: 184,
          s: 38,
          l: 61
        },
        rgb: {
          r: 119,
          g: 188,
          b: 194
        }
      },
      accent: {
        r: 255,
        g: 161,
        b: 161
      },
      radius: 2,
      style: "dark"
    },
    purplegem: {
      color: {
        hsl: {
          h: 300,
          s: 30,
          l: 51
        },
        rgb: {
          r: 170,
          g: 95,
          b: 169
        }
      },
      accent: {
        r: 26,
        g: 167,
        b: 255
      },
      radius: 0.40,
      style: "dark"
    },
    hotpepper: {
      color: {
        hsl: {
          h: 0,
          s: 69,
          l: 66
        },
        rgb: {
          r: 228,
          g: 108,
          b: 108
        }
      },
      accent: {
        r: 255,
        g: 136,
        b: 0
      },
      radius: 0.6,
      style: "dark"
    }
  };

  mod.get = {
    current: function() {
      return mod.current;
    },
    default: function() {
      return JSON.parse(JSON.stringify(mod.default));
    },
    preset: function() {
      return JSON.parse(JSON.stringify(mod.preset));
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
    },
    preset: function() {
      return mod.get.preset();
    }
  };

  return {
    init: init,
    mod: mod,
    get: get
  };

})();
