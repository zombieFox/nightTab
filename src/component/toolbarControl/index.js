import { state } from '../state';
import { menu } from '../menu';
import { data } from '../data';
import { bookmark } from '../bookmark';
import { group } from '../group';
import { header } from '../header';

import * as form from '../form';

import { Button } from '../button';
import { Dropdown } from '../dropdown';

import { Control_inputButton } from '../control/inputButton';

import { node } from '../../utility/node';
import { applyCSSVar } from '../../utility/applyCSSVar';
import { applyCSSClass } from '../../utility/applyCSSClass';
import { applyCSSState } from '../../utility/applyCSSState';

import './index.css';

export const ToolbarControl = function () {

  this.element = {
    toolbar: node('div|class:toolbar'),
    control: node('div|class:toolbar-control'),
    group: form.group()
  };

  this.control = {};

  this.control.button = {
    accent: new Control_inputButton({
      object: state.get.current(),
      path: 'theme.accent',
      id: 'theme-accent-quick',
      type: 'color',
      labelText: 'Accent colour',
      srOnly: true,
      inputButtonStyle: ['dot', 'line'],
      inputButtonClassList: ['toolbar-item'],
      action: () => {
        applyCSSVar([
          'theme.accent.rgb.r',
          'theme.accent.rgb.g',
          'theme.accent.rgb.b',
          'theme.accent.hsl.h',
          'theme.accent.hsl.s',
          'theme.accent.hsl.l'
        ]);
        this.update.style();
        data.save();
      }
    }),
    add: new Dropdown({
      text: 'Add',
      buttonStyle: ['line'],
      buttonClassList: ['toolbar-item'],
      srOnly: true,
      iconName: 'add',
      menuItem: [
        { text: 'New Group', iconName: 'addGroup', action: () => { group.add.render(); } },
        { text: 'New Bookmark', iconName: 'addBookmark', action: () => { bookmark.add.render(); } }
      ]
    }),
    edit: new Button({
      text: 'Enter edit bookmark mode',
      srOnly: true,
      iconName: 'edit',
      classList: ['toolbar-item'],
      style: ['line'],
      func: () => {
        bookmark.edit.toggle();
        group.edit.toggle();
        header.edit.toggle();
        this.update.edit();
        data.save();
      }
    }),
    setting: new Button({
      text: 'Open settings menu',
      srOnly: true,
      iconName: 'settings',
      classList: ['toolbar-item'],
      style: ['line'],
      func: () => {
        menu.toggle();
      }
    })
  };

  this.assemble = () => {

    switch (state.get.current().toolbar.location) {

      case 'corner':

        switch (state.get.current().toolbar.position) {

          case 'top-right':
          case 'bottom-right':
            this.element.group.classList.remove('form-group-reverse');
            break;

          case 'top-left':
          case 'bottom-left':
            this.element.group.classList.add('form-group-reverse');
            break;

        }

        break;

      case 'header':
        this.element.group.classList.remove('form-group-reverse');
        break;

    }

    if (state.get.current().toolbar.accent.show) {

      this.element.group.appendChild(this.control.button.accent.button);

    } else {

      if (this.element.group.contains(this.control.button.accent.button)) {
        this.element.group.removeChild(this.control.button.accent.button);
      }

    }

    if (state.get.current().toolbar.add.show) {

      this.element.group.appendChild(this.control.button.add.toggle);

    } else {

      if (this.element.group.contains(this.control.button.add.toggle)) {
        this.element.group.removeChild(this.control.button.add.toggle);
      }

    }

    if (state.get.current().toolbar.edit.show) {

      this.element.group.appendChild(this.control.button.edit.button);

    } else {

      if (this.element.group.contains(this.control.button.edit.button)) {
        this.element.group.removeChild(this.control.button.edit.button);
      }

    }

    this.element.group.appendChild(this.control.button.setting.button);

    this.element.control.appendChild(this.element.group);

    this.element.toolbar.appendChild(this.element.control);

  };

  this.toolbar = () => {

    return this.element.toolbar;

  };

  this.update = {};

  this.update.style = () => {

    const html = document.querySelector('html');

    if (state.get.current().theme.toolbar.opacity < 40) {

      html.classList.add('is-toolbar-opacity-low');

    } else {

      html.classList.remove('is-toolbar-opacity-low');

    }

    const add = (rgb) => {

      this.element.toolbar.style.setProperty('--toolbar-color-r', rgb.r);
      this.element.toolbar.style.setProperty('--toolbar-color-g', rgb.g);
      this.element.toolbar.style.setProperty('--toolbar-color-b', rgb.b);

      this.element.toolbar.style.setProperty('--toolbar-color-text', '0, 0%, calc(((((var(--toolbar-color-r) * var(--theme-t-r)) + (var(--toolbar-color-g) * var(--theme-t-g)) + (var(--toolbar-color-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%)');

      this.element.toolbar.style.setProperty('--button-link-text', 'var(--toolbar-color-text)');
      this.element.toolbar.style.setProperty('--button-link-text-focus-hover', 'var(--toolbar-color-text)');
      this.element.toolbar.style.setProperty('--button-link-text-active', 'var(--toolbar-color-text)');

    };

    const remove = () => {

      this.element.toolbar.style.removeProperty('--toolbar-color-r');
      this.element.toolbar.style.removeProperty('--toolbar-color-g');
      this.element.toolbar.style.removeProperty('--toolbar-color-b');

      this.element.toolbar.style.removeProperty('--toolbar-color-text');

      this.element.toolbar.style.removeProperty('--button-link-text');
      this.element.toolbar.style.removeProperty('--button-link-text-focus-hover');
      this.element.toolbar.style.removeProperty('--button-link-text-active');

    };

    if (state.get.current().theme.toolbar.opacity < 40) {

      switch (state.get.current().theme.background.type) {

        case 'theme':
        case 'image':
        case 'video':

          remove();

          break;

        case 'accent':

          add(state.get.current().theme.accent.rgb);

          break;

        case 'color':

          add(state.get.current().theme.background.color.rgb);

          break;

        case 'gradient':

          switch (state.get.current().toolbar.location) {
            case 'corner': {
              let angle = state.get.current().theme.background.gradient.angle;

              switch (state.get.current().toolbar.position) {

                case 'top-left':
                case 'top-right':
                  if (angle < 90) {
                    add(state.get.current().theme.background.gradient.end.rgb);
                  } else if (angle >= 90 && angle < 180) {
                    add(state.get.current().theme.background.gradient.start.rgb);
                  } else if (angle >= 180 && angle < 270) {
                    add(state.get.current().theme.background.gradient.start.rgb);
                  } else if (angle >= 270) {
                    add(state.get.current().theme.background.gradient.end.rgb);
                  }
                  break;

                case 'bottom-right':
                case 'bottom-left':
                  if (angle < 90) {
                    add(state.get.current().theme.background.gradient.start.rgb);
                  } else if (angle >= 90 && angle < 180) {
                    add(state.get.current().theme.background.gradient.end.rgb);
                  } else if (angle >= 180 && angle < 270) {
                    add(state.get.current().theme.background.gradient.end.rgb);
                  } else if (angle >= 270) {
                    add(state.get.current().theme.background.gradient.start.rgb);
                  }
                  break;

              }

              break;
            }

            case 'header':

              remove();

              break;

          }

          break;

      }

      this.control.button.accent.inputButtonStyle.update(['dot', 'link']);
      this.control.button.edit.style.update(['line', 'link']);
      this.control.button.setting.style.update(['link']);
      this.control.button.add.buttonStyle.update(['link']);

    } else {

      remove();

      this.control.button.accent.inputButtonStyle.update(['dot', 'line']);
      this.control.button.edit.style.update(['line']);
      this.control.button.setting.style.update(['line']);
      this.control.button.add.buttonStyle.update(['line']);

    }

  };

  this.update.edit = () => {

    if (state.get.current().header.edit || state.get.current().group.edit || state.get.current().bookmark.edit) {

      this.control.button.edit.active();

    } else {

      this.control.button.edit.deactive();

    }

  };

  this.update.location = () => {

    applyCSSClass('toolbar.location');
    applyCSSState('toolbar.newLine');

  };

  this.update.position = () => {

    switch (state.get.current().toolbar.position) {

      case 'top-right':
      case 'bottom-right':
        this.element.group.classList.remove('form-group-reverse');
        break;

      case 'top-left':
      case 'bottom-left':
        this.element.group.classList.add('form-group-reverse');
        break;

    }

    applyCSSVar('toolbar.size');
    applyCSSClass('toolbar.position');

  };

  this.update.control = () => {
    this.assemble();
  };

  this.update.accent = () => {

    this.control.button.accent.update();

  };

  this.assemble();

  this.update.style();

  this.update.location();

  this.update.position();

  this.update.control();

};
