var background = (function() {

  var mod = {};

  mod.clear = {
    file: function() {
      helper.setObject({
        object: state.get(),
        path: "background.image.file.name",
        newValue: ""
      });
      helper.setObject({
        object: state.get(),
        path: "background.image.file.data",
        newValue: ""
      });
    }
  };

  mod.image = {
    file: function(name, data) {
      helper.setObject({
        object: state.get(),
        path: "background.image.file.name",
        newValue: name
      });
      helper.setObject({
        object: state.get(),
        path: "background.image.file.data",
        newValue: data
      });
    }
  };

  var bind = {};

  bind.feedback = {
    animation: {
      set: function(animationClass, action) {
        var controlBackgroundImageFileFeedback = helper.e(".control-background-image-file-feedback");
        helper.addClass(controlBackgroundImageFileFeedback, animationClass);
        var animationEndAction = function() {
          if (action) {
            action();
          };
          bind.feedback.animation.reset();
        };
        controlBackgroundImageFileFeedback.addEventListener("animationend", animationEndAction, false);
      },
      reset: function() {
        var controlBackgroundImageFileFeedback = helper.e(".control-background-image-file-feedback");
        helper.removeClass(controlBackgroundImageFileFeedback, "is-shake");
        helper.removeClass(controlBackgroundImageFileFeedback, "is-pop");
        controlBackgroundImageFileFeedback.removeEventListener("animationend", bind.feedback.animation.reset, false);
      }
    }
  };

  var render = {};

  render.image = function() {
    var html = helper.e("html");
    if (state.get().background.image.show) {
      if (state.get().background.image.from == "file") {
        html.style.setProperty("--background-image", "url(" + state.get().background.image.file.data + ")");
      } else if (state.get().background.image.from == "url") {
        html.style.setProperty("--background-image", "url(" + state.get().background.image.url + ")");
      };
    } else {
      html.style.setProperty("--background-image", "url()");
    };
  };

  render.blur = function() {
    var html = helper.e("html");
    html.style.setProperty("--background-blur", state.get().background.image.blur + "px");
  };

  render.grayscale = function() {
    var html = helper.e("html");
    html.style.setProperty("--background-grayscale", state.get().background.image.grayscale);
  };

  render.opacity = function() {
    var html = helper.e("html");
    html.style.setProperty("--background-opacity", state.get().background.image.opacity);
  };

  render.scale = function() {
    var html = helper.e("html");
    html.style.setProperty("--background-scale", state.get().background.image.scale);
  };

  render.accent = function() {
    var html = helper.e("html");
    html.style.setProperty("--background-accent", state.get().background.image.accent);
  };

  render.input = {
    clear: function() {
      var input = helper.e(".control-background-image-file");
      input.value = "";
    }
  };

  render.feedback = {
    init: function() {
      if (state.get().background.image.file.name != "") {
        render.feedback.current();
      } else {
        render.feedback.empty();
      };
    },
    empty: function() {
      var controlBackgroundImageFileFeedback = helper.e(".control-background-image-file-feedback");
      var para1 = helper.node("p:No image selected.|class:muted small");
      controlBackgroundImageFileFeedback.appendChild(para1);
    },
    current: function() {
      var controlBackgroundImageFileFeedback = helper.e(".control-background-image-file-feedback");
      var para1 = helper.node("p:Image loaded.|class:muted small");
      var para2 = helper.node("p:" + state.get().background.image.file.name);
      controlBackgroundImageFileFeedback.appendChild(para1);
      controlBackgroundImageFileFeedback.appendChild(para2);
    },
    success: function(name, action) {
      var controlBackgroundImageFileFeedback = helper.e(".control-background-image-file-feedback");
      var para1 = helper.node("p:Success! Setting Background image.|class:muted small");
      var para2 = helper.node("p:" + name);
      controlBackgroundImageFileFeedback.appendChild(para1);
      controlBackgroundImageFileFeedback.appendChild(para2);
      if (action) {
        bind.feedback.animation.set("is-pop", action);
      };
    },
    clear: function() {
      var controlBackgroundImageFileFeedback = helper.e(".control-background-image-file-feedback");
      while (controlBackgroundImageFileFeedback.lastChild) {
        controlBackgroundImageFileFeedback.removeChild(controlBackgroundImageFileFeedback.lastChild);
      };
    },
    fail: {
      filetype: function(name) {
        var controlBackgroundImageFileFeedback = helper.e(".control-background-image-file-feedback");
        var para1 = helper.node("p:Not the right kind of file. Make sure the selected file is an image.|class:small muted");
        var para2 = helper.node("p:" + name);
        controlBackgroundImageFileFeedback.appendChild(para1);
        controlBackgroundImageFileFeedback.appendChild(para2);
        bind.feedback.animation.set("is-shake");
      },
      size: function(name) {
        var controlBackgroundImageFileFeedback = helper.e(".control-background-image-file-feedback");
        var para1 = helper.node("p:File size is too big. Max file size of 5MB.|class:small muted");
        var para2 = helper.node("p:" + name);
        controlBackgroundImageFileFeedback.appendChild(para1);
        controlBackgroundImageFileFeedback.appendChild(para2);
        bind.feedback.animation.set("is-shake");
      }
    }
  };

  var importData = function() {
    // get files from input
    var fileList = helper.e(".control-background-image-file").files;
    // if file was added
    if (fileList.length > 0) {
      // validate the file
      _validateImageFile(fileList);
    };
  };

  var _validateImageFile = function(fileList) {
    // make new file reader
    var reader = new FileReader();
    // define the on load event for the reader
    reader.onload = function(event) {
      if (fileList.item(0).size <= 5000000) {
        if (fileList.item(0).type.split("/")[0] == "image") {
          mod.image.file(fileList[0].name, event.target.result);
          data.save();
          render.feedback.clear();
          render.feedback.success(fileList[0].name, render.image);
          render.input.clear();
        } else {
          // not an image file
          render.feedback.clear();
          render.feedback.fail.filetype(fileList[0].name);
          render.input.clear();
        };
      } else {
        // file size too big
        render.feedback.clear();
        render.feedback.fail.size(fileList[0].name);
        render.input.clear();
      };
    };
    // invoke the reader
    reader.readAsDataURL(fileList.item(0));
  };

  var init = function() {
    render.image();
    render.blur();
    render.grayscale();
    render.opacity();
    render.scale();
    render.accent();
    render.feedback.init();
  };

  // exposed methods
  return {
    init: init,
    mod: mod,
    bind: bind,
    render: render,
    importData: importData
  };

})();
