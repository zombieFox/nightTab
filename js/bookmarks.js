var bookmarks = (function() {

  var all = [{
    url: "https://www.reddit.com/r/Android/",
    name: "/r/Android/",
    letter: "AN"
  }, {
    url: "https://analytics.google.com/",
    name: "Analytics",
    letter: "ANA"
  }, {
    url: "https://zombiefox.github.io/awesomeSheet/",
    name: "awesomeSheet",
    letter: "AS"
  }, {
    url: "https://www.amazon.co.uk/",
    name: "Amazon",
    letter: "AZ"
  }, {
    url: "https://app.box.com/login/",
    name: "Box",
    letter: "BX"
  }, {
    url: "https://www.google.com/calendar/",
    name: "Calendar",
    letter: "CAL"
  }, {
    url: "https://citymapper.com/london/superrouter",
    name: "Citymapper",
    letter: "CM"
  }, {
    url: "https://contacts.google.com/",
    name: "Contacts",
    letter: "CO"
  }, {
    url: "https://www.reddit.com/r/chromeos/",
    name: "/r/chromeos/",
    letter: "COS"
  }, {
    url: "https://drive.google.com/drive/",
    name: "Drive",
    letter: "DR"
  }, {
    url: "http://devdocs.io/",
    name: "Devdocs",
    letter: "DEV"
  }, {
    url: "https://www.facebook.com/",
    name: "Facebook",
    letter: "FB"
  }, {
    url: "https://github.com/login",
    name: "Github",
    letter: "GIT"
  }, {
    url: "https://mail.google.com/",
    name: "Gmail",
    letter: "GM"
  }, {
    url: "https://www.reddit.com/r/gameofthrones/",
    name: "/r/gameofthrones/",
    letter: "GOT"
  }, {
    url: "https://keep.google.com/",
    name: "Keep",
    letter: "KP"
  }, {
    url: "https://www.google.co.uk/maps",
    name: "Maps",
    letter: "M"
  }, {
    url: "https://www.reddit.com/r/monsterhunter/",
    name: "/r/monsterhunter/",
    letter: "MHW"
  }, {
    url: "https://www.netflix.com/",
    name: "Netflix",
    letter: "N"
  }, {
    url: "https://www.reddit.com/r/opendirectories/",
    name: "/r/opendirectories/",
    letter: "OD"
  }, {
    url: "https://photos.google.com/",
    name: "Photos",
    letter: "P"
  }, {
    url: "https://www.reddit.com/r/Pathfinder_RPG/",
    name: "/r/Pathfinder_RPG/",
    letter: "PRG"
  }, {
    url: "https://www.reddit.com/",
    name: "Reddit",
    letter: "R"
  }, {
    url: "http://content.tfl.gov.uk/standard-tube-map.pdf",
    name: "TFL Map",
    letter: "TFL"
  }, {
    url: "https://www.reddit.com/r/videos/",
    name: "/r/videos/",
    letter: "V"
  }, {
    url: "https://www.youtube.com/",
    name: "Youtube",
    letter: "YT"
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
