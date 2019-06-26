var link = (function() {

  var bind = function() {
    sortable(".link-area", {
      items: ".link-item",
      handle: ".link-control-item-handle",
      placeholder: helper.node("div|class:link-item-placeholder")
    });
    sortable(".link-area")[0].addEventListener("sortupdate", function(event) {
      bookmarks.move(event.detail.origin.index, event.detail.destination.index);
      data.save();
    });
  };

  var _previousFocusLink = null;

  var _returnToPreviousFocusLink = function() {
    if (_previousFocusLink != null) {
      var linkPanelFront = helper.eA(".link-panel-front");
      if (linkPanelFront.length > 0) {
        if (_previousFocusLink >= 0) {
          linkPanelFront[_previousFocusLink].focus();
        } else {
          linkPanelFront[0].focus();
        };
      } else {
        helper.e("body").focus();
      };
      _previousFocusLink = null;
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
        render.item.all();
        render.tabIndex();
        control.dependents();
        control.render();
        resetStagedBookmarkData();
        sortable(".link-area");
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
        render.item.all();
        render.tabIndex();
        _returnToPreviousFocusLink();
        resetStagedBookmarkData();
        sortable(".link-area");
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
    modal.render({
      heading: "Remove " + bookmarkData.name + " bookmark",
      content: "Are you sure you want to remove this bookmark? This can not be undone.",
      successAction: function() {
        _previousFocusLink = _previousFocusLink - 1;
        bookmarks.remove(bookmarkData);
        _checkCount();
        data.save();
        clear();
        render.item.all();
        control.dependents();
        control.render();
        _returnToPreviousFocusLink();
        sortable(".link-area");
      },
      cancelAction: function() {
        _returnToPreviousFocusLink();
      },
      actionText: "Remove",
      size: "small"
    });
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
    var letterInputWrap = helper.node("div|class:input-wrap");
    var letterInput = helper.node("input|type:text,class:link-form-input-letter mb-0,id:link-form-input-letter,placeholder:E,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
    var iconFormIndet = helper.node("div|class:form-indent");
    var iconFormGroupWrap = helper.node("div|class:input-wrap");
    var iconFormGroup = helper.node("div|class:form-group auto-suggest-wrapper");
    var iconInput = helper.node("input|type:text,class:link-form-input-icon auto-suggest-input,id:link-form-input-icon,placeholder:Search for Brands or Icons,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false,disabled");
    var iconFormGroupText = helper.node("div|class:form-group-text link-form-text-icon,tabindex:-1,disabled");
    var iconFormGroupClear = helper.node("button|class:link-form-icon-clear button mb-0,type:button,tabindex:1,disabled");
    var iconFormGroupClearIcon = helper.node("span|class:icon-close");
    var iconPara = helper.node("p:Refer to the \"Free\" and \"Brand\" icons from FontAwesome for full set of icons supported.|class:link-form-input-helper-icon input-helper small muted,disabled");
    var nameInputWrap = helper.node("div|class:input-wrap");
    var nameLabel = helper.node("label:Name|for:link-form-input-name");
    var nameInput = helper.node("input|type:text,class:link-form-input-name mb-0,id:link-form-input-name,placeholder:Example,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
    var urlInputWrap = helper.node("div|class:input-wrap");
    var urlLabel = helper.node("label:URL|for:link-form-input-url");
    var urlInput = helper.node("input|type:text,class:link-form-input-url mb-0,id:link-form-input-url,placeholder:https://www.example.com/,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
    var colorWrap = helper.node("div|class:input-wrap");
    var colorFormGroup = helper.node("div|class:form-group");
    var colorLabel = helper.node("label:Accent override|for:link-form-input-color");
    var colorInput = helper.node("input|id:link-form-input-color,class:link-form-input-color mb-0,type:color,value:" + helper.rgbToHex(state.get().theme.accent.current) + ",tabindex:1");
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
    letterInputWrap.appendChild(letterInput);
    letterFormIndet.appendChild(letterInputWrap);
    fieldset.appendChild(letterFormIndet);
    iconRadioInputWrap.appendChild(iconRadioInput);
    iconRadioInputWrap.appendChild(iconRadioLable);
    fieldset.appendChild(iconRadioInputWrap);
    iconFormGroupClear.appendChild(iconFormGroupClearIcon);
    iconFormGroup.appendChild(iconInput);
    iconFormGroup.appendChild(iconFormGroupText);
    iconFormGroup.appendChild(iconFormGroupClear);
    iconFormGroupWrap.appendChild(iconFormGroup);
    iconFormGroupWrap.appendChild(iconPara);
    iconFormIndet.appendChild(iconFormGroupWrap);
    fieldset.appendChild(iconFormIndet);
    fieldset.appendChild(helper.node("hr"));
    nameInputWrap.appendChild(nameLabel);
    nameInputWrap.appendChild(nameInput);
    fieldset.appendChild(nameInputWrap);
    urlInputWrap.appendChild(urlLabel);
    urlInputWrap.appendChild(urlInput);
    fieldset.appendChild(urlInputWrap);
    fieldset.appendChild(helper.node("hr"));
    colorFormGroup.appendChild(colorInput);
    colorButtonRefresh.appendChild(colorButtonRefreshIcon);
    colorFormGroup.appendChild(colorButtonRefresh);
    colorWrap.appendChild(colorLabel);
    colorWrap.appendChild(colorFormGroup);
    colorWrap.appendChild(colorPara);
    fieldset.appendChild(colorWrap);
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
    colorInput.addEventListener("change", function(event) {
      link.stagedBookmarkData.accent.override = true;
      link.stagedBookmarkData.accent.color = helper.hexToRgb(this.value);
    }, false);
    colorButtonRefresh.addEventListener("click", function(event) {
      colorInput.value = helper.rgbToHex(state.get().theme.accent.current);
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
        value: "--theme-accent: " + data.accent.color.r + ", " + data.accent.color.g + ", " + data.accent.color.b
      });
      if (invert(data.accent.color, true) == "#000000") {
        linkItemOptions.attr[0].value = linkItemOptions.attr[0].value + " link-url-text-dark";
      } else if (invert(data.accent.color, true) == "#ffffff") {
        linkItemOptions.attr[0].value = linkItemOptions.attr[0].value + " link-url-text-light";
      };
    } else {
      if (invert(state.get().theme.accent.current, true) == "#000000") {
        linkItemOptions.attr[0].value = linkItemOptions.attr[0].value + " link-url-text-dark";
      } else if (invert(state.get().theme.accent.current, true) == "#ffffff") {
        linkItemOptions.attr[0].value = linkItemOptions.attr[0].value + " link-url-text-light";
      };
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
    var linkHandle = helper.makeNode({
      tag: "div",
      attr: [{
        key: "class",
        value: "button button-small link-control-item link-control-item-handle"
      }, {
        key: "tabindex",
        value: -1
      }, {
        key: "title",
        value: "Drag and drop to reorder"
      }]
    });
    var linkHandleIcon = helper.makeNode({
      tag: "span",
      attr: [{
        key: "class",
        value: "button-icon icon-reorder"
      }]
    });
    var linkEdit = helper.makeNode({
      tag: "button",
      attr: [{
        key: "class",
        value: "button button-small link-control-item link-control-item-edit"
      }, {
        key: "tabindex",
        value: -1
      }, {
        key: "title",
        value: "Edit this bookmark"
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
        value: "button button-small link-control-item link-control-item-remove"
      }, {
        key: "tabindex",
        value: -1
      }, {
        key: "title",
        value: "Remove this bookmark"
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
    linkHandle.appendChild(linkHandleIcon);
    linkControl.appendChild(linkHandle);
    linkEdit.appendChild(linkEditIcon);
    linkControl.appendChild(linkEdit);
    linkRemove.appendChild(linkRemoveIcon);
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
      _previousFocusLink = index;
      remove(data);
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
    var div = helper.node("div|class:link-empty");
    var h1 = helper.node("h1:No matching bookmarks found|class:link-empty-heading");
    var para = helper.node("p:\"Enter\" to Search " + state.get().header.search.engine[state.get().header.search.engine.selected].name + "|class:small muted");
    div.appendChild(h1);
    div.appendChild(para);
    return div;
  };

  var _makeEmptyBookmarks = function() {
    var searchInput = helper.e(".search-input");
    var div = helper.node("div|class:link-empty");
    var h1 = helper.node("h1:No bookmarks added|class:link-empty-heading");
    var para = helper.node("p:Why not add some?|class:small muted");
    div.appendChild(h1);
    div.appendChild(para);
    return div;
  };

  var clear = function() {
    var linkArea = helper.e(".link-area");
    while (linkArea.lastChild) {
      linkArea.removeChild(linkArea.lastChild);
    };
  };

  var render = {
    area: {
      width: function() {
        _renderAreaWidth();
      }
    },
    item: {
      all: function() {
        _renderItemAll();
      },
      display: {
        letter: function() {
          _renderItemDisplayLetter();
        },
        icon: function() {
          _renderItemDisplayIcon();
        }
      },
      name: function() {
        _renderItemName();
      },
      size: function() {
        _renderItemSize();
      }
    },
    tabIndex: function() {
      _renderTabIndex();
    }
  };

  var _renderAreaWidth = function() {
    var html = helper.e("html");
    html.style.setProperty("--link-area-width", state.get().link.area.width + "%");
  };

  var _renderItemAll = function() {
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

  var _renderItemDisplayLetter = function() {
    var html = helper.e("html");
    html.style.setProperty("--link-item-display-letter-size", state.get().link.item.display.letter.size + "em");
  };

  var _renderItemDisplayIcon = function() {
    var html = helper.e("html");
    html.style.setProperty("--link-item-display-icon-size", state.get().link.item.display.icon.size + "em");
  };

  var _renderItemName = function() {
    var html = helper.e("html");
    html.style.setProperty("--link-item-name-size", state.get().link.item.name.size + "em");
  };

  var _renderItemSize = function() {
    var html = helper.e("html");
    html.style.setProperty("--link-item-size", state.get().link.item.size + "em");
  };

  var _renderTabIndex = function() {
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

  var accent = {
    set: function() {
      var units = 360 / bookmarks.get().length;
      var degree = 0;
      bookmarks.get().forEach(function(arrayItem, index) {
        arrayItem.accent.override = true;
        arrayItem.accent.color = helper.hslToRgb({
          h: degree,
          s: 1,
          l: 0.5
        });
        degree = degree + units;
      });
    },
    clear: function() {
      bookmarks.get().forEach(function(arrayItem, index) {
        arrayItem.accent = {
          override: false,
          color: {
            r: null,
            g: null,
            b: null
          }
        };
      });
    }
  };

  var init = function() {
    render.area.width();
    render.item.all();
    render.item.size();
    render.item.display.letter();
    render.item.display.icon();
    render.item.name();
    bind();
  };

  // exposed methods
  return {
    stagedBookmarkData: stagedBookmarkData,
    autoSuggestIconAction: autoSuggestIconAction,
    accent: accent,
    init: init,
    clear: clear,
    add: add,
    edit: edit,
    remove: remove,
    render: render
  };

})();
