var version = (function() {

  // version is normally bumped when the state needs changing or any new functionality is added
  var current = "2.9.4";

  var get = function() {
    var number = current.split(".");
    return parseFloat(number.shift() + "." + number.join(""));
  };

  // exposed methods
  return {
    get: get
  };

})();
