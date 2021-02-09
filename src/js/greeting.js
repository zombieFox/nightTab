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
      var message = function() {
        switch (state.get.current().header.greeting.type) {
          case "good":
            var time = helper.getDateTime();
            var message = ["Good night", "Good morning", "Good afternoon", "Good evening"];
            return message[Math.floor(time.hours / 6)];
            break;

          case "hello":
            return "Hello";

          case "hi":
            return "Hi";

          case "custom":
            return helper.trimString(state.get.current().header.greeting.custom);
        };
      };

      var string = message();

      if (helper.checkIfValidString(state.get.current().header.greeting.name)) {
        if (state.get.current().header.greeting.type === "custom") {
          if (helper.checkIfValidString(state.get.current().header.greeting.custom)) {
            string = string + ", " + helper.trimString(state.get.current().header.greeting.name)
          } else {
            string = string + helper.trimString(state.get.current().header.greeting.name)
          };
        } else {
          string = string + ", " + helper.trimString(state.get.current().header.greeting.name)
        };
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
