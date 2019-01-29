var link = (function() {

  var _bind = function(override) {
    var options = {
      element: null,
      action: null,
      bookmarkData: null
    };
    if (override) {
      options = helper.applyOptions(options, override);
    };
    var action = {
      edit: function() {
        options.element.addEventListener("click", function() {
          edit(options.bookmarkData);
        }, false);
      },
      remove: function() {
        options.element.addEventListener("click", function() {
          remove(options.bookmarkData);
          control.dependents();
          control.render();
        }, false);
      }
    };
    if (options.element != null) {
      action[options.action]();
    };
  };

  var edit = function(bookmarkData) {
    var currentBookmark = bookmarks.get(bookmarkData.timeStamp);
    var form = _makeLinkForm();
    form.querySelector(".link-form-input-letter").value = currentBookmark.letter;
    form.querySelector(".link-form-input-name").value = currentBookmark.name;
    form.querySelector(".link-form-input-url").value = currentBookmark.url;
    modal.render({
      heading: "Edit " + currentBookmark.name,
      action: function() {
        save({
          action: "edit",
          form: form,
          bookmarkData: bookmarkData
        });
      },
      actionText: "Save",
      size: "small",
      content: form
    });
  };

  var add = function() {
    var form = _makeLinkForm();
    modal.render({
      heading: "Add a new bookmark",
      action: function() {
        save({
          action: "add",
          form: form
        });
        control.dependents();
        control.render();
      },
      actionText: "Add",
      size: "small",
      content: form
    });
  };

  var save = function(override) {
    var options = {
      action: null,
      form: null,
      bookmarkData: null
    };
    if (override) {
      options = helper.applyOptions(options, override);
    };
    var action = {
      add: function() {
        var newBookmarkData = {
          letter: options.form.querySelector(".link-form-input-letter").value,
          name: options.form.querySelector(".link-form-input-name").value,
          url: options.form.querySelector(".link-form-input-url").value,
          timeStamp: new Date().getTime()
        };
        bookmarks.add(newBookmarkData);
      },
      edit: function() {
        options.bookmarkData.letter = options.form.querySelector(".link-form-input-letter").value;
        options.bookmarkData.name = options.form.querySelector(".link-form-input-name").value;
        options.bookmarkData.url = options.form.querySelector(".link-form-input-url").value;
        bookmarks.edit(options.bookmarkData, options.bookmarkData.timeStamp);
      }
    };
    action[options.action]();
    data.save();
    clear();
    render();
  };

  var remove = function(bookmarkData) {
    bookmarks.remove(bookmarkData.timeStamp);
    data.save();
    clear();
    render();
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
        value: "link-form-input-url mb-0"
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
      }]
    });
    var linkOptions = {
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
    };
    if (state.get().bookmarks.newTab) {
      linkOptions.attr.push({
        key: "target",
        value: "_blank"
      });
    };
    var linkPanelFront = helper.makeNode(linkOptions);
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
        value: "button button-small link-control-item"
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
    var linkRemove = helper.makeNode({
      tag: "button",
      attr: [{
        key: "class",
        value: "button button-small link-control-item"
      }, {
        key: "tabindex",
        value: -1
      }]
    });
    var linkRemoveIcon = helper.makeNode({
      tag: "span",
      attr: [{
        key: "class",
        value: "button-icon icon-close"
      }]
    });
    linkPanelFront.appendChild(linkLetter);
    linkPanelFront.appendChild(linkName);
    linkEdit.appendChild(linkEditIcon);
    linkRemove.appendChild(linkRemoveIcon);
    linkControl.appendChild(linkEdit);
    linkControl.appendChild(linkRemove);
    linkUrl.appendChild(linkUrlText);
    linkPanelBack.appendChild(linkUrl);
    linkPanelBack.appendChild(linkControl);
    linkItem.appendChild(linkPanelFront);
    linkItem.appendChild(linkPanelBack);
    _bind({
      element: linkEdit,
      action: "edit",
      bookmarkData: data
    });
    _bind({
      element: linkRemove,
      action: "remove",
      bookmarkData: data
    });
    return linkItem;
  };

  var _makeEmptySearch = function() {
    var searchInput = helper.e(".search-input");
    var div = helper.makeNode({
      tag: "div",
      attr: [{
        key: "class",
        value: "link-empty"
      }]
    });
    var h1 = helper.makeNode({
      tag: "h1",
      attr: [{
        key: "class",
        value: "link-empty-heading"
      }],
      text: "No matching bookmarks found"
    });
    div.appendChild(h1);
    return div;
  };

  var _makeEmptyBookmarks = function() {
    var searchInput = helper.e(".search-input");
    var div = helper.makeNode({
      tag: "div",
      attr: [{
        key: "class",
        value: "link-empty"
      }]
    });
    var h1 = helper.makeNode({
      tag: "h1",
      attr: [{
        key: "class",
        value: "link-empty-heading"
      }],
      text: "No bookmarks added"
    });
    div.appendChild(h1);
    return div;
  };

  var render = function() {
    var linkArea = helper.e(".link-area");
    var bookmarksToRender = false;
    if (state.get().search.active) {
      bookmarksToRender = search.get();
    } else {
      bookmarksToRender = bookmarks.get();
    };
    var action = {
      render: {
        bookmarks: function(array) {
          array.forEach(function(arrayItem, index) {
            linkArea.appendChild(_makeLink(arrayItem));
          });
        },
        empty: {
          search: function() {
            linkArea.appendChild(_makeEmptySearch());
          },
          bookmarks: function() {
            linkArea.appendChild(_makeEmptyBookmarks());
          }
        }
      }
    };
    // if searching
    if (state.get().search.active) {
      // if bookmarks exist to be searched
      if (bookmarksToRender.total > 0) {
        // if matching bookmarks found
        if (bookmarksToRender.matching.length > 0) {
          action.render.bookmarks(bookmarksToRender.matching);
        } else {
          action.render.empty.search();
        };
      } else {
        action.render.empty.bookmarks();
      };
    } else {
      // if bookmarks exist
      if (bookmarksToRender.length > 0) {
        action.render.bookmarks(bookmarksToRender);
      } else {
        action.render.empty.bookmarks();
      };
    };
  };

  var tabIndex = function() {
    var allLinkControlItem = helper.eA(".link-control-item");
    if (state.get().bookmarks.edit) {
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
