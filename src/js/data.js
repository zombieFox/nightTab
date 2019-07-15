var data = (function() {

  var _saveName = "nitghTab";

  var set = function(key, data) {
    localStorage.setItem(key, data);
  };

  var get = function(key) {
    return localStorage.getItem(key);
  };

  var remove = function(key) {
    localStorage.removeItem(key);
  };

  var save = function() {
    var data = {
      nighttab: true,
      version: version.get(),
      state: state.get(),
      bookmarks: bookmarks.get()
    };
    set(_saveName, JSON.stringify(data));
  };

  var wipe = function() {
    remove(_saveName);
  };

  var load = function() {
    return JSON.parse(get(_saveName));
  };

  var restore = function(data) {
    if (data) {
      if (!("version" in data) || data.version != version.get()) {
        console.log("data version " + data.version + " found less than current");
        data = update.run(data);
        set(_saveName, JSON.stringify(data));
      } else {
        console.log("data version " + version.get() + " no need to run update");
        set(_saveName, JSON.stringify(data));
      };
    } else {
      console.log("no data found to load");
    };
  };

  var clearData = function() {
    var clearContent = helper.node("div");
    var para1 = helper.node("p:Are you sure you want to clear all nightTab Bookmarks and Settings?. nightTab will restore to the default state.");
    var para2 = helper.node("p:This can not be undone.");
    clearContent.appendChild(para1);
    clearContent.appendChild(para2);
    modal.render({
      heading: "Clear all nightTab data?",
      content: clearContent,
      successAction: function() {
        wipe();
        location.reload();
      },
      actionText: "Clear all data",
      size: "small"
    });
  };

  var exportData = function() {
    var tempAchor = helper.node("a");
    var timeStamp = helper.getDateTime();
    var _timeStampPrefix = function(value) {
      if (value < 10) {
        value = "0" + value;
      };
      return value;
    };
    timeStamp.hours = _timeStampPrefix(timeStamp.hours);
    timeStamp.minutes = _timeStampPrefix(timeStamp.minutes);
    timeStamp.seconds = _timeStampPrefix(timeStamp.seconds);
    timeStamp.date = _timeStampPrefix(timeStamp.date);
    timeStamp.month = _timeStampPrefix(timeStamp.month + 1);
    timeStamp.year = _timeStampPrefix(timeStamp.year);
    timeStamp = timeStamp.hours + " " + timeStamp.minutes + " " + timeStamp.seconds + " - " + timeStamp.date + "." + timeStamp.month + "." + timeStamp.year;
    console.log(timeStamp);
    var fileName = "nightTab backup - " + timeStamp + ".json";
    var exportData = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(load()));
    tempAchor.setAttribute("href", exportData);
    tempAchor.setAttribute("download", fileName);
    helper.e("html").appendChild(tempAchor);
    tempAchor.click();
    tempAchor.remove();
  };

  var render = {
    feedback: function(type) {
      _renderFeedback(type);
    }
  };

  var _renderFeedback = function(type, data) {
    var controlDataImportFeedback = helper.e(".control-data-import-feedback");
    var _setFeedbackAnimation = function(animationClass) {
      helper.addClass(controlDataImportFeedback, animationClass);
      controlDataImportFeedback.addEventListener("animationend", _resetFeedbackAnimation, false);
    };
    var _resetFeedbackAnimation = function() {
      helper.removeClass(controlDataImportFeedback, "is-shake");
      helper.removeClass(controlDataImportFeedback, "is-pop");
      controlDataImportFeedback.removeEventListener("animationend", _resetFeedbackAnimation, false);
    };
    var clear = function() {
      while (controlDataImportFeedback.lastChild) {
        controlDataImportFeedback.removeChild(controlDataImportFeedback.lastChild);
      };
    };
    var feedbackMessage = {
      empty: "No file selected.",
      success: "Success! Restoring nightTab Bookmarks and Settings.",
      fail: {
        notNightTabJson: "Not the right kind of JSON file. Make sure the selected file came from nightTab.",
        notJson: "Not a JSON file. Make sure the selected file came from nightTab."
      }
    };
    var action = {
      empty: function() {
        var para1 = helper.node("p:" + feedbackMessage.empty + "|class:muted small");
        controlDataImportFeedback.appendChild(para1);
      },
      success: function() {
        var para1 = helper.node("p:" + feedbackMessage.current + "|class:muted small");
        var para2 = helper.node("p:" + state.get().background.image.file.name);
        controlDataImportFeedback.appendChild(para1);
        controlDataImportFeedback.appendChild(para2);
        controlDataImportFeedback.addEventListener("animationend", function() {
          restore(JSON.parse(data));
          location.reload();
        }, false);
        _setFeedbackAnimation("is-pop");
      }
    };
    clear();
    action[type]();
  };

  var importData = function() {
    // get files from input
    var fileList = helper.e(".control-data-import").files;
    // if file was added
    if (fileList.length > 0) {
      // validate the file
      _validateJsonFile(fileList);
    };
  };

  var _validateJsonFile = function(fileList) {
    // make new file reader
    var reader = new FileReader();
    // define the on load event for the reader
    reader.onload = function(event) {
      // is this a JSON file
      if (helper.isJsonString(event.target.result)) {
        // is this a nightTab JSON
        if (JSON.parse(event.target.result).nighttab) {
          _renderFeedback("success", event.target.result);
          // console.log("is a JSON and a nightTab file");
          // controlDataImportFeedback.addEventListener("animationend", function() {
          //   restore(JSON.parse(event.target.result));
          //   location.reload();
          // }, false);
        } else {
          _renderFeedback("fail");
          // console.log("is a JSON file but not a nightTab file");
          // _feedback(feedbackMessage.fail.notNightTabJson, "is-shake");
        };
      } else {
        _renderFeedback("fail");
        // console.log("not a JSON file");
        // _feedback(feedbackMessage.fail.notJson, "is-shake");
      };
    };
    // invoke the reader
    reader.readAsText(fileList.item(0));
  };

  var init = function() {
    restore(data.load());
    render.feedback("empty");
  };

  return {
    init: init,
    save: save,
    remove: remove,
    set: set,
    get: get,
    load: load,
    wipe: wipe,
    restore: restore,
    importData: importData,
    exportData: exportData,
    clearData: clearData
  };

})();
