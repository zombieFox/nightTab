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
