var version = (function() {

  // version is normally bumped when the state needs changing or any new functionality is added
  var current = "2.16.1";

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
    }
    return 0;
  };

  var get = function() {
    return current;
  };

  // exposed methods
  return {
    get: get,
    compare: compare
  };

})();
