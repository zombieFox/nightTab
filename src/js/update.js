var update = (function() {

  var _update_100 = function(data) {
    data.version = 1.00;
    return data;
  };

  var _update_200 = function(data) {
    data.state = {
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
          active: true
        },
        accent: {
          active: true
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
          current: {
            r: 255,
            g: 170,
            b: 51
          },
          random: false
        }
      },
      edit: {
        active: false
      },
      menu: {
        open: false,
        active: false
      },
      modal: {
        active: false
      }
    };
    data.bookmarks = [];
    data.version = 2.00;
    return data;
  };

  var _update_210 = function(data) {
    data.state.layout.theme = {
      current: data.state.layout.theme.current,
      random: false
    };
    data.version = 2.10;
    return data;
  };

  var _update_230 = function(data) {
    data.state.layout.theme.random = {
      active: data.state.layout.theme.random,
      style: "any"
    };
    data.version = 2.30;
    return data;
  };

  var _update_240 = function(data) {
    data.state.link.show = {
      active: true,
      name: true,
      url: true
    };
    data.state.layout.alignment = {
      horizontal: "left",
      vertical: "top"
    };
    data.state.background = {
      image: {
        active: false,
        url: "../background/gray-steps.jpg",
        blur: 0,
        opacity: 1,
        grayscale: 0,
        accentOpacity: 0
      }
    };
    data.version = 2.40;
    return data;
  };

  var _update_250 = function(data) {
    data.state.header.search.focus = false;
    data.version = 2.50;
    return data;
  };

  var _update_270 = function(data) {
    // update date character length
    data.state.header.date.character = {
      length: data.state.header.date.characterLength
    };
    // change editAdd active to show
    data.state.header.editAdd.show = data.state.header.editAdd.active;
    delete data.state.header.editAdd.active;
    // change editAdd active to show
    data.state.header.accent.show = data.state.header.accent.active;
    delete data.state.header.accent.active;
    // move alignment into header
    data.state.header.alignment = {
      horizontal: data.state.layout.alignment.horizontal,
      vertical: data.state.layout.alignment.vertical
    };
    delete data.state.layout.alignment;
    // change header search
    data.state.header.search.show = data.state.header.search.active;
    delete data.state.header.search.active;
    // move searching
    data.state.search = {
      active: false
    };
    delete data.state.header.search.searching;
    // change links to bookmarks
    data.state.bookmarks = data.state.link;
    delete data.state.link;
    // change bookmarks show
    data.state.bookmarks.show.link = data.state.bookmarks.show.active;
    delete data.state.bookmarks.show.active;
    // move edit
    data.state.bookmarks.edit = false;
    delete data.state.edit;
    // change layout width
    data.state.layout.width = data.state.layout.container;
    delete data.state.layout.container;
    // change background active
    data.state.background.image.show = data.state.background.image.active;
    delete data.state.background.image.active;
    // change background accent
    data.state.background.image.accent = data.state.background.image.accentOpacity;
    delete data.state.background.image.accentOpacity;
    // change menu active
    data.state.menu.show = data.state.menu.active;
    delete data.state.menu.active;
    delete data.state.menu.open;
    // update version
    data.version = 2.70;
    return data;
  };

  var _update_280 = function(data) {
    data.state.layout.title = "New Tab";
    data.version = 2.80;
    return data;
  };

  var _update_290 = function(data) {
    data.state.header.shade = {
      show: true,
      padding: 4,
      style: "scroll",
      opacity: 0.95,
      border: {
        top: false,
        bottom: false
      }
    };
    data.version = 2.90;
    return data;
  };

  var _update_2110 = function(data) {
    data.state.header.greeting = {
      show: false,
      type: "good",
      name: ""
    };
    data.version = "2.11.0";
    return data;
  };

  var _update_2110 = function(data) {
    data.state.header.greeting = {
      show: false,
      type: "good",
      name: ""
    };
    data.version = "2.11.0";
    return data;
  };

  var _update_2120 = function(data) {
    data.state.bookmarks.link = {
      show: data.state.bookmarks.show.link
    };
    data.state.bookmarks.name = {
      show: data.state.bookmarks.show.name
    };
    data.state.bookmarks.url = {
      show: data.state.bookmarks.show.url,
      style: "dark"
    };
    delete data.state.bookmarks.show;
    data.state.theme = {
      accent: {
        current: data.state.layout.theme.current,
        random: data.state.layout.theme.random
      },
      style: "dark"
    };
    delete data.state.layout.theme;
    data.version = "2.12.0";
    return data;
  };

  var _update_2140 = function(data) {
    data.state.layout.width = 72;
    data.version = "2.14.0";
    return data;
  };

  var _update_2160 = function(data) {
    data.state.header.shade.padding = {
      top: data.state.header.shade.padding,
      bottom: data.state.header.shade.padding
    };
    data.state.header.shade.border = {
      top: {
        show: data.state.header.shade.border.top,
        width: 1
      },
      bottom: {
        show: data.state.header.shade.border.bottom,
        width: 1
      }
    };
    data.version = "2.16.0";
    return data;
  };

  var _update_2170 = function(data) {
    data.state.header.search.engine.google.name = "Google";
    data.state.header.search.engine.duckduckgo.name = "Duck Duck Go";
    data.state.header.search.engine.giphy.name = "Giphy";
    data.version = "2.17.0";
    return data;
  };

  var _update_2190 = function(data) {
    data.state.header.search.engine.youtube = {
      url: "https://www.youtube.com/results?search_query=",
      name: "YouTube"
    };
    data.state.header.search.engine.custom.name = "";
    data.version = "2.19.0";
    return data;
  };

  var _update_2200 = function(data) {
    data.version = "2.20.0";
    data.state.header.search.width = {
      style: "auto",
      custom: 30
    };
    data.state.header.search.text = {
      align: "left"
    };
    delete data.state.header.search.grow;
    return data;
  };

  var _update_2210 = function(data) {
    data.version = "2.21.0";
    data.state.header.clock = {
      hours: {
        show: data.state.header.clock.show.hours,
        display: "number"
      },
      minutes: {
        show: data.state.header.clock.show.minutes,
        display: "number"
      },
      seconds: {
        show: data.state.header.clock.show.seconds,
        display: "number"
      },
      separator: {
        show: data.state.header.clock.show.separator
      },
      meridiem: {
        show: data.state.header.clock.show.meridiem
      },
      hour24: {
        show: data.state.header.clock.hour24
      }
    };
    data.state.header.date = {
      day: {
        show: data.state.header.date.show.day,
        display: "word",
        weekStart: "monday",
        length: data.state.header.date.character.length
      },
      date: {
        show: data.state.header.date.show.date,
        display: "number",
        ordinal: true
      },
      month: {
        show: data.state.header.date.show.month,
        display: "word",
        length: data.state.header.date.character.length,
        ordinal: true
      },
      year: {
        show: data.state.header.date.show.year,
        display: "number"
      },
      separator: {
        show: data.state.header.date.show.separator
      },
      format: "datemonth"
    };
    data.state.header.transitional = {
      show: false,
      type: "timeanddate"
    };
    return data;
  };

  var _update_2220 = function(data) {
    data.version = "2.22.0";
    data.bookmarks.forEach(function(item, index) {
      item.accent = {
        override: false,
        color: {
          r: null,
          g: null,
          b: null
        }
      };
    });
    return data;
  };

  var _update_300 = function(data) {
    data.version = "3.0.0";
    data.bookmarks.forEach(function(item, index) {
      item.display = "letter";
      item.icon = {
        name: null,
        prefix: null,
        label: null
      };
    });
    return data;
  };

  var _update_310 = function(data) {
    data.version = "3.1.0";
    data.state.header.area = {
      width: 90,
      alignment: {
        horizontal: "center"
      }
    };
    data.state.header.items = {
      alignment: {
        horizontal: "left"
      }
    };
    delete data.state.header.alignment;
    data.state.link = data.state.bookmarks;
    delete data.state.bookmarks;
    data.state.link.area = {
      width: 90,
      alignment: {
        horizontal: "center"
      }
    };
    data.state.link.items = {
      width: 12,
      alignment: {
        horizontal: "left"
      }
    };
    data.state.link.show = data.state.link.link.show;
    delete data.state.link.link;
    data.state.link.fit = "best";
    delete data.state.link.editObject;
    data.state.layout.alignment = {
      horizontal: "center",
      vertical: "center"
    };
    data.state.edge = false;
    data.state.autoSuggest = false;
    return data;
  };

  var _update_320 = function(data) {
    data.version = "3.2.0";
    data.state.link.display = {
      show: true,
      alignment: {
        horizontal: "center",
        vertical: "center"
      },
      letter: {
        size: 2
      },
      icon: {
        size: 2.5
      }
    };
    return data;
  };

  var _update_340 = function(data) {
    data.version = "3.4.0";
    data.state.header.padding = data.state.header.shade.padding;
    delete data.state.header.shade.padding;
    data.state.header.border = data.state.header.shade.border;
    delete data.state.header.shade.border;
    return data;
  };

  var _update_360 = function(data) {
    data.version = "3.6.0";
    data.state.header.item = data.state.header.items;
    delete data.state.header.items;
    data.state.link.area.gap = 2;
    delete data.state.link.items;
    data.state.link.item = {
      size: 1,
      display: data.state.link.display,
      name: data.state.link.name,
      url: data.state.link.url
    };
    data.state.link.item.name.size = 0.9;
    delete data.state.link.display;
    delete data.state.link.name;
    delete data.state.link.url;
    return data;
  };

  var _update_370 = function(data) {
    data.version = "3.7.0";
    data.state.link.item.line = {
      show: true
    };
    return data;
  };

  var _update_380 = function(data) {
    data.version = "3.8.0";
    data.state.header.clock.size = 1;
    data.state.header.date.size = 1;
    data.state.header.greeting.size = 1;
    data.state.header.transitional.size = 1;
    data.state.header.search.style = data.state.header.search.width.style;
    data.state.header.search.width = data.state.header.search.width.custom;
    data.state.header.search.size = 1;
    data.state.header.button = {
      editAdd: {
        show: data.state.header.editAdd.show
      },
      accent: {
        show: data.state.header.accent.show
      },
      size: 1
    };
    delete data.state.header.editAdd;
    data.state.theme.radius = 0.2;
    return data;
  };

  var _update_390 = function(data) {
    data.version = "3.9.0";
    delete data.state.header.padding;
    data.state.header.radius = false;
    data.state.header.border = {
      top: 0,
      bottom: 0
    };
    data.state.layout.padding = 4;
    data.state.layout.gutter = 2;
    data.state.background.image.scale = 1;
    delete data.state.link.area.gap;
    return data;
  };

  var _update_3100 = function(data) {
    data.version = "3.10.0";
    data.state.header.button.style = "box";
    return data;
  };

  var _update_3110 = function(data) {
    data.version = "3.11.0";
    data.state.link.item.line = data.state.link.item.line.show;
    data.state.link.item.hoverScale = true;
    return data;
  };

  var _update_3150 = function(data) {
    data.version = "3.15.0";
    delete data.state.link.sort;
    return data;
  };

  var _update_3180 = function(data) {
    data.version = "3.18.0";
    data.nighttab = true;
    return data;
  };

  var _update_3200 = function(data) {
    data.version = "3.20.0";
    data.state.link.item.url = data.state.link.item.url.show;
    return data;
  };

  var _update_3210 = function(data) {
    data.version = "3.21.0";
    data.state.layout.order = "headerLink";
    return data;
  };

  // var _update_300 = function(data) {
  //   data.version = 3.00;
  //   return data;
  // };

  // This associative array contains all the updates. Add
  // a new entry if you need to modify data.
  //
  // Example, this assumes the previous version is less than
  // 3.28.0, so 3.27.0 would be upgraded in this case.
  // versionUpdates["3.28.0"] = function(data) {
  //   return data;
  // };
  //
  // Always add the version in increasing order so the
  // most recent version is last.
  var versionUpdates = {};

  versionUpdates["3.27.0"] = function(data) {
    data.state.header.area.alignment = data.state.header.area.alignment.horizontal;
    data.state.header.item.alignment = data.state.header.item.alignment.horizontal;
    data.state.header.search.text.alignment = data.state.header.search.text.align;
    delete data.state.header.search.text.align;
    data.state.link.area.alignment = data.state.link.area.alignment.horizontal;
    data.state.link.item.display.alignment = data.state.link.item.display.alignment.horizontal + data.state.link.item.display.alignment.vertical;
    data.state.layout.alignment = data.state.layout.alignment.horizontal + data.state.layout.alignment.vertical;
    return data;
  };

  // Add Bing as a option for the search engines.
  versionUpdates["3.28.0"] = function(data) {
    data.state.header.search.engine.bing = {
      url: "https://www.bing.com/search?q=",
      name: "Bing"
    };
    return data;
  };

  function run(data) {
    if (!("version" in data)) {
      console.log("\t= running update", "1.0.0");
      data = _update_100(data);
    };
    if (typeof data.version == "number") {
      if (data.version < 2.0) {
        console.log("\t= running update 2.0.0");
        data = _update_200(data);
      };
      if (data.version < 2.1) {
        console.log("\t= running update 2.1.0");
        data = _update_210(data);
      };
      if (data.version < 2.3) {
        console.log("\t= running update 2.3.0");
        data = _update_230(data);
      };
      if (data.version < 2.4) {
        console.log("\t= running update 2.4.0");
        data = _update_240(data);
      };
      if (data.version < 2.5) {
        console.log("\t= running update 2.5.0");
        data = _update_250(data);
      };
      if (data.version < 2.7) {
        console.log("\t= running update 2.7.0");
        data = _update_270(data);
      };
      if (data.version < 2.8) {
        console.log("\t= running update 2.8.0");
        data = _update_280(data);
      };
      if (data.version < 2.9) {
        console.log("\t= running update 2.9.0");
        data = _update_290(data);
      };
      if (data.version < 2.91) {
        console.log("\t= running update 2.9.1");
        data.version = 2.91;
      };
      if (data.version < 2.96) {
        // introduction of a new semantic version check function so the version is being bumped to 2.10.0 and changed to a string
        console.log("\t= running update 2.10.0");
        data.version = "2.10.0";
      };
    };
    if (typeof data.version == "string") {
      if (version.compare(data.version, "2.11.0") == -1) {
        console.log("\t= running update 2.11.0");
        data = _update_2110(data);
      };
      if (version.compare(data.version, "2.12.0") == -1) {
        console.log("\t= running update 2.12.0");
        data = _update_2120(data);
      };
      if (version.compare(data.version, "2.14.0") == -1) {
        console.log("\t= running update 2.14.0");
        data = _update_2140(data);
      };
      if (version.compare(data.version, "2.16.0") == -1) {
        console.log("\t= running update 2.16.0");
        data = _update_2160(data);
      };
      if (version.compare(data.version, "2.17.0") == -1) {
        console.log("\t= running update 2.17.0");
        data = _update_2170(data);
      };
      if (version.compare(data.version, "2.19.0") == -1) {
        console.log("\t= running update 2.19.0");
        data = _update_2190(data);
      };
      if (version.compare(data.version, "2.20.0") == -1) {
        console.log("\t= running update 2.20.0");
        data = _update_2200(data);
      };
      if (version.compare(data.version, "2.21.0") == -1) {
        console.log("\t= running update 2.21.0");
        data = _update_2210(data);
      };
      if (version.compare(data.version, "2.22.0") == -1) {
        console.log("\t= running update 2.22.0");
        data = _update_2220(data);
      };
      if (version.compare(data.version, "3.0.0") == -1) {
        console.log("\t= running update 3.0.0");
        data = _update_300(data);
      };
      if (version.compare(data.version, "3.1.0") == -1) {
        console.log("\t= running update 3.1.0");
        data = _update_310(data);
      };
      if (version.compare(data.version, "3.2.0") == -1) {
        console.log("\t= running update 3.2.0");
        data = _update_320(data);
      };
      if (version.compare(data.version, "3.4.0") == -1) {
        console.log("\t= running update 3.4.0");
        data = _update_340(data);
      };
      if (version.compare(data.version, "3.6.0") == -1) {
        console.log("\t= running update 3.6.0");
        data = _update_360(data);
      };
      if (version.compare(data.version, "3.7.0") == -1) {
        console.log("\t= running update 3.7.0");
        data = _update_370(data);
      };
      if (version.compare(data.version, "3.8.0") == -1) {
        console.log("\t= running update 3.8.0");
        data = _update_380(data);
      };
      if (version.compare(data.version, "3.9.0") == -1) {
        console.log("\t= running update 3.9.0");
        data = _update_390(data);
      };
      if (version.compare(data.version, "3.10.0") == -1) {
        console.log("\t= running update 3.10.0");
        data = _update_3100(data);
      };
      if (version.compare(data.version, "3.11.0") == -1) {
        console.log("\t= running update 3.11.0");
        data = _update_3110(data);
      };
      if (version.compare(data.version, "3.15.0") == -1) {
        console.log("\t= running update 3.15.0");
        data = _update_3150(data);
      };
      if (version.compare(data.version, "3.18.0") == -1) {
        console.log("\t= running update 3.18.0");
        data = _update_3180(data);
      };
      if (version.compare(data.version, "3.20.0") == -1) {
        console.log("\t= running update 3.20.0");
        data = _update_3200(data);
      };
      if (version.compare(data.version, "3.21.0") == -1) {
        console.log("\t= running update 3.21.0");
        data = _update_3210(data);
      };

      // Shift to a associate array for the configuration update as
      // there less code to maintain.
      for (var key in versionUpdates) {
        if (version.compare(data.version, key) == -1) {
          console.log("\t= running update", key);
          data = versionUpdates[key](data);
          data.version = key;
        };
      };
    };

    // if no update is needed
    // version bump
    if (version.compare(data.version, version.get()) == -1) {
      console.log("\t= nothing to update, version bump to", version.get());
      data.version = version.get();
    };

    return data;
  };

  // exposed methods
  return {
    run: run
  };

})();
