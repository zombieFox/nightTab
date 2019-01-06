var version = (function() {

  var current = "2.0.0";

  var get = function() {
    var number = current.split(".");
    return parseFloat(number.shift() + "." + number.join(""));
  };

  // exposed methods
  return {
    get: get
  };

})();
