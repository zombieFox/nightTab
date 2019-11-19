var date = (function() {

  var bind = {};

  bind.tick = function() {
    window.setInterval(function() {
      render.clear();
      render.all();
    }, 1000);
  };

  var render = {};

  render.clear = function() {
    var date = helper.e(".date");
    while (date.lastChild) {
      date.removeChild(date.lastChild);
    };
  };

  render.all = function() {
    if (state.get().header.date.date.show || state.get().header.date.day.show || state.get().header.date.month.show || state.get().header.date.year.show) {
      var timeDateNow = moment();
      var dateStrings = {
        day: null,
        date: null,
        month: null,
        year: null
      };
      var wordOrNumber = {
        day: {
          word: function() {
            dateStrings.day = timeDateNow.format("dddd");
            if (state.get().header.date.day.length == "short") {
              dateStrings.day = dateStrings.day.substring(0, 3);
              console.log(dateStrings.day);
            };
          },
          number: function() {
            dateStrings.day = timeDateNow.day();
            if (state.get().header.date.day.weekStart == "monday") {
              if (dateStrings.day == 0) {
                dateStrings.day = 7;
              };
            } else if (state.get().header.date.day.weekStart == "sunday") {
              dateStrings.day = dateStrings.day + 1;
            };
          }
        },
        date: {
          word: function() {
            if (state.get().header.date.date.ordinal) {
              dateStrings.date = helper.ordinalWords(helper.toWords(timeDateNow.date()));
            } else {
              dateStrings.date = helper.toWords(timeDateNow.date());
            };
          },
          number: function() {
            if (state.get().header.date.date.ordinal) {
              dateStrings.date = timeDateNow.format("Do");
            } else {
              dateStrings.date = timeDateNow.format("DD");
            };
          }
        },
        month: {
          word: function() {
            dateStrings.month = timeDateNow.format("MMMM");
            if (state.get().header.date.month.length == "short") {
              dateStrings.month = dateStrings.month.substring(0, 3);
            };
          },
          number: function() {
            if (state.get().header.date.month.ordinal) {
              dateStrings.month = helper.ordinalNumber(timeDateNow.month() + 1);
            } else {
              dateStrings.month = timeDateNow.month() + 1;
            };
          }
        },
        year: {
          word: function() {
            dateStrings.year = helper.toWords(timeDateNow.format("YYYY"));
          },
          number: function() {
            dateStrings.year = timeDateNow.format("YYYY");
          }
        }
      };
      wordOrNumber.day[state.get().header.date.day.display]();
      wordOrNumber.date[state.get().header.date.date.display]();
      wordOrNumber.month[state.get().header.date.month.display]();
      wordOrNumber.year[state.get().header.date.year.display]();
      var elementDay = helper.node("span:" + dateStrings.day + "|class:date-item date-day");
      var elementDate = helper.node("span:" + dateStrings.date + "|class:date-item date-date");
      var elementMonth = helper.node("span:" + dateStrings.month + "|class:date-item date-month");
      var elementYear = helper.node("span:" + dateStrings.year + "|class:date-item date-year");
      var date = helper.e(".date");
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
        date.appendChild(elementYear);
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
                  value: "date-item date-separator"
                }]
              });
              date.insertBefore(separator, arrayItem);
            };
          });
        };
      };
    };
  };

  var init = function() {
    render.all();
    bind.tick();
  };

  // exposed methods
  return {
    init: init,
    bind: bind,
    render: render
  };

})();
