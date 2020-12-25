var data = (function() {

  var _saveName = "nightTab";

  var _backupName = "nightTab-backup";

  var mod = {};

  mod.import = function() {
    var fileList = helper.e(".control-data-import").files;
    if (fileList.length > 0) {
      _validateJsonFile(fileList);
    };
  };

  mod.export = async function() {
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
    timeStamp = timeStamp.year + "." + timeStamp.month + "." + timeStamp.date + " - " + timeStamp.hours + " " + timeStamp.minutes + " " + timeStamp.seconds;
    var fileName = _saveName + " backup - " + timeStamp + ".json";
    var loaded = await load()
    var data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(loaded));
    var link = document.createElement("a");
    link.setAttribute("href", data);
    link.setAttribute("download", fileName);
    link.addEventListener("click", function(event) {
      this.remove();
    }, false);
    helper.e("body").appendChild(link);
    link.click();
  };

  mod.restore = function(data) {
    if (data) {
      if (!("version" in data) || data.version != version.get().number) {
        console.log("data version " + data.version + " found less than current");
        mod.backup(data);
        data = update.run(data);
      } else {
        console.log("data version " + version.get().number + " no need to run update");
      };
      mod.set(_saveName, JSON.stringify(data));
    } else {
      console.log("no data found to load");
    };
  };

  mod.backup = function(data) {
    if (data) {
      var dataBackup = JSON.parse(JSON.stringify(data));
      if (dataBackup.state.background.image) {
        if (dataBackup.state.background.image.file) {
          if (helper.checkIfValidString(dataBackup.state.background.image.file.data)) {
            dataBackup.state.background.image.file.name = "";
            dataBackup.state.background.image.file.data = "";
          };
        };
      };
      if (dataBackup.state.background.visual) {
        if (dataBackup.state.background.visual.image.file) {
          if (helper.checkIfValidString(dataBackup.state.background.visual.image.file.data)) {
            dataBackup.state.background.visual.image.file.name = "";
            dataBackup.state.background.visual.image.file.data = "";
          };
        };
      };
      console.log("data version " + dataBackup.version + " backed up");
      mod.set(_backupName, JSON.stringify(dataBackup));
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

  mod.nameFix = function() {
    var data = localStorage.getItem("nitghTab");
    if (data) {
      localStorage.setItem(_saveName, data);
      localStorage.removeItem("nitghTab");
    };
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
    var para1 = helper.node("p:Are you sure you want to clear all nightTab Bookmarks and Settings? nightTab will be restore to the default state.");
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

  render.url = function() {
    var url = helper.e(".control-data-sync-url");
    if (helper.checkIfValidString(state.get.current().data.sync.url)) {
      url.textContent = helper.trimString(state.get.current().data.sync.url);
    } else {
      url.textContent = "";
    };
  };

  render.password = function() {
    var password = helper.e(".control-data-sync-password");
    if (helper.checkIfValidString(state.get.current().data.sync.password)) {
      password.textContent = helper.trimString(state.get.current().data.sync.password);
    } else {
      password.textContent = "";
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

  var save = async function() {
    var data = {
      nighttab: true,
      version: version.get().number,
      state: state.get.current(),
      bookmarks: bookmarks.get()
    }

    if(data.state.data && data.state.data.sync.url){

      var url = data.state.data.sync.url
      var password = data.state.data.sync.password

      if(data.state.data.sync.init){

        // Save
        try{
          await fetch(`${url}/sync`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': password
            },
            body: JSON.stringify(data)
          })
        }catch(err){
          // console.error({err})
        }
      }else{

        // Attempt Import
        try{
          var response = await fetch(`${url}/sync`, { headers: { 'x-api-key': password }})

          // Get data
          if(response.status === 200){
            response = await response.json()
            mod.set(_saveName, JSON.stringify(response));
            render.reload();
          }

          // Save if not exist
          if(response.status === 404){
            try{
              await fetch(`${url}/sync`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'x-api-key': password
                },
                body: JSON.stringify(data)
              })
            }catch(err){
              // console.error({err})
            }
          }
        }catch(err){
          // console.error({err})
        }
      }
    }

    mod.set(_saveName, JSON.stringify(data));
  };

  var load = async function() {
    if (mod.get(_saveName) != null && mod.get(_saveName) != undefined) {
      var data = JSON.parse(mod.get(_saveName));

      if(data.state.data && data.state.data.sync.url){
        var url = data.state.data.sync.url
        var password = data.state.data.sync.password

        try{
          var response = await fetch(`${url}/sync`, { headers: { 'x-api-key': password }})

          // Get data
          if(response.status === 200 || response.status === 304){
            response = await response.json()
            mod.set(_saveName, JSON.stringify(response));
            return response
          }

          // Save if not exist
          if(response.status === 404){
            try{
              await fetch(`${url}/sync`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'x-api-key': password
                },
                body: JSON.stringify(data)
              })
              return data
            }catch(err){
              // console.error({err})
            }
          }
          
        }catch(err){
          // console.error({err})
        }
      }
      return data

    } else {
    return false;
    };
  };

  var wipe = function() {
    mod.remove(_saveName);
    render.reload();
  };

  var init = async function() {
    mod.nameFix();
    var loaded = await load()
    mod.restore(loaded);
    render.feedback.empty();
    render.url();
    render.password();
  };

  return {
    init,
    mod,
    render,
    save,
    load,
    wipe
  };

})();
