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

  var _numberToWords = function(number) {
    var a = ["", "One ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", "Eight ", "Nine ", "Ten ", "Eleven ", "Twelve ", "Thirteen ", "Fourteen ", "Fifteen ", "Sixteen ", "Seventeen ", "Eighteen ", "Nineteen "];
    var b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    var n = ("000000000" + number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    var string = "";
    string += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "Crore " : "";
    string += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "Lakh " : "";
    string += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "Thousand " : "";
    string += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "Hundred " : "";
    string += (n[5] != 0) ? ((string != "") ? "and " : "") + (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) : "";
    return string.trim();
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
            // if (state.get().date.day.weekStart == "monday") {
            // } else (state.get().date.day.weekStart == "sunday") {
            // };
            if (value == 0) {
              value = 7;
            };
            return value;
          }
        },
        date: {
          word: function(value) {
            return _numberToWords(value);
          },
          number: function(value) {
            return value;
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
            return value;
          },
          number: function(value) {
            return _numberToWords(value);
          }
        }
      };
      time.day = action.day[state.get().header.date.day.display](time.day);
      time.date = action.date[state.get().header.date.date.display](time.date);
      time.month = action.month[state.get().header.date.month.display](time.month);
      time.year = action.year[state.get().header.date.year.display](time.year);
      console.log(time.day, time.date, time.month, time.year);
      // if (state.get().header.date.character.length == "short") {
      //   time.day = time.day.substring(0, 3);
      //   time.month = time.month.substring(0, 3);
      // };
      // var sepCha = "/";
      // var dateNumber = helper.makeNode({
      //   tag: "span",
      //   text: time.date,
      //   attr: [{
      //     key: "class",
      //     value: "date-item date-date"
      //   }]
      // });
      // var day = helper.makeNode({
      //   tag: "span",
      //   text: time.day,
      //   attr: [{
      //     key: "class",
      //     value: "date-item date-day"
      //   }]
      // });
      // var month = helper.makeNode({
      //   tag: "span",
      //   text: time.month,
      //   attr: [{
      //     key: "class",
      //     value: "date-item date-month"
      //   }]
      // });
      // var year = helper.makeNode({
      //   tag: "span",
      //   text: time.year,
      //   attr: [{
      //     key: "class",
      //     value: "date-item date-year"
      //   }]
      // });
      // if (state.get().header.date.show.day) {
      //   date.appendChild(day);
      // };
      // if (state.get().header.date.show.date) {
      //   date.appendChild(dateNumber);
      // };
      // if (state.get().header.date.show.month) {
      //   date.appendChild(month);
      // };
      // if (state.get().header.date.show.year) {
      //   date.appendChild(year);
      // };
      // if (state.get().header.date.show.separator) {
      //   var parts = date.querySelectorAll("span");
      //   if (parts.length > 1) {
      //     parts.forEach(function(arrayItem, index) {
      //       if (index > 0) {
      //         var separator = helper.makeNode({
      //           tag: "span",
      //           text: sepCha,
      //           attr: [{
      //             key: "class",
      //             value: "date-separator"
      //           }]
      //         });
      //         date.insertBefore(separator, arrayItem);
      //       };
      //     });
      //   };
      // };
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
