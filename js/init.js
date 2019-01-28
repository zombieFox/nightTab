// log version
console.log("nightTab v", version.get(), "loaded");

// check for old versions
data.init();

// bind and update controls
// render states
state.init();

// restore bookmarks
bookmarks.init();

// close menu if left open
// bind menu tabs
menu.init();

// render input color value
// render css accent var
theme.init();

// render links from bookmarks
link.init();

// bind controls
// render checkboxes and radios
// render states
control.init();

// render date
// bind date update
date.init();

// render clock
// bind clock update
clock.init();

// bind keyboard keys
keyboard.init();

// bind tips
tip.init();

// render header height padding
header.init();

// render background image
background.init();

// bind search box
// render search engine
// focus seach input
search.init();
