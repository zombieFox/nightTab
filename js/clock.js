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
      var time = _makeTimeObject();
      var sepCha = ":";
      var hours = helper.makeNode({
        tag: "span",
        text: time.hours,
        attr: [{
          key: "class",
          value: "clock-item clock-hours"
        }]
      });
      var minutes = helper.makeNode({
        tag: "span",
        text: time.minutes,
        attr: [{
          key: "class",
          value: "clock-item clock-minutes"
        }]
      });
      var seconds = helper.makeNode({
        tag: "span",
        text: time.seconds,
        attr: [{
          key: "class",
          value: "clock-item clock-seconds"
        }]
      });
      var meridiem = helper.makeNode({
        tag: "span",
        text: time.meridiem,
        attr: [{
          key: "class",
          value: "clock-item clock-meridiem"
        }]
      });
      if (state.get().header.clock.show.hours) {
        clock.appendChild(hours);
      };
      if (state.get().header.clock.show.minutes) {
        clock.appendChild(minutes);
      };
      if (state.get().header.clock.show.seconds) {
        clock.appendChild(seconds);
      };
      if (!state.get().header.clock.hour24 && state.get().header.clock.show.meridiem) {
        clock.appendChild(meridiem);
      };
      if (state.get().header.clock.show.separator) {
        var parts = clock.querySelectorAll("span");
        if (parts.length > 1) {
          parts.forEach(function(arrayItem, index) {
            if (index > 0 && !arrayItem.classList.contains("clock-meridiem")) {
              var separator = helper.makeNode({
                tag: "span",
                text: sepCha,
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
    if (state.get().header.clock.show.seconds || state.get().header.clock.show.minutes || state.get().header.clock.show.hours) {
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
