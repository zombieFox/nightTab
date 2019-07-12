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
  };

  var _setFile = function() {
    
  };

  var render = {
    all: function() {
      _renderAll();
    },
    feedback: function() {
      if (state.get().background.image.file.name != "") {
        _renderFeedback("current");
      } else {
        _renderFeedback("empty");
      };
    }
  };

  var _renderAll = function() {
    var html = helper.e("html");
    html.style.setProperty("--background-image", "url(" + state.get().background.image.url + ")");
    html.style.setProperty("--background-blur", state.get().background.image.blur + "px");
    html.style.setProperty("--background-grayscale", state.get().background.image.grayscale);
    html.style.setProperty("--background-opacity", state.get().background.image.opacity);
    html.style.setProperty("--background-scale", state.get().background.image.scale);
    html.style.setProperty("--background-accent-opacity", state.get().background.image.accent);
  };

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
      fail: "Not the right kind of file. Make sure the selected file is an image."
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
      // console.log(event.target.result);
      // if (state.get().background.image.file.name != "") {};
      if (fileList.item(0).type.split("/")[0] == "image") {
        _renderFeedback("success");
      } else {
        _renderFeedback("fail");
      };
      // var html = helper.e("html");
      // html.style.setProperty("--background-image", "url(" + reader.result + ")");
    };
    // invoke the reader
    reader.readAsDataURL(fileList.item(0));
  };

  var init = function() {
    render.all();
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
