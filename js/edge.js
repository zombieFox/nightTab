var edge = (function() {

  var _timer = null;
  var _cuurentEdge = null;

  var destroy = function() {
    var html = helper.e("html");
    var allEdge = helper.eA(".edge");
    if (allEdge[0]) {
      helper.removeClass(html, "is-edge");
      for (var i = 0; i < allEdge.length; i++) {
        _cuurentEdge = null;
        allEdge[i].destroy();
      };
    };
  };

  var render = function(type, elementToMirror) {
    var html = helper.e("html");
    var body = helper.e("body");
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
          helper.addClass(html, "is-edge");
          var display = helper.node("div|class:edge is-transparent");
          display.destroy = function() {
            if (display.classList.contains("is-opaque")) {
              helper.removeClass(display, "is-opaque");
              helper.addClass(display, "is-transparent");
            } else {
              display.remove();
              clearTimeout(_timer);
            };
          };
          display.addEventListener("transitionend", function(event, elapsed) {
            if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
              this.parentElement.removeChild(this);
            };
          }, false);
          body.appendChild(display);
          getComputedStyle(display).opacity;
          helper.removeClass(display, "is-transparent");
          helper.addClass(display, "is-opaque");
          resize(display);
          _cuurentEdge = display;
        } else {
          helper.addClass(html, "is-edge");
          resize(_cuurentEdge);
        };
      },
      flash: function() {
        render("show", elementToMirror);
        clearTimeout(_timer);
        _timer = setTimeout(destroy, 1000);
      }
    };
    action[type]();
  };

  // exposed methods
  return {
    render: render,
    destroy: destroy
  };

})();
