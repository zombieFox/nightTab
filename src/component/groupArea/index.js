import { state } from '../state';
import { data } from '../data';
import { theme } from '../theme';
import { group } from '../group';
import { layout } from '../layout';
import { bookmark } from '../bookmark';
import { groupAndBookmark } from '../groupAndBookmark';

import { Button } from '../button';
import { Modal } from '../modal';
import { GroupForm } from '../groupForm';
import { StagedGroup } from '../stagedGroup';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';
import { isValidString } from '../../utility/isValidString';
import { trimString } from '../../utility/trimString';
import { clearChildNode } from '../../utility/clearChildNode';

export const GroupArea = function({
  groupData = {}
} = {}) {

  this.element = {
    group: node('div|class:group'),
    header: node('div|class:group-header'),
    name: {
      name: node('div|class:group-name'),
      text: node('h1|class:group-name-text')
    },
    control: {
      control: node('div|class:group-control'),
      group: node('div|class:group-control-group form-group form-group-horizontal')
    },
    toolbar: {
      toolbar: node('div|class:group-toolbar'),
      group: node('div|class:group-toolbar-group form-group form-group-horizontal')
    },
    body: node('div|class:group-body')
  };

  this.control = {};

  this.control.button = {
    up: new Button({
      text: 'Move this group up',
      srOnly: true,
      iconName: 'arrowKeyboardUp',
      style: ['line'],
      title: 'Move this group up',
      classList: ['group-control-button', 'group-control-up'],
      func: () => {

        groupData.position.destination--;

        if (groupData.position.destination < 0) {
          groupData.position.destination = 0;
        };

        group.item.mod.move(groupData);

        groupAndBookmark.render();

        data.save();

      }
    }),
    sort: new Button({
      text: 'Drag group to reorder',
      srOnly: true,
      iconName: 'drag',
      style: ['line'],
      title: 'Drag group to reorder',
      classList: ['group-control-button', 'group-control-sort'],
    }),
    down: new Button({
      text: 'Move this group down',
      srOnly: true,
      iconName: 'arrowKeyboardDown',
      style: ['line'],
      title: 'Move this group right',
      classList: ['group-control-button', 'group-control-up'],
      func: () => {

        groupData.position.destination++;

        if (groupData.position.destination > bookmark.all.length - 1) {
          groupData.position.destination = bookmark.all.length - 1;
        };

        group.item.mod.move(groupData);

        groupAndBookmark.render();

        data.save();

      }
    }),
    edit: new Button({
      text: 'Edit this group',
      srOnly: true,
      iconName: 'edit',
      style: ['line'],
      title: 'Edit this group',
      classList: ['group-control-button', 'group-control-edit'],
      func: () => {

        let newGroupData = new StagedGroup();

        newGroupData.group = JSON.parse(JSON.stringify(groupData.group));

        newGroupData.position = JSON.parse(JSON.stringify(groupData.position));

        newGroupData.type.existing = true;

        const groupForm = new GroupForm({ groupData: newGroupData });

        const editModal = new Modal({
          heading: isValidString(newGroupData.group.name.text) ? 'Edit ' + newGroupData.group.name.text : 'Edit unnamed group',
          content: groupForm.form(),
          successText: 'Save',
          width: 40,
          successAction: () => {

            group.item.mod.edit(newGroupData);

            groupAndBookmark.render();

            data.save();

          }
        });

        editModal.open();

      }
    }),
    remove: new Button({
      text: 'Remove this group',
      srOnly: true,
      iconName: 'cross',
      style: ['line'],
      title: 'Remove this group',
      classList: ['group-control-button', 'group-control-remove'],
      func: () => {

        const removeModal = new Modal({
          heading: isValidString(groupData.group.name.text) ? 'Remove ' + groupData.group.name.text : 'Remove unnamed bookmark',
          content: 'Are you sure you want to remove this Group and all the Bookmarks within? This can not be undone.',
          successText: 'Remove',
          width: 'small',
          successAction: () => {

            group.item.mod.remove(groupData);

            layout.area.assemble();

            groupAndBookmark.render();

            data.save();

          }
        });

        removeModal.open();

      }
    })
  };

  this.openAll = {
    button: new Button({
      text: 'Open all Bookmarks in ' + (isValidString(groupData.group.name.text) ? groupData.group.name.text : 'this Group'),
      style: ['line'],
      title: 'Open all Bookmarks in ' + (isValidString(groupData.group.name.text) ? groupData.group.name.text : 'this Group'),
      srOnly: true,
      iconName: 'openAll',
      classList: ['group-toolbar-button', 'group-toolbar-open-all'],
      func: () => {
        this.openAll.open();
      }
    }),
    open: () => {

      if (state.get.current().bookmark.newTab) {

        groupData.group.items.forEach((item, i) => {
          chrome.tabs.create({ url: item.url });
        });

      } else {

        const first = groupData.group.items.shift();

        groupData.group.items.forEach((item, i) => {
          chrome.tabs.create({ url: item.url });
        });

        window.location.href = first.url;

      };

    }
  };

  this.collapse = {
    button: new Button({
      text: 'Collapse ' + (isValidString(groupData.group.name.text) ? groupData.group.name.text : 'this Group'),
      style: ['line'],
      title: 'Collapse ' + (isValidString(groupData.group.name.text) ? groupData.group.name.text : 'this Group'),
      srOnly: true,
      iconName: 'arrowKeyboardUp',
      classList: ['group-toolbar-button', 'group-toolbar-collapse'],
      func: () => {
        this.collapse.toggle();
        this.collapse.video();
        this.update.style();
        data.save();
      }
    }),
    toggle: () => {

      if (groupData.group.collapse) {
        groupData.group.collapse = false;
      } else {
        groupData.group.collapse = true;
      };

    },
    video: () => {

      if (bookmark.tile.current.length > 0) {
        bookmark.tile.current.forEach((item, i) => {

          if (item.video) {
            if (groupData.group.collapse) {
              item.video.pause();
            } else {
              item.video.play();
            };
          };

        });
      };

    }
  };

  this.style = () => {

    if (groupData.group.name.show && isValidString(groupData.group.name.text)) {
      this.element.group.classList.add('is-group-header');
    };

    if (groupData.group.toolbar.collapse.show || (groupData.group.toolbar.openAll.show && groupData.group.items.length > 0)) {
      this.element.group.classList.add('is-group-toolbar');
    };

  };

  this.control.disable = () => {

    for (var key in this.control.button) {
      this.control.button[key].disable();
    };

    this.control.searchState();

  };

  this.control.enable = () => {

    for (var key in this.control.button) {
      this.control.button[key].enable();
    };

    this.control.searchState();

  };

  this.control.searchState = () => {

    if (state.get.current().search) {
      this.control.button.up.disable();
      this.control.button.down.disable();
      this.control.button.sort.disable();
    } else if (state.get.current().group.edit && !state.get.current().search) {
      this.control.button.up.enable();
      this.control.button.down.enable();
      this.control.button.sort.enable();
    };

  };

  this.assemble = () => {

    this.element.name.text.innerHTML = groupData.group.name.text;

    this.element.name.name.appendChild(this.element.name.text);

    this.element.control.group.appendChild(this.control.button.up.button);

    this.element.control.group.appendChild(this.control.button.sort.button);

    this.element.control.group.appendChild(this.control.button.down.button);

    this.element.control.group.appendChild(this.control.button.edit.button);

    this.element.control.group.appendChild(this.control.button.remove.button);

    this.element.control.control.appendChild(this.element.control.group);

    this.element.header.appendChild(this.element.control.control);

    if (groupData.group.name.show && isValidString(groupData.group.name.text)) {
      this.element.header.appendChild(this.element.name.name);
    };

    if (groupData.group.toolbar.collapse.show) {
      this.element.toolbar.group.appendChild(this.collapse.button.button);
    };

    if (groupData.group.toolbar.openAll.show && groupData.group.items.length > 0) {
      this.element.toolbar.group.appendChild(this.openAll.button.button);
    };

    if (groupData.group.toolbar.collapse.show || (groupData.group.toolbar.openAll.show && groupData.group.items.length > 0)) {

      this.element.toolbar.toolbar.appendChild(this.element.toolbar.group);

      this.element.header.appendChild(this.element.toolbar.toolbar);

    };

    this.element.group.appendChild(this.element.header);

    this.element.group.appendChild(this.element.body);

    this.element.body.position = groupData.position;

    if (state.get.current().group.edit) {
      this.control.enable();
    } else {
      this.control.disable();
    };

  };

  this.clear = () => {

    clearChildNode(this.element.body);

  };

  this.group = () => {

    return this.element.group;

  };

  this.update = {};

  this.update.style = () => {

    const html = document.querySelector('html');

    if (state.get.current().theme.group.toolbar.opacity < 40) {

      html.classList.add('is-group-toolbar-opacity-low');

      this.openAll.button.style.update(['link']);

      this.collapse.button.style.update(['link']);

    } else {

      html.classList.remove('is-group-toolbar-opacity-low');

      this.openAll.button.style.update(['line']);

      this.collapse.button.style.update(['line']);

    };

    if (groupData.group.collapse) {

      this.element.group.classList.add('is-group-collapse');

    } else {

      this.element.group.classList.remove('is-group-collapse');

    };

  };

  this.style();

  this.assemble();

  this.update.style();

};
