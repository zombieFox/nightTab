var greeting = (function() {

  var bind = function() {
    window.setInterval(function() {
      clear();
      render();
    }, 1000);
  };

  var clear = function() {
    var greeting = helper.e(".greeting");
    while (greeting.lastChild) {
      greeting.removeChild(greeting.lastChild);
    };
  };

  var render = function() {
    var _greeting = function() {
      var greeting = helper.e(".greeting");
      var message = {
        good: function() {
          var time = helper.getDateTime();
          var message = ["Good night", "Good morning", "Good afternoon", "Good evening"];
          return message[Math.floor(time.hours / 6)];
        },
        hello: function() {
          return "Hello";
        },
        hi: function() {
          return "Hi";
        }
      };
      var string = message[state.get().header.greeting.type]();
      if (state.get().header.greeting.name != "" && state.get().header.greeting.name != undefined) {
        string = string + ", " + state.get().header.greeting.name;
      };
      var greetingItem = helper.makeNode({
        tag: "span",
        attr: [{
          key: "class",
          value: "greeting-item"
        }]
      });
      var greetingItemText = helper.makeNode({
        tag: "span",
        text: string,
        attr: [{
          key: "class",
          value: "greeting-item-text"
        }]
      });
      greetingItem.appendChild(greetingItemText);
      greeting.appendChild(greetingItem);
    };
    if (state.get().header.greeting.show) {
      _greeting();
    };
  };

  var init = function() {
    bind();
    render();
  };

  // exposed methods
  return {
    init: init,
    render: render,
    clear: clear
  };

})();
