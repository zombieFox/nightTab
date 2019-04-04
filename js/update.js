var update = (function() {

  var _update_100 = function(data) {
    var time = new Date().getTime();
    data.bookmarks.forEach(function(arrayItem, index) {
      time = time + 1;
      arrayItem.timeStamp = time;
    });
    data.version = 1.00;
    return data;
  };

  var _update_200 = function(data) {
    helper.setObject({
      object: state.get(),
      path: "layout.theme",
      newValue: data.theme
    });
    data = {
      state: state.get(),
      bookmarks: data.bookmarks
    };
    data.version = 2.00;
    return data;
  };

  var _update_210 = function(data) {
    data.state.layout.theme = {
      current: data.state.layout.theme,
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

  // var _update_300 = function(data) {
  //   data.version = 3.00;
  //   return data;
  // };

  function run(data) {
    if (!("version" in data)) {
      console.log("\t -- running update", 1.00);
      data = _update_100(data);
    };
    if (typeof data.version == "number") {
      if (data.version < 2.00) {
        console.log("\t -- running update", 2.00);
        data = _update_200(data);
      };
      if (data.version < 2.10) {
        console.log("\t -- running update", 2.10);
        data = _update_210(data);
      };
      if (data.version < 2.30) {
        console.log("\t -- running update", 2.30);
        data = _update_230(data);
      };
      if (data.version < 2.40) {
        console.log("\t -- running update", 2.40);
        data = _update_240(data);
      };
      if (data.version < 2.50) {
        console.log("\t -- running update", 2.50);
        data = _update_250(data);
      };
      if (data.version < 2.70) {
        console.log("\t -- running update", 2.70);
        data = _update_270(data);
      };
      if (data.version < 2.80) {
        console.log("\t -- running update", 2.80);
        data = _update_280(data);
      };
      if (data.version < 2.90) {
        console.log("\t -- running update", 2.90);
        data = _update_290(data);
      };
      if (data.version < 2.91) {
        console.log("\t -- running update", 2.91);
        data.version = 2.91;
      };
      if (data.version < 2.96) {
        // introduction of a new semantic version check function so the version is being bumped to 2.10.0 and changed to a string
        console.log("\t -- running update", "2.10.0");
        data.version = "2.10.0";
      };
    };
    if (typeof data.version == "string") {
      if (version.compare(data.version, "2.11.0") == -1) {
        console.log("\t -- running update", "2.11.0");
        data.state.header.greeting = {
          show: false,
          type: "good",
          name: ""
        };
        data.version = "2.11.0";
      };
      if (version.compare(data.version, "2.12.0") == -1) {
        console.log("\t -- running update", "2.12.0");
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
      };
      if (version.compare(data.version, "2.14.0") == -1) {
        console.log("\t -- running update", "2.14.0");
        data.state.layout.width = 72;
        data.version = "2.14.0";
      };
      if (version.compare(data.version, "2.16.0") == -1) {
        console.log("\t -- running update", "2.16.0");
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
      };
      if (version.compare(data.version, "2.17.0") == -1) {
        console.log("\t -- running update", "2.17.0");
        data.state.header.search.engine.google.name = "Google";
        data.state.header.search.engine.duckduckgo.name = "Duck Duck Go";
        data.state.header.search.engine.giphy.name = "Giphy";
        data.version = "2.17.0";
      };
      if (version.compare(data.version, "2.19.0") == -1) {
        console.log("\t -- running update", "2.19.0");
        data.state.header.search.engine.youtube = {
          url: "https://www.youtube.com/results?search_query=",
          name: "YouTube"
        };
        data.state.header.search.engine.custom.name = "";
        data.version = "2.19.0";
      };
    };
    // if no update is needed
    // version bump
    if (version.compare(data.version, version.get()) == -1) {
      console.log("\t -- nothing to update, version bump to", version.get());
      data.version = version.get();
    };
    return data;
  };

  // exposed methods
  return {
    run: run
  };

})();
