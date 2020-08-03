var link = (function() {

  var _timerLinkItemPreview = null;

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
      display: {
        direction: null,
        order: null,
        alignment: null,
        gutter: null,
        rotate: null,
        translate: {
          x: null,
          y: null
        },
        visual: {
          show: null,
          type: null,
          letter: {
            size: null,
            text: null
          },
          image: {
            size: null,
            url: null
          },
          icon: {
            size: null,
            name: null,
            prefix: null,
            label: null
          },
          shadow: {
            size: null
          }
        },
        name: {
          show: null,
          text: null,
          size: null
        }
      },
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
        },
        opacity: null
      },
      background: {
        show: null,
        type: null,
        opacity: null,
        image: {
          url: null
        },
        video: {
          url: null
        }
      },
      wide: null,
      tall: null,
      searchMatch: null,
      timeStamp: null
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
    stagedLink.link.display.direction = state.get.current().link.item.display.direction;
    stagedLink.link.display.order = state.get.current().link.item.display.order;
    stagedLink.link.display.alignment = state.get.current().link.item.display.alignment;
    stagedLink.link.display.gutter = state.get.current().link.item.display.gutter;
    stagedLink.link.display.rotate = state.get.current().link.item.display.rotate;
    stagedLink.link.display.translate.x = state.get.current().link.item.display.translate.x;
    stagedLink.link.display.translate.y = state.get.current().link.item.display.translate.y;
    stagedLink.link.display.visual.show = true;
    stagedLink.link.display.visual.type = "letter";
    stagedLink.link.display.visual.letter.size = state.get.current().link.item.display.visual.letter.size;
    stagedLink.link.display.visual.letter.text = "";
    stagedLink.link.display.visual.image.size = state.get.current().link.item.display.visual.image.size;
    stagedLink.link.display.visual.image.url = "";
    stagedLink.link.display.visual.icon.size = state.get.current().link.item.display.visual.icon.size;
    stagedLink.link.display.visual.icon.name = "";
    stagedLink.link.display.visual.icon.prefix = "";
    stagedLink.link.display.visual.icon.label = "";
    stagedLink.link.display.visual.shadow.size = state.get.current().link.item.display.visual.shadow.size;
    stagedLink.link.display.name.show = true;
    stagedLink.link.display.name.text = "";
    stagedLink.link.display.name.size = state.get.current().link.item.display.name.size;
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
    stagedLink.link.color.opacity = state.get.current().link.item.color.opacity;
    stagedLink.link.background.show = false;
    stagedLink.link.background.type = "image";
    stagedLink.link.background.opacity = state.get.current().link.item.background.opacity;
    stagedLink.link.background.image.url = "";
    stagedLink.link.background.video.url = "";
    stagedLink.link.wide = false;
    stagedLink.link.tall = false;
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
    stagedLink.link.display.direction = null;
    stagedLink.link.display.order = null;
    stagedLink.link.display.alignment = null;
    stagedLink.link.display.gutter = null;
    stagedLink.link.display.rotate = null;
    stagedLink.link.display.translate.x = null;
    stagedLink.link.display.translate.y = null;
    stagedLink.link.display.visual.show = null;
    stagedLink.link.display.visual.type = null;
    stagedLink.link.display.visual.letter.size = null;
    stagedLink.link.display.visual.letter.text = null;
    stagedLink.link.display.visual.image.size = null;
    stagedLink.link.display.visual.image.url = null;
    stagedLink.link.display.visual.icon.size = null;
    stagedLink.link.display.visual.icon.name = null;
    stagedLink.link.display.visual.icon.prefix = null;
    stagedLink.link.display.visual.icon.label = null;
    stagedLink.link.display.visual.shadow.size = null;
    stagedLink.link.display.name.show = null;
    stagedLink.link.display.name.text = null;
    stagedLink.link.display.name.size = null;
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
    stagedLink.link.color.opacity = null;
    stagedLink.link.background.show = null;
    stagedLink.link.background.type = null;
    stagedLink.link.background.opacity = null;
    stagedLink.link.background.image.url = null;
    stagedLink.link.background.video.url = null;
    stagedLink.link.wide = null;
    stagedLink.link.tall = null;
    stagedLink.link.searchMatch = null;
    stagedLink.link.timeStamp = null;
  };

  var mod = {};

  mod.item = {
    display: {
      alignment: function() {
        bookmarks.get().forEach(function(arrayItem, index) {
          arrayItem.items.forEach(function(arrayItem, index) {
            arrayItem.display.alignment = state.get.current().link.item.display.alignment;
          });
        });
      },
      rotate: function() {
        bookmarks.get().forEach(function(arrayItem, index) {
          arrayItem.items.forEach(function(arrayItem, index) {
            arrayItem.display.rotate = state.get.current().link.item.display.rotate;
          });
        });
      },
      translate: {
        x: function() {
          bookmarks.get().forEach(function(arrayItem, index) {
            arrayItem.items.forEach(function(arrayItem, index) {
              arrayItem.display.translate.x = state.get.current().link.item.display.translate.x;
            });
          });
        },
        y: function() {
          bookmarks.get().forEach(function(arrayItem, index) {
            arrayItem.items.forEach(function(arrayItem, index) {
              arrayItem.display.translate.y = state.get.current().link.item.display.translate.y;
            });
          });
        }
      },
      gutter: function() {
        bookmarks.get().forEach(function(arrayItem, index) {
          arrayItem.items.forEach(function(arrayItem, index) {
            arrayItem.display.gutter = state.get.current().link.item.display.gutter;
          });
        });
      },
      direction: function() {
        bookmarks.get().forEach(function(arrayItem, index) {
          arrayItem.items.forEach(function(arrayItem, index) {
            arrayItem.display.direction = state.get.current().link.item.display.direction;
          });
        });
      },
      order: function() {
        bookmarks.get().forEach(function(arrayItem, index) {
          arrayItem.items.forEach(function(arrayItem, index) {
            arrayItem.display.order = state.get.current().link.item.display.order;
          });
        });
      },
      visual: {
        show: function() {
          bookmarks.get().forEach(function(arrayItem, index) {
            arrayItem.items.forEach(function(arrayItem, index) {
              arrayItem.display.visual.show = true;
            });
          });
        },
        hide: function() {
          bookmarks.get().forEach(function(arrayItem, index) {
            arrayItem.items.forEach(function(arrayItem, index) {
              arrayItem.display.visual.show = false;
            });
          });
        },
        letter: {
          size: function() {
            bookmarks.get().forEach(function(arrayItem, index) {
              arrayItem.items.forEach(function(arrayItem, index) {
                arrayItem.display.visual.letter.size = state.get.current().link.item.display.visual.letter.size;
              });
            });
          }
        },
        icon: {
          size: function() {
            bookmarks.get().forEach(function(arrayItem, index) {
              arrayItem.items.forEach(function(arrayItem, index) {
                arrayItem.display.visual.icon.size = state.get.current().link.item.display.visual.icon.size;
              });
            });
          }
        },
        image: {
          size: function() {
            bookmarks.get().forEach(function(arrayItem, index) {
              arrayItem.items.forEach(function(arrayItem, index) {
                arrayItem.display.visual.image.size = state.get.current().link.item.display.visual.image.size;
              });
            });
          }
        },
        shadow: {
          size: function() {
            bookmarks.get().forEach(function(arrayItem, index) {
              arrayItem.items.forEach(function(arrayItem, index) {
                arrayItem.display.visual.shadow.size = state.get.current().link.item.display.visual.shadow.size;
              });
            });
          }
        }
      },
      name: {
        show: function() {
          bookmarks.get().forEach(function(arrayItem, index) {
            arrayItem.items.forEach(function(arrayItem, index) {
              arrayItem.display.name.show = true;
            });
          });
        },
        hide: function() {
          bookmarks.get().forEach(function(arrayItem, index) {
            arrayItem.items.forEach(function(arrayItem, index) {
              arrayItem.display.name.show = false;
            });
          });
        },
        size: function() {
          bookmarks.get().forEach(function(arrayItem, index) {
            arrayItem.items.forEach(function(arrayItem, index) {
              arrayItem.display.name.size = state.get.current().link.item.display.name.size;
            });
          });
        }
      }
    },
    background: {
      show: function() {
        bookmarks.get().forEach(function(arrayItem, index) {
          arrayItem.items.forEach(function(arrayItem, index) {
            arrayItem.background.show = true;
          });
        });
      },
      hide: function() {
        bookmarks.get().forEach(function(arrayItem, index) {
          arrayItem.items.forEach(function(arrayItem, index) {
            arrayItem.background.show = false;
          });
        });
      },
      opacity: function() {
        bookmarks.get().forEach(function(arrayItem, index) {
          arrayItem.items.forEach(function(arrayItem, index) {
            arrayItem.background.opacity = state.get.current().link.item.background.opacity;
          });
        });
      }
    },
    accent: {
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
            arrayItem.accent.by = "theme";
            arrayItem.accent.hsl.h = 0;
            arrayItem.accent.hsl.s = 0;
            arrayItem.accent.hsl.l = 0;
            arrayItem.accent.rgb.r = 0;
            arrayItem.accent.rgb.g = 0;
            arrayItem.accent.rgb.b = 0;
          });
        });
      },
      set: function() {
        bookmarks.get().forEach(function(arrayItem, index) {
          arrayItem.items.forEach(function(arrayItem, index) {
            arrayItem.accent.by = state.get.current().link.item.accent.by;
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
              h: Math.round(degree),
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
    },
    color: {
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
            arrayItem.color.by = "theme";
            arrayItem.color.hsl.h = 0;
            arrayItem.color.hsl.s = 0;
            arrayItem.color.hsl.l = 0;
            arrayItem.color.rgb.r = 0;
            arrayItem.color.rgb.g = 0;
            arrayItem.color.rgb.b = 0;
          });
        });
      },
      set: function() {
        bookmarks.get().forEach(function(arrayItem, index) {
          arrayItem.items.forEach(function(arrayItem, index) {
            arrayItem.color.by = state.get.current().link.item.color.by;
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
              h: Math.round(degree),
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
      },
      opacity: function() {
        bookmarks.get().forEach(function(arrayItem, index) {
          arrayItem.items.forEach(function(arrayItem, index) {
            arrayItem.color.opacity = state.get.current().link.item.color.opacity;
          });
        });
      }
    }
  };

  mod.collapse = {
    form: {
      item: {
        advanced: false
      }
    },
    reset: function() {
      mod.collapse.form.item.advanced = false;
    }
  };

  mod.group = {
    name: {
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
    },
    openall: {
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

  mod.value = {
    convert: {
      to: {
        float: function(value, input) {
          return value / 100;
        }
      },
      from: {
        float: function(value, input) {
          return Math.round(value * 100);
        }
      }
    },
    modify: {
      min: function(value, input) {
        if (isNaN(value) || value < parseInt(input.min, 10)) {
          value = parseInt(input.min, 10);
        };
        return value;
      },
      max: function(value, input) {
        if (value > parseInt(input.max, 10)) {
          value = parseInt(input.max, 10);
        };
        return value;
      },
      step: function(value, input) {
        value = Math.round(value / parseInt(input.step, 10)) * parseInt(input.step, 10);
        return value;
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
          stagedLink.position.destination.item = event.detail.destination.index;
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
      var placeholder = helper.node("div|class:link-sort-placeholder");
      sortable(".group-body", {
        items: ".link-item",
        handle: ".link-control-item-handle",
        acceptFrom: ".group-body",
        placeholder: placeholder
      });
      bind.sort.update.remove.item();
      helper.eA(".group-body").forEach(function(arrayItem, index) {
        sortable(arrayItem)[0].addEventListener("sortupdate", bind.sort.update.func.item, false, event);
      });
      helper.eA(".group-body").forEach(function(arrayItem, index) {
        sortable(arrayItem)[0].addEventListener("sortstart", function() {
          var groupIndex = Array.from(helper.getClosest(event.detail.origin.container, ".group").parentNode.children).indexOf(helper.getClosest(event.detail.origin.container, ".group"));
          var itemIndex = event.detail.origin.index;
          var link = bookmarks.get()[groupIndex].items[itemIndex];
          if (link.wide) {
            helper.addClass(placeholder, "link-sort-placeholder-wide");
          } else {
            helper.removeClass(placeholder, "link-sort-placeholder-wide");
          };
          if (link.tall) {
            helper.addClass(placeholder, "link-sort-placeholder-tall");
          } else {
            helper.removeClass(placeholder, "link-sort-placeholder-tall");
          };
        }, false, event);
      });
    }
  };

  bind.resize = new ResizeObserver(function(elements) {
    var linkArea = helper.e(".link-area");
    var groupBody = helper.e(".group-body");
    var linkItem = helper.e(".link-item");
    var size = {
      sm: 550,
      md: 700,
      lg: 900,
      xl: 1100,
      xxl: 1600
    };
    if (linkArea) {
      if (groupBody && linkItem) {
        elements.forEach(function(entry) {
          var breakpoint;
          if (entry.contentRect.width <= size.sm) {
            breakpoint = "xs";
          } else if (entry.contentRect.width > size.sm && entry.contentRect.width <= size.md) {
            breakpoint = "sm";
          } else if (entry.contentRect.width > size.md && entry.contentRect.width <= size.lg) {
            breakpoint = "md";
          } else if (entry.contentRect.width > size.lg && entry.contentRect.width <= size.xl) {
            breakpoint = "lg";
          } else if (entry.contentRect.width > size.xl && entry.contentRect.width <= size.xxl) {
            breakpoint = "xl";
          } else if (entry.contentRect.width > size.xxl) {
            breakpoint = "xxl";
          };
          helper.setObject({
            object: state.get.current(),
            path: "link.breakpoint",
            newValue: breakpoint
          });
          render.breakpoint.update();
        });
      };
    };
  });

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

  render.form = {
    className: function(element, className) {
      if (className.length > 0 && typeof className != "string") {
        className.forEach(function(arrayItem, index) {
          if (helper.checkIfValidString(arrayItem)) {
            helper.addClass(element, arrayItem);
          };
        });
      } else if (typeof className == "string") {
        render.form.className(element, className.split(" "));
      };
      return element;
    },
    fieldset: function(node) {
      return helper.node("fieldset", node);
    },
    wrap: function(node) {
      return helper.node("div|class:form-wrap", node);
    },
    group: function(node) {
      return helper.node("div|class:form-group form-group-block", node);
    },
    indent: function(node) {
      return helper.node("div|class:form-indent", node);
    },
    formGrid3x3: function(node) {
      return helper.node("div|class:form-grid form-grid-3x3 control-layout-alignment-grid", node);
    },
    collapse: function(node) {
      return helper.node("div|class:link-form-collapse", node);
    },
    label: function(override) {
      var options = {
        name: null,
        labelText: null,
        labelDescription: null,
        icon: null,
        className: null
      };
      if (override) {
        options = helper.applyOptions(options, override);
      };

      var label;
      if (options.name) {
        label = helper.node("label|for:" + options.name);
      } else {
        label = helper.node("label");
      };
      if (options.labelText && options.labelDescription) {
        label.appendChild(helper.node("span|class:label-block", [
          helper.node("span:" + options.labelText + "|class:label-block-item"),
          helper.node("span:" + options.labelDescription + "|class:label-block-item small muted")
        ]));
      } else if (options.labelText) {
        label.appendChild(helper.node("span:" + options.labelText));
      };
      if (options.icon) {
        label.prepend(helper.node("span|class:label-icon"));
      };
      if (options.className) {
        label = render.form.className(label, options.className);
      };
      return label;
    },
    select: function(name) {
      return helper.node("select|id:" + name + ",class:" + name + ",tabindex:1");
    },
    button: function(buttonText, className, iconClass, block) {
      var button = helper.node("button|class:button button-line,type:button,tabindex:1");
      if (buttonText) {
        button.appendChild(helper.node("span:" + buttonText + "|class:button-text"));
      };
      if (className) {
        button = render.form.className(button, className);
      };
      if (iconClass) {
        button.appendChild(helper.node("span|class:button-icon " + iconClass));
      };
      if (block) {
        helper.addClass(button, "button-block");
      };
      return button;
    },
    helper: function(name, text) {
      return helper.makeNode({
        tag: "p",
        text: text,
        attr: [{
          key: "class",
          value: name + " form-helper-item"
        }]
      });
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

      // name
      var groupFormInputNameShowLabel = render.form.label({
        name: "group-form-input-name-show",
        labelText: "Show Group name",
        icon: true
      });
      var groupFormInputNameShowInput = helper.node("input|type:checkbox,class:group-form-input-name-show,id:group-form-input-name-show,tabindex:1,checked");
      var groupFormInputNameLabel = render.form.label({
        name: "group-form-input-name",
        labelText: "Name",
        className: "sr-only"
      });
      var groupFormInputNameInput = helper.node("input|type:text,class:group-form-input-name,id:group-form-input-name,placeholder:Example group,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
      var groupFormRandomNameButton = helper.node("button:Random Group name|class:button button-line,type:button,tabindex:1");

      form.appendChild(
        render.form.fieldset([
          render.form.wrap([
            helper.node("h2:Name|class:mb-0")
          ]),
          render.form.wrap([
            render.form.indent([
              render.form.wrap([
                groupFormInputNameShowInput,
                groupFormInputNameShowLabel
              ]),
              render.form.indent([
                render.form.wrap([
                  groupFormInputNameLabel,
                  groupFormInputNameInput
                ]),
                render.form.wrap([
                  groupFormRandomNameButton
                ])
              ])
            ])
          ])
        ])
      );

      // open all
      var groupFormInputOpenallLabel = render.form.label({
        name: "group-form-input-openall",
        labelText: "Show Open all",
        icon: true
      });
      var groupFormOpenAllInput = helper.node("input|type:checkbox,class:group-form-input-openall,id:group-form-input-openall,tabindex:1,checked");
      var groupFormOpenAllInputHelperItem = render.form.helper("group-form-input-openall", "Open all button will appear if there is at least one Bookmark in this Group.");

      form.appendChild(
        render.form.fieldset([
          render.form.wrap([
            helper.node("h2:Open all|class:mb-0")
          ]),
          render.form.wrap([
            render.form.indent([
              render.form.wrap([
                groupFormOpenAllInput,
                groupFormInputOpenallLabel
              ]),
              render.form.wrap([
                groupFormOpenAllInputHelperItem
              ])
            ])
          ])
        ])
      );

      // position
      var groupFormPositionLabel = render.form.label({
        name: "group-form-position",
        labelText: "Position",
        icon: true
      });
      var groupFormPositionSelect = helper.node("select|id:group-form-position,class:group-form-position,tabindex:1");

      form.appendChild(
        render.form.fieldset([
          render.form.wrap([
            helper.node("h2:Ordering|class:mb-0")
          ]),
          render.form.wrap([
            render.form.indent([
              render.form.wrap([
                groupFormPositionLabel,
                groupFormPositionSelect
              ])
            ])
          ])
        ])
      );

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
        groupFormInputNameInput.value = stagedGroup.group.name.text;
        groupFormOpenAllInput.checked = stagedGroup.group.openAll.show;
        if (!stagedGroup.group.name.show) {
          groupFormInputNameInput.setAttribute("disabled", "");
          groupFormRandomNameButton.setAttribute("disabled", "");
        };
      };

      var setLastPosition = function() {
        groupFormPositionSelect.selectedIndex = stagedGroup.position.destination;
      };

      makeGroupOptions();

      populateForm();

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
          groupFormInputNameInput.removeAttribute("disabled");
          groupFormRandomNameButton.removeAttribute("disabled");
        } else {
          groupFormInputNameInput.setAttribute("disabled", "");
          groupFormRandomNameButton.setAttribute("disabled", "");
        };
      }, false);
      groupFormPositionSelect.addEventListener("change", function(event) {
        stagedGroup.position.destination = this.selectedIndex;
      }, false);
      groupFormInputNameInput.addEventListener("input", function(event) {
        stagedGroup.group.name.text = this.value;
      }, false);
      groupFormRandomNameButton.addEventListener("click", function(event) {
        var randomName = helper.randomString({
          adjectivesCount: helper.randomNumber(1, 3)
        });
        stagedGroup.group.name.text = randomName;
        groupFormInputNameInput.value = randomName;
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
    link: function(override) {
      var options = {
        preview: null
      };
      if (override) {
        options = helper.applyOptions(options, override);
      };

      var linkItemClass = ["link-item"];
      var linkItemStyle = [];

      if (options.preview) {
        linkItemClass.push("link-item-preview");
      };
      if (stagedLink.link.display.visual.show) {
        linkItemClass.push("link-item-visual");
      };
      if (stagedLink.link.display.name.show) {
        linkItemClass.push("link-item-name");
      };
      linkItemClass.push("link-item-alignment-" + stagedLink.link.display.alignment);
      linkItemClass.push("link-item-order-" + stagedLink.link.display.order);
      linkItemClass.push("link-item-direction-" + stagedLink.link.display.direction);
      if (stagedLink.link.wide) {
        linkItemClass.push("link-item-wide");
      };
      if (stagedLink.link.tall) {
        linkItemClass.push("link-item-tall");
      };
      if (stagedLink.link.color.opacity < 1) {
        linkItemStyle.push("--link-item-clip-padding: 0em;");
      };
      if (stagedLink.link.display.visual.shadow.size > 0) {
        linkItemClass.push("link-item-display-visual-shadow");
        linkItemStyle.push("--link-item-display-visual-shadow-size: " + stagedLink.link.display.visual.shadow.size + ";");
        linkItemStyle.push("--link-item-display-visual-shadow-offset: 0.02em;");
        linkItemStyle.push("--link-item-display-visual-shadow-blur: 0.02em;");
        linkItemStyle.push("--link-item-display-visual-shadow-opacity: 0.01;");
        linkItemStyle.push("--link-item-display-visual-shadow: 0 calc(var(--link-item-display-visual-shadow-size) * calc(var(--link-item-display-visual-shadow-offset) * 1)) calc(var(--link-item-display-visual-shadow-size) * calc(var(--link-item-display-visual-shadow-blur) * 2)) rgba(0, 0, 0, calc(var(--link-item-display-visual-shadow-size) * calc(var(--link-item-display-visual-shadow-opacity) * 1))), 0 calc(var(--link-item-display-visual-shadow-size) * calc(var(--link-item-display-visual-shadow-offset) * 2)) calc(var(--link-item-display-visual-shadow-size) * calc(var(--link-item-display-visual-shadow-blur) * 4)) rgba(0, 0, 0, calc(var(--link-item-display-visual-shadow-size) * calc(var(--link-item-display-visual-shadow-opacity) * 2))), 0 calc(var(--link-item-display-visual-shadow-size) * calc(var(--link-item-display-visual-shadow-offset) * 4)) calc(var(--link-item-display-visual-shadow-size) * calc(var(--link-item-display-visual-shadow-blur) * 6)) rgba(0, 0, 0, calc(var(--link-item-display-visual-shadow-size) * calc(var(--link-item-display-visual-shadow-opacity) * 3)));");
      };

      linkItemStyle.push("--link-item-color-opacity: " + stagedLink.link.color.opacity + ";");
      linkItemStyle.push("--link-item-background-opacity: " + stagedLink.link.background.opacity + ";");
      linkItemStyle.push("--link-item-display-rotate: " + stagedLink.link.display.rotate + "deg;");
      linkItemStyle.push("--link-item-display-gutter: " + stagedLink.link.display.gutter + ";");
      linkItemStyle.push("--link-item-display-translate-x: " + stagedLink.link.display.translate.x + "em;");
      linkItemStyle.push("--link-item-display-translate-y: " + stagedLink.link.display.translate.y + "em;");

      if (stagedLink.link.display.visual.type == "letter") {
        linkItemStyle.push("--link-item-display-visual-letter-size: " + stagedLink.link.display.visual.letter.size + "em;");
      } else if (stagedLink.link.display.visual.type == "icon") {
        linkItemStyle.push("--link-item-display-visual-icon-size: " + stagedLink.link.display.visual.icon.size + "em;");
      } else if (stagedLink.link.display.visual.type == "image") {
        linkItemStyle.push("--link-item-display-visual-image-size: " + stagedLink.link.display.visual.image.size + "em;");
      };
      if (stagedLink.link.display.name.show) {
        linkItemStyle.push("--link-item-display-name-size: " + stagedLink.link.display.name.size + "em;");
      };
      if (stagedLink.link.accent.by == "custom" || stagedLink.link.color.by == "custom" || helper.checkIfValidString(stagedLink.link.background.image.url)) {
        if (stagedLink.link.accent.by == "custom") {
          linkItemStyle.push("--theme-accent-r: " + stagedLink.link.accent.rgb.r + ";");
          linkItemStyle.push("--theme-accent-g: " + stagedLink.link.accent.rgb.g + ";");
          linkItemStyle.push("--theme-accent-b: " + stagedLink.link.accent.rgb.b + ";");
          linkItemStyle.push("--theme-accent: var(--theme-accent-r), var(--theme-accent-g), var(--theme-accent-b);");
          linkItemStyle.push("--theme-accent-accessible-threshold: 0.5;");
          linkItemStyle.push("--theme-accent-accessible-r: calc(var(--theme-accent-r) * 0.50);");
          linkItemStyle.push("--theme-accent-accessible-g: calc(var(--theme-accent-g) * 0.60);");
          linkItemStyle.push("--theme-accent-accessible-b: calc(var(--theme-accent-b) * 0.20);");
          linkItemStyle.push("--theme-accent-accessible-sum: calc(var(--theme-accent-accessible-r) + var(--theme-accent-accessible-g) + var(--theme-accent-accessible-b));");
          linkItemStyle.push("--theme-accent-accessible-perceived-lightness: calc(var(--theme-accent-accessible-sum) / 255);");
          linkItemStyle.push("--theme-accent-accessible-color: 0, 0%, calc((var(--theme-accent-accessible-perceived-lightness) - var(--theme-accent-accessible-threshold)) * -10000000%);");
          linkItemStyle.push("--link-item-visual-element-color: var(--theme-accent);");
        };
        if (stagedLink.link.color.by == "custom") {
          var hsl = helper.convertColor.rgb.hsl(stagedLink.link.color.rgb);

          var shades = theme.mod.color.shades({
            rgb: stagedLink.link.color.rgb,
            contrastNegative: 7,
            contrastPositive: 7
          });

          var rgb;

          if (hsl.l <= 50) {
            if (hsl.l > 30 && hsl.l <= 50 && hsl.h > 40 && hsl.h < 200) {
              rgb = shades.negative["9"];
            } else {
              rgb = shades.positive["9"];
            };
          } else {
            rgb = shades.negative["9"];
          };

          if (hsl.l <= 50) {
            linkItemStyle.push("--theme-style-text: var(--theme-white);");
          } else {
            linkItemStyle.push("--theme-style-text: var(--theme-black);");
          };

          linkItemStyle.push("--link-item-visual-element-color-focus-hover: var(--theme-style-text);");
          linkItemStyle.push("--link-item-color: " + stagedLink.link.color.rgb.r + ", " + stagedLink.link.color.rgb.g + ", " + stagedLink.link.color.rgb.b + ";");
          linkItemStyle.push("--link-item-color-focus-hover: " + stagedLink.link.color.rgb.r + ", " + stagedLink.link.color.rgb.g + ", " + stagedLink.link.color.rgb.b + ";");
          linkItemStyle.push("--link-item-name-color: " + rgb.r + ", " + rgb.g + ", " + rgb.b + ";");
        };
      };
      if (stagedLink.link.background.show) {
        if (stagedLink.link.background.type == "image") {
          if (helper.checkIfValidString(stagedLink.link.background.image.url)) {
            linkItemStyle.push("--link-item-background-image-url: url(" + helper.trimString(stagedLink.link.background.image.url) + ");");
          };
        };
      };

      var linkItemOptions = {
        tag: "div",
        attr: [{
          key: "class",
          value: linkItemClass.join(" ")
        }, {
          key: "style",
          value: linkItemStyle.join(" ")
        }]
      };

      var linkItem = helper.makeNode(linkItemOptions);

      var linkPanelFrontOptions = {
        tag: "a",
        attr: [{
          key: "class",
          value: "link-panel-front"
        }, {
          key: "tabindex",
          value: 1
        }]
      };
      if (helper.checkIfValidString(stagedLink.link.url) && !options.preview) {
        linkPanelFrontOptions.attr.push({
          key: "href",
          value: helper.removeSpaces(stagedLink.link.url)
        });
      } else {
        linkPanelFrontOptions.attr.push({
          key: "href",
          value: "#"
        });
      };
      if (state.get.current().link.item.newTab && !options.preview) {
        linkPanelFrontOptions.attr.push({
          key: "target",
          value: "_blank"
        });
      };

      var linkPanelFront = helper.makeNode(linkPanelFrontOptions);

      var linkPanelBack = helper.node("div|class:link-panel-back");

      var linkDisplay = helper.node("div|class:link-display");

      var linkBackgroundImage = helper.node("div|class:link-background-image");

      var linkBackgroundVideo = helper.node("div|class:link-background-video");

      if (stagedLink.link.display.visual.show) {
        var linkDisplayVisual = helper.node("div|class:link-display-visual");

        if (stagedLink.link.display.visual.type == "letter" && helper.checkIfValidString(stagedLink.link.display.visual.letter.text)) {

          linkDisplayVisual.appendChild(helper.makeNode({
            tag: "p",
            text: helper.trimString(stagedLink.link.display.visual.letter.text),
            attr: [{
              key: "class",
              value: "link-display-letter"
            }]
          }));
          linkDisplay.appendChild(linkDisplayVisual);

        } else if (stagedLink.link.display.visual.type == "icon" && helper.checkIfValidString(stagedLink.link.display.visual.icon.prefix) && helper.checkIfValidString(stagedLink.link.display.visual.icon.name) && helper.checkIfValidString(stagedLink.link.display.visual.icon.label)) {

          linkDisplayVisual.appendChild(helper.node("div|class:link-display-icon " + stagedLink.link.display.visual.icon.prefix + " fa-" + stagedLink.link.display.visual.icon.name));
          linkDisplay.appendChild(linkDisplayVisual);

        } else if (stagedLink.link.display.visual.type == "image" && helper.checkIfValidString(stagedLink.link.display.visual.image.url)) {

          linkDisplayVisual.appendChild(helper.makeNode({
            tag: "div",
            attr: [{
              key: "class",
              value: "link-display-image"
            }, {
              key: "style",
              value: "--link-display-image-url: url(" + helper.trimString(stagedLink.link.display.visual.image.url) + ")"
            }]
          }));
          linkDisplay.appendChild(linkDisplayVisual);

        };
      };

      if (stagedLink.link.display.name.show && helper.checkIfValidString(stagedLink.link.display.name.text)) {
        var linkDisplayName = helper.makeNode({
          tag: "p",
          text: helper.trimString(stagedLink.link.display.name.text),
          attr: [{
            key: "class",
            value: "link-display-name"
          }]
        });
        linkDisplay.appendChild(linkDisplayName);
      };

      if (stagedLink.link.display.visual.show || stagedLink.link.display.name.show) {
        linkPanelFront.appendChild(linkDisplay);
      };

      if (stagedLink.link.background.show) {
        if (stagedLink.link.background.type == "image") {
          if (helper.checkIfValidString(stagedLink.link.background.image.url)) {
            linkPanelFront.appendChild(linkBackgroundImage);
          };
        } else if (stagedLink.link.background.type == "video") {
          if (helper.checkIfValidString(stagedLink.link.background.video.url)) {
            if (stagedLink.link.background.video.url.includes("mp4") || stagedLink.link.background.video.url.endsWith("mp4")) {
              var video = helper.node("video|autoplay,loop,muted,type:video/mp4")
              var source = helper.node("source|src:" + stagedLink.link.background.video.url);
              video.muted = true;
              video.loop = true;
              video.autoplay = true;
              video.appendChild(source);
              linkBackgroundVideo.appendChild(video);
              linkPanelFront.appendChild(linkBackgroundVideo);
            } else if (stagedLink.link.background.video.url.includes("webm") || stagedLink.link.background.video.url.endsWith("webm")) {
              var video = helper.node("video|autoplay,loop,muted,type:video/webm")
              var source = helper.node("source|src:" + stagedLink.link.background.video.url);
              video.muted = true;
              video.loop = true;
              video.autoplay = true;
              video.appendChild(source);
              linkBackgroundVideo.appendChild(video);
              linkPanelFront.appendChild(linkBackgroundVideo);
            };
          };
        };
      };

      var linkUrl = helper.node("div|class:link-url");
      var urlDisplayString;
      if (helper.checkIfValidString(stagedLink.link.url)) {
        urlDisplayString = helper.removeSpaces(stagedLink.link.url.replace(/^https?\:\/\//i, "").replace(/\/+$/, ""));
      } else {
        urlDisplayString = "";
      };
      var linkUrlText = helper.makeNode({
        tag: "p",
        text: urlDisplayString,
        attr: [{
          key: "class",
          value: "link-url-text"
        }, {
          key: "title",
          value: urlDisplayString
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
      if (helper.checkIfValidString(stagedLink.link.url)) {
        linkUrl.appendChild(linkUrlText);
      };
      linkPanelBack.appendChild(linkUrl);
      if (!options.preview) {
        linkPanelBack.appendChild(linkControl);
      };
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

      var formArea = helper.node("form|class:link-form-area");
      var form = helper.node("form|class:link-form");
      var formAside = helper.node("div|class:link-form-aside");
      var formPreviewArea = helper.node("div|class:link-form-preview-area");

      // group
      var groupExistingRadio = helper.node("input|class:link-form-input-group-existing,id:link-form-input-group-existing,type:radio,name:link-form-input-group,tabindex:1,value:existing");
      var groupExistingLabel = render.form.label({
        name: "link-form-input-group-existing",
        labelText: "Existing Group",
        icon: true
      });
      var groupExistingGroupLabel = render.form.label({
        name: "link-form-select-group",
        labelText: "Name",
        className: "sr-only"
      });
      var groupExistingGroupSelect = helper.node("select|id:link-form-select-group,class:link-form-select-group,tabindex:1");
      var groupExistingPositionLabel = render.form.label({
        name: "link-form-position",
        labelText: "Position"
      });
      var groupExistingPosition = helper.node("select|id:link-form-position,class:link-form-position,tabindex:1");
      var groupNewRadio = helper.node("input|class:link-form-input-group-new,id:link-form-input-group-new,type:radio,name:link-form-input-group,tabindex:1,value:new");
      var groupNewLabel = render.form.label({
        name: "link-form-input-group-new",
        labelText: "New Group",
        icon: true
      });
      var groupNewNameLabel = render.form.label({
        name: "link-form-select-group",
        labelText: "Name",
        className: "sr-only"
      });
      var groupNewNameInput = helper.node("input|type:text,class:link-form-input-new-group,id:link-form-input-new-group,placeholder:Example group,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
      var groupNewRandomNameButton = render.form.button("Random Group name");

      form.appendChild(
        render.form.fieldset([
          render.form.wrap([
            helper.node("h2:Group|class:mb-0")
          ]),
          render.form.wrap([
            render.form.indent([
              render.form.wrap([
                groupExistingRadio,
                groupExistingLabel
              ]),
              render.form.wrap([
                render.form.indent([
                  render.form.wrap([
                    groupExistingGroupLabel,
                    groupExistingGroupSelect
                  ]),
                  render.form.wrap([
                    groupExistingPositionLabel,
                    groupExistingPosition
                  ])
                ])
              ]),
              render.form.wrap([
                groupNewRadio,
                groupNewLabel
              ]),
              render.form.wrap([
                render.form.indent([
                  render.form.wrap([
                    groupNewNameLabel,
                    groupNewNameInput
                  ]),
                  render.form.wrap([
                    groupNewRandomNameButton
                  ])
                ])
              ])
            ])
          ])
        ])
      );

      // display
      var displayShowCheckbox = helper.node("input|class:link-form-input-display-visual-show,id:link-form-input-display-visual-show,type:checkbox,tabindex:1");
      var displayShowLabel = render.form.label({
        name: "link-form-input-display-visual-show",
        labelText: "Show Visual Element",
        labelDescription: "Display Letters, Icon or an Image on this Bookmark tile.",
        icon: true
      });

      var displayLetterRadio = helper.node("input|class:link-form-input-display-visual-letter,id:link-form-input-display-visual-letter,type:radio,name:link-form-input-display-visual,tabindex:1,value:letter");
      var displayLetterLabel = render.form.label({
        name: "link-form-input-display-visual-letter",
        labelText: "Letters",
        icon: true
      });
      var displayLetterInput = helper.node("input|type:text,class:link-form-input-letter,placeholder:E,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");

      var displayIconRadio = helper.node("input|class:link-form-input-display-visual-icon,id:link-form-input-display-visual-icon,type:radio,name:link-form-input-display-visual,tabindex:1,value:icon");
      var displayIconLabel = render.form.label({
        name: "link-form-input-display-visual-icon",
        labelText: "Icon",
        icon: true
      });
      var displayIconInput = helper.node("input|type:text,class:link-form-input-display-visual-icon form-group-item-grow link-form-input-icon auto-suggest-input,placeholder:Search for Brands or Icons,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
      var displayIconFormGroupText = helper.node("div|class:form-group-text link-form-text-icon,tabindex:-1");
      var displayIconFormGroupClear = render.form.button(false, false, "icon-close");
      var displayIconHelper = render.form.helper("link-form-input-display-visual-icon-helper", "Refer to the \"Free\" and \"Brand\" icons from FontAwesome for full set of icons supported.");

      var displayImageLabel = render.form.label({
        name: "link-form-input-display-visual-image",
        labelText: "Image",
        icon: true
      });
      var displayImageRadio = helper.node("input|class:link-form-input-display-visual-image,id:link-form-input-display-visual-image,type:radio,name:link-form-input-display-visual,tabindex:1,value:image");
      var displayImageInput = helper.node("input|type:text,class:link-form-input-image,placeholder:https://www.example.com/image.jpg,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
      var displayImageHelper = render.form.helper("link-form-input-display-visual-image-helper", "Display an image in place of a letter or icon.");

      form.appendChild(
        render.form.fieldset([
          render.form.wrap([
            helper.node("h2:Visual Element|class:mb-0")
          ]),
          render.form.wrap([
            render.form.indent([
              render.form.wrap([
                displayShowCheckbox,
                displayShowLabel
              ]),
              render.form.wrap([
                render.form.indent([
                  render.form.wrap([
                    displayLetterRadio,
                    displayLetterLabel
                  ]),
                  render.form.wrap([
                    render.form.indent([
                      render.form.wrap([
                        displayLetterInput
                      ])
                    ])
                  ]),
                  render.form.wrap([
                    displayIconRadio,
                    displayIconLabel
                  ]),
                  render.form.wrap([
                    render.form.indent([
                      render.form.wrap([
                        render.form.group([
                          displayIconInput,
                          displayIconFormGroupText,
                          displayIconFormGroupClear
                        ])
                      ]),
                      render.form.wrap([
                        displayIconHelper
                      ])
                    ])
                  ]),
                  render.form.wrap([
                    displayImageRadio,
                    displayImageLabel
                  ]),
                  render.form.wrap([
                    render.form.indent([
                      render.form.wrap([
                        displayImageInput,
                      ]),
                      render.form.wrap([
                        displayImageHelper
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      );

      // name
      var nameShowCheckbox = helper.node("input|class:link-form-input-display-name-show,id:link-form-input-display-name-show,type:checkbox,tabindex:1");
      var nameShowLabel = render.form.label({
        name: "link-form-input-display-name-show",
        labelText: "Show Name",
        labelDescription: "Display a Name on this Bookmark tile.",
        icon: true
      });
      var nameInput = helper.node("input|type:text,class:link-form-input-display-name,id:link-form-input-display-name,placeholder:Example,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");

      form.appendChild(
        render.form.fieldset([
          render.form.wrap([
            helper.node("h2:Name|class:mb-0")
          ]),
          render.form.wrap([
            render.form.indent([
              render.form.wrap([
                nameShowCheckbox,
                nameShowLabel
              ]),
              render.form.wrap([
                render.form.indent([
                  render.form.wrap([
                    nameInput
                  ])
                ])
              ])
            ])
          ])
        ])
      );

      // url
      var urlLabel = render.form.label({
        name: "link-form-input-url",
        labelText: "URL",
        icon: true
      });
      var urlInput = helper.node("input|type:text,class:link-form-input-url,id:link-form-input-url,placeholder:https://www.example.com/,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
      var urlInputHelper = render.form.helper("link-form-input-url-helper", "Be sure to use the full URL and include \"http://\" or \"https\://\"...");

      form.appendChild(
        render.form.fieldset([
          render.form.wrap([
            helper.node("h2:Address|class:mb-0")
          ]),
          render.form.wrap([
            render.form.indent([
              render.form.wrap([
                urlLabel,
                urlInput
              ]),
              render.form.wrap([
                urlInputHelper
              ])
            ])
          ])
        ])
      );

      // advanced
      var advancedCollapseButton = render.form.button("Advanced controls", "link-form-collapse-button", "icon-arrow-down", true);
      var advancedCollapseButtonHelper = render.form.helper("link-form-image-helper", "Customise this Bookmarks appearance, Background, Colour and Accent.");

      // visual element
      var displayLetterSizeLabel = render.form.label({
        name: "link-form-input-display-visual-letter-size-range",
        labelText: "Letter size"
      });
      var displayLetterSizeInputRange = helper.node("input|class:link-form-input-display-visual-letter-size-range mr-3,id:link-form-input-display-visual-letter-size-range,type:range,name:link-form-input-display-visual-letter-size-range,min:10,max:3000,step:10,tabindex:1");
      var displayLetterSizeInputNumber = helper.node("input|class:link-form-input-display-visual-letter-size-number form-group-item-medium form-group-radius-left,type:number,min:10,max:3000,step:10,tabindex:1");
      var displayLetterSizeInputDefault = render.form.button(false, "link-form-input-display-visual-letter-size-default", "icon-replay");

      var displayIconSizeLabel = render.form.label({
        name: "link-form-input-display-visual-icon-size-range",
        labelText: "Icon size"
      });
      var displayIconSizeInputRange = helper.node("input|class:link-form-input-display-visual-icon-size-range mr-3,id:link-form-input-display-visual-icon-size-range,type:range,name:link-form-input-display-visual-icon-size-range,min:10,max:3000,step:10,tabindex:1");
      var displayIconSizeInputNumber = helper.node("input|class:link-form-input-display-visual-icon-size-number form-group-item-medium form-group-radius-left,type:number,min:10,max:3000,step:10,tabindex:1");
      var displayIconSizeInputDefault = render.form.button(false, "link-form-input-display-visual-icon-size-default", "icon-replay");

      var displayImageSizeLabel = render.form.label({
        name: "link-form-input-display-visual-image-size-range",
        labelText: "Image size"
      });
      var displayImageSizeInputRange = helper.node("input|class:link-form-input-display-visual-image-size-range mr-3,id:link-form-input-display-visual-image-size-range,type:range,name:link-form-input-display-visual-image-size-range,min:10,max:3000,step:10,tabindex:1");
      var displayImageSizeInputNumber = helper.node("input|class:link-form-input-display-visual-image-size-number form-group-item-medium form-group-radius-left,type:number,min:10,max:3000,step:10,tabindex:1");
      var displayImageSizeInputDefault = render.form.button(false, "link-form-input-display-visual-image-size-default", "icon-replay");

      var displayShadowSizeLabel = render.form.label({
        name: "link-form-input-display-visual-shadow-size-range",
        labelText: "Shadow size"
      });
      var displayShadowSizeInputRange = helper.node("input|class:link-form-input-display-visual-shadow-size-range mr-3,id:link-form-input-display-visual-shadow-size-range,type:range,name:link-form-input-display-visual-shadow-size-range,min:0,max:100,tabindex:1");
      var displayShadowSizeInputNumber = helper.node("input|class:link-form-input-display-visual-shadow-size-number form-group-item-medium form-group-radius-left,type:number,min:0,max:100,tabindex:1");
      var displayShadowSizeInputDefault = render.form.button(false, "link-form-input-display-visual-shadow-size-default", "icon-replay");
      var displayShadowSizeInputHelper = render.form.helper("link-form-input-display-visual-shadow-size-helper", "Only applies to Letters or Icons.");

      // name
      var nameSizeLabel = render.form.label({
        name: "link-form-input-display-name-size-range",
        labelText: "Name size"
      });
      var nameSizeInputRange = helper.node("input|class:link-form-input-display-name-size-range mr-3,id:link-form-input-display-name-size-range,type:range,name:link-form-input-display-name-size-range,min:10,max:1500,step:10,tabindex:1");
      var nameSizeInputNumber = helper.node("input|class:link-form-input-display-name-size-number form-group-item-medium form-group-radius-left,type:number,min:10,max:1500,step:10,tabindex:1");
      var nameSizeInputDefault = render.form.button(false, "link-form-input-display-name-size-default", "icon-replay");

      // content
      var displayAlignmentLabel = render.form.label({
        labelText: "Visual Element and Name alignment"
      });
      var displayAlignmentTopLeftRadio = helper.node("input|class:link-form-input-display-alignment-topleft,id:link-form-input-display-alignment-topleft,type:radio,name:link-form-input-display-alignment,tabindex:1,value:topleft");
      var displayAlignmentTopLeftLabel = render.form.label({
        name: "link-form-input-display-alignment-topleft",
        icon: true
      });
      var displayAlignmentTopCenterRadio = helper.node("input|class:link-form-input-display-alignment-topcenter,id:link-form-input-display-alignment-topcenter,type:radio,name:link-form-input-display-alignment,tabindex:1,value:topcenter");
      var displayAlignmentTopCenterLabel = render.form.label({
        name: "link-form-input-display-alignment-topcenter",
        icon: true
      });
      var displayAlignmentTopRightRadio = helper.node("input|class:link-form-input-display-alignment-topright,id:link-form-input-display-alignment-topright,type:radio,name:link-form-input-display-alignment,tabindex:1,value:topright");
      var displayAlignmentTopRightLabel = render.form.label({
        name: "link-form-input-display-alignment-topright",
        icon: true
      });
      var displayAlignmentCenterLeftRadio = helper.node("input|class:link-form-input-display-alignment-centerleft,id:link-form-input-display-alignment-centerleft,type:radio,name:link-form-input-display-alignment,tabindex:1,value:centerleft");
      var displayAlignmentCenterLeftLabel = render.form.label({
        name: "link-form-input-display-alignment-centerleft",
        icon: true
      });
      var displayAlignmentCenterCenterRadio = helper.node("input|class:link-form-input-display-alignment-centercenter,id:link-form-input-display-alignment-centercenter,type:radio,name:link-form-input-display-alignment,tabindex:1,value:centercenter");
      var displayAlignmentCenterCenterLabel = render.form.label({
        name: "link-form-input-display-alignment-centercenter",
        icon: true
      });
      var displayAlignmentCenterRightRadio = helper.node("input|class:link-form-input-display-alignment-centerright,id:link-form-input-display-alignment-centerright,type:radio,name:link-form-input-display-alignment,tabindex:1,value:centerright");
      var displayAlignmentCenterRightLabel = render.form.label({
        name: "link-form-input-display-alignment-centerright",
        icon: true
      });
      var displayAlignmentBottomLeftRadio = helper.node("input|class:link-form-input-display-alignment-bottomleft,id:link-form-input-display-alignment-bottomleft,type:radio,name:link-form-input-display-alignment,tabindex:1,value:bottomleft");
      var displayAlignmentBottomLeftLabel = render.form.label({
        name: "link-form-input-display-alignment-bottomleft",
        icon: true
      });
      var displayAlignmentBottomCenterRadio = helper.node("input|class:link-form-input-display-alignment-bottomcenter,id:link-form-input-display-alignment-bottomcenter,type:radio,name:link-form-input-display-alignment,tabindex:1,value:bottomcenter");
      var displayAlignmentBottomCenterLabel = render.form.label({
        name: "link-form-input-display-alignment-bottomcenter",
        icon: true
      });
      var displayAlignmentBottomRightRadio = helper.node("input|class:link-form-input-display-alignment-bottomright,id:link-form-input-display-alignment-bottomright,type:radio,name:link-form-input-display-alignment,tabindex:1,value:bottomright");
      var displayAlignmentBottomRightLabel = render.form.label({
        name: "link-form-input-display-alignment-bottomright",
        icon: true
      });
      var displayAlignmentHelper = render.form.helper("link-form-input-display-alignment-helper", "Position the Visual Element (letter, icon or image) and Name inside the Bookmark tile.");

      var displayRotateLabel = render.form.label({
        name: "link-form-input-display-rotate-range",
        labelText: "Rotation"
      });
      var displayRotateRange = helper.node("input|class:link-form-input-display-rotate-range mr-3,id:link-form-input-display-rotate-range,type:range,name:link-form-input-display-rotate-range,min:-180,max:180,tabindex:1");
      var displayRotateNumber = helper.node("input|class:link-form-input-display-rotate-number form-group-item-medium form-group-radius-left,type:number,min:-180,max:180,tabindex:1");
      var displayRotateDefault = render.form.button(false, "link-form-input-display-rotate-default", "icon-replay");
      var displayTranslateXLabel = render.form.label({
        name: "link-form-input-display-translate-x-range",
        labelText: "Horizontally offset"
      });
      var displayTranslateXRange = helper.node("input|class:link-form-input-display-translate-x-range mr-3,id:link-form-input-display-translate-x-range,type:range,name:link-form-input-display-translate-x-range,min:-1000,max:1000,step:10,tabindex:1");
      var displayTranslateXNumber = helper.node("input|class:link-form-input-display-translate-x-number form-group-item-medium form-group-radius-left,type:number,min:-1000,max:1000,step:10,tabindex:1");
      var displayTranslateXDefault = render.form.button(false, "link-form-input-display-translate-x-default", "icon-replay");
      var displayTranslateYLabel = render.form.label({
        name: "link-form-input-display-translate-y-range",
        labelText: "Vertically offset"
      });
      var displayTranslateYRange = helper.node("input|class:link-form-input-display-translate-y-range mr-3,id:link-form-input-display-translate-y-range,type:range,name:link-form-input-display-translate-y-range,min:-1000,max:1000,step:10,tabindex:1");
      var displayTranslateYNumber = helper.node("input|class:link-form-input-display-translate-y-number form-group-item-medium form-group-radius-left,type:number,min:-1000,max:1000,step:10,tabindex:1");
      var displayTranslateYDefault = render.form.button(false, "link-form-input-display-translate-y-default", "icon-replay");

      var displayGutterLabel = render.form.label({
        name: "link-form-input-display-gutter-range",
        labelText: "Gutter"
      });
      var displayGutterRange = helper.node("input|class:link-form-input-display-gutter-range mr-3,id:link-form-input-display-gutter-range,type:range,name:link-form-input-display-gutter-range,min:0,max:40,tabindex:1");
      var displayGutterNumber = helper.node("input|class:link-form-input-display-gutter-number form-group-item-medium form-group-radius-left,type:number,min:0,max:40,tabindex:1");
      var displayGutterDefault = render.form.button(false, "link-form-input-display-gutter-default", "icon-replay");

      var displayAlignmentHorizontalRadio = helper.node("input|class:link-form-input-alignment-horizontal,id:link-form-input-alignment-horizontal,type:radio,name:link-form-input-alignment,tabindex:1,value:horizontal");
      var displayAlignmentHorizontalLabel = render.form.label({
        name: "link-form-input-alignment-horizontal",
        labelText: "Align horizontally",
        labelDescription: "Works well with Bookmark List Style.",
        icon: true
      });
      var displayAlignmentVerticalRadio = helper.node("input|class:link-form-input-alignment-vertical,id:link-form-input-alignment-vertical,type:radio,name:link-form-input-alignment,tabindex:1,value:vertical");
      var displayAlignmentVerticalLabel = render.form.label({
        name: "link-form-input-alignment-vertical",
        labelText: "Align vertically",
        labelDescription: "Works well with Bookmark Block Style.",
        icon: true
      });
      var displayAlignmentHelper = render.form.helper("link-form-wide-tall-helper", "Only available when Visual Element and Name are shown.");

      var displayDirectionVisualnameRadio = helper.node("input|class:link-form-input-direction-visualname,id:link-form-input-direction-visualname,type:radio,name:link-form-input-direction,tabindex:1,value:visualname");
      var displayDirectionVisualnameLabel = render.form.label({
        name: "link-form-input-direction-visualname",
        labelText: "Visual Element then Name",
        labelDescription: "Stack the Visual Element (letter, icon or image) before the Name.",
        icon: true
      });
      var displayDirectionNamevisualRadio = helper.node("input|class:link-form-input-direction-namevisual,id:link-form-input-direction-namevisual,type:radio,name:link-form-input-direction,tabindex:1,value:namevisual");
      var displayDirectionNamevisualLabel = render.form.label({
        name: "link-form-input-direction-namevisual",
        labelText: "Name then Visual Element",
        labelDescription: "Stack the Name before the Visual Element (letter, icon or image).",
        icon: true
      });
      var displayDirectionHelper = render.form.helper("link-form-wide-tall-helper", "Only available when Visual Element and Name are shown.");

      // color
      var colorThemeRadio = helper.node("input|class:link-form-input-color-theme,id:link-form-input-color-theme,type:radio,name:link-form-input-color,tabindex:1,value:theme");
      var colorThemeLabel = render.form.label({
        name: "link-form-input-color-theme",
        labelText: "Theme colour",
        labelDescription: "Use the Colour defined by the Theme.",
        icon: true
      });
      var colorCustomRadio = helper.node("input|class:link-form-input-color-custom,id:link-form-input-color-custom,type:radio,name:link-form-input-color,tabindex:1,value:custom");
      var colorCustomLabel = render.form.label({
        name: "link-form-input-color-custom",
        labelText: "Custom colour",
        labelDescription: "Override the Theme colour.",
        icon: true
      });
      var colorColorPicker = helper.node("input|id:link-form-input-color-picker,class:form-group-item-half link-form-input-color-picker,type:color,value:#000000,tabindex:1");
      var colorColorHex = helper.node("input|id:link-form-input-color-hex,class:form-group-item-half link-form-input-color-hex,type:text,placeholder:Hex code,value:#000000,tabindex:1,maxlength:7");

      var colorHslHLabel = render.form.label({
        name: "link-form-input-color-hsl-h-range",
        labelText: "Hue",
        className: "form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0"
      });
      var colorHslHRange = helper.node("input|class:link-form-input-color-hsl-h-range mr-3,id:link-form-input-color-hsl-h-range,type:range,name:link-form-input-color-hsl-h-range,value:0,min:0,max:359,tabindex:1");
      var colorHslHNumber = helper.node("input|class:link-form-input-color-hsl-h-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:359,tabindex:1");
      var colorHslSLabel = render.form.label({
        name: "link-form-input-color-hsl-s-range",
        labelText: "Saturation",
        className: "form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0"
      });
      var colorHslSRange = helper.node("input|class:link-form-input-color-hsl-s-range mr-3,id:link-form-input-color-hsl-s-range,type:range,name:link-form-input-color-hsl-s-range,value:0,min:0,max:100,tabindex:1");
      var colorHslSNumber = helper.node("input|class:link-form-input-color-hsl-s-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:100,tabindex:1");
      var colorHslLLabel = render.form.label({
        name: "link-form-input-color-hsl-l-range",
        labelText: "Lightness",
        className: "form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0"
      });
      var colorHslLRange = helper.node("input|class:link-form-input-color-hsl-l-range mr-3,id:link-form-input-color-hsl-l-range,type:range,name:link-form-input-color-hsl-l-range,value:0,min:0,max:100,tabindex:1");
      var colorHslLNumber = helper.node("input|class:link-form-input-color-hsl-l-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:100,tabindex:1");
      var colorRgbRLabel = render.form.label({
        name: "link-form-input-color-rgb-r-range",
        labelText: "Red",
        className: "form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0"
      });
      var colorRgbRRange = helper.node("input|class:link-form-input-color-rgb-r-range mr-3,id:link-form-input-color-rgb-r-range,type:range,name:link-form-input-color-rgb-r-range,value:0,min:0,max:255,tabindex:1");
      var colorRgbRNumber = helper.node("input|class:link-form-input-color-rgb-r-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:255,tabindex:1");
      var colorRgbGLabel = render.form.label({
        name: "link-form-input-color-rgb-g-range",
        labelText: "Green",
        className: "form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0"
      });
      var colorRgbGRange = helper.node("input|class:link-form-input-color-rgb-g-range mr-3,id:link-form-input-color-rgb-g-range,type:range,name:link-form-input-color-rgb-g-range,value:0,min:0,max:255,tabindex:1");
      var colorRgbGNumber = helper.node("input|class:link-form-input-color-rgb-g-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:255,tabindex:1");
      var colorRgbBLabel = render.form.label({
        name: "link-form-input-color-rgb-b-range",
        labelText: "Blue",
        className: "form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0"
      });
      var colorRgbBRange = helper.node("input|class:link-form-input-color-rgb-b-range mr-3,id:link-form-input-color-rgb-b-range,type:range,name:link-form-input-color-rgb-b-range,value:0,min:0,max:255,tabindex:1");
      var colorRgbBNumber = helper.node("input|class:link-form-input-color-rgb-b-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:255,tabindex:1");

      var colorOpacityLabel = render.form.label({
        name: "link-form-input-color-opacity-range",
        labelText: "Opacity"
      });
      var colorOpacityInputRange = helper.node("input|class:link-form-input-color-opacity-range mr-3,id:link-form-input-color-opacity-range,type:range,name:link-form-input-color-opacity-range,min:0,max:100,tabindex:1");
      var colorOpacityInputNumber = helper.node("input|class:link-form-input-color-opacity-number form-group-item-medium form-group-radius-left,type:number,min:0,max:100,tabindex:1");
      var colorOpacityInputDefault = render.form.button(false, "link-form-input-color-opacity-default", "icon-replay");

      // accent
      var accentThemeRadio = helper.node("input|class:link-form-input-accent-theme,id:link-form-input-accent-theme,type:radio,name:link-form-input-accent,tabindex:1,value:theme");
      var accentThemeLabel = render.form.label({
        name: "link-form-input-accent-theme",
        labelText: "Theme accent",
        labelDescription: "Use the Accent defined by the Theme.",
        icon: true
      });
      var accentCustomRadio = helper.node("input|class:link-form-input-accent-custom,id:link-form-input-accent-custom,type:radio,name:link-form-input-accent,tabindex:1,value:custom");
      var accentCustomLabel = render.form.label({
        name: "link-form-input-accent-custom",
        labelText: "Custom accent",
        labelDescription: "Override the Theme accent.",
        icon: true
      });
      var accentColorPicker = helper.node("input|id:link-form-input-accent-picker,class:form-group-item-half link-form-input-accent-picker,type:color,value:#000000,tabindex:1");
      var accentColorHex = helper.node("input|id:link-form-input-accent-hex,class:form-group-item-half link-form-input-accent-hex,type:text,placeholder:Hex code,value:#000000,tabindex:1,maxlength:7");

      var accentHslHLabel = render.form.label({
        name: "link-form-input-accent-hsl-h-range",
        labelText: "Hue",
        className: "form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0"
      });
      var accentHslHRange = helper.node("input|class:link-form-input-accent-hsl-h-range mr-3,id:link-form-input-accent-hsl-h-range,type:range,name:link-form-input-accent-hsl-h-range,value:0,min:0,max:359,tabindex:1");
      var accentHslHNumber = helper.node("input|class:link-form-input-accent-hsl-h-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:359,tabindex:1");
      var accentHslSLabel = render.form.label({
        name: "link-form-input-accent-hsl-s-range",
        labelText: "Saturation",
        className: "form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0"
      });
      var accentHslSRange = helper.node("input|class:link-form-input-accent-hsl-s-range mr-3,id:link-form-input-accent-hsl-s-range,type:range,name:link-form-input-accent-hsl-s-range,value:0,min:0,max:100,tabindex:1");
      var accentHslSNumber = helper.node("input|class:link-form-input-accent-hsl-s-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:100,tabindex:1");
      var accentHslLLabel = render.form.label({
        name: "link-form-input-accent-hsl-l-range",
        labelText: "Lightness",
        className: "form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0"
      });
      var accentHslLRange = helper.node("input|class:link-form-input-accent-hsl-l-range mr-3,id:link-form-input-accent-hsl-l-range,type:range,name:link-form-input-accent-hsl-l-range,value:0,min:0,max:100,tabindex:1");
      var accentHslLNumber = helper.node("input|class:link-form-input-accent-hsl-l-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:100,tabindex:1");
      var accentRgbRLabel = render.form.label({
        name: "link-form-input-accent-rgb-r-range",
        labelText: "Red",
        className: "form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0"
      });
      var accentRgbRRange = helper.node("input|class:link-form-input-accent-rgb-r-range mr-3,id:link-form-input-accent-rgb-r-range,type:range,name:link-form-input-accent-rgb-r-range,value:0,min:0,max:255,tabindex:1");
      var accentRgbRNumber = helper.node("input|class:link-form-input-accent-rgb-r-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:255,tabindex:1");
      var accentRgbGLabel = render.form.label({
        name: "link-form-input-accent-rgb-g-range",
        labelText: "Green",
        className: "form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0"
      });
      var accentRgbGRange = helper.node("input|class:link-form-input-accent-rgb-g-range mr-3,id:link-form-input-accent-rgb-g-range,type:range,name:link-form-input-accent-rgb-g-range,value:0,min:0,max:255,tabindex:1");
      var accentRgbGNumber = helper.node("input|class:link-form-input-accent-rgb-g-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:255,tabindex:1");
      var accentRgbBLabel = render.form.label({
        name: "link-form-input-accent-rgb-b-range",
        labelText: "Blue",
        className: "form-group-text form-group-text-left form-group-text-transparent form-group-text-borderless form-group-item-medium mr-3 pb-0"
      });
      var accentRgbBRange = helper.node("input|class:link-form-input-accent-rgb-b-range mr-3,id:link-form-input-accent-rgb-b-range,type:range,name:link-form-input-accent-rgb-b-range,value:0,min:0,max:255,tabindex:1");
      var accentRgbBNumber = helper.node("input|class:link-form-input-accent-rgb-b-number form-group-item-medium form-group-radius-left,type:number,value:0,min:0,max:255,tabindex:1");

      // background
      var backgroundShowInput = helper.node("input|class:link-form-input-background-show,id:link-form-input-background-show,type:checkbox,tabindex:1");
      var backgroundShowLabel = render.form.label({
        name: "link-form-input-background-show",
        labelText: "Show background",
        labelDescription: "Display an image or video as the background of this Bookmark tile.",
        icon: true
      });
      var backgroundImageRadio = helper.node("input|class:link-form-input-background-image,id:link-form-input-background-image,type:radio,name:link-form-input-background,tabindex:1,value:image");
      var backgroundImageLabel = render.form.label({
        name: "link-form-input-background-image",
        labelText: "Image",
        icon: true
      });
      var backgroundImageUrlLabel = render.form.label({
        name: "link-form-background-image",
        labelText: "Background image",
        className: "sr-only"
      });
      var backgroundImageUrlInput = helper.node("input|type:text,class:link-form-background-image,id:link-form-background-image,placeholder:https://www.example.com/image.jpg,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
      var backgroundVideoRadio = helper.node("input|class:link-form-input-background-video,id:link-form-input-background-video,type:radio,name:link-form-input-background,tabindex:1,value:video");
      var backgroundVideoLabel = render.form.label({
        name: "link-form-input-background-video",
        labelText: "Video",
        icon: true
      });
      var backgroundVideoUrlLabel = render.form.label({
        name: "link-form-background-video",
        labelText: "Background video",
        className: "sr-only"
      });
      var backgroundVideoUrlInput = helper.node("input|type:text,class:link-form-background-video,id:link-form-background-video,placeholder:https://www.example.com/video.mp4,tabindex:1,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false");
      var backgroundVideoUrlInputHelper = render.form.helper("link-form-background-video-helper", "Supports MP4 and WebM format.");
      var backgroundOpacityLabel = render.form.label({
        name: "link-form-image-opacity-range",
        labelText: "Opacity"
      });
      var backgroundOpacityInputRange = helper.node("input|class:link-form-image-opacity-range mr-3,id:link-form-image-opacity-range,type:range,name:link-form-image-opacity-range,min:0,max:100,tabindex:1");
      var backgroundOpacityInputNumber = helper.node("input|class:link-form-image-opacity-number form-group-item-medium form-group-radius-left,type:number,min:0,max:100,tabindex:1");
      var backgroundOpacityInputDefault = render.form.button(false, "link-form-image-opacity-default", "icon-replay");

      // tall wide
      var wideInput = helper.node("input|type:checkbox,class:link-form-wide,id:link-form-wide,tabindex:1");
      var wideLabel = render.form.label({
        name: "link-form-wide",
        labelText: "Wide tile",
        labelDescription: "Bookmark tile to span across two columns.",
        icon: true
      });
      var tallInput = helper.node("input|type:checkbox,class:link-form-tall,id:link-form-tall,tabindex:1");
      var tallLabel = render.form.label({
        name: "link-form-tall",
        labelText: "Tall tile",
        labelDescription: "Bookmark tile to span across two rows.",
        icon: true,
      });
      var wideTallLabelHelper = render.form.helper("link-form-wide-tall-helper", "Bookmark tile will span across two columns or rows if the Bookmark Area is large enough.");

      var advancedCollapse = render.form.collapse([
        render.form.fieldset([
          render.form.wrap([
            helper.node("h2:Visual Element|class:mb-0 mt-3")
          ]),
          render.form.wrap([
            render.form.indent([
              render.form.wrap([
                displayLetterSizeLabel,
                render.form.group([
                  displayLetterSizeInputRange,
                  displayLetterSizeInputNumber,
                  displayLetterSizeInputDefault
                ])
              ]),
              render.form.wrap([
                displayIconSizeLabel,
                render.form.group([
                  displayIconSizeInputRange,
                  displayIconSizeInputNumber,
                  displayIconSizeInputDefault
                ])
              ]),
              render.form.wrap([
                displayImageSizeLabel,
                render.form.group([
                  displayImageSizeInputRange,
                  displayImageSizeInputNumber,
                  displayImageSizeInputDefault
                ])
              ]),
              render.form.wrap([
                render.form.indent([
                  render.form.wrap([
                    displayShadowSizeLabel,
                    render.form.group([
                      displayShadowSizeInputRange,
                      displayShadowSizeInputNumber,
                      displayShadowSizeInputDefault
                    ])
                  ]),
                  render.form.wrap([
                    displayShadowSizeInputHelper
                  ])
                ])
              ])
            ])
          ])
        ]),
        render.form.fieldset([
          render.form.wrap([
            helper.node("h2:Name|class:mb-0")
          ]),
          render.form.wrap([
            render.form.indent([
              render.form.wrap([
                nameSizeLabel,
                render.form.group([
                  nameSizeInputRange,
                  nameSizeInputNumber,
                  nameSizeInputDefault
                ])
              ])
            ])
          ])
        ]),
        render.form.fieldset([
          render.form.wrap([
            helper.node("h2:Content|class:mb-0")
          ]),
          render.form.wrap([
            render.form.indent([
              render.form.wrap([
                displayAlignmentLabel
              ]),
              render.form.wrap([
                render.form.formGrid3x3([
                  render.form.wrap([
                    displayAlignmentTopLeftRadio,
                    displayAlignmentTopLeftLabel
                  ]),
                  render.form.wrap([
                    displayAlignmentTopCenterRadio,
                    displayAlignmentTopCenterLabel
                  ]),
                  render.form.wrap([
                    displayAlignmentTopRightRadio,
                    displayAlignmentTopRightLabel
                  ]),
                  render.form.wrap([
                    displayAlignmentCenterLeftRadio,
                    displayAlignmentCenterLeftLabel
                  ]),
                  render.form.wrap([
                    displayAlignmentCenterCenterRadio,
                    displayAlignmentCenterCenterLabel
                  ]),
                  render.form.wrap([
                    displayAlignmentCenterRightRadio,
                    displayAlignmentCenterRightLabel
                  ]),
                  render.form.wrap([
                    displayAlignmentBottomLeftRadio,
                    displayAlignmentBottomLeftLabel
                  ]),
                  render.form.wrap([
                    displayAlignmentBottomCenterRadio,
                    displayAlignmentBottomCenterLabel
                  ]),
                  render.form.wrap([
                    displayAlignmentBottomRightRadio,
                    displayAlignmentBottomRightLabel
                  ])
                ])
              ]),
              render.form.wrap([
                displayAlignmentHelper
              ]),
              helper.node("hr"),
              render.form.wrap([
                displayRotateLabel,
                render.form.group([
                  displayRotateRange,
                  displayRotateNumber,
                  displayRotateDefault
                ])
              ]),
              render.form.wrap([
                displayTranslateXLabel,
                render.form.group([
                  displayTranslateXRange,
                  displayTranslateXNumber,
                  displayTranslateXDefault
                ])
              ]),
              render.form.wrap([
                displayTranslateYLabel,
                render.form.group([
                  displayTranslateYRange,
                  displayTranslateYNumber,
                  displayTranslateYDefault
                ])
              ]),
              helper.node("hr"),
              render.form.wrap([
                displayGutterLabel,
                render.form.group([
                  displayGutterRange,
                  displayGutterNumber,
                  displayGutterDefault
                ])
              ]),
              helper.node("hr"),
              render.form.wrap([
                displayAlignmentVerticalRadio,
                displayAlignmentVerticalLabel
              ]),
              render.form.wrap([
                displayAlignmentHorizontalRadio,
                displayAlignmentHorizontalLabel
              ]),
              render.form.wrap([
                displayAlignmentHelper
              ]),
              helper.node("hr"),
              render.form.wrap([
                displayDirectionVisualnameRadio,
                displayDirectionVisualnameLabel
              ]),
              render.form.wrap([
                displayDirectionNamevisualRadio,
                displayDirectionNamevisualLabel
              ]),
              render.form.wrap([
                displayDirectionHelper
              ])
            ])
          ])
        ]),
        render.form.fieldset([
          render.form.wrap([
            helper.node("h2:Colour|class:mb-0")
          ]),
          render.form.wrap([
            render.form.indent([
              render.form.wrap([
                colorThemeRadio,
                colorThemeLabel
              ]),
              render.form.wrap([
                colorCustomRadio,
                colorCustomLabel
              ]),
              render.form.wrap([
                render.form.indent([
                  render.form.wrap([
                    render.form.group([
                      colorColorPicker,
                      colorColorHex
                    ])
                  ]),
                  helper.node("hr"),
                  render.form.wrap([
                    render.form.group([
                      colorHslHLabel,
                      colorHslHRange,
                      colorHslHNumber
                    ])
                  ]),
                  render.form.wrap([
                    render.form.group([
                      colorHslSLabel,
                      colorHslSRange,
                      colorHslSNumber
                    ])
                  ]),
                  render.form.wrap([
                    render.form.group([
                      colorHslLLabel,
                      colorHslLRange,
                      colorHslLNumber
                    ])
                  ]),
                  helper.node("hr"),
                  render.form.wrap([
                    render.form.group([
                      colorRgbRLabel,
                      colorRgbRRange,
                      colorRgbRNumber
                    ])
                  ]),
                  render.form.wrap([
                    render.form.group([
                      colorRgbGLabel,
                      colorRgbGRange,
                      colorRgbGNumber
                    ])
                  ]),
                  render.form.wrap([
                    render.form.group([
                      colorRgbBLabel,
                      colorRgbBRange,
                      colorRgbBNumber
                    ])
                  ])
                ])
              ]),
              helper.node("hr"),
              render.form.wrap([
                colorOpacityLabel,
                render.form.group([
                  colorOpacityInputRange,
                  colorOpacityInputNumber,
                  colorOpacityInputDefault
                ])
              ])
            ])
          ])
        ]),
        render.form.fieldset([
          render.form.wrap([
            helper.node("h2:Accent|class:mb-0")
          ]),
          render.form.wrap([
            render.form.indent([
              render.form.wrap([
                accentThemeRadio,
                accentThemeLabel
              ]),
              render.form.wrap([
                accentCustomRadio,
                accentCustomLabel
              ]),
              render.form.wrap([
                render.form.indent([
                  render.form.wrap([
                    render.form.group([
                      accentColorPicker,
                      accentColorHex
                    ])
                  ]),
                  helper.node("hr"),
                  render.form.wrap([
                    render.form.group([
                      accentHslHLabel,
                      accentHslHRange,
                      accentHslHNumber
                    ])
                  ]),
                  render.form.wrap([
                    render.form.group([
                      accentHslSLabel,
                      accentHslSRange,
                      accentHslSNumber
                    ])
                  ]),
                  render.form.wrap([
                    render.form.group([
                      accentHslLLabel,
                      accentHslLRange,
                      accentHslLNumber
                    ])
                  ]),
                  helper.node("hr"),
                  render.form.wrap([
                    render.form.group([
                      accentRgbRLabel,
                      accentRgbRRange,
                      accentRgbRNumber
                    ])
                  ]),
                  render.form.wrap([
                    render.form.group([
                      accentRgbGLabel,
                      accentRgbGRange,
                      accentRgbGNumber
                    ])
                  ]),
                  render.form.wrap([
                    render.form.group([
                      accentRgbBLabel,
                      accentRgbBRange,
                      accentRgbBNumber
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        render.form.fieldset([
          render.form.wrap([
            helper.node("h2:Background|class:mb-0")
          ]),
          render.form.wrap([
            render.form.indent([
              render.form.wrap([
                backgroundShowInput,
                backgroundShowLabel
              ]),
              render.form.wrap([
                render.form.indent([
                  render.form.wrap([
                    backgroundImageRadio,
                    backgroundImageLabel
                  ]),
                  render.form.wrap([
                    render.form.indent([
                      render.form.wrap([
                        backgroundImageUrlLabel,
                        backgroundImageUrlInput
                      ])
                    ])
                  ]),
                  render.form.wrap([
                    backgroundVideoRadio,
                    backgroundVideoLabel
                  ]),
                  render.form.wrap([
                    render.form.indent([
                      render.form.wrap([
                        backgroundVideoUrlLabel,
                        backgroundVideoUrlInput
                      ]),
                      render.form.wrap([
                        backgroundVideoUrlInputHelper
                      ])
                    ])
                  ]),
                  render.form.wrap([
                    render.form.indent([
                      helper.node("hr"),
                      render.form.wrap([
                        backgroundOpacityLabel,
                        render.form.group([
                          backgroundOpacityInputRange,
                          backgroundOpacityInputNumber,
                          backgroundOpacityInputDefault
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        render.form.fieldset([
          render.form.wrap([
            helper.node("h2:Tile|class:mb-0")
          ]),
          render.form.wrap([
            render.form.indent([
              render.form.wrap([
                wideInput,
                wideLabel
              ]),
              render.form.wrap([
                tallInput,
                tallLabel
              ]),
              render.form.wrap([
                wideTallLabelHelper
              ])
            ])
          ])
        ])
      ]);

      form.appendChild(
        render.form.fieldset([
          render.form.wrap([
            advancedCollapseButton
          ]),
          render.form.wrap([
            advancedCollapseButtonHelper
          ]),
          advancedCollapse
        ])
      );

      // form
      formAside.appendChild(formPreviewArea);
      formArea.appendChild(form);
      formArea.appendChild(formAside);

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
            groupExistingGroupSelect.appendChild(option);
          });
        } else {
          groupNewRadio.checked = true;
          groupExistingRadio.setAttribute("disabled", "");
          groupExistingGroupSelect.setAttribute("disabled", "");
          helper.addClass(groupExistingPositionLabel, "disabled");
          groupExistingPosition.setAttribute("disabled", "");
          groupNewNameInput.removeAttribute("disabled");
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

          if (stagedLink.position.destination.item >= 0) {
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
              groupExistingPosition.selectedIndex = (i - 1);
            }
          };

        };
      };

      var populateForm = function() {
        groupExistingRadio.checked = true;
        groupExistingGroupSelect.selectedIndex = stagedLink.position.origin.group;
        if (options.useStagedLink) {
          groupExistingPosition.selectedIndex = stagedLink.position.origin.item;
        };

        urlInput.value = stagedLink.link.url;

        displayShowCheckbox.checked = stagedLink.link.display.visual.show;

        if (stagedLink.link.display.visual.type == "letter") {
          displayLetterRadio.checked = true;
          displayIconRadio.checked = false;
          displayImageRadio.checked = false;
        } else if (stagedLink.link.display.visual.type == "icon") {
          displayLetterRadio.checked = false;
          displayIconRadio.checked = true;
          displayImageRadio.checked = false;
        } else if (stagedLink.link.display.visual.type == "image") {
          displayLetterRadio.checked = false;
          displayIconRadio.checked = false;
          displayImageRadio.checked = true;
        };

        displayLetterInput.value = stagedLink.link.display.visual.letter.text;
        displayIconInput.value = stagedLink.link.display.visual.icon.label;
        displayImageInput.value = stagedLink.link.display.visual.image.url;

        if (helper.checkIfValidString(stagedLink.link.display.visual.icon.prefix) && helper.checkIfValidString(stagedLink.link.display.visual.icon.name) && helper.checkIfValidString(stagedLink.link.display.visual.icon.label)) {
          displayIconFormGroupText.appendChild(helper.node("span|class:link-form-icon " + stagedLink.link.display.visual.icon.prefix + " fa-" + stagedLink.link.display.visual.icon.name));
        };

        nameShowCheckbox.checked = stagedLink.link.display.name.show;
        nameInput.value = stagedLink.link.display.name.text;

        displayLetterSizeInputRange.value = mod.value.convert.from.float(stagedLink.link.display.visual.letter.size);
        displayLetterSizeInputNumber.value = mod.value.convert.from.float(stagedLink.link.display.visual.letter.size);
        displayIconSizeInputRange.value = mod.value.convert.from.float(stagedLink.link.display.visual.icon.size);
        displayIconSizeInputNumber.value = mod.value.convert.from.float(stagedLink.link.display.visual.icon.size);
        displayImageSizeInputRange.value = mod.value.convert.from.float(stagedLink.link.display.visual.image.size);
        displayImageSizeInputNumber.value = mod.value.convert.from.float(stagedLink.link.display.visual.image.size);
        displayShadowSizeInputRange.value = stagedLink.link.display.visual.shadow.size;
        displayShadowSizeInputNumber.value = stagedLink.link.display.visual.shadow.size;

        nameSizeInputRange.value = mod.value.convert.from.float(stagedLink.link.display.name.size);
        nameSizeInputNumber.value = mod.value.convert.from.float(stagedLink.link.display.name.size);

        if (link.stagedLink.link.display.alignment == "topleft") {
          displayAlignmentTopLeftRadio.checked = true;
        };
        if (link.stagedLink.link.display.alignment == "topcenter") {
          displayAlignmentTopCenterRadio.checked = true;
        };
        if (link.stagedLink.link.display.alignment == "topright") {
          displayAlignmentTopRightRadio.checked = true;
        };
        if (link.stagedLink.link.display.alignment == "centerleft") {
          displayAlignmentCenterLeftRadio.checked = true;
        };
        if (link.stagedLink.link.display.alignment == "centercenter") {
          displayAlignmentCenterCenterRadio.checked = true;
        };
        if (link.stagedLink.link.display.alignment == "centerright") {
          displayAlignmentCenterRightRadio.checked = true;
        };
        if (link.stagedLink.link.display.alignment == "bottomleft") {
          displayAlignmentBottomLeftRadio.checked = true;
        };
        if (link.stagedLink.link.display.alignment == "bottomcenter") {
          displayAlignmentBottomCenterRadio.checked = true;
        };
        if (link.stagedLink.link.display.alignment == "bottomright") {
          displayAlignmentBottomRightRadio.checked = true;
        };

        displayRotateRange.value = stagedLink.link.display.rotate;
        displayRotateNumber.value = stagedLink.link.display.rotate;
        displayTranslateXRange.value = mod.value.convert.from.float(stagedLink.link.display.translate.x);
        displayTranslateXNumber.value = mod.value.convert.from.float(stagedLink.link.display.translate.x);
        displayTranslateYRange.value = mod.value.convert.from.float(stagedLink.link.display.translate.y);
        displayTranslateYNumber.value = mod.value.convert.from.float(stagedLink.link.display.translate.y);

        displayGutterRange.value = stagedLink.link.display.gutter;
        displayGutterNumber.value = stagedLink.link.display.gutter;

        if (stagedLink.link.display.order == "visualname") {
          displayDirectionVisualnameRadio.checked = true;
        } else if (stagedLink.link.display.order == "namevisual") {
          displayDirectionNamevisualRadio.checked = true;
        };

        if (stagedLink.link.display.direction == "vertical") {
          displayAlignmentVerticalRadio.checked = true;
        } else if (stagedLink.link.display.direction == "horizontal") {
          displayAlignmentHorizontalRadio.checked = true;
        };

        if (stagedLink.link.color.by == "custom") {
          colorThemeRadio.checked = false;
          colorCustomRadio.checked = true;
        } else {
          colorThemeRadio.checked = true;
          colorCustomRadio.checked = false;
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

        colorOpacityInputRange.value = mod.value.convert.from.float(stagedLink.link.color.opacity);
        colorOpacityInputNumber.value = mod.value.convert.from.float(stagedLink.link.color.opacity);

        if (stagedLink.link.accent.by == "custom") {
          accentThemeRadio.checked = false;
          accentCustomRadio.checked = true;
        } else {
          accentThemeRadio.checked = true;
          accentCustomRadio.checked = false;
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

        backgroundShowInput.checked = stagedLink.link.background.show;
        if (stagedLink.link.background.type == "image") {
          backgroundImageRadio.checked = true;
          backgroundVideoRadio.checked = false;
        } else if (stagedLink.link.background.type == "video") {
          backgroundImageRadio.checked = false;
          backgroundVideoRadio.checked = true;
        };
        backgroundImageUrlInput.value = stagedLink.link.background.image.url;
        backgroundVideoUrlInput.value = stagedLink.link.background.video.url;
        backgroundOpacityInputRange.value = mod.value.convert.from.float(stagedLink.link.background.opacity);
        backgroundOpacityInputNumber.value = mod.value.convert.from.float(stagedLink.link.background.opacity);

        if (stagedLink.link.wide) {
          wideInput.checked = true;
        };
        if (stagedLink.link.tall) {
          tallInput.checked = true;
        };
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
        advanced: function() {
          if (mod.collapse.form.item.advanced) {
            helper.addClass(advancedCollapse, "active");
            helper.addClass(advancedCollapseButton, "active");
          } else {
            helper.removeClass(advancedCollapse, "active");
            helper.removeClass(advancedCollapseButton, "active");
          };
        }
      };

      var disableForm = function() {
        if (stagedLink.position.group.new) {
          helper.addClass(groupExistingGroupLabel, "disabled");
          groupExistingGroupSelect.setAttribute("disabled", "");
          groupExistingPosition.setAttribute("disabled", "");
          helper.addClass(groupExistingPositionLabel, "disabled");
          helper.removeClass(groupNewNameLabel, "disabled");
          groupNewNameInput.removeAttribute("disabled");
          groupNewRandomNameButton.removeAttribute("disabled");
        } else {
          helper.removeClass(groupExistingGroupLabel, "disabled");
          groupExistingGroupSelect.removeAttribute("disabled");
          groupExistingPosition.removeAttribute("disabled");
          helper.removeClass(groupExistingPositionLabel, "disabled");
          helper.addClass(groupNewNameLabel, "disabled");
          groupNewNameInput.setAttribute("disabled", "");
          groupNewRandomNameButton.setAttribute("disabled", "");
        };

        if (stagedLink.link.display.visual.show && stagedLink.link.display.visual.type == "letter") {
          displayLetterRadio.removeAttribute("disabled");
          displayIconRadio.removeAttribute("disabled");
          displayImageRadio.removeAttribute("disabled");
          displayLetterInput.removeAttribute("disabled");
          displayIconInput.setAttribute("disabled", "");
          displayImageInput.setAttribute("disabled", "");
          helper.addClass(displayIconFormGroupText, "disabled");
          displayIconFormGroupText.tabIndex = -1;
          helper.addClass(displayIconHelper, "disabled");
          displayIconFormGroupClear.setAttribute("disabled", "");
          displayImageInput.setAttribute("disabled", "");
          helper.addClass(displayImageHelper, "disabled");
        } else if (stagedLink.link.display.visual.show && stagedLink.link.display.visual.type == "icon") {
          displayLetterRadio.removeAttribute("disabled");
          displayIconRadio.removeAttribute("disabled");
          displayImageRadio.removeAttribute("disabled");
          displayLetterInput.setAttribute("disabled", "");
          displayIconInput.removeAttribute("disabled");
          displayImageInput.setAttribute("disabled", "");
          helper.removeClass(displayIconFormGroupText, "disabled");
          displayIconFormGroupText.tabIndex = 1;
          helper.removeClass(displayIconHelper, "disabled");
          displayIconFormGroupClear.removeAttribute("disabled");
          displayImageInput.setAttribute("disabled", "");
          helper.addClass(displayImageHelper, "disabled");
        } else if (stagedLink.link.display.visual.show && stagedLink.link.display.visual.type == "image") {
          displayLetterRadio.removeAttribute("disabled");
          displayIconRadio.removeAttribute("disabled");
          displayImageRadio.removeAttribute("disabled");
          displayLetterInput.setAttribute("disabled", "");
          displayIconInput.setAttribute("disabled", "");
          displayImageInput.setAttribute("disabled", "");
          helper.addClass(displayIconFormGroupText, "disabled");
          displayIconFormGroupText.tabIndex = -1;
          helper.addClass(displayIconHelper, "disabled");
          displayIconFormGroupClear.setAttribute("disabled", "");
          displayImageInput.removeAttribute("disabled");
          helper.removeClass(displayImageHelper, "disabled");
        } else {
          displayLetterRadio.setAttribute("disabled", "");
          displayIconRadio.setAttribute("disabled", "");
          displayImageRadio.setAttribute("disabled", "");
          displayLetterInput.setAttribute("disabled", "");
          displayIconInput.setAttribute("disabled", "");
          displayImageInput.setAttribute("disabled", "");
          helper.addClass(displayIconFormGroupText, "disabled");
          displayIconFormGroupText.tabIndex = -1;
          helper.addClass(displayIconHelper, "disabled");
          displayIconFormGroupClear.setAttribute("disabled", "");
          displayImageInput.setAttribute("disabled", "");
          helper.addClass(displayImageHelper, "disabled");
        };

        if (stagedLink.link.display.name.show) {
          nameInput.removeAttribute("disabled");
        } else {
          nameInput.setAttribute("disabled", "");
        };

        if (mod.collapse.form.item.advanced && stagedLink.link.display.visual.show) {
          if (stagedLink.link.display.visual.type == "letter") {
            helper.removeClass(displayLetterSizeLabel, "disabled");
            displayLetterSizeInputRange.removeAttribute("disabled");
            displayLetterSizeInputNumber.removeAttribute("disabled");
            displayLetterSizeInputDefault.removeAttribute("disabled");
            helper.addClass(displayIconSizeLabel, "disabled");
            displayIconSizeInputRange.setAttribute("disabled", "");
            displayIconSizeInputNumber.setAttribute("disabled", "");
            displayIconSizeInputDefault.setAttribute("disabled", "");
            helper.addClass(displayImageSizeLabel, "disabled");
            displayImageSizeInputRange.setAttribute("disabled", "");
            displayImageSizeInputNumber.setAttribute("disabled", "");
            displayImageSizeInputDefault.setAttribute("disabled", "");
            helper.removeClass(displayShadowSizeLabel, "disabled");
            displayShadowSizeInputRange.removeAttribute("disabled");
            displayShadowSizeInputNumber.removeAttribute("disabled");
            displayShadowSizeInputDefault.removeAttribute("disabled");
            helper.removeClass(displayShadowSizeInputHelper, "disabled");
          } else if (stagedLink.link.display.visual.type == "icon") {
            helper.addClass(displayLetterSizeLabel, "disabled");
            displayLetterSizeInputRange.setAttribute("disabled", "");
            displayLetterSizeInputNumber.setAttribute("disabled", "");
            displayLetterSizeInputDefault.setAttribute("disabled", "");
            helper.removeClass(displayIconSizeLabel, "disabled");
            displayIconSizeInputRange.removeAttribute("disabled");
            displayIconSizeInputNumber.removeAttribute("disabled");
            displayIconSizeInputDefault.removeAttribute("disabled");
            helper.addClass(displayImageSizeLabel, "disabled");
            displayImageSizeInputRange.setAttribute("disabled", "");
            displayImageSizeInputNumber.setAttribute("disabled", "");
            displayImageSizeInputDefault.setAttribute("disabled", "");
            helper.removeClass(displayShadowSizeLabel, "disabled");
            displayShadowSizeInputRange.removeAttribute("disabled");
            displayShadowSizeInputNumber.removeAttribute("disabled");
            displayShadowSizeInputDefault.removeAttribute("disabled");
            helper.removeClass(displayShadowSizeInputHelper, "disabled");
          } else if (stagedLink.link.display.visual.type == "image") {
            helper.addClass(displayLetterSizeLabel, "disabled");
            displayLetterSizeInputRange.setAttribute("disabled", "");
            displayLetterSizeInputNumber.setAttribute("disabled", "");
            displayLetterSizeInputDefault.setAttribute("disabled", "");
            helper.addClass(displayIconSizeLabel, "disabled");
            displayIconSizeInputRange.setAttribute("disabled", "");
            displayIconSizeInputNumber.setAttribute("disabled", "");
            displayIconSizeInputDefault.setAttribute("disabled", "");
            helper.removeClass(displayImageSizeLabel, "disabled");
            displayImageSizeInputRange.removeAttribute("disabled");
            displayImageSizeInputNumber.removeAttribute("disabled");
            displayImageSizeInputDefault.removeAttribute("disabled");
            helper.addClass(displayShadowSizeLabel, "disabled");
            displayShadowSizeInputRange.setAttribute("disabled", "");
            displayShadowSizeInputNumber.setAttribute("disabled", "");
            displayShadowSizeInputDefault.setAttribute("disabled", "");
            helper.addClass(displayShadowSizeInputHelper, "disabled");
          };
        } else {
          helper.addClass(displayLetterSizeLabel, "disabled");
          displayLetterSizeInputRange.setAttribute("disabled", "");
          displayLetterSizeInputNumber.setAttribute("disabled", "");
          displayLetterSizeInputDefault.setAttribute("disabled", "");
          helper.addClass(displayIconSizeLabel, "disabled");
          displayIconSizeInputRange.setAttribute("disabled", "");
          displayIconSizeInputNumber.setAttribute("disabled", "");
          displayIconSizeInputDefault.setAttribute("disabled", "");
          helper.addClass(displayImageSizeLabel, "disabled");
          displayImageSizeInputRange.setAttribute("disabled", "");
          displayImageSizeInputNumber.setAttribute("disabled", "");
          displayImageSizeInputDefault.setAttribute("disabled", "");
          helper.addClass(displayShadowSizeLabel, "disabled");
          displayShadowSizeInputRange.setAttribute("disabled", "");
          displayShadowSizeInputNumber.setAttribute("disabled", "");
          displayShadowSizeInputDefault.setAttribute("disabled", "");
          helper.addClass(displayShadowSizeInputHelper, "disabled");
        };

        if (mod.collapse.form.item.advanced && stagedLink.link.display.name.show) {
          helper.removeClass(nameSizeLabel, "disabled");
          nameSizeInputRange.removeAttribute("disabled");
          nameSizeInputNumber.removeAttribute("disabled");
          nameSizeInputDefault.removeAttribute("disabled");
        } else {
          helper.addClass(nameSizeLabel, "disabled");
          nameSizeInputRange.setAttribute("disabled", "");
          nameSizeInputNumber.setAttribute("disabled", "");
          nameSizeInputDefault.setAttribute("disabled", "");
        };

        if (mod.collapse.form.item.advanced && stagedLink.link.display.visual.show && stagedLink.link.display.name.show) {
          helper.removeClass(displayGutterLabel, "disabled");
          displayGutterRange.removeAttribute("disabled");
          displayGutterNumber.removeAttribute("disabled");
          displayGutterDefault.removeAttribute("disabled");
          displayAlignmentHorizontalRadio.removeAttribute("disabled");
          helper.removeClass(displayAlignmentHorizontalLabel, "disabled");
          displayAlignmentVerticalRadio.removeAttribute("disabled");
          helper.removeClass(displayAlignmentVerticalLabel, "disabled");
          displayDirectionVisualnameRadio.removeAttribute("disabled");
          helper.removeClass(displayDirectionVisualnameLabel, "disabled");
          displayDirectionNamevisualRadio.removeAttribute("disabled");
          helper.removeClass(displayDirectionNamevisualLabel, "disabled");
        } else {
          helper.addClass(displayGutterLabel, "disabled");
          displayGutterRange.setAttribute("disabled", "");
          displayGutterNumber.setAttribute("disabled", "");
          displayGutterDefault.setAttribute("disabled", "");
          displayAlignmentHorizontalRadio.setAttribute("disabled", "");
          helper.addClass(displayAlignmentHorizontalLabel, "disabled");
          displayAlignmentVerticalRadio.setAttribute("disabled", "");
          helper.addClass(displayAlignmentVerticalLabel, "disabled");
          displayDirectionVisualnameRadio.setAttribute("disabled", "");
          helper.addClass(displayDirectionVisualnameLabel, "disabled");
          displayDirectionNamevisualRadio.setAttribute("disabled", "");
          helper.addClass(displayDirectionNamevisualLabel, "disabled");
        };

        if (mod.collapse.form.item.advanced) {
          helper.removeClass(wideTallLabelHelper, "disabled");
          helper.removeClass(displayAlignmentLabel, "disabled");
          displayAlignmentTopLeftRadio.removeAttribute("disabled");
          displayAlignmentTopCenterRadio.removeAttribute("disabled");
          displayAlignmentTopRightRadio.removeAttribute("disabled");
          displayAlignmentCenterLeftRadio.removeAttribute("disabled");
          displayAlignmentCenterCenterRadio.removeAttribute("disabled");
          displayAlignmentCenterRightRadio.removeAttribute("disabled");
          displayAlignmentBottomLeftRadio.removeAttribute("disabled");
          displayAlignmentBottomCenterRadio.removeAttribute("disabled");
          displayAlignmentBottomRightRadio.removeAttribute("disabled");
          helper.removeClass(displayAlignmentHelper, "disabled");
          helper.removeClass(displayRotateLabel, "disabled");
          displayRotateRange.removeAttribute("disabled");
          displayRotateNumber.removeAttribute("disabled");
          displayRotateDefault.removeAttribute("disabled");
          helper.removeClass(displayTranslateXLabel, "disabled");
          displayTranslateXRange.removeAttribute("disabled");
          displayTranslateXNumber.removeAttribute("disabled");
          displayTranslateXDefault.removeAttribute("disabled");
          helper.removeClass(displayTranslateYLabel, "disabled");
          displayTranslateYRange.removeAttribute("disabled");
          displayTranslateYNumber.removeAttribute("disabled");
          displayTranslateYDefault.removeAttribute("disabled");
          helper.removeClass(displayAlignmentHelper, "disabled");
          helper.removeClass(displayDirectionHelper, "disabled");
          colorThemeRadio.removeAttribute("disabled");
          helper.removeClass(colorThemeLabel, "disabled");
          colorCustomRadio.removeAttribute("disabled");
          helper.removeClass(colorCustomLabel, "disabled");
          helper.removeClass(colorOpacityLabel, "disabled");
          colorOpacityInputRange.removeAttribute("disabled");
          colorOpacityInputNumber.removeAttribute("disabled");
          colorOpacityInputDefault.removeAttribute("disabled");
          accentThemeRadio.removeAttribute("disabled");
          helper.removeClass(accentThemeLabel, "disabled");
          accentCustomRadio.removeAttribute("disabled");
          helper.removeClass(accentCustomLabel, "disabled");
          backgroundShowInput.removeAttribute("disabled");
          wideInput.removeAttribute("disabled");
          helper.removeClass(wideLabel, "disabled");
          tallInput.removeAttribute("disabled");
          helper.removeClass(tallLabel, "disabled");
        } else {
          helper.addClass(wideTallLabelHelper, "disabled");
          helper.addClass(displayAlignmentLabel, "disabled");
          displayAlignmentTopLeftRadio.setAttribute("disabled", "");
          displayAlignmentTopCenterRadio.setAttribute("disabled", "");
          displayAlignmentTopRightRadio.setAttribute("disabled", "");
          displayAlignmentCenterLeftRadio.setAttribute("disabled", "");
          displayAlignmentCenterCenterRadio.setAttribute("disabled", "");
          displayAlignmentCenterRightRadio.setAttribute("disabled", "");
          displayAlignmentBottomLeftRadio.setAttribute("disabled", "");
          displayAlignmentBottomCenterRadio.setAttribute("disabled", "");
          displayAlignmentBottomRightRadio.setAttribute("disabled", "");
          helper.addClass(displayAlignmentHelper, "disabled");
          helper.addClass(displayRotateLabel, "disabled");
          displayRotateRange.setAttribute("disabled", "");
          displayRotateNumber.setAttribute("disabled", "");
          displayRotateDefault.setAttribute("disabled", "");
          helper.addClass(displayTranslateXLabel, "disabled");
          displayTranslateXRange.setAttribute("disabled", "");
          displayTranslateXNumber.setAttribute("disabled", "");
          displayTranslateXDefault.setAttribute("disabled", "");
          helper.addClass(displayTranslateYLabel, "disabled");
          displayTranslateYRange.setAttribute("disabled", "");
          displayTranslateYNumber.setAttribute("disabled", "");
          displayTranslateYDefault.setAttribute("disabled", "");
          helper.addClass(displayAlignmentHelper, "disabled");
          helper.addClass(displayDirectionHelper, "disabled");
          colorThemeRadio.setAttribute("disabled", "");
          helper.addClass(colorThemeLabel, "disabled");
          colorCustomRadio.setAttribute("disabled", "");
          helper.addClass(colorCustomLabel, "disabled");
          helper.addClass(colorOpacityLabel, "disabled");
          colorOpacityInputRange.setAttribute("disabled", "");
          colorOpacityInputNumber.setAttribute("disabled", "");
          colorOpacityInputDefault.setAttribute("disabled", "");
          accentThemeRadio.setAttribute("disabled", "");
          helper.addClass(accentThemeLabel, "disabled");
          accentCustomRadio.setAttribute("disabled", "");
          helper.addClass(accentCustomLabel, "disabled");
          backgroundShowInput.setAttribute("disabled", "");
          wideInput.setAttribute("disabled", "");
          helper.addClass(wideLabel, "disabled");
          tallInput.setAttribute("disabled", "");
          helper.addClass(tallLabel, "disabled");
        };

        if (mod.collapse.form.item.advanced && stagedLink.link.background.show) {
          backgroundImageRadio.removeAttribute("disabled");
          helper.removeClass(backgroundImageLabel, "disabled");
          backgroundVideoRadio.removeAttribute("disabled");
          helper.removeClass(backgroundVideoLabel, "disabled");
          helper.removeClass(backgroundOpacityLabel, "disabled");
          backgroundOpacityInputRange.removeAttribute("disabled");
          backgroundOpacityInputNumber.removeAttribute("disabled");
          backgroundOpacityInputDefault.removeAttribute("disabled");
        } else {
          backgroundImageRadio.setAttribute("disabled", "");
          helper.addClass(backgroundImageLabel, "disabled");
          backgroundVideoRadio.setAttribute("disabled", "");
          helper.addClass(backgroundVideoLabel, "disabled");
          helper.addClass(backgroundOpacityLabel, "disabled");
          backgroundOpacityInputRange.setAttribute("disabled", "");
          backgroundOpacityInputNumber.setAttribute("disabled", "");
          backgroundOpacityInputDefault.setAttribute("disabled", "");
        };

        if (mod.collapse.form.item.advanced && stagedLink.link.background.show && stagedLink.link.background.type == "image") {
          helper.removeClass(backgroundImageUrlLabel, "disabled");
          backgroundImageUrlInput.removeAttribute("disabled");
          helper.addClass(backgroundVideoUrlLabel, "disabled");
          backgroundVideoUrlInput.setAttribute("disabled", "");
          helper.addClass(backgroundVideoUrlInputHelper, "disabled");
        } else if (mod.collapse.form.item.advanced && stagedLink.link.background.show && stagedLink.link.background.type == "video") {
          helper.addClass(backgroundImageUrlLabel, "disabled");
          backgroundImageUrlInput.setAttribute("disabled", "");
          backgroundVideoUrlInput.removeAttribute("disabled");
          helper.removeClass(backgroundVideoUrlLabel, "disabled");
          helper.removeClass(backgroundVideoUrlInputHelper, "disabled");
        } else {
          helper.addClass(backgroundImageUrlLabel, "disabled");
          backgroundImageUrlInput.setAttribute("disabled", "");
          backgroundVideoUrlInput.setAttribute("disabled", "");
          helper.addClass(backgroundVideoUrlLabel, "disabled");
          helper.addClass(backgroundVideoUrlInputHelper, "disabled");
        };

        if (mod.collapse.form.item.advanced && stagedLink.link.color.by == "custom") {
          colorColorPicker.removeAttribute("disabled");
          colorColorHex.removeAttribute("disabled");
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
          colorColorPicker.setAttribute("disabled", "");
          colorColorHex.setAttribute("disabled", "");
          helper.addClass(colorHslHLabel, "disabled");
          colorHslHRange.setAttribute("disabled", "");
          colorHslHNumber.setAttribute("disabled", "");
          helper.addClass(colorHslSLabel, "disabled");
          colorHslSRange.setAttribute("disabled", "");
          colorHslSNumber.setAttribute("disabled", "");
          helper.addClass(colorHslLLabel, "disabled");
          colorHslLRange.setAttribute("disabled", "");
          colorHslLNumber.setAttribute("disabled", "");
          helper.addClass(colorRgbRLabel, "disabled");
          colorRgbRRange.setAttribute("disabled", "");
          colorRgbRNumber.setAttribute("disabled", "");
          helper.addClass(colorRgbGLabel, "disabled");
          colorRgbGRange.setAttribute("disabled", "");
          colorRgbGNumber.setAttribute("disabled", "");
          helper.addClass(colorRgbBLabel, "disabled");
          colorRgbBRange.setAttribute("disabled", "");
          colorRgbBNumber.setAttribute("disabled", "");
        };
        if (mod.collapse.form.item.advanced && stagedLink.link.accent.by == "custom") {
          accentColorPicker.removeAttribute("disabled");
          accentColorHex.removeAttribute("disabled");
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
          accentColorPicker.setAttribute("disabled", "");
          accentColorHex.setAttribute("disabled", "");
          helper.addClass(accentHslHLabel, "disabled");
          accentHslHRange.setAttribute("disabled", "");
          accentHslHNumber.setAttribute("disabled", "");
          helper.addClass(accentHslSLabel, "disabled");
          accentHslSRange.setAttribute("disabled", "");
          accentHslSNumber.setAttribute("disabled", "");
          helper.addClass(accentHslLLabel, "disabled");
          accentHslLRange.setAttribute("disabled", "");
          accentHslLNumber.setAttribute("disabled", "");
          helper.addClass(accentRgbRLabel, "disabled");
          accentRgbRRange.setAttribute("disabled", "");
          accentRgbRNumber.setAttribute("disabled", "");
          helper.addClass(accentRgbGLabel, "disabled");
          accentRgbGRange.setAttribute("disabled", "");
          accentRgbGNumber.setAttribute("disabled", "");
          helper.addClass(accentRgbBLabel, "disabled");
          accentRgbBRange.setAttribute("disabled", "");
          accentRgbBNumber.setAttribute("disabled", "");
        };
      };

      makeGroupOptions();

      makePostionOptions();

      disableForm();

      populateForm();

      form.addEventListener("keydown", function(event) {
        if (event.keyCode == 13) {
          event.preventDefault();
          return false;
        };
      }, false);
      groupExistingRadio.addEventListener("change", function(event) {
        stagedLink.position.destination.group = groupExistingGroupSelect.selectedIndex;
        stagedLink.position.group.new = false;
        stagedLink.position.group.name.show = false;
        stagedLink.position.group.openAll.show = false;
        disableForm();
      }, false);
      groupExistingGroupSelect.addEventListener("change", function(event) {
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
        disableForm();
      }, false);
      groupNewNameInput.addEventListener("input", function(event) {
        stagedLink.position.group.name.text = this.value;
      }, false);
      groupNewRandomNameButton.addEventListener("click", function(event) {
        var randomName = helper.randomString({
          adjectivesCount: helper.randomNumber(1, 3)
        });
        stagedLink.position.group.name.text = randomName;
        groupNewNameInput.value = randomName;
      }, false);

      displayShowCheckbox.addEventListener("change", function(event) {
        stagedLink.link.display.visual.show = this.checked;
        disableForm();
        render.item.preview.delay(formPreviewArea);
      }, false);
      displayLetterRadio.addEventListener("change", function(event) {
        stagedLink.link.display.visual.type = this.value;
        render.item.preview.delay(formPreviewArea);
        disableForm();
      }, false);
      displayLetterInput.addEventListener("input", function(event) {
        stagedLink.link.display.visual.letter.text = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);
      displayIconRadio.addEventListener("change", function(event) {
        stagedLink.link.display.visual.type = this.value;
        render.item.preview.delay(formPreviewArea);
        disableForm();
      }, false);
      displayIconFormGroupClear.addEventListener("click", function(event) {
        stagedLink.link.display.visual.icon.name = "";
        stagedLink.link.display.visual.icon.prefix = "";
        stagedLink.link.display.visual.icon.label = "";
        var existingIcon = helper.e(".link-form-icon");
        if (existingIcon) {
          existingIcon.remove();
        };
        displayIconInput.value = "";
        render.item.preview.delay(formPreviewArea);
      }, false);
      displayImageRadio.addEventListener("change", function(event) {
        stagedLink.link.display.visual.type = this.value;
        render.item.preview.delay(formPreviewArea);
        disableForm();
      }, false);
      displayImageInput.addEventListener("input", function(event) {
        stagedLink.link.display.visual.image.url = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);
      nameShowCheckbox.addEventListener("change", function(event) {
        stagedLink.link.display.name.show = this.checked;
        disableForm();
        render.item.preview.delay(formPreviewArea);
      }, false);
      nameInput.addEventListener("input", function(event) {
        stagedLink.link.display.name.text = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);
      urlInput.addEventListener("input", function(event) {
        stagedLink.link.url = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);

      advancedCollapseButton.addEventListener("click", function() {
        if (mod.collapse.form.item.advanced) {
          mod.collapse.form.item.advanced = false;
        } else {
          mod.collapse.form.item.advanced = true;
        };
        collapse.advanced();
        disableForm();
      });
      displayLetterSizeInputRange.addEventListener("input", function(event) {
        stagedLink.link.display.visual.letter.size = mod.value.convert.to.float(parseInt(this.value, 10));
        displayLetterSizeInputNumber.value = mod.value.convert.from.float(stagedLink.link.display.visual.letter.size);
        render.item.preview.delay(formPreviewArea);
      });
      displayLetterSizeInputNumber.addEventListener("input", function(event) {
        var inputValue = parseInt(this.value, 10);
        for (var key in mod.value.modify) {
          if (this[key] != "") {
            inputValue = mod.value.modify[key](inputValue, this);
          };
        };
        stagedLink.link.display.visual.letter.size = mod.value.convert.to.float(inputValue);
        displayLetterSizeInputRange.value = mod.value.convert.from.float(stagedLink.link.display.visual.letter.size);
        var set = function(input) {
          input.value = mod.value.convert.from.float(stagedLink.link.display.visual.letter.size);
        };
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      displayLetterSizeInputDefault.addEventListener("click", function(event) {
        stagedLink.link.display.visual.letter.size = helper.getObject({
          object: state.get.default(),
          path: "link.item.display.visual.letter.size"
        });
        displayLetterSizeInputRange.value = mod.value.convert.from.float(stagedLink.link.display.visual.letter.size);
        displayLetterSizeInputNumber.value = mod.value.convert.from.float(stagedLink.link.display.visual.letter.size);
        render.item.preview.delay(formPreviewArea);
      });
      displayIconSizeInputRange.addEventListener("input", function(event) {
        stagedLink.link.display.visual.icon.size = mod.value.convert.to.float(parseInt(this.value, 10));
        displayIconSizeInputNumber.value = mod.value.convert.from.float(stagedLink.link.display.visual.icon.size);
        render.item.preview.delay(formPreviewArea);
      });
      displayIconSizeInputNumber.addEventListener("input", function(event) {
        var inputValue = parseInt(this.value, 10);
        for (var key in mod.value.modify) {
          if (this[key] != "") {
            inputValue = mod.value.modify[key](inputValue, this);
          };
        };
        stagedLink.link.display.visual.icon.size = mod.value.convert.to.float(inputValue);
        displayIconSizeInputRange.value = mod.value.convert.from.float(stagedLink.link.display.visual.icon.size);
        var set = function(input) {
          input.value = mod.value.convert.from.float(stagedLink.link.display.visual.icon.size);
        };
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      displayIconSizeInputDefault.addEventListener("click", function(event) {
        stagedLink.link.display.visual.icon.size = helper.getObject({
          object: state.get.default(),
          path: "link.item.display.visual.icon.size"
        });
        displayIconSizeInputRange.value = mod.value.convert.from.float(stagedLink.link.display.visual.icon.size);
        displayIconSizeInputNumber.value = mod.value.convert.from.float(stagedLink.link.display.visual.icon.size);
        render.item.preview.delay(formPreviewArea);
      });
      displayImageSizeInputRange.addEventListener("input", function(event) {
        stagedLink.link.display.visual.image.size = mod.value.convert.to.float(parseInt(this.value, 10));
        displayImageSizeInputNumber.value = mod.value.convert.from.float(stagedLink.link.display.visual.image.size);
        render.item.preview.delay(formPreviewArea);
      });
      displayImageSizeInputNumber.addEventListener("input", function(event) {
        var inputValue = parseInt(this.value, 10);
        for (var key in mod.value.modify) {
          if (this[key] != "") {
            inputValue = mod.value.modify[key](inputValue, this);
          };
        };
        stagedLink.link.display.visual.image.size = mod.value.convert.to.float(inputValue);
        displayImageSizeInputRange.value = mod.value.convert.from.float(stagedLink.link.display.visual.image.size);
        var set = function(input) {
          input.value = mod.value.convert.from.float(stagedLink.link.display.visual.image.size);
        };
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      displayImageSizeInputDefault.addEventListener("click", function(event) {
        stagedLink.link.display.visual.image.size = helper.getObject({
          object: state.get.default(),
          path: "link.item.display.visual.image.size"
        });
        displayImageSizeInputRange.value = mod.value.convert.from.float(stagedLink.link.display.visual.image.size);
        displayImageSizeInputNumber.value = mod.value.convert.from.float(stagedLink.link.display.visual.image.size);
        render.item.preview.delay(formPreviewArea);
      });
      displayShadowSizeInputRange.addEventListener("input", function(event) {
        stagedLink.link.display.visual.shadow.size = parseInt(this.value, 10);
        displayShadowSizeInputNumber.value = stagedLink.link.display.visual.shadow.size;
        render.item.preview.delay(formPreviewArea);
      });
      displayShadowSizeInputNumber.addEventListener("input", function(event) {
        var inputValue = parseInt(this.value, 10);
        for (var key in mod.value.modify) {
          if (this[key] != "") {
            inputValue = mod.value.modify[key](inputValue, this);
          };
        };
        stagedLink.link.display.visual.shadow.size = inputValue;
        displayShadowSizeInputRange.value = stagedLink.link.display.visual.shadow.size;
        var set = function(input) {
          input.value = stagedLink.link.display.visual.shadow.size;
        };
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      displayShadowSizeInputDefault.addEventListener("click", function(event) {
        stagedLink.link.display.visual.shadow.size = helper.getObject({
          object: state.get.default(),
          path: "link.item.display.visual.shadow.size"
        });
        displayShadowSizeInputRange.value = stagedLink.link.display.visual.shadow.size;
        displayShadowSizeInputNumber.value = stagedLink.link.display.visual.shadow.size;
        render.item.preview.delay(formPreviewArea);
      });
      nameSizeInputRange.addEventListener("input", function(event) {
        stagedLink.link.display.name.size = mod.value.convert.to.float(parseInt(this.value, 10));
        nameSizeInputNumber.value = mod.value.convert.from.float(stagedLink.link.display.name.size);
        render.item.preview.delay(formPreviewArea);
      });
      nameSizeInputNumber.addEventListener("input", function(event) {
        var inputValue = parseInt(this.value, 10);
        for (var key in mod.value.modify) {
          if (this[key] != "") {
            inputValue = mod.value.modify[key](inputValue, this);
          };
        };
        stagedLink.link.display.name.size = mod.value.convert.to.float(inputValue);
        nameSizeInputRange.value = mod.value.convert.from.float(stagedLink.link.display.name.size);
        var set = function(input) {
          input.value = mod.value.convert.from.float(stagedLink.link.display.name.size);
        };
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      nameSizeInputDefault.addEventListener("click", function(event) {
        stagedLink.link.display.name.size = helper.getObject({
          object: state.get.default(),
          path: "link.item.display.name.size"
        });
        nameSizeInputRange.value = mod.value.convert.from.float(stagedLink.link.display.name.size);
        nameSizeInputNumber.value = mod.value.convert.from.float(stagedLink.link.display.name.size);
        render.item.preview.delay(formPreviewArea);
      });
      displayAlignmentTopLeftRadio.addEventListener("input", function(event) {
        link.stagedLink.link.display.alignment = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);
      displayAlignmentTopCenterRadio.addEventListener("input", function(event) {
        link.stagedLink.link.display.alignment = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);
      displayAlignmentTopRightRadio.addEventListener("input", function(event) {
        link.stagedLink.link.display.alignment = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);
      displayAlignmentCenterLeftRadio.addEventListener("input", function(event) {
        link.stagedLink.link.display.alignment = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);
      displayAlignmentCenterCenterRadio.addEventListener("input", function(event) {
        link.stagedLink.link.display.alignment = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);
      displayAlignmentCenterRightRadio.addEventListener("input", function(event) {
        link.stagedLink.link.display.alignment = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);
      displayAlignmentBottomLeftRadio.addEventListener("input", function(event) {
        link.stagedLink.link.display.alignment = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);
      displayAlignmentBottomCenterRadio.addEventListener("input", function(event) {
        link.stagedLink.link.display.alignment = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);
      displayAlignmentBottomRightRadio.addEventListener("input", function(event) {
        link.stagedLink.link.display.alignment = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);
      displayRotateRange.addEventListener("input", function(event) {
        stagedLink.link.display.rotate = parseInt(this.value, 10);
        displayRotateNumber.value = stagedLink.link.display.rotate;
        render.item.preview.delay(formPreviewArea);
      });
      displayRotateNumber.addEventListener("input", function(event) {
        var inputValue = parseInt(this.value, 10);
        for (var key in mod.value.modify) {
          if (this[key] != "") {
            inputValue = mod.value.modify[key](inputValue, this);
          };
        };
        stagedLink.link.display.rotate = inputValue;
        displayRotateRange.value = stagedLink.link.display.rotate;
        var set = function(input) {
          input.value = stagedLink.link.display.rotate;
        };
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      displayRotateDefault.addEventListener("click", function(event) {
        stagedLink.link.display.rotate = helper.getObject({
          object: state.get.default(),
          path: "link.item.display.rotate"
        });
        displayRotateRange.value = stagedLink.link.display.rotate;
        displayRotateNumber.value = stagedLink.link.display.rotate;
        render.item.preview.delay(formPreviewArea);
      });
      displayTranslateXRange.addEventListener("input", function(event) {
        stagedLink.link.display.translate.x = mod.value.convert.to.float(parseInt(this.value, 10));
        displayTranslateXNumber.value = mod.value.convert.from.float(stagedLink.link.display.translate.x);
        render.item.preview.delay(formPreviewArea);
      });
      displayTranslateXNumber.addEventListener("input", function(event) {
        var inputValue = parseInt(this.value, 10);
        for (var key in mod.value.modify) {
          if (this[key] != "") {
            inputValue = mod.value.modify[key](inputValue, this);
          };
        };
        stagedLink.link.display.translate.x = mod.value.convert.to.float(inputValue);
        displayTranslateXRange.value = mod.value.convert.from.float(stagedLink.link.display.translate.x);
        var set = function(input) {
          input.value = mod.value.convert.from.float(stagedLink.link.display.translate.x);
        };
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      displayTranslateXDefault.addEventListener("click", function(event) {
        stagedLink.link.display.translate.x = helper.getObject({
          object: state.get.default(),
          path: "link.item.display.translate.x"
        });
        displayTranslateXRange.value = mod.value.convert.from.float(stagedLink.link.display.translate.x);
        displayTranslateXNumber.value = mod.value.convert.from.float(stagedLink.link.display.translate.x);
        render.item.preview.delay(formPreviewArea);
      });
      displayTranslateYRange.addEventListener("input", function(event) {
        stagedLink.link.display.translate.y = mod.value.convert.to.float(parseInt(this.value, 10));
        displayTranslateYNumber.value = mod.value.convert.from.float(stagedLink.link.display.translate.y);
        render.item.preview.delay(formPreviewArea);
      });
      displayTranslateYNumber.addEventListener("input", function(event) {
        var inputValue = parseInt(this.value, 10);
        for (var key in mod.value.modify) {
          if (this[key] != "") {
            inputValue = mod.value.modify[key](inputValue, this);
          };
        };
        stagedLink.link.display.translate.y = mod.value.convert.to.float(inputValue);
        displayTranslateYRange.value = mod.value.convert.from.float(stagedLink.link.display.translate.y);
        var set = function(input) {
          input.value = mod.value.convert.from.float(stagedLink.link.display.translate.y);
        };
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      displayTranslateYDefault.addEventListener("click", function(event) {
        stagedLink.link.display.translate.y = helper.getObject({
          object: state.get.default(),
          path: "link.item.display.translate.x"
        });
        displayTranslateYRange.value = mod.value.convert.from.float(stagedLink.link.display.translate.y);
        displayTranslateYNumber.value = mod.value.convert.from.float(stagedLink.link.display.translate.y);
        render.item.preview.delay(formPreviewArea);
      });
      displayGutterRange.addEventListener("input", function(event) {
        stagedLink.link.display.gutter = parseInt(this.value, 10);
        displayGutterNumber.value = stagedLink.link.display.gutter;
        render.item.preview.delay(formPreviewArea);
      });
      displayGutterNumber.addEventListener("input", function(event) {
        var inputValue = parseInt(this.value, 10);
        for (var key in mod.value.modify) {
          if (this[key] != "") {
            inputValue = mod.value.modify[key](inputValue, this);
          };
        };
        stagedLink.link.display.gutter = inputValue;
        displayGutterRange.value = stagedLink.link.display.gutter;
        var set = function(input) {
          input.value = stagedLink.link.display.gutter;
        };
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      displayGutterDefault.addEventListener("click", function(event) {
        stagedLink.link.display.gutter = helper.getObject({
          object: state.get.default(),
          path: "link.item.display.gutter"
        });
        displayGutterRange.value = stagedLink.link.display.gutter;
        displayGutterNumber.value = stagedLink.link.display.gutter;
        render.item.preview.delay(formPreviewArea);
      });
      displayAlignmentVerticalRadio.addEventListener("input", function(event) {
        stagedLink.link.display.direction = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);
      displayAlignmentHorizontalRadio.addEventListener("input", function(event) {
        stagedLink.link.display.direction = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);
      displayDirectionVisualnameRadio.addEventListener("input", function(event) {
        stagedLink.link.display.order = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);
      displayDirectionNamevisualRadio.addEventListener("input", function(event) {
        stagedLink.link.display.order = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);
      colorThemeRadio.addEventListener("change", function() {
        stagedLink.link.color.by = this.value;
        render.item.preview.delay(formPreviewArea);
        disableForm();
      }, false);
      colorCustomRadio.addEventListener("change", function() {
        stagedLink.link.color.by = this.value;
        render.item.preview.delay(formPreviewArea);
        disableForm();
      }, false);
      colorColorPicker.addEventListener("change", function() {
        mirror.data.color.by.hex(this.value);
        mirror.value(this, mirror.inputs.color());
        render.item.preview.delay(formPreviewArea);
      }, false);
      colorColorHex.addEventListener("input", function() {
        if (helper.isHexNumber(this.value)) {
          mirror.data.color.by.hex(this.value);
          mirror.value(this, mirror.inputs.color());
          render.item.preview.delay(formPreviewArea);
        };
      }, false);
      colorHslHRange.addEventListener("input", function() {
        stagedLink.link.color.hsl.h = parseInt(this.value, 10);
        mirror.data.color.by.hsl();
        mirror.value(this, mirror.inputs.color());
        render.item.preview.delay(formPreviewArea);
      });
      colorHslHNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.color.hsl.h;
        };
        stagedLink.link.color.hsl.h = mirror.minMax(this);
        mirror.data.color.by.hsl();
        mirror.value(this, mirror.inputs.color());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      colorHslSRange.addEventListener("input", function() {
        stagedLink.link.color.hsl.s = parseInt(this.value, 10);
        mirror.data.color.by.hsl();
        mirror.value(this, mirror.inputs.color());
        render.item.preview.delay(formPreviewArea);
      });
      colorHslSNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.color.hsl.s;
        };
        stagedLink.link.color.hsl.s = mirror.minMax(this);
        mirror.data.color.by.hsl();
        mirror.value(this, mirror.inputs.color());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      colorHslLRange.addEventListener("input", function() {
        stagedLink.link.color.hsl.l = parseInt(this.value, 10);
        mirror.data.color.by.hsl();
        mirror.value(this, mirror.inputs.color());
        render.item.preview.delay(formPreviewArea);
      });
      colorHslLNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.color.hsl.l;
        };
        stagedLink.link.color.hsl.l = mirror.minMax(this);
        mirror.data.color.by.hsl();
        mirror.value(this, mirror.inputs.color());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      colorRgbRRange.addEventListener("input", function() {
        stagedLink.link.color.rgb.r = parseInt(this.value, 10);
        mirror.data.color.by.rgb();
        mirror.value(this, mirror.inputs.color());
        render.item.preview.delay(formPreviewArea);
      });
      colorRgbRNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.color.rgb.r;
        };
        stagedLink.link.color.rgb.r = mirror.minMax(this);
        mirror.data.color.by.rgb();
        mirror.value(this, mirror.inputs.color());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      colorRgbGRange.addEventListener("input", function() {
        stagedLink.link.color.rgb.g = parseInt(this.value, 10);
        mirror.data.color.by.rgb();
        mirror.value(this, mirror.inputs.color());
        render.item.preview.delay(formPreviewArea);
      });
      colorRgbGNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.color.rgb.g;
        };
        stagedLink.link.color.rgb.g = mirror.minMax(this);
        mirror.data.color.by.rgb();
        mirror.value(this, mirror.inputs.color());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      colorRgbBRange.addEventListener("input", function() {
        stagedLink.link.color.rgb.b = parseInt(this.value, 10);
        mirror.data.color.by.rgb();
        mirror.value(this, mirror.inputs.color());
        render.item.preview.delay(formPreviewArea);
      });
      colorRgbBNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.color.rgb.b;
        };
        stagedLink.link.color.rgb.b = mirror.minMax(this);
        mirror.data.color.by.rgb();
        mirror.value(this, mirror.inputs.color());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      colorOpacityInputRange.addEventListener("input", function(event) {
        stagedLink.link.color.opacity = mod.value.convert.to.float(parseInt(this.value, 10));
        colorOpacityInputNumber.value = mod.value.convert.from.float(stagedLink.link.color.opacity);
        render.item.preview.delay(formPreviewArea);
      });
      colorOpacityInputNumber.addEventListener("input", function(event) {
        var inputValue = parseInt(this.value, 10);
        for (var key in mod.value.modify) {
          if (this[key] != "") {
            inputValue = mod.value.modify[key](inputValue, this);
          };
        };
        stagedLink.link.color.opacity = mod.value.convert.to.float(inputValue);
        colorOpacityInputRange.value = mod.value.convert.from.float(stagedLink.link.color.opacity);
        var set = function(input) {
          input.value = mod.value.convert.from.float(stagedLink.link.color.opacity);
        };
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      colorOpacityInputDefault.addEventListener("click", function(event) {
        stagedLink.link.color.opacity = helper.getObject({
          object: state.get.default(),
          path: "link.item.background.opacity"
        });
        colorOpacityInputRange.value = mod.value.convert.from.float(stagedLink.link.color.opacity);
        colorOpacityInputNumber.value = mod.value.convert.from.float(stagedLink.link.color.opacity);
        render.item.preview.delay(formPreviewArea);
      });
      accentThemeRadio.addEventListener("change", function() {
        stagedLink.link.accent.by = this.value;
        render.item.preview.delay(formPreviewArea);
        disableForm();
      }, false);
      accentCustomRadio.addEventListener("change", function() {
        stagedLink.link.accent.by = this.value;
        render.item.preview.delay(formPreviewArea);
        disableForm();
      }, false);
      accentColorPicker.addEventListener("change", function() {
        mirror.data.accent.by.hex(this.value);
        mirror.value(this, mirror.inputs.accent());
        render.item.preview.delay(formPreviewArea);
      }, false);
      accentColorHex.addEventListener("input", function() {
        if (helper.isHexNumber(this.value)) {
          mirror.data.accent.by.hex(this.value);
          mirror.value(this, mirror.inputs.accent());
          render.item.preview.delay(formPreviewArea);
        };
      }, false);
      accentHslHRange.addEventListener("input", function() {
        stagedLink.link.accent.hsl.h = parseInt(this.value, 10);
        mirror.data.accent.by.hsl();
        mirror.value(this, mirror.inputs.accent());
        render.item.preview.delay(formPreviewArea);
      });
      accentHslHNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.accent.hsl.h;
        };
        stagedLink.link.accent.hsl.h = mirror.minMax(this);
        mirror.data.accent.by.hsl();
        mirror.value(this, mirror.inputs.accent());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      accentHslSRange.addEventListener("input", function() {
        stagedLink.link.accent.hsl.s = parseInt(this.value, 10);
        mirror.data.accent.by.hsl();
        mirror.value(this, mirror.inputs.accent());
        render.item.preview.delay(formPreviewArea);
      });
      accentHslSNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.accent.hsl.s;
        };
        stagedLink.link.accent.hsl.s = mirror.minMax(this);
        mirror.data.accent.by.hsl();
        mirror.value(this, mirror.inputs.accent());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      accentHslLRange.addEventListener("input", function() {
        stagedLink.link.accent.hsl.l = parseInt(this.value, 10);
        mirror.data.accent.by.hsl();
        mirror.value(this, mirror.inputs.accent());
        render.item.preview.delay(formPreviewArea);
      });
      accentHslLNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.accent.hsl.l;
        };
        stagedLink.link.accent.hsl.l = mirror.minMax(this);
        mirror.data.accent.by.hsl();
        mirror.value(this, mirror.inputs.accent());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      accentRgbRRange.addEventListener("input", function() {
        stagedLink.link.accent.rgb.r = parseInt(this.value, 10);
        mirror.data.accent.by.rgb();
        mirror.value(this, mirror.inputs.accent());
        render.item.preview.delay(formPreviewArea);
      });
      accentRgbRNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.accent.rgb.r;
        };
        stagedLink.link.accent.rgb.r = mirror.minMax(this);
        mirror.data.accent.by.rgb();
        mirror.value(this, mirror.inputs.accent());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      accentRgbGRange.addEventListener("input", function() {
        stagedLink.link.accent.rgb.g = parseInt(this.value, 10);
        mirror.data.accent.by.rgb();
        mirror.value(this, mirror.inputs.accent());
        render.item.preview.delay(formPreviewArea);
      });
      accentRgbGNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.accent.rgb.g;
        };
        stagedLink.link.accent.rgb.g = mirror.minMax(this);
        mirror.data.accent.by.rgb();
        mirror.value(this, mirror.inputs.accent());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      accentRgbBRange.addEventListener("input", function() {
        stagedLink.link.accent.rgb.b = parseInt(this.value, 10);
        mirror.data.accent.by.rgb();
        mirror.value(this, mirror.inputs.accent());
        render.item.preview.delay(formPreviewArea);
      });
      accentRgbBNumber.addEventListener("input", function() {
        var set = function(input) {
          input.value = stagedLink.link.accent.rgb.b;
        };
        stagedLink.link.accent.rgb.b = mirror.minMax(this);
        mirror.data.accent.by.rgb();
        mirror.value(this, mirror.inputs.accent());
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      backgroundShowInput.addEventListener("change", function() {
        stagedLink.link.background.show = this.checked;
        render.item.preview.delay(formPreviewArea);
        disableForm();
      });
      backgroundImageRadio.addEventListener("change", function(event) {
        stagedLink.link.background.type = this.value;
        render.item.preview.delay(formPreviewArea);
        disableForm();
      }, false);
      backgroundVideoRadio.addEventListener("change", function(event) {
        stagedLink.link.background.type = this.value;
        render.item.preview.delay(formPreviewArea);
        disableForm();
      }, false);
      backgroundImageUrlInput.addEventListener("input", function(event) {
        stagedLink.link.background.image.url = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);
      backgroundVideoUrlInput.addEventListener("input", function(event) {
        stagedLink.link.background.video.url = this.value;
        render.item.preview.delay(formPreviewArea);
      }, false);
      backgroundOpacityInputRange.addEventListener("input", function(event) {
        stagedLink.link.background.opacity = mod.value.convert.to.float(parseInt(this.value, 10));
        backgroundOpacityInputNumber.value = mod.value.convert.from.float(stagedLink.link.background.opacity);
        render.item.preview.delay(formPreviewArea);
      });
      backgroundOpacityInputNumber.addEventListener("input", function(event) {
        var inputValue = parseInt(this.value, 10);
        for (var key in mod.value.modify) {
          if (this[key] != "") {
            inputValue = mod.value.modify[key](inputValue, this);
          };
        };
        stagedLink.link.background.opacity = mod.value.convert.to.float(inputValue);
        backgroundOpacityInputRange.value = mod.value.convert.from.float(stagedLink.link.background.opacity);
        var set = function(input) {
          input.value = mod.value.convert.from.float(stagedLink.link.background.opacity);
        };
        clearTimeout(mirror.delay);
        mirror.delay = setTimeout(set, 500, this);
        render.item.preview.delay(formPreviewArea);
      });
      backgroundOpacityInputDefault.addEventListener("click", function(event) {
        stagedLink.link.background.opacity = helper.getObject({
          object: state.get.default(),
          path: "link.item.background.opacity"
        });
        backgroundOpacityInputRange.value = mod.value.convert.from.float(stagedLink.link.background.opacity);
        backgroundOpacityInputNumber.value = mod.value.convert.from.float(stagedLink.link.background.opacity);
        render.item.preview.delay(formPreviewArea);
      });
      wideInput.addEventListener("change", function(event) {
        stagedLink.link.wide = this.checked;
        render.item.preview.delay(formPreviewArea);
      }, false);
      tallInput.addEventListener("change", function(event) {
        stagedLink.link.tall = this.checked;
        render.item.preview.delay(formPreviewArea);
      }, false);

      var autoSuggestAnchor = displayIconFormGroupText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;

      autoSuggest.bind.input({
        input: displayIconInput,
        anchorElement: autoSuggestAnchor,
        type: "fontawesomeIcon",
        postFocus: displayIconFormGroupText
      });

      render.item.preview.clear(formPreviewArea);
      render.item.preview.update(formPreviewArea);

      return formArea;
    },
    preview: {
      update: function(formPreviewArea) {
        var previewGrid;
        if (stagedLink.link.tall || stagedLink.link.wide) {
          previewGrid = helper.node("div|class:link-item-preview-grid link-item-preview-grid-small is-link-show");
        } else {
          previewGrid = helper.node("div|class:link-item-preview-grid link-item-preview-grid-large is-link-show");
        };

        helper.addClass(previewGrid, "is-link-area-justify-" + state.get.current().link.area.justify);
        helper.addClass(previewGrid, "is-link-style-" + state.get.current().link.style);
        helper.addClass(previewGrid, "is-link-orientation-" + state.get.current().link.orientation);
        if (state.get.current().link.item.url.show) {
          helper.addClass(previewGrid, "is-link-item-url-show");
        };
        if (state.get.current().link.item.line.show) {
          helper.addClass(previewGrid, "is-link-item-line-show");
        };
        if (state.get.current().link.item.shadow.show) {
          helper.addClass(previewGrid, "is-link-item-shadow-show");
        };
        if (state.get.current().link.item.hoverScale.show) {
          helper.addClass(previewGrid, "is-link-item-hoverscale-show");
        };

        var previewHeadline;

        if (stagedLink.link.tall || stagedLink.link.wide) {
          previewHeadline = helper.makeNode({
            tag: "p",
            text: "Preview (scale 1:2)",
            attr: [{
              key: "class",
              value: "link-form-preview-headline small muted"
            }]
          });
        } else {
          previewHeadline = helper.node("p:Preview|class:link-form-preview-headline small muted");
        };

        var previewLinkItem = render.item.link({
          preview: true
        });

        previewGrid.appendChild(previewLinkItem);
        formPreviewArea.appendChild(previewHeadline);
        formPreviewArea.appendChild(previewGrid);
      },
      clear: function(formPreviewArea) {
        while (formPreviewArea.lastChild) {
          formPreviewArea.removeChild(formPreviewArea.lastChild);
        };
      },
      delay: function(formPreviewArea) {
        clearTimeout(_timerLinkItemPreview);
        _timerLinkItemPreview = setTimeout(function functionName() {
          render.item.preview.clear(formPreviewArea);
          render.item.preview.update(formPreviewArea);
        }, 300);
      }
    },
    formCollapse: function() {
      helper.eA(".link-form-collapse").forEach(function(arrayItem, index) {
        helper.addClass(arrayItem, "active");
        arrayItem.getBoundingClientRect().height;
        arrayItem.setAttribute("style", "--link-form-collapse-height:" + arrayItem.getBoundingClientRect().height + "px;");
        helper.removeClass(arrayItem, "active");
      });
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
    }
  };

  render.all = function() {
    var linkSection = helper.e(".link");
    var linkArea = helper.node("div|class:link-area");
    linkSection.appendChild(linkArea);
    var make = {
      bookmarks: function() {
        bookmarks.get().forEach(function(arrayItem, index) {
          stagedLink.init();
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
    stagedLink.link.display.visual.icon.label = autoSuggestData.label;
    stagedLink.link.display.visual.icon.name = autoSuggestData.name;
    if (autoSuggestData.styles.includes("solid")) {
      stagedLink.link.display.visual.icon.prefix = "fas";
    } else if (autoSuggestData.styles.includes("brands")) {
      stagedLink.link.display.visual.icon.prefix = "fab";
    };
    var existingIcon = helper.e(".link-form-icon");
    if (existingIcon) {
      existingIcon.remove();
    };
    helper.e(".link-form-input-icon").value = autoSuggestData.label;
    helper.e(".link-form-text-icon").appendChild(helper.node("span|class:link-form-icon " + stagedLink.link.display.visual.icon.prefix + " fa-" + stagedLink.link.display.visual.icon.name));
    helper.e(".link-form-text-icon").focus();
    render.item.preview.delay(helper.e(".link-form-preview-area"));
  };

  render.add = {
    item: {
      open: function() {
        stagedLink.init();
        if (bookmarks.get().length > 0) {
          stagedLink.position.destination.item = bookmarks.get()[0].items.length;
        };
        var form = render.item.form();
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
          content: form,
          width: 55
        });
        shade.open({
          action: function() {
            add.item.close();
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
        if (bookmarks.get().length > 0) {
          stagedGroup.position.destination = bookmarks.get().length;
        };
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
        if (helper.checkIfValidString(stagedLink.link.display.name.text)) {
          heading = "Edit " + stagedLink.link.display.name.text;
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
          content: form,
          width: 55
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
      if (helper.checkIfValidString(stagedLink.link.display.name.text)) {
        heading = "Remove " + stagedLink.link.display.name.text;
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

  render.breakpoint = {
    add: function() {
      var html = helper.e("html");
      switch (state.get.current().link.breakpoint) {
        case "xs":
          helper.addClass(html, "is-link-breakpoint-xs");
          break
        case "sm":
          helper.addClass(html, "is-link-breakpoint-sm");
          break
        case "md":
          helper.addClass(html, "is-link-breakpoint-md");
          break
        case "lg":
          helper.addClass(html, "is-link-breakpoint-lg");
          break
        case "xl":
          helper.addClass(html, "is-link-breakpoint-xl");
          break
        case "xxl":
          helper.addClass(html, "is-link-breakpoint-xxl");
          break
      };
    },
    remove: function() {
      var html = helper.e("html");
      helper.removeClass(html, "is-link-breakpoint-xs");
      helper.removeClass(html, "is-link-breakpoint-sm");
      helper.removeClass(html, "is-link-breakpoint-md");
      helper.removeClass(html, "is-link-breakpoint-lg");
      helper.removeClass(html, "is-link-breakpoint-xl");
      helper.removeClass(html, "is-link-breakpoint-xxl");
    },
    update: function() {
      render.breakpoint.remove();
      render.breakpoint.add();
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
    if (helper.e(".link-area")) {
      bind.resize.unobserve(helper.e(".link-area"));
    };
    render.clear.item();
    render.clear.group();
    render.all();
    render.group.tabindex();
    render.item.tabindex();
    bind.resize.observe(helper.e(".link-area"));
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
    render.item.border();
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
