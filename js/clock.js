var clock = (function() {

  var clear = function() {
    var clock = helper.e(".clock")
    while (clock.lastChild) {
      clock.removeChild(clock.lastChild);
    };
  };

  var render = function() {
    var time = helper.getDateTime();
    if (time.minutes < 10) {
      time.minutes = "0" + time.minutes;
    };
    if (time.seconds < 10) {
      time.seconds = "0" + time.seconds;
    };
    // if (time.hours > 12) {
    //   time.hours = time.hours - 12;
    // };
    var hour = document.createElement("span");
    hour.setAttribute("class", "clock-hour");
    hour.textContent = time.hours;
    var minutes = document.createElement("span");
    minutes.setAttribute("class", "clock-minutes");
    minutes.textContent = time.minutes;
    var seconds = document.createElement("span");
    seconds.setAttribute("class", "clock-seconds");
    seconds.textContent = time.seconds;
    var seperator1 = document.createElement("span");
    seperator1.setAttribute("class", "clock-seperator");
    seperator1.textContent = " : ";
    var seperator2 = document.createElement("span");
    seperator2.setAttribute("class", "clock-seperator");
    seperator2.textContent = " : ";
    var clock = helper.e(".clock");
    clock.appendChild(hour);
    clock.appendChild(seperator1);
    clock.appendChild(minutes);
    clock.appendChild(seperator2);
    clock.appendChild(seconds);
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
    render: render,
    clear: clear
  };

})();
