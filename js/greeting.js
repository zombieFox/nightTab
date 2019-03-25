var greeting = (function() {

  var clear = function() {
    var greeting = helper.e(".greeting");
    while (greeting.lastChild) {
      greeting.removeChild(greeting.lastChild);
    };
  };

  var render = function() {
    var _greeting = function() {
      var greeting = helper.e(".greeting");
      var time = helper.getDateTime();
      var message = ["Good night", "Good morning", "Good afternoon", "Good evening"];
      var greetingMessage = message[Math.floor(time.hours / 6)];
      if (state.get().header.greeting.name != "" && state.get().header.greeting.name != undefined) {
        greetingMessage = greetingMessage + ", " + state.get().header.greeting.name;
      };
      var greetingItem = helper.makeNode({
        tag: "span",
        text: greetingMessage,
        attr: [{
          key: "class",
          value: "greeting-item"
        }]
      });
      greeting.appendChild(greetingItem);
    };
    if (state.get().header.greeting.show) {
      _greeting();
    };
  };

  var init = function() {
    render();
  };

  // exposed methods
  return {
    init: init,
    render: render,
    clear: clear
  };

})();
