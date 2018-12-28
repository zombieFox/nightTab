var bookmarks = (function() {

  var all = [{
    letter: "AN",
    name: "/r/Android/",
    url: "https://www.reddit.com/r/Android/"
  }, {
    letter: "ANA",
    name: "Analytics",
    url: "https://analytics.google.com/"
  }, {
    letter: "AS",
    name: "awesomeSheet",
    url: "https://zombiefox.github.io/awesomeSheet/"
  }, {
    letter: "AZ",
    name: "Amazon",
    url: "https://www.amazon.co.uk/"
  }, {
    letter: "BX",
    name: "Box",
    url: "https://app.box.com/login/"
  }, {
    letter: "CAL",
    name: "Calendar",
    url: "https://www.google.com/calendar/"
  }, {
    letter: "CM",
    name: "Citymapper",
    url: "https://citymapper.com/london/superrouter"
  }, {
    letter: "CO",
    name: "Contacts",
    url: "https://contacts.google.com/"
  }, {
    letter: "COS",
    name: "/r/chromeos/",
    url: "https://www.reddit.com/r/chromeos/"
  }, {
    letter: "DR",
    name: "Drive",
    url: "https://drive.google.com/drive/"
  }, {
    letter: "DEV",
    name: "Devdocs",
    url: "http://devdocs.io/"
  }, {
    letter: "FB",
    name: "Facebook",
    url: "https://www.facebook.com/"
  }, {
    letter: "GIT",
    name: "Github",
    url: "https://github.com/login"
  }, {
    letter: "GM",
    name: "Gmail",
    url: "https://mail.google.com/"
  }, {
    letter: "GOT",
    name: "/r/gameofthrones/",
    url: "https://www.reddit.com/r/gameofthrones/"
  }, {
    letter: "KP",
    name: "Keep",
    url: "https://keep.google.com/"
  }, {
    letter: "M",
    name: "Maps",
    url: "https://www.google.co.uk/maps"
  }, {
    letter: "MHW",
    name: "/r/monsterhunter/",
    url: "https://www.reddit.com/r/monsterhunter/"
  }, {
    letter: "N",
    name: "Netflix",
    url: "https://www.netflix.com/"
  }, {
    letter: "OD",
    name: "/r/opendirectories/",
    url: "https://www.reddit.com/r/opendirectories/"
  }, {
    letter: "P",
    name: "Photos",
    url: "https://photos.google.com/"
  }, {
    letter: "PRG",
    name: "/r/Pathfinder_RPG/",
    url: "https://www.reddit.com/r/Pathfinder_RPG/"
  }, {
    letter: "R",
    name: "Reddit",
    url: "https://www.reddit.com/"
  }, {
    letter: "TFL",
    name: "TFL Map",
    url: "http://content.tfl.gov.uk/standard-tube-map.pdf"
  }, {
    letter: "V",
    name: "/r/videos/",
    url: "https://www.reddit.com/r/videos/"
  }, {
    letter: "YT",
    name: "Youtube",
    url: "https://www.youtube.com/"
  }];

  var get = function() {
    return all;
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

  var restore = function(array) {
    if (array) {
      all = array;
    };
  };

  // exposed methods
  return {
    get: get,
    add: add,
    edit: edit,
    remove: remove,
    restore: restore
  };

})();
