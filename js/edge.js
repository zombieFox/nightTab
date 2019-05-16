var edge = (function() {

  var _timer = null;
  var _cuurentEdge = null;

  var render = function(type, elementToMirror) {
    var body = helper.e("body");
    var display = helper.node("div|class:edge");
    display.destroy = function() {
      if (display.classList.contains("is-opaque")) {
        helper.removeClass(display, "is-opaque");
        helper.addClass(display, "is-transparent");
      } else {
        display.remove();
      };
    };
    display.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
        _cuurentEdge = null;
      };
    }, false);
    var resize = function(element) {
      var size = elementToMirror.getBoundingClientRect();
      element.style.width = size.width + "px";
      element.style.height = size.height + "px";
      element.style.top = size.top + "px";
      element.style.left = size.left + "px";
    };
    var action = {
      show: function() {
        if (_cuurentEdge == null) {
          _cuurentEdge = display;
          body.appendChild(display);
          getComputedStyle(display).opacity;
          helper.removeClass(display, "is-transparent");
          helper.addClass(display, "is-opaque");
          resize(_cuurentEdge);
        } else {
          resize(_cuurentEdge);
        };
      },
      hide: function() {
        if (_cuurentEdge != null) {
          _cuurentEdge.destroy();
        };
      },
      flash: function() {
        render("show", elementToMirror);
        clearTimeout(_timer);
        _timer = setTimeout(render, 300, "hide");
      }
    };
    action[type]();
  };

  // exposed methods
  return {
    render: render
  };

})();
