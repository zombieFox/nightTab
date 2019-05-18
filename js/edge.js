var edge = (function() {

  var _currentEdge = null;

  var destroy = function() {
    var allEdge = helper.eA(".edge");
    if (allEdge[0]) {
      for (var i = 0; i < allEdge.length; i++) {
        allEdge[i].destroy();
      };
    };
  };

  var render = function(elementToMirror, delay) {
    var _resize = function() {
      var rect = elementToMirror.getBoundingClientRect();
      _currentEdge.style.width = rect.width + "px";
      _currentEdge.style.height = rect.height + "px";
      _currentEdge.style.top = rect.top + "px";
      _currentEdge.style.left = rect.left + "px";
    };
    var _makeEdge = function() {
      helper.setObject({
        object: state.get(),
        path: "edge",
        newValue: true
      });
      var html = helper.e("html");
      var body = helper.e("body");
      var edgeElement = helper.node("div|class:edge is-transparent");
      edgeElement.destroy = function() {
        if (edgeElement.classList.contains("is-opaque")) {
          helper.removeClass(edgeElement, "is-opaque");
          helper.addClass(edgeElement, "is-transparent");
        } else {
          edgeElement.remove();
        };
        _currentEdge = null;
        helper.setObject({
          object: state.get(),
          path: "edge",
          newValue: false
        });
      };
      edgeElement.addEventListener("transitionend", function(event, elapsed) {
        if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
          this.parentElement.removeChild(this);
          helper.removeClass(html, "is-edge");
        };
      }, false);
      if (delay) {
        window.setInterval(function() {
          edgeElement.destroy();
        }, delay);
      };
      helper.addClass(html, "is-edge");
      body.appendChild(edgeElement);
      getComputedStyle(edgeElement).opacity;
      helper.removeClass(edgeElement, "is-transparent");
      helper.addClass(edgeElement, "is-opaque");
      _currentEdge = edgeElement;
    };
    if (_currentEdge == null) {
      _makeEdge();
      _resize();
    } else {
      _resize();
    };
  };

  // exposed methods
  return {
    render: render,
    destroy: destroy
  };

})();
