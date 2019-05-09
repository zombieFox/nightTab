var shade = (function() {

  var previousShade = null;

  var destroy = function() {
    var allShade = helper.eA(".shade");
    if (allShade[0]) {
      for (var i = 0; i < allShade.length; i++) {
        allShade[i].destroy();
      };
    };
  };

  var render = function(override) {
    var options = {
      action: null,
      includeHeader: false
    };
    if (override) {
      options = helper.applyOptions(options, override);
    };
    var _destroyPreviousShade = function() {
      if (previousShade != null) {
        destroy();
      };
    };
    var _makeShade = function() {
      var body = helper.e("body");
      var shade = document.createElement("div");
      shade.setAttribute("class", "shade");
      if (options.includeHeader) {
        helper.addClass(shade, "m-shade-top");
      };
      shade.destroy = function() {
        if (options.action) {
          options.action();
        };
        if (shade.classList.contains("is-opaque")) {
          helper.removeClass(shade, "is-opaque");
          helper.addClass(shade, "is-transparent");
        } else {
          shade.remove();
        };
      };
      shade.addEventListener("transitionend", function(event, elapsed) {
        if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
          this.parentElement.removeChild(this);
        };
        if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 1) {
          helper.addClass(this, "is-transition-end");
        };
      }.bind(shade), false);
      shade.addEventListener("click", function() {
        this.destroy();
      }, false);
      previousShade = shade;
      body.appendChild(shade);
      getComputedStyle(shade).opacity;
      helper.removeClass(shade, "is-transparent");
      helper.addClass(shade, "is-opaque");
    };
    _destroyPreviousShade();
    _makeShade();
  };

  // exposed methods
  return {
    destroy: destroy,
    render: render
  };

})();
