var bookmarks = (function() {

  var all = [{
    display: "letter",
    letter: "CM",
    icon: {
      name: null,
      prefix: null
    },
    name: "Citymapper",
    url: "https://citymapper.com/london/superrouter",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453100455
  }, {
    display: "letter",
    letter: "DEV",
    icon: {
      name: null,
      prefix: null
    },
    name: "Devdocs",
    url: "http://devdocs.io/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453101749
  }, {
    display: "letter",
    letter: "OD",
    icon: {
      name: null,
      prefix: null
    },
    name: "r/opendirectories/",
    url: "https://www.reddit.com/r/opendirectories/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453102199
  }, {
    display: "letter",
    letter: "KP",
    icon: {
      name: null,
      prefix: null
    },
    name: "Keep",
    url: "https://keep.google.com/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453102671
  }, {
    display: "letter",
    letter: "MHW",
    icon: {
      name: null,
      prefix: null
    },
    name: "r/monsterhunterworld/",
    url: "https://www.reddit.com/r/monsterhunterworld/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453103110
  }, {
    display: "letter",
    letter: "M",
    icon: {
      name: null,
      prefix: null
    },
    name: "Maps",
    url: "https://www.google.co.uk/maps",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453103560
  }, {
    display: "letter",
    letter: "AS",
    icon: {
      name: null,
      prefix: null
    },
    name: "awesomeSheet",
    url: "https://zombiefox.github.io/awesomeSheet/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453104010
  }, {
    display: "letter",
    letter: "N",
    icon: {
      name: null,
      prefix: null
    },
    name: "Netflix",
    url: "https://www.netflix.com/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453104460
  }, {
    display: "letter",
    letter: "P",
    icon: {
      name: null,
      prefix: null
    },
    name: "Photos",
    url: "https://photos.google.com/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453104910
  }, {
    display: "letter",
    letter: "FB",
    icon: {
      name: null,
      prefix: null
    },
    name: "Facebook",
    url: "https://www.facebook.com/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453105349
  }, {
    display: "letter",
    letter: "GOT",
    icon: {
      name: null,
      prefix: null
    },
    name: "r/gameofthrones/",
    url: "https://www.reddit.com/r/gameofthrones/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453105844
  }, {
    display: "letter",
    letter: "BX",
    icon: {
      name: null,
      prefix: null
    },
    name: "Box",
    url: "https://app.box.com/login/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453106272
  }, {
    display: "letter",
    letter: "TFL",
    icon: {
      name: null,
      prefix: null
    },
    name: "TFL Map",
    url: "http://content.tfl.gov.uk/standard-tube-map.pdf",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453106734
  }, {
    display: "letter",
    letter: "PRG",
    icon: {
      name: null,
      prefix: null
    },
    name: "r/Pathfinder_RPG/",
    url: "https://www.reddit.com/r/Pathfinder_RPG/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453107194
  }, {
    display: "letter",
    letter: "AZ",
    icon: {
      name: null,
      prefix: null
    },
    name: "Amazon",
    url: "https://www.amazon.co.uk/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453107633
  }, {
    display: "letter",
    letter: "YT",
    icon: {
      name: null,
      prefix: null
    },
    name: "Youtube",
    url: "https://www.youtube.com/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453108071
  }, {
    display: "letter",
    letter: "CO",
    icon: {
      name: null,
      prefix: null
    },
    name: "Contacts",
    url: "https://contacts.google.com/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453108501
  }, {
    display: "letter",
    letter: "GIT",
    icon: {
      name: null,
      prefix: null
    },
    name: "Github",
    url: "https://github.com/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453108926
  }, {
    display: "letter",
    letter: "AN",
    icon: {
      name: null,
      prefix: null
    },
    name: "r/Android/",
    url: "https://www.reddit.com/r/Android/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453109355
  }, {
    display: "letter",
    letter: "V",
    icon: {
      name: null,
      prefix: null
    },
    name: "r/videos/",
    url: "https://www.reddit.com/r/videos/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453109840
  }, {
    display: "letter",
    letter: "GM",
    icon: {
      name: null,
      prefix: null
    },
    name: "Gmail",
    url: "https://mail.google.com/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453110265
  }, {
    display: "letter",
    letter: "CAL",
    icon: {
      name: null,
      prefix: null
    },
    name: "Calendar",
    url: "https://www.google.com/calendar/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453110885
  }, {
    display: "letter",
    letter: "R",
    icon: {
      name: null,
      prefix: null
    },
    name: "Reddit",
    url: "https://www.reddit.com/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453111491
  }, {
    display: "letter",
    letter: "DR",
    icon: {
      name: null,
      prefix: null
    },
    name: "Drive",
    url: "https://drive.google.com/drive/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453111953
  }, {
    display: "letter",
    letter: "ANA",
    icon: {
      name: null,
      prefix: null
    },
    name: "Analytics",
    url: "https://analytics.google.com/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453112357
  }, {
    display: "letter",
    letter: "COS",
    icon: {
      name: null,
      prefix: null
    },
    name: "r/chromeos/",
    url: "https://www.reddit.com/r/chromeos/",
    accent: {
      override: false,
      color: {
        r: null,
        g: null,
        b: null
      }
    },
    timeStamp: 1546453112797
  }];

  var get = function(data) {
    var _singleBookmark = function() {
      var found = false;
      for (var i = 0; i < all.length; i++) {
        if (all[i].timeStamp === data.timeStamp) {
          found = all[i];
        };
      };
      return found;
    };
    var _allBookmarks = function() {
      var action = {
        none: function(array) {
          return helper.sortObject(array, "timeStamp");
        },
        name: function(array) {
          return helper.sortObject(array, "name");
        },
        letter: function(array) {
          return helper.sortObject(array, "letter");
        },
        icon: function(array) {
          return helper.sortObject(array, "icon");
        }
      };
      return action[state.get().bookmarks.sort](all);
    };
    if (data && typeof data.timeStamp == "number") {
      return _singleBookmark();
    } else {
      return _allBookmarks();
    };
  };

  var restore = function(data) {
    if ("bookmarks" in data) {
      all = data.bookmarks;
    };
  };

  var add = function(data) {
    all.push(data);
  };

  var edit = function(data) {
    for (var i = 0; i < all.length; i++) {
      if (all[i].timeStamp === data.timeStamp) {
        all[i] = data;
      };
    };
  };

  var remove = function(data) {
    for (var i = 0; i < all.length; i++) {
      if (all[i].timeStamp === data.timeStamp) {
        all.splice(all.indexOf(all[i]), 1);
      };
    };
  };

  var init = function() {
    if (data.load()) {
      restore(data.load());
    };
  };

  // exposed methods
  return {
    all: all,
    init: init,
    get: get,
    add: add,
    edit: edit,
    remove: remove
  };

})();
