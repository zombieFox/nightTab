var bookmarks = (function() {

  var mod = {};

  mod.all = [{
    name: "Cool stuff",
    items: [{
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
    }]
  }, {
    name: "Dev sites",
    items: [{
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
    }]
  }];

  mod.get = function(data) {
    var _singleBookmark = function() {
      var found = false;
      if (mod.all.length > 0) {
        mod.all.forEach(function(arrayItem, index) {
          arrayItem.forEach(function(arrayItem, index) {
            if (arrayItem[index].timeStamp === data.timeStamp) {
              found = arrayItem[index];
            };
          });
        });
      };
      return found;
    };
    if (data && typeof data.timeStamp == "number") {
      return _singleBookmark();
    } else {
      return mod.all;
    };
  };

  mod.restore = function(data) {
    if ("bookmarks" in data) {
      mod.all = data.bookmarks;
    };
  };

  mod.add = {
    link: function(data) {
      if (data.position.group.new) {
        mod.add.group();
      };
      mod.all[data.position.destination.group].items.splice(data.position.destination.item, 0, data.link);
    },
    group: function(data) {
      var makeName = function() {
        var count = get().length + 1;
        return "Group " + count;
      };
      if (data) {
        if (data.group.name == null) {
          data.group.name = makeName();
        } else if (typeof data.group.name == "string") {
          data.group.name = data.group.name.trim();
          if (data.group.name == "") {
            data.group.name = makeName();
          };
        };
        mod.all.splice(data.position.destination, 0, data.group);
      } else {
        mod.all.push({
          name: makeName(),
          items: []
        });
      };
    }
  };

  mod.edit = {
    link: function(data) {
      if (data.position.group.new) {
        mod.add.group({
          position: {
            origin: null,
            destination: data.position.destination.group
          },
          group: {
            name: data.position.group.name,
            items: []
          }
        });
      };
      var item = JSON.parse(JSON.stringify(data.link));
      mod.all[data.position.origin.group].items.splice(data.position.origin.item, 1);
      mod.all[data.position.destination.group].items.splice(data.position.destination.item, 0, item);
    },
    group: function(data) {
      var group = JSON.parse(JSON.stringify(data.group));
      mod.all.splice(data.position.origin, 1);
      mod.all.splice(data.position.destination, 0, group);
    }
  };

  mod.remove = {
    link: function(data) {
      mod.all[data.position.origin.group].items.splice(data.position.origin.item, 1);
    },
    group: function(data) {
      mod.all.splice(data.position.origin, 1);
    }
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
    mod.all.forEach(function(arrayItem, index) {
      arrayItem.items = action[by](arrayItem.items);
    });
  };

  mod.move = {
    link: function(data) {
      var item = JSON.parse(JSON.stringify(mod.all[data.position.origin.group].items[data.position.origin.item]));
      mod.all[data.position.origin.group].items.splice(data.position.origin.item, 1);
      mod.all[data.position.destination.group].items.splice(data.position.destination.item, 0, item);
    },
    group: function(data) {
      var group = JSON.parse(JSON.stringify(mod.all[data.position.origin]));
      mod.all.splice(data.position.origin, 1);
      mod.all.splice(data.position.destination, 0, group);
    }
  };

  mod.count = function() {
    var count = 0;
    mod.all.forEach(function(arrayItem, index) {
      count = count + arrayItem.items.length
    });
    return count;
  };

  var count = function() {
    return mod.count();
  };

  var get = function(data) {
    return mod.get(data);
  };

  var sort = function(by) {
    mod.sort(by);
  };

  var remove = {
    link: function(data) {
      mod.remove.link(data);
    },
    group: function(data) {
      mod.remove.group(data);
    }
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
    sort: sort,
    count: count,
    remove: remove
  };

})();
