var modal = (function() {

  var previousModal = null;

  var destroy = function() {
    var allModal = helper.eA(".modal");
    if (allModal[0]) {
      for (var i = 0; i < allModal.length; i++) {
        allModal[i].destroy();
      };
    };
  };

  var render = function(override) {
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
      var body = helper.e("body");
      helper.setObject({
        object: state.get(),
        path: "modal",
        newValue: true
      });
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
      modal.destroy = function() {
        if (modal.classList.contains("is-opaque")) {
          helper.removeClass(modal, "is-opaque");
          helper.addClass(modal, "is-transparent");
          helper.addClass(modalWrapper, "is-droping-down");
        } else {
          modal.remove();
        };
        helper.setObject({
          object: state.get(),
          path: "modal",
          newValue: false
        });
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
        if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 1) {
          helper.addClass(this, "is-transition-end");
        };
      }.bind(modal), false);
      actionButton.addEventListener("click", function(event) {
        this.destroy();
        shade.destroy();
        page.update();
        if (options.successAction) {
          options.successAction();
        };
      }.bind(modal), false);
      cancelButton.addEventListener("click", function(event) {
        this.destroy();
        shade.destroy();
        page.update();
        if (options.cancelAction) {
          options.cancelAction();
        };
      }.bind(modal), false);
      previousModal = modal;
      shade.render({
        action: function() {
          modal.destroy();
          page.update();
          if (options.cancelAction) {
            options.cancelAction();
          };
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
    _makeModal();
    page.lock();
  };

  // exposed methods
  return {
    destroy: destroy,
    render: render
  };

})();
