var greeting = (function() {

  var bind = {};

  bind.tick = function() {
    window.setInterval(function() {
      render.clear();
      render.all();
    }, 1000);
  };

  var render = {};

  render.clear = function() {
    if (state.get.current().header.greeting.show) {
      var greeting = helper.e(".greeting");
      while (greeting.lastChild) {
        greeting.removeChild(greeting.lastChild);
      };
    };
  };

  render.all = function() {
    if (state.get.current().header.greeting.show) {
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
      var string = message[state.get.current().header.greeting.type]();
      if (helper.checkValueString(state.get.current().header.greeting.name)) {
        string = string + ", " + helper.trimString(state.get.current().header.greeting.name)
      };
      var greetingItem = helper.node("span|class:greeting-item");
      var greetingItemText = helper.node("span:" + string + "|class:greeting-item-text");
      greetingItem.appendChild(greetingItemText);
      greeting.appendChild(greetingItem);
    };
  };

  var init = function() {
    bind.tick();
    render.all();
  };

  // exposed methods
  return {
    init: init,
    render: render
  };

})();
