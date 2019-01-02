var links = (function() {

  var _bind = function(override) {
    var options = {
      element: null,
      action: null
    };
    if (override) {
      options = helper.applyOptions(options, override);
    };
    var action = {
      edit: function() {
        options.element.addEventListener("click", function() {
          edit(this);
        }, false);
      },
      delete: function() {
        options.element.addEventListener("click", function() {
          remove(this);
        }, false);
      }
    };
    if (options.element != null) {
      action[options.action]();
    }
  };

  var add = function() {
    state.get().links.action = "add";
    var form = _makeLinkForm();
    modal.render({
      heading: "Add a new bookmark",
      action: save,
      actionText: "Add",
      size: "small",
      content: form
    });
  };

  var edit = function(button) {
    state.get().links.action = "edit";
    state.get().links.editObject = bookmarks.get(parseInt(button.closest(".link-item").dataset.index, 10));
    var currentBookmark = bookmarks.get(state.get().links.editObject.index);
    var form = _makeLinkForm();
    form.querySelector(".link-form-input-letter").value = currentBookmark.letter;
    form.querySelector(".link-form-input-name").value = currentBookmark.name;
    form.querySelector(".link-form-input-url").value = currentBookmark.url;
    modal.render({
      heading: "Edit " + currentBookmark.name,
      action: save,
      actionText: "Save",
      size: "small",
      content: form
    });
  };

  var save = function(button) {
    var action = {
      add: function(newLinkData) {
        bookmarks.add(newLinkData);
      },
      edit: function(newLinkData) {
        bookmarks.edit(newLinkData, state.get().links.editObject.index);
      }
    };
    var form = helper.e(".link-form");
    var newLinkData = {
      letter: form.querySelector(".link-form-input-letter").value,
      name: form.querySelector(".link-form-input-name").value,
      url: form.querySelector(".link-form-input-url").value
    };
    action[state.get().links.action](newLinkData);
    state.get().links.editObject = null;
    state.get().links.action = null;
    clear();
    if (state.get().search.searching) {
      search.render();
    } else {
      render();
    };
    data.save();
  };

  var remove = function(button) {
    var index = parseInt(button.closest(".link-item").dataset.index, 10);
    bookmarks.remove(index);
    clear();
    if (state.get().search.searching) {
      search.render();
    } else {
      render();
    };
    data.save();
  };

  var _makeLinkForm = function() {
    var form = helper.makeNode({
      tag: "form",
      attr: [{
        key: "class",
        value: "link-form"
      }]
    });
    var fieldset = helper.makeNode({
      tag: "fieldset"
    });
    var letterLabel = helper.makeNode({
      tag: "label",
      text: "Letters",
      attr: [{
        key: "for",
        value: "letters"
      }]
    });
    var letterInput = helper.makeNode({
      tag: "input",
      attr: [{
        key: "type",
        value: "text"
      }, {
        key: "class",
        value: "link-form-input-letter"
      }, {
        key: "id",
        value: "letters"
      }, {
        key: "placeholder",
        value: "E"
      }, {
        key: "tabindex",
        value: "1"
      }, {
        key: "autocomplete",
        value: "off"
      }]
    });
    var nameLabel = helper.makeNode({
      tag: "label",
      text: "Name",
      attr: [{
        key: "for",
        value: "name"
      }]
    });
    var nameInput = helper.makeNode({
      tag: "input",
      attr: [{
        key: "type",
        value: "text"
      }, {
        key: "class",
        value: "link-form-input-name"
      }, {
        key: "id",
        value: "name"
      }, {
        key: "placeholder",
        value: "Example"
      }, {
        key: "tabindex",
        value: "1"
      }, {
        key: "autocomplete",
        value: "off"
      }]
    });
    var urlLabel = helper.makeNode({
      tag: "label",
      text: "URL",
      attr: [{
        key: "for",
        value: "url"
      }]
    });
    var urlInput = helper.makeNode({
      tag: "input",
      attr: [{
        key: "type",
        value: "text"
      }, {
        key: "class",
        value: "link-form-input-url"
      }, {
        key: "id",
        value: "url"
      }, {
        key: "placeholder",
        value: "https://www.example.com/"
      }, {
        key: "tabindex",
        value: "1"
      }, {
        key: "autocomplete",
        value: "off"
      }]
    });
    fieldset.appendChild(letterLabel);
    fieldset.appendChild(letterInput);
    fieldset.appendChild(nameLabel);
    fieldset.appendChild(nameInput);
    fieldset.appendChild(urlLabel);
    fieldset.appendChild(urlInput);
    form.appendChild(fieldset);
    return form;
  };

  var _makeLink = function(data) {
    var linkItem = helper.makeNode({
      tag: "div",
      attr: [{
        key: "class",
        value: "link-item"
      }, {
        key: "data-index",
        value: data.index
      }]
    });
    var linkPanelFront = helper.makeNode({
      tag: "a",
      attr: [{
        key: "class",
        value: "link-panel-front"
      }, {
        key: "href",
        value: data.url
      }, {
        key: "tabindex",
        value: 1
      }]
    });
    var linkPanelBack = helper.makeNode({
      tag: "div",
      attr: [{
        key: "class",
        value: "link-panel-back"
      }]
    });
    var linkLetter = helper.makeNode({
      tag: "p",
      text: data.letter,
      attr: [{
        key: "class",
        value: "link-letter"
      }]
    });
    var linkName = helper.makeNode({
      tag: "p",
      text: data.name,
      attr: [{
        key: "class",
        value: "link-name"
      }]
    });
    var linkUrl = helper.makeNode({
      tag: "div",
      attr: [{
        key: "class",
        value: "link-url"
      }]
    });
    var linkUrlText = helper.makeNode({
      tag: "p",
      text: data.url.replace(/^https?\:\/\//i, "").replace(/\/$/, ""),
      attr: [{
        key: "class",
        value: "link-url-text"
      }]
    });
    var linkControl = helper.makeNode({
      tag: "div",
      attr: [{
        key: "class",
        value: "link-control"
      }]
    });
    var linkEdit = helper.makeNode({
      tag: "button",
      attr: [{
        key: "class",
        value: "button button-small link-control-item link-edit"
      }, {
        key: "tabindex",
        value: -1
      }]
    });
    var linkEditIcon = helper.makeNode({
      tag: "span",
      attr: [{
        key: "class",
        value: "button-icon icon-edit"
      }]
    });
    var linkDelete = helper.makeNode({
      tag: "button",
      attr: [{
        key: "class",
        value: "button button-small link-control-item link-delete"
      }, {
        key: "tabindex",
        value: -1
      }]
    });
    var linkDeleteIcon = helper.makeNode({
      tag: "span",
      attr: [{
        key: "class",
        value: "button-icon icon-close"
      }]
    });
    linkPanelFront.appendChild(linkLetter);
    linkPanelFront.appendChild(linkName);
    linkEdit.appendChild(linkEditIcon);
    linkDelete.appendChild(linkDeleteIcon);
    linkControl.appendChild(linkEdit);
    linkControl.appendChild(linkDelete);
    linkUrl.appendChild(linkUrlText);
    linkPanelBack.appendChild(linkUrl);
    linkPanelBack.appendChild(linkControl);
    linkItem.appendChild(linkPanelFront);
    linkItem.appendChild(linkPanelBack);
    _bind({
      element: linkEdit,
      action: "edit"
    });
    _bind({
      element: linkDelete,
      action: "delete"
    });
    return linkItem;
  };

  var render = function(array) {
    var linkArea = helper.e(".link-area");
    var bookmarksToRender = array || bookmarks.get();
    bookmarksToRender.forEach(function(arrayItem) {
      linkArea.appendChild(_makeLink(arrayItem));
    });
  };

  var tabIndex = function() {
    var allLinkControlItem = helper.eA(".link-control-item");
    if (state.get().edit.active) {
      allLinkControlItem.forEach(function(arrayItem, index) {
        arrayItem.tabIndex = 1;
      });
    } else {
      allLinkControlItem.forEach(function(arrayItem, index) {
        arrayItem.tabIndex = -1;
      });
    };
  };

  var clear = function() {
    var linkArea = helper.e(".link-area");
    while (linkArea.lastChild) {
      linkArea.removeChild(linkArea.lastChild);
    };
  };

  var init = function() {
    render();
  };

  // exposed methods
  return {
    init: init,
    clear: clear,
    add: add,
    edit: edit,
    save: save,
    remove: remove,
    render: render,
    tabIndex: tabIndex
  };

})();
