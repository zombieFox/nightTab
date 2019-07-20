var bookmarks = (function() {

  var mod = {};

  mod.all = [{
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
    letter: "AZ",
    icon: {
      name: "amazon",
      prefix: "fab",
      label: "Amazon"
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
    display: "letter",
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
    display: "letter",
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

  mod.get = function(data) {
    var _singleBookmark = function() {
      var found = false;
      for (var i = 0; i < all.length; i++) {
        if (all[i].timeStamp === data.timeStamp) {
          found = all[i];
        };
      };
      return found;
    };
    if (data && typeof data.timeStamp == "number") {
      return _singleBookmark();
    } else {
      return all;
    };
  };

  mod.restore = function(data) {
    if ("bookmarks" in data) {
      all = data.bookmarks;
    };
  };

  mod.add = function(data) {
    all.push(data);
  };

  mod.edit = function(data) {
    for (var i = 0; i < all.length; i++) {
      if (all[i].timeStamp === data.timeStamp) {
        all[i] = data;
      };
    };
  };

  mod.remove = function(data) {
    for (var i = 0; i < all.length; i++) {
      if (all[i].timeStamp === data.timeStamp) {
        all.splice(all.indexOf(all[i]), 1);
      };
    };
  };

  mod.sort = function(by) {
    var action = {
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
    all = action[by](all);
  };

  mod.move = function(origin, destination) {
    all = helper.moveArrayItem(all, origin, destination);
  };

  var get = function(data) {
    return mod.get(data);
  };

  var add = function(data) {
    mod.add(data);
  };

  var edit = function(data) {
    mod.edit(data);
  };

  var sort = function(by) {
    mod.sort(by);
  };

  var move = function(origin, destination) {
    mod.move(origin, destination);
  };

  var remove = function(data) {
    mod.remove(data);
  };

  var init = function() {
    if (data.load()) {
      mod.restore(data.load());
    };
  };

  // exposed methods
  return {
    init: init,
    mod: mod,
    get: get,
    add: add,
    edit: edit,
    sort: sort,
    move: move,
    remove: remove
  };

})();
