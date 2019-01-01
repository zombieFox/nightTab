var bookmarks = (function() {

  var all = [{
    letter: "CM",
    name: "Citymapper",
    url: "https://citymapper.com/london/superrouter"
  }, {
    letter: "DEV",
    name: "Devdocs",
    url: "http://devdocs.io/"
  }, {
    letter: "OD",
    name: "r/opendirectories/",
    url: "https://www.reddit.com/r/opendirectories/"
  }, {
    letter: "KP",
    name: "Keep",
    url: "https://keep.google.com/"
  }, {
    letter: "MHW",
    name: "r/monsterhunter/",
    url: "https://www.reddit.com/r/monsterhunter/"
  }, {
    letter: "M",
    name: "Maps",
    url: "https://www.google.co.uk/maps"
  }, {
    letter: "AS",
    name: "awesomeSheet",
    url: "https://zombiefox.github.io/awesomeSheet/"
  }, {
    letter: "N",
    name: "Netflix",
    url: "https://www.netflix.com/"
  }, {
    letter: "P",
    name: "Photos",
    url: "https://photos.google.com/"
  }, {
    letter: "FB",
    name: "Facebook",
    url: "https://www.facebook.com/"
  }, {
    letter: "GOT",
    name: "r/gameofthrones/",
    url: "https://www.reddit.com/r/gameofthrones/"
  }, {
    letter: "BX",
    name: "Box",
    url: "https://app.box.com/login/"
  }, {
    letter: "TFL",
    name: "TFL Map",
    url: "http://content.tfl.gov.uk/standard-tube-map.pdf"
  }, {
    letter: "PRG",
    name: "r/Pathfinder_RPG/",
    url: "https://www.reddit.com/r/Pathfinder_RPG/"
  }, {
    letter: "AZ",
    name: "Amazon",
    url: "https://www.amazon.co.uk/"
  }, {
    letter: "YT",
    name: "Youtube",
    url: "https://www.youtube.com/"
  }, {
    letter: "CO",
    name: "Contacts",
    url: "https://contacts.google.com/"
  }, {
    letter: "GIT",
    name: "Github",
    url: "https://github.com/login"
  }, {
    letter: "AN",
    name: "r/Android/",
    url: "https://www.reddit.com/r/Android/"
  }, {
    letter: "V",
    name: "r/videos/",
    url: "https://www.reddit.com/r/videos/"
  }, {
    letter: "GM",
    name: "Gmail",
    url: "https://mail.google.com/"
  }, {
    letter: "CAL",
    name: "Calendar",
    url: "https://www.google.com/calendar/"
  }, {
    letter: "R",
    name: "Reddit",
    url: "https://www.reddit.com/"
  }, {
    letter: "DR",
    name: "Drive",
    url: "https://drive.google.com/drive/"
  }, {
    letter: "ANA",
    name: "Analytics",
    url: "https://analytics.google.com/"
  }, {
    letter: "COS",
    name: "r/chromeos/",
    url: "https://www.reddit.com/r/chromeos/"
  }];

  // var collectLinks = all;

  // var sortedBookmarks;

  // var duplicateAllBookmarks = function() {
  //   sortedBookmarks = JSON.parse(JSON.stringify(all));
  //   sortedBookmarks.forEach(function(arrayItem, index) {
  //     arrayItem.index = index;
  //   });
  // };

  var get = function() {
    return all;
    // return JSON.parse(JSON.stringify(all));
    // var by = {
    //   none: function(array) {
    //     return array;
    //   },
    //   name: function(array) {
    //     return helper.sortObject(array, "name");
    //   },
    //   letter: function(array) {
    //     return helper.sortObject(array, "letter");
    //   }
    // };
    // duplicateAllBookmarks();
    // sortedBookmarks = by[state.get().sort.view](sortedBookmarks)
    // return sortedBookmarks;
  };

  var restore = function(data) {
    if ("bookmarks" in data) {
      all = data.bookmarks;
    };
  };

  var add = function(object) {
    all.push(object);
  };

  var edit = function(object, index) {
    all[index] = object;
  };

  var remove = function(index) {
    all.splice(index, 1);
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
