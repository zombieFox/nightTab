var tip = (function() {

  var destroyTimer = null;

  var intervalId;

  var _bind = function() {
    var allTip = helper.eA("[data-tip-options]");
    for (var i = 0; i < allTip.length; i++) {
      var options = helper.makeObject(allTip[i].dataset.tipOptions);
      _bind_tip(allTip[i]);
    };
  };

  var _bind_tip = function(tip) {
    var options = helper.makeObject(tip.dataset.tipOptions);
    var action = {
      focus: function() {
        tip.addEventListener("focus", function() {
          if (options.delay) {
            intervalId = setInterval(function() {
              render(tip);
            }, options.delay);
          } else {
            render(tip);
          };
        }, false);
        tip.addEventListener("blur", function() {
          destroy();
          clearInterval(intervalId);
        }, false);
      },
      hover: function() {
        tip.addEventListener("mouseover", function() {
          if (options.delay) {
            intervalId = setInterval(function() {
              render(tip);
            }, options.delay);
          } else {
            render(tip);
          };
        }, false);
        tip.addEventListener("mouseout", function() {
          destroy();
          clearInterval(intervalId);
        }, false);
      }
    };
    action[options.state]();
  };

  var delayDestroy = function() {
    var allTipBox = helper.eA(".tip-box");
    for (var i = 0; i < allTipBox.length; i++) {
      if (!allTipBox[i].classList.contains("is-opaque")) {
        allTipBox[i].parentElement.removeChild(allTipBox[i]);
      };
    };
  };

  var destroy = function() {
    var allTipBox = helper.eA(".tip-box");
    if (allTipBox[0]) {
      for (var i = 0; i < allTipBox.length; i++) {
        allTipBox[i].destroy();
      };
    };
  };

  var render = function(tip) {
    // console.log(tip.getBoundingClientRect());
    var options = helper.makeObject(tip.dataset.tipOptions);
    var body = helper.e("body");
    var tipWrapper = document.createElement("div");
    tipWrapper.setAttribute("class", "tip tip-box is-transparent");
    var tipArrow = document.createElement("span");
    tipArrow.setAttribute("class", "tip-arrow");
    var tipMessage = document.createElement("p");
    tipMessage.setAttribute("class", "tip-message");
    tipMessage.textContent = options.message;
    tipWrapper.destroy = function() {
      if (tipWrapper.classList.contains("is-opaque")) {
        helper.removeClass(tipWrapper, "is-opaque");
        helper.addClass(tipWrapper, "is-transparent");
        helper.removeClass(tipWrapper, "tip-intro");
        helper.addClass(tipWrapper, "tip-outro");
      } else {
        tipWrapper.remove();
      };
    };
    tipWrapper.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(tipWrapper), false);

    tipWrapper.appendChild(tipMessage);
    tipWrapper.appendChild(tipArrow);
    body.appendChild(tipWrapper);
    tipWrapper.setAttribute("style", "width: " + (parseInt(tipWrapper.getBoundingClientRect().width, 10) + 2) + "px;");

    var width = parseInt(tipWrapper.getBoundingClientRect().width);
    var top = parseInt(tip.getBoundingClientRect().top, 10) + parseInt(pageYOffset, 10) - parseInt(tipWrapper.getBoundingClientRect().height, 10) - parseInt(getComputedStyle(tipWrapper).marginTop, 10) - parseInt(getComputedStyle(tipWrapper).marginBottom, 10);
    var left = parseInt(tip.getBoundingClientRect().left, 10) + parseInt((tip.getBoundingClientRect().width / 2), 10) - parseInt(((width + parseInt(getComputedStyle(tipWrapper).marginLeft, 10) + parseInt(getComputedStyle(tipWrapper).marginRight, 10)) / 2), 10);

    tipWrapper.setAttribute("style", "width: " + width + "px; top: " + top + "px; left: " + left + "px");
    var style = {
      top: tipWrapper.style.top,
      width: tipWrapper.style.width
    };

    if (tipWrapper.getBoundingClientRect().left < parseInt(getComputedStyle(tipWrapper).marginLeft, 10)) {
      // console.log("too far left");
      tipWrapper.setAttribute("style", "width: " + style.width + "; top: " + style.top + "; left: " + 0 + "px;");
      tipArrow.setAttribute("style", "left: " + (parseInt(tip.getBoundingClientRect().left, 10) + parseInt((tip.getBoundingClientRect().width / 2), 10) - parseInt(getComputedStyle(tipWrapper).marginLeft, 10)) + "px;");
    } else if (tipWrapper.getBoundingClientRect().right > (document.documentElement.clientWidth - parseInt(getComputedStyle(tipWrapper).marginLeft, 10))) {
      // console.log("too far right");
      tipWrapper.setAttribute("style", "width: " + style.width + "; top: " + style.top + "; left: initial; right: " + 0 + "px;");
      tipArrow.setAttribute("style", "left: " + (-parseInt(tipWrapper.getBoundingClientRect().left, 10) + parseInt(tip.getBoundingClientRect().left, 10) + (parseInt((tip.getBoundingClientRect().width), 10) / 2)) + "px;");
    };

    getComputedStyle(tipWrapper).opacity;
    helper.removeClass(tipWrapper, "is-transparent");
    helper.addClass(tipWrapper, "is-opaque");
    helper.addClass(tipWrapper, "tip-intro");
  };

  var init = function() {
    _bind();
  };

  // exposed methods
  return {
    destroy: destroy,
    init: init
  };

})();
