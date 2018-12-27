var version = (function() {

  var current = 1.0;

  var get = function() {
    return current;
  };

  // exposed methods
  return {
    get: get
  };

})();
