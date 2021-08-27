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
import { themeSetting } from '../menuContent/themeSetting';

import { Button } from '../button';

import { node } from '../../utility/node';
import { convertColor } from '../../utility/convertColor';
import { isValidString } from '../../utility/isValidString';
import { complexNode } from '../../utility/complexNode';
import { applyCSSVar } from '../../utility/applyCSSVar';
import { applyCSSClass } from '../../utility/applyCSSClass';
import { applyCSSState } from '../../utility/applyCSSState';

import './index.css';

export const PresetThemeTile = function({
  presetThemeData = false
} = {}) {

  this.element = {
    tile: node('div|class:theme-preset-tile'),
    front: node('div|class:theme-preset-tile-front'),
    back: node('div|class:theme-preset-tile-back'),
    preview: node('div|class:theme-preset-preview'),
    name: node('span|class:theme-preset-name'),
    preset: new Button({
      text: false,
      classList: ['theme-preset-button'],
      style: ['ring'],
      block: true,
      func: () => {

        const newPresetData = JSON.parse(JSON.stringify(presetThemeData));

        state.get.current().theme.color.range.primary.h = newPresetData.color.range.primary.h;

        state.get.current().theme.color.range.primary.s = newPresetData.color.range.primary.s;

        state.get.current().theme.color.contrast = newPresetData.color.contrast;

        state.get.current().theme.accent.hsl = newPresetData.accent.hsl;

        state.get.current().theme.accent.rgb = newPresetData.accent.rgb;

        state.get.current().theme.font = newPresetData.font;

        state.get.current().theme.background = newPresetData.background;

        state.get.current().theme.radius = newPresetData.radius;

        state.get.current().theme.shadow = newPresetData.shadow;

        state.get.current().theme.style = newPresetData.style;

        state.get.current().theme.shade = newPresetData.shade;

        state.get.current().theme.opacity = newPresetData.opacity;

        state.get.current().theme.layout = newPresetData.layout;

        state.get.current().theme.header = newPresetData.header;

        state.get.current().theme.bookmark = newPresetData.bookmark;

        state.get.current().theme.group = newPresetData.group;

        state.get.current().theme.toolbar = newPresetData.toolbar;

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

        themeSetting.control.background.image.vignette.opacity.update();

        themeSetting.control.background.image.vignette.start.update();

        themeSetting.control.background.image.vignette.end.update();

        themeSetting.control.background.video.url.update();

        themeSetting.control.background.video.blur.update();

        themeSetting.control.background.video.grayscale.update();

        themeSetting.control.background.video.scale.update();

        themeSetting.control.background.video.accent.update();

        themeSetting.control.background.video.opacity.update();

        themeSetting.control.background.video.vignette.opacity.update();

        themeSetting.control.background.video.vignette.start.update();

        themeSetting.control.background.video.vignette.end.update();

        themeSetting.control.opacity.general.update();

        themeSetting.control.opacity.toolbar.update();

        themeSetting.control.opacity.bookmark.update();

        themeSetting.control.opacity.search.update();

        themeSetting.control.opacity.openAll.update();

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
          'theme.group.openAll.opacity'
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

  this.previewTile = () => {

    const shadeSteps = 4;

    let hsl = presetThemeData.color.range.primary;

    hsl.l = Math.round(presetThemeData.color.contrast.start + ((presetThemeData.color.contrast.end - presetThemeData.color.contrast.start) / 2));

    let shadeStep = Math.round((presetThemeData.color.contrast.end - presetThemeData.color.contrast.start) / 10);

    for (let i = 1; i <= shadeSteps; i++) {

      let darken = () => { hsl.l = Math.round(hsl.l - shadeStep); };

      let lighten = () => { hsl.l = Math.round(hsl.l + shadeStep); };

      if (presetThemeData.style == 'dark') {

        darken();

      } else if (presetThemeData.style == 'light') {

        lighten();

      } else if (presetThemeData.style == 'system') {

        if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
          darken();
        } else if (window.matchMedia('(prefers-color-scheme:light)').matches) {
          lighten();
        };

      };

      if (hsl.l < 0) { hsl.l = 0; };

      if (hsl.l > 100) { hsl.l = 100; };

      let rgb = convertColor.hsl.rgb(hsl);

      this.element.tile.style.setProperty('--theme-preset-background-0' + i + '-rgb-r', rgb.r);
      this.element.tile.style.setProperty('--theme-preset-background-0' + i + '-rgb-g', rgb.g);
      this.element.tile.style.setProperty('--theme-preset-background-0' + i + '-rgb-b', rgb.b);
      this.element.tile.style.setProperty('--theme-preset-background-0' + i + '-hsl-h', hsl.h);
      this.element.tile.style.setProperty('--theme-preset-background-0' + i + '-hsl-s', hsl.s);
      this.element.tile.style.setProperty('--theme-preset-background-0' + i + '-hsl-l', hsl.l);

      this.element.tile.style.setProperty('--theme-preset-background-0' + i, 'var(--theme-preset-background-0' + i + '-rgb-r), var(--theme-preset-background-0' + i + '-rgb-g), var(--theme-preset-background-0' + i + '-rgb-b)');

      this.element.preview.appendChild(node('span|class:theme-preset-background-0' + i));

    };

    this.element.tile.style.setProperty('--theme-preset-text', '0, 0%, calc(((((var(--theme-preset-background-01-rgb-r) * var(--theme-t-r)) + (var(--theme-preset-background-01-rgb-g) * var(--theme-t-g)) + (var(--theme-preset-background-01-rgb-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%)');

    this.element.tile.style.setProperty('--theme-preset-accent-rgb-r', presetThemeData.accent.rgb.r);
    this.element.tile.style.setProperty('--theme-preset-accent-rgb-g', presetThemeData.accent.rgb.g);
    this.element.tile.style.setProperty('--theme-preset-accent-rgb-b', presetThemeData.accent.rgb.b);

    this.element.tile.style.setProperty('--theme-preset-accent', 'var(--theme-preset-accent-rgb-r), var(--theme-preset-accent-rgb-g), var(--theme-preset-accent-rgb-b)');

    this.element.preview.appendChild(node('span|class:theme-preset-accent'));

    return node('div|class:theme-preset-tile')

  };

  this.assemble = () => {

    this.previewTile();

    this.element.preset.button.appendChild(this.element.preview);

    if (isValidString(presetThemeData.name)) {

      this.element.name.innerHTML = presetThemeData.name;

      this.element.preset.button.appendChild(this.element.name);

    };

    this.element.front.appendChild(this.element.preset.button);

    this.element.tile.appendChild(this.element.back);

    this.element.tile.appendChild(this.element.front);

  };

  this.tile = () => {

    return this.element.tile;

  };

  this.assemble();

};
