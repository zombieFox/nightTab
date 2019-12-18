var shade = (function() {

  var _previousShade = null;

  var mod = {};

  mod.open = function() {
    helper.setObject({
      object: state.get.current(),
      path: "shade",
      newValue: true
    });
  };

  mod.close = function() {
    helper.setObject({
      object: state.get.current(),
      path: "shade",
      newValue: false
    });
  };

  mod.toggle = function() {
    if (state.get.current().shade) {
      helper.setObject({
        object: state.get.current(),
        path: "shade",
        newValue: false
      });
    } else {
      helper.setObject({
        object: state.get.current(),
        path: "shade",
        newValue: true
      });
    };
  };

  var render = {};

  render.toggle = function(override) {
    if (state.get.current().shade) {
      render.open(override);
    } else {
      render.close();
    };
  };

  render.close = function() {
    var allShade = helper.eA(".shade");
    if (allShade[0]) {
      for (var i = 0; i < allShade.length; i++) {
        allShade[i].close();
      };
    };
  };

  render.open = function(override) {
    var options = {
      action: null
    };
    if (override) {
      options = helper.applyOptions(options, override);
    };
    var _makeShade = function() {
      mod.open();
      var body = helper.e("body");
      var shade = document.createElement("div");
      shade.setAttribute("class", "shade");
      shade.close = function() {
        if (shade.classList.contains("is-opaque")) {
          helper.removeClass(shade, "is-opaque");
          helper.addClass(shade, "is-transparent");
        } else {
          shade.remove();
        };
        mod.close();
        _previousShade = null;
      };
      shade.addEventListener("transitionend", function(event, elapsed) {
        if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
          this.parentElement.removeChild(this);
        };
      }.bind(shade), false);
      shade.addEventListener("click", function() {
        if (options.action) {
          options.action();
        };
        this.close();
      }, false);
      _previousShade = shade;
      body.appendChild(shade);
      getComputedStyle(shade).opacity;
      helper.removeClass(shade, "is-transparent");
      helper.addClass(shade, "is-opaque");
    };
    if (_previousShade != null) {
      render.close();
    };
    _makeShade();
  };

  var open = function(override) {
    mod.open();
    render.open(override);
  };

  var close = function() {
    mod.close();
    render.close();
  };

  var init = function() {
    mod.close();
    render.close();
  };

  // exposed methods
  return {
    init: init,
    mod: mod,
    render: render,
    open: open,
    close: close
  };

})();
