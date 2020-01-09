var version = (function() {

  var current = "4.12.1";

  var name = "Naughty Goose";

  var compare = function(a, b) {
    var pa = a.split(".");
    var pb = b.split(".");
    for (var i = 0; i < 3; i++) {
      var na = Number(pa[i]);
      var nb = Number(pb[i]);
      if (na > nb) {
        return 1;
      };
      if (nb > na) {
        return -1;
      };
      if (!isNaN(na) && isNaN(nb)) {
        return 1;
      };
      if (isNaN(na) && !isNaN(nb)) {
        return -1;
      };
    };
    return 0;
  };

  var get = function() {
    // return chrome.runtime.getManifest().version;
    return {
      number: current,
      name: name
    };
  };

  var render = function() {
    helper.e(".display-version").textContent = get().number;
    helper.e(".display-name").textContent = get().name;
  };

  var init = function() {
    render();
  };

  // exposed methods
  return {
    init: init,
    get: get,
    compare: compare,
    render: render
  };

})();
