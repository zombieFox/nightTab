var bookmarks = (function() {

  var all = [{
    letter: "CM",
    name: "Citymapper",
    url: "https://citymapper.com/london/superrouter",
    index: 0
  }, {
    letter: "DEV",
    name: "Devdocs",
    url: "http://devdocs.io/",
    index: 1
  }, {
    letter: "OD",
    name: "r/opendirectories/",
    url: "https://www.reddit.com/r/opendirectories/",
    index: 2
  }, {
    letter: "KP",
    name: "Keep",
    url: "https://keep.google.com/",
    index: 3
  }, {
    letter: "MHW",
    name: "r/monsterhunter/",
    url: "https://www.reddit.com/r/monsterhunter/",
    index: 4
  }, {
    letter: "M",
    name: "Maps",
    url: "https://www.google.co.uk/maps",
    index: 5
  }, {
    letter: "AS",
    name: "awesomeSheet",
    url: "https://zombiefox.github.io/awesomeSheet/",
    index: 6
  }, {
    letter: "N",
    name: "Netflix",
    url: "https://www.netflix.com/",
    index: 7
  }, {
    letter: "P",
    name: "Photos",
    url: "https://photos.google.com/",
    index: 8
  }, {
    letter: "FB",
    name: "Facebook",
    url: "https://www.facebook.com/",
    index: 9
  }, {
    letter: "GOT",
    name: "r/gameofthrones/",
    url: "https://www.reddit.com/r/gameofthrones/",
    index: 10
  }, {
    letter: "BX",
    name: "Box",
    url: "https://app.box.com/login/",
    index: 11
  }, {
    letter: "TFL",
    name: "TFL Map",
    url: "http://content.tfl.gov.uk/standard-tube-map.pdf",
    index: 12
  }, {
    letter: "PRG",
    name: "r/Pathfinder_RPG/",
    url: "https://www.reddit.com/r/Pathfinder_RPG/",
    index: 13
  }, {
    letter: "AZ",
    name: "Amazon",
    url: "https://www.amazon.co.uk/",
    index: 14
  }, {
    letter: "YT",
    name: "Youtube",
    url: "https://www.youtube.com/",
    index: 15
  }, {
    letter: "CO",
    name: "Contacts",
    url: "https://contacts.google.com/",
    index: 16
  }, {
    letter: "GIT",
    name: "Github",
    url: "https://github.com/login",
    index: 17
  }, {
    letter: "AN",
    name: "r/Android/",
    url: "https://www.reddit.com/r/Android/",
    index: 18
  }, {
    letter: "V",
    name: "r/videos/",
    url: "https://www.reddit.com/r/videos/",
    index: 19
  }, {
    letter: "GM",
    name: "Gmail",
    url: "https://mail.google.com/",
    index: 20
  }, {
    letter: "CAL",
    name: "Calendar",
    url: "https://www.google.com/calendar/",
    index: 21
  }, {
    letter: "R",
    name: "Reddit",
    url: "https://www.reddit.com/",
    index: 22
  }, {
    letter: "DR",
    name: "Drive",
    url: "https://drive.google.com/drive/",
    index: 23
  }, {
    letter: "ANA",
    name: "Analytics",
    url: "https://analytics.google.com/",
    index: 24
  }, {
    letter: "COS",
    name: "r/chromeos/",
    url: "https://www.reddit.com/r/chromeos/",
    index: 25
  }];

  var get = function(index) {
    var _singleBookmark = function() {
      for (var i = 0; i < all.length; i++) {
        if (all[i].index === index) {
          return all[i];
        };
      };
    };
    var _allBookmarks = function() {
      var by = {
        none: function(array) {
          return helper.sortObject(array, "index");
        },
        name: function(array) {
          return helper.sortObject(array, "name");
        },
        letter: function(array) {
          return helper.sortObject(array, "letter");
        }
      };
      return by[state.get().sort.view](all);
    };
    if (index) {
      return _singleBookmark(index);
    } else {
      return _allBookmarks();
    };
  };

  var restore = function(data) {
    if ("bookmarks" in data) {
      all = data.bookmarks;
    };
  };

  var add = function(object) {
    object.index = all.length;
    all.push(object);
  };

  var edit = function(object, index) {
    object.index = state.get().links.editObject.index;
    all[index] = object;
  };

  var remove = function(index) {
    for (var i = 0; i < all.length; i++) {
      if (all[i].index === index) {
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
