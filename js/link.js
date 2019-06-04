var link = (function() {

  var _previousFocusLink = null;

  var _returnToPreviousFocusLink = function() {
    if (_previousFocusLink != null) {
      helper.eA(".link-panel-back")[_previousFocusLink].querySelectorAll(".link-control-item")[0].focus();
      _previousFocusLink = null
    };
  };

  var stagedBookmarkData = {
    display: null,
    letter: null,
    icon: {
      name: null,
      prefix: null,
      label: null
    },
    name: null,
    url: null,
    timeStamp: null,
    accent: {
      override: null,
      color: {
        r: null,
        g: null,
        b: null
      }
    }
  };

  var initStagedBookmarkData = function() {
    link.stagedBookmarkData.display = "letter";
    link.stagedBookmarkData.accent.override = false;
  };

  var resetStagedBookmarkData = function() {
    link.stagedBookmarkData.display = null;
    link.stagedBookmarkData.letter = null;
    link.stagedBookmarkData.icon.name = null;
    link.stagedBookmarkData.icon.prefix = null;
    link.stagedBookmarkData.icon.label = null;
    link.stagedBookmarkData.name = null;
    link.stagedBookmarkData.url = null;
    link.stagedBookmarkData.timeStamp = null;
    link.stagedBookmarkData.accent.override = null;
    link.stagedBookmarkData.accent.color.r = null;
    link.stagedBookmarkData.accent.color.g = null;
    link.stagedBookmarkData.accent.color.b = null;
  };

  var add = function() {
    initStagedBookmarkData();
    var form = _makeLinkForm();
    modal.render({
      heading: "Add a new bookmark",
      successAction: function() {
        link.stagedBookmarkData.timeStamp = new Date().getTime();
        bookmarks.add(JSON.parse(JSON.stringify(link.stagedBookmarkData)));
        data.save();
        clear();
        render.link();
        tabIndex();
        control.dependents();
        control.render();
        resetStagedBookmarkData();
      },
      cancelAction: function() {
        resetStagedBookmarkData();
        autoSuggest.destroy();
      },
      actionText: "Add",
      size: "small",
      content: form
    });
  };

  var edit = function(bookmarkData) {
    link.stagedBookmarkData = JSON.parse(JSON.stringify(bookmarkData));
    var form = _makeLinkForm();
    if (link.stagedBookmarkData.display == "letter" || link.stagedBookmarkData.display == null) {
      form.querySelector(".link-form-input-letter").removeAttribute("disabled");
      form.querySelector(".link-form-input-icon").setAttribute("disabled", "");
      form.querySelector(".form-group-text").setAttribute("disabled", "");
      form.querySelector(".link-form-input-icon").setAttribute("disabled", "");
      form.querySelector(".link-form-input-helper-icon").setAttribute("disabled", "");
      form.querySelector(".link-form-icon-clear").setAttribute("disabled", "");
      form.querySelector(".link-form-text-icon").tabIndex = -1;
    } else if (link.stagedBookmarkData.display == "icon") {
      form.querySelector(".link-form-input-letter").setAttribute("disabled", "");
      form.querySelector(".link-form-input-icon").removeAttribute("disabled");
      form.querySelector(".form-group-text").removeAttribute("disabled");
      form.querySelector(".link-form-input-icon").removeAttribute("disabled");
      form.querySelector(".link-form-input-helper-icon").removeAttribute("disabled");
      form.querySelector(".link-form-icon-clear").removeAttribute("disabled");
      form.querySelector(".link-form-input-display-icon").checked = true;
      form.querySelector(".link-form-text-icon").tabIndex = 1;
    };
    if (link.stagedBookmarkData.icon.name != null && link.stagedBookmarkData.icon.prefix != null && link.stagedBookmarkData.icon.label != null) {
      form.querySelector(".link-form-text-icon").appendChild(helper.node("span|class:link-form-icon " + link.stagedBookmarkData.icon.prefix + " fa-" + link.stagedBookmarkData.icon.name));
    };
    form.querySelector(".link-form-input-letter").value = link.stagedBookmarkData.letter;
    form.querySelector(".link-form-input-icon").value = link.stagedBookmarkData.icon.label;
    form.querySelector(".link-form-input-name").value = link.stagedBookmarkData.name;
    form.querySelector(".link-form-input-url").value = link.stagedBookmarkData.url;
    if (link.stagedBookmarkData.accent.override) {
      form.querySelector(".link-form-input-color").value = helper.rgbToHex(link.stagedBookmarkData.accent.color);
    };
    modal.render({
      heading: "Edit " + link.stagedBookmarkData.name,
      successAction: function() {
        bookmarks.edit(JSON.parse(JSON.stringify(link.stagedBookmarkData)));
        data.save();
        clear();
        render.link();
        tabIndex();
        _returnToPreviousFocusLink();
        resetStagedBookmarkData();
      },
      cancelAction: function() {
        _returnToPreviousFocusLink();
        resetStagedBookmarkData();
      },
      actionText: "Save",
      size: "small",
      content: form
    });
  };

  var remove = function(bookmarkData) {
    bookmarks.remove(bookmarkData);
    _checkCount();
    data.save();
    clear();
    render.link();
  };

  var _checkCount = function() {
    if (bookmarks.get().length <= 0) {
      helper.setObject({
        object: state.get(),
        path: "link.edit",
        newValue: false
      });
    };
  };

  var _makeLinkForm = function() {
    var form = helper.node("form|class:link-form");
    var fieldset = helper.node("fieldset");
    var letterFormIndet = helper.node("div|class:form-indent");
    var letterInput = helper.node("input|type:text,class:link-form-input-letter,id:link-form-input-letter,placeholder:E,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
    var iconFormIndet = helper.node("div|class:form-indent");
    var iconFormGroup = helper.node("div|class:form-group auto-suggest-wrapper");
    var iconInput = helper.node("input|type:text,class:link-form-input-icon auto-suggest-input,id:link-form-input-icon,placeholder:Search for Brands or Icons,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false,disabled");
    var iconFormGroupText = helper.node("div|class:form-group-text link-form-text-icon,tabindex:-1,disabled");
    var iconFormGroupClear = helper.node("button|class:link-form-icon-clear button mb-0,type:button,tabindex:1,disabled");
    var iconFormGroupClearIcon = helper.node("span|class:icon-close");
    var iconPara = helper.node("p:Refer to the \"Free\" and \"Brand\" icons from FontAwesome for full set of icons supported.|class:link-form-input-helper-icon input-helper small muted,disabled");
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
    var letterRadioInput = helper.node("input|class:link-form-input-display-letter,id:link-form-input-display-letter,type:radio,name:link-form-input-display,tabindex:1,checked,value:letter");
    var letterRadioLable = helper.node("label:Letters|for:link-form-input-display-letter");
    var iconRadioInputWrap = helper.node("div|class:input-wrap");
    var iconRadioInput = helper.node("input|class:link-form-input-display-icon,id:link-form-input-display-icon,type:radio,name:link-form-input-display,tabindex:1,value:icon");
    var iconRadioLable = helper.node("label:Icon|for:link-form-input-display-icon");

    letterRadioInputWrap.appendChild(letterRadioInput);
    letterRadioInputWrap.appendChild(letterRadioLable);
    fieldset.appendChild(letterRadioInputWrap);
    letterFormIndet.appendChild(letterInput);
    fieldset.appendChild(letterFormIndet);
    iconRadioInputWrap.appendChild(iconRadioInput);
    iconRadioInputWrap.appendChild(iconRadioLable);
    fieldset.appendChild(iconRadioInputWrap);
    iconFormGroupClear.appendChild(iconFormGroupClearIcon);
    iconFormGroup.appendChild(iconInput);
    iconFormGroup.appendChild(iconFormGroupText);
    iconFormGroup.appendChild(iconFormGroupClear);
    iconFormIndet.appendChild(iconFormGroup);
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

    letterRadioInput.addEventListener("change", function(event) {
      link.stagedBookmarkData.display = this.value;
    }, false);
    iconRadioInput.addEventListener("change", function(event) {
      link.stagedBookmarkData.display = this.value;
    }, false);
    letterInput.addEventListener("input", function(event) {
      link.stagedBookmarkData.letter = this.value;
    }, false);
    nameInput.addEventListener("input", function(event) {
      link.stagedBookmarkData.name = this.value;
    }, false);
    urlInput.addEventListener("input", function(event) {
      link.stagedBookmarkData.url = this.value;
    }, false);
    colorInputInput.addEventListener("change", function(event) {
      link.stagedBookmarkData.accent.override = true;
      link.stagedBookmarkData.accent.color = helper.hexToRgb(this.value);
    }, false);
    colorButtonRefresh.addEventListener("click", function(event) {
      colorInputInput.value = helper.rgbToHex(state.get().theme.accent.current);
      link.stagedBookmarkData.accent.override = false;
      link.stagedBookmarkData.accent.color = {
        r: null,
        g: null,
        b: null
      };
    }, false);
    iconFormGroupClear.addEventListener("click", function(event) {
      link.stagedBookmarkData.icon.name = null;
      link.stagedBookmarkData.icon.prefix = null;
      link.stagedBookmarkData.icon.label = null;
      var existingIcon = helper.e(".link-form-icon");
      if (existingIcon) {
        existingIcon.remove();
      };
      iconInput.value = "";
    }, false);
    letterRadioInput.addEventListener("change", function(event) {
      letterInput.removeAttribute("disabled");
      iconInput.setAttribute("disabled", "");
      iconFormGroupText.setAttribute("disabled", "");
      iconPara.setAttribute("disabled", "");
      iconFormGroupClear.setAttribute("disabled", "");
      iconFormGroupText.tabIndex = -1;
    }, false);
    iconRadioInput.addEventListener("change", function(event) {
      letterInput.setAttribute("disabled", "");
      iconInput.removeAttribute("disabled");
      iconFormGroupText.removeAttribute("disabled");
      iconPara.removeAttribute("disabled");
      iconFormGroupClear.removeAttribute("disabled");
      iconFormGroupText.tabIndex = 1;
    }, false);
    autoSuggest.bind({
      input: iconInput,
      type: "fontawesomeIcon",
      postFocus: iconFormGroupText
    });
    return form;
  };

  var _makeLink = function(data, index) {
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
    if (state.get().link.newTab) {
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
    var linkDisplay = helper.makeNode({
      tag: "div",
      attr: [{
        key: "class",
        value: "link-display"
      }]
    });
    var linkDisplayLetter = null;
    var linkDisplayIcon = null;
    if (data.display == "letter") {
      linkDisplayLetter = helper.makeNode({
        tag: "p",
        text: data.letter,
        attr: [{
          key: "class",
          value: "link-display-letter"
        }]
      });
    } else if (data.display == "icon" && data.icon.prefix != null && data.icon.name != null) {
      linkDisplayIcon = helper.makeNode({
        tag: "div",
        attr: [{
          key: "class",
          value: "link-display-icon " + data.icon.prefix + " fa-" + data.icon.name
        }]
      });
    };
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
    var url = "";
    if (data.url != null) {
      url = data.url.replace(/^https?\:\/\//i, "").replace(/\/$/, "");
    };
    var linkUrlText = helper.makeNode({
      tag: "p",
      text: url,
      attr: [{
        key: "class",
        value: "link-url-text"
      }, {
        key: "title",
        value: url
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
    if (data.display == "letter") {
      linkDisplay.appendChild(linkDisplayLetter);
    } else if (data.display == "icon" && data.icon.prefix != null && data.icon.name != null) {
      linkDisplay.appendChild(linkDisplayIcon);
    };
    linkPanelFront.appendChild(linkDisplay);
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

    linkEdit.addEventListener("click", function() {
      _previousFocusLink = index;
      edit(data);
    }, false);
    linkRemove.addEventListener("click", function() {
      remove(data);
      control.dependents();
      control.render();
    }, false);

    return linkItem;
  };

  var autoSuggestIconAction = function(autoSuggestData) {
    link.stagedBookmarkData.icon.label = autoSuggestData.label;
    link.stagedBookmarkData.icon.name = autoSuggestData.name;
    if (autoSuggestData.styles.includes("solid")) {
      link.stagedBookmarkData.icon.prefix = "fas";
    } else if (autoSuggestData.styles.includes("brands")) {
      link.stagedBookmarkData.icon.prefix = "fab";
    };
    var existingIcon = helper.e(".link-form-icon");
    if (existingIcon) {
      existingIcon.remove();
    };
    helper.e(".link-form-input-icon").value = autoSuggestData.label;
    helper.e(".link-form-text-icon").appendChild(helper.node("span|class:link-form-icon " + link.stagedBookmarkData.icon.prefix + " fa-" + link.stagedBookmarkData.icon.name));
    helper.e(".link-form-text-icon").focus();
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

  var render = {
    width: {
      set: function() {
        _width();
      },
      match: function() {
        _match();
      }
    },
    displayLetterIcon: {
      size: function() {
        _size();
      },
    },
    link: function() {
      _link();
    },
    items: function() {
      _items();
    }
  };

  var _link = function() {
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
            linkArea.appendChild(_makeLink(arrayItem, index));
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

  var _width = function() {
    var html = helper.e("html");
    html.style.setProperty("--link-area-width", state.get().link.area.width + "%");
  };

  var _size = function() {
    var html = helper.e("html");
    html.style.setProperty("--link-display-letter-size", state.get().link.display.letter.size + "em");
    html.style.setProperty("--link-display-icon-size", state.get().link.display.icon.size + "em");
  };

  var _match = function() {
    helper.setObject({
      object: state.get(),
      path: "link.area.width",
      newValue: state.get().header.area.width
    });
    render.width.set();
  };

  var _items = function() {
    var html = helper.e("html");
    html.style.setProperty("--link-items-width", state.get().link.items.width + "%");
  };

  var tabIndex = function() {
    var allLinkControlItem = helper.eA(".link-control-item");
    if (state.get().link.edit) {
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
    render.link();
    render.displayLetterIcon.size();
    render.width.set();
    render.items();
  };

  // exposed methods
  return {
    stagedBookmarkData: stagedBookmarkData,
    autoSuggestIconAction: autoSuggestIconAction,
    init: init,
    clear: clear,
    add: add,
    edit: edit,
    remove: remove,
    render: render,
    tabIndex: tabIndex
  };

})();
