var page = (function() {

  var update = function() {
    var body = helper.e("body");
    var menu = state.get().menu;
    var modal = state.get().modal;
    var autoSuggest = state.get().autoSuggest;
    if (menu || modal || autoSuggest) {
      helper.addClass(body, "scroll-disabled");
    } else {
      helper.removeClass(body, "scroll-disabled");
    };
  };

  var lock = function() {
    var body = helper.e("body");
    helper.addClass(body, "scroll-disabled");
  };

  var unlock = function() {
    var body = helper.e("body");
    helper.removeClass(body, "scroll-disabled");
  };

  // exposed methods
  return {
    lock: lock,
    unlock: unlock,
    update: update
  };

})();
