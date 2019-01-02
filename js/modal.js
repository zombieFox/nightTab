var modal = (function() {

  var previousModal = null;

  var destroy = function() {
    var all_modal = helper.eA(".modal");
    if (all_modal[0]) {
      for (var i = 0; i < all_modal.length; i++) {
        all_modal[i].destroy();
      };
    };
  };

  var render = function(options) {
    var defaultOptions = {
      heading: "Modal",
      content: "Body",
      action: null,
      actionText: "OK",
      cancelText: "Cancel",
      size: "medium"
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var makeModal = function() {
      var body = helper.e("body");
      state.change({
        path: "modal.active",
        value: true
      });
      var modalWrapper = document.createElement("div");
      modalWrapper.setAttribute("class", "modal-wrapper");
      var modal = document.createElement("div");
      if (defaultOptions.size == "large") {
        modal.setAttribute("class", "modal modal-large");
      } else if (defaultOptions.size == "small") {
        modal.setAttribute("class", "modal modal-small");
      } else if (defaultOptions.size) {
        modal.setAttribute("class", "modal");
      };
      modal.destroy = function() {
        if (modal.classList.contains("is-opaque")) {
          helper.removeClass(modal, "is-opaque");
          helper.addClass(modal, "is-transparent");
          helper.addClass(modalWrapper, "is-droping-down");
        } else {
          modal.remove();
        };
        state.change({
          path: "modal.active",
          value: false
        });
      };
      var modalBody = document.createElement("div");
      modalBody.setAttribute("class", "modal-body");
      var modalControls = document.createElement("div");
      modalControls.setAttribute("class", "modal-controls");
      var actionButton = document.createElement("button");
      actionButton.setAttribute("tabindex", "1");
      actionButton.setAttribute("class", "button button-primary button-block button-large");
      actionButton.textContent = defaultOptions.actionText;
      var cancelButton = document.createElement("button");
      cancelButton.setAttribute("tabindex", "1");
      cancelButton.setAttribute("class", "button button-primary button-block button-large");
      cancelButton.textContent = defaultOptions.cancelText;
      modalControls.appendChild(cancelButton);
      modalControls.appendChild(actionButton);
      if (defaultOptions.heading != null) {
        var modalHeading = document.createElement("h1");
        modalHeading.setAttribute("tabindex", "1");
        modalHeading.setAttribute("class", "modal-heading");
        modalHeading.textContent = defaultOptions.heading;
        modalBody.appendChild(modalHeading);
      };
      if (defaultOptions.content) {
        if (typeof defaultOptions.content == "string") {
          var container = document.createElement("div");
          container.setAttribute("class", "container");
          var para = document.createElement("p");
          para.textContent = defaultOptions.content;
          container.appendChild(para);
          modalBody.appendChild(container);
        } else {
          modalBody.appendChild(defaultOptions.content);
        };
      };
      modalWrapper.appendChild(modalBody);
      modalWrapper.appendChild(modalControls);
      modal.appendChild(modalWrapper);
      modal.addEventListener("transitionend", function(event, elapsed) {
        if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
          this.parentElement.removeChild(this);
        };
        if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 1) {
          helper.addClass(this, "is-transition-end");
        };
      }.bind(modal), false);
      actionButton.addEventListener("click", function(event) {
        this.destroy();
        shade.destroy();
        if (defaultOptions.action) {
          defaultOptions.action();
        };
      }.bind(modal), false);
      cancelButton.addEventListener("click", function(event) {
        this.destroy();
        shade.destroy();
      }.bind(modal), false);
      previousModal = modal;
      shade.render({
        action: function() {
          modal.destroy();
        },
        includeHeader: true
      });
      body.appendChild(modal);
      getComputedStyle(modal).opacity;
      helper.removeClass(modal, "is-transparent");
      helper.addClass(modal, "is-opaque");
      modalHeading.focus(this);
    };
    if (previousModal != null) {
      destroy();
    };
    makeModal();
  };

  // exposed methods
  return {
    destroy: destroy,
    render: render
  };

})();
