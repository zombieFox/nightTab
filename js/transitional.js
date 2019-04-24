var transitional = (function() {

  var bind = function() {
    window.setInterval(function() {
      clear();
      render();
    }, 1000);
  };

  var clear = function() {
    var transitional = helper.e(".transitional");
    while (transitional.lastChild) {
      transitional.removeChild(transitional.lastChild);
    };
  };

  var render = function() {
    var _transitional = function() {
      var transitional = helper.e(".transitional");
      var message = {
        timeanddate: function() {
          if ((state.get().header.date.day.show || state.get().header.date.date.show || state.get().header.date.month.show || state.get().header.date.year.show) && (state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show)) {
            if (state.get().header.date.day.show && !state.get().header.date.date.show && !state.get().header.date.month.show && !state.get().header.date.year.show) {
              return "The time and day is";
            } else {
              return "The time and date is";
            };
          } else if (state.get().header.date.day.show || state.get().header.date.date.show || state.get().header.date.month.show || state.get().header.date.year.show) {
            if (state.get().header.date.day.show && !state.get().header.date.date.show && !state.get().header.date.month.show && !state.get().header.date.year.show) {
              return "The day is";
            } else if (!state.get().header.date.day.show && state.get().header.date.date.show && !state.get().header.date.month.show && !state.get().header.date.year.show) {
              return "The date is";
            } else if (!state.get().header.date.day.show && !state.get().header.date.date.show && state.get().header.date.month.show && !state.get().header.date.year.show) {
              return "The month is";
            } else if (!state.get().header.date.day.show && !state.get().header.date.date.show && !state.get().header.date.month.show && state.get().header.date.year.show) {
              return "The year is";
            } else {
              return "The date is";
            };
          } else if (state.get().header.clock.seconds.show || state.get().header.clock.minutes.show || state.get().header.clock.hours.show) {
            return "The time is";
          };
        },
        its: function() {
          return "It's";
        }
      };
      var string = message[state.get().header.transitional.type]();
      var transitionalItem = helper.makeNode({
        tag: "span",
        attr: [{
          key: "class",
          value: "transitional-item"
        }]
      });
      var transitionalItemText = helper.makeNode({
        tag: "span",
        text: string,
        attr: [{
          key: "class",
          value: "transitional-item-text"
        }]
      });
      transitionalItem.appendChild(transitionalItemText);
      transitional.appendChild(transitionalItem);
    };
    if (state.get().header.transitional.show) {
      _transitional();
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
