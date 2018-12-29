var clock = (function() {

  var state = {
    hour24: true,
    show: {
      seconds: true,
      seperator: true
    }
  };

  var get = function() {
    return state;
  };

  var restore = function(object) {
    if (object) {
      state = object;
    };
  };

  var clear = function() {
    var clock = helper.e(".clock");
    while (clock.lastChild) {
      clock.removeChild(clock.lastChild);
    };
  };

  var toggle = function(override) {
    var options = {
      path: null,
      value: null
    };
    if (override) {
      options = helper.applyOptions(options, override);
    };
    if (options.path != null) {
      helper.setObject({
        path: options.path,
        object: state,
        newValue: options.value
      });
    };
  };

  var _makeTimeObject = function() {
    var time = helper.getDateTime();
    if (!state.hour24) {
      if (time.hours > 12) {
        time.hours = time.hours - 12;
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
      var hour = helper.makeNode({
        tag: "span",
        text: time.hours,
        attr: [{
          key: "class",
          value: "clock-hour"
        }]
      });
      var minutes = helper.makeNode({
        tag: "span",
        text: time.minutes,
        attr: [{
          key: "class",
          value: "clock-minutes"
        }]
      });
      var seconds = helper.makeNode({
        tag: "span",
        text: time.seconds,
        attr: [{
          key: "class",
          value: "clock-seconds"
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
      clock.appendChild(hour);
      if (state.show.seperator) {
        clock.appendChild(seperator1);
      };
      clock.appendChild(minutes);
      if (state.show.seconds) {
        if (state.show.seperator) {
          clock.appendChild(seperator2);
        };
        clock.appendChild(seconds);
      };
    };
    if (control.get().show.clock) {
      _clock();
    };
  };

  var init = function() {
    clear();
    render();
    window.setInterval(function() {
      clear();
      render();
    }, 1000);
  };

  // exposed methods
  return {
    init: init,
    get: get,
    render: render,
    restore: restore,
    toggle: toggle,
    clear: clear
  };

})();
