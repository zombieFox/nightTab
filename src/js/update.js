var update = (function() {

  var mod = {};

  // this associative array contains all the updates. add a new entry if you need to modify data.
  // example, this assumes the previous version is less than 3.28.0:
  // "3.28.0": function(data) {
  //   return data;
  // };
  // always add the version in increasing order so the most recent version is last.
  mod.all = {
    "1.0.0": function(data) {
      data.version = "1.0.0";
      return data;
    },
    "2.0.0": function(data) {
      // major state overhaul for version 2.0.0 and up
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
      // version 1.0.0 bookmarks are not compatible so need to be reset
      data.bookmarks = [];
      return data;
    },
    "2.1.0": function(data) {
      data.state.layout.theme = {
        current: data.state.layout.theme.current,
        random: false
      };
      return data;
    },
    "2.3.0": function(data) {
      data.state.layout.theme.random = {
        active: data.state.layout.theme.random,
        style: "any"
      };
      return data;
    },
    "2.4.0": function(data) {
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
      return data;
    },
    "2.5.0": function(data) {
      data.state.header.search.focus = false;
      return data;
    },
    "2.7.0": function(data) {
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
      data.state.menu = false;
      data.state.modal = false;
      return data;
    },
    "2.8.0": function(data) {
      data.state.layout.title = "New Tab";
      return data;
    },
    "2.9.0": function(data) {
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
      return data;
    },
    "2.10.0": function(data) {
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
      return data;
    },
    "2.11.0": function(data) {
      data.state.header.greeting = {
        show: false,
        type: "good",
        name: ""
      };
      return data;
    },
    "2.11.0": function(data) {
      data.state.header.greeting = {
        show: false,
        type: "good",
        name: ""
      };
      return data;
    },
    "2.12.0": function(data) {
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
      return data;
    },
    "2.14.0": function(data) {
      data.state.layout.width = 72;
      return data;
    },
    "2.16.0": function(data) {
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
      return data;
    },
    "2.17.0": function(data) {
      data.state.header.search.engine.google.name = "Google";
      data.state.header.search.engine.duckduckgo.name = "Duck Duck Go";
      data.state.header.search.engine.giphy.name = "Giphy";
      return data;
    },
    "2.19.0": function(data) {
      data.state.header.search.engine.youtube = {
        url: "https://www.youtube.com/results?search_query=",
        name: "YouTube"
      };
      data.state.header.search.engine.custom.name = "";
      return data;
    },
    "2.20.0": function(data) {
      data.state.header.search.width = {
        style: "auto",
        custom: 30
      };
      data.state.header.search.text = {
        align: "left"
      };
      delete data.state.header.search.grow;
      return data;
    },
    "2.21.0": function(data) {
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
    },
    "2.22.0": function(data) {
      data.bookmarks.forEach(function(arrayItem, index) {
        arrayItem.accent = {
          override: false,
          color: {
            r: null,
            g: null,
            b: null
          }
        };
      });
      return data;
    },
    "3.0.0": function(data) {
      data.bookmarks.forEach(function(arrayItem, index) {
        arrayItem.display = "letter";
        arrayItem.icon = {
          name: null,
          prefix: null,
          label: null
        };
      });
      return data;
    },
    "3.1.0": function(data) {
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
    },
    "3.2.0": function(data) {
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
    },
    "3.4.0": function(data) {
      data.state.header.padding = data.state.header.shade.padding;
      delete data.state.header.shade.padding;
      data.state.header.border = data.state.header.shade.border;
      delete data.state.header.shade.border;
      return data;
    },
    "3.6.0": function(data) {
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
    },
    "3.7.0": function(data) {
      data.state.link.item.line = {
        show: true
      };
      return data;
    },
    "3.8.0": function(data) {
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
    },
    "3.9.0": function(data) {
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
    },
    "3.10.0": function(data) {
      data.state.header.button.style = "box";
      return data;
    },
    "3.11.0": function(data) {
      data.state.link.item.line = data.state.link.item.line.show;
      data.state.link.item.hoverScale = true;
      return data;
    },
    "3.15.0": function(data) {
      delete data.state.link.sort;
      return data;
    },
    "3.18.0": function(data) {
      data.nighttab = true;
      return data;
    },
    "3.20.0": function(data) {
      data.state.link.item.url = data.state.link.item.url.show;
      return data;
    },
    "3.21.0": function(data) {
      data.state.layout.order = "headerLink";
      return data;
    },
    "3.27.0": function(data) {
      // swicth to single values for alignment controls
      // no more horizontal or vertical keys in state object
      data.state.header.area.alignment = data.state.header.area.alignment.horizontal;
      data.state.header.item.alignment = data.state.header.item.alignment.horizontal;
      data.state.header.search.text.alignment = data.state.header.search.text.align;
      delete data.state.header.search.text.align;
      data.state.link.area.alignment = data.state.link.area.alignment.horizontal;
      data.state.link.item.display.alignment = data.state.link.item.display.alignment.vertical + data.state.link.item.display.alignment.horizontal;
      data.state.layout.alignment = data.state.layout.alignment.vertical + data.state.layout.alignment.horizontal;
      return data;
    },
    "3.28.0": function(data) {
      data.state.header.search.engine.bing = {
        url: "https://www.bing.com/search?q=",
        name: "Bing"
      };
      return data;
    },
    "3.29.0": function(data) {
      // move new tab into link
      data.state.link.item.newTab = data.state.link.newTab;
      delete data.state.link.newTab;
      // bring url and line inline with other show controls
      data.state.link.item.url = {
        show: data.state.link.item.url
      };
      data.state.link.item.line = {
        show: data.state.link.item.line
      };
      data.state.link.item.hoverScale = {
        show: data.state.link.item.hoverScale
      };
      data.state.layout.order = data.state.layout.order.toLowerCase();
      return data;
    },
    "3.30.0": function(data) {
      data.state.link.item.order = "displayname";
      return data;
    },
    "3.32.0": function(data) {
      if (data.state.background.image.url == "") {
        data.state.background.image.from = "file";
      } else {
        data.state.background.image.from = "url";
      };
      data.state.background.image.file = {
        name: "",
        data: ""
      };
      return data;
    },
    "3.50.0": function(data) {
      data.state.pagelock = false;
      data.state.shade = false;
      return data;
    },
    "3.51.0": function(data) {
      data.state.link.add = false;
      return data;
    },
    "3.66.0": function(data) {
      data.state.background.color = {
        by: "theme",
        custom: {
          r: 0,
          g: 0,
          b: 0
        }
      };
      return data;
    },
    "3.80.0": function(data) {
      delete data.state.link.item.newtab;
      data.state.link.item.border = 0;
      return data;
    },
    "3.81.0": function(data) {
      data.state.link.orientation = "bottom";
      return data;
    },
    "3.82.0": function(data) {
      data.state.link.item.shadow = {
        show: true
      };
      return data;
    },
    "4.0.0": function(data) {
      data.bookmarks = [{
        name: "Group 1",
        items: data.bookmarks
      }];
      data.state.layout.size = 1;
      data.state.header.position = "sticky";
      data.state.link.item.display.rotate = 0;
      data.state.link.item.display.translate = {
        x: 0,
        y: 0
      };
      data.state.link.item.hoverScale = {
        show: true
      };
      data.state.group = {
        area: {
          alignment: "left"
        },
        name: {
          show: true,
          size: 1
        },
        border: 0,
        order: "headerbody",
        add: false
      };
      data.state.dropdown = false;
      delete data.state.link.item.display.size;
      data.state.link.item.display.name = data.state.link.item.name;
      delete data.state.link.item.name;
      data.state.link.item.display.letcon = {
        show: data.state.link.item.display.show,
        letter: {
          size: data.state.link.item.display.letter.size
        },
        icon: {
          size: data.state.link.item.display.icon.size
        }
      };
      delete data.state.link.item.display.show;
      delete data.state.link.item.display.letter;
      delete data.state.link.item.display.icon;
      data.state.link.item.display.rotate = 0;
      data.state.link.item.display.translate = {
        x: 0,
        y: 0
      };
      if (data.state.link.item.order == "displayname") {
        data.state.link.item.display.order = "letconname";
      } else if (data.state.link.item.order == "namedisplay") {
        data.state.link.item.display.order = "nameletcon";
      };
      delete data.state.link.item.order;
      if (data.state.link.style == "block") {
        data.state.link.item.display.direction = "vertical";
      } else if (data.state.link.style == "list") {
        data.state.link.item.display.direction = "horizontal";
      };
      delete data.state.link.fit;
      data.state.header.search.engine.duckduckgo.name = "DuckDuckGo";
      return data;
    },
    "4.1.0": function(data) {
      data.state.link.item.display.gutter = 2;
      return data;
    },
    "4.2.0": function(data) {
      data.state.edit = false;
      data.state.link.edit = false;
      data.state.group.edit = false;
      return data;
    },
    "4.3.0": function(data) {
      data.state.theme.color = {
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
      };
      data.state.link.item.color = {
        by: "theme",
        custom: {
          r: 0,
          g: 0,
          b: 0
        }
      };
      data.state.header.button.colorAccent = data.state.header.button.accent;
      delete data.state.header.button.accent;
      return data;
    },
    "4.4.0": function(data) {
      data.state.header.button.colorAccent.dot = {
        show: true
      };
      return data;
    },
    "4.6.0": function(data) {
      data.state.theme.font = {
        display: "",
        ui: ""
      };
      return data;
    },
    "4.7.0": function(data) {
      data.state.theme.font.display = {
        name: data.state.theme.font.display,
        weight: 400,
        style: "normal"
      };
      data.state.theme.font.ui = {
        name: data.state.theme.font.ui,
        weight: 400,
        style: "normal"
      };
      return data;
    },
    "4.8.0": function(data) {
      data.state.theme.custom = [];
      return data;
    },
    "4.9.0": function(data) {
      data.state.theme.color.contrast = {
        light: 4,
        dark: 4
      };
      return data;
    },
    "4.10.0": function(data) {
      data.state.theme.shadow = 1;
      return data;
    },
    "4.11.0": function(data) {
      data.state.theme.custom = {
        all: data.state.theme.custom,
        edit: false
      };
      return data;
    },
    "4.17.0": function(data) {
      data.state.theme.shade = {
        opacity: 0.4
      };
      return data;
    },
    "4.18.0": function(data) {
      data.state.theme.accent.rgb = data.state.theme.accent.current;
      delete data.state.theme.accent.current;
      return data;
    },
    "4.19.2": function(data) {
      data.bookmarks.forEach(function(arrayItem, index) {
        arrayItem.items.forEach(function(arrayItem, index) {
          arrayItem.searchMatch = false;
        });
      });
      return data;
    },
    "4.22.0": function(data) {
      data.state.link.item.color.rgb = data.state.link.item.color.custom;
      delete data.state.link.item.color.custom;
      data.state.background.color.rgb = data.state.background.color.custom;
      delete data.state.background.color.custom;
      return data;
    },
    "4.23.0": function(data) {
      data.state.header.color = data.state.header.shade;
      delete data.state.header.shade;
      data.state.header.color.by = "theme";
      data.state.header.color.rgb = {
        r: 0,
        g: 0,
        b: 0
      };
      return data;
    },
    "4.33.0": function(data) {
      data.state.layout.scrollbars = "auto";
      return data;
    }
  };

  mod.run = function(data) {
    // legacy update as first version of nightTab did not have a version number stored in the state object
    if (!("version" in data)) {
      data = mod.all["1.0.0"](data);
    };

    // old version numbers were type of number
    // change them to strings to support new version checking
    if (typeof data.version == "number") {
      data.version = data.version.toString().split(".")
      data.version.push("0");
      data.version = data.version.join(".");
    };

    // loop over all updates in mod.all object
    for (var key in mod.all) {
      if (version.compare(data.version, key) == -1) {
        console.log("\t > running update", key);
        data = mod.all[key](data);
        data.version = key;
      };
    };

    // if no update is needed version bump
    if (version.compare(data.version, version.get().number) == -1) {
      console.log("\t > no state data to update, version bump to", version.get().number);
      data.version = version.get().number;
    };

    return data;
  };

  var run = function(data) {
    return mod.run(data);
  };

  // exposed methods
  return {
    mod: mod,
    run: run
  };

})();
