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
      var modalWrapper = document.createElement("div");
      modalWrapper.setAttribute("class", "modal-wrapper");
      var modal = document.createElement("div");
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
          helper.addClass(modalWrapper, "is-droping-down");
        } else {
          modal.remove();
        };
        mod.close();
      };
      var modalBody = document.createElement("div");
      modalBody.setAttribute("class", "modal-body");
      var modalControls = document.createElement("div");
      modalControls.setAttribute("class", "modal-controls");
      var actionButton = document.createElement("button");
      actionButton.setAttribute("tabindex", "1");
      actionButton.setAttribute("class", "modal-button button button-primary button-block");
      actionButton.textContent = options.actionText;
      var cancelButton = document.createElement("button");
      cancelButton.setAttribute("tabindex", "1");
      cancelButton.setAttribute("class", "modal-button button button-primary button-block");
      cancelButton.textContent = options.cancelText;
      modalControls.appendChild(cancelButton);
      modalControls.appendChild(actionButton);
      if (options.heading != null) {
        var modalHeading = document.createElement("h1");
        modalHeading.setAttribute("tabindex", "1");
        modalHeading.setAttribute("class", "modal-heading");
        modalHeading.textContent = options.heading;
        modalBody.appendChild(modalHeading);
      };
      if (options.content) {
        if (typeof options.content == "string") {
          var container = document.createElement("div");
          container.setAttribute("class", "container");
          var para = document.createElement("p");
          para.textContent = options.content;
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
