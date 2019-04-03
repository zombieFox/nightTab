var layout = (function() {

  var render = function() {
    var html = helper.e("html");
    html.style.setProperty("--layout-width", "calc(" + helper.getObject({
      object: state.get(),
      path: "layout.width"
    }) + "vw - var(--gutter) * 4)");
  };

  var edge = function(action) {
    var body = helper.e("body");
    var container = helper.makeNode({
      tag: "div",
      attr: [{
        key: "class",
        value: "container container-edge"
      }]
    });
    var state = {
      show: function() {
        body.appendChild(container);
      },
      hide: function() {
        body.removeChild(helper.e(".container-edge"));
      }
    };
    state[action]();
  };

  var init = function() {
    render();
  };

  // exposed methods
  return {
    edge: edge,
    render: render,
    init: init
  };

})();
