var background = (function() {

  var mod = {};

  mod.color = {
    hsl: function() {
      var hsl = helper.convertColor.rgb.hsl(state.get.current().background.color.rgb);
      helper.setObject({
        object: state.get.current(),
        path: "background.color.hsl",
        newValue: {
          h: Math.round(hsl.h),
          s: Math.round(hsl.s),
          l: Math.round(hsl.l)
        }
      });
    },
    rgb: function() {
      var rgb = helper.convertColor.hsl.rgb(state.get.current().background.color.hsl);
      helper.setObject({
        object: state.get.current(),
        path: "background.color.rgb",
        newValue: {
          r: Math.round(rgb.r),
          g: Math.round(rgb.g),
          b: Math.round(rgb.b)
        }
      });
    }
  };

  mod.import = function() {
    // get files from input
    var fileList = helper.e(".control-background-visual-image-file").files;
    // if file was added
    if (fileList.length > 0) {
      // validate the file
      _validateImageFile(fileList);
    };
  };

  mod.visual = {};

  mod.visual.image = {
    file: function(name, data) {
      helper.setObject({
        object: state.get.current(),
        path: "background.visual.image.file.name",
        newValue: name
      });
      helper.setObject({
        object: state.get.current(),
        path: "background.visual.image.file.data",
        newValue: data
      });
    },
    clear: function() {
      helper.setObject({
        object: state.get.current(),
        path: "background.visual.image.file.name",
        newValue: ""
      });
      helper.setObject({
        object: state.get.current(),
        path: "background.visual.image.file.data",
        newValue: ""
      });
    }
  };

  var bind = {};

  bind.feedback = {
    animation: {
      set: function(animationClass, action) {
        var controlBackgroundImageFileFeedback = helper.e(".control-background-visual-image-file-feedback");
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
        var controlBackgroundImageFileFeedback = helper.e(".control-background-visual-image-file-feedback");
        helper.removeClass(controlBackgroundImageFileFeedback, "is-shake");
        helper.removeClass(controlBackgroundImageFileFeedback, "is-pop");
        helper.removeClass(controlBackgroundImageFileFeedback, "is-jello");
        controlBackgroundImageFileFeedback.removeEventListener("animationend", bind.feedback.animation.reset, false);
      }
    }
  };

  var render = {};

  render.color = {
    custom: function() {
      helper.e("html").style.setProperty("--background-color-custom", state.get.current().background.color.rgb.r + ", " + state.get.current().background.color.rgb.g + ", " + state.get.current().background.color.rgb.b);
    }
  };

  render.visual = {
    blur: function() {
      var html = helper.e("html");
      html.style.setProperty("--background-visual-blur", state.get.current().background.visual.blur + "px");
    },
    grayscale: function() {
      var html = helper.e("html");
      html.style.setProperty("--background-visual-grayscale", state.get.current().background.visual.grayscale);
    },
    opacity: function() {
      var html = helper.e("html");
      html.style.setProperty("--background-visual-opacity", state.get.current().background.visual.opacity);
    },
    scale: function() {
      var html = helper.e("html");
      html.style.setProperty("--background-visual-scale", state.get.current().background.visual.scale);
    },
    accent: function() {
      var html = helper.e("html");
      html.style.setProperty("--background-visual-accent", state.get.current().background.visual.accent);
    },
    vignette: {
      opacity: function() {
        var html = helper.e("html");
        html.style.setProperty("--background-visual-vignette-opacity", state.get.current().background.visual.vignette.opacity + "%");
      },
      start: function() {
        var html = helper.e("html");
        html.style.setProperty("--background-visual-vignette-start", state.get.current().background.visual.vignette.start + "%");
      },
      end: function() {
        var html = helper.e("html");
        html.style.setProperty("--background-visual-vignette-end", state.get.current().background.visual.vignette.end + "%");
      }
    }
  };

  render.visual.image = {
    set: function() {
      var html = helper.e("html");
      if (state.get.current().background.visual.show && state.get.current().background.visual.type == "image") {
        if (state.get.current().background.visual.image.type == "file") {
          html.style.setProperty("--background-visual-image", "url(" + state.get.current().background.visual.image.file.data + ")");
        } else if (state.get.current().background.visual.image.type == "url") {
          if (helper.checkIfValidString(state.get.current().background.visual.image.url)) {
            var allUrls = state.get.current().background.visual.image.url.split(/\s+/);
            allUrls = allUrls.filter(function(arrayItem) {
              return arrayItem.length > 0 && arrayItem != "";
            });
            var randomUrl = allUrls[Math.floor(Math.random() * allUrls.length)];
            html.style.setProperty("--background-visual-image", "url(" + randomUrl + ")");
          } else {
            html.style.setProperty("--background-visual-image", "url(" + state.get.current().background.visual.image.url + ")");
          };
        };
      } else {
        render.visual.image.clear();
      };
    },
    clear: function() {
      var html = helper.e("html");
      html.style.setProperty("--background-visual-image", "none");
      helper.e(".control-background-visual-image-file").value = "";
    }
  };

  render.visual.video = {
    set: function() {
      if (state.get.current().background.visual.show && state.get.current().background.visual.type == "video") {
        if (helper.checkIfValidString(state.get.current().background.visual.video.url)) {
          var backgroundVisualVideo = helper.e(".background-visual-video");
          if (state.get.current().background.visual.video.url.includes("mp4") || state.get.current().background.visual.video.url.endsWith("mp4")) {
            var video = helper.node("video|autoplay,loop,muted,type:video/mp4")
            var source = helper.node("source|src:" + state.get.current().background.visual.video.url);
            video.muted = true;
            video.loop = true;
            video.autoplay = true;
            video.appendChild(source);
            backgroundVisualVideo.appendChild(video);
          } else if (state.get.current().background.visual.video.url.includes("webm") || state.get.current().background.visual.video.url.endsWith("webm")) {
            var video = helper.node("video|autoplay,loop,muted,type:video/webm")
            var source = helper.node("source|src:" + state.get.current().background.visual.video.url);
            video.muted = true;
            video.loop = true;
            video.autoplay = true;
            video.appendChild(source);
            backgroundVisualVideo.appendChild(video);
          };
        } else {
          render.visual.video.clear();
        };
      };
    },
    clear: function() {
      var backgroundVisualVideo = helper.e(".background-visual-video");
      while (backgroundVisualVideo.lastChild) {
        backgroundVisualVideo.removeChild(backgroundVisualVideo.lastChild);
      };
    }
  };

  render.feedback = {
    init: function() {
      if (helper.checkIfValidString(state.get.current().background.visual.image.file.name)) {
        render.feedback.current();
      } else {
        render.feedback.empty();
      };
    },
    empty: function() {
      var controlBackgroundImageFileFeedback = helper.e(".control-background-visual-image-file-feedback");
      var para1 = helper.node("p:No image selected.|class:muted small");
      controlBackgroundImageFileFeedback.appendChild(para1);
    },
    current: function() {
      var controlBackgroundImageFileFeedback = helper.e(".control-background-visual-image-file-feedback");
      var para1 = helper.node("p:Image loaded.|class:muted small");
      var para2 = helper.node("p:" + state.get.current().background.visual.image.file.name);
      controlBackgroundImageFileFeedback.appendChild(para1);
      controlBackgroundImageFileFeedback.appendChild(para2);
    },
    success: function(name, action) {
      var controlBackgroundImageFileFeedback = helper.e(".control-background-visual-image-file-feedback");
      var para1 = helper.node("p:Success! Setting Background image.|class:muted small");
      var para2 = helper.node("p:" + name);
      controlBackgroundImageFileFeedback.appendChild(para1);
      controlBackgroundImageFileFeedback.appendChild(para2);
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
      var controlBackgroundImageFileFeedback = helper.e(".control-background-visual-image-file-feedback");
      while (controlBackgroundImageFileFeedback.lastChild) {
        controlBackgroundImageFileFeedback.removeChild(controlBackgroundImageFileFeedback.lastChild);
      };
      if (options.animate) {
        bind.feedback.animation.set("is-jello");
      };
    },
    fail: {
      filetype: function(name) {
        var controlBackgroundImageFileFeedback = helper.e(".control-background-visual-image-file-feedback");
        var para1 = helper.node("p:Not the right kind of file. Make sure the selected file is an image.|class:small muted");
        var para2 = helper.node("p:" + name);
        controlBackgroundImageFileFeedback.appendChild(para1);
        controlBackgroundImageFileFeedback.appendChild(para2);
        bind.feedback.animation.set("is-shake");
      },
      size: function(name) {
        var controlBackgroundImageFileFeedback = helper.e(".control-background-visual-image-file-feedback");
        var para1 = helper.node("p:File size is too big. Max file size of 5MB.|class:small muted");
        var para2 = helper.node("p:" + name);
        controlBackgroundImageFileFeedback.appendChild(para1);
        controlBackgroundImageFileFeedback.appendChild(para2);
        bind.feedback.animation.set("is-shake");
      }
    }
  };

  var _validateImageFile = function(fileList) {
    // make new file reader
    var reader = new FileReader();
    // define the on load event for the reader
    reader.onload = function(event) {
      if (fileList.item(0).size <= 5000000) {
        if (fileList.item(0).type.split("/")[0] == "image") {
          mod.visual.image.file(fileList[0].name, event.target.result);
          data.save();
          render.feedback.clear();
          render.feedback.success(fileList[0].name, render.visual.image.set);
          render.visual.image.clear();
        } else {
          // not an image file
          render.feedback.clear();
          render.feedback.fail.filetype(fileList[0].name);
          render.visual.image.clear();
        };
      } else {
        // file size too big
        render.feedback.clear();
        render.feedback.fail.size(fileList[0].name);
        render.visual.image.clear();
      };
    };
    // invoke the reader
    reader.readAsDataURL(fileList.item(0));
  };

  var init = function() {
    render.color.custom();
    render.visual.image.set();
    render.visual.video.set();
    render.visual.blur();
    render.visual.grayscale();
    render.visual.opacity();
    render.visual.scale();
    render.visual.accent();
    render.visual.vignette.opacity();
    render.visual.vignette.start();
    render.visual.vignette.end();
    render.feedback.init();
  };

  // exposed methods
  return {
    init: init,
    mod: mod,
    render: render,
    bind: bind
  };

})();
