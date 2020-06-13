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
    stagedGroup.position.origin = 0;
    stagedGroup.position.destination = 0;
    stagedGroup.group.name.text = "";
    stagedGroup.group.name.show = true;
    stagedGroup.group.openAll.show = true;
    stagedGroup.group.items = [];
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
      visual: {
        display: null,
        letter: null,
        image: null,
        icon: {
          name: null,
          prefix: null,
          label: null
        }
      },
      name: null,
      url: null,
      accent: {
        by: null,
        hsl: {
          h: null,
          s: null,
          l: null
        },
        rgb: {
          r: null,
          g: null,
          b: null
        }
      },
      color: {
        by: null,
        hsl: {
          h: null,
          s: null,
          l: null
        },
        rgb: {
          r: null,
          g: null,
          b: null
        }
      },
      image: null,
      timeStamp: null,
      searchMatch: null
    }
  };

  stagedLink.init = function() {
    stagedLink.position.origin.group = 0;
    stagedLink.position.origin.item = 0;
    stagedLink.position.destination.group = 0;
    stagedLink.position.destination.item = 0;
    stagedLink.position.group.new = false;
    stagedLink.position.group.name.show = true;
    stagedLink.position.group.name.text = "";
    stagedLink.position.group.openAll.show = true;
    stagedLink.link.visual.display = "letter";
    stagedLink.link.visual.letter = "";
    stagedLink.link.visual.image = "";
    stagedLink.link.visual.icon.name = "";
    stagedLink.link.visual.icon.prefix = "";
    stagedLink.link.visual.icon.label = "";
    stagedLink.link.name = "";
    stagedLink.link.url = "";
    stagedLink.link.accent.by = "theme";
    stagedLink.link.accent.hsl.h = 0;
    stagedLink.link.accent.hsl.s = 0;
    stagedLink.link.accent.hsl.l = 0;
    stagedLink.link.accent.rgb.r = 0;
    stagedLink.link.accent.rgb.g = 0;
    stagedLink.link.accent.rgb.b = 0;
    stagedLink.link.color.by = "theme";
    stagedLink.link.color.hsl.h = 0;
    stagedLink.link.color.hsl.s = 0;
    stagedLink.link.color.hsl.l = 0;
    stagedLink.link.color.rgb.r = 0;
    stagedLink.link.color.rgb.g = 0;
    stagedLink.link.color.rgb.b = 0;
    stagedLink.link.image = "";
    stagedLink.link.searchMatch = false;
  };

  stagedLink.reset = function() {
    stagedLink.position.origin.group = null;
    stagedLink.position.origin.item = null;
    stagedLink.position.destination.group = null;
    stagedLink.position.destination.item = null;
    stagedLink.position.group.new = null;
    stagedLink.position.group.name.show = null;
    stagedLink.position.group.name.text = null;
    stagedLink.position.group.openAll.show = null;
    stagedLink.link.visual.display = null;
    stagedLink.link.visual.letter = null;
    stagedLink.link.visual.image = null;
    stagedLink.link.visual.icon.name = null;
    stagedLink.link.visual.icon.prefix = null;
    stagedLink.link.visual.icon.label = null;
    stagedLink.link.name = null;
    stagedLink.link.url = null;
    stagedLink.link.accent.by = null;
    stagedLink.link.accent.hsl.h = null;
    stagedLink.link.accent.hsl.s = null;
    stagedLink.link.accent.hsl.l = null;
    stagedLink.link.accent.rgb.r = null;
    stagedLink.link.accent.rgb.g = null;
    stagedLink.link.accent.rgb.b = null;
    stagedLink.link.color.by = null;
    stagedLink.link.color.hsl.h = null;
    stagedLink.link.color.hsl.s = null;
    stagedLink.link.color.hsl.l = null;
    stagedLink.link.color.rgb.r = null;
    stagedLink.link.color.rgb.g = null;
    stagedLink.link.color.rgb.b = null;
    stagedLink.link.image = null;
    stagedLink.link.timeStamp = null;
    stagedLink.link.searchMatch = null;
  };

  var mod = {};

  mod.collapse = {
    form: {
      item: {
        color: false,
        accent: false
      }
    },
    reset: function() {
      mod.collapse.form.item.color = false;
      mod.collapse.form.item.accent = false;
    }
  }

  mod.accent = {
    hsl: function() {
      var hsl = helper.convertColor.rgb.hsl(state.get.current().link.item.accent.rgb);
      helper.setObject({
        object: state.get.current(),
        path: "link.item.accent.hsl",
        newValue: {
          h: Math.round(hsl.h),
          s: Math.round(hsl.s),
          l: Math.round(hsl.l)
        }
      });
    },
    rgb: function() {
      var rgb = helper.convertColor.hsl.rgb(state.get.current().link.item.accent.hsl);
      helper.setObject({
        object: state.get.current(),
        path: "link.item.accent.rgb",
        newValue: {
          r: Math.round(rgb.r),
          g: Math.round(rgb.g),
          b: Math.round(rgb.b)
        }
      });
    },
    clear: function() {
      bookmarks.get().forEach(function(arrayItem, index) {
        arrayItem.items.forEach(function(arrayItem, index) {
          arrayItem.accent = {
            by: "theme",
            hsl: {
              h: 0,
              s: 0,
              l: 0
            },
            rgb: {
              r: 0,
              g: 0,
              b: 0
            }
          };
        });
      });
    },
    set: function() {
      bookmarks.get().forEach(function(arrayItem, index) {
        arrayItem.items.forEach(function(arrayItem, index) {
          arrayItem.accent.by = "custom";
          arrayItem.accent.hsl = state.get.current().link.item.accent.hsl;
          arrayItem.accent.rgb = state.get.current().link.item.accent.rgb;
        });
      });
    },
    rainbow: function() {
      var units = 360 / bookmarks.count();
      var degree = 0;
      bookmarks.get().forEach(function(arrayItem, index) {
        arrayItem.items.forEach(function(arrayItem, index) {
          arrayItem.accent.by = "custom";
          var rgb = helper.convertColor.hsl.rgb({
            h: degree,
            s: 100,
            l: 50
          });
          arrayItem.accent.hsl = {
            h: degree,
            s: 100,
            l: 50
          };
          arrayItem.accent.rgb = {
            r: Math.round(rgb.r),
            g: Math.round(rgb.g),
            b: Math.round(rgb.b)
          };
          degree = degree + units;
        });
      });
    }
  };

  mod.color = {
    hsl: function() {
      var hsl = helper.convertColor.rgb.hsl(state.get.current().link.item.color.rgb);
      helper.setObject({
        object: state.get.current(),
        path: "link.item.color.hsl",
        newValue: {
          h: Math.round(hsl.h),
          s: Math.round(hsl.s),
          l: Math.round(hsl.l)
        }
      });
    },
    rgb: function() {
      var rgb = helper.convertColor.hsl.rgb(state.get.current().link.item.color.hsl);
      helper.setObject({
        object: state.get.current(),
        path: "link.item.color.rgb",
        newValue: {
          r: Math.round(rgb.r),
          g: Math.round(rgb.g),
          b: Math.round(rgb.b)
        }
      });
    },
    clear: function() {
      bookmarks.get().forEach(function(arrayItem, index) {
        arrayItem.items.forEach(function(arrayItem, index) {
          arrayItem.color = {
            by: "theme",
            hsl: {
              h: 0,
              s: 0,
              l: 0
            },
            rgb: {
              r: 0,
              g: 0,
              b: 0
            }
          };
        });
      });
    },
    set: function() {
      bookmarks.get().forEach(function(arrayItem, index) {
        arrayItem.items.forEach(function(arrayItem, index) {
          arrayItem.color.by = "custom";
          arrayItem.color.hsl = state.get.current().link.item.color.hsl;
          arrayItem.color.rgb = state.get.current().link.item.color.rgb;
        });
      });
    },
    rainbow: function() {
      var units = 360 / bookmarks.count();
      var degree = 0;
      bookmarks.get().forEach(function(arrayItem, index) {
        arrayItem.items.forEach(function(arrayItem, index) {
          arrayItem.color.by = "custom";
          var rgb = helper.convertColor.hsl.rgb({
            h: degree,
            s: 100,
            l: 50
          });
          arrayItem.color.hsl = {
            h: degree,
            s: 100,
            l: 50
          };
          arrayItem.color.rgb = {
            r: Math.round(rgb.r),
            g: Math.round(rgb.g),
            b: Math.round(rgb.b)
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
      if (stagedGroup.group.name.show && helper.checkIfValidString(stagedGroup.group.name.text)) {
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
      if (stagedLink.link.accent.by == "custom" || stagedLink.link.color.by == "custom" || helper.checkIfValidString(stagedLink.link.image)) {
        linkItemOptions.attr.push({
          key: "style",
          value: ""
        });
        if (stagedLink.link.accent.by == "custom") {
          linkItemOptions.attr[1].value = linkItemOptions.attr[1].value +
            "--theme-accent-r: " + stagedLink.link.accent.rgb.r + ";" +
            "--theme-accent-g: " + stagedLink.link.accent.rgb.g + ";" +
            "--theme-accent-b: " + stagedLink.link.accent.rgb.b + ";" +
            "--theme-accent: var(--theme-accent-r), var(--theme-accent-g), var(--theme-accent-b);" +
            "--theme-accent-accessible-threshold: 0.5;" +
            "--theme-accent-accessible-r: calc(var(--theme-accent-r) * 0.50);" +
            "--theme-accent-accessible-g: calc(var(--theme-accent-g) * 0.60);" +
            "--theme-accent-accessible-b: calc(var(--theme-accent-b) * 0.20);" +
            "--theme-accent-accessible-sum: calc(var(--theme-accent-accessible-r) + var(--theme-accent-accessible-g) + var(--theme-accent-accessible-b));" +
            "--theme-accent-accessible-perceived-lightness: calc(var(--theme-accent-accessible-sum) / 255);" +
            "--theme-accent-accessible-color: 0, 0%, calc((var(--theme-accent-accessible-perceived-lightness) - var(--theme-accent-accessible-threshold)) * -10000000%);"
        };
        if (stagedLink.link.color.by == "custom") {
          linkItemOptions.attr[1].value = linkItemOptions.attr[1].value +
            "--link-item-color: " + stagedLink.link.color.rgb.r + ", " + stagedLink.link.color.rgb.g + ", " + stagedLink.link.color.rgb.b + ";" +
            "--link-item-color-focus-hover: " + stagedLink.link.color.rgb.r + ", " + stagedLink.link.color.rgb.g + ", " + stagedLink.link.color.rgb.b + ";";
        };
        if (helper.checkIfValidString(stagedLink.link.image)) {
          linkItemOptions.attr[1].value = linkItemOptions.attr[1].value + "--link-image-url: url(" + helper.trimString(stagedLink.link.image) + ");"
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
      if (state.get.current().link.item.newTab) {
        linkPanelFrontOptions.attr.push({
          key: "target",
          value: "_blank"
        });
      };

      var linkImage = helper.node("div|class:link-image");

      var linkPanelFront = helper.makeNode(linkPanelFrontOptions);
      var linkPanelBack = helper.node("div|class:link-panel-back");

      var linkDisplay = helper.node("div|class:link-display");
      var linkDisplayVisual = helper.node("div|class:link-display-visual");

      var linkDisplayLetter = null;
      var linkDisplayIcon = null;
      var linkDisplayImage = null;

      if (stagedLink.link.visual.display == "letter" && helper.checkIfValidString(stagedLink.link.visual.letter)) {
        linkDisplayLetter = helper.node("p:" + helper.trimString(stagedLink.link.visual.letter) + "|class:link-display-letter");
      } else if (stagedLink.link.visual.display == "icon" && helper.checkIfValidString(stagedLink.link.visual.icon.prefix) && helper.checkIfValidString(stagedLink.link.visual.icon.name)) {
        linkDisplayIcon = helper.node("div|class:link-display-icon " + stagedLink.link.visual.icon.prefix + " fa-" + stagedLink.link.visual.icon.name);
      } else if (stagedLink.link.visual.display == "image" && helper.checkIfValidString(stagedLink.link.visual.image)) {
        linkDisplayImage = helper.node("div|class:link-display-image,style:--link-display-image-url: url(" + helper.trimString(stagedLink.link.visual.image) + ")");
      };

      var linkDisplayName;
      if (helper.checkIfValidString(stagedLink.link.name)) {
        linkDisplayName = helper.node("p:" + helper.trimString(stagedLink.link.name) + "|class:link-display-name");
      } else {
        linkDisplayName = helper.node("p|class:link-display-name");
      };

      var linkUrl = helper.node("div|class:link-url");
      var url;
      if (helper.checkIfValidString(stagedLink.link.url)) {
        url = helper.trimString(stagedLink.link.url.replace(/^https?\:\/\//i, "").replace(/\/+$/, ""));
      } else {
        url = "";
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

      if (stagedLink.link.visual.display == "letter" && linkDisplayLetter != null) {
        linkDisplayVisual.appendChild(linkDisplayLetter);
      } else if (stagedLink.link.visual.display == "icon" && linkDisplayIcon != null) {
        linkDisplayVisual.appendChild(linkDisplayIcon);
      } else if (stagedLink.link.visual.display == "image" && linkDisplayImage != null) {
        linkDisplayVisual.appendChild(linkDisplayImage);
      };

      if (linkDisplayLetter != null || linkDisplayIcon != null || linkDisplayImage != null) {
        linkDisplay.appendChild(linkDisplayVisual);
      };

      if (helper.checkIfValidString(stagedLink.link.name)) {
        linkDisplay.appendChild(linkDisplayName);
      };

      if (helper.checkIfValidString(stagedLink.link.image)) {
        linkPanelFront.appendChild(linkImage);
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

      // image
      var displayImageRadiotWrap = helper.node("div|class:form-wrap");
      var displayImageRadio = helper.node("input|class:link-form-input-display-image,id:link-form-input-display-image,type:radio,name:link-form-input-display,tabindex:1,value:image");
      var displayImageLable = helper.node("label|for:link-form-input-display-image");
      var displayImageLableText = helper.node("span:Image");
      var displayImageLableIcon = helper.node("span|class:label-icon");
      var displayImageFormIndentWrap = helper.node("div|class:form-wrap");
      var displayImageFormIndent = helper.node("div|class:form-indent");
      var displayImageInputWrap = helper.node("div|class:form-wrap");
      var displayImageInput = helper.node("input|type:text,class:link-form-input-image,id:link-form-input-image,placeholder:https://...,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false,disabled");
      var displayImageHelper = helper.node("div|class:form-helper");
      var displayImageHelperItem = helper.makeNode({
        tag: "p",
        text: "Be sure to use the full URL and include \"http://\" or \"https://\".",
        attr: [{
          key: "class",
          value: "form-helper-item disabled"
        }]
      });

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

      // color
      var colorLabelWrap = helper.node("div|class:form-wrap");
      var colorLabel = helper.node("label:Color override");
      var colorThemeRadioWrap = helper.node("div|class:form-wrap");
      var colorThemeRadio = helper.node("input|class:link-form-input-color-theme,id:link-form-input-color-theme,type:radio,name:link-form-input-color,tabindex:1,checked,value:theme");
      var colorThemeLabel = helper.node("label|for:link-form-input-color-theme");
      var colorThemeLabelIcon = helper.node("span|class:label-icon");
      var colorThemeLabelBlock = helper.node("span|class:label-block");
      var colorThemeLabelBlockItem1 = helper.node("span:Theme colour|class:label-block-item");
      var colorThemeLabelBlockItem2 = helper.node("span:Use the Colour defined by the Theme.|class:label-block-item small muted");
      var colorCustomInputWrap = helper.node("div|class:form-wrap");
      var colorCustomRadio = helper.node("input|class:link-form-input-color-custom,id:link-form-input-color-custom,type:radio,name:link-form-input-color,tabindex:1,value:custom");
      var colorCustomLabel = helper.node("label|for:link-form-input-color-custom");
      var colorCustomLabelIcon = helper.node("span|class:label-icon");
      var colorCustomBlock = helper.node("span|class:label-block");
      var colorCustomBlockItem1 = helper.node("span:Custom colour|class:label-block-item");
      var colorCustomBlockItem2 = helper.node("span:Override the Theme colour.|class:label-block-item small muted");
      var colorColorFormIndentWrap = helper.node("div|class:form-wrap");
      var colorColorFormIndent = helper.node("div|class:form-indent");
      var colorColorInputWrap = helper.node("div|class:form-wrap mb-0");
      var colorColorFormGroup = helper.node("div|class:form-group form-group-block");
      var colorColorPicker = helper.node("input|id:link-form-input-color-picker,class:form-group-item-half link-form-input-color-picker,type:color,value:#000000,tabindex:1,disabled");
      var colorColorHex = helper.node("input|id:link-form-input-color-hex,class:form-group-item-half link-form-input-color-hex,type:text,placeholder:Hex code,value:#000000,tabindex:1,maxlength:7,disabled");
      var colorColorCollapseButton = helper.node("button|class:link-form-collapse-button button button-line,type:button,tabindex:1,disabled");
      var colorColorCollapseButtonIcon = helper.node("span|class:link-form-collapse-button-icon icon-arrow-down");
      var colorColorCollapse = helper.node("div|class:link-form-collapse");
      var colorHslHWrap = helper.node("div|class:form-wrap");
      var colorHslHLabel = helper.node("label:Hue|for:link-form-input-color-hsl-h-range,class:form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0 disabled");
      var colorHslHGroup = helper.node("div|class:form-group form-group-block");
      var colorHslHRange = helper.node("input|class:link-form-input-color-hsl-h-range mr-3,id:link-form-input-color-hsl-h-range,type:range,name:link-form-input-color-hsl-h-range,value:0,min:0,max:359,tabindex:1,disabled");
      var colorHslHNumber = helper.node("input|class:link-form-input-color-hsl-h-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:359,tabindex:1,disabled");
      var colorHslSWrap = helper.node("div|class:form-wrap");
      var colorHslSLabel = helper.node("label:Saturation|for:link-form-input-color-hsl-s-range,class:form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0 disabled");
      var colorHslSGroup = helper.node("div|class:form-group form-group-block");
      var colorHslSRange = helper.node("input|class:link-form-input-color-hsl-s-range mr-3,id:link-form-input-color-hsl-s-range,type:range,name:link-form-input-color-hsl-s-range,value:0,min:0,max:100,tabindex:1,disabled");
      var colorHslSNumber = helper.node("input|class:link-form-input-color-hsl-s-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:100,tabindex:1,disabled");
      var colorHslLWrap = helper.node("div|class:form-wrap");
      var colorHslLLabel = helper.node("label:Lightness|for:link-form-input-color-hsl-l-range,class:form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0 disabled");
      var colorHslLGroup = helper.node("div|class:form-group form-group-block");
      var colorHslLRange = helper.node("input|class:link-form-input-color-hsl-l-range mr-3,id:link-form-input-color-hsl-l-range,type:range,name:link-form-input-color-hsl-l-range,value:0,min:0,max:100,tabindex:1,disabled");
      var colorHslLNumber = helper.node("input|class:link-form-input-color-hsl-l-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:100,tabindex:1,disabled");
      var colorRgbRWrap = helper.node("div|class:form-wrap");
      var colorRgbRLabel = helper.node("label:Red|for:link-form-input-color-rgb-r-range,class:form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0 disabled");
      var colorRgbRGroup = helper.node("div|class:form-group form-group-block");
      var colorRgbRRange = helper.node("input|class:link-form-input-color-rgb-r-range mr-3,id:link-form-input-color-rgb-r-range,type:range,name:link-form-input-color-rgb-r-range,value:0,min:0,max:255,tabindex:1,disabled");
      var colorRgbRNumber = helper.node("input|class:link-form-input-color-rgb-r-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:255,tabindex:1,disabled");
      var colorRgbGWrap = helper.node("div|class:form-wrap");
      var colorRgbGLabel = helper.node("label:Green|for:link-form-input-color-rgb-g-range,class:form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0 disabled");
      var colorRgbGGroup = helper.node("div|class:form-group form-group-block");
      var colorRgbGRange = helper.node("input|class:link-form-input-color-rgb-g-range mr-3,id:link-form-input-color-rgb-g-range,type:range,name:link-form-input-color-rgb-g-range,value:0,min:0,max:255,tabindex:1,disabled");
      var colorRgbGNumber = helper.node("input|class:link-form-input-color-rgb-g-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:255,tabindex:1,disabled");
      var colorRgbBWrap = helper.node("div|class:form-wrap");
      var colorRgbBLabel = helper.node("label:Blue|for:link-form-input-color-rgb-b-range,class:form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0 disabled");
      var colorRgbBGroup = helper.node("div|class:form-group form-group-block");
      var colorRgbBRange = helper.node("input|class:link-form-input-color-rgb-b-range mr-3,id:link-form-input-color-rgb-b-range,type:range,name:link-form-input-color-rgb-b-range,value:0,min:0,max:255,tabindex:1,disabled");
      var colorRgbBNumber = helper.node("input|class:link-form-input-color-rgb-b-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:255,tabindex:1,disabled");

      // accent
      var accentLabelWrap = helper.node("div|class:form-wrap");
      var accentLabel = helper.node("label:Accent override");
      var accentThemeRadioWrap = helper.node("div|class:form-wrap");
      var accentThemeRadio = helper.node("input|class:link-form-input-accent-theme,id:link-form-input-accent-theme,type:radio,name:link-form-input-accent,tabindex:1,checked,value:theme");
      var accentThemeLabel = helper.node("label|for:link-form-input-accent-theme");
      var accentThemeLabelIcon = helper.node("span|class:label-icon");
      var accentThemeLabelBlock = helper.node("span|class:label-block");
      var accentThemeLabelBlockItem1 = helper.node("span:Theme accent|class:label-block-item");
      var accentThemeLabelBlockItem2 = helper.node("span:Use the Accent defined by the Theme.|class:label-block-item small muted");
      var accentCustomInputWrap = helper.node("div|class:form-wrap");
      var accentCustomRadio = helper.node("input|class:link-form-input-accent-custom,id:link-form-input-accent-custom,type:radio,name:link-form-input-accent,tabindex:1,value:custom");
      var accentCustomLabel = helper.node("label|for:link-form-input-accent-custom");
      var accentCustomLabelIcon = helper.node("span|class:label-icon");
      var accentCustomLabelBlock = helper.node("span|class:label-block");
      var accentCustomLabelBlockItem1 = helper.node("span:Custom accent|class:label-block-item");
      var accentCustomLabelBlockItem2 = helper.node("span:Override the Theme Accent.|class:label-block-item small muted");
      var accentColorFormIndentWrap = helper.node("div|class:form-wrap");
      var accentColorFormIndent = helper.node("div|class:form-indent");
      var accentColorInputWrap = helper.node("div|class:form-wrap mb-0");
      var accentColorFormGroup = helper.node("div|class:form-group form-group-block");
      var accentColorPicker = helper.node("input|id:link-form-input-accent-picker,class:form-group-item-half link-form-input-accent-picker,type:color,value:#000000,tabindex:1,disabled");
      var accentColorHex = helper.node("input|id:link-form-input-accent-hex,class:form-group-item-half link-form-input-accent-hex,type:text,placeholder:Hex code,value:#000000,tabindex:1,maxlength:7,disabled");
      var accentColorCollapseButton = helper.node("button|class:link-form-collapse-button button button-line,type:button,tabindex:1,disabled");
      var accentColorCollapseButtonIcon = helper.node("span|class:link-form-collapse-button-icon icon-arrow-down");
      var accentColorCollapse = helper.node("div|class:link-form-collapse");
      var accentHslHWrap = helper.node("div|class:form-wrap");
      var accentHslHLabel = helper.node("label:Hue|for:link-form-input-accent-hsl-h-range,class:form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0 disabled");
      var accentHslHGroup = helper.node("div|class:form-group form-group-block");
      var accentHslHRange = helper.node("input|class:link-form-input-accent-hsl-h-range mr-3,id:link-form-input-accent-hsl-h-range,type:range,name:link-form-input-accent-hsl-h-range,value:0,min:0,max:359,tabindex:1,disabled");
      var accentHslHNumber = helper.node("input|class:link-form-input-accent-hsl-h-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:359,tabindex:1,disabled");
      var accentHslSWrap = helper.node("div|class:form-wrap");
      var accentHslSLabel = helper.node("label:Saturation|for:link-form-input-accent-hsl-s-range,class:form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0 disabled");
      var accentHslSGroup = helper.node("div|class:form-group form-group-block");
      var accentHslSRange = helper.node("input|class:link-form-input-accent-hsl-s-range mr-3,id:link-form-input-accent-hsl-s-range,type:range,name:link-form-input-accent-hsl-s-range,value:0,min:0,max:100,tabindex:1,disabled");
      var accentHslSNumber = helper.node("input|class:link-form-input-accent-hsl-s-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:100,tabindex:1,disabled");
      var accentHslLWrap = helper.node("div|class:form-wrap");
      var accentHslLLabel = helper.node("label:Lightness|for:link-form-input-accent-hsl-l-range,class:form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0 disabled");
      var accentHslLGroup = helper.node("div|class:form-group form-group-block");
      var accentHslLRange = helper.node("input|class:link-form-input-accent-hsl-l-range mr-3,id:link-form-input-accent-hsl-l-range,type:range,name:link-form-input-accent-hsl-l-range,value:0,min:0,max:100,tabindex:1,disabled");
      var accentHslLNumber = helper.node("input|class:link-form-input-accent-hsl-l-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:100,tabindex:1,disabled");
      var accentRgbRWrap = helper.node("div|class:form-wrap");
      var accentRgbRLabel = helper.node("label:Red|for:link-form-input-accent-rgb-r-range,class:form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0 disabled");
      var accentRgbRGroup = helper.node("div|class:form-group form-group-block");
      var accentRgbRRange = helper.node("input|class:link-form-input-accent-rgb-r-range mr-3,id:link-form-input-accent-rgb-r-range,type:range,name:link-form-input-accent-rgb-r-range,value:0,min:0,max:255,tabindex:1,disabled");
      var accentRgbRNumber = helper.node("input|class:link-form-input-accent-rgb-r-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:255,tabindex:1,disabled");
      var accentRgbGWrap = helper.node("div|class:form-wrap");
      var accentRgbGLabel = helper.node("label:Green|for:link-form-input-accent-rgb-g-range,class:form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0 disabled");
      var accentRgbGGroup = helper.node("div|class:form-group form-group-block");
      var accentRgbGRange = helper.node("input|class:link-form-input-accent-rgb-g-range mr-3,id:link-form-input-accent-rgb-g-range,type:range,name:link-form-input-accent-rgb-g-range,value:0,min:0,max:255,tabindex:1,disabled");
      var accentRgbGNumber = helper.node("input|class:link-form-input-accent-rgb-g-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:255,tabindex:1,disabled");
      var accentRgbBWrap = helper.node("div|class:form-wrap");
      var accentRgbBLabel = helper.node("label:Blue|for:link-form-input-accent-rgb-b-range,class:form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0 disabled");
      var accentRgbBGroup = helper.node("div|class:form-group form-group-block");
      var accentRgbBRange = helper.node("input|class:link-form-input-accent-rgb-b-range mr-3,id:link-form-input-accent-rgb-b-range,type:range,name:link-form-input-accent-rgb-b-range,value:0,min:0,max:255,tabindex:1,disabled");
      var accentRgbBNumber = helper.node("input|class:link-form-input-accent-rgb-b-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:255,tabindex:1,disabled");

      // background image
      var imageInputWrap = helper.node("div|class:form-wrap");
      var imageLabel = helper.node("label:Background image|for:link-form-image");
      var imageInput = helper.node("input|type:text,class:link-form-image,id:link-form-image,placeholder:https://www.example.com/,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
      var imageInputHelper = helper.node("div|class:form-helper");
      var imageInputHelperItem = helper.makeNode({
        tag: "p",
        text: "Be sure to use the full URL and include \"http://\" or \"https://\".",
        attr: [{
          key: "class",
          value: "form-helper-item"
        }]
      });

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
      displayImageRadiotWrap.appendChild(displayImageRadio);
      displayImageLable.appendChild(displayImageLableIcon);
      displayImageLable.appendChild(displayImageLableText);
      displayImageRadiotWrap.appendChild(displayImageLable);
      displayImageFormIndentWrap.appendChild(displayImageFormIndent);
      displayImageInputWrap.appendChild(displayImageInput);
      displayImageFormIndent.appendChild(displayImageInputWrap);
      displayImageFormIndentWrap.appendChild(displayImageFormIndent);
      fieldset.appendChild(displayImageRadiotWrap);
      fieldset.appendChild(displayImageFormIndentWrap);
      displayImageHelper.appendChild(displayImageHelperItem);
      displayImageFormIndent.appendChild(displayImageHelper);

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

      colorLabelWrap.appendChild(colorLabel);
      fieldset.appendChild(colorLabelWrap);
      colorThemeRadioWrap.appendChild(colorThemeRadio);
      colorThemeLabel.appendChild(colorThemeLabelIcon);
      colorThemeLabelBlock.appendChild(colorThemeLabelBlockItem1);
      colorThemeLabelBlock.appendChild(colorThemeLabelBlockItem2);
      colorThemeLabel.appendChild(colorThemeLabelBlock);
      colorThemeRadioWrap.appendChild(colorThemeLabel);
      fieldset.appendChild(colorThemeRadioWrap);
      colorCustomInputWrap.appendChild(colorCustomRadio);
      colorCustomLabel.appendChild(colorCustomLabelIcon);
      colorCustomBlock.appendChild(colorCustomBlockItem1);
      colorCustomBlock.appendChild(colorCustomBlockItem2);
      colorCustomLabel.appendChild(colorCustomBlock);
      colorCustomInputWrap.appendChild(colorCustomLabel);
      fieldset.appendChild(colorCustomInputWrap);
      colorColorCollapseButton.appendChild(colorColorCollapseButtonIcon);
      colorColorFormGroup.appendChild(colorColorPicker);
      colorColorFormGroup.appendChild(colorColorHex);
      colorColorFormGroup.appendChild(colorColorCollapseButton);
      colorColorInputWrap.appendChild(colorColorFormGroup);
      colorColorFormIndent.appendChild(colorColorInputWrap);

      colorColorCollapse.appendChild(helper.node("hr"));

      colorHslHGroup.appendChild(colorHslHLabel);
      colorHslHGroup.appendChild(colorHslHRange);
      colorHslHGroup.appendChild(colorHslHNumber);
      colorHslHWrap.appendChild(colorHslHGroup);
      colorColorCollapse.appendChild(colorHslHWrap);

      colorHslSGroup.appendChild(colorHslSLabel);
      colorHslSGroup.appendChild(colorHslSRange);
      colorHslSGroup.appendChild(colorHslSNumber);
      colorHslSWrap.appendChild(colorHslSGroup);
      colorColorCollapse.appendChild(colorHslSWrap);

      colorHslLGroup.appendChild(colorHslLLabel);
      colorHslLGroup.appendChild(colorHslLRange);
      colorHslLGroup.appendChild(colorHslLNumber);
      colorHslLWrap.appendChild(colorHslLGroup);
      colorColorCollapse.appendChild(colorHslLWrap);

      colorColorCollapse.appendChild(helper.node("hr"));

      colorRgbRGroup.appendChild(colorRgbRLabel);
      colorRgbRGroup.appendChild(colorRgbRRange);
      colorRgbRGroup.appendChild(colorRgbRNumber);
      colorRgbRWrap.appendChild(colorRgbRGroup);
      colorColorCollapse.appendChild(colorRgbRWrap);

      colorRgbGGroup.appendChild(colorRgbGLabel);
      colorRgbGGroup.appendChild(colorRgbGRange);
      colorRgbGGroup.appendChild(colorRgbGNumber);
      colorRgbGWrap.appendChild(colorRgbGGroup);
      colorColorCollapse.appendChild(colorRgbGWrap);

      colorRgbBGroup.appendChild(colorRgbBLabel);
      colorRgbBGroup.appendChild(colorRgbBRange);
      colorRgbBGroup.appendChild(colorRgbBNumber);
      colorRgbBWrap.appendChild(colorRgbBGroup);
      colorColorCollapse.appendChild(colorRgbBWrap);

      colorColorFormIndent.appendChild(colorColorCollapse);

      colorColorFormIndentWrap.appendChild(colorColorFormIndent);
      fieldset.appendChild(colorColorFormIndentWrap);

      fieldset.appendChild(helper.node("hr"));

      accentLabelWrap.appendChild(accentLabel);
      fieldset.appendChild(accentLabelWrap);
      accentThemeRadioWrap.appendChild(accentThemeRadio);
      accentThemeLabel.appendChild(accentThemeLabelIcon);
      accentThemeLabelBlock.appendChild(accentThemeLabelBlockItem1);
      accentThemeLabelBlock.appendChild(accentThemeLabelBlockItem2);
      accentThemeLabel.appendChild(accentThemeLabelBlock);
      accentThemeRadioWrap.appendChild(accentThemeLabel);
      fieldset.appendChild(accentThemeRadioWrap);
      accentCustomInputWrap.appendChild(accentCustomRadio);
      accentCustomLabel.appendChild(accentCustomLabelIcon);
      accentCustomLabelBlock.appendChild(accentCustomLabelBlockItem1);
      accentCustomLabelBlock.appendChild(accentCustomLabelBlockItem2);
      accentCustomLabel.appendChild(accentCustomLabelBlock);
      accentCustomInputWrap.appendChild(accentCustomLabel);
      fieldset.appendChild(accentCustomInputWrap);
      accentColorCollapseButton.appendChild(accentColorCollapseButtonIcon)
      accentColorFormGroup.appendChild(accentColorPicker);
      accentColorFormGroup.appendChild(accentColorHex);
      accentColorFormGroup.appendChild(accentColorCollapseButton);
      accentColorInputWrap.appendChild(accentColorFormGroup);
      accentColorFormIndent.appendChild(accentColorInputWrap);

      accentColorCollapse.appendChild(helper.node("hr"));

      accentHslHGroup.appendChild(accentHslHLabel);
      accentHslHGroup.appendChild(accentHslHRange);
      accentHslHGroup.appendChild(accentHslHNumber);
      accentHslHWrap.appendChild(accentHslHGroup);
      accentColorCollapse.appendChild(accentHslHWrap);

      accentHslSGroup.appendChild(accentHslSLabel);
      accentHslSGroup.appendChild(accentHslSRange);
      accentHslSGroup.appendChild(accentHslSNumber);
      accentHslSWrap.appendChild(accentHslSGroup);
      accentColorCollapse.appendChild(accentHslSWrap);

      accentHslLGroup.appendChild(accentHslLLabel);
      accentHslLGroup.appendChild(accentHslLRange);
      accentHslLGroup.appendChild(accentHslLNumber);
      accentHslLWrap.appendChild(accentHslLGroup);
      accentColorCollapse.appendChild(accentHslLWrap);

      accentColorCollapse.appendChild(helper.node("hr"));

      accentRgbRGroup.appendChild(accentRgbRLabel);
      accentRgbRGroup.appendChild(accentRgbRRange);
      accentRgbRGroup.appendChild(accentRgbRNumber);
      accentRgbRWrap.appendChild(accentRgbRGroup);
      accentColorCollapse.appendChild(accentRgbRWrap);

      accentRgbGGroup.appendChild(accentRgbGLabel);
      accentRgbGGroup.appendChild(accentRgbGRange);
      accentRgbGGroup.appendChild(accentRgbGNumber);
      accentRgbGWrap.appendChild(accentRgbGGroup);
      accentColorCollapse.appendChild(accentRgbGWrap);

      accentRgbBGroup.appendChild(accentRgbBLabel);
      accentRgbBGroup.appendChild(accentRgbBRange);
      accentRgbBGroup.appendChild(accentRgbBNumber);
      accentRgbBWrap.appendChild(accentRgbBGroup);
      accentColorCollapse.appendChild(accentRgbBWrap);

      accentColorFormIndent.appendChild(accentColorCollapse);

      accentColorFormIndentWrap.appendChild(accentColorFormIndent);
      fieldset.appendChild(accentColorFormIndentWrap);

      fieldset.appendChild(helper.node("hr"));

      imageInputWrap.appendChild(imageLabel);
      imageInputWrap.appendChild(imageInput);
      fieldset.appendChild(imageInputWrap);
      imageInputHelper.appendChild(imageInputHelperItem);
      fieldset.appendChild(imageInputHelper);

      form.appendChild(fieldset);

      var makeGroupOptions = function() {
        if (bookmarks.get().length > 0) {
          bookmarks.get().forEach(function(arrayItem, index) {
            var name;
            if (helper.checkIfValidString(arrayItem.name.text)) {
              name = arrayItem.name.text;
            } else {
              name = "Unnamed group " + (index + 1);
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
        if (stagedLink.link.visual.display == "letter") {
          displayLetterRadio.checked = true;
          displayIconRadio.checked = false;
          displayImageRadio.checked = false;
          displayLetterInput.removeAttribute("disabled");
          displayIconInput.setAttribute("disabled", "");
          displayImageInput.setAttribute("disabled", "");
          helper.addClass(displayIconFormGroupText, "disabled");
          helper.addClass(displayIconHelperItem, "disabled");
          displayIconFormGroupClear.setAttribute("disabled", "");
          displayIconFormGroupText.tabIndex = -1;
          displayImageInput.setAttribute("disabled", "");
          helper.addClass(displayImageHelperItem, "disabled");
        } else if (stagedLink.link.visual.display == "icon") {
          displayLetterRadio.checked = false;
          displayIconRadio.checked = true;
          displayImageRadio.checked = false;
          displayLetterInput.setAttribute("disabled", "");
          displayIconInput.removeAttribute("disabled");
          displayImageInput.setAttribute("disabled", "");
          helper.removeClass(displayIconFormGroupText, "disabled");
          helper.removeClass(displayIconHelperItem, "disabled");
          displayIconFormGroupClear.removeAttribute("disabled");
          displayIconFormGroupText.tabIndex = 1;
          displayImageInput.setAttribute("disabled", "");
          helper.addClass(displayImageHelperItem, "disabled");
        } else if (stagedLink.link.visual.display == "image") {
          displayLetterRadio.checked = false;
          displayIconRadio.checked = false;
          displayImageRadio.checked = true;
          displayLetterInput.setAttribute("disabled", "");
          displayIconInput.setAttribute("disabled", "");
          displayImageInput.setAttribute("disabled", "");
          helper.addClass(displayIconFormGroupText, "disabled");
          helper.addClass(displayIconHelperItem, "disabled");
          displayIconFormGroupClear.setAttribute("disabled", "");
          displayIconFormGroupText.tabIndex = -1;
          displayImageInput.removeAttribute("disabled");
          helper.removeClass(displayImageHelperItem, "disabled");
        };

        if (helper.checkIfValidString(stagedLink.link.visual.icon.prefix) && helper.checkIfValidString(stagedLink.link.visual.icon.name) && helper.checkIfValidString(stagedLink.link.visual.icon.label)) {
          displayIconFormGroupText.appendChild(helper.node("span|class:link-form-icon " + stagedLink.link.visual.icon.prefix + " fa-" + stagedLink.link.visual.icon.name));
        };
        displayLetterInput.value = stagedLink.link.visual.letter;
        displayIconInput.value = stagedLink.link.visual.icon.label;
        displayImageInput.value = stagedLink.link.visual.image;
        nameInput.value = stagedLink.link.name;
        urlInput.value = stagedLink.link.url;
        if (stagedLink.link.color.by == "custom") {
          colorThemeRadio.checked = false;
          colorCustomRadio.checked = true;
          colorColorPicker.removeAttribute("disabled");
          colorColorHex.removeAttribute("disabled");
          colorColorCollapseButton.removeAttribute("disabled");
          helper.removeClass(colorHslHLabel, "disabled");
          colorHslHRange.removeAttribute("disabled");
          colorHslHNumber.removeAttribute("disabled");
          helper.removeClass(colorHslSLabel, "disabled");
          colorHslSRange.removeAttribute("disabled");
          colorHslSNumber.removeAttribute("disabled");
          helper.removeClass(colorHslLLabel, "disabled");
          colorHslLRange.removeAttribute("disabled");
          colorHslLNumber.removeAttribute("disabled");
          helper.removeClass(colorRgbRLabel, "disabled");
          colorRgbRRange.removeAttribute("disabled");
          colorRgbRNumber.removeAttribute("disabled");
          helper.removeClass(colorRgbGLabel, "disabled");
          colorRgbGRange.removeAttribute("disabled");
          colorRgbGNumber.removeAttribute("disabled");
          helper.removeClass(colorRgbBLabel, "disabled");
          colorRgbBRange.removeAttribute("disabled");
          colorRgbBNumber.removeAttribute("disabled");
        } else {
          colorThemeRadio.checked = true;
          colorCustomRadio.checked = false;
          colorColorPicker.setAttribute("disabled", "");
          colorColorHex.setAttribute("disabled", "");
          colorColorCollapseButton.setAttribute("disabled", "");
          helper.addClass(colorHslHLabel, "disabled", "");
          colorHslHRange.setAttribute("disabled", "");
          colorHslHNumber.setAttribute("disabled", "");
          helper.addClass(colorHslSLabel, "disabled", "");
          colorHslSRange.setAttribute("disabled", "");
          colorHslSNumber.setAttribute("disabled", "");
          helper.addClass(colorHslLLabel, "disabled", "");
          colorHslLRange.setAttribute("disabled", "");
          colorHslLNumber.setAttribute("disabled", "");
          helper.addClass(colorRgbRLabel, "disabled", "");
          colorRgbRRange.setAttribute("disabled", "");
          colorRgbRNumber.setAttribute("disabled", "");
          helper.addClass(colorRgbGLabel, "disabled", "");
          colorRgbGRange.setAttribute("disabled", "");
          colorRgbGNumber.setAttribute("disabled", "");
          helper.addClass(colorRgbBLabel, "disabled", "");
          colorRgbBRange.setAttribute("disabled", "");
          colorRgbBNumber.setAttribute("disabled", "");
        };
        colorColorPicker.value = helper.convertColor.rgb.hex(stagedLink.link.color.rgb);
        colorColorHex.value = helper.convertColor.rgb.hex(stagedLink.link.color.rgb);
        colorHslHRange.value = stagedLink.link.color.hsl.h;
        colorHslHNumber.value = stagedLink.link.color.hsl.h;
        colorHslSRange.value = stagedLink.link.color.hsl.s;
        colorHslSNumber.value = stagedLink.link.color.hsl.s;
        colorHslLRange.value = stagedLink.link.color.hsl.l;
        colorHslLNumber.value = stagedLink.link.color.hsl.l;
        colorRgbRRange.value = stagedLink.link.color.rgb.r;
        colorRgbRNumber.value = stagedLink.link.color.rgb.r;
        colorRgbGRange.value = stagedLink.link.color.rgb.g;
        colorRgbGNumber.value = stagedLink.link.color.rgb.g;
        colorRgbBRange.value = stagedLink.link.color.rgb.b;
        colorRgbBNumber.value = stagedLink.link.color.rgb.b;
        if (stagedLink.link.accent.by == "custom") {
          accentThemeRadio.checked = false;
          accentCustomRadio.checked = true;
          accentColorPicker.removeAttribute("disabled");
          accentColorHex.removeAttribute("disabled");
          accentColorCollapseButton.removeAttribute("disabled");
          helper.removeClass(accentHslHLabel, "disabled");
          accentHslHRange.removeAttribute("disabled");
          accentHslHNumber.removeAttribute("disabled");
          helper.removeClass(accentHslSLabel, "disabled");
          accentHslSRange.removeAttribute("disabled");
          accentHslSNumber.removeAttribute("disabled");
          helper.removeClass(accentHslLLabel, "disabled");
          accentHslLRange.removeAttribute("disabled");
          accentHslLNumber.removeAttribute("disabled");
          helper.removeClass(accentRgbRLabel, "disabled");
          accentRgbRRange.removeAttribute("disabled");
          accentRgbRNumber.removeAttribute("disabled");
          helper.removeClass(accentRgbGLabel, "disabled");
          accentRgbGRange.removeAttribute("disabled");
          accentRgbGNumber.removeAttribute("disabled");
          helper.removeClass(accentRgbBLabel, "disabled");
          accentRgbBRange.removeAttribute("disabled");
          accentRgbBNumber.removeAttribute("disabled");
        } else {
          accentThemeRadio.checked = true;
          accentCustomRadio.checked = false;
          accentColorPicker.setAttribute("disabled", "");
          accentColorHex.setAttribute("disabled", "");
          accentColorCollapseButton.setAttribute("disabled", "");
          helper.addClass(accentHslHLabel, "disabled", "");
          accentHslHRange.setAttribute("disabled", "");
          accentHslHNumber.setAttribute("disabled", "");
          helper.addClass(accentHslSLabel, "disabled", "");
          accentHslSRange.setAttribute("disabled", "");
          accentHslSNumber.setAttribute("disabled", "");
          helper.addClass(accentHslLLabel, "disabled", "");
          accentHslLRange.setAttribute("disabled", "");
          accentHslLNumber.setAttribute("disabled", "");
          helper.addClass(accentRgbRLabel, "disabled", "");
          accentRgbRRange.setAttribute("disabled", "");
          accentRgbRNumber.setAttribute("disabled", "");
          helper.addClass(accentRgbGLabel, "disabled", "");
          accentRgbGRange.setAttribute("disabled", "");
          accentRgbGNumber.setAttribute("disabled", "");
          helper.addClass(accentRgbBLabel, "disabled", "");
          accentRgbBRange.setAttribute("disabled", "");
          accentRgbBNumber.setAttribute("disabled", "");
        };
        accentColorPicker.value = helper.convertColor.rgb.hex(stagedLink.link.accent.rgb);
        accentColorHex.value = helper.convertColor.rgb.hex(stagedLink.link.accent.rgb);
        accentHslHRange.value = stagedLink.link.accent.hsl.h;
        accentHslHNumber.value = stagedLink.link.accent.hsl.h;
        accentHslSRange.value = stagedLink.link.accent.hsl.s;
        accentHslSNumber.value = stagedLink.link.accent.hsl.s;
        accentHslLRange.value = stagedLink.link.accent.hsl.l;
        accentHslLNumber.value = stagedLink.link.accent.hsl.l;
        accentRgbRRange.value = stagedLink.link.accent.rgb.r;
        accentRgbRNumber.value = stagedLink.link.accent.rgb.r;
        accentRgbGRange.value = stagedLink.link.accent.rgb.g;
        accentRgbGNumber.value = stagedLink.link.accent.rgb.g;
        accentRgbBRange.value = stagedLink.link.accent.rgb.b;
        accentRgbBNumber.value = stagedLink.link.accent.rgb.b;
        imageInput.value = stagedLink.link.image;
      };

      var mirror = {
        delay: null,
        minMax: function(input) {
          var value = parseInt(input.value, 10);
          var min = parseInt(input.min, 10);
          var max = parseInt(input.max, 10);
          if (value < min) {
            value = min;
          };
          if (value > max) {
            value = max;
          };
          if (isNaN(value)) {
            value = 0;
          };
          return value;
        },
        data: {
          accent: {
            by: {
              hsl: function() {
                stagedLink.link.accent.rgb = helper.convertColor.hsl.rgb(stagedLink.link.accent.hsl);
                stagedLink.link.accent.rgb.r = Math.round(stagedLink.link.accent.rgb.r);
                stagedLink.link.accent.rgb.g = Math.round(stagedLink.link.accent.rgb.g);
                stagedLink.link.accent.rgb.b = Math.round(stagedLink.link.accent.rgb.b);
              },
              rgb: function() {
                stagedLink.link.accent.hsl = helper.convertColor.rgb.hsl(stagedLink.link.accent.rgb);
                stagedLink.link.accent.hsl.h = Math.round(stagedLink.link.accent.hsl.h);
                stagedLink.link.accent.hsl.s = Math.round(stagedLink.link.accent.hsl.s);
                stagedLink.link.accent.hsl.l = Math.round(stagedLink.link.accent.hsl.l);
              },
              hex: function(value) {
                stagedLink.link.accent.rgb = helper.convertColor.hex.rgb(value);
                stagedLink.link.accent.rgb.r = Math.round(stagedLink.link.accent.rgb.r);
                stagedLink.link.accent.rgb.g = Math.round(stagedLink.link.accent.rgb.g);
                stagedLink.link.accent.rgb.b = Math.round(stagedLink.link.accent.rgb.b);
                stagedLink.link.accent.hsl = helper.convertColor.rgb.hsl(stagedLink.link.accent.rgb);
                stagedLink.link.accent.hsl.h = Math.round(stagedLink.link.accent.hsl.h);
                stagedLink.link.accent.hsl.s = Math.round(stagedLink.link.accent.hsl.s);
                stagedLink.link.accent.hsl.l = Math.round(stagedLink.link.accent.hsl.l);
              }
            }
          },
          color: {
            by: {
              hsl: function() {
                stagedLink.link.color.rgb = helper.convertColor.hsl.rgb(stagedLink.link.color.hsl);
                stagedLink.link.color.rgb.r = Math.round(stagedLink.link.color.rgb.r);
                stagedLink.link.color.rgb.g = Math.round(stagedLink.link.color.rgb.g);
                stagedLink.link.color.rgb.b = Math.round(stagedLink.link.color.rgb.b);
              },
              rgb: function() {
                stagedLink.link.color.hsl = helper.convertColor.rgb.hsl(stagedLink.link.color.rgb);
                stagedLink.link.color.hsl.h = Math.round(stagedLink.link.color.hsl.h);
                stagedLink.link.color.hsl.s = Math.round(stagedLink.link.color.hsl.s);
                stagedLink.link.color.hsl.l = Math.round(stagedLink.link.color.hsl.l);
              },
              hex: function(value) {
                stagedLink.link.color.rgb = helper.convertColor.hex.rgb(value);
                stagedLink.link.color.rgb.r = Math.round(stagedLink.link.color.rgb.r);
                stagedLink.link.color.rgb.g = Math.round(stagedLink.link.color.rgb.g);
                stagedLink.link.color.rgb.b = Math.round(stagedLink.link.color.rgb.b);
                stagedLink.link.color.hsl = helper.convertColor.rgb.hsl(stagedLink.link.color.rgb);
                stagedLink.link.color.hsl.h = Math.round(stagedLink.link.color.hsl.h);
                stagedLink.link.color.hsl.s = Math.round(stagedLink.link.color.hsl.s);
                stagedLink.link.color.hsl.l = Math.round(stagedLink.link.color.hsl.l);
              }
            }
          }
        },
        inputs: {
          accent: function() {
            return [{
              element: accentColorPicker,
              value: stagedLink.link.accent.rgb
            }, {
              element: accentColorHex,
              value: stagedLink.link.accent.rgb
            }, {
              element: accentHslHRange,
              value: stagedLink.link.accent.hsl.h
            }, {
              element: accentHslHNumber,
              value: stagedLink.link.accent.hsl.h
            }, {
              element: accentHslSRange,
              value: stagedLink.link.accent.hsl.s
            }, {
              element: accentHslSNumber,
              value: stagedLink.link.accent.hsl.s
            }, {
              element: accentHslLRange,
              value: stagedLink.link.accent.hsl.l
            }, {
              element: accentHslLNumber,
              value: stagedLink.link.accent.hsl.l
            }, {
              element: accentRgbRRange,
              value: stagedLink.link.accent.rgb.r
            }, {
              element: accentRgbRNumber,
              value: stagedLink.link.accent.rgb.r
            }, {
              element: accentRgbGRange,
              value: stagedLink.link.accent.rgb.g
            }, {
              element: accentRgbGNumber,
              value: stagedLink.link.accent.rgb.g
            }, {
              element: accentRgbBRange,
              value: stagedLink.link.accent.rgb.b
            }, {
              element: accentRgbBNumber,
              value: stagedLink.link.accent.rgb.b
            }]
          },
          color: function() {
            return [{
              element: colorColorPicker,
              value: stagedLink.link.color.rgb
            }, {
              element: colorColorHex,
              value: stagedLink.link.color.rgb
            }, {
              element: colorHslHRange,
              value: stagedLink.link.color.hsl.h
            }, {
              element: colorHslHNumber,
              value: stagedLink.link.color.hsl.h
            }, {
              element: colorHslSRange,
              value: stagedLink.link.color.hsl.s
            }, {
              element: colorHslSNumber,
              value: stagedLink.link.color.hsl.s
            }, {
              element: colorHslLRange,
              value: stagedLink.link.color.hsl.l
            }, {
              element: colorHslLNumber,
              value: stagedLink.link.color.hsl.l
            }, {
              element: colorRgbRRange,
              value: stagedLink.link.color.rgb.r
            }, {
              element: colorRgbRNumber,
              value: stagedLink.link.color.rgb.r
            }, {
              element: colorRgbGRange,
              value: stagedLink.link.color.rgb.g
            }, {
              element: colorRgbGNumber,
              value: stagedLink.link.color.rgb.g
            }, {
              element: colorRgbBRange,
              value: stagedLink.link.color.rgb.b
            }, {
              element: colorRgbBNumber,
              value: stagedLink.link.color.rgb.b
            }]
          }
        },
        value: function(origin, targets) {
          targets.forEach(function(arrayItem, index) {
            if (arrayItem.element != origin) {
              switch (arrayItem.element.type) {
                case "color":
                  arrayItem.element.value = helper.convertColor.rgb.hex(arrayItem.value);
                  break;

                case "text":
                  arrayItem.element.value = helper.convertColor.rgb.hex(arrayItem.value);
                  break;

                case "number":
                  arrayItem.element.value = arrayItem.value;
                  break;

                case "range":
                  arrayItem.element.value = arrayItem.value;
                  break;
              };
            };
          });
        }
      };

      var collapse = {
        color: function() {
          if (mod.collapse.form.item.color) {
            helper.addClass(colorColorCollapse, "active");
            helper.addClass(colorColorCollapseButton, "active");
          } else {
            helper.removeClass(colorColorCollapse, "active");
            helper.removeClass(colorColorCollapseButton, "active");
          };
        },
        accent: function() {
          if (mod.collapse.form.item.accent) {
            helper.addClass(accentColorCollapse, "active");
            helper.addClass(accentColorCollapseButton, "active");
          } else {
            helper.removeClass(accentColorCollapse, "active");
            helper.removeClass(accentColorCollapseButton, "active");
          };
        }
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
        stagedLink.link.visual.display = this.value;
        displayLetterInput.removeAttribute("disabled");
        displayIconInput.setAttribute("disabled", "");
        displayImageInput.setAttribute("disabled", "");
        helper.addClass(displayIconFormGroupText, "disabled");
        helper.addClass(displayIconHelperItem, "disabled");
        displayIconFormGroupClear.setAttribute("disabled", "");
        displayIconFormGroupText.tabIndex = -1;
        displayImageInput.setAttribute("disabled", "");
        helper.addClass(displayImageHelperItem, "disabled");
      }, false);
      displayIconRadio.addEventListener("change", function(event) {
        stagedLink.link.visual.display = this.value;
        displayLetterInput.setAttribute("disabled", "");
        displayIconInput.removeAttribute("disabled");
        displayImageInput.setAttribute("disabled", "");
        helper.removeClass(displayIconFormGroupText, "disabled");
        helper.removeClass(displayIconHelperItem, "disabled");
        displayIconFormGroupClear.removeAttribute("disabled");
        displayIconFormGroupText.tabIndex = 1;
        displayImageInput.setAttribute("disabled", "");
        helper.addClass(displayImageHelperItem, "disabled");
      }, false);
      displayImageRadio.addEventListener("change", function(event) {
        stagedLink.link.visual.display = this.value;
        displayLetterInput.setAttribute("disabled", "");
        displayIconInput.setAttribute("disabled", "");
        displayImageInput.setAttribute("disabled", "");
        helper.addClass(displayIconFormGroupText, "disabled");
        helper.addClass(displayIconHelperItem, "disabled");
        displayIconFormGroupClear.setAttribute("disabled", "");
        displayIconFormGroupText.tabIndex = -1;
        displayImageInput.removeAttribute("disabled");
        helper.removeClass(displayImageHelperItem, "disabled");
      }, false);
      displayLetterInput.addEventListener("input", function(event) {
        stagedLink.link.visual.letter = this.value;
      }, false);
      nameInput.addEventListener("input", function(event) {
        stagedLink.link.name = this.value;
      }, false);
      displayImageInput.addEventListener("input", function(event) {
        stagedLink.link.visual.image = this.value;
      }, false);
      urlInput.addEventListener("input", function(event) {
        stagedLink.link.url = this.value;
      }, false);
      displayIconFormGroupClear.addEventListener("click", function(event) {
        stagedLink.link.visual.icon.name = null;
        stagedLink.link.visual.icon.prefix = null;
        stagedLink.link.visual.icon.label = null;
        var existingIcon = helper.e(".link-form-icon");
        if (existingIcon) {
          existingIcon.remove();
        };
        displayIconInput.value = "";
      }, false);

      colorThemeRadio.addEventListener("change", function() {
        stagedLink.link.color.by = this.value;
        colorColorPicker.setAttribute("disabled", "");
        colorColorHex.setAttribute("disabled", "");
        colorColorCollapseButton.setAttribute("disabled", "");
        helper.addClass(colorHslHLabel, "disabled", "");
        colorHslHRange.setAttribute("disabled", "");
        colorHslHNumber.setAttribute("disabled", "");
        helper.addClass(colorHslSLabel, "disabled", "");
        colorHslSRange.setAttribute("disabled", "");
        colorHslSNumber.setAttribute("disabled", "");
        helper.addClass(colorHslLLabel, "disabled", "");
        colorHslLRange.setAttribute("disabled", "");
        colorHslLNumber.setAttribute("disabled", "");
        helper.addClass(colorRgbRLabel, "disabled", "");
        colorRgbRRange.setAttribute("disabled", "");
        colorRgbRNumber.setAttribute("disabled", "");
        helper.addClass(colorRgbGLabel, "disabled", "");
        colorRgbGRange.setAttribute("disabled", "");
        colorRgbGNumber.setAttribute("disabled", "");
        helper.addClass(colorRgbBLabel, "disabled", "");
        colorRgbBRange.setAttribute("disabled", "");
        colorRgbBNumber.setAttribute("disabled", "");
      }, false);
      colorCustomRadio.addEventListener("change", function() {
        stagedLink.link.color.by = this.value;
        colorColorPicker.removeAttribute("disabled");
        colorColorHex.removeAttribute("disabled");
        colorColorCollapseButton.removeAttribute("disabled");
        helper.removeClass(colorHslHLabel, "disabled");
        colorHslHRange.removeAttribute("disabled");
        colorHslHNumber.removeAttribute("disabled");
        helper.removeClass(colorHslSLabel, "disabled");
        colorHslSRange.removeAttribute("disabled");
        colorHslSNumber.removeAttribute("disabled");
        helper.removeClass(colorHslLLabel, "disabled");
        colorHslLRange.removeAttribute("disabled");
        colorHslLNumber.removeAttribute("disabled");
        helper.removeClass(colorRgbRLabel, "disabled");
        colorRgbRRange.removeAttribute("disabled");
        colorRgbRNumber.removeAttribute("disabled");
        helper.removeClass(colorRgbGLabel, "disabled");
        colorRgbGRange.removeAttribute("disabled");
        colorRgbGNumber.removeAttribute("disabled");
        helper.removeClass(colorRgbBLabel, "disabled");
        colorRgbBRange.removeAttribute("disabled");
        colorRgbBNumber.removeAttribute("disabled");
      }, false);

      colorColorPicker.addEventListener("change", function() {
        mirror.data.color.by.hex(this.value);
        mirror.value(this, mirror.inputs.color());
      }, false);
      colorColorHex.addEventListener("input", function() {
        if (helper.isHexNumber(this.value)) {
          mirror.data.color.by.hex(this.value);
          mirror.value(this, mirror.inputs.color());
        };
      }, false);
      colorColorCollapseButton.addEventListener("click", function() {
        if (mod.collapse.form.item.color) {
          mod.collapse.form.item.color = false;
        } else {
          mod.collapse.form.item.color = true;
        };
        collapse.color();
      });
      colorHslHRange.addEventListener("input", function() {
        stagedLink.link.color.hsl.h = parseInt(this.value, 10);
        mirror.data.color.by.hsl();
        mirror.value(this, mirror.inputs.color());
      });
      colorHslHNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.color.hsl.h;
        };
        stagedLink.link.color.hsl.h = mirror.minMax(this);
        mirror.data.color.by.hsl();
        mirror.value(this, mirror.inputs.color());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 1000, this);
      });
      colorHslSRange.addEventListener("input", function() {
        stagedLink.link.color.hsl.s = parseInt(this.value, 10);
        mirror.data.color.by.hsl();
        mirror.value(this, mirror.inputs.color());
      });
      colorHslSNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.color.hsl.s
        };
        stagedLink.link.color.hsl.s = mirror.minMax(this);
        mirror.data.color.by.hsl();
        mirror.value(this, mirror.inputs.color());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 1000, this);
      });
      colorHslLRange.addEventListener("input", function() {
        stagedLink.link.color.hsl.l = parseInt(this.value, 10);
        mirror.data.color.by.hsl();
        mirror.value(this, mirror.inputs.color());
      });
      colorHslLNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.color.hsl.l
        };
        stagedLink.link.color.hsl.l = mirror.minMax(this);
        mirror.data.color.by.hsl();
        mirror.value(this, mirror.inputs.color());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 1000, this);
      });
      colorRgbRRange.addEventListener("input", function() {
        stagedLink.link.color.rgb.r = parseInt(this.value, 10);
        mirror.data.color.by.rgb();
        mirror.value(this, mirror.inputs.color());
      });
      colorRgbRNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.color.rgb.r
        };
        stagedLink.link.color.rgb.r = mirror.minMax(this);
        mirror.data.color.by.rgb();
        mirror.value(this, mirror.inputs.color());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 1000, this);
      });
      colorRgbGRange.addEventListener("input", function() {
        stagedLink.link.color.rgb.g = parseInt(this.value, 10);
        mirror.data.color.by.rgb();
        mirror.value(this, mirror.inputs.color());
      });
      colorRgbGNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.color.rgb.g
        };
        stagedLink.link.color.rgb.g = mirror.minMax(this);
        mirror.data.color.by.rgb();
        mirror.value(this, mirror.inputs.color());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 1000, this);
      });
      colorRgbBRange.addEventListener("input", function() {
        stagedLink.link.color.rgb.b = parseInt(this.value, 10);
        mirror.data.color.by.rgb();
        mirror.value(this, mirror.inputs.color());
      });
      colorRgbBNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.color.rgb.b
        };
        stagedLink.link.color.rgb.b = mirror.minMax(this);
        mirror.data.color.by.rgb();
        mirror.value(this, mirror.inputs.color());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 1000, this);
      });

      accentThemeRadio.addEventListener("change", function() {
        stagedLink.link.accent.by = this.value;
        accentColorPicker.setAttribute("disabled", "");
        accentColorHex.setAttribute("disabled", "");
        accentColorCollapseButton.setAttribute("disabled", "");
        helper.addClass(accentHslHLabel, "disabled", "");
        accentHslHRange.setAttribute("disabled", "");
        accentHslHNumber.setAttribute("disabled", "");
        helper.addClass(accentHslSLabel, "disabled", "");
        accentHslSRange.setAttribute("disabled", "");
        accentHslSNumber.setAttribute("disabled", "");
        helper.addClass(accentHslLLabel, "disabled", "");
        accentHslLRange.setAttribute("disabled", "");
        accentHslLNumber.setAttribute("disabled", "");
        helper.addClass(accentRgbRLabel, "disabled", "");
        accentRgbRRange.setAttribute("disabled", "");
        accentRgbRNumber.setAttribute("disabled", "");
        helper.addClass(accentRgbGLabel, "disabled", "");
        accentRgbGRange.setAttribute("disabled", "");
        accentRgbGNumber.setAttribute("disabled", "");
        helper.addClass(accentRgbBLabel, "disabled", "");
        accentRgbBRange.setAttribute("disabled", "");
        accentRgbBNumber.setAttribute("disabled", "");
      }, false);
      accentCustomRadio.addEventListener("change", function() {
        stagedLink.link.accent.by = this.value;
        accentColorPicker.removeAttribute("disabled");
        accentColorHex.removeAttribute("disabled");
        accentColorCollapseButton.removeAttribute("disabled");
        helper.removeClass(accentHslHLabel, "disabled");
        accentHslHRange.removeAttribute("disabled");
        accentHslHNumber.removeAttribute("disabled");
        helper.removeClass(accentHslSLabel, "disabled");
        accentHslSRange.removeAttribute("disabled");
        accentHslSNumber.removeAttribute("disabled");
        helper.removeClass(accentHslLLabel, "disabled");
        accentHslLRange.removeAttribute("disabled");
        accentHslLNumber.removeAttribute("disabled");
        helper.removeClass(accentRgbRLabel, "disabled");
        accentRgbRRange.removeAttribute("disabled");
        accentRgbRNumber.removeAttribute("disabled");
        helper.removeClass(accentRgbGLabel, "disabled");
        accentRgbGRange.removeAttribute("disabled");
        accentRgbGNumber.removeAttribute("disabled");
        helper.removeClass(accentRgbBLabel, "disabled");
        accentRgbBRange.removeAttribute("disabled");
        accentRgbBNumber.removeAttribute("disabled");
      }, false);

      accentColorPicker.addEventListener("change", function() {
        mirror.data.accent.by.hex(this.value);
        mirror.value(this, mirror.inputs.accent());
      }, false);
      accentColorHex.addEventListener("input", function() {
        if (helper.isHexNumber(this.value)) {
          mirror.data.accent.by.hex(this.value);
          mirror.value(this, mirror.inputs.accent());
        };
      }, false);
      accentColorCollapseButton.addEventListener("click", function() {
        if (mod.collapse.form.item.accent) {
          mod.collapse.form.item.accent = false;
        } else {
          mod.collapse.form.item.accent = true;
        };
        collapse.accent();
      });
      accentHslHRange.addEventListener("input", function() {
        stagedLink.link.accent.hsl.h = parseInt(this.value, 10);
        mirror.data.accent.by.hsl();
        mirror.value(this, mirror.inputs.accent());
      });
      accentHslHNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.accent.hsl.h
        };
        stagedLink.link.accent.hsl.h = mirror.minMax(this);
        mirror.data.accent.by.hsl();
        mirror.value(this, mirror.inputs.accent());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 1000, this);
      });
      accentHslSRange.addEventListener("input", function() {
        stagedLink.link.accent.hsl.s = parseInt(this.value, 10);
        mirror.data.accent.by.hsl();
        mirror.value(this, mirror.inputs.accent());
      });
      accentHslSNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.accent.hsl.s
        };
        stagedLink.link.accent.hsl.s = mirror.minMax(this);
        mirror.data.accent.by.hsl();
        mirror.value(this, mirror.inputs.accent());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 1000, this);
      });
      accentHslLRange.addEventListener("input", function() {
        stagedLink.link.accent.hsl.l = parseInt(this.value, 10);
        mirror.data.accent.by.hsl();
        mirror.value(this, mirror.inputs.accent());
      });
      accentHslLNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.accent.hsl.l
        };
        stagedLink.link.accent.hsl.l = mirror.minMax(this);
        mirror.data.accent.by.hsl();
        mirror.value(this, mirror.inputs.accent());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 1000, this);
      });
      accentRgbRRange.addEventListener("input", function() {
        stagedLink.link.accent.rgb.r = parseInt(this.value, 10);
        mirror.data.accent.by.rgb();
        mirror.value(this, mirror.inputs.accent());
      });
      accentRgbRNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.accent.rgb.r
        };
        stagedLink.link.accent.rgb.r = mirror.minMax(this);
        mirror.data.accent.by.rgb();
        mirror.value(this, mirror.inputs.accent());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 1000, this);
      });
      accentRgbGRange.addEventListener("input", function() {
        stagedLink.link.accent.rgb.g = parseInt(this.value, 10);
        mirror.data.accent.by.rgb();
        mirror.value(this, mirror.inputs.accent());
      });
      accentRgbGNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.accent.rgb.g
        };
        stagedLink.link.accent.rgb.g = mirror.minMax(this);
        mirror.data.accent.by.rgb();
        mirror.value(this, mirror.inputs.accent());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 1000, this);
      });
      accentRgbBRange.addEventListener("input", function() {
        stagedLink.link.accent.rgb.b = parseInt(this.value, 10);
        mirror.data.accent.by.rgb();
        mirror.value(this, mirror.inputs.accent());
      });
      accentRgbBNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.accent.rgb.b
        };
        stagedLink.link.accent.rgb.b = mirror.minMax(this);
        mirror.data.accent.by.rgb();
        mirror.value(this, mirror.inputs.accent());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 1000, this);
      });
      imageInput.addEventListener("input", function(event) {
        stagedLink.link.image = this.value;
      }, false);
      autoSuggest.bind.input({
        input: displayIconInput,
        type: "fontawesomeIcon",
        postFocus: displayIconFormGroupText
      });

      return form;
    },
    formCollapse: function() {
      helper.eA(".link-form-collapse").forEach(function(arrayItem, index) {
        helper.addClass(arrayItem, "active");
        arrayItem.setAttribute("style", "--link-form-collapse-height:" + arrayItem.getBoundingClientRect().height + "px;");
        helper.removeClass(arrayItem, "active");
      });
    },
    display: {
      visual: {
        letter: {
          size: function() {
            var html = helper.e("html");
            html.style.setProperty("--link-item-display-letter-size", state.get.current().link.item.display.visual.letter.size + "em");
          }
        },
        icon: {
          size: function() {
            var html = helper.e("html");
            html.style.setProperty("--link-item-display-icon-size", state.get.current().link.item.display.visual.icon.size + "em");
          }
        },
        image: {
          size: function() {
            var html = helper.e("html");
            html.style.setProperty("--link-item-display-image-size", state.get.current().link.item.display.visual.image.size + "em");
          }
        },
        shadow: {
          size: function() {
            var html = helper.e("html");
            html.style.setProperty("--link-item-display-visual-shadow-size", state.get.current().link.item.display.visual.shadow.size);
          }
        }
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
    stagedLink.link.visual.icon.label = autoSuggestData.label;
    stagedLink.link.visual.icon.name = autoSuggestData.name;
    if (autoSuggestData.styles.includes("solid")) {
      stagedLink.link.visual.icon.prefix = "fas";
    } else if (autoSuggestData.styles.includes("brands")) {
      stagedLink.link.visual.icon.prefix = "fab";
    };
    var existingIcon = helper.e(".link-form-icon");
    if (existingIcon) {
      existingIcon.remove();
    };
    helper.e(".link-form-input-icon").value = autoSuggestData.label;
    helper.e(".link-form-text-icon").appendChild(helper.node("span|class:link-form-icon " + stagedLink.link.visual.icon.prefix + " fa-" + stagedLink.link.visual.icon.name));
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
        render.item.formCollapse();
        stagedLink.position.destination.item = helper.e(".link-form-position").selectedIndex;
      },
      close: function() {
        stagedLink.reset();
        autoSuggest.close();
        pagelock.unlock();
        mod.collapse.reset();
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
        if (helper.checkIfValidString(stagedLink.link.name)) {
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
        render.item.formCollapse();
      },
      close: function() {
        stagedLink.reset();
        autoSuggest.close();
        pagelock.unlock();
        mod.collapse.reset();
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
        if (helper.checkIfValidString(stagedGroup.group.name.text)) {
          heading = "Edit " + stagedGroup.group.name.text;
        } else {
          heading = "Edit unnamed group " + (stagedGroup.position.origin + 1);
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
      if (helper.checkIfValidString(stagedLink.link.name)) {
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
      if (helper.checkIfValidString(stagedGroup.group.name.text)) {
        heading = "Remove " + stagedGroup.group.name.text;
      } else {
        heading = "Remove unnamed group " + (stagedGroup.position.origin + 1);
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
    render.item.size();
    render.item.display.visual.letter.size();
    render.item.display.visual.icon.size();
    render.item.display.visual.image.size();
    render.item.display.visual.shadow.size();
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
