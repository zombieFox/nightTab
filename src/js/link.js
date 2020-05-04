var link = (function() {

  var stagedGroup = {
    position: {
      origin: null,
      destination: null
    },
    group: {
      name: {
        text: null,
        show: null
      },
      openAll: {
        show: null
      },
      items: null
    }
  };

  stagedGroup.init = function() {
    stagedGroup.group.items = [];
    stagedGroup.group.name.show = true;
    stagedGroup.group.openAll.show = true;
  };

  stagedGroup.reset = function() {
    stagedGroup.position.origin = null;
    stagedGroup.position.destination = null;
    stagedGroup.group.name.text = null;
    stagedGroup.group.name.show = null;
    stagedGroup.group.openAll.show = null;
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
        name: {
          text: null,
          show: null
        },
        openAll: {
          show: null
        }
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
    },
    searchMatch: null
  };

  stagedLink.init = function() {
    stagedLink.position.origin.group = 0;
    stagedLink.position.origin.item = 0;
    stagedLink.position.destination.group = 0;
    stagedLink.position.destination.item = 0;
    stagedLink.position.group.new = false;
    stagedLink.position.group.name.show = false;
    stagedLink.position.group.openAll.show = false;
    stagedLink.link.display = "letter";
    stagedLink.link.accent.override = false;
    stagedLink.link.searchMatch = false;
  };

  stagedLink.reset = function() {
    stagedLink.position.origin.group = null;
    stagedLink.position.origin.item = null;
    stagedLink.position.destination.group = null;
    stagedLink.position.destination.item = null;
    stagedLink.position.group.new = null;
    stagedLink.position.group.name.text = null;
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
    stagedLink.link.searchMatch = null;
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
          var rgb = helper.convertColor.hsl.rgb({
            h: degree,
            s: 100,
            l: 50
          });
          arrayItem.accent.color = {
            r: parseInt(rgb.r, 10),
            g: parseInt(rgb.g, 10),
            b: parseInt(rgb.b, 10)
          };
          degree = degree + units;
        });
      });
    }
  };

  mod.name = {
    show: function() {
      bookmarks.get().forEach(function(arrayItem, index) {
        arrayItem.name.show = true;
      });
    },
    hide: function() {
      bookmarks.get().forEach(function(arrayItem, index) {
        arrayItem.name.show = false;
      });
    }
  };

  mod.openall = {
    show: function() {
      bookmarks.get().forEach(function(arrayItem, index) {
        arrayItem.openAll.show = true;
      });
    },
    hide: function() {
      bookmarks.get().forEach(function(arrayItem, index) {
        arrayItem.openAll.show = false;
      });
    }
  };

  mod.edit = {
    mode: {
      open: function() {
        helper.setObject({
          object: state.get.current(),
          path: "edit",
          newValue: true
        });
      },
      close: function() {
        helper.setObject({
          object: state.get.current(),
          path: "edit",
          newValue: false
        });
      }
    },
    item: {
      open: function() {
        helper.setObject({
          object: state.get.current(),
          path: "link.edit",
          newValue: true
        });
      },
      close: function() {
        helper.setObject({
          object: state.get.current(),
          path: "link.edit",
          newValue: false
        });
      }
    },
    group: {
      open: function() {
        helper.setObject({
          object: state.get.current(),
          path: "group.edit",
          newValue: true
        });
      },
      close: function() {
        helper.setObject({
          object: state.get.current(),
          path: "group.edit",
          newValue: false
        });
      }
    }
  };

  mod.add = {
    item: {
      open: function() {
        helper.setObject({
          object: state.get.current(),
          path: "link.add",
          newValue: true
        });
      },
      close: function() {
        helper.setObject({
          object: state.get.current(),
          path: "link.add",
          newValue: false
        });
      }
    },
    group: {
      open: function() {
        helper.setObject({
          object: state.get.current(),
          path: "group.add",
          newValue: true
        });
      },
      close: function() {
        helper.setObject({
          object: state.get.current(),
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
          helper.eA(".link-area").forEach(function(arrayItem, index) {
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
      sortable(".link-area", {
        items: ".group",
        handle: ".group-control-item-handle",
        orientation: "vertical",
        placeholder: helper.node("div|class:link-sort-placeholder"),
        forcePlaceholderSize: true
      });
      bind.sort.update.remove.group();
      helper.eA(".link-area").forEach(function(arrayItem, index) {
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
        if (!state.get.current().search) {
          render.focus.group.previous.up(copyStagedGroup);
        };
      },
      down: function(copyStagedGroup) {
        stagedGroup.group = JSON.parse(JSON.stringify(copyStagedGroup.group));
        stagedGroup.position = JSON.parse(JSON.stringify(copyStagedGroup.position));
        stagedGroup.position.destination = stagedGroup.position.destination + 1;
        bookmarks.mod.move.group(stagedGroup);
        data.save();
        groupAndItems();
        if (!state.get.current().search) {
          render.focus.group.next.down(copyStagedGroup);
        };
      }
    },
    item: {
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
        if (!state.get.current().search) {
          render.focus.item.previous.left(copyStagedLink);
        };
      },
      right: function(copyStagedLink) {
        stagedLink.link = JSON.parse(JSON.stringify(copyStagedLink.link));
        stagedLink.position = JSON.parse(JSON.stringify(copyStagedLink.position));
        stagedLink.position.destination.item = stagedLink.position.destination.item + 1;
        bookmarks.mod.move.link(JSON.parse(JSON.stringify(stagedLink)));
        data.save();
        groupAndItems();
        if (!state.get.current().search) {
          render.focus.item.next.right(copyStagedLink);
        };
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
      html.style.setProperty("--link-area-width", state.get.current().link.area.width + "%");
    }
  };

  render.group = {
    area: function() {
      var copyStagedGroup = JSON.parse(JSON.stringify(stagedGroup));

      var group = helper.node("div|class:group");

      var groupHeader = helper.node("div|class:group-header");
      var groupHeaderItemControl = helper.node("div|class:group-header-item group-header-item-control");
      var groupHeaderItemName = helper.node("div|class:group-header-item group-header-item-name");
      var groupHeaderItemOpenall = helper.node("div|class:group-header-item group-header-item-openall");

      var groupBody = helper.node("div|class:group-body");

      var groupName = helper.node("div|class:group-name");
      var groupNameText = helper.makeNode({
        tag: "h1",
        text: stagedGroup.group.name.text,
        attr: [{
          key: "class",
          value: "group-name-text"
        }]
      });
      groupName.appendChild(groupNameText);
      groupHeaderItemName.appendChild(groupName);

      var groupOpenall = helper.node("div|class:group-openall form-group");
      var groupOpenallItem = helper.node("button|class:button button-line group-openall-item,tabindex:1,title:Open all Bookmarks in this Group");
      var groupOpenallItemText = helper.node("span:Open all|class:button-text");
      groupOpenallItem.appendChild(groupOpenallItemText);
      groupOpenall.appendChild(groupOpenallItem);

      if (state.get.current().group.openAll.style == "clear") {
        helper.removeClass(groupOpenallItem, "button-line");
        helper.addClass(groupOpenallItem, "button-link");
      };

      groupHeaderItemOpenall.appendChild(groupOpenall);

      var groupControl = helper.node("div|class:group-control form-group");

      var groupControlItemUp = helper.node("button|class:button button-line group-control-item group-control-item-up,tabindex:-1,title:Move this group up");
      var groupControlItemUpIcon = helper.node("span|class:icon-arrow-up");
      var groupControlItemUpBaselineAlignmentCharacter = helper.node("span:-|class:baseline-alignment-icon-character,aria-hidden:true");
      groupControlItemUp.appendChild(groupControlItemUpBaselineAlignmentCharacter);
      groupControlItemUp.appendChild(groupControlItemUpIcon);
      groupControl.appendChild(groupControlItemUp);

      var groupControlItemHandle = helper.node("div|class:button button-line group-control-item group-control-item-handle,tabindex:-1,title:Drag group to reorder");
      var groupControlItemHandleIcon = helper.node("span|class:icon-reorder");
      var groupControlItemHandleBaselineAlignmentCharacter = helper.node("span:-|class:baseline-alignment-icon-character,aria-hidden:true");
      groupControlItemHandle.appendChild(groupControlItemHandleBaselineAlignmentCharacter);
      groupControlItemHandle.appendChild(groupControlItemHandleIcon);
      groupControl.appendChild(groupControlItemHandle);

      var groupControlItemDown = helper.node("button|class:button button-line group-control-item group-control-item-down,tabindex:-1,title:Move this group down");
      var groupControlItemDownIcon = helper.node("span|class:icon-arrow-down");
      var groupControlItemDownBaselineAlignmentCharacter = helper.node("span:-|class:baseline-alignment-icon-character,aria-hidden:true");
      groupControlItemDown.appendChild(groupControlItemDownBaselineAlignmentCharacter);
      groupControlItemDown.appendChild(groupControlItemDownIcon);
      groupControl.appendChild(groupControlItemDown);

      var groupControlItemEdit = helper.node("button|class:button button-line group-control-item group-control-item-edit,tabindex:-1,title:Edit this group");
      var groupControlItemEditIcon = helper.node("span|class:icon-edit");
      var groupControlItemEditBaselineAlignmentCharacter = helper.node("span:-|class:baseline-alignment-icon-character,aria-hidden:true");
      groupControlItemEdit.appendChild(groupControlItemEditBaselineAlignmentCharacter);
      groupControlItemEdit.appendChild(groupControlItemEditIcon);
      groupControl.appendChild(groupControlItemEdit);

      var groupControlItemRemove = helper.node("button|class:button button-line group-control-item group-control-item-remove,tabindex:-1,title:Remove this group");
      var groupControlItemRemoveIcon = helper.node("span|class:icon-close");
      var groupControlItemRemoveBaselineAlignmentCharacter = helper.node("span:-|class:baseline-alignment-icon-character,aria-hidden:true");
      groupControlItemRemove.appendChild(groupControlItemRemoveBaselineAlignmentCharacter);
      groupControlItemRemove.appendChild(groupControlItemRemoveIcon);
      groupControl.appendChild(groupControlItemRemove);

      if (state.get.current().search) {
        groupControlItemUp.disabled = true;
        helper.addClass(groupControlItemHandle, "disabled");
        groupControlItemDown.disabled = true;
      };

      groupHeaderItemControl.appendChild(groupControl);

      groupControlItemUp.addEventListener("click", function(event) {
        render.move.group.up(copyStagedGroup);
      }, false);

      groupControlItemDown.addEventListener("click", function() {
        render.move.group.down(copyStagedGroup);
      }, false);

      groupControlItemEdit.addEventListener("click", function() {
        edit.group.open(copyStagedGroup);
      }, false);

      groupControlItemRemove.addEventListener("click", function() {
        render.remove.group(copyStagedGroup);
      }, false);

      groupOpenallItem.addEventListener("click", function() {
        render.group.openall.all(copyStagedGroup);
      });

      groupHeader.appendChild(groupHeaderItemControl);
      if (stagedGroup.group.name.show && stagedGroup.group.name.text.replace(/\s/g, "") != "") {
        helper.addClass(groupHeader, "group-header-name");
        groupHeader.appendChild(groupHeaderItemName);
      };
      if (stagedGroup.group.openAll.show && stagedGroup.group.items.length > 0) {
        helper.addClass(groupHeader, "group-header-openall");
        groupHeader.appendChild(groupHeaderItemOpenall);
      };
      group.appendChild(groupHeader);
      group.appendChild(groupBody);

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

      // group name
      var groupFormInputNameShowWrap = helper.node("div|class:form-wrap");
      var groupFormInputNameShowLabel = helper.node("label|for:group-form-input-name-show");
      var groupFormInputNameShowText = helper.node("span:Show Group name");
      var groupFormInputNameShowIcon = helper.node("span|class:label-icon");
      var groupFormInputNameShowInput = helper.node("input|type:checkbox,class:group-form-input-name-show,id:group-form-input-name-show,placeholder:Example group,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false,checked");
      var groupFormInputNameIndentWrap = helper.node("div|class:form-wrap");
      var groupFormInputNameIndent = helper.node("div|class:form-indent");
      var groupFormInputNameWrap = helper.node("div|class:form-wrap");
      var groupFormInputName = helper.node("input|type:text,class:group-form-input-name,id:group-form-input-name,placeholder:Example group,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
      var groupFormRandomNameButtonWrap = helper.node("div|class:form-wrap");
      var groupFormRandomNameButton = helper.node("button:Random Group name|class:button button-line,type:button,tabindex:1");

      // open all
      var groupFormOpenAllInputWrap = helper.node("div|class:form-wrap");
      var groupFormInputOpenallLabel = helper.node("label|for:group-form-input-openall");
      var groupFormInputOpenallLabelText = helper.node("span:Show Open all");
      var groupFormInputOpenallLabelIcon = helper.node("span|class:label-icon");
      var groupFormOpenAllInput = helper.node("input|type:checkbox,class:group-form-input-openall,id:group-form-input-openall,placeholder:Example group,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false,checked");
      var groupFormOpenAllInputHelper = helper.node("div|class:form-helper");
      var groupFormOpenAllInputHelperItem = helper.node("p:Open all button will appear if there is at least one Bookmark in this Group.|class:link-form-input-icon-helper form-helper-item");

      // group position
      var groupFormPositionInputWrap = helper.node("div|class:form-wrap");
      var groupFormPositionLabel = helper.node("label:Position|for:group-form-position");
      var groupFormPositionSelect = helper.node("select|id:group-form-position,class:group-form-position,tabindex:1");

      groupFormInputNameShowLabel.appendChild(groupFormInputNameShowIcon);
      groupFormInputNameShowLabel.appendChild(groupFormInputNameShowText);
      groupFormInputNameShowWrap.appendChild(groupFormInputNameShowInput);
      groupFormInputNameShowWrap.appendChild(groupFormInputNameShowLabel);
      groupFormInputNameWrap.appendChild(groupFormInputName);
      groupFormRandomNameButtonWrap.appendChild(groupFormRandomNameButton);
      groupFormInputNameIndent.appendChild(groupFormInputNameWrap);
      groupFormInputNameIndent.appendChild(groupFormRandomNameButtonWrap);
      groupFormInputNameIndentWrap.appendChild(groupFormInputNameIndent);

      groupFormPositionInputWrap.appendChild(groupFormPositionLabel);
      groupFormPositionInputWrap.appendChild(groupFormPositionSelect);
      groupFormInputOpenallLabel.appendChild(groupFormInputOpenallLabelIcon);
      groupFormInputOpenallLabel.appendChild(groupFormInputOpenallLabelText);
      groupFormOpenAllInputWrap.appendChild(groupFormOpenAllInput);
      groupFormOpenAllInputWrap.appendChild(groupFormInputOpenallLabel);
      groupFormOpenAllInputHelper.appendChild(groupFormOpenAllInputHelperItem);

      fieldset.appendChild(groupFormInputNameShowWrap);
      fieldset.appendChild(groupFormInputNameIndentWrap);
      fieldset.appendChild(helper.node("hr"));
      fieldset.appendChild(groupFormOpenAllInputWrap);
      fieldset.appendChild(groupFormOpenAllInputHelper);
      fieldset.appendChild(helper.node("hr"));
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
        groupFormInputNameShowInput.checked = stagedGroup.group.name.show;
        groupFormPositionSelect.selectedIndex = stagedGroup.position.origin;
        groupFormInputName.value = stagedGroup.group.name.text;
        groupFormOpenAllInput.checked = stagedGroup.group.openAll.show;
        if (!stagedGroup.group.name.show) {
          groupFormInputName.setAttribute("disabled", "");
          groupFormRandomNameButton.setAttribute("disabled", "");
        };
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
      groupFormInputNameShowInput.addEventListener("change", function(event) {
        stagedGroup.group.name.show = this.checked;
        if (stagedGroup.group.name.show) {
          groupFormInputName.removeAttribute("disabled");
          groupFormRandomNameButton.removeAttribute("disabled");
        } else {
          groupFormInputName.setAttribute("disabled", "");
          groupFormRandomNameButton.setAttribute("disabled", "");
        };
      }, false);
      groupFormPositionSelect.addEventListener("change", function(event) {
        stagedGroup.position.destination = this.selectedIndex;
      }, false);
      groupFormInputName.addEventListener("input", function(event) {
        stagedGroup.group.name.text = this.value;
      }, false);
      groupFormRandomNameButton.addEventListener("click", function(event) {
        var randomName = helper.randomString({
          adjectivesCount: helper.randomNumber(1, 3)
        });
        stagedGroup.group.name.text = randomName;
        groupFormInputName.value = randomName;
      }, false);
      groupFormOpenAllInput.addEventListener("change", function(event) {
        stagedGroup.group.openAll.show = this.checked;
      }, false);

      return form;
    },
    name: {
      size: function() {
        var html = helper.e("html");
        html.style.setProperty("--group-name-size", state.get.current().group.name.size + "em");
      }
    },
    openall: {
      all: function(copyStagedGroup) {
        if (state.get.current().link.item.newTab) {
          copyStagedGroup.group.items.forEach(function(arrayItem, index) {
            chrome.tabs.create({
              url: arrayItem.url
            });
          });
        } else {
          var first = copyStagedGroup.group.items.shift();
          copyStagedGroup.group.items.forEach(function(arrayItem, index) {
            chrome.tabs.create({
              url: arrayItem.url
            });
          });
          window.location.href = first.url;
        };
      },
      size: function() {
        var html = helper.e("html");
        html.style.setProperty("--group-openall-size", state.get.current().group.openAll.size + "em");
      },
      opacity: function() {
        var html = helper.e("html");
        html.style.setProperty("--group-openall-opacity", state.get.current().group.openAll.opacity);
      }
    },
    border: function() {
      var html = helper.e("html");
      html.style.setProperty("--group-border", state.get.current().group.border);
    },
    tabindex: function() {
      var allGroupControlItem = helper.eA(".group-control-item");
      if (state.get.current().edit) {
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
          value: "--theme-accent-r: " + stagedLink.link.accent.color.r + ";" +
            "--theme-accent-g: " + stagedLink.link.accent.color.g + ";" +
            "--theme-accent-b: " + stagedLink.link.accent.color.b + ";" +
            "--theme-accent: var(--theme-accent-r), var(--theme-accent-g), var(--theme-accent-b);" +
            "--theme-accent-accessible-threshold: 0.5;" +
            "--theme-accent-accessible-r: calc(var(--theme-accent-r) * 0.50);" +
            "--theme-accent-accessible-g: calc(var(--theme-accent-g) * 0.60);" +
            "--theme-accent-accessible-b: calc(var(--theme-accent-b) * 0.20);" +
            "--theme-accent-accessible-sum: calc(var(--theme-accent-accessible-r) + var(--theme-accent-accessible-g) + var(--theme-accent-accessible-b));" +
            "--theme-accent-accessible-perceived-lightness: calc(var(--theme-accent-accessible-sum) / 255);" +
            "--theme-accent-accessible-color: 0, 0%, calc((var(--theme-accent-accessible-perceived-lightness) - var(--theme-accent-accessible-threshold)) * -10000000%);"
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
          value: stagedLink.link.url
        }, {
          key: "tabindex",
          value: 1
        }]
      };
      if (state.get.current().link.item.newTab) {
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
      var linkDisplayName = helper.node("p:" + nameText + "|class:link-display-name");

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
      linkDisplay.appendChild(linkDisplayLetcon);
      linkDisplay.appendChild(linkDisplayName);
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

      if (state.get.current().search) {
        linkLeft.disabled = true;
        helper.addClass(linkHandle, "disabled");
        linkRight.disabled = true;
      };

      var copyStagedLink = JSON.parse(JSON.stringify(stagedLink));

      linkLeft.addEventListener("click", function() {
        render.move.item.left(copyStagedLink);
      }, false);

      linkRight.addEventListener("click", function() {
        render.move.item.right(copyStagedLink);
      }, false);

      linkEdit.addEventListener("click", function() {
        edit.item.open(copyStagedLink);
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
      var groupExistingRadioWrap = helper.node("div|class:form-wrap");
      var groupExistingRadio = helper.node("input|class:link-form-input-group-existing,id:link-form-input-group-existing,type:radio,name:link-form-input-group,tabindex:1,checked,value:existing");
      var groupExistingLable = helper.node("label|for:link-form-input-group-existing");
      var groupExistingLableText = helper.node("span:Existing Group");
      var groupExistingLableIcon = helper.node("span|class:label-icon");
      var groupExistingFormIndentWrap = helper.node("div|class:form-wrap");
      var groupExistingFormIndent = helper.node("div|class:form-indent");
      var groupExistingGroupInputWrap = helper.node("div|class:form-wrap");
      var groupExistingGroup = helper.node("select|id:link-form-select-group,class:link-form-select-group,tabindex:1");
      var groupExistingPositionInputWrap = helper.node("div|class:form-wrap");
      var groupExistingPositionLabel = helper.node("label:Position|for:link-form-position");
      var groupExistingPosition = helper.node("select|id:link-form-position,class:link-form-position,tabindex:1");

      // group new
      var groupNewRadioWrap = helper.node("div|class:form-wrap");
      var groupNewRadio = helper.node("input|class:link-form-input-group-new,id:link-form-input-group-new,type:radio,name:link-form-input-group,tabindex:1,value:new");
      var groupNewLable = helper.node("label|for:link-form-input-group-new");
      var groupNewLableLableText = helper.node("span:New Group");
      var groupNewLableLableIcon = helper.node("span|class:label-icon");
      var groupNewFormIndentWrap = helper.node("div|class:form-wrap");
      var groupNewFormIndent = helper.node("div|class:form-indent");
      var groupNewInputWrap = helper.node("div|class:form-wrap");
      var groupNewInput = helper.node("input|type:text,class:link-form-input-new-group,id:link-form-input-new-group,placeholder:Example group,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false,disabled");
      var groupNewRandomNameButtonWrap = helper.node("div|class:form-wrap");
      var groupNewRandomNameButton = helper.node("button:Random Group name|class:button button-line,type:button,tabindex:1,disabled");

      // letter
      var displayLetterRadioWrap = helper.node("div|class:form-wrap");
      var displayLetterRadio = helper.node("input|class:link-form-input-display-letter,id:link-form-input-display-letter,type:radio,name:link-form-input-display,tabindex:1,checked,value:letter");
      var displayLetterLable = helper.node("label|for:link-form-input-display-letter");
      var displayLetterLableText = helper.node("span:Letters");
      var displayLetterLableIcon = helper.node("span|class:label-icon");
      var displayLetterFormIndentWrap = helper.node("div|class:form-wrap");
      var displayLetterFormIndent = helper.node("div|class:form-indent");
      var displayLetterInputWrap = helper.node("div|class:form-wrap");
      var displayLetterInput = helper.node("input|type:text,class:link-form-input-letter,id:link-form-input-letter,placeholder:E,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");

      // icon
      var displayIconRadiotWrap = helper.node("div|class:form-wrap");
      var displayIconRadio = helper.node("input|class:link-form-input-display-icon,id:link-form-input-display-icon,type:radio,name:link-form-input-display,tabindex:1,value:icon");
      var displayIconLable = helper.node("label|for:link-form-input-display-icon");
      var displayIconLableText = helper.node("span:Icon");
      var displayIconLableIcon = helper.node("span|class:label-icon");
      var displayIconFormIndentWrap = helper.node("div|class:form-wrap");
      var displayIconFormIndent = helper.node("div|class:form-indent");
      var displayIconInputWrap = helper.node("div|class:form-wrap");
      var displayIconFormGroup = helper.node("div|class:form-group form-group-block auto-suggest-input");
      var displayIconInput = helper.node("input|type:text,class:form-group-item-grow link-form-input-icon auto-suggest-input,id:link-form-input-icon,placeholder:Search for Brands or Icons,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false,disabled");
      var displayIconFormGroupText = helper.node("div|class:form-group-text link-form-text-icon disabled,tabindex:-1");
      var displayIconFormGroupClear = helper.node("button|class:link-form-icon-clear button button-line,type:button,tabindex:1,disabled");
      var displayIconFormGroupClearIcon = helper.node("span|class:icon-close");
      var displayIconHelper = helper.node("div|class:form-helper");
      var displayIconHelperItem = helper.node("p:Refer to the \"Free\" and \"Brand\" icons from FontAwesome for full set of icons supported.|class:link-form-input-icon-helper form-helper-item disabled");

      // name
      var nameInputWrap = helper.node("div|class:form-wrap");
      var nameLabel = helper.node("label:Name|for:link-form-input-name");
      var nameInput = helper.node("input|type:text,class:link-form-input-name,id:link-form-input-name,placeholder:Example,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");

      // url
      var urlInputWrap = helper.node("div|class:form-wrap");
      var urlLabel = helper.node("label:URL|for:link-form-input-url");
      var urlInput = helper.node("input|type:text,class:link-form-input-url,id:link-form-input-url,placeholder:https://www.example.com/,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
      var urlInputHelper = helper.node("div|class:form-helper");
      var urlInputHelperItem = helper.makeNode({
        tag: "p",
        text: "Be sure to use the full URL and include \"http://\" or \"https://\".",
        attr: [{
          key: "class",
          value: "form-helper-item"
        }]
      });

      // accent
      var accentLabelWrap = helper.node("div|class:form-wrap");
      var accentLabel = helper.node("label:Accent colour");
      var accentGlobalRadioWrap = helper.node("div|class:form-wrap");
      var accentGlobalRadio = helper.node("input|class:link-form-input-accent-global,id:link-form-input-accent-global,type:radio,name:link-form-input-accent,tabindex:1,checked,value:global");
      var accentGlobalLabel = helper.node("label|for:link-form-input-accent-global");
      var accentGlobalLabelText = helper.node("span:Global");
      var accentGlobalLabelIcon = helper.node("span|class:label-icon");
      var accentCustomInputWrap = helper.node("div|class:form-wrap");
      var accentCustomRadio = helper.node("input|class:link-form-input-accent-custom,id:link-form-input-accent-custom,type:radio,name:link-form-input-accent,tabindex:1,value:custom");
      var accentCustomLabel = helper.node("label|for:link-form-input-accent-custom");
      var accentCustomLabelText = helper.node("span:Custom");
      var accentCustomLabelIcon = helper.node("span|class:label-icon");
      var accentColorFormIndentWrap = helper.node("div|class:form-wrap");
      var accentColorFormIndent = helper.node("div|class:form-indent");
      var accentColorInputWrap = helper.node("div|class:form-wrap");
      var accentColorFormGroup = helper.node("div|class:form-group form-group-block");
      var accentColorPicker = helper.node("input|id:link-form-input-accent-picker,class:form-group-item-half link-form-input-accent-picker,type:color,value:#000000,tabindex:1,disabled");
      var accentColorHex = helper.node("input|id:link-form-input-accent-hex,class:form-group-item-half link-form-input-accent-hex,type:text,placeholder:Hex code,value:#000000,tabindex:1,maxlength:7,disabled");
      var accentColorInputHelper = helper.node("div|class:form-helper");
      var accentColorInputHelperItem = helper.node("p:Use this colour to override the global accent colour.|class:link-form-input-accent-helper form-helper-item disabled");

      groupExistingRadioWrap.appendChild(groupExistingRadio);
      groupExistingLable.appendChild(groupExistingLableIcon);
      groupExistingLable.appendChild(groupExistingLableText);
      groupExistingRadioWrap.appendChild(groupExistingLable);
      groupExistingGroupInputWrap.appendChild(groupExistingGroup);
      groupExistingPositionInputWrap.appendChild(groupExistingPositionLabel);
      groupExistingPositionInputWrap.appendChild(groupExistingPosition);
      groupExistingFormIndent.appendChild(groupExistingGroupInputWrap);
      groupExistingFormIndent.appendChild(groupExistingPositionInputWrap);
      groupExistingFormIndentWrap.appendChild(groupExistingFormIndent);
      fieldset.appendChild(groupExistingRadioWrap);
      fieldset.appendChild(groupExistingFormIndentWrap);

      groupNewRadioWrap.appendChild(groupNewRadio);
      groupNewLable.appendChild(groupNewLableLableIcon);
      groupNewLable.appendChild(groupNewLableLableText);
      groupNewRadioWrap.appendChild(groupNewLable);
      groupNewInputWrap.appendChild(groupNewInput);
      groupNewRandomNameButtonWrap.appendChild(groupNewRandomNameButton);
      groupNewFormIndent.appendChild(groupNewInputWrap);
      groupNewFormIndent.appendChild(groupNewRandomNameButtonWrap);
      groupNewFormIndentWrap.appendChild(groupNewFormIndent);
      fieldset.appendChild(groupNewRadioWrap);
      fieldset.appendChild(groupNewFormIndentWrap);
      fieldset.appendChild(helper.node("hr"));

      displayLetterRadioWrap.appendChild(displayLetterRadio);
      displayLetterLable.appendChild(displayLetterLableIcon);
      displayLetterLable.appendChild(displayLetterLableText);
      displayLetterRadioWrap.appendChild(displayLetterLable);
      fieldset.appendChild(displayLetterRadioWrap);
      displayLetterInputWrap.appendChild(displayLetterInput);
      displayLetterFormIndent.appendChild(displayLetterInputWrap);
      displayLetterFormIndentWrap.appendChild(displayLetterFormIndent);
      fieldset.appendChild(displayLetterFormIndentWrap);
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
      displayIconHelper.appendChild(displayIconHelperItem);
      displayIconFormIndent.appendChild(displayIconHelper);
      displayIconFormIndentWrap.appendChild(displayIconFormIndent);
      fieldset.appendChild(displayIconFormIndentWrap);
      fieldset.appendChild(helper.node("hr"));
      nameInputWrap.appendChild(nameLabel);
      nameInputWrap.appendChild(nameInput);
      fieldset.appendChild(nameInputWrap);
      urlInputWrap.appendChild(urlLabel);
      urlInputWrap.appendChild(urlInput);
      fieldset.appendChild(urlInputWrap);
      urlInputHelper.appendChild(urlInputHelperItem);
      fieldset.appendChild(urlInputHelper);
      fieldset.appendChild(helper.node("hr"));
      accentLabelWrap.appendChild(accentLabel);
      fieldset.appendChild(accentLabelWrap);
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
      accentColorInputHelper.appendChild(accentColorInputHelperItem);
      accentColorFormIndent.appendChild(accentColorInputHelper);
      accentColorFormIndentWrap.appendChild(accentColorFormIndent);
      fieldset.appendChild(accentColorFormIndentWrap);
      form.appendChild(fieldset);

      var makeGroupOptions = function() {
        if (bookmarks.get().length > 0) {
          bookmarks.get().forEach(function(arrayItem, index) {
            var name;
            if (arrayItem.name.text == null || arrayItem.name.text == "") {
              name = "Unnamed group " + (index + 1);
            } else {
              name = arrayItem.name.text;
            };
            var option = helper.makeNode({
              tag: "option",
              text: name,
              attr: [{
                key: "value",
                value: name
              }]
            });
            groupExistingGroup.appendChild(option);
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
          helper.removeClass(accentColorInputHelperItem, "disabled");
        } else {
          accentGlobalRadio.checked = true;
          accentCustomRadio.checked = false;
          accentColorPicker.setAttribute("disabled", "");
          accentColorHex.setAttribute("disabled", "");
          helper.addClass(accentColorInputHelperItem, "disabled");
        };
        if (stagedLink.link.accent.color.r != null && stagedLink.link.accent.color.g != null && stagedLink.link.accent.color.b != null) {
          accentColorPicker.value = helper.convertColor.rgb.hex(stagedLink.link.accent.color);
          accentColorHex.value = helper.convertColor.rgb.hex(stagedLink.link.accent.color);
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
        stagedLink.position.group.name.show = false;
        stagedLink.position.group.openAll.show = false;
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
        stagedLink.position.group.name.show = true;
        stagedLink.position.group.openAll.show = true;
        groupExistingGroup.setAttribute("disabled", "");
        groupExistingPosition.setAttribute("disabled", "");
        helper.addClass(groupExistingPositionLabel, "disabled");
        groupNewInput.removeAttribute("disabled");
        groupNewRandomNameButton.removeAttribute("disabled");
      }, false);
      groupNewInput.addEventListener("input", function(event) {
        stagedLink.position.group.name.text = this.value;
      }, false);
      groupNewRandomNameButton.addEventListener("click", function(event) {
        var randomName = helper.randomString({
          adjectivesCount: helper.randomNumber(1, 3)
        });
        stagedLink.position.group.name.text = randomName;
        groupNewInput.value = randomName;
      }, false);
      displayLetterRadio.addEventListener("change", function(event) {
        stagedLink.link.display = this.value;
        displayLetterInput.removeAttribute("disabled");
        displayIconInput.setAttribute("disabled", "");
        helper.addClass(displayIconFormGroupText, "disabled");
        helper.addClass(displayIconHelperItem, "disabled");
        displayIconFormGroupClear.setAttribute("disabled", "");
        displayIconFormGroupText.tabIndex = -1;
      }, false);
      displayIconRadio.addEventListener("change", function(event) {
        stagedLink.link.display = this.value;
        displayLetterInput.setAttribute("disabled", "");
        displayIconInput.removeAttribute("disabled");
        helper.removeClass(displayIconFormGroupText, "disabled");
        helper.removeClass(displayIconHelperItem, "disabled");
        displayIconFormGroupClear.removeAttribute("disabled");
        displayIconFormGroupText.tabIndex = 1;
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
        helper.addClass(accentColorInputHelperItem, "disabled");
      }, false);
      accentCustomRadio.addEventListener("change", function() {
        stagedLink.link.accent.override = true;
        stagedLink.link.accent.color = helper.convertColor.hex.rgb(accentColorPicker.value);
        accentColorPicker.removeAttribute("disabled");
        accentColorHex.removeAttribute("disabled");
        helper.removeClass(accentColorInputHelperItem, "disabled");
      }, false);
      accentColorPicker.addEventListener("change", function() {
        if (helper.isHexNumber(this.value)) {
          stagedLink.link.accent.color = helper.convertColor.hex.rgb(this.value);
          accentColorHex.value = this.value;
        };
      }, false);
      accentColorHex.addEventListener("input", function() {
        if (helper.isHexNumber(this.value)) {
          stagedLink.link.accent.color = helper.convertColor.hex.rgb(this.value);
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
        html.style.setProperty("--link-item-display-letter-size", state.get.current().link.item.display.letcon.letter.size + "em");
      },
      icon: function() {
        var html = helper.e("html");
        html.style.setProperty("--link-item-display-icon-size", state.get.current().link.item.display.letcon.icon.size + "em");
      }
    },
    name: function() {
      var html = helper.e("html");
      html.style.setProperty("--link-item-display-name-size", state.get.current().link.item.display.name.size + "em");
    },
    size: function() {
      var html = helper.e("html");
      html.style.setProperty("--link-item-size", state.get.current().link.item.size + "em");
    },
    tabindex: function() {
      var allLinkControlItem = helper.eA(".link-control-item");
      if (state.get.current().edit) {
        allLinkControlItem.forEach(function(arrayItem, index) {
          arrayItem.tabIndex = 1;
        });
      } else {
        allLinkControlItem.forEach(function(arrayItem, index) {
          arrayItem.tabIndex = -1;
        });
      };
    },
    color: {
      custom: function() {
        helper.e("html").style.setProperty("--link-item-color-custom", state.get.current().link.item.color.rgb.r + ", " + state.get.current().link.item.color.rgb.g + ", " + state.get.current().link.item.color.rgb.b);
      }
    },
    border: function() {
      var html = helper.e("html");
      html.style.setProperty("--link-item-border", state.get.current().link.item.border);
    },
    rotate: function() {
      var html = helper.e("html");
      html.style.setProperty("--link-item-display-rotate", state.get.current().link.item.display.rotate + "deg");
    },
    translate: {
      x: function() {
        var html = helper.e("html");
        html.style.setProperty("--link-item-display-translate-x", state.get.current().link.item.display.translate.x + "em");
      },
      y: function() {
        var html = helper.e("html");
        html.style.setProperty("--link-item-display-translate-y", state.get.current().link.item.display.translate.y + "em");
      }
    },
    gutter: function() {
      var html = helper.e("html");
      html.style.setProperty("--link-item-display-gutter", state.get.current().link.item.display.gutter);
    },
    opacity: function() {
      var html = helper.e("html");
      html.style.setProperty("--link-item-opacity", state.get.current().link.item.opacity);
    }
  };

  render.all = function() {
    var linkSection = helper.e(".link");
    var linkArea = helper.node("div|class:link-area");
    linkSection.appendChild(linkArea);
    var make = {
      bookmarks: function() {
        bookmarks.get().forEach(function(arrayItem, index) {
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
              stagedLink.position.group.name.text = null;
              if (state.get.current().search) {
                if (stagedLink.link.searchMatch) {
                  group.querySelector(".group-body").appendChild(render.item.link());
                };
              } else {
                group.querySelector(".group-body").appendChild(render.item.link());
              };
            });
          } else {
            group.querySelector(".group-body").appendChild(render.empty.item(stagedGroup.position.destination));
          };
          if (state.get.current().search) {
            if (search.mod.searching.count.group(index) > 0) {
              linkArea.appendChild(group);
            };
          } else {
            linkArea.appendChild(group);
          };
          stagedGroup.reset();
          stagedLink.reset();
        });
      },
      empty: {
        search: function() {
          linkArea.appendChild(render.empty.search());
        },
        bookmarks: function() {
          linkArea.appendChild(render.empty.group());
        }
      }
    };
    // if bookmarks exist
    if (bookmarks.get().length > 0) {
      // if searching
      if (state.get.current().search) {
        search.mod.searching.get();
        // if matching results found
        if (search.mod.searching.count.all() > 0) {
          make.bookmarks();
        } else {
          make.empty.search();
        };
      } else {
        search.mod.searching.clear();
        make.bookmarks();
      };
    } else {
      // if searching
      if (state.get.current().search) {
        make.empty.search();
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
      var para = helper.node("p:No Groups or Bookmarks|class:small muted");
      var addButton = helper.node("button:Add a Bookmark|class:button button-line button-small,type:button,tabindex:1");
      linkEmpty.appendChild(para);
      linkEmpty.appendChild(addButton);
      groupBody.appendChild(linkEmpty);
      group.appendChild(groupBody);
      addButton.addEventListener("click", function(event) {
        add.item.open();
      }, false);
      return group;
    },
    item: function(groupIndex) {
      var linkEmpty = helper.node("div|class:link-empty link-item");
      var para = helper.node("p:Empty Group|class:small muted");
      var addButton = helper.node("button:Add a Bookmark|class:button button-line button-small,type:button,tabindex:1");
      linkEmpty.appendChild(para);
      linkEmpty.appendChild(addButton);
      addButton.addEventListener("click", function(event) {
        add.item.open();
        add.item.selectGroup(groupIndex);
      }, false);
      return linkEmpty;
    },
    search: function() {
      var group = helper.node("div|class:group");
      var groupBody = helper.node("div|class:group-body");
      var linkEmpty = helper.node("div|class:link-empty link-item");
      var para1 = helper.makeNode({
        tag: "p",
        text: "No bookmarks matching \"" + helper.e(".search-input").value + "\" found"
      });
      var para2 = helper.node("p:\"Enter\" to Search " + state.get.current().header.search.engine[state.get.current().header.search.engine.selected].name + ".|class:small muted");
      linkEmpty.appendChild(para1);
      linkEmpty.appendChild(para2);
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
        stagedLink.init();
        var successAction = function() {
          stagedLink.link.timeStamp = new Date().getTime();
          bookmarks.mod.add.link(JSON.parse(JSON.stringify(stagedLink)));
          add.item.close();
          data.save();
          groupAndItems();
          control.render.dependents();
          control.render.class();
          shade.close();
          pagelock.unlock();
        };
        var cancelAction = function() {
          add.item.close();
          shade.close();
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
            add.item.close();
            modal.close();
          }
        });
        pagelock.lock();
        stagedLink.position.destination.item = helper.e(".link-form-position").selectedIndex;
      },
      close: function() {
        stagedLink.reset();
        autoSuggest.close();
        pagelock.unlock();
      },
      selectGroup: function(groupIndex) {
        stagedGroup.init();
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
        stagedGroup.init();
        var successAction = function() {
          bookmarks.mod.add.group(JSON.parse(JSON.stringify(stagedGroup)));
          add.group.close();
          data.save();
          groupAndItems();
          control.render.dependents();
          control.render.class();
          shade.close();
          pagelock.unlock();
        };
        var cancelAction = function() {
          add.group.close();
          shade.close();
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
            add.group.close();
            modal.close();
          }
        });
        pagelock.lock();
        stagedGroup.position.destination = helper.e(".group-form-position").selectedIndex;
      },
      close: function() {
        stagedGroup.reset();
        autoSuggest.close();
        pagelock.unlock();
      }
    }
  };

  render.edit = {
    item: {
      open: function(copyStagedLink) {
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
          edit.item.close();
          data.save();
          groupAndItems();
          if (!state.get.current().search) {
            render.focus.item.current.edit(copyStagedLink);
          };
          autoSuggest.close();
          shade.close();
          pagelock.unlock();
        };
        var cancelAction = function() {
          edit.item.close();
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
            edit.item.close();
            modal.close();
          }
        });
        pagelock.lock();
      },
      close: function() {
        stagedLink.reset();
        autoSuggest.close();
        pagelock.unlock();
      }
    },
    group: {
      open: function(copyStagedGroup) {
        stagedGroup.group = JSON.parse(JSON.stringify(copyStagedGroup.group));
        stagedGroup.position = JSON.parse(JSON.stringify(copyStagedGroup.position));
        var form = render.group.form({
          useStagedGroup: true
        });
        var heading;
        if (stagedGroup.group.name.text == null || stagedGroup.group.name.text == "") {
          heading = "Edit unnamed group " + (stagedGroup.position.origin + 1);
        } else {
          heading = "Edit " + stagedGroup.group.name.text;
        };
        var successAction = function() {
          var copyStagedGroup = JSON.parse(JSON.stringify(stagedGroup));
          bookmarks.mod.edit.group(copyStagedGroup);
          edit.group.close();
          data.save();
          groupAndItems();
          if (!state.get.current().search) {
            render.focus.group.current.edit(copyStagedGroup);
          };
          autoSuggest.close();
          shade.close();
          pagelock.unlock();
        };
        var cancelAction = function() {
          edit.group.close();
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
            edit.group.close();
            modal.close();
          }
        });
        pagelock.lock();
      },
      close: function() {
        stagedGroup.reset();
        autoSuggest.close();
        pagelock.unlock();
      }
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
        edit.mode.check();
        data.save();
        groupAndItems();
        control.render.dependents();
        control.render.class();
        if (!state.get.current().search) {
          render.focus.item.previous.remove(copyStagedLink);
        };
        shade.close();
        pagelock.unlock();
        stagedLink.reset();
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
      if (stagedGroup.group.name.text == null || stagedGroup.group.name.text == "") {
        heading = "Remove unnamed group " + (stagedGroup.position.origin + 1);
      } else {
        heading = "Remove " + stagedGroup.group.name.text;
      };
      var successAction = function() {
        var copyStagedGroup = JSON.parse(JSON.stringify(stagedGroup));
        bookmarks.remove.group(copyStagedGroup);
        edit.mode.check();
        data.save();
        groupAndItems();
        control.render.dependents();
        control.render.class();
        if (!state.get.current().search) {
          render.focus.group.previous.remove(copyStagedGroup);
        };
        shade.close();
        pagelock.unlock();
        stagedGroup.reset();
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
        mod.add.item.open();
        render.add.item.open();
      },
      close: function() {
        mod.add.item.close();
        render.add.item.close();
      },
      selectGroup: function(groupIndex) {
        render.add.item.selectGroup(groupIndex);
      }
    },
    group: {
      open: function() {
        mod.add.group.open();
        render.add.group.open();
      },
      close: function() {
        mod.add.group.close();
        render.add.group.close();
      }
    }
  };

  var edit = {
    mode: {
      open: function() {
        mod.edit.mode.open();
        control.render.update.control.header();
        control.render.update.control.menu();
        control.render.class();
      },
      close: function() {
        mod.edit.mode.close();
        control.render.update.control.header();
        control.render.update.control.menu();
        control.render.class();
      },
      check: function() {
        if (bookmarks.get().length <= 0) {
          edit.mode.close();
        };
      },
      toggle: function() {
        if (state.get.current().edit) {
          edit.mode.close();
        } else {
          edit.mode.open();
        };
        render.group.tabindex();
        render.item.tabindex();
      }
    },
    item: {
      open: function(copyStagedLink) {
        mod.edit.item.open();
        render.edit.item.open(copyStagedLink);
      },
      close: function() {
        mod.edit.item.close();
        render.edit.item.close();
      }
    },
    group: {
      open: function(copyStagedGroup) {
        mod.edit.group.open();
        render.edit.group.open(copyStagedGroup);
      },
      close: function() {
        mod.edit.group.close();
        render.edit.group.close();
      }
    }
  };

  var tabindex = function() {
    render.group.tabindex();
    render.item.tabindex();
  };

  var groupAndItems = function() {
    render.clear.item();
    render.clear.group();
    render.all();
    render.group.tabindex();
    render.item.tabindex();
    if (!state.get.current().search) {
      bind.sort.group();
      bind.sort.item();
    };
  };

  var init = function() {
    mod.add.item.close();
    mod.add.group.close();
    groupAndItems();
    render.group.name.size();
    render.group.openall.size();
    render.group.openall.opacity();
    render.group.border();
    render.item.color.custom();
    render.item.size();
    render.item.display.letter();
    render.item.display.icon();
    render.item.name();
    render.item.border();
    render.item.rotate();
    render.item.translate.x();
    render.item.translate.y();
    render.item.gutter();
    render.item.opacity();
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
