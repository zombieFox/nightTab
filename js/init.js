// log version
console.log("nightTab v", version.get(), "loaded");

// bind and update controls
// render states
state.init();

// close menu if left open
menu.init();

// restore bookmarks
bookmarks.init();

// render input color value
// render css accent var
theme.init();

// render links from bookmarks
links.init();

// render layout type
layout.init();

// bind controls
// render checkboxes and radios
// render states
control.init();

// bind search box
// render search engine
search.init();

// render clock
// bind window event
clock.init();
