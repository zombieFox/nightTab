import { component } from './component';

console.log(component.appName + ' version:', component.version.number, component.version.name);

component.data.init();

component.theme.init();

component.layout.init();

component.toolbar.init();

component.header.init();

component.group.init();

component.bookmark.init();

component.groupAndBookmark.init();

component.pageLock.init();

component.keyboard.init();

component.menu.init();

// component.menu.open();

// document.addEventListener('focusin', () => { console.log('focused: ', document.activeElement); });
