var background = (function() {

  var clear = {
    file: function() {
      _clearFile();
    }
  };

  var _clearFile = function() {
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
    render.feedback.clear();
    render.feedback.empty();
  };

  var bind = {
    feedback: {
      animation: {}
    }
  };

  bind.feedback.animation.set = function(animationClass, action) {
    var controlBackgroundImageLocalFeedback = helper.e(".control-background-image-local-feedback");
    helper.addClass(controlBackgroundImageLocalFeedback, animationClass);
    var animationEndAction = function() {
      if (action) {
        action();
      };
      bind.feedback.animation.reset();
    };
    controlBackgroundImageLocalFeedback.addEventListener("animationend", animationEndAction, false);
  };

  bind.feedback.animation.reset = function() {
    var controlBackgroundImageLocalFeedback = helper.e(".control-background-image-local-feedback");
    helper.removeClass(controlBackgroundImageLocalFeedback, "is-shake");
    helper.removeClass(controlBackgroundImageLocalFeedback, "is-pop");
    controlBackgroundImageLocalFeedback.removeEventListener("animationend", bind.feedback.animation.reset, false);
  };

  var render = {};

  render.image = function() {
    var html = helper.e("html");
    if (state.get().background.image.show) {
      if (state.get().background.image.from == "local") {
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
      helper.e(".control-background-image-local").value = "";
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
      var controlBackgroundImageLocalFeedback = helper.e(".control-background-image-local-feedback");
      var para1 = helper.node("p:No image selected.|class:muted small");
      controlBackgroundImageLocalFeedback.appendChild(para1);
    },
    current: function() {
      var controlBackgroundImageLocalFeedback = helper.e(".control-background-image-local-feedback");
      var para1 = helper.node("p:Image loaded.|class:muted small");
      var para2 = helper.node("p:" + state.get().background.image.file.name);
      controlBackgroundImageLocalFeedback.appendChild(para1);
      controlBackgroundImageLocalFeedback.appendChild(para2);
    },
    success: function(action) {
      var controlBackgroundImageLocalFeedback = helper.e(".control-background-image-local-feedback");
      var para1 = helper.node("p:Success! Setting Background image.|class:muted small");
      var para2 = helper.node("p:" + state.get().background.image.file.name);
      controlBackgroundImageLocalFeedback.appendChild(para1);
      controlBackgroundImageLocalFeedback.appendChild(para2);
      bind.feedback.animation.set("is-pop", action);
    },
    clear: function() {
      var controlBackgroundImageLocalFeedback = helper.e(".control-background-image-local-feedback");
      while (controlBackgroundImageLocalFeedback.lastChild) {
        controlBackgroundImageLocalFeedback.removeChild(controlBackgroundImageLocalFeedback.lastChild);
      };
    },
    fail: {
      filetype: function(name) {
        var controlBackgroundImageLocalFeedback = helper.e(".control-background-image-local-feedback");
        var para1 = helper.node("p:Not the right kind of file. Make sure the selected file is an image.");
        var para2 = helper.node("p:" + name);
        controlBackgroundImageLocalFeedback.appendChild(para1);
        controlBackgroundImageLocalFeedback.appendChild(para2);
        bind.feedback.animation.set("is-shake");
      },
      size: function(name) {
        var controlBackgroundImageLocalFeedback = helper.e(".control-background-image-local-feedback");
        var para1 = helper.node("p:File size is too big. Max file size of 5MB.");
        var para2 = helper.node("p:" + name);
        controlBackgroundImageLocalFeedback.appendChild(para1);
        controlBackgroundImageLocalFeedback.appendChild(para2);
        bind.feedback.animation.set("is-shake");
      }
    }
  };

  var importData = function() {
    // get files from input
    var fileList = helper.e(".control-background-image-local").files;
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
          helper.setObject({
            object: state.get(),
            path: "background.image.file.name",
            newValue: fileList[0].name
          });
          helper.setObject({
            object: state.get(),
            path: "background.image.file.data",
            newValue: event.target.result
          });
          data.save();;
          render.feedback.clear();
          render.feedback.success(render.image);
          render.input.clear();
        } else {
          render.feedback.clear();
          render.feedback.fail.filetype(fileList[0].name);
          render.input.clear();
        };
      } else {
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
    render: render,
    clear: clear,
    importData: importData,
    init: init
  };

})();
