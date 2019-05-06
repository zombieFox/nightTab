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
    if (currentBookmark.accent.override) {
      form.querySelector(".link-form-input-color").value = helper.rgbToHex(currentBookmark.accent.color);
    } else {
      form.querySelector(".link-form-input-color").value = helper.rgbToHex(state.get().theme.accent.current);
    };
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
          timeStamp: new Date().getTime(),
          accent: {
            override: false,
            color: {
              r: null,
              g: null,
              b: null
            }
          }
        };
        if (options.form.querySelector(".link-form-input-color").value != helper.rgbToHex(state.get().theme.accent.current)) {
          newBookmarkData.accent.override = true;
          newBookmarkData.accent.color = helper.hexToRgb(options.form.querySelector(".link-form-input-color").value);
        };
        bookmarks.add(newBookmarkData);
      },
      edit: function() {
        options.bookmarkData.letter = options.form.querySelector(".link-form-input-letter").value;
        options.bookmarkData.name = options.form.querySelector(".link-form-input-name").value;
        options.bookmarkData.url = options.form.querySelector(".link-form-input-url").value;
        if (options.form.querySelector(".link-form-input-color").value != helper.rgbToHex(state.get().theme.accent.current)) {
          options.bookmarkData.accent.override = true;
          options.bookmarkData.accent.color = helper.hexToRgb(options.form.querySelector(".link-form-input-color").value);
        } else {
          options.bookmarkData.accent.override = false;
          options.bookmarkData.accent.color = {
            r: null,
            g: null,
            b: null
          };
        };
        bookmarks.edit({
          bookmarkData: options.bookmarkData,
          timeStamp: options.bookmarkData.timeStamp
        });
      }
    };
    action[options.action]();
    data.save();
    clear();
    render();
  };

  var remove = function(bookmarkData) {
    bookmarks.remove(bookmarkData.timeStamp);
    _checkCount();
    data.save();
    clear();
    render();
  };

  var _checkCount = function() {
    if (bookmarks.get().length <= 0) {
      helper.setObject({
        object: state.get(),
        path: "bookmarks.edit",
        newValue: false
      });
    };
  };

  var _makeLinkForm = function() {

    var form = helper.node("form|class:link-form");
    var fieldset = helper.node("fieldset");
    var letterFormIndet = helper.node("div|class:form-indent");
    // var letterLabel = helper.node("label:Letters|for:link-form-input-letter");
    var letterInput = helper.node("input|type:text,class:link-form-input-letter,id:link-form-input-letter,placeholder:E,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
    var iconFormIndet = helper.node("div|class:form-indent");
    var iconAutoSuggest = helper.node("div|class:auto-suggest-field");
    var iconFormGroup = helper.node("div|class:form-group");
    // var iconLabel = helper.node("label:Icon|for:link-form-input-icon");
    var iconInput = helper.node("input|type:text,class:link-form-input-icon auto-suggest-field,id:link-form-input-icon,placeholder:Egg,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false,disabled");
    var iconFormGroupText = helper.node("div|class:form-group-text,disabled");
    var iconFormGroupIcon = helper.node("span|id:link-form-icon,class:link-form-icon fas fa-egg");
    var iconPara = helper.node("p:Search for an Icon.|class:input-helper small muted,disabled");
    var nameLabel = helper.node("label:Name|for:link-form-input-name");
    var nameInput = helper.node("input|type:text,class:link-form-input-name,id:link-form-input-name,placeholder:Example,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
    var urlLabel = helper.node("label:URL|for:link-form-input-url");
    var urlInput = helper.node("input|type:text,class:link-form-input-url mb-0,id:link-form-input-url,placeholder:https://www.example.com/,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
    var colorInputWrap = helper.node("div|class:input-wrap py-0");
    var colorFormGroup = helper.node("div|class:form-group");
    var colorInputLabel = helper.node("label:Accent override|for:link-form-input-color");
    var colorInputInput = helper.node("input|id:link-form-input-color,class:link-form-input-color mb-0,type:color,value:" + helper.rgbToHex(state.get().theme.accent.current) + ",tabindex:1");
    var colorButtonRefresh = helper.node("button|class:button mb-0,type:button,tabindex:1");
    var colorButtonRefreshIcon = helper.node("span|class:icon-refresh");
    var colorPara = helper.node("p:Use this colour to override the global Accent colour.|class:input-helper small muted");
    var letterRadioInputWrap = helper.node("div|class:input-wrap");
    var letterRadioInput = helper.node("input|class:link-form-input-display-letter,id:link-form-input-display-letter,type:radio,name:link-form-input-display,tabindex:1,checked");
    var letterRadioLable = helper.node("label:Letters|for:link-form-input-display-letter");
    var iconRadioInputWrap = helper.node("div|class:input-wrap");
    var iconRadioInput = helper.node("input|class:link-form-input-display-icon,id:link-form-input-display-icon,type:radio,name:link-form-input-display,tabindex:1");
    var iconRadioLable = helper.node("label:Icon|for:link-form-input-display-icon");

    autoSuggest.bind({
      input: iconInput,
      type: "fontawesomeIcon"
    });

    iconInput.addEventListener("focus", function(event) {
      console.log("focus");
    }, false);

    iconInput.addEventListener("blur", function(event) {
      console.log("blur");
    }, false);

    letterRadioInput.addEventListener("change", function(event) {
      letterInput.removeAttribute("disabled");
      iconInput.setAttribute("disabled", "");
      iconFormGroupText.setAttribute("disabled", "");
      iconPara.setAttribute("disabled", "");
    }, false);

    iconRadioInput.addEventListener("change", function(event) {
      letterInput.setAttribute("disabled", "");
      iconInput.removeAttribute("disabled");
      iconFormGroupText.removeAttribute("disabled");
      iconPara.removeAttribute("disabled");
    }, false);

    colorButtonRefresh.addEventListener("click", function(event) {
      colorInputInput.value = helper.rgbToHex(state.get().theme.accent.current);
    }, false);

    letterRadioInputWrap.appendChild(letterRadioInput);
    letterRadioInputWrap.appendChild(letterRadioLable);
    fieldset.appendChild(letterRadioInputWrap);
    // letterFormIndet.appendChild(letterLabel);
    letterFormIndet.appendChild(letterInput);
    fieldset.appendChild(letterFormIndet);

    iconRadioInputWrap.appendChild(iconRadioInput);
    iconRadioInputWrap.appendChild(iconRadioLable);
    fieldset.appendChild(iconRadioInputWrap);
    // iconFormIndet.appendChild(iconLabel);
    iconFormGroupText.appendChild(iconFormGroupIcon);
    iconFormGroup.appendChild(iconInput);
    iconFormGroup.appendChild(iconFormGroupText);
    iconAutoSuggest.appendChild(iconFormGroup);
    iconFormIndet.appendChild(iconAutoSuggest);
    iconFormIndet.appendChild(iconPara);
    fieldset.appendChild(iconFormIndet);

    fieldset.appendChild(helper.node("hr"));
    fieldset.appendChild(nameLabel);
    fieldset.appendChild(nameInput);
    fieldset.appendChild(urlLabel);
    fieldset.appendChild(urlInput);
    fieldset.appendChild(helper.node("hr"));
    fieldset.appendChild(colorInputLabel);
    colorFormGroup.appendChild(colorInputInput);
    colorButtonRefresh.appendChild(colorButtonRefreshIcon);
    colorFormGroup.appendChild(colorButtonRefresh);
    colorInputWrap.appendChild(colorFormGroup);
    fieldset.appendChild(colorInputWrap);
    fieldset.appendChild(colorPara);
    form.appendChild(fieldset);
    return form;
  };

  var _makeLink = function(data) {
    var linkItemOptions = {
      tag: "div",
      attr: [{
        key: "class",
        value: "link-item"
      }]
    };
    if (data.accent.override) {
      linkItemOptions.attr.push({
        key: "style",
        value: "--accent: " + data.accent.color.r + ", " + data.accent.color.g + ", " + data.accent.color.b
      });
    };
    var linkItem = helper.makeNode(linkItemOptions);
    var linkPanelFrontOptions = {
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
      linkPanelFrontOptions.attr.push({
        key: "target",
        value: "_blank"
      });
    };
    var linkPanelFront = helper.makeNode(linkPanelFrontOptions);
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
      }, {
        key: "title",
        value: data.url.replace(/^https?\:\/\//i, "").replace(/\/$/, "")
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
    if (state.get().search) {
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
    if (state.get().search) {
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
