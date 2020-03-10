var modal = (function() {

  var _previousModal = null;

  var mod = {};

  mod.open = function() {
    helper.setObject({
      object: state.get.current(),
      path: "modal",
      newValue: true
    });
  };

  mod.close = function() {
    helper.setObject({
      object: state.get.current(),
      path: "modal",
      newValue: false
    });
  };

  var bind = {};

  bind.focus = {
    loop: function(event) {
      var allElements = helper.e(".modal").querySelectorAll("[tabindex]");
      var firstElement = allElements[0];
      var lastElement = allElements[allElements.length - 1];
      if (event.keyCode == 9 && event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else if (event.keyCode == 9) {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      };
    },
    add: function() {
      window.addEventListener("keydown", bind.focus.loop, false);
    },
    remove: function() {
      window.removeEventListener("keydown", bind.focus.loop, false);
    }
  };

  var render = {};

  render.toggle = function(override) {
    if (state.get.current().modal) {
      render.open(override);
    } else {
      render.close();
    };
  };

  render.close = function() {
    var allModal = helper.eA(".modal");
    if (allModal[0]) {
      for (var i = 0; i < allModal.length; i++) {
        allModal[i].close();
      };
    };
  };

  render.open = function(override) {
    var options = {
      heading: "Modal",
      content: "Body",
      successAction: null,
      cancelAction: null,
      actionText: "OK",
      cancelText: "Cancel",
      size: "medium"
    };
    if (override) {
      options = helper.applyOptions(options, override);
    };
    var _makeModal = function() {
      mod.open();
      var body = helper.e("body");
      var modal = helper.node("div");
      var modalWrapper = helper.node("div|class:modal-wrapper");
      if (options.size == "large") {
        modal.setAttribute("class", "modal modal-large");
      } else if (options.size == "small") {
        modal.setAttribute("class", "modal modal-small");
      } else if (options.size) {
        modal.setAttribute("class", "modal");
      };
      modal.close = function() {
        if (modal.classList.contains("is-opaque")) {
          helper.removeClass(modal, "is-opaque");
          helper.addClass(modal, "is-transparent");
        } else {
          modal.remove();
        };
        mod.close();
        bind.focus.remove();
      };
      var modalBody = helper.node("div|class:modal-body");
      var modalControls = helper.node("div|class:modal-controls");
      var actionButton = helper.node("button:" + options.actionText + "|class:modal-button button button-primary button-block,tabindex:1");
      var cancelButton = helper.node("button:" + options.cancelText + "|class:modal-button button button-primary button-block,tabindex:1");
      modalControls.appendChild(cancelButton);
      modalControls.appendChild(actionButton);
      if (options.heading != null) {
        var modalHeading = helper.node("h1:" + options.heading + "|class:modal-heading,tabindex:1");
        modalBody.appendChild(modalHeading);
      };
      if (options.content) {
        if (typeof options.content == "string") {
          var container = helper.node("div|class:container");
          var para = helper.node("p:" + options.content);
          container.appendChild(para);
          modalBody.appendChild(container);
        } else {
          modalBody.appendChild(options.content);
        };
      };
      modalWrapper.appendChild(modalBody);
      modalWrapper.appendChild(modalControls);
      modal.appendChild(modalWrapper);
      modal.addEventListener("transitionend", function(event, elapsed) {
        if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
          this.parentElement.removeChild(this);
        };
      }.bind(modal), false);
      actionButton.addEventListener("click", function(event) {
        if (options.successAction) {
          options.successAction();
        };
        this.close();
      }.bind(modal), false);
      cancelButton.addEventListener("click", function(event) {
        if (options.cancelAction) {
          options.cancelAction();
        };
        this.close();
      }.bind(modal), false);
      _previousModal = modal;
      body.appendChild(modal);
      getComputedStyle(modal).opacity;
      helper.removeClass(modal, "is-transparent");
      helper.addClass(modal, "is-opaque");
      modalHeading.focus(this);
    };
    if (_previousModal != null) {
      render.close();
    };
    _makeModal();
  };

  var open = function(override) {
    mod.open();
    render.open(override);
    bind.focus.add();
  };

  var close = function() {
    mod.close();
    render.close();
    bind.focus.remove();
  };

  var init = function() {
    mod.close();
    render.close();
  };

  // exposed methods
  return {
    init: init,
    mod: mod,
    bind: bind,
    render: render,
    open: open,
    close: close
  };

})();
