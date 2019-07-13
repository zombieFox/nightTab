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
    render.feedback("empty");
  };

  var render = {
    image: function() {
      _renderImage();
    },
    blur: function() {
      _renderBlur();
    },
    grayscale: function() {
      _renderGrayscale();
    },
    opacity: function() {
      _renderOpacity();
    },
    accent: function() {
      _renderAccent();
    },
    scale: function() {
      _renderScale();
    },
    feedback: function() {
      if (state.get().background.image.file.name != "") {
        _renderFeedback("current");
      } else {
        _renderFeedback("empty");
      };
    }
  };

  var _renderImage = function() {
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

  var _renderBlur = function() {
    var html = helper.e("html");
    html.style.setProperty("--background-blur", state.get().background.image.blur + "px");
  };

  var _renderGrayscale = function() {
    var html = helper.e("html");
    html.style.setProperty("--background-grayscale", state.get().background.image.grayscale);
  };

  var _renderOpacity = function() {
    var html = helper.e("html");
    html.style.setProperty("--background-opacity", state.get().background.image.opacity);
  };

  var _renderScale = function() {
    var html = helper.e("html");
    html.style.setProperty("--background-scale", state.get().background.image.scale);
  };

  var _renderAccent = function() {
    var html = helper.e("html");
    html.style.setProperty("--background-accent", state.get().background.image.accent);
  };


  var _renderAll = function() {};

  var _renderFeedback = function(type) {
    var controlBackgroundImageLocalFeedback = helper.e(".control-background-image-local-feedback");
    var _setFeedbackAnimation = function(animationClass) {
      helper.addClass(controlBackgroundImageLocalFeedback, animationClass);
      controlBackgroundImageLocalFeedback.addEventListener("animationend", _resetFeedbackAnimation, false);
    };
    var _resetFeedbackAnimation = function() {
      helper.removeClass(controlBackgroundImageLocalFeedback, "is-shake");
      helper.removeClass(controlBackgroundImageLocalFeedback, "is-pop");
      controlBackgroundImageLocalFeedback.removeEventListener("animationend", _resetFeedbackAnimation, false);
    };
    var clear = function() {
      while (controlBackgroundImageLocalFeedback.lastChild) {
        controlBackgroundImageLocalFeedback.removeChild(controlBackgroundImageLocalFeedback.lastChild);
      };
    };
    var feedbackMessage = {
      empty: "No image selected.",
      current: "Image loaded.",
      success: "Success! Setting Background image.",
      fail: "Not the right kind of file. Make sure the selected file is an image.",
      size: "File size is too big. Max file size of 5MB."
    };
    var action = {
      empty: function() {
        var para1 = helper.node("p:" + feedbackMessage.empty + "|class:muted small");
        controlBackgroundImageLocalFeedback.appendChild(para1);
      },
      current: function() {
        var para1 = helper.node("p:" + feedbackMessage.current + "|class:muted small");
        var para2 = helper.node("p:" + state.get().background.image.file.name);
        controlBackgroundImageLocalFeedback.appendChild(para1);
        controlBackgroundImageLocalFeedback.appendChild(para2);
      },
      success: function() {
        var para1 = helper.node("p:" + feedbackMessage.current + "|class:muted small");
        var para2 = helper.node("p:" + state.get().background.image.file.name);
        controlBackgroundImageLocalFeedback.appendChild(para1);
        controlBackgroundImageLocalFeedback.appendChild(para2);
        _setFeedbackAnimation("is-pop");
      },
      fail: function() {
        var para1 = helper.node("p:" + feedbackMessage.fail);
        controlBackgroundImageLocalFeedback.appendChild(para1);
        _setFeedbackAnimation("is-shake");
      },
      size: function() {
        var para1 = helper.node("p:" + feedbackMessage.size);
        controlBackgroundImageLocalFeedback.appendChild(para1);
        _setFeedbackAnimation("is-shake");
      }
    };
    clear();
    action[type]();
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
          data.save();
          render.image();
          _renderFeedback("success");
        } else {
          _renderFeedback("fail");
        };
      } else {
        _renderFeedback("size");
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
    render.feedback();
  };

  // exposed methods
  return {
    render: render,
    clear: clear,
    importData: importData,
    init: init
  };

})();
