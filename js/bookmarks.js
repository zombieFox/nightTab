var bookmarks = (function() {

  var all = [{
    display: "icon",
    letter: "DEV",
    icon: {
      name: "code",
      prefix: "fas",
      label: "Code"
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
    letter: "M",
    icon: {
      name: null,
      prefix: null,
      label: null
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
    display: "icon",
    letter: "AS",
    icon: {
      name: "dice-d20",
      prefix: "fas",
      label: "Dice D20"
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
    display: "icon",
    letter: "N",
    icon: {
      name: "film",
      prefix: "fas",
      label: "Film"
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
    letter: "GOT",
    icon: {
      name: null,
      prefix: null,
      label: null
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
    display: "icon",
    letter: "AZ",
    icon: {
      name: "amazon",
      prefix: "fab",
      label: "Amazon"
    },
    name: "Amazon",
    url: "https://www.amazon.co.uk/",
    accent: {
      override: true,
      color: {
        r: 255,
        g: 168,
        b: 0
      }
    },
    timeStamp: 1546453107633
  }, {
    display: "icon",
    letter: "YT",
    icon: {
      name: "youtube",
      prefix: "fab",
      label: "YouTube"
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
    display: "icon",
    letter: "GIT",
    icon: {
      name: "github",
      prefix: "fab",
      label: "GitHub"
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
    display: "icon",
    letter: "GM",
    icon: {
      name: "envelope",
      prefix: "fas",
      label: "Envelope"
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
    display: "icon",
    letter: "R",
    icon: {
      name: "reddit-alien",
      prefix: "fab",
      label: "reddit Alien"
    },
    name: "Reddit",
    url: "https://www.reddit.com/",
    accent: {
      override: true,
      color: {
        r: 255,
        g: 69,
        b: 0
      }
    },
    timeStamp: 1546453111491
  }, {
    display: "letter",
    letter: "DR",
    icon: {
      name: null,
      prefix: null,
      label: null
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
          return helper.sortObject(array, "icon.name");
        }
      };
      return action[state.get().link.sort](all);
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
    remove: remove,
    restore: restore
  };

})();
