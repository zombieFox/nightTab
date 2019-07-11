var background = (function() {

  var render = function() {
    var html = helper.e("html");
    html.style.setProperty("--background-image", "url(" + state.get().background.image.url + ")");
    html.style.setProperty("--background-blur", state.get().background.image.blur + "px");
    html.style.setProperty("--background-grayscale", state.get().background.image.grayscale);
    html.style.setProperty("--background-opacity", state.get().background.image.opacity);
    html.style.setProperty("--background-scale", state.get().background.image.scale);
    html.style.setProperty("--background-accent-opacity", state.get().background.image.accent);
  };

  var importData = function() {
    // get files from input
    var fileList = helper.e(".control-background-image-local").files;
    // if file was added
    if (fileList.length > 0) {
      // validate the file
      _validateJsonFile(fileList);
    };
  };

  var _validateJsonFile = function(fileList) {
    var backgroundImage = helper.e(".background-image");
    var controlBackgroundImageLocalFeedback = helper.e(".control-background-image-local-feedback");
    var feedbackMessage = {
      success: "Success! Restoring nightTab Bookmarks and Settings.",
      fail: {
        notNightTabJson: "Not the right kind of JSON file. Make sure the selected file came from nightTab.",
        notJson: "Not a JSON file. Make sure the selected file came from nightTab."
      }
    };
    var _feedback = function(message, animationClass) {
      while (controlBackgroundImageLocalFeedback.lastChild) {
        controlBackgroundImageLocalFeedback.removeChild(controlBackgroundImageLocalFeedback.lastChild);
      };
      var name = helper.node("p:" + fileList[0].name);
      var messageText = helper.node("p:" + message + "|class:muted small");
      controlBackgroundImageLocalFeedback.appendChild(name);
      controlBackgroundImageLocalFeedback.appendChild(messageText);
      controlBackgroundImageLocalFeedback.addEventListener("animationend", _resetFeedback, false);
      helper.removeClass(controlBackgroundImageLocalFeedback, "is-hidden");
      helper.addClass(controlBackgroundImageLocalFeedback, animationClass);
    };
    var _resetFeedback = function() {
      helper.removeClass(controlBackgroundImageLocalFeedback, "is-shake");
      helper.removeClass(controlBackgroundImageLocalFeedback, "is-pop");
      controlBackgroundImageLocalFeedback.removeEventListener("animationend", _resetFeedback, false);
    };
    // make new file reader
    var reader = new FileReader();
    // define the on load event for the reader
    function setBackground(imageURL) {
      var html = helper.e("html");
      html.style.setProperty("--background-image", "url(" + imageURL + ")");
    };
    reader.onload = function(event) {

      setBackground(reader.result);

      console.log(reader.result);
      // controlBackgroundImageLocalFeedback.appendChild(helper.node("img|src:" + event.target.result));
      // // is this a JSON file
      // if (helper.isJsonString(event.target.result)) {
      //   // is this a nightTab JSON
      //   if (JSON.parse(event.target.result).nighttab) {
      //     // console.log("is a JSON and a nightTab file");
      //     _feedback(feedbackMessage.success, "is-pop");
      //     controlBackgroundImageLocalFeedback.addEventListener("animationend", function() {
      //       restore(JSON.parse(event.target.result));
      //       location.reload();
      //     }, false);
      //   } else {
      //     // console.log("is a JSON file but not a nightTab file");
      //     _feedback(feedbackMessage.fail.notNightTabJson, "is-shake");
      //   };
      // } else {
      //   // console.log("not a JSON file");
      //   _feedback(feedbackMessage.fail.notJson, "is-shake");
      // };
    };
    // invoke the reader
    reader.readAsDataURL(fileList.item(0));
  };

  var init = function() {
    render();
  };

  // exposed methods
  return {
    render: render,
    importData: importData,
    init: init
  };

})();
