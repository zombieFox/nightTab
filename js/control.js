var control = (function() {

  var state = {
    edit: false,
    style: {
      block: true,
      list: false
    }
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
      links.add();
    }, false);
    controlEdit.addEventListener("click", function() {
      _toggleEdit();
      render();
      links.tabIndex();
    }, false);
    controlLinkBlock.addEventListener("click", function() {
      _toggleListStyle("block");
      render();
      data.save();
    }, false);
    controlLinkList.addEventListener("click", function() {
      _toggleListStyle("list");
      render();
      data.save();
    }, false);
  };

  var _toggleEdit = function() {
    if (state.edit) {
      state.edit = false;
    } else {
      state.edit = true;
    };
  };

  var _toggleListStyle = function(style) {
    var action = {
      block: function() {
        state.style.block = true;
        state.style.list = false;
      },
      list: function() {
        state.style.block = false;
        state.style.list = true;
      }
    };
    action[style]();
  };

  var render = function() {
    var html = helper.e("html");
    var controlEdit = helper.e(".control-edit");
    var controlLinkBlock = helper.e(".control-link-blocks");
    var controlLinkList = helper.e(".control-link-list");
    var _renderEdit = function() {
      if (state.edit) {
        helper.addClass(html, "is-edit");
        helper.addClass(controlEdit, "active");
      } else {
        helper.removeClass(html, "is-edit");
        helper.removeClass(controlEdit, "active");
      };
    };
    var _renderStyle = function() {
      if (state.style.block) {
        helper.addClass(html, "is-link-block");
        helper.removeClass(html, "is-link-list");
        helper.addClass(controlLinkBlock, "active");
        helper.removeClass(controlLinkList, "active");
      } else if (state.style.list) {
        helper.removeClass(html, "is-link-block");
        helper.addClass(html, "is-link-list");
        helper.removeClass(controlLinkBlock, "active");
        helper.addClass(controlLinkList, "active");
      };
    };
    _renderEdit();
    _renderStyle();
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
