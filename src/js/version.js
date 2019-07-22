var version = (function() {

  var current = "3.61.1";

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
    return current;
  };

  var render = function() {
    helper.e(".display-version").textContent = get();
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
