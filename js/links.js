var links = (function() {

  var currentEditIndex = null;

  var currentAction = null;

  var _bind = function(override) {
    var options = {
      element: null,
      action: null
    };
    if (override) {
      options = helper.applyOptions(options, override);
    }
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
    currentAction = "add";
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
    currentAction = "edit";
    currentEditIndex = parseInt(button.closest(".link-item").dataset.index, 10);
    var currentBookmark = bookmarks.get()[currentEditIndex];
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
        bookmarks.edit(newLinkData, currentEditIndex);
      }
    };
    var form = helper.e(".link-form");
    var newLinkData = {
      letter: form.querySelector(".link-form-input-letter").value,
      name: form.querySelector(".link-form-input-name").value,
      url: form.querySelector(".link-form-input-url").value
    };
    action[currentAction](newLinkData);
    currentEditIndex = null;
    currentAction = null;
    clear();
    if (search.get().search) {
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
    if (search.get().search) {
      search.render();
    } else {
      render();
    };
    data.save();
  };

  var _makeElement = function(override) {
    var options = {
      tag: null,
      classes: null,
      text: null,
      url: null,
      index: null,
      attr: null
    };
    if (override) {
      options = helper.applyOptions(options, override);
    };
    var element = document.createElement(options.tag);
    if (options.text != null) {
      element.textContent = options.text;
    };
    if (options.attr != null) {
      options.attr.forEach(function(arrayItem, index) {
        if ("key" in arrayItem && "value" in arrayItem) {
          element.setAttribute(arrayItem.key, arrayItem.value);
        } else if ("key" in arrayItem) {
          element.setAttribute(arrayItem.key, "");
        }
      });
    };
    return element;
  };

  var _makeLinkForm = function() {
    var form = _makeElement({
      tag: "form",
      attr: [{
        key: "class",
        value: "link-form"
      }]
    });
    var fieldset = _makeElement({
      tag: "fieldset"
    });
    var letterLabel = _makeElement({
      tag: "label",
      text: "Letters",
      attr: [{
        key: "for",
        value: "letters"
      }]
    });
    var letterInput = _makeElement({
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
    var nameLabel = _makeElement({
      tag: "label",
      text: "Name",
      attr: [{
        key: "for",
        value: "name"
      }]
    });
    var nameInput = _makeElement({
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
    var urlLabel = _makeElement({
      tag: "label",
      text: "URL",
      attr: [{
        key: "for",
        value: "url"
      }]
    });
    var urlInput = _makeElement({
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

  var _makeLink = function(data, index) {
    var linkItem = _makeElement({
      tag: "div",
      attr: [{
        key: "class",
        value: "link-item"
      }, {
        key: "data-index",
        value: index
      }]
    });
    var linkPanelFront = _makeElement({
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
    var linkPanelBack = _makeElement({
      tag: "div",
      attr: [{
        key: "class",
        value: "link-panel-back"
      }]
    });
    var linkLetter = _makeElement({
      tag: "p",
      text: data.letter,
      attr: [{
        key: "class",
        value: "link-letter"
      }, {
        key: "data-index",
        value: data.url
      }]
    });
    var linkName = _makeElement({
      tag: "p",
      text: data.name,
      attr: [{
        key: "class",
        value: "link-name"
      }]
    });
    var linkUrl = _makeElement({
      tag: "div",
      attr: [{
        key: "class",
        value: "link-url"
      }]
    });
    var linkUrlText = _makeElement({
      tag: "p",
      text: data.url.replace(/^https?\:\/\//i, "").replace(/\/$/, ""),
      attr: [{
        key: "class",
        value: "link-url-text"
      }]
    });
    var linkControl = _makeElement({
      tag: "div",
      attr: [{
        key: "class",
        value: "link-control"
      }]
    });
    var linkEdit = _makeElement({
      tag: "button",
      attr: [{
        key: "class",
        value: "button button-small link-control-item link-edit"
      }, {
        key: "tabindex",
        value: -1
      }]
    });
    var linkEditIcon = _makeElement({
      tag: "span",
      attr: [{
        key: "class",
        value: "button-icon icon-edit"
      }]
    });
    var linkDelete = _makeElement({
      tag: "button",
      attr: [{
        key: "class",
        value: "button button-small link-control-item link-delete"
      }, {
        key: "tabindex",
        value: -1
      }]
    });
    var linkDeleteIcon = _makeElement({
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
    console.log("render");
    var gridItemBody = helper.e(".grid-item-body");
    if (array) {
      array.forEach(function(arrayItem, index) {
        if (arrayItem.index) {
          index = arrayItem.index;
        };
        gridItemBody.appendChild(_makeLink(arrayItem, index));
      });
    } else {
      bookmarks.get().forEach(function(arrayItem, index) {
        gridItemBody.appendChild(_makeLink(arrayItem, index));
      });
    };
  };

  var tabIndex = function() {
    var allLinkControlItem = helper.eA(".link-control-item");
    if (control.get().edit) {
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
    var gridItemBody = helper.e(".grid-item-body");
    while (gridItemBody.lastChild) {
      gridItemBody.removeChild(gridItemBody.lastChild);
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
