var helper = (function() {

  // methods on this object
  function e(selector) {
    return document.querySelector(selector);
  };

  function eA(selector) {
    return document.querySelectorAll(selector);
  };

  function toggleClass(element, theClassName) {
    element.classList.toggle(theClassName);
  };

  function addClass(element, theClassName) {
    element.classList.add(theClassName);
  };

  function removeClass(element, theClassName) {
    element.classList.remove(theClassName);
  };

  function getDateTime() {
    var dateStamp = new Date();
    var object = {
      // string: dateStamp.constructor(),
      // time: dateStamp.getTime()
      date: dateStamp.getDate(),
      day: dateStamp.getDay(),
      year: dateStamp.getFullYear(),
      hours: dateStamp.getHours(),
      milliseconds: dateStamp.getMilliseconds(),
      minutes: dateStamp.getMinutes(),
      month: dateStamp.getMonth(),
      seconds: dateStamp.getSeconds()
    }
    return object;
  };

  var sortObject = function(object, key) {
    object.sort(function(a, b) {
      var textA = a[key].toLowerCase();
      var textB = b[key].toLowerCase();
      if (textA < textB) {
        return -1;
      } else if (textA > textB) {
        return 1;
      } else {
        return 0;
      };
    });
    return object;
  };

  function applyOptions(defaultOptions, options) {
    if (defaultOptions && options) {
      if (options) {
        for (var key in options) {
          if (key in defaultOptions) {
            defaultOptions[key] = options[key];
          };
        };
      };
      return defaultOptions;
    } else {
      return null;
    };
  };

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      result = {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      };
    } else {
      result = null;
    }
    return result;
  };

  function rgbToHex(rgbObject) {
    var componentToHex = function(hexPart) {
      hexPart = hexPart.toString(16);
      if (hexPart.length == 1) {
        hexPart = "0" + hexPart
      };
      return hexPart;
    };
    var result = "#" + componentToHex(rgbObject.r) + componentToHex(rgbObject.g) + componentToHex(rgbObject.b);
    return result;
  };

  // exposed methods
  return {
    e: e,
    eA: eA,
    toggleClass: toggleClass,
    addClass: addClass,
    removeClass: removeClass,
    getDateTime: getDateTime,
    sortObject: sortObject,
    applyOptions: applyOptions,
    hexToRgb: hexToRgb,
    rgbToHex: rgbToHex
  };

})();
