var transitional = (function() {

  var bind = {};

  bind.tick = function() {
    window.setInterval(function() {
      render.clear();
      render.all();
    }, 1000);
  };

  var render = {};

  render.clear = function() {
    if (state.get.current().header.transitional.show) {
      var transitional = helper.e(".transitional");
      while (transitional.lastChild) {
        transitional.removeChild(transitional.lastChild);
      };
    };
  };

  render.all = function() {
    if (state.get.current().header.transitional.show) {
      var transitional = helper.e(".transitional");
      var message = {
        timeanddate: function() {
          if ((state.get.current().header.date.day.show || state.get.current().header.date.date.show || state.get.current().header.date.month.show || state.get.current().header.date.year.show) && (state.get.current().header.clock.seconds.show || state.get.current().header.clock.minutes.show || state.get.current().header.clock.hours.show)) {
            if (state.get.current().header.date.day.show && !state.get.current().header.date.date.show && !state.get.current().header.date.month.show && !state.get.current().header.date.year.show) {
              return "The time and day is";
            } else {
              return "The time and date is";
            };
          } else if (state.get.current().header.date.day.show || state.get.current().header.date.date.show || state.get.current().header.date.month.show || state.get.current().header.date.year.show) {
            if (state.get.current().header.date.day.show && !state.get.current().header.date.date.show && !state.get.current().header.date.month.show && !state.get.current().header.date.year.show) {
              return "Today is";
            } else if (!state.get.current().header.date.day.show && state.get.current().header.date.date.show && !state.get.current().header.date.month.show && !state.get.current().header.date.year.show) {
              return "The date is";
            } else if (!state.get.current().header.date.day.show && !state.get.current().header.date.date.show && state.get.current().header.date.month.show && !state.get.current().header.date.year.show) {
              return "The month is";
            } else if (!state.get.current().header.date.day.show && !state.get.current().header.date.date.show && !state.get.current().header.date.month.show && state.get.current().header.date.year.show) {
              return "The year is";
            } else {
              return "The date is";
            };
          } else if (state.get.current().header.clock.seconds.show || state.get.current().header.clock.minutes.show || state.get.current().header.clock.hours.show) {
            return "The time is";
          };
        },
        its: function() {
          return "It's";
        }
      };
      var string = message[state.get.current().header.transitional.type]();
      var transitionalItem = helper.node("span|class:transitional-item");
      var transitionalItemText = helper.node("span:" + string + "|class:transitional-item-text");
      transitionalItem.appendChild(transitionalItemText);
      transitional.appendChild(transitionalItem);
    };
  };

  var init = function() {
    bind.tick();
    render.all();
  };

  // exposed methods
  return {
    init: init,
    render: render
  };

})();
