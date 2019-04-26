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

  // var _update_300 = function(data) {
  //   data.version = 3.00;
  //   return data;
  // };

  function run(data) {
    if (!("version" in data)) {
      console.log("\t= running update", 1.00);
      data = _update_100(data);
    };
    if (typeof data.version == "number") {
      if (data.version < 2.00) {
        console.log("\t= running update 2.0.0");
        data = _update_200(data);
      };
      if (data.version < 2.10) {
        console.log("\t= running update 2.1.0");
        data = _update_210(data);
      };
      if (data.version < 2.30) {
        console.log("\t= running update 2.3.0");
        data = _update_230(data);
      };
      if (data.version < 2.40) {
        console.log("\t= running update 2.4.0");
        data = _update_240(data);
      };
      if (data.version < 2.50) {
        console.log("\t= running update 2.5.0");
        data = _update_250(data);
      };
      if (data.version < 2.70) {
        console.log("\t= running update 2.7.0");
        data = _update_270(data);
      };
      if (data.version < 2.80) {
        console.log("\t= running update 2.8.0");
        data = _update_280(data);
      };
      if (data.version < 2.90) {
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
