var header = (function() {

  var _bind = function() {
    window.addEventListener("resize", function(event) {
      render();
    }, false);
  };

  var render = function() {
    var html = helper.e("html");
    var header = helper.e(".header");
    var link = helper.e(".link");
    var height = parseInt(getComputedStyle(header).height, 10);
    var fontSize = parseInt(getComputedStyle(html).fontSize, 10);
    link.style.marginTop = (height + fontSize) + "px";
  };

  var init = function() {
    _bind();
    render();
  };

  // exposed methods
  return {
    init: init,
    render: render
  };

})();
