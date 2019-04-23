var clock = (function() {

  var bind = function() {
    window.setInterval(function() {
      clear();
      render();
    }, 1000);
  };

  var clear = function() {
    var clock = helper.e(".clock");
    while (clock.lastChild) {
      clock.removeChild(clock.lastChild);
    };
  };

  var _makeTimeObject = function() {
    var time = helper.getDateTime();
    time.meridiem = "AM";
    if (state.get().header.clock.hour24) {
      if (time.hours < 10) {
        time.hours = "0" + time.hours;
      };
    } else {
      if (time.hours > 12) {
        time.meridiem = "PM";
        time.hours = time.hours - 12;
      };
      if (time.hours == 0) {
        time.hours = 12;
      };
    };
    if (time.minutes < 10) {
      time.minutes = "0" + time.minutes;
    };
    if (time.seconds < 10) {
      time.seconds = "0" + time.seconds;
    };
    return time;
  };

  var render = function() {
    var _clock = function() {
      var clock = helper.e(".clock");
      var timeObject = _makeTimeObject();
      var action = {
        hours: {
          word: function(value) {
            return helper.toWords(value);
          },
          number: function(value) {
            return value;
          }
        },
        minutes: {
          word: function(value) {
            return helper.toWords(value);
          },
          number: function(value) {
            return value;
          }
        },
        seconds: {
          word: function(value) {
            return helper.toWords(value);
          },
          number: function(value) {
            return value;
          }
        }
      };
      timeObject.hours = action.hours[state.get().header.clock.hours.display](timeObject.hours);
      timeObject.minutes = action.minutes[state.get().header.clock.minutes.display](timeObject.minutes);
      timeObject.seconds = action.seconds[state.get().header.clock.seconds.display](timeObject.seconds);
      var elementHours = helper.makeNode({
        tag: "span",
        text: timeObject.hours,
        attr: [{
          key: "class",
          value: "clock-item clock-hours"
        }]
      });
      var elementMinutes = helper.makeNode({
        tag: "span",
        text: timeObject.minutes,
        attr: [{
          key: "class",
          value: "clock-item clock-minutes"
        }]
      });
      var elementSeconds = helper.makeNode({
        tag: "span",
        text: timeObject.seconds,
        attr: [{
          key: "class",
          value: "clock-item clock-seconds"
        }]
      });
      var elementMeridiem = helper.makeNode({
        tag: "span",
        text: timeObject.meridiem,
        attr: [{
          key: "class",
          value: "clock-item clock-meridiem"
        }]
      });
      if (state.get().header.clock.hours.show) {
        clock.appendChild(elementHours);
      };
      if (state.get().header.clock.minutes.show) {
        clock.appendChild(elementMinutes);
      };
      if (state.get().header.clock.seconds.show) {
        clock.appendChild(elementSeconds);
      };
      if (!state.get().header.clock.hour24 && state.get().header.clock.meridiem.show) {
        clock.appendChild(elementMeridiem);
      };
      if (state.get().header.clock.separator.show) {
        var separatorCharacter = ":";
        var parts = clock.querySelectorAll("span");
        if (parts.length > 1) {
          parts.forEach(function(arrayItem, index) {
            if (index > 0 && !arrayItem.classList.contains("clock-meridiem")) {
              var separator = helper.makeNode({
                tag: "span",
                text: separatorCharacter,
                attr: [{
                  key: "class",
                  value: "clock-separator"
                }]
              });
              clock.insertBefore(separator, arrayItem);
            };
          });
        };
      };
    };
    if (state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show) {
      _clock();
    };
  };

  var init = function() {
    render();
    bind();
  };

  // exposed methods
  return {
    init: init,
    bind: bind,
    render: render,
    clear: clear
  };

})();
