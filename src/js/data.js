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

  var bind = {};

  bind.feedback = {
    animation: {
      set: function(animationClass, action) {
        var controlDataImportFeedback = helper.e(".control-data-import-feedback");
        helper.addClass(controlDataImportFeedback, animationClass);
        var animationEndAction = function() {
          if (action) {
            action();
          };
          bind.feedback.animation.reset();
        };
        controlDataImportFeedback.addEventListener("animationend", animationEndAction, false);
      },
      reset: function() {
        var controlDataImportFeedback = helper.e(".control-data-import-feedback");
        helper.removeClass(controlDataImportFeedback, "is-shake");
        helper.removeClass(controlDataImportFeedback, "is-pop");
        controlDataImportFeedback.removeEventListener("animationend", bind.feedback.animation.reset, false);
      }
    }
  };

  var render = {};

  render.reload = function() {
    location.reload();
  };

  render.input = {
    clear: function() {
      var input = helper.e(".control-data-import");
      input.value = "";
    }
  };

  render.feedback = {
    empty: function() {
      var controlDataImportFeedback = helper.e(".control-data-import-feedback");
      var para1 = helper.node("p:No JSON file selected.|class:muted small");
      controlDataImportFeedback.appendChild(para1);
    },
    success: function(name, action) {
      var controlDataImportFeedback = helper.e(".control-data-import-feedback");
      var para1 = helper.node("p:Success! Restoring nightTab Bookmarks and Settings.|class:muted small");
      var para2 = helper.node("p:" + name);
      controlDataImportFeedback.appendChild(para1);
      controlDataImportFeedback.appendChild(para2);
      if (action) {
        bind.feedback.animation.set("is-pop", action);
      };
    },
    clear: function() {
      var controlDataImportFeedback = helper.e(".control-data-import-feedback");
      while (controlDataImportFeedback.lastChild) {
        controlDataImportFeedback.removeChild(controlDataImportFeedback.lastChild);
      };
    },
    fail: {
      notJson: function(name) {
        var controlDataImportFeedback = helper.e(".control-data-import-feedback");
        var para1 = helper.node("p:Not a JSON file. Make sure the selected file came from nightTab.|class:small muted");
        var para2 = helper.node("p:" + name);
        controlDataImportFeedback.appendChild(para1);
        controlDataImportFeedback.appendChild(para2);
        bind.feedback.animation.set("is-shake");
      },
      notNightTabJson: function(name) {
        var controlDataImportFeedback = helper.e(".control-data-import-feedback");
        var para1 = helper.node("p:Not the right kind of JSON file. Make sure the selected file came from nightTab.|class:small muted");
        var para2 = helper.node("p:" + name);
        controlDataImportFeedback.appendChild(para1);
        controlDataImportFeedback.appendChild(para2);
        bind.feedback.animation.set("is-shake");
      }
    }
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
          render.feedback.clear();
          render.feedback.success(fileList[0].name, function() {
            restore(JSON.parse(event.target.result));
            render.reload();
          });
          render.input.clear();
        } else {
          // not a nightTab JSON file
          render.feedback.clear();
          render.feedback.fail.notNightTabJson(fileList[0].name);
          render.input.clear();
        };
      } else {
        // not a JSON file
        render.feedback.clear();
        render.feedback.fail.notJson(fileList[0].name);
        render.input.clear();
      };
    };
    // invoke the reader
    reader.readAsText(fileList.item(0));
  };

  var init = function() {
    restore(data.load());
    render.feedback.empty();
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
