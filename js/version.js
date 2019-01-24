var version = (function() {

  // version is normally bumped when the state needs changing or any new functionality is added
  var current = "2.5.0";

  var get = function() {
    var number = current.split(".");
    return parseFloat(number.shift() + "." + number.join(""));
  };

  // exposed methods
  return {
    get: get
  };

})();
