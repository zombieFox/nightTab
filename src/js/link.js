var link = (function() {

  var stagedGroup = {
    position: {
      origin: null,
      destination: null
    },
    group: {
      name: null,
      items: null
    }
  };

  stagedGroup.init = function() {
    stagedGroup.group.items = [];
  };

  stagedGroup.reset = function() {
    stagedGroup.position.origin = null;
    stagedGroup.position.destination = null;
    stagedGroup.group.name = null;
    stagedGroup.group.items = null;
  };

  var stagedLink = {
    position: {
      origin: {
        group: null,
        item: null
      },
      destination: {
        group: null,
        item: null
      },
      group: {
        new: null,
        name: null
      }
    },
    link: {
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
    }
  };

  stagedLink.init = function() {
    stagedLink.position.origin.group = 0;
    stagedLink.position.origin.item = 0;
    stagedLink.position.destination.group = 0;
    stagedLink.position.destination.item = 0;
    stagedLink.position.group.new = false;
    stagedLink.link.display = "letter";
    stagedLink.link.accent.override = false;
  };

  stagedLink.reset = function() {
    stagedLink.position.origin.group = null;
    stagedLink.position.origin.item = null;
    stagedLink.position.destination.group = null;
    stagedLink.position.destination.item = null;
    stagedLink.position.group.new = null;
    stagedLink.position.group.name = null;
    stagedLink.link.display = null;
    stagedLink.link.letter = null;
    stagedLink.link.icon.name = null;
    stagedLink.link.icon.prefix = null;
    stagedLink.link.icon.label = null;
    stagedLink.link.name = null;
    stagedLink.link.url = null;
    stagedLink.link.timeStamp = null;
    stagedLink.link.accent.override = null;
    stagedLink.link.accent.color.r = null;
    stagedLink.link.accent.color.g = null;
    stagedLink.link.accent.color.b = null;
  };

  var mod = {};

  mod.accent = {
    clear: function() {
      bookmarks.get().forEach(function(arrayItem, index) {
        arrayItem.items.forEach(function(arrayItem, index) {
          arrayItem.accent = {
            override: false,
            color: {
              r: null,
              g: null,
              b: null
            }
          };
        });
      });
    },
    rainbow: function() {
      var units = 360 / bookmarks.count();
      var degree = 0;
      bookmarks.get().forEach(function(arrayItem, index) {
        arrayItem.items.forEach(function(arrayItem, index) {
          arrayItem.accent.override = true;
          arrayItem.accent.color = helper.hslToRgb({
            h: degree,
            s: 1,
            l: 0.5
          });
          degree = degree + units;
        });
      });
    }
  };

  mod.edit = {
    toggle: function() {
      if (state.get().link.edit) {
        mod.edit.close();
      } else {
        mod.edit.open();
      };
    },
    open: function() {
      helper.setObject({
        object: state.get(),
        path: "link.edit",
        newValue: true
      });
    },
    close: function() {
      helper.setObject({
        object: state.get(),
        path: "link.edit",
        newValue: false
      });
    },
    check: function() {
      if (bookmarks.get().length <= 0) {
        helper.setObject({
          object: state.get(),
          path: "link.edit",
          newValue: false
        });
      };
    }
  };

  mod.add = {
    item: {
      open: function() {
        helper.setObject({
          object: state.get(),
          path: "link.add",
          newValue: true
        });
      },
      close: function() {
        helper.setObject({
          object: state.get(),
          path: "link.add",
          newValue: false
        });
      }
    },
    group: {
      open: function() {
        helper.setObject({
          object: state.get(),
          path: "group.add",
          newValue: true
        });
      },
      close: function() {
        helper.setObject({
          object: state.get(),
          path: "group.add",
          newValue: false
        });
      }
    }
  };

  var bind = {};

  bind.sort = {
    update: {
      func: {
        group: function(event) {
          stagedGroup.position.origin = event.detail.origin.index;
          stagedGroup.position.destination = event.detail.destination.index;
          bookmarks.mod.move.group(stagedGroup);
          data.save();
          groupAndItems();
        },
        item: function(event) {
          stagedLink.position.origin.group = Array.from(helper.getClosest(event.detail.origin.container, ".group").parentNode.children).indexOf(helper.getClosest(event.detail.origin.container, ".group"));
          stagedLink.position.origin.item = event.detail.origin.index;
          stagedLink.position.destination.group = Array.from(helper.getClosest(event.detail.destination.container, ".group").parentNode.children).indexOf(helper.getClosest(event.detail.destination.container, ".group"));
          stagedLink.position.destination.item = event.detail.destination.index
          bookmarks.mod.move.link(stagedLink);
          data.save();
          groupAndItems();
        }
      },
      remove: {
        group: function() {
          helper.eA(".link").forEach(function(arrayItem, index) {
            sortable(arrayItem)[0].removeEventListener("sortupdate", bind.sort.update.func.group, false);
          });
        },
        item: function() {
          helper.eA(".group-body").forEach(function(arrayItem, index) {
            sortable(arrayItem)[0].removeEventListener("sortupdate", bind.sort.update.func.item, false);
          });
        }
      }
    },
    group: function() {
      sortable(".link", {
        items: ".group",
        handle: ".group-control-item-handle",
        orientation: "vertical",
        placeholder: helper.node("div|class:link-sort-placeholder"),
        forcePlaceholderSize: true
      });
      bind.sort.update.remove.group();
      helper.eA(".link").forEach(function(arrayItem, index) {
        sortable(arrayItem)[0].addEventListener("sortupdate", bind.sort.update.func.group, false, event);
      });
    },
    item: function() {
      sortable(".group-body", {
        items: ".link-item",
        handle: ".link-control-item-handle",
        acceptFrom: ".group-body",
        placeholder: helper.node("div|class:link-sort-placeholder"),
        forcePlaceholderSize: true
      });
      bind.sort.update.remove.item();
      helper.eA(".group-body").forEach(function(arrayItem, index) {
        sortable(arrayItem)[0].addEventListener("sortupdate", bind.sort.update.func.item, false, event);
      });
    }
  };

  var render = {};

  render.move = {
    group: {
      up: function(copyStagedGroup) {
        stagedGroup.group = JSON.parse(JSON.stringify(copyStagedGroup.group));
        stagedGroup.position = JSON.parse(JSON.stringify(copyStagedGroup.position));
        stagedGroup.position.destination = stagedGroup.position.destination - 1;
        if (stagedGroup.position.destination < 0) {
          stagedGroup.position.destination = 0;
        };
        bookmarks.mod.move.group(stagedGroup);
        data.save();
        groupAndItems();
        render.focus.group.previous.up(copyStagedGroup);
      },
      down: function(copyStagedGroup) {
        stagedGroup.group = JSON.parse(JSON.stringify(copyStagedGroup.group));
        stagedGroup.position = JSON.parse(JSON.stringify(copyStagedGroup.position));
        stagedGroup.position.destination = stagedGroup.position.destination + 1;
        bookmarks.mod.move.group(stagedGroup);
        data.save();
        groupAndItems();
        render.focus.group.next.down(copyStagedGroup);
      }
    },
    link: {
      left: function(copyStagedLink) {
        stagedLink.link = JSON.parse(JSON.stringify(copyStagedLink.link));
        stagedLink.position = JSON.parse(JSON.stringify(copyStagedLink.position));
        stagedLink.position.destination.item = stagedLink.position.destination.item - 1;
        if (stagedLink.position.destination.item < 0) {
          stagedLink.position.destination.item = 0;
        };
        bookmarks.mod.move.link(JSON.parse(JSON.stringify(stagedLink)));
        data.save();
        groupAndItems();
        render.focus.item.previous.left(copyStagedLink);
      },
      right: function(copyStagedLink) {
        stagedLink.link = JSON.parse(JSON.stringify(copyStagedLink.link));
        stagedLink.position = JSON.parse(JSON.stringify(copyStagedLink.position));
        stagedLink.position.destination.item = stagedLink.position.destination.item + 1;
        bookmarks.mod.move.link(JSON.parse(JSON.stringify(stagedLink)));
        data.save();
        groupAndItems();
        render.focus.item.next.right(copyStagedLink);
      }
    }
  };

  render.clear = {
    group: function() {
      var link = helper.e(".link");
      while (link.lastChild) {
        link.removeChild(link.lastChild);
      };
    },
    item: function() {
      var groupBody = helper.eA(".group-body");
      groupBody.forEach(function(arrayItem, index) {
        while (arrayItem.lastChild) {
          arrayItem.removeChild(arrayItem.lastChild);
        };
      });
    }
  };

  render.area = {
    width: function() {
      var html = helper.e("html");
      html.style.setProperty("--link-area-width", state.get().link.area.width + "%");
    }
  };

  render.group = {
    area: function() {
      var group = helper.node("div|class:group");

      var groupHeader = helper.node("div|class:group-header");
      var groupName = helper.node("div|class:group-name");
      var groupNameText = helper.makeNode({
        tag: "h1",
        text: stagedGroup.group.name,
        attr: [{
          key: "class",
          value: "group-name-text"
        }]
      });
      var groupControl = helper.node("div|class:group-control form-group");

      groupName.appendChild(groupNameText);
      groupHeader.appendChild(groupControl);
      groupHeader.appendChild(groupName);
      group.appendChild(groupHeader);

      var groupBody = helper.node("div|class:group-body");
      group.appendChild(groupBody);

      var itemGroupControlItemUp = helper.node("button|class:button button-small group-control-item group-control-item-up,tabindex:-1,title:Move this group up");
      var itemGroupControlItemUpIcon = helper.node("span|class:button-icon icon-arrow-up");
      itemGroupControlItemUp.appendChild(itemGroupControlItemUpIcon);
      groupControl.appendChild(itemGroupControlItemUp);

      var itemGroupControlItemHandle = helper.node("div|class:button button-small group-control-item group-control-item-handle,tabindex:-1,title:Drag group to reorder");
      var itemGroupControlItemHandleIcon = helper.node("span|class:button-icon icon-reorder");
      itemGroupControlItemHandle.appendChild(itemGroupControlItemHandleIcon);
      groupControl.appendChild(itemGroupControlItemHandle);

      var itemGroupControlItemDown = helper.node("button|class:button button-small group-control-item group-control-item-down,tabindex:-1,title:Move this group down");
      var itemGroupControlItemDownIcon = helper.node("span|class:button-icon icon-arrow-down");
      itemGroupControlItemDown.appendChild(itemGroupControlItemDownIcon);
      groupControl.appendChild(itemGroupControlItemDown);

      var itemGroupControlItemEdit = helper.node("button|class:button button-small group-control-item group-control-item-edit,tabindex:-1,title:Edit this group");
      var itemGroupControlItemEditIcon = helper.node("span|class:button-icon icon-edit");
      itemGroupControlItemEdit.appendChild(itemGroupControlItemEditIcon);
      groupControl.appendChild(itemGroupControlItemEdit);

      var itemGroupControlItemRemove = helper.node("button|class:button button-small group-control-item group-control-item-remove,tabindex:-1,title:Remove this group");
      var itemGroupControlItemRemoveIcon = helper.node("span|class:button-icon icon-close");
      itemGroupControlItemRemove.appendChild(itemGroupControlItemRemoveIcon);
      groupControl.appendChild(itemGroupControlItemRemove);

      var copyStagedGroup = JSON.parse(JSON.stringify(stagedGroup));

      itemGroupControlItemUp.addEventListener("click", function(event) {
        render.move.group.up(copyStagedGroup);
      }, false);

      itemGroupControlItemDown.addEventListener("click", function() {
        render.move.group.down(copyStagedGroup);
      }, false);

      itemGroupControlItemEdit.addEventListener("click", function() {
        render.edit.group(copyStagedGroup);
      }, false);

      itemGroupControlItemRemove.addEventListener("click", function() {
        render.remove.group(copyStagedGroup);
      }, false);

      return group;
    },
    form: function(override) {
      var options = {
        new: null,
        useStagedGroup: null
      };
      if (override) {
        options = helper.applyOptions(options, override);
      };
      var form = helper.node("form|class:group-form");
      var fieldset = helper.node("fieldset");

      // group position
      var groupFormPositionInputWrap = helper.node("div|class:input-wrap");
      var groupFormPositionLabel = helper.node("label:Position|for:group-form-position");
      var groupFormPositionSelect = helper.node("select|id:group-form-position,class:group-form-position mb-0,tabindex:1");
      var groupFormRandomNameButtonWrap = helper.node("div|class:button-wrap");
      var groupFormRandomNameButton = helper.node("button:Random Group name|class:button mb-0,type:button,tabindex:1");

      // group name
      var groupFormNameInputWrap = helper.node("div|class:input-wrap");
      var groupFormInputLabel = helper.node("label:Name|for:group-form-input-name");
      var groupFormInputName = helper.node("input|type:text,class:group-form-input-name mb-0,id:group-form-input-name,placeholder:Example group,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");

      groupFormPositionInputWrap.appendChild(groupFormPositionLabel);
      groupFormPositionInputWrap.appendChild(groupFormPositionSelect);
      groupFormRandomNameButtonWrap.appendChild(groupFormRandomNameButton);
      groupFormNameInputWrap.appendChild(groupFormInputLabel);
      groupFormNameInputWrap.appendChild(groupFormInputName);
      fieldset.appendChild(groupFormNameInputWrap);
      fieldset.appendChild(groupFormRandomNameButtonWrap);
      fieldset.appendChild(groupFormPositionInputWrap);
      form.appendChild(fieldset);

      var makeGroupOptions = function() {
        var optionCount = bookmarks.get().length;
        if (options.new) {
          optionCount = optionCount + 1;
        };
        for (var i = 1; i <= optionCount; i++) {
          groupFormPositionSelect.appendChild(helper.node("option:" + helper.ordinalNumber(i)));
        };
      };

      var populateForm = function() {
        groupFormPositionSelect.selectedIndex = stagedGroup.position.origin;
        groupFormInputName.value = stagedGroup.group.name;
      };

      var setLastPosition = function() {
        groupFormPositionSelect.selectedIndex = groupFormPositionSelect.length - 1;
        stagedGroup.position.destination = groupFormPositionSelect.selectedIndex;
      };

      makeGroupOptions();
      if (options.useStagedGroup) {
        populateForm();
      };
      if (options.new) {
        setLastPosition();
      };

      form.addEventListener("keydown", function(event) {
        if (event.keyCode == 13) {
          event.preventDefault();
          return false;
        };
      }, false);
      groupFormPositionSelect.addEventListener("change", function(event) {
        stagedGroup.position.destination = this.selectedIndex;
      }, false);
      groupFormInputName.addEventListener("input", function(event) {
        stagedGroup.group.name = this.value;
      }, false);
      groupFormRandomNameButton.addEventListener("click", function(event) {
        var randomName = helper.randomString({
          mix: true
        });
        stagedGroup.group.name = randomName;
        groupFormInputName.value = randomName;
      }, false);

      return form;
    },
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--group-name-size", state.get().group.name.size + "em");
    },
    border: function() {
      var html = helper.e("html");
      html.style.setProperty("--group-border", state.get().group.border);
    },
    tabindex: function() {
      var allGroupControlItem = helper.eA(".group-control-item");
      if (state.get().link.edit) {
        allGroupControlItem.forEach(function(arrayItem, index) {
          arrayItem.tabIndex = 1;
        });
      } else {
        allGroupControlItem.forEach(function(arrayItem, index) {
          arrayItem.tabIndex = -1;
        });
      };
    }
  };

  render.item = {
    link: function() {
      var linkItemOptions = {
        tag: "div",
        attr: [{
          key: "class",
          value: "link-item"
        }]
      };
      if (stagedLink.link.accent.override) {
        linkItemOptions.attr.push({
          key: "style",
          value: "--theme-accent: " + stagedLink.link.accent.color.r + ", " + stagedLink.link.accent.color.g + ", " + stagedLink.link.accent.color.b
        });
        if (invert(stagedLink.link.accent.color, true) == "#000000") {
          linkItemOptions.attr[0].value = linkItemOptions.attr[0].value + " link-text-dark";
        } else if (invert(stagedLink.link.accent.color, true) == "#ffffff") {
          linkItemOptions.attr[0].value = linkItemOptions.attr[0].value + " link-text-light";
        };
      } else {
        if (invert(state.get().theme.accent.current, true) == "#000000") {
          linkItemOptions.attr[0].value = linkItemOptions.attr[0].value + " link-text-dark";
        } else if (invert(state.get().theme.accent.current, true) == "#ffffff") {
          linkItemOptions.attr[0].value = linkItemOptions.attr[0].value + " link-text-light";
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
          value: stagedLink.link.url
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
      var linkPanelBack = helper.node("div|class:link-panel-back");

      var linkDisplay = helper.node("div|class:link-display");
      var linkDisplayLetcon = helper.node("div|class:link-display-letcon");

      var linkDisplayLetter = null;
      var linkDisplayIcon = null;

      if (stagedLink.link.display == "letter") {
        var letterText = stagedLink.link.letter;
        if (letterText == null) {
          letterText = "";
        };
        linkDisplayLetter = helper.node("p:" + letterText + "|class:link-display-letter");
      } else if (stagedLink.link.display == "icon" && stagedLink.link.icon.prefix != null && stagedLink.link.icon.name != null) {
        linkDisplayIcon = helper.node("div|class:link-display-icon " + stagedLink.link.icon.prefix + " fa-" + stagedLink.link.icon.name);
      };
      var nameText = stagedLink.link.name;
      if (nameText == null) {
        nameText = "";
      };
      var linkName = helper.node("p:" + nameText + "|class:link-display-name");

      var linkUrl = helper.node("div|class:link-url");
      var url = "";
      if (stagedLink.link.url != null) {
        url = stagedLink.link.url.replace(/^https?\:\/\//i, "").replace(/\/$/, "");
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
      var linkControl = helper.node("div|class:link-control");
      var linkHandle = helper.node("div|class:button button-small link-control-item link-control-item-handle,tabindex:-1,title:Drag bookmark to reorder");
      var linkHandleIcon = helper.node("span|class:button-icon icon-reorder");
      var linkEdit = helper.node("button|class:button button-small link-control-item link-control-item-edit,tabindex:-1,title:Edit this bookmark");
      var linkEditIcon = helper.node("span|class:button-icon icon-edit");
      var linkLeft = helper.node("button|class:button button-small link-control-item link-control-item-left,tabindex:-1,title:Move this bookmark left");
      var linkLeftIcon = helper.node("span|class:button-icon icon-arrow-left");
      var linkRight = helper.node("button|class:button button-small link-control-item link-control-item-right,tabindex:-1,title:Move this bookmark right");
      var linkRightIcon = helper.node("span|class:button-icon icon-arrow-right");
      var linkRemove = helper.node("button|class:button button-small link-control-item link-control-item-remove,tabindex:-1,title:Remove this bookmark");
      var linkRemoveIcon = helper.node("span|class:button-icon icon-close");

      if (stagedLink.link.display == "letter") {
        linkDisplayLetcon.appendChild(linkDisplayLetter);
      } else if (stagedLink.link.display == "icon" && stagedLink.link.icon.prefix != null && stagedLink.link.icon.name != null) {
        linkDisplayLetcon.appendChild(linkDisplayIcon);
      };
      if (state.get().link.item.order == "displayname") {
        linkDisplay.appendChild(linkDisplayLetcon);
        linkDisplay.appendChild(linkName);
      } else if (state.get().link.item.order == "namedisplay") {
        linkDisplay.appendChild(linkName);
        linkDisplay.appendChild(linkDisplayLetcon);
      };
      linkPanelFront.appendChild(linkDisplay);
      linkLeft.appendChild(linkLeftIcon);
      linkControl.appendChild(linkLeft);
      linkHandle.appendChild(linkHandleIcon);
      linkControl.appendChild(linkHandle);
      linkRight.appendChild(linkRightIcon);
      linkControl.appendChild(linkRight);
      linkEdit.appendChild(linkEditIcon);
      linkControl.appendChild(linkEdit);
      linkRemove.appendChild(linkRemoveIcon);
      linkControl.appendChild(linkRemove);
      linkUrl.appendChild(linkUrlText);
      linkPanelBack.appendChild(linkUrl);
      linkPanelBack.appendChild(linkControl);
      linkItem.appendChild(linkPanelFront);
      linkItem.appendChild(linkPanelBack);

      var copyStagedLink = JSON.parse(JSON.stringify(stagedLink));

      linkLeft.addEventListener("click", function() {
        render.move.link.left(copyStagedLink);
      }, false);

      linkRight.addEventListener("click", function() {
        render.move.link.right(copyStagedLink);
      }, false);

      linkEdit.addEventListener("click", function() {
        render.edit.item(copyStagedLink);
      }, false);

      linkRemove.addEventListener("click", function() {
        render.remove.item(copyStagedLink);
      }, false);

      return linkItem;
    },
    form: function(override) {
      var options = {
        useStagedLink: null
      };
      if (override) {
        options = helper.applyOptions(options, override);
      };
      var form = helper.node("form|class:link-form");
      var fieldset = helper.node("fieldset");

      // group existing
      var groupExistingRadioWrap = helper.node("div|class:input-wrap");
      var groupExistingRadio = helper.node("input|class:link-form-input-group-existing,id:link-form-input-group-existing,type:radio,name:link-form-input-group,tabindex:1,checked,value:existing");
      var groupExistingLable = helper.node("label|for:link-form-input-group-existing");
      var groupExistingLableText = helper.node("span:Existing Group");
      var groupExistingLableIcon = helper.node("span|class:label-icon");
      var groupExistingFormIndent = helper.node("div|class:form-indent");
      var groupExistingGroupInputWrap = helper.node("div|class:input-wrap");
      var groupExistingGroup = helper.node("select|id:link-form-select-group,class:link-form-select-group mb-0,tabindex:1");
      var groupExistingPositionInputWrap = helper.node("div|class:input-wrap");
      var groupExistingPositionLabel = helper.node("label:Position|for:link-form-position");
      var groupExistingPosition = helper.node("select|id:link-form-position,class:link-form-position mb-0,tabindex:1");

      // group new
      var groupNewRadioWrap = helper.node("div|class:input-wrap");
      var groupNewRadio = helper.node("input|class:link-form-input-group-new,id:link-form-input-group-new,type:radio,name:link-form-input-group,tabindex:1,value:new");
      var groupNewLable = helper.node("label|for:link-form-input-group-new");
      var groupNewLableLableText = helper.node("span:New Group");
      var groupNewLableLableIcon = helper.node("span|class:label-icon");
      var groupNewFormIndent = helper.node("div|class:form-indent");
      var groupNewInputWrap = helper.node("div|class:input-wrap");
      var groupNewInput = helper.node("input|type:text,class:link-form-input-new-group mb-0,id:link-form-input-new-group,placeholder:Example group,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false,disabled");
      var groupNewRandomNameButtonWrap = helper.node("div|class:button-wrap");
      var groupNewRandomNameButton = helper.node("button:Random Group name|class:button mb-0,type:button,tabindex:1,disabled");

      // letter
      var displayLetterRadioWrap = helper.node("div|class:input-wrap");
      var displayLetterRadio = helper.node("input|class:link-form-input-display-letter,id:link-form-input-display-letter,type:radio,name:link-form-input-display,tabindex:1,checked,value:letter");
      var displayLetterLable = helper.node("label|for:link-form-input-display-letter");
      var displayLetterLableText = helper.node("span:Letters");
      var displayLetterLableIcon = helper.node("span|class:label-icon");
      var displayLetterFormIndent = helper.node("div|class:form-indent");
      var displayLetterInputWrap = helper.node("div|class:input-wrap");
      var displayLetterInput = helper.node("input|type:text,class:link-form-input-letter mb-0,id:link-form-input-letter,placeholder:E,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");

      // icon
      var displayIconRadiotWrap = helper.node("div|class:input-wrap");
      var displayIconRadio = helper.node("input|class:link-form-input-display-icon,id:link-form-input-display-icon,type:radio,name:link-form-input-display,tabindex:1,value:icon");
      var displayIconLable = helper.node("label|for:link-form-input-display-icon");
      var displayIconLableText = helper.node("span:Icon");
      var displayIconLableIcon = helper.node("span|class:label-icon");
      var displayIconFormIndent = helper.node("div|class:form-indent");
      var displayIconInputWrap = helper.node("div|class:input-wrap");
      var displayIconFormGroup = helper.node("div|class:form-group form-group-block mb-0 auto-suggest-input");
      var displayIconInput = helper.node("input|type:text,class:form-group-item-grow link-form-input-icon auto-suggest-input,id:link-form-input-icon,placeholder:Search for Brands or Icons,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false,disabled");
      var displayIconFormGroupText = helper.node("div|class:form-group-text link-form-text-icon disabled,tabindex:-1");
      var displayIconFormGroupClear = helper.node("button|class:link-form-icon-clear button mb-0,type:button,tabindex:1,disabled");
      var displayIconFormGroupClearIcon = helper.node("span|class:icon-close");
      var displayIconHelper = helper.node("p:Refer to the \"Free\" and \"Brand\" icons from FontAwesome for full set of icons supported.|class:link-form-input-icon-helper form-helper small muted disabled");

      // name
      var nameInputWrap = helper.node("div|class:input-wrap");
      var nameLabel = helper.node("label:Name|for:link-form-input-name");
      var nameInput = helper.node("input|type:text,class:link-form-input-name mb-0,id:link-form-input-name,placeholder:Example,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");

      // url
      var urlInputWrap = helper.node("div|class:input-wrap");
      var urlLabel = helper.node("label:URL|for:link-form-input-url");
      var urlInput = helper.node("input|type:text,class:link-form-input-url mb-0,id:link-form-input-url,placeholder:https://www.example.com/,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
      var urlInputHelper = helper.makeNode({
        tag: "p",
        text: "Be sure to use the full URL and include \"http://\" or \"https://\".",
        attr: [{
          key: "class",
          value: "form-helper small muted"
        }]
      });

      // accent
      var accentLabel = helper.node("label:Accent colour");
      var accentGlobalRadioWrap = helper.node("div|class:input-wrap");
      var accentGlobalRadio = helper.node("input|class:link-form-input-accent-global,id:link-form-input-accent-global,type:radio,name:link-form-input-accent,tabindex:1,checked,value:global");
      var accentGlobalLabel = helper.node("label|for:link-form-input-accent-global");
      var accentGlobalLabelText = helper.node("span:Global");
      var accentGlobalLabelIcon = helper.node("span|class:label-icon");
      var accentCustomInputWrap = helper.node("div|class:input-wrap");
      var accentCustomRadio = helper.node("input|class:link-form-input-accent-custom,id:link-form-input-accent-custom,type:radio,name:link-form-input-accent,tabindex:1,value:custom");
      var accentCustomLabel = helper.node("label|for:link-form-input-accent-custom");
      var accentCustomLabelText = helper.node("span:Custom");
      var accentCustomLabelIcon = helper.node("span|class:label-icon");
      var accentColorFormIndent = helper.node("div|class:form-indent");
      var accentColorInputWrap = helper.node("div|class:input-wrap");
      var accentColorFormGroup = helper.node("div|class:form-group form-group-block mb-0");
      var accentColorPicker = helper.node("input|id:link-form-input-accent-picker,class:form-group-item-half link-form-input-accent-picker mb-0,type:color,value:#000000,tabindex:1,disabled");
      var accentColorHex = helper.node("input|id:link-form-input-accent-hex,class:form-group-item-half link-form-input-accent-hex mb-0,type:text,placeholder:Hex code,value:#000000,tabindex:1,maxlength:7,disabled");
      var accentColorInputHelper = helper.node("p:Use this colour to override the global accent colour.|class:link-form-input-accent-helper form-helper small muted disabled");

      groupExistingRadioWrap.appendChild(groupExistingRadio);
      groupExistingLable.appendChild(groupExistingLableIcon);
      groupExistingLable.appendChild(groupExistingLableText);
      groupExistingRadioWrap.appendChild(groupExistingLable);
      groupExistingGroupInputWrap.appendChild(groupExistingGroup);
      groupExistingPositionInputWrap.appendChild(groupExistingPositionLabel);
      groupExistingPositionInputWrap.appendChild(groupExistingPosition);
      groupExistingFormIndent.appendChild(groupExistingGroupInputWrap);
      groupExistingFormIndent.appendChild(groupExistingPositionInputWrap);
      fieldset.appendChild(groupExistingRadioWrap);
      fieldset.appendChild(groupExistingFormIndent);

      groupNewRadioWrap.appendChild(groupNewRadio);
      groupNewLable.appendChild(groupNewLableLableIcon);
      groupNewLable.appendChild(groupNewLableLableText);
      groupNewRadioWrap.appendChild(groupNewLable);
      groupNewInputWrap.appendChild(groupNewInput);
      groupNewRandomNameButtonWrap.appendChild(groupNewRandomNameButton);
      groupNewFormIndent.appendChild(groupNewInputWrap);
      groupNewFormIndent.appendChild(groupNewRandomNameButtonWrap);
      fieldset.appendChild(groupNewRadioWrap);
      fieldset.appendChild(groupNewFormIndent);
      fieldset.appendChild(helper.node("hr"));

      displayLetterRadioWrap.appendChild(displayLetterRadio);
      displayLetterLable.appendChild(displayLetterLableIcon);
      displayLetterLable.appendChild(displayLetterLableText);
      displayLetterRadioWrap.appendChild(displayLetterLable);
      fieldset.appendChild(displayLetterRadioWrap);
      displayLetterInputWrap.appendChild(displayLetterInput);
      displayLetterFormIndent.appendChild(displayLetterInputWrap);
      fieldset.appendChild(displayLetterFormIndent);
      displayIconRadiotWrap.appendChild(displayIconRadio);
      displayIconLable.appendChild(displayIconLableIcon);
      displayIconLable.appendChild(displayIconLableText);
      displayIconRadiotWrap.appendChild(displayIconLable);
      fieldset.appendChild(displayIconRadiotWrap);
      displayIconFormGroupClear.appendChild(displayIconFormGroupClearIcon);
      displayIconFormGroup.appendChild(displayIconInput);
      displayIconFormGroup.appendChild(displayIconFormGroupText);
      displayIconFormGroup.appendChild(displayIconFormGroupClear);
      displayIconInputWrap.appendChild(displayIconFormGroup);
      displayIconFormIndent.appendChild(displayIconInputWrap);
      displayIconFormIndent.appendChild(displayIconHelper);
      fieldset.appendChild(displayIconFormIndent);
      fieldset.appendChild(helper.node("hr"));
      nameInputWrap.appendChild(nameLabel);
      nameInputWrap.appendChild(nameInput);
      fieldset.appendChild(nameInputWrap);
      urlInputWrap.appendChild(urlLabel);
      urlInputWrap.appendChild(urlInput);
      fieldset.appendChild(urlInputWrap);
      fieldset.appendChild(urlInputHelper);
      fieldset.appendChild(helper.node("hr"));
      fieldset.appendChild(accentLabel);
      accentGlobalRadioWrap.appendChild(accentGlobalRadio);
      accentGlobalLabel.appendChild(accentGlobalLabelIcon);
      accentGlobalLabel.appendChild(accentGlobalLabelText);
      accentGlobalRadioWrap.appendChild(accentGlobalLabel);
      fieldset.appendChild(accentGlobalRadioWrap);
      accentCustomInputWrap.appendChild(accentCustomRadio);
      accentCustomLabel.appendChild(accentCustomLabelIcon);
      accentCustomLabel.appendChild(accentCustomLabelText);
      accentCustomInputWrap.appendChild(accentCustomLabel);
      fieldset.appendChild(accentCustomInputWrap);
      accentColorFormGroup.appendChild(accentColorPicker);
      accentColorFormGroup.appendChild(accentColorHex);
      accentColorInputWrap.appendChild(accentColorFormGroup);
      accentColorFormIndent.appendChild(accentColorInputWrap);
      accentColorFormIndent.appendChild(accentColorInputHelper);
      fieldset.appendChild(accentColorFormIndent);
      form.appendChild(fieldset);

      var makeGroupOptions = function() {
        if (bookmarks.get().length > 0) {
          bookmarks.get().forEach(function(arrayItem, index) {
            groupExistingGroup.appendChild(helper.node("option:" + arrayItem.name + "|value:" + arrayItem.name));
          });
        } else {
          groupNewRadio.checked = true;
          groupExistingRadio.setAttribute("disabled", "");
          groupExistingGroup.setAttribute("disabled", "");
          helper.addClass(groupExistingPositionLabel, "disabled");
          groupExistingPosition.setAttribute("disabled", "");
          groupNewInput.removeAttribute("disabled");
          groupNewRandomNameButton.removeAttribute("disabled");
          stagedLink.position.group.new = true;
        };
      };

      var makePostionOptions = function() {
        if (bookmarks.get().length > 0) {
          while (groupExistingPosition.lastChild) {
            groupExistingPosition.removeChild(groupExistingPosition.lastChild);
          };
          var optionCount = 0;
          if (bookmarks.get().length > 0) {
            if (options.useStagedLink && stagedLink.position.origin.group == stagedLink.position.destination.group) {
              optionCount = optionCount + bookmarks.get()[stagedLink.position.origin.group].items.length;
            } else {
              optionCount = optionCount + bookmarks.get()[stagedLink.position.destination.group].items.length + 1;
            };
          } else {
            optionCount = 1;
          };
          for (var i = 1; i <= optionCount; i++) {
            groupExistingPosition.appendChild(helper.node("option:" + helper.ordinalNumber(i)));
            if (optionCount == i) {
              groupExistingPosition.selectedIndex = i - 1;
            }
          };
        };
      };

      var populateForm = function() {
        groupExistingGroup.selectedIndex = stagedLink.position.origin.group;
        groupExistingPosition.selectedIndex = stagedLink.position.origin.item;
        if (stagedLink.link.display == "letter") {
          displayLetterInput.removeAttribute("disabled");
          displayIconInput.setAttribute("disabled", "");
          helper.addClass(displayIconFormGroupText, "disabled");
          displayIconInput.setAttribute("disabled", "");
          helper.addClass(displayIconHelper, "disabled");
          displayIconFormGroupClear.setAttribute("disabled", "");
          displayIconFormGroupText.tabIndex = -1;
        } else if (stagedLink.link.display == "icon") {
          displayLetterInput.setAttribute("disabled", "");
          displayIconInput.removeAttribute("disabled");
          helper.removeClass(displayIconFormGroupText, "disabled");
          displayIconInput.removeAttribute("disabled");
          helper.removeClass(displayIconHelper, "disabled");
          displayIconFormGroupClear.removeAttribute("disabled");
          displayIconRadio.checked = true;
          displayIconFormGroupText.tabIndex = 1;
        };
        if (stagedLink.link.icon.name != null && stagedLink.link.icon.prefix != null && stagedLink.link.icon.label != null) {
          displayIconFormGroupText.appendChild(helper.node("span|class:link-form-icon " + stagedLink.link.icon.prefix + " fa-" + stagedLink.link.icon.name));
        };
        displayLetterInput.value = stagedLink.link.letter;
        displayIconInput.value = stagedLink.link.icon.label;
        nameInput.value = stagedLink.link.name;
        urlInput.value = stagedLink.link.url;
        if (stagedLink.link.accent.override) {
          accentGlobalRadio.checked = false;
          accentCustomRadio.checked = true;
          accentColorPicker.removeAttribute("disabled");
          accentColorHex.removeAttribute("disabled");
          helper.removeClass(form.querySelector(".link-form-input-accent-helper"), "disabled");
        } else {
          accentGlobalRadio.checked = true;
          accentCustomRadio.checked = false;
          accentColorPicker.setAttribute("disabled", "");
          accentColorHex.setAttribute("disabled", "");
          helper.addClass(form.querySelector(".link-form-input-accent-helper"), "disabled");
        };
        if (stagedLink.link.accent.color.r != null && stagedLink.link.accent.color.g != null && stagedLink.link.accent.color.b != null) {
          accentColorPicker.value = helper.rgbToHex(stagedLink.link.accent.color);
          accentColorHex.value = helper.rgbToHex(stagedLink.link.accent.color);
        };
      };

      makeGroupOptions();
      makePostionOptions();
      if (options.useStagedLink) {
        populateForm();
      };

      form.addEventListener("keydown", function(event) {
        if (event.keyCode == 13) {
          event.preventDefault();
          return false;
        };
      }, false);
      groupExistingRadio.addEventListener("change", function(event) {
        stagedLink.position.destination.group = groupExistingGroup.selectedIndex;
        stagedLink.position.group.new = false;
        groupExistingGroup.removeAttribute("disabled");
        groupExistingPosition.removeAttribute("disabled");
        helper.removeClass(groupExistingPositionLabel, "disabled");
        groupNewInput.setAttribute("disabled", "");
        groupNewRandomNameButton.setAttribute("disabled", "");
      }, false);
      groupExistingGroup.addEventListener("change", function(event) {
        stagedLink.position.destination.group = this.selectedIndex;
        makePostionOptions();
        stagedLink.position.destination.item = groupExistingPosition.selectedIndex;
      }, false);
      groupExistingPosition.addEventListener("change", function(event) {
        stagedLink.position.destination.item = this.selectedIndex;
      }, false);
      groupNewRadio.addEventListener("change", function(event) {
        stagedLink.position.destination.group = bookmarks.get().length;
        stagedLink.position.group.new = true;
        groupExistingGroup.setAttribute("disabled", "");
        groupExistingPosition.setAttribute("disabled", "");
        helper.addClass(groupExistingPositionLabel, "disabled");
        groupNewInput.removeAttribute("disabled");
        groupNewRandomNameButton.removeAttribute("disabled");
      }, false);
      groupNewInput.addEventListener("input", function(event) {
        stagedLink.position.group.name = this.value;
      }, false);
      groupNewRandomNameButton.addEventListener("click", function(event) {
        var randomName = helper.randomString({
          mix: true
        });
        stagedLink.position.group.name = randomName;
        groupNewInput.value = randomName;
      }, false);
      displayLetterRadio.addEventListener("change", function(event) {
        stagedLink.link.display = this.value;
      }, false);
      displayIconRadio.addEventListener("change", function(event) {
        stagedLink.link.display = this.value;
      }, false);
      displayLetterInput.addEventListener("input", function(event) {
        stagedLink.link.letter = this.value;
      }, false);
      nameInput.addEventListener("input", function(event) {
        stagedLink.link.name = this.value;
      }, false);
      urlInput.addEventListener("input", function(event) {
        stagedLink.link.url = this.value;
      }, false);
      accentGlobalRadio.addEventListener("change", function() {
        stagedLink.link.accent.override = false;
        accentColorPicker.setAttribute("disabled", "");
        accentColorHex.setAttribute("disabled", "");
        helper.addClass(accentColorInputHelper, "disabled");
      }, false);
      accentCustomRadio.addEventListener("change", function() {
        stagedLink.link.accent.override = true;
        stagedLink.link.accent.color = helper.hexToRgb(accentColorPicker.value);
        accentColorPicker.removeAttribute("disabled");
        accentColorHex.removeAttribute("disabled");
        helper.removeClass(accentColorInputHelper, "disabled");
      }, false);
      accentColorPicker.addEventListener("change", function() {
        if (helper.isHexNumber(this.value)) {
          stagedLink.link.accent.color = helper.hexToRgb(this.value);
          accentColorHex.value = this.value;
        };
      }, false);
      accentColorHex.addEventListener("input", function() {
        if (helper.isHexNumber(this.value)) {
          stagedLink.link.accent.color = helper.hexToRgb(this.value);
          accentColorPicker.value = this.value;
        };
      }, false);
      displayIconFormGroupClear.addEventListener("click", function(event) {
        stagedLink.link.icon.name = null;
        stagedLink.link.icon.prefix = null;
        stagedLink.link.icon.label = null;
        var existingIcon = helper.e(".link-form-icon");
        if (existingIcon) {
          existingIcon.remove();
        };
        displayIconInput.value = "";
      }, false);
      displayLetterRadio.addEventListener("change", function(event) {
        displayLetterInput.removeAttribute("disabled");
        displayIconInput.setAttribute("disabled", "");
        helper.addClass(displayIconFormGroupText, "disabled");
        helper.addClass(displayIconHelper, "disabled");
        displayIconFormGroupClear.setAttribute("disabled", "");
        displayIconFormGroupText.tabIndex = -1;
      }, false);
      displayIconRadio.addEventListener("change", function(event) {
        displayLetterInput.setAttribute("disabled", "");
        displayIconInput.removeAttribute("disabled");
        helper.removeClass(displayIconFormGroupText, "disabled");
        helper.removeClass(displayIconHelper, "disabled");
        displayIconFormGroupClear.removeAttribute("disabled");
        displayIconFormGroupText.tabIndex = 1;
      }, false);
      autoSuggest.bind.input({
        input: displayIconInput,
        type: "fontawesomeIcon",
        postFocus: displayIconFormGroupText
      });
      return form;
    },
    display: {
      letter: function() {
        var html = helper.e("html");
        html.style.setProperty("--link-item-display-letter-size", state.get().link.item.display.letcon.letter.size + "em");
      },
      icon: function() {
        var html = helper.e("html");
        html.style.setProperty("--link-item-display-icon-size", state.get().link.item.display.letcon.icon.size + "em");
      }
    },
    name: function() {
      var html = helper.e("html");
      html.style.setProperty("--link-item-display-name-size", state.get().link.item.display.name.size + "em");
    },
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--link-item-size", state.get().link.item.size + "em");
    },
    tabindex: function() {
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
    },
    border: function() {
      var html = helper.e("html");
      html.style.setProperty("--link-item-border", state.get().link.item.border);
    },
    rotate: function() {
      var html = helper.e("html");
      html.style.setProperty("--link-item-display-rotate", state.get().link.item.display.rotate + "deg");
    },
    translate: {
      x: function() {
        var html = helper.e("html");
        html.style.setProperty("--link-item-display-translate-x", state.get().link.item.display.translate.x + "em");
      },
      y: function() {
        var html = helper.e("html");
        html.style.setProperty("--link-item-display-translate-y", state.get().link.item.display.translate.y + "em");
      }
    }
  };

  render.all = function() {
    var linkSection = helper.e(".link");
    var bookmarksToRender = false;
    if (state.get().search) {
      bookmarksToRender = search.get();
    } else {
      bookmarksToRender = bookmarks.get();
    };
    var make = {
      bookmarks: function(data) {
        data.forEach(function(arrayItem, index) {
          stagedGroup.position.origin = index;
          stagedGroup.position.destination = index;
          stagedGroup.position.origin = index;
          stagedGroup.group = JSON.parse(JSON.stringify(arrayItem));
          stagedLink.position.origin.group = index;
          stagedLink.position.destination.group = index;
          group = render.group.area();
          if (arrayItem.items.length > 0) {
            arrayItem.items.forEach(function(arrayItem, index) {
              stagedLink.link = JSON.parse(JSON.stringify(arrayItem));
              stagedLink.position.origin.item = index;
              stagedLink.position.destination.item = index;
              stagedLink.position.group.new = null;
              stagedLink.position.group.name = null;
              group.querySelector(".group-body").appendChild(render.item.link());
            });
          } else {
            group.querySelector(".group-body").appendChild(render.empty.item(stagedGroup.position.destination));
          };
          linkSection.appendChild(group);
          stagedGroup.reset();
          stagedLink.reset();
        });
      },
      empty: {
        search: function() {
          linkSection.appendChild(render.empty.search());
        },
        bookmarks: function() {
          linkSection.appendChild(render.empty.group());
        }
      }
    };
    // if searching
    if (state.get().search) {
      // if bookmarks exist to be searched
      if (bookmarksToRender.total > 0) {
        make.bookmarks(bookmarksToRender.matching);
      } else {
        make.empty.search();
      };
    } else {
      // if bookmarks exist
      if (bookmarksToRender.length > 0) {
        make.bookmarks(bookmarksToRender);
      } else {
        make.empty.bookmarks();
      };
    };
  };

  render.empty = {
    group: function() {
      var group = helper.node("div|class:group");
      var groupBody = helper.node("div|class:group-body");
      var linkEmpty = helper.node("div|class:link-empty link-item");
      var paraWrap = helper.node("div|class:p-wrap");
      var para = helper.node("p:No Groups or Bookmarks|class:pb-0");
      var buttonWrap = helper.node("div|class:button-wrap form-inline mb-0 mr-0");
      var addButton = helper.node("button:Add a Bookmark|class:button mb-0,type:button,tabindex:1");
      buttonWrap.appendChild(addButton);
      paraWrap.appendChild(para);
      linkEmpty.appendChild(paraWrap);
      linkEmpty.appendChild(buttonWrap);
      groupBody.appendChild(linkEmpty);
      group.appendChild(groupBody);
      addButton.addEventListener("click", function(event) {
        link.add.item.open();
      }, false);
      return group;
    },
    item: function(groupIndex) {
      var linkEmpty = helper.node("div|class:link-empty link-item");
      var paraWrap = helper.node("div|class:p-wrap");
      var para = helper.node("p:Empty Group|class:pb-0");
      var buttonWrap = helper.node("div|class:button-wrap form-inline mb-0 mr-0");
      var addButton = helper.node("button:Add a Bookmark|class:button mb-0,type:button,tabindex:1");
      buttonWrap.appendChild(addButton);
      paraWrap.appendChild(para);
      linkEmpty.appendChild(paraWrap);
      linkEmpty.appendChild(buttonWrap);
      addButton.addEventListener("click", function(event) {
        link.add.item.open();
        link.add.item.selectGroup(groupIndex);
      }, false);
      return linkEmpty;
    },
    search: function() {
      var group = helper.node("div|class:group");
      var groupBody = helper.node("div|class:group-body");
      var linkEmpty = helper.node("div|class:link-empty link-item");
      var paraWrap1 = helper.node("div|class:p-wrap");
      var paraWrap2 = helper.node("div|class:p-wrap");
      var para1 = helper.node("p:No bookmarks matching \"" + helper.e(".header-search-input").value + "\" found.|class:mb-0");
      var para2 = helper.node("p:\"Enter\" to Search " + state.get().header.search.engine[state.get().header.search.engine.selected].name + ".|class:small muted mb-0");
      paraWrap1.appendChild(para1);
      paraWrap2.appendChild(para2);
      linkEmpty.appendChild(paraWrap1);
      linkEmpty.appendChild(paraWrap2);
      groupBody.appendChild(linkEmpty);
      group.appendChild(groupBody);
      return group;
    }
  };

  render.focus = {
    group: {
      previous: {
        remove: function(copyStagedGroup) {
          var allGroup = helper.eA(".group");
          var target = copyStagedGroup.position.origin - 1;
          if (target < 0) {
            target = 0;
          };
          if (allGroup.length > 0) {
            if (allGroup[target].querySelector(".group-control-item-remove")) {
              allGroup[target].querySelector(".group-control-item-remove").focus();
            };
          } else {
            helper.e("body").focus();
          };
        },
        up: function(copyStagedGroup) {
          var allGroup = helper.eA(".group");
          var target = copyStagedGroup.position.origin - 1;
          if (target < 0) {
            target = 0;
          };
          if (allGroup.length > 0) {
            if (allGroup[target].querySelector(".group-control-item-up")) {
              allGroup[target].querySelector(".group-control-item-up").focus();
            };
          } else {
            helper.e("body").focus();
          };
        }
      },
      next: {
        down: function(copyStagedGroup) {
          var allGroup = helper.eA(".group");
          var target = copyStagedGroup.position.origin + 1;
          if (target > allGroup.length - 1) {
            target = allGroup.length - 1;
          };
          if (allGroup.length > 0) {
            if (allGroup[target].querySelector(".group-control-item-down")) {
              allGroup[target].querySelector(".group-control-item-down").focus();
            };
          } else {
            helper.e("body").focus();
          };
        }
      },
      current: {
        edit: function(copyStagedGroup) {
          var allGroup = helper.eA(".group");
          var target = copyStagedGroup.position.destination;
          if (allGroup.length > 0) {
            if (allGroup[target].querySelector(".group-control-item-edit")) {
              allGroup[target].querySelector(".group-control-item-edit").focus();
            };
          } else {
            helper.e("body").focus();
          };
        }
      }
    },
    item: {
      previous: {
        remove: function(copyStagedLink) {
          var allGroup = helper.eA(".group");
          var allLinkItem = allGroup[copyStagedLink.position.origin.group].querySelectorAll(".link-item");
          var target = copyStagedLink.position.origin.item - 1;
          if (target < 0) {
            target = 0;
          };
          if (allLinkItem.length > 0) {
            if (allLinkItem[target].querySelector(".link-control-item-remove")) {
              allLinkItem[target].querySelector(".link-control-item-remove").focus();
            };
          } else {
            helper.e("body").focus();
          };
        },
        left: function(copyStagedLink) {
          var allGroup = helper.eA(".group");
          var allLinkItem = allGroup[copyStagedLink.position.origin.group].querySelectorAll(".link-item");
          var target = copyStagedLink.position.origin.item - 1;
          if (target < 0) {
            target = 0;
          };
          if (allLinkItem.length > 0) {
            if (allLinkItem[target].querySelector(".link-control-item-left")) {
              allLinkItem[target].querySelector(".link-control-item-left").focus();
            };
          } else {
            helper.e("body").focus();
          };
        }
      },
      next: {
        right: function(copyStagedLink) {
          var allGroup = helper.eA(".group");
          var allLinkItem = allGroup[copyStagedLink.position.origin.group].querySelectorAll(".link-item");
          var target = copyStagedLink.position.origin.item + 1;
          if (target > allLinkItem.length - 1) {
            target = allLinkItem.length - 1;
          };
          if (allLinkItem.length > 0) {
            if (allLinkItem[target].querySelector(".link-control-item-right")) {
              allLinkItem[target].querySelector(".link-control-item-right").focus();
            };
          } else {
            helper.e("body").focus();
          };
        }
      },
      current: {
        edit: function(copyStagedLink) {
          var allGroup = helper.eA(".group");
          var allLinkItem = allGroup[copyStagedLink.position.destination.group].querySelectorAll(".link-item");
          var target = copyStagedLink.position.destination.item;
          if (copyStagedLink.position.group.new) {
            allLinkItem[0].querySelector(".link-control-item-edit").focus();
          } else {
            if (allLinkItem.length > 0) {
              allLinkItem[target].querySelector(".link-control-item-edit").focus();
            } else {
              helper.e("body").focus();
            };
          };
        }
      }
    }
  };

  render.autoSuggestIconAction = function(autoSuggestData) {
    stagedLink.link.icon.label = autoSuggestData.label;
    stagedLink.link.icon.name = autoSuggestData.name;
    if (autoSuggestData.styles.includes("solid")) {
      stagedLink.link.icon.prefix = "fas";
    } else if (autoSuggestData.styles.includes("brands")) {
      stagedLink.link.icon.prefix = "fab";
    };
    var existingIcon = helper.e(".link-form-icon");
    if (existingIcon) {
      existingIcon.remove();
    };
    helper.e(".link-form-input-icon").value = autoSuggestData.label;
    helper.e(".link-form-text-icon").appendChild(helper.node("span|class:link-form-icon " + stagedLink.link.icon.prefix + " fa-" + stagedLink.link.icon.name));
    helper.e(".link-form-text-icon").focus();
  };

  render.add = {
    item: {
      open: function() {
        mod.add.item.open();
        stagedLink.init();
        var successAction = function() {
          stagedLink.link.timeStamp = new Date().getTime();
          bookmarks.mod.add.link(JSON.parse(JSON.stringify(stagedLink)));
          data.save();
          mod.add.item.close();
          groupAndItems();
          control.render.dependents();
          control.render.class();
          shade.close();
          pagelock.unlock();
        };
        var cancelAction = function() {
          mod.add.item.close();
          stagedLink.reset();
          autoSuggest.close();
          shade.close();
          pagelock.unlock();
        };
        modal.open({
          heading: "Add a new Bookmark",
          successAction: successAction,
          cancelAction: cancelAction,
          actionText: "Add",
          size: "small",
          content: render.item.form()
        });
        shade.open({
          action: function() {
            mod.add.item.close();
            stagedLink.reset();
            autoSuggest.close();
            modal.close();
            pagelock.unlock();
          }
        });
        pagelock.lock();
        stagedLink.position.destination.item = helper.e(".link-form-position").selectedIndex;
      },
      close: function() {
        mod.add.item.close();
        stagedLink.reset();
        modal.close();
        pagelock.unlock();
      },
      selectGroup: function(groupIndex) {
        stagedLink.position.destination.group = groupIndex;
        stagedLink.position.destination.item = 0;
        helper.e(".link-form-select-group").selectedIndex = stagedLink.position.destination.group;
        var linkFormPosition = helper.e(".link-form-position");
        while (linkFormPosition.lastChild) {
          linkFormPosition.removeChild(linkFormPosition.lastChild);
        };
        linkFormPosition.appendChild(helper.node("option:" + helper.ordinalNumber(1)));
      }
    },
    group: {
      open: function() {
        mod.add.group.open();
        stagedGroup.init();
        var successAction = function() {
          bookmarks.mod.add.group(JSON.parse(JSON.stringify(stagedGroup)));
          data.save();
          mod.add.group.close();
          groupAndItems();
          shade.close();
          pagelock.unlock();
        };
        var cancelAction = function() {
          mod.add.group.close();
          stagedGroup.reset();
          autoSuggest.close();
          shade.close();
          pagelock.unlock();
        };
        modal.open({
          heading: "Add a new Group",
          successAction: successAction,
          cancelAction: cancelAction,
          actionText: "Add",
          size: "small",
          content: render.group.form({
            new: true
          })
        });
        shade.open({
          action: function() {
            mod.add.group.close();
            stagedGroup.reset();
            autoSuggest.close();
            modal.close();
            pagelock.unlock();
          }
        });
        pagelock.lock();
        stagedGroup.position.destination = helper.e(".group-form-position").selectedIndex;
      },
      close: function() {
        mod.add.group.close();
        stagedGroup.reset();
        modal.close();
        pagelock.unlock();
      }
    }
  };

  render.edit = {
    item: function(copyStagedLink) {
      stagedLink.link = JSON.parse(JSON.stringify(copyStagedLink.link));
      stagedLink.position = JSON.parse(JSON.stringify(copyStagedLink.position));
      var form = render.item.form({
        useStagedLink: true
      });
      var heading;
      if (stagedLink.link.name != null && stagedLink.link.name != "") {
        heading = "Edit " + stagedLink.link.name;
      } else {
        heading = "Edit unnamed bookmark";
      };
      var successAction = function() {
        var copyStagedLink = JSON.parse(JSON.stringify(stagedLink));
        bookmarks.mod.edit.link(copyStagedLink);
        data.save();
        groupAndItems();
        render.focus.item.current.edit(copyStagedLink);
        autoSuggest.close();
        shade.close();
        pagelock.unlock();
      };
      var cancelAction = function() {
        stagedLink.reset();
        autoSuggest.close();
        pagelock.unlock();
        shade.close();
      };
      modal.open({
        heading: heading,
        successAction: successAction,
        cancelAction: cancelAction,
        actionText: "Save",
        size: "small",
        content: form
      });
      shade.open({
        action: function() {
          stagedLink.reset();
          autoSuggest.close();
          pagelock.unlock();
          modal.close();
        }
      });
      pagelock.lock();
    },
    group: function(copyStagedGroup) {
      stagedGroup.group = JSON.parse(JSON.stringify(copyStagedGroup.group));
      stagedGroup.position = JSON.parse(JSON.stringify(copyStagedGroup.position));
      var form = render.group.form({
        useStagedGroup: true
      });
      var heading = "Edit " + stagedGroup.group.name;
      var successAction = function() {
        var copyStagedGroup = JSON.parse(JSON.stringify(stagedGroup));
        bookmarks.mod.edit.group(copyStagedGroup);
        data.save();
        groupAndItems();
        render.focus.group.current.edit(copyStagedGroup);
        autoSuggest.close();
        shade.close();
        pagelock.unlock();
      };
      var cancelAction = function() {
        stagedGroup.reset();
        autoSuggest.close();
        pagelock.unlock();
        shade.close();
      };
      modal.open({
        heading: heading,
        successAction: successAction,
        cancelAction: cancelAction,
        actionText: "Save",
        size: "small",
        content: form
      });
      shade.open({
        action: function() {
          stagedGroup.reset();
          autoSuggest.close();
          pagelock.unlock();
          modal.close();
        }
      });
      pagelock.lock();
    }
  };

  render.remove = {
    item: function(copyStagedLink) {
      stagedLink.link = JSON.parse(JSON.stringify(copyStagedLink.link));
      stagedLink.position = JSON.parse(JSON.stringify(copyStagedLink.position));
      var heading;
      if (stagedLink.link.name != null && stagedLink.link.name != "") {
        heading = "Remove " + stagedLink.link.name;
      } else {
        heading = "Remove unnamed bookmark";
      };
      var successAction = function() {
        var copyStagedLink = JSON.parse(JSON.stringify(stagedLink));
        bookmarks.remove.link(copyStagedLink);
        data.save();
        mod.edit.check();
        header.render.button.edit();
        groupAndItems();
        render.focus.item.previous.remove(copyStagedLink);
        control.render.dependents();
        control.render.class();
        shade.close();
        pagelock.unlock();
      };
      var cancelAction = function() {
        stagedLink.reset();
        shade.close();
        pagelock.unlock();
      };
      modal.open({
        heading: heading,
        content: "Are you sure you want to remove this Bookmark? This can not be undone.",
        successAction: successAction,
        cancelAction: cancelAction,
        actionText: "Remove",
        size: "small"
      });
      shade.open({
        action: function() {
          stagedLink.reset();
          autoSuggest.close();
          pagelock.unlock();
          modal.close();
        }
      });
      pagelock.lock();
    },
    group: function(copyStagedGroup) {
      stagedGroup.group = JSON.parse(JSON.stringify(copyStagedGroup.group));
      stagedGroup.position = JSON.parse(JSON.stringify(copyStagedGroup.position));
      var heading;
      if (stagedGroup.group.name != null && stagedGroup.group.name != "") {
        heading = "Remove " + stagedGroup.group.name;
      } else {
        heading = "Remove unnamed group";
      };
      var successAction = function() {
        var copyStagedGroup = JSON.parse(JSON.stringify(stagedGroup));
        bookmarks.remove.group(copyStagedGroup);
        data.save();
        mod.edit.check();
        header.render.button.edit();
        groupAndItems();
        render.focus.group.previous.remove(copyStagedGroup);
        control.render.dependents();
        control.render.class();
        shade.close();
        pagelock.unlock();
      };
      var cancelAction = function() {
        stagedGroup.reset();
        shade.close();
        pagelock.unlock();
      };
      modal.open({
        heading: heading,
        content: "Are you sure you want to remove this Group and all the Bookmarks within? This can not be undone.",
        successAction: successAction,
        cancelAction: cancelAction,
        actionText: "Remove",
        size: "small"
      });
      shade.open({
        action: function() {
          stagedGroup.reset();
          autoSuggest.close();
          pagelock.unlock();
          modal.close();
        }
      });
      pagelock.lock();
    }
  };

  var add = {
    item: {
      open: function() {
        render.add.item.open();
      },
      close: function() {
        render.add.item.close();
      },
      selectGroup: function(groupIndex) {
        render.add.item.selectGroup(groupIndex);
      }
    },
    group: {
      open: function() {
        render.add.group.open();
      },
      close: function() {
        render.add.group.close();
      }
    }
  };

  var edit = function() {
    mod.edit.toggle();
  };

  var tabindex = function() {
    render.group.tabindex();
    render.item.tabindex();
  };

  var groupAndItems = function() {
    render.clear.item();
    render.clear.group();
    render.all();
    bind.sort.group();
    bind.sort.item();
    render.group.tabindex();
    render.item.tabindex();
  };

  var init = function() {
    mod.add.item.close();
    mod.add.group.close();
    groupAndItems();
    render.group.size();
    render.group.border();
    render.item.size();
    render.item.display.letter();
    render.item.display.icon();
    render.item.name();
    render.item.border();
    render.item.rotate();
    render.item.translate.x();
    render.item.translate.y();
    render.area.width();
  };

  // exposed methods
  return {
    init: init,
    mod: mod,
    render: render,
    add: add,
    edit: edit,
    tabindex: tabindex,
    groupAndItems: groupAndItems,
    stagedLink: stagedLink,
    stagedGroup: stagedGroup
  };

})();
