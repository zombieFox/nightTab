var date = (function() {

  var bind = function() {
    window.setInterval(function() {
      clear();
      render();
    }, 1000);
  };

  var clear = function() {
    var date = helper.e(".date");
    while (date.lastChild) {
      date.removeChild(date.lastChild);
    };
  };

  var _makeTimeObject = function() {
    var time = helper.getDateTime();
    return time;
  };

  var render = function() {
    var _date = function() {
      var date = helper.e(".date");
      var time = _makeTimeObject();
      var sepCha = "/";
      var dateNumber = helper.makeNode({
        tag: "span",
        text: time.date,
        attr: [{
          key: "class",
          value: "date-item date-date"
        }]
      });
      var day = helper.makeNode({
        tag: "span",
        text: helper.day(time.day - 1),
        attr: [{
          key: "class",
          value: "date-item date-day"
        }]
      });
      var month = helper.makeNode({
        tag: "span",
        text: helper.month(time.month),
        attr: [{
          key: "class",
          value: "date-item date-month"
        }]
      });
      var year = helper.makeNode({
        tag: "span",
        text: time.year,
        attr: [{
          key: "class",
          value: "date-item date-year"
        }]
      });
      var seperator1 = helper.makeNode({
        tag: "span",
        text: sepCha,
        attr: [{
          key: "class",
          value: "date-seperator"
        }]
      });
      var seperator2 = helper.makeNode({
        tag: "span",
        text: sepCha,
        attr: [{
          key: "class",
          value: "date-seperator"
        }]
      });
      var seperator3 = helper.makeNode({
        tag: "span",
        text: sepCha,
        attr: [{
          key: "class",
          value: "date-seperator"
        }]
      });
      if (state.get().header.date.show.date) {
        date.appendChild(dateNumber);
      };
      if (state.get().header.date.show.day) {
        date.appendChild(day);
      };
      if (state.get().header.date.show.month) {
        date.appendChild(month);
      };
      if (state.get().header.date.show.year) {
        date.appendChild(year);
      };
      if (state.get().header.date.show.seperator) {
        if (state.get().header.date.show.date && state.get().header.date.show.day) {
          date.insertBefore(seperator1, date.querySelector(".date-day"));
        };
        if (state.get().header.date.show.day && state.get().header.date.show.month) {
          date.insertBefore(seperator2, date.querySelector(".date-month"));
        };
        if (state.get().header.date.show.month && state.get().header.date.show.year) {
          date.insertBefore(seperator3, date.querySelector(".date-year"));
        };
      };
    };
    if (state.get().header.date.show.date || state.get().header.date.show.day || state.get().header.date.show.month || state.get().header.date.show.year) {
      _date();
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
