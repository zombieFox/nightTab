// inital check for systems which do not have light or dark mode
var data = JSON.parse(localStorage.getItem("nightTab"));
if (window.matchMedia("(prefers-color-scheme:light)").matches) {
  if (data) {
    if (data.state.theme.style == "dark") {
      document.querySelector("html").setAttribute("style", "background-color:rgb(0,0,0)");
    };
  };
} else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
  if (data) {
    if (data.state.theme.style == "light") {
      document.querySelector("html").setAttribute("style", "background-color:rgb(255,255,255)");
    };
  };
};
