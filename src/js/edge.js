var edge = (function() {

  var _timer = null;
  var _currentEdge = null;

  var mod = {};

  mod.open = function() {
    helper.setObject({
      object: state.get(),
      path: "edge",
      newValue: true
    });
  };

  mod.close = function() {
    helper.setObject({
      object: state.get(),
      path: "edge",
      newValue: false
    });
  };

  var render = {};

  render.close = function() {
    var allEdge = helper.eA(".edge");
    if (allEdge[0]) {
      for (var i = 0; i < allEdge.length; i++) {
        allEdge[i].destroy();
      };
    };
  };

  render.open = function(override) {
    var options = {
      element: null,
      delay: null
    };
    if (override) {
      options = helper.applyOptions(options, override);
    };
    var _resize = function() {
      var scrollTop = document.documentElement.scrollTop;
      var scrollLeft = document.documentElement.scrollLeft;
      var rect = options.element.getBoundingClientRect();
      _currentEdge.style.width = rect.width + "px";
      _currentEdge.style.height = rect.height + "px";
      _currentEdge.style.top = rect.top + scrollTop + "px";
      _currentEdge.style.left = rect.left + scrollLeft + "px";
    };
    var _makeEdge = function() {
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
      };
      edgeElement.addEventListener("transitionend", function(event, elapsed) {
        if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
          this.parentElement.removeChild(this);
          helper.removeClass(html, "is-edge");
        };
      }, false);
      if (options.delay) {
        clearTimeout(_timer);
        _timer = setTimeout(edgeElement.destroy, options.delay);
      };
      helper.addClass(html, "is-edge");
      body.appendChild(edgeElement);
      getComputedStyle(edgeElement).opacity;
      helper.removeClass(edgeElement, "is-transparent");
      helper.addClass(edgeElement, "is-opaque");
      _currentEdge = edgeElement;
    };
    if (options.element != null) {
      if (_currentEdge == null) {
        _makeEdge();
        _resize();
      } else {
        _resize();
      };
    };
  };

  var box = {
    open: function(override) {
      mod.open();
      render.open(override);
    },
    close: function() {
      mod.close();
      render.close();
    }
  };

  // exposed methods
  return {
    mod: mod,
    render: render,
    box: box
  };

})();
