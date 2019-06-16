// log version
if ("runtime" in chrome) {
  console.log("nightTab version", version.get());
} else {
  console.log("nightTab running in demo mode");
  console.log("all bookmarks or preference changes will not persist in demo mode");
};
data.init();
state.init();
bookmarks.init();
menu.init();
accent.init();
link.init();
control.init();
greeting.init();
transitional.init();
date.init();
clock.init();
keyboard.init();
tip.init();
layout.init();
background.init();
search.init();
title.init();
header.init();
theme.init();
