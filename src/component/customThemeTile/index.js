import { state } from '../state';
import { data } from '../data';
import { theme } from '../theme';
import { menu } from '../menu';
import { toolbar } from '../toolbar';
import { layout } from '../layout';
import { header } from '../header';
import { bookmark } from '../bookmark';
import { group } from '../group';
import { groupAndBookmark } from '../groupAndBookmark';
import { customTheme } from '../customTheme';
import { themeSetting } from '../menuContent/themeSetting';

import { Button } from '../button';
import { Modal } from '../modal';
import { CustomThemeForm } from '../customThemeForm';
import { StagedCustomTheme } from '../stagedCustomTheme';

import { node } from '../../utility/node';
import { convertColor } from '../../utility/convertColor';
import { isValidString } from '../../utility/isValidString';
import { complexNode } from '../../utility/complexNode';
import { applyCSSVar } from '../../utility/applyCSSVar';
import { applyCSSClass } from '../../utility/applyCSSClass';
import { applyCSSState } from '../../utility/applyCSSState';

import './index.css';

export const CustomThemeTile = function({
  customThemeData = false
} = {}) {

  this.element = {
    tile: node('div|class:theme-custom-tile'),
    front: node('div|class:theme-custom-tile-front'),
    back: node('div|class:theme-custom-tile-back'),
    control: node('div|class:theme-custom-control'),
    preview: node('div|class:theme-custom-preview'),
    name: node('span|class:theme-custom-name'),
    custom: new Button({
      text: false,
      classList: ['theme-custom-button'],
      style: ['ring'],
      block: true,
      func: () => {

        const newCustomThemeData = JSON.parse(JSON.stringify(customThemeData));

        state.get.current().theme.color.range.primary.h = newCustomThemeData.theme.color.range.primary.h;

        state.get.current().theme.color.range.primary.s = newCustomThemeData.theme.color.range.primary.s;

        state.get.current().theme.color.contrast = newCustomThemeData.theme.color.contrast;

        state.get.current().theme.accent.hsl = newCustomThemeData.theme.accent.hsl;

        state.get.current().theme.accent.rgb = newCustomThemeData.theme.accent.rgb;

        state.get.current().theme.font = newCustomThemeData.theme.font;

        state.get.current().theme.background = newCustomThemeData.theme.background;

        state.get.current().theme.radius = newCustomThemeData.theme.radius;

        state.get.current().theme.shadow = newCustomThemeData.theme.shadow;

        state.get.current().theme.style = newCustomThemeData.theme.style;

        state.get.current().theme.shade = newCustomThemeData.theme.shade;

        state.get.current().theme.opacity = newCustomThemeData.theme.opacity;

        state.get.current().theme.layout = newCustomThemeData.theme.layout;

        state.get.current().theme.header = newCustomThemeData.theme.header;

        state.get.current().theme.bookmark = newCustomThemeData.theme.bookmark;

        state.get.current().theme.group = newCustomThemeData.theme.group;

        state.get.current().theme.toolbar = newCustomThemeData.theme.toolbar;

        theme.color.render();

        theme.font.display.load();

        theme.font.ui.load();

        theme.background.image.render();

        theme.background.video.clear();

        theme.background.video.render();

        themeSetting.control.style.update();

        themeSetting.control.color.range.primary.h.update();

        themeSetting.control.color.range.primary.s.update();

        themeSetting.control.color.contrast.update();

        themeSetting.control.accent.color.update();

        themeSetting.control.font.display.name.update();

        themeSetting.control.font.display.weight.update();

        themeSetting.control.font.display.style.update();

        themeSetting.control.font.ui.name.update();

        themeSetting.control.font.ui.weight.update();

        themeSetting.control.font.ui.style.update();

        themeSetting.control.radius.update();

        themeSetting.control.shadow.update();

        themeSetting.control.shade.opacity.update();

        themeSetting.control.shade.blur.update();

        themeSetting.control.opacity.general.update();

        themeSetting.control.layout.color.by.update();

        themeSetting.control.layout.color.color.update();

        themeSetting.control.layout.color.blur.update();

        themeSetting.control.layout.color.opacity.update();

        themeSetting.control.layout.color.collapse.update();

        themeSetting.control.layout.divider.size.update();

        themeSetting.control.header.color.by.update();

        themeSetting.control.header.color.color.update();

        themeSetting.control.header.color.opacity.update();

        themeSetting.control.header.color.collapse.update();

        themeSetting.control.bookmark.color.by.update();

        themeSetting.control.bookmark.color.color.update();

        themeSetting.control.bookmark.color.opacity.update();

        themeSetting.control.bookmark.color.collapse.update();

        themeSetting.control.bookmark.item.border.update();

        themeSetting.control.background.type.update();

        themeSetting.control.background.typeCollapse.update();

        themeSetting.control.background.color.update();

        themeSetting.control.background.gradient.angle.update();

        themeSetting.control.background.gradient.start.update();

        themeSetting.control.background.gradient.end.update();

        themeSetting.control.background.image.url.update();

        themeSetting.control.background.image.blur.update();

        themeSetting.control.background.image.grayscale.update();

        themeSetting.control.background.image.scale.update();

        themeSetting.control.background.image.accent.update();

        themeSetting.control.background.image.opacity.update();

        themeSetting.control.background.video.url.update();

        themeSetting.control.background.video.blur.update();

        themeSetting.control.background.video.grayscale.update();

        themeSetting.control.background.video.scale.update();

        themeSetting.control.background.video.accent.update();

        themeSetting.control.background.video.opacity.update();

        themeSetting.control.opacity.general.update();

        themeSetting.control.opacity.toolbar.update();

        themeSetting.control.opacity.bookmark.update();

        themeSetting.control.opacity.search.update();

        themeSetting.control.opacity.group.toolbar.update();

        themeSetting.disable();

        applyCSSVar([
          'theme.accent.rgb.r',
          'theme.accent.rgb.g',
          'theme.accent.rgb.b',
          'theme.accent.hsl.h',
          'theme.accent.hsl.s',
          'theme.accent.hsl.l',
          'theme.font.display.weight',
          'theme.font.display.style',
          'theme.font.ui.weight',
          'theme.font.ui.style',
          'theme.opacity.general',
          'theme.background.color.rgb.r',
          'theme.background.color.rgb.g',
          'theme.background.color.rgb.b',
          'theme.background.color.hsl.h',
          'theme.background.color.hsl.s',
          'theme.background.color.hsl.l',
          'theme.background.image.blur',
          'theme.background.image.grayscale',
          'theme.background.image.scale',
          'theme.background.image.accent',
          'theme.background.image.opacity',
          'theme.background.image.vignette.opacity',
          'theme.background.image.vignette.start',
          'theme.background.image.vignette.end',
          'theme.background.video.blur',
          'theme.background.video.grayscale',
          'theme.background.video.scale',
          'theme.background.video.accent',
          'theme.background.video.opacity',
          'theme.background.video.vignette.opacity',
          'theme.background.video.vignette.start',
          'theme.background.video.vignette.end',
          'theme.background.gradient.angle',
          'theme.background.gradient.start.rgb.r',
          'theme.background.gradient.start.rgb.g',
          'theme.background.gradient.start.rgb.b',
          'theme.background.gradient.start.hsl.h',
          'theme.background.gradient.start.hsl.s',
          'theme.background.gradient.start.hsl.l',
          'theme.background.gradient.end.rgb.r',
          'theme.background.gradient.end.rgb.g',
          'theme.background.gradient.end.rgb.b',
          'theme.background.gradient.end.hsl.h',
          'theme.background.gradient.end.hsl.s',
          'theme.background.gradient.end.hsl.l',
          'theme.radius',
          'theme.shadow',
          'theme.shade.opacity',
          'theme.shade.blur',
          'theme.layout.color.rgb.r',
          'theme.layout.color.rgb.g',
          'theme.layout.color.rgb.b',
          'theme.layout.color.hsl.h',
          'theme.layout.color.hsl.s',
          'theme.layout.color.hsl.l',
          'theme.layout.color.opacity',
          'theme.layout.color.blur',
          'theme.layout.divider.size',
          'theme.header.color.rgb.r',
          'theme.header.color.rgb.g',
          'theme.header.color.rgb.b',
          'theme.header.color.hsl.h',
          'theme.header.color.hsl.s',
          'theme.header.color.hsl.l',
          'theme.header.color.opacity',
          'theme.header.search.opacity',
          'theme.bookmark.color.rgb.r',
          'theme.bookmark.color.rgb.g',
          'theme.bookmark.color.rgb.b',
          'theme.bookmark.color.hsl.h',
          'theme.bookmark.color.hsl.s',
          'theme.bookmark.color.hsl.l',
          'theme.bookmark.color.opacity',
          'theme.bookmark.item.opacity',
          'theme.toolbar.opacity',
          'theme.group.toolbar.opacity'
        ]);

        applyCSSClass([
          'theme.style',
          'theme.background.type',
          'theme.layout.color.by',
          'theme.header.color.by',
          'theme.bookmark.color.by'
        ]);

        applyCSSState([
          'theme.layout.divider.size'
        ]);

        layout.area.render();

        bookmark.item.mod.applyVar('border', state.get.current().theme.bookmark.item.border);

        bookmark.item.mod.applyVar('color.opacity', state.get.current().theme.bookmark.item.opacity);

        groupAndBookmark.render();

        toolbar.current.update.accent();

        toolbar.current.update.style();

        header.element.search.update.style();

        if (group.area.current.length > 0) {

          group.area.current[0].update.style();

        };

        data.save();

      }
    })
  };

  this.control = {};

  this.control.button = {
    edit: new Button({
      text: 'Edit this saved theme',
      srOnly: true,
      iconName: 'edit',
      style: ['link'],
      size: 'small',
      title: 'Edit this saved theme',
      classList: ['theme-custom-control-button', 'theme-custom-control-edit'],
      func: () => {

        menu.close();

        let newCustomThemeData = new StagedCustomTheme(JSON.parse(JSON.stringify(customThemeData.theme)));

        newCustomThemeData.position = JSON.parse(JSON.stringify(customThemeData.position));

        const bookmarkForm = new CustomThemeForm({ customThemeData: newCustomThemeData });

        const editModal = new Modal({
          heading: isValidString(customThemeData.theme.name) ? 'Edit ' + customThemeData.theme.name : 'Edit unnamed custom theme',
          content: bookmarkForm.form(),
          successText: 'Save',
          width: 'small',
          successAction: () => {

            customTheme.item.mod.edit(newCustomThemeData);

            data.save();

          }
        });

        editModal.open();

      }
    }),
    remove: new Button({
      text: 'Remove this saved theme',
      srOnly: true,
      iconName: 'cross',
      style: ['link'],
      size: 'small',
      title: 'Remove this saved theme',
      classList: ['theme-custom-control-button', 'theme-custom-control-remove'],
      func: () => {

        menu.close();

        const removeModal = new Modal({
          heading: isValidString(customThemeData.theme.name) ? 'Remove ' + customThemeData.theme.name : 'Remove unnamed custom theme',
          content: 'Are you sure you want to remove this saved theme? This can not be undone.',
          successText: 'Remove',
          width: 'small',
          successAction: () => {
            customTheme.item.mod.remove(customThemeData);
            data.save();
          }
        });

        removeModal.open();

      }
    })
  };

  this.control.disable = () => {
    for (var key in this.control.button) {
      this.control.button[key].disable();
    };
  };

  this.control.enable = () => {
    for (var key in this.control.button) {
      this.control.button[key].enable();
    };
  };

  this.previewTile = () => {

    const shadeSteps = 4;

    let hsl = customThemeData.theme.color.range.primary;

    hsl.l = Math.round(customThemeData.theme.color.contrast.start + ((customThemeData.theme.color.contrast.end - customThemeData.theme.color.contrast.start) / 2));

    let shadeStep = Math.round((customThemeData.theme.color.contrast.end - customThemeData.theme.color.contrast.start) / 10);

    for (let i = 1; i <= shadeSteps; i++) {

      let darken = () => { hsl.l = Math.round(hsl.l - shadeStep); };

      let lighten = () => { hsl.l = Math.round(hsl.l + shadeStep); };

      if (customThemeData.theme.style == 'dark') {

        darken();

      } else if (customThemeData.theme.style == 'light') {

        lighten();

      } else if (customThemeData.theme.style == 'system') {

        if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
          darken();
        } else if (window.matchMedia('(prefers-color-scheme:light)').matches) {
          lighten();
        };

      };

      if (hsl.l < 0) { hsl.l = 0; };

      if (hsl.l > 100) { hsl.l = 100; };

      let rgb = convertColor.hsl.rgb(hsl);

      this.element.tile.style.setProperty('--theme-custom-background-0' + i + '-rgb-r', rgb.r);
      this.element.tile.style.setProperty('--theme-custom-background-0' + i + '-rgb-g', rgb.g);
      this.element.tile.style.setProperty('--theme-custom-background-0' + i + '-rgb-b', rgb.b);
      this.element.tile.style.setProperty('--theme-custom-background-0' + i + '-hsl-h', hsl.h);
      this.element.tile.style.setProperty('--theme-custom-background-0' + i + '-hsl-s', hsl.s);
      this.element.tile.style.setProperty('--theme-custom-background-0' + i + '-hsl-l', hsl.l);

      this.element.tile.style.setProperty('--theme-custom-background-0' + i, 'var(--theme-custom-background-0' + i + '-rgb-r), var(--theme-custom-background-0' + i + '-rgb-g), var(--theme-custom-background-0' + i + '-rgb-b)');

      this.element.preview.appendChild(node('span|class:theme-custom-background-0' + i));

    };

    this.element.tile.style.setProperty('--theme-custom-text', '0, 0%, calc(((((var(--theme-custom-background-01-rgb-r) * var(--theme-t-r)) + (var(--theme-custom-background-01-rgb-g) * var(--theme-t-g)) + (var(--theme-custom-background-01-rgb-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%)');

    this.element.tile.style.setProperty('--theme-custom-accent-rgb-r', customThemeData.theme.accent.rgb.r);
    this.element.tile.style.setProperty('--theme-custom-accent-rgb-g', customThemeData.theme.accent.rgb.g);
    this.element.tile.style.setProperty('--theme-custom-accent-rgb-b', customThemeData.theme.accent.rgb.b);

    this.element.tile.style.setProperty('--theme-custom-accent', 'var(--theme-custom-accent-rgb-r), var(--theme-custom-accent-rgb-g), var(--theme-custom-accent-rgb-b)');

    this.element.preview.appendChild(node('span|class:theme-custom-accent'));

    return node('div|class:theme-custom-tile')

  };

  this.assemble = () => {

    this.previewTile();

    this.element.custom.button.appendChild(this.element.preview);

    if (isValidString(customThemeData.theme.name)) {

      this.element.name.innerHTML = customThemeData.theme.name;

      this.element.custom.button.appendChild(this.element.name);

    };

    this.element.front.appendChild(this.element.custom.button);

    this.element.back.appendChild(this.element.control);

    this.element.control.appendChild(this.control.button.edit.button);

    this.element.control.appendChild(this.control.button.remove.button);

    this.element.tile.appendChild(this.element.back);

    this.element.tile.appendChild(this.element.front);

    if (state.get.current().theme.custom.edit) {
      this.control.enable();
    } else {
      this.control.disable();
    };

  };

  this.tile = () => {

    return this.element.tile;

  };

  this.assemble();

};
