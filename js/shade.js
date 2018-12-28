var shade = (function() {

  var previousShade = null;

  function destroy() {
    var all_shade = helper.eA(".shade");
    if (all_shade[0]) {
      for (var i = 0; i < all_shade.length; i++) {
        all_shade[i].destroy();
      };
    };
  };

  function render(options) {
    var defaultOptions = {
      action: null,
      includeHeader: false
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var _destroy_previousShade = function() {
      if (previousShade != null) {
        destroy();
      };
    };
    var _render_shade = function() {
      var body = helper.e("body");
      var shade = document.createElement("div");
      shade.setAttribute("class", "shade");
      if (defaultOptions.includeHeader) {
        helper.addClass(shade, "m-shade-top");
      };
      shade.destroy = function() {
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
        if (defaultOptions.action) {
          defaultOptions.action();
        };
      }, false);
      previousShade = shade;
      body.appendChild(shade);
      getComputedStyle(shade).opacity;
      helper.removeClass(shade, "is-transparent");
      helper.addClass(shade, "is-opaque");
    };
    _destroy_previousShade();
    _render_shade();
  };

  // exposed methods
  return {
    destroy: destroy,
    render: render
  };

})();
