var greeting = (function() {

  var bind = function() {
    window.setInterval(function() {
      clear();
      render();
    }, 1000);
  };

  var clear = function() {
    var greeting = helper.e(".greeting");
    while (greeting.lastChild) {
      greeting.removeChild(greeting.lastChild);
    };
  };

  var render = function() {
    var _greeting = function() {
      var greeting = helper.e(".greeting");
      var message = {
        hi: function() {
          return "Hi";
        },
        hello: function() {
          return "Hello";
        },
        good: function() {
          var time = helper.getDateTime();
          var message = ["Good night", "Good morning", "Good afternoon", "Good evening"];
          return message[Math.floor(time.hours / 6)];
        }
      };
      var transitional = {
        timeanddate: function() {
          if ((state.get().header.date.day.show || state.get().header.date.date.show || state.get().header.date.month.show || state.get().header.date.year.show) && (state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show)) {
            if (state.get().header.date.day.show && !state.get().header.date.date.show && !state.get().header.date.month.show && !state.get().header.date.year.show) {
              return "the time and day is";
            } else {
              return "the time and date is";
            };
          } else if (state.get().header.date.day.show || state.get().header.date.date.show || state.get().header.date.month.show || state.get().header.date.year.show) {
            if (state.get().header.date.day.show && !state.get().header.date.date.show && !state.get().header.date.month.show && !state.get().header.date.year.show) {
              return "the day is";
            } else {
              return "the date is";
            };
          } else if (state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show) {
            return "the time is";
          };
        },
        its: function() {
          return "it's";
        }
      };
      var greetingMessage = message[state.get().header.greeting.message.type]();
      if (state.get().header.greeting.message.name != "" && state.get().header.greeting.message.name != undefined) {
        greetingMessage = greetingMessage + ", " + state.get().header.greeting.message.name;
      };
      if (state.get().header.greeting.transitional.show) {
        if ((state.get().header.date.day.show || state.get().header.date.date.show || state.get().header.date.month.show || state.get().header.date.year.show) || (state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show)) {
          greetingMessage = greetingMessage + ", " + transitional[state.get().header.greeting.transitional.type]();
        };
      };
      var greetingItem = helper.makeNode({
        tag: "span",
        attr: [{
          key: "class",
          value: "greeting-item"
        }]
      });
      var greetingItemText = helper.makeNode({
        tag: "span",
        text: greetingMessage,
        attr: [{
          key: "class",
          value: "greeting-item-text"
        }]
      });
      greetingItem.appendChild(greetingItemText);
      greeting.appendChild(greetingItem);
    };
    if (state.get().header.greeting.message.show) {
      _greeting();
    };
  };

  var init = function() {
    bind();
    render();
  };

  // exposed methods
  return {
    init: init,
    render: render,
    clear: clear
  };

})();
