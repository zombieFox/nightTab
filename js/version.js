var version = (function() {

  var current = 2.0;

  var get = function() {
    return current;
  };

  // exposed methods
  return {
    get: get
  };

})();
