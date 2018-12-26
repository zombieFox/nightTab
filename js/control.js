var control = (function() {

  var state = {
    edit: false,
    style: "block"
  };

  var get = function() {
    return state;
  };

  var bind = function() {
    var controlAdd = helper.e(".control-add");
    var controlEdit = helper.e(".control-edit");
    var controlLinkBlock = helper.e(".control-link-blocks");
    var controlLinkList = helper.e(".control-link-list");
    controlAdd.addEventListener("click", function() {
      _add();
    }, false);
    controlEdit.addEventListener("click", function() {
      _edit();
    }, false);
    controlLinkBlock.addEventListener("click", function() {
      _toggleListStyle("block");
      data.save();
    }, false);
    controlLinkList.addEventListener("click", function() {
      _toggleListStyle("list");
      data.save();
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

  var _toggleListStyle = function(style) {
    state.style = style;
    render();
  };

  var render = function() {
    var html = helper.e("html");
    var controlLinkBlock = helper.e(".control-link-blocks");
    var controlLinkList = helper.e(".control-link-list");
    var action = {
      block: function() {
        helper.addClass(html, "is-link-block");
        helper.removeClass(html, "is-link-list");
        helper.addClass(controlLinkBlock, "active");
        helper.removeClass(controlLinkList, "active");
      },
      list: function() {
        helper.removeClass(html, "is-link-block");
        helper.addClass(html, "is-link-list");
        helper.removeClass(controlLinkBlock, "active");
        helper.addClass(controlLinkList, "active");
      }
    };
    action[state.style]();
  };

  var restore = function(object) {
    if (object) {
      state = object;
      render();
    };
  };

  var init = function() {
    bind();
    render();
  };

  // exposed methods
  return {
    init: init,
    get: get,
    restore: restore,
    render: render
  };

})();
