var update = (function() {

  var _update_100 = function(data) {
    var time = new Date().getTime();
    data.bookmarks.forEach(function(arrayItem, index) {
      time = time + 1;
      arrayItem.timeStamp = time;
    });
    data.version = 1.00;
    return data;
  };

  var _update_200 = function(data) {
    state.change({
      path: "layout.theme",
      value: data.theme
    });
    data = {
      state: state.get(),
      bookmarks: data.bookmarks
    };
    data.version = 2.00;
    return data;
  };

  var _update_210 = function(data) {
    data.state.layout.theme = {
      current: data.state.layout.theme,
      random: false
    };
    data.version = 2.10;
    return data;
  };

  var _update_230 = function(data) {
    data.state.layout.theme.random = {
      active: data.state.layout.theme.random,
      style: "any"
    };
    data.version = 2.30;
    return data;
  };

  var _update_240 = function(data) {
    data.state.link.show = {
      active: true,
      name: true,
      url: true
    };
    data.state.layout.alignment = {
      horizontal: data.state.layout.alignment,
      vertical: "top"
    };
    data.state.background = {
      image: {
        active: false,
        url: "../background/gray-steps.jpg",
        blur: 0,
        opacity: 1,
        grayscale: 0,
        accentOpacity: 0
      }
    };
    data.version = 2.40;
    return data;
  };

  var _update_250 = function(data) {
    data.state.header.search.focus = false;
    data.version = 2.50;
    return data;
  };

  // var _update_300 = function(data) {
  //   data.version = 3.00;
  //   return data;
  // };

  function render(data) {
    if (!("version" in data)) {
      console.log("\trunning update", 1.00);
      data = _update_100(data);
    };
    if (data.version < 2.00) {
      console.log("\trunning update", 2.00);
      data = _update_200(data);
    };
    if (data.version < 2.10) {
      console.log("\trunning update", 2.10);
      data = _update_210(data);
    };
    if (data.version < 2.30) {
      console.log("\trunning update", 2.30);
      data = _update_230(data);
    };
    if (data.version < 2.40) {
      console.log("\trunning update", 2.40);
      data = _update_240(data);
    };
    if (data.version < 2.50) {
      console.log("\trunning update", 2.50);
      data = _update_240(data);
    };
    // if (data.version < 3.00) {
    //   console.log("\t# running update", 3.00);
    //   data = _update_300(data);
    // };
    return data;
  };

  // exposed methods
  return {
    render: render
  };

})();
