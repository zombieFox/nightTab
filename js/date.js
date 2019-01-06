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
      time.day = helper.day(time.day);
      time.month = helper.month(time.month);
      if (state.get().header.date.characterLength == "short") {
        time.day = time.day.substring(0, 3);
        time.month = time.month.substring(0, 3);
      };
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
        text: time.day,
        attr: [{
          key: "class",
          value: "date-item date-day"
        }]
      });
      var month = helper.makeNode({
        tag: "span",
        text: time.month,
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
      if (state.get().header.date.show.separator) {
        var parts = date.querySelectorAll("span");
        if (parts.length > 1) {
          parts.forEach(function(arrayItem, index) {
            if (index > 0) {
              var separator = helper.makeNode({
                tag: "span",
                text: sepCha,
                attr: [{
                  key: "class",
                  value: "date-separator"
                }]
              });
              date.insertBefore(separator, arrayItem);
            };
          });
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
