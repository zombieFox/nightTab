var helper = (function() {

  var e = function(selector) {
    return document.querySelector(selector);
  };

  var eA = function(selector) {
    return document.querySelectorAll(selector);
  };

  var toggleClass = function(element, theClassName) {
    element.classList.toggle(theClassName);
  };

  var addClass = function(element, theClassName) {
    element.classList.add(theClassName);
  };

  var removeClass = function(element, theClassName) {
    element.classList.remove(theClassName);
  };

  var getDateTime = function() {
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
      var textA = a[key];
      if (typeof textA == "string") {
        textA = textA.toLowerCase();
      };
      var textB = b[key];
      if (typeof textB == "string") {
        textB = textB.toLowerCase();
      };
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

  var applyOptions = function(options, override) {
    if (options && override) {
      if (override) {
        for (var key in override) {
          if (key in options) {
            options[key] = override[key];
          };
        };
      };
      return options;
    } else {
      return null;
    };
  };

  var hslToRgb = function(hslObject) {
    if (hslObject == undefined) {
      return null;
    };

    var chroma = (1 - Math.abs((2 * hslObject.l) - 1)) * hslObject.s;
    var huePrime = hslObject.h / 60;
    var secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1));

    huePrime = Math.floor(huePrime);
    var red;
    var green;
    var blue;

    if (huePrime === 0 || huePrime === 6) {
      red = chroma;
      green = secondComponent;
      blue = 0;
    } else if (huePrime === 1) {
      red = secondComponent;
      green = chroma;
      blue = 0;
    } else if (huePrime === 2) {
      red = 0;
      green = chroma;
      blue = secondComponent;
    } else if (huePrime === 3) {
      red = 0;
      green = secondComponent;
      blue = chroma;
    } else if (huePrime === 4) {
      red = secondComponent;
      green = 0;
      blue = chroma;
    } else if (huePrime === 5) {
      red = chroma;
      green = 0;
      blue = secondComponent;
    };

    var lightnessAdjustment = hslObject.l - (chroma / 2);
    red += lightnessAdjustment;
    green += lightnessAdjustment;
    blue += lightnessAdjustment;

    var result = {
      r: Math.round(red * 255),
      g: Math.round(green * 255),
      b: Math.round(blue * 255)
    };

    return result;
  };

  var hexToRgb = function(hex) {
    if (hex == undefined) {
      return null;
    };
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      result = {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      };
    };
    return result;
  };

  var rgbToHex = function(rgbObject) {
    if (rgbObject == undefined) {
      return null;
    };
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

  var makeNode = function(override) {
    var options = {
      tag: null,
      text: null,
      attr: null
    };
    if (override) {
      options = helper.applyOptions(options, override);
    };
    var element = document.createElement(options.tag);
    if (options.text != null) {
      element.textContent = options.text;
    };
    if (options.attr != null) {
      options.attr.forEach(function(arrayItem, index) {
        if ("key" in arrayItem && "value" in arrayItem) {
          element.setAttribute(arrayItem.key, arrayItem.value);
        } else if ("key" in arrayItem) {
          element.setAttribute(arrayItem.key, "");
        }
      });
    };
    return element;
  };

  function _makeAddress(path) {
    var array;
    if (path.indexOf("[") != -1 && path.indexOf("]") != -1) {
      array = path.split(".").join(",").split("[").join(",").split("]").join(",").split(",");
      for (var i = 0; i < array.length; i++) {
        if (array[i] == "") {
          array.splice(i, 1);
        };
        if (!isNaN(parseInt(array[i], 10))) {
          array[i] = parseInt(array[i], 10);
        };
      };
    } else {
      array = path.split(".");
    };
    return array;
  };

  function setObject(override) {
    var options = {
      path: null,
      object: null,
      newValue: null
    };
    if (override) {
      var options = applyOptions(options, override);
    };
    var address = _makeAddress(options.path);
    var _setData = function() {
      while (address.length > 1) {
        // shift off and store the first key
        var currentKey = address.shift();
        // if the key is not found make a new object
        if (!(currentKey in options.object)) {
          // make an empty object in the current object level
          if (isNaN(currentKey)) {
            options.object[currentKey] = {};
          } else {
            options.object[currentKey] = [];
          };
        };
        // drill down the object with the first key
        options.object = options.object[currentKey];
      };
      var finalKey = address.shift();
      options.object[finalKey] = options.newValue;
    };
    if (options.object != null && options.path != null && options.newValue != null) {
      _setData();
    } else {
      return false;
    };
  };

  function getObject(override) {
    var options = {
      object: null,
      path: null
    };
    if (override) {
      var options = applyOptions(options, override);
    };
    var address = _makeAddress(options.path);
    var _getData = function() {
      while (address.length > 1) {
        // shift off and store the first key
        var currentKey = address.shift();
        // if the key is not found make a new object
        if (!(currentKey in options.object)) {
          // make an empty object in the current object level
          if (isNaN(currentKey)) {
            options.object[currentKey] = {};
          } else {
            options.object[currentKey] = [];
          };
        };
        // drill down the object with the first key
        options.object = options.object[currentKey];
      };
      var finalKey = address.shift();
      if (!(finalKey in options.object)) {
        return "";
      } else {
        return options.object[finalKey];
      };
    };
    if (options.object != null && options.path != null) {
      return _getData();
    } else {
      return false;
    };
  };

  function makeObject(string) {
    var _stringOrBooleanOrNumber = function(stringToTest) {
      if (stringToTest == "true") {
        return true;
      } else if (stringToTest == "false") {
        return false;
      } else if (stringToTest.indexOf("#") != -1) {
        return stringToTest.substr(1, kevValuePair[1].length);
      } else {
        return "\"" + stringToTest + "\"";
      };
    };
    // if argument is a string
    if (typeof string == "string") {
      // start building the object
      var objectString = "{";
      // split the string on comma not followed by a space
      // split on character if not followed by a space
      var items = string.split(/,(?=\S)/);
      // loop over each item
      for (var i = 0; i < items.length; i++) {
        // split each would be object key values pair
        // split on character if not followed by a space
        var kevValuePair = items[i].split(/:(?=\S)/);
        // get the key
        var key = "\"" + kevValuePair[0] + "\"";
        var value;
        // if the value has + with a space after it
        if (/\+(?=\S)/.test(kevValuePair[1])) {
          // remove first + symbol
          kevValuePair[1] = kevValuePair[1].substr(1, kevValuePair[1].length);
          // split the would be values
          // split on character if not followed by a space
          var all_value = kevValuePair[1].split(/\+(?=\S)/);
          // if there are multiple values make an array
          value = "["
          for (var q = 0; q < all_value.length; q++) {
            value += _stringOrBooleanOrNumber(all_value[q]) + ",";
          };
          // remove last comma
          value = value.substr(0, value.length - 1);
          // close array
          value += "]"
        } else {
          value = _stringOrBooleanOrNumber(kevValuePair[1]);
        };
        objectString += key + ":" + value + ",";
      };
      // remove last comma
      objectString = objectString.substr(0, objectString.length - 1);
      // close object
      objectString += "}";
      var object = JSON.parse(objectString);
      return object;
    } else {
      return false;
    };
  };

  var allEqual = function(array) {
    return array.every(function(arrayItem) {
      return arrayItem === array[0];
    });
  };

  var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  var toWords = function(number) {
    var ten = 10;
    var oneHundred = 100;
    var oneThousand = 1000;
    var oneMillion = 1000000;
    var oneBillion = 1000000000; // 1,000,000,000 (9)
    var oneTrillion = 1000000000000; // 1,000,000,000,000 (12)
    var oneQuadrillion = 1000000000000000; // 1,000,000,000,000,000 (15)
    var max = 9007199254740992; // 9,007,199,254,740,992 (15)
    var lessThanTwenty = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    var tenthsLessThanHundred = ["Zero", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    var _generateWords = function(number) {
      var remainder, word,
        words = arguments[1];
      // We’re done
      if (number === 0) {
        return !words ? "zero" : words.join(" ").replace(/,$/, "");
      };
      // First run
      if (!words) {
        words = [];
      };
      // If negative, prepend “minus”
      if (number < 0) {
        words.push("minus");
        number = Math.abs(number);
      };
      if (number < 20) {
        remainder = 0;
        word = lessThanTwenty[number];
      } else if (number < oneHundred) {
        remainder = number % ten;
        word = tenthsLessThanHundred[Math.floor(number / ten)];
        // In case of remainder, we need to handle it here to be able to add the “-”
        if (remainder) {
          word += "-" + lessThanTwenty[remainder];
          remainder = 0;
        };
      } else if (number < oneThousand) {
        remainder = number % oneHundred;
        word = _generateWords(Math.floor(number / oneHundred)) + " Hundred";
      } else if (number < oneMillion) {
        remainder = number % oneThousand;
        word = _generateWords(Math.floor(number / oneThousand)) + " Thousand,";
      } else if (number < oneBillion) {
        remainder = number % oneMillion;
        word = _generateWords(Math.floor(number / oneMillion)) + " Million,";
      } else if (number < oneTrillion) {
        remainder = number % oneBillion;
        word = _generateWords(Math.floor(number / oneBillion)) + " Billion,";
      } else if (number < oneQuadrillion) {
        remainder = number % oneTrillion;
        word = _generateWords(Math.floor(number / oneTrillion)) + " Trillion,";
      } else if (number <= max) {
        remainder = number % oneQuadrillion;
        word = _generateWords(Math.floor(number / oneQuadrillion)) + " Quadrillion,";
      };
      words.push(word);
      return _generateWords(remainder, words);
    };
    var num = parseInt(number, 10);
    return _generateWords(num);
  };

  var ordinalWords = function(words) {
    var endsWithDoubleZeroPattern = /(hundred|thousand|(m|b|tr|quadr)illion)$/;
    var endsWithTeenPattern = /teen$/;
    var endsWithYPattern = /y$/;
    var endsWithZeroThroughTwelvePattern = /(Zero|One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Eleven|Twelve)$/;
    var ordinalLessThanThirteen = {
      Zero: "Zeroth",
      One: "First",
      Two: "Second",
      Three: "Third",
      Four: "Fourth",
      Five: "Fifth",
      Six: "Sixth",
      Seven: "Seventh",
      Eight: "Eighth",
      Nine: "Ninth",
      Ten: "Tenth",
      Eleven: "Eleventh",
      Twelve: "Twelfth"
    };
    var replaceWithOrdinalVariant = function(match, numberWord) {
      return ordinalLessThanThirteen[numberWord];
    };
    // Ends with *00 (100, 1000, etc.) or *teen (13, 14, 15, 16, 17, 18, 19)
    if (endsWithDoubleZeroPattern.test(words) || endsWithTeenPattern.test(words)) {
      return words + "th";
      // Ends with *y (20, 30, 40, 50, 60, 70, 80, 90)
    } else if (endsWithYPattern.test(words)) {
      return words.replace(endsWithYPattern, "ieth");
      // Ends with one through twelve
    } else if (endsWithZeroThroughTwelvePattern.test(words)) {
      return words.replace(endsWithZeroThroughTwelvePattern, replaceWithOrdinalVariant);
    };
    return words;
  };

  var ordinalNumber = function(number) {
    var j = number % 10;
    var k = number % 100;
    if (j == 1 && k != 11) {
      return number + "st";
    };
    if (j == 2 && k != 12) {
      return number + "nd";
    };
    if (j == 3 && k != 13) {
      return number + "rd";
    };
    return number + "th";
  };

  // exposed methods
  return {
    e: e,
    eA: eA,
    toggleClass: toggleClass,
    addClass: addClass,
    removeClass: removeClass,
    allEqual: allEqual,
    getDateTime: getDateTime,
    sortObject: sortObject,
    applyOptions: applyOptions,
    hexToRgb: hexToRgb,
    rgbToHex: rgbToHex,
    hslToRgb: hslToRgb,
    makeNode: makeNode,
    setObject: setObject,
    getObject: getObject,
    makeObject: makeObject,
    randomNumber: randomNumber,
    toWords: toWords,
    ordinalWords: ordinalWords,
    ordinalNumber: ordinalNumber
  };

})();
