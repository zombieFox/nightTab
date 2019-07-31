var data = (function() {

  var _saveName = "nitghTab";

  var mod = {};

  mod.import = function() {
    var fileList = helper.e(".control-data-import").files;
    if (fileList.length > 0) {
      _validateJsonFile(fileList);
    };
  };

  mod.export = function() {
    var encode = function(string) {
      var out = [];
      for (var i = 0; i < string.length; i++) {
        out[i] = string.charCodeAt(i);
      };
      return new Uint8Array(out);
    };
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
    var fileName = "nightTab backup - " + timeStamp + ".json";
    var str = JSON.stringify(load());
    var data = encode(str);
    var blob = new Blob([data], {
      type: 'application/octet-stream'
    });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    link.click();
    link.remove();
  };

  mod.restore = function(data) {
    if (data) {
      if (!("version" in data) || data.version != version.get()) {
        console.log("data version " + data.version + " found less than current");
        data = update.run(data);
        mod.set(_saveName, JSON.stringify(data));
      } else {
        console.log("data version " + version.get() + " no need to run update");
        mod.set(_saveName, JSON.stringify(data));
      };
    } else {
      console.log("no data found to load");
    };
  };

  mod.set = function(key, data) {
    localStorage.setItem(key, data);
  };

  mod.get = function(key) {
    return localStorage.getItem(key);
  };

  mod.remove = function(key) {
    localStorage.removeItem(key);
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
        helper.removeClass(controlDataImportFeedback, "is-jello");
        controlDataImportFeedback.removeEventListener("animationend", bind.feedback.animation.reset, false);
      }
    }
  };

  var render = {};

  render.clear = function() {
    var clearContent = helper.node("div");
    var para1 = helper.node("p:Are you sure you want to clear all nightTab Bookmarks and Settings?. nightTab will restore to the default state.");
    var para2 = helper.node("p:This can not be undone.");
    clearContent.appendChild(para1);
    clearContent.appendChild(para2);
    modal.open({
      heading: "Clear all nightTab data?",
      content: clearContent,
      successAction: function() {
        wipe();
        render.reload();
        shade.close();
        pagelock.unlock();
      },
      cancelAction: function() {
        shade.close();
        pagelock.unlock();
      },
      actionText: "Clear all data",
      size: "small"
    });
    shade.open({
      action: function() {
        modal.close();
        pagelock.unlock();
      }
    });
    pagelock.lock();
  };

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
    clear: function(override) {
      var options = {
        animate: null
      };
      if (override) {
        options = helper.applyOptions(options, override);
      };
      var controlDataImportFeedback = helper.e(".control-data-import-feedback");
      while (controlDataImportFeedback.lastChild) {
        controlDataImportFeedback.removeChild(controlDataImportFeedback.lastChild);
      };
      if (options.animate) {
        bind.feedback.animation.set("is-jello");
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
            mod.restore(JSON.parse(event.target.result));
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

  var save = function() {
    mod.set(_saveName, JSON.stringify({
      nighttab: true,
      version: version.get(),
      state: state.get(),
      bookmarks: bookmarks.get()
    }));
  };

  var load = function() {
    return JSON.parse(mod.get(_saveName));
  };

  var wipe = function() {
    mod.remove(_saveName);
    render.reload();
  };

  var init = function() {
    mod.restore(data.load());
    render.feedback.empty();
  };

  return {
    init: init,
    mod: mod,
    render: render,
    save: save,
    load: load,
    wipe: wipe
  };

})();
