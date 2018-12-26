var control = (function() {

  var state = {
    edit: false
  };

  var bind = function() {
    var controlAdd = helper.e(".control-add");
    var controlEdit = helper.e(".control-edit");
    controlAdd.addEventListener("click", function() {
      _add();
    }, false);
    controlEdit.addEventListener("click", function() {
      _edit();
    }, false);
  };

  var _add = function() {
    links.add();
  };

  var _edit = function() {
    var body = helper.e("body");
    var controlEdit = helper.e(".control-edit");
    if (state.edit) {
      helper.removeClass(body, "is-edit");
      helper.removeClass(controlEdit, "active");
      state.edit = false;
      links.tabindex();
    } else {
      helper.addClass(body, "is-edit");
      helper.addClass(controlEdit, "active");
      state.edit = true;
      links.tabindex();
    };
  };

  var init = function() {
    bind();
  };

  // exposed methods
  return {
    init: init,
    state: state
  };

})();
