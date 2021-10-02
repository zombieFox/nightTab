import { component } from './component';
import { APP_NAME } from './constants';

console.log(APP_NAME + ' version:', component.version.number, component.version.name);

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

// component.menu.open();
