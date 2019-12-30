var clock = (function() {

  var bind = {};

  bind.tick = function() {
    window.setInterval(function() {
      render.clear();
      render.all();
    }, 1000);
  };

  var render = {};

  render.clear = function() {
    var clock = helper.e(".clock");
    while (clock.lastChild) {
      clock.removeChild(clock.lastChild);
    };
  };

  render.all = function() {
    if (state.get.current().header.clock.seconds.show || state.get.current().header.clock.minutes.show || state.get.current().header.clock.hours.show) {
      var timeDateNow = moment();
      var timeStrings = {
        hours: null,
        minutes: null,
        seconds: null,
        meridiem: null
      };
      var action = {
        hours: {
          word: function() {
            timeStrings.hours = timeDateNow.hours();
            if (!state.get.current().header.clock.hour24.show && timeDateNow.hours() > 12) {
              timeStrings.hours = timeStrings.hours - 12;
            };
            if (!state.get.current().header.clock.hour24.show && timeDateNow.hours() == 0) {
              timeStrings.hours = 12;
            };
            timeStrings.hours = helper.toWords(timeStrings.hours);
            if (state.get.current().header.clock.hour24.show && timeDateNow.hours() > 0 && timeDateNow.hours() < 10) {
              timeStrings.hours = "Zero " + timeStrings.hours;
            };
          },
          number: function() {
            timeStrings.hours = timeDateNow.hours();
            if (!state.get.current().header.clock.hour24.show && timeDateNow.hours() > 12) {
              timeStrings.hours = timeStrings.hours - 12;
            };
            if (!state.get.current().header.clock.hour24.show && timeDateNow.hours() == 0) {
              timeStrings.hours = 12;
            };
            if (state.get.current().header.clock.hour24.show && timeDateNow.hours() < 10) {
              timeStrings.hours = "0" + timeStrings.hours;
            };
          }
        },
        minutes: {
          word: function() {
            timeStrings.minutes = helper.toWords(timeDateNow.minutes());
            if (timeDateNow.minutes() > 0 && timeDateNow.minutes() < 10) {
              timeStrings.minutes = "Zero " + timeStrings.minutes;
            };
          },
          number: function() {
            timeStrings.minutes = timeDateNow.minutes();
            if (timeDateNow.minutes() < 10) {
              timeStrings.minutes = "0" + timeStrings.minutes;
            };
          }
        },
        seconds: {
          word: function() {
            timeStrings.seconds = helper.toWords(timeDateNow.seconds());
            if (timeDateNow.seconds() > 0 && timeDateNow.seconds() < 10) {
              timeStrings.seconds = "Zero " + timeStrings.seconds;
            };
          },
          number: function() {
            timeStrings.seconds = timeDateNow.seconds();
            if (timeDateNow.seconds() < 10) {
              timeStrings.seconds = "0" + timeStrings.seconds;
            };
          }
        },
        meridiem: function() {
          timeStrings.meridiem = timeDateNow.format("A");
        }
      };
      action.hours[state.get.current().header.clock.hours.display]();
      action.minutes[state.get.current().header.clock.minutes.display]();
      action.seconds[state.get.current().header.clock.seconds.display]();
      action.meridiem();
      var clock = helper.e(".clock");
      var elementHours = helper.node("span:" + timeStrings.hours + "|class:clock-item clock-hours");
      var elementMinutes = helper.node("span:" + timeStrings.minutes + "|class:clock-item clock-minutes");
      var elementSeconds = helper.node("span:" + timeStrings.seconds + "|class:clock-item clock-seconds");
      var elementMeridiem = helper.node("span:" + timeStrings.meridiem + "|class:clock-item clock-meridiem");
      if (state.get.current().header.clock.hours.show) {
        clock.appendChild(elementHours);
      };
      if (state.get.current().header.clock.minutes.show) {
        clock.appendChild(elementMinutes);
      };
      if (state.get.current().header.clock.seconds.show) {
        clock.appendChild(elementSeconds);
      };
      if (!state.get.current().header.clock.hour24.show && state.get.current().header.clock.meridiem.show) {
        clock.appendChild(elementMeridiem);
      };
      if (state.get.current().header.clock.separator.show) {
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
                  value: "clock-item clock-separator"
                }]
              });
              clock.insertBefore(separator, arrayItem);
            };
          });
        };
      };
    };
  };

  var init = function() {
    bind.tick();
    render.all();
  };

  // exposed methods
  return {
    init: init,
    bind: bind,
    render: render
  };

})();
