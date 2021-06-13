// log version
(async () => {
    console.log("nightTab version", version.get().number, version.get().name);
    await data.init();
    await state.init();
    header.init();
    await bookmarks.init();
    theme.init();
    menu.init();
    search.init();
    link.init();
    control.init();
    greeting.init();
    transitional.init();
    date.init();
    clock.init();
    keyboard.init();
    layout.init();
    background.init();
    modal.init();
    shade.init();
    dropdown.init();
    edge.init();
    version.init();
    ready.init();
})();