var bookmarks = (function() {

  var all = [{
    letter: "CM",
    name: "Citymapper",
    url: "https://citymapper.com/london/superrouter",
    timeStamp: 1546453100455
  }, {
    letter: "DEV",
    name: "Devdocs",
    url: "http://devdocs.io/",
    timeStamp: 1546453101749
  }, {
    letter: "OD",
    name: "r/opendirectories/",
    url: "https://www.reddit.com/r/opendirectories/",
    timeStamp: 1546453102199
  }, {
    letter: "KP",
    name: "Keep",
    url: "https://keep.google.com/",
    timeStamp: 1546453102671
  }, {
    letter: "MHW",
    name: "r/monsterhunter/",
    url: "https://www.reddit.com/r/monsterhunter/",
    timeStamp: 1546453103110
  }, {
    letter: "M",
    name: "Maps",
    url: "https://www.google.co.uk/maps",
    timeStamp: 1546453103560
  }, {
    letter: "AS",
    name: "awesomeSheet",
    url: "https://zombiefox.github.io/awesomeSheet/",
    timeStamp: 1546453104010
  }, {
    letter: "N",
    name: "Netflix",
    url: "https://www.netflix.com/",
    timeStamp: 1546453104460
  }, {
    letter: "P",
    name: "Photos",
    url: "https://photos.google.com/",
    timeStamp: 1546453104910
  }, {
    letter: "FB",
    name: "Facebook",
    url: "https://www.facebook.com/",
    timeStamp: 1546453105349
  }, {
    letter: "GOT",
    name: "r/gameofthrones/",
    url: "https://www.reddit.com/r/gameofthrones/",
    timeStamp: 1546453105844
  }, {
    letter: "BX",
    name: "Box",
    url: "https://app.box.com/login/",
    timeStamp: 1546453106272
  }, {
    letter: "TFL",
    name: "TFL Map",
    url: "http://content.tfl.gov.uk/standard-tube-map.pdf",
    timeStamp: 1546453106734
  }, {
    letter: "PRG",
    name: "r/Pathfinder_RPG/",
    url: "https://www.reddit.com/r/Pathfinder_RPG/",
    timeStamp: 1546453107194
  }, {
    letter: "AZ",
    name: "Amazon",
    url: "https://www.amazon.co.uk/",
    timeStamp: 1546453107633
  }, {
    letter: "YT",
    name: "Youtube",
    url: "https://www.youtube.com/",
    timeStamp: 1546453108071
  }, {
    letter: "CO",
    name: "Contacts",
    url: "https://contacts.google.com/",
    timeStamp: 1546453108501
  }, {
    letter: "GIT",
    name: "Github",
    url: "https://github.com/login",
    timeStamp: 1546453108926
  }, {
    letter: "AN",
    name: "r/Android/",
    url: "https://www.reddit.com/r/Android/",
    timeStamp: 1546453109355
  }, {
    letter: "V",
    name: "r/videos/",
    url: "https://www.reddit.com/r/videos/",
    timeStamp: 1546453109840
  }, {
    letter: "GM",
    name: "Gmail",
    url: "https://mail.google.com/",
    timeStamp: 1546453110265
  }, {
    letter: "CAL",
    name: "Calendar",
    url: "https://www.google.com/calendar/",
    timeStamp: 1546453110885
  }, {
    letter: "R",
    name: "Reddit",
    url: "https://www.reddit.com/",
    timeStamp: 1546453111491
  }, {
    letter: "DR",
    name: "Drive",
    url: "https://drive.google.com/drive/",
    timeStamp: 1546453111953
  }, {
    letter: "ANA",
    name: "Analytics",
    url: "https://analytics.google.com/",
    timeStamp: 1546453112357
  }, {
    letter: "COS",
    name: "r/chromeos/",
    url: "https://www.reddit.com/r/chromeos/",
    timeStamp: 1546453112797
  }];

  var get = function(timeStamp) {
    var _singleBookmark = function() {
      for (var i = 0; i < all.length; i++) {
        if (all[i].timeStamp === timeStamp) {
          return all[i];
        };
      };
    };
    var _allBookmarks = function() {
      var by = {
        none: function(array) {
          return helper.sortObject(array, "timeStamp");
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
    if (timeStamp) {
      return _singleBookmark(timeStamp);
    } else {
      return _allBookmarks();
    };
  };

  var restore = function(data) {
    if ("bookmarks" in data) {
      all = data.bookmarks;
    };
  };

  var add = function(override) {
    var options = {
      letter: null,
      name: null,
      url: null,
      timeStamp: null
    };
    if (override) {
      options = helper.applyOptions(options, override);
    };
    var newBookmark = {
      letter: options.letter,
      name: options.name,
      url: options.url,
      timeStamp: options.timeStamp
    };
    all.push(newBookmark);
  };

  var edit = function(object, timeStamp) {
    for (var i = 0; i < all.length; i++) {
      if (all[i].timeStamp === timeStamp) {
        all[i] = object;
      };
    };
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
