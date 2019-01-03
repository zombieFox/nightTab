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
      if (time.hours < 10 && state.get().header.clock.show.leadingZero) {
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
      var seperator1 = helper.makeNode({
        tag: "span",
        text: ":",
        attr: [{
          key: "class",
          value: "clock-seperator"
        }]
      });
      var seperator2 = helper.makeNode({
        tag: "span",
        text: ":",
        attr: [{
          key: "class",
          value: "clock-seperator"
        }]
      });
      var seperator3 = helper.makeNode({
        tag: "span",
        text: ":",
        attr: [{
          key: "class",
          value: "clock-seperator"
        }]
      });
      clock.appendChild(hours);
      if (state.get().header.clock.show.seperator) {
        clock.appendChild(seperator1);
      };
      clock.appendChild(minutes);
      if (state.get().header.clock.show.seconds) {
        if (state.get().header.clock.show.seperator) {
          clock.appendChild(seperator2);
        };
        clock.appendChild(seconds);
      };
      if (!state.get().header.clock.hour24 && state.get().header.clock.show.meridiem) {
        if (state.get().header.clock.show.seperator) {
          clock.appendChild(seperator3);
        };
        clock.appendChild(meridiem);
      };
    };
    if (state.get().header.clock.active) {
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
