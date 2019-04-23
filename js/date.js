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

  var _month = function(index) {
    var all = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return all[index];
  };

  var _day = function(index) {
    var all = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return all[index];
  };

  var render = function() {
    var _date = function() {
      var date = helper.e(".date");
      var time = _makeTimeObject();
      var action = {
        day: {
          word: function(value) {
            return _day(value);
          },
          number: function(value) {
            if (state.get().header.date.day.weekStart == "monday") {
              if (value == 0) {
                value = 7;
              };
            } else if (state.get().header.date.day.weekStart == "sunday") {
              value = value + 1;
            };
            return value;
          }
        },
        date: {
          word: function(value) {
            if (state.get().header.date.date.ordinal) {
              return helper.ordinalWords(helper.toWords(value));
            } else {
              return helper.toWords(value);
            };
          },
          number: function(value) {
            if (state.get().header.date.date.ordinal) {
              return helper.ordinalNumber(value);
            } else {
              return value;
            };
          }
        },
        month: {
          word: function(value) {
            return _month(value);
          },
          number: function(value) {
            return value + 1;
          }
        },
        year: {
          word: function(value) {
            return helper.toWords(value);
          },
          number: function(value) {
            return value;
          }
        }
      };
      time.day = action.day[state.get().header.date.day.display](time.day);
      time.date = action.date[state.get().header.date.date.display](time.date);
      time.month = action.month[state.get().header.date.month.display](time.month);
      time.year = action.year[state.get().header.date.year.display](time.year);
      if (state.get().header.date.day.display == "word" && state.get().header.date.day.length == "short") {
        time.day = time.day.substring(0, 3);
      };
      if (state.get().header.date.month.display == "word" && state.get().header.date.month.length == "short") {
        time.month = time.month.substring(0, 3);
      };
      var elementDay = helper.makeNode({
        tag: "span",
        text: time.day,
        attr: [{
          key: "class",
          value: "date-item date-day"
        }]
      });
      var elementDate = helper.makeNode({
        tag: "span",
        text: time.date,
        attr: [{
          key: "class",
          value: "date-item date-date"
        }]
      });
      var elementMonth = helper.makeNode({
        tag: "span",
        text: time.month,
        attr: [{
          key: "class",
          value: "date-item date-month"
        }]
      });
      var elementyear = helper.makeNode({
        tag: "span",
        text: time.year,
        attr: [{
          key: "class",
          value: "date-item date-year"
        }]
      });
      if (state.get().header.date.day.show) {
        date.appendChild(elementDay);
      };
      if (state.get().header.date.date.show && state.get().header.date.month.show) {
        if (state.get().header.date.format == "datemonth") {
          if (state.get().header.date.date.show) {
            date.appendChild(elementDate);
          };
          if (state.get().header.date.month.show) {
            date.appendChild(elementMonth);
          };
        } else if (state.get().header.date.format == "monthdate") {
          if (state.get().header.date.month.show) {
            date.appendChild(elementMonth);
          };
          if (state.get().header.date.date.show) {
            date.appendChild(elementDate);
          };
        };
      } else {
        if (state.get().header.date.date.show) {
          date.appendChild(elementDate);
        };
        if (state.get().header.date.month.show) {
          date.appendChild(elementMonth);
        };
      };
      if (state.get().header.date.year.show) {
        date.appendChild(elementyear);
      };
      if (state.get().header.date.separator.show) {
        var separatorCharacter = "/";
        var parts = date.querySelectorAll("span");
        if (parts.length > 1) {
          parts.forEach(function(arrayItem, index) {
            if (index > 0) {
              var separator = helper.makeNode({
                tag: "span",
                text: separatorCharacter,
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
    if (state.get().header.date.date.show || state.get().header.date.day.show || state.get().header.date.month.show || state.get().header.date.year.show) {
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
