import { message } from '../../message';

import { state } from '../../state';
import { data } from '../../data';
import { header } from '../../header';
import { bookmark } from '../../bookmark';
import { group } from '../../group';
import { theme } from '../../theme';
import { menu } from '../../menu';
import { layout } from '../../layout';
import { toolbar } from '../../toolbar';
import { themePreset } from '../../themePreset';
import { accentPreset } from '../../accentPreset';
import { customTheme } from '../../customTheme';
import { groupAndBookmark } from '../../groupAndBookmark';

import { supportSetting } from '../../menuContent/supportSetting';

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';
import { PresetThemeTile } from '../../presetThemeTile';
import { AccentPresetButton } from '../../accentPresetButton';
import { Alert } from '../../alert';
import { Link } from '../../link';

import { Control_helperText } from '../../control/helperText';
import { Control_radio } from '../../control/radio';
import { Control_checkbox } from '../../control/checkbox';
import { Control_slider } from '../../control/slider';
import { Control_sliderSlim } from '../../control/sliderSlim';
import { Control_sliderDouble } from '../../control/sliderDouble';
import { Control_colorMixer } from '../../control/colorMixer';
import { Control_textReset } from '../../control/textReset';
import { Control_textarea } from '../../control/textarea';

import { node } from '../../../utility/node';
import { complexNode } from '../../../utility/complexNode';
import { applyCSSVar } from '../../../utility/applyCSSVar';
import { applyCSSClass } from '../../../utility/applyCSSClass';
import { applyCSSState } from '../../../utility/applyCSSState';

const themeSetting = {};

themeSetting.control = {
  preset: {},
  saved: {},
  style: {},
  colour: {},
  accent: {},
  font: {},
  radius: {},
  shadow: {},
  shade: {},
  opacity: {},
  layout: {},
  header: {},
  bookmark: {},
  background: {}
};

themeSetting.disable = () => {

  if (state.get.current().theme.accent.random.active) {
    themeSetting.control.accent.random.style.enable();
    themeSetting.control.accent.randomiseNow.enable();
  } else {
    themeSetting.control.accent.random.style.disable();
    themeSetting.control.accent.randomiseNow.disable();
  }

  if (state.get.current().theme.accent.cycle.active) {
    themeSetting.control.accent.cycle.speed.enable();
    themeSetting.control.accent.cycle.step.enable();
    themeSetting.control.accent.cycle.stepHelper.enable();
  } else {
    themeSetting.control.accent.cycle.speed.disable();
    themeSetting.control.accent.cycle.step.disable();
    themeSetting.control.accent.cycle.stepHelper.disable();
  }

  switch (state.get.current().theme.header.by) {

    case 'theme':
      themeSetting.control.header.color.color.disable();
      themeSetting.control.header.color.opacity.disable();
      break;

    case 'custom':
      themeSetting.control.header.color.color.enable();
      themeSetting.control.header.color.opacity.enable();
      break;

  }

  switch (state.get.current().theme.background.type) {

    case 'theme':
    case 'accent':
      themeSetting.control.background.color.disable();
      themeSetting.control.background.gradient.angle.disable();
      themeSetting.control.background.gradient.start.disable();
      themeSetting.control.background.gradient.end.disable();
      themeSetting.control.background.image.url.disable();
      themeSetting.control.background.image.urlHelper.disable();
      themeSetting.control.background.image.blur.disable();
      themeSetting.control.background.image.grayscale.disable();
      themeSetting.control.background.image.scale.disable();
      themeSetting.control.background.image.accent.disable();
      themeSetting.control.background.image.opacity.disable();
      themeSetting.control.background.image.vignette.opacity.disable();
      themeSetting.control.background.image.vignette.range.disable();
      themeSetting.control.background.video.url.disable();
      themeSetting.control.background.video.urlHelper.disable();
      themeSetting.control.background.video.blur.disable();
      themeSetting.control.background.video.grayscale.disable();
      themeSetting.control.background.video.scale.disable();
      themeSetting.control.background.video.accent.disable();
      themeSetting.control.background.video.opacity.disable();
      themeSetting.control.background.video.vignette.opacity.disable();
      themeSetting.control.background.video.vignette.range.disable();
      break;

    case 'color':
      themeSetting.control.background.color.enable();
      themeSetting.control.background.gradient.angle.disable();
      themeSetting.control.background.gradient.start.disable();
      themeSetting.control.background.gradient.end.disable();
      themeSetting.control.background.image.url.disable();
      themeSetting.control.background.image.urlHelper.disable();
      themeSetting.control.background.image.blur.disable();
      themeSetting.control.background.image.grayscale.disable();
      themeSetting.control.background.image.scale.disable();
      themeSetting.control.background.image.accent.disable();
      themeSetting.control.background.image.opacity.disable();
      themeSetting.control.background.image.vignette.opacity.disable();
      themeSetting.control.background.image.vignette.range.disable();
      themeSetting.control.background.video.url.disable();
      themeSetting.control.background.video.urlHelper.disable();
      themeSetting.control.background.video.blur.disable();
      themeSetting.control.background.video.grayscale.disable();
      themeSetting.control.background.video.scale.disable();
      themeSetting.control.background.video.accent.disable();
      themeSetting.control.background.video.opacity.disable();
      themeSetting.control.background.video.vignette.opacity.disable();
      themeSetting.control.background.video.vignette.range.disable();
      break;

    case 'gradient':
      themeSetting.control.background.color.disable();
      themeSetting.control.background.gradient.angle.enable();
      themeSetting.control.background.gradient.start.enable();
      themeSetting.control.background.gradient.end.enable();
      themeSetting.control.background.image.url.disable();
      themeSetting.control.background.image.urlHelper.disable();
      themeSetting.control.background.image.blur.disable();
      themeSetting.control.background.image.grayscale.disable();
      themeSetting.control.background.image.scale.disable();
      themeSetting.control.background.image.accent.disable();
      themeSetting.control.background.image.opacity.disable();
      themeSetting.control.background.image.vignette.opacity.disable();
      themeSetting.control.background.image.vignette.range.disable();
      themeSetting.control.background.video.url.disable();
      themeSetting.control.background.video.urlHelper.disable();
      themeSetting.control.background.video.blur.disable();
      themeSetting.control.background.video.grayscale.disable();
      themeSetting.control.background.video.scale.disable();
      themeSetting.control.background.video.accent.disable();
      themeSetting.control.background.video.opacity.disable();
      themeSetting.control.background.video.vignette.opacity.disable();
      themeSetting.control.background.video.vignette.range.disable();
      break;

    case 'image':
      themeSetting.control.background.color.disable();
      themeSetting.control.background.gradient.angle.disable();
      themeSetting.control.background.gradient.start.disable();
      themeSetting.control.background.gradient.end.disable();
      themeSetting.control.background.image.url.enable();
      themeSetting.control.background.image.urlHelper.enable();
      themeSetting.control.background.image.blur.enable();
      themeSetting.control.background.image.grayscale.enable();
      themeSetting.control.background.image.scale.enable();
      themeSetting.control.background.image.accent.enable();
      themeSetting.control.background.image.opacity.enable();
      themeSetting.control.background.image.vignette.opacity.enable();
      themeSetting.control.background.image.vignette.range.enable();
      themeSetting.control.background.video.url.disable();
      themeSetting.control.background.video.urlHelper.disable();
      themeSetting.control.background.video.blur.disable();
      themeSetting.control.background.video.grayscale.disable();
      themeSetting.control.background.video.scale.disable();
      themeSetting.control.background.video.accent.disable();
      themeSetting.control.background.video.opacity.disable();
      themeSetting.control.background.video.vignette.opacity.disable();
      themeSetting.control.background.video.vignette.range.disable();
      break;

    case 'video':
      themeSetting.control.background.color.disable();
      themeSetting.control.background.gradient.angle.disable();
      themeSetting.control.background.gradient.start.disable();
      themeSetting.control.background.gradient.end.disable();
      themeSetting.control.background.image.url.disable();
      themeSetting.control.background.image.urlHelper.disable();
      themeSetting.control.background.image.blur.disable();
      themeSetting.control.background.image.grayscale.disable();
      themeSetting.control.background.image.scale.disable();
      themeSetting.control.background.image.accent.disable();
      themeSetting.control.background.image.opacity.disable();
      themeSetting.control.background.image.vignette.opacity.disable();
      themeSetting.control.background.image.vignette.range.disable();
      themeSetting.control.background.video.url.enable();
      themeSetting.control.background.video.urlHelper.enable();
      themeSetting.control.background.video.blur.enable();
      themeSetting.control.background.video.grayscale.enable();
      themeSetting.control.background.video.scale.enable();
      themeSetting.control.background.video.accent.enable();
      themeSetting.control.background.video.opacity.enable();
      themeSetting.control.background.video.vignette.opacity.enable();
      themeSetting.control.background.video.vignette.range.enable();
      break;

  }

  switch (state.get.current().theme.layout.color.by) {

    case 'theme':
      themeSetting.control.layout.color.color.disable();
      themeSetting.control.layout.color.opacity.disable();
      themeSetting.control.layout.color.blur.disable();
      themeSetting.control.layout.color.blurHelper.disable();
      break;

    case 'custom':
      themeSetting.control.layout.color.color.enable();
      themeSetting.control.layout.color.opacity.enable();
      themeSetting.control.layout.color.blur.enable();
      themeSetting.control.layout.color.blurHelper.enable();
      break;

  }

  switch (state.get.current().theme.header.color.by) {

    case 'theme':
      themeSetting.control.header.color.color.disable();
      themeSetting.control.header.color.opacity.disable();
      break;

    case 'custom':
      themeSetting.control.header.color.color.enable();
      themeSetting.control.header.color.opacity.enable();
      break;

  }

  switch (state.get.current().theme.bookmark.color.by) {

    case 'theme':
      themeSetting.control.bookmark.color.color.disable();
      themeSetting.control.bookmark.color.opacity.disable();
      break;

    case 'custom':
      themeSetting.control.bookmark.color.color.enable();
      themeSetting.control.bookmark.color.opacity.enable();
      break;

  }

};

themeSetting.preset = (parent) => {

  themeSetting.control.preset.presetHelper = new Control_helperText({
    text: [message.get('menuContentThemePresetHelperPara1')]
  });

  const preset = () => {

    const themePresetElement = node('div|class:theme-preset');

    themePreset.get().forEach((item) => {

      const presetTheme = new PresetThemeTile({
        presetThemeData: item
      });

      themePresetElement.appendChild(presetTheme.tile());

    });

    return themePresetElement;

  };

  parent.appendChild(
    node('div', [
      preset(),
      themeSetting.control.preset.presetHelper.wrap()
    ])
  );

};

themeSetting.saved = (parent) => {

  customTheme.edit.close();

  themeSetting.control.saved = {
    savedElement: node('div|class:theme-custom'),
    customHelper: new Control_helperText({
      text: [message.get('menuContentThemeSavedHelperPara1')]
    }),
    saveButton: new Button({
      text: message.get('menuContentThemeSavedSave'),
      style: ['line'],
      func: () => {
        menu.close();
        customTheme.add.render();
      }
    }),
    edit: new Button({
      text: message.get('menuContentThemeSavedEdit'),
      iconName: 'edit',
      style: ['line'],
      srOnly: true,
      func: () => {
        customTheme.edit.toggle();
        data.save();
      }
    })
  };

  if (state.get.current().theme.custom.all.length > 0) {

    parent.appendChild(
      node('div', [
        customTheme.item.render(themeSetting.control.saved.savedElement),
        node('hr'),
        form.wrap({
          children: [
            form.inline({
              gap: 'small',
              wrap: true,
              equalGap: true,
              children: [
                themeSetting.control.saved.saveButton.wrap(),
                themeSetting.control.saved.edit.wrap()
              ]
            })
          ]
        }),
        themeSetting.control.saved.customHelper.wrap()
      ])
    );

  } else {

    parent.appendChild(
      node('div', [
        form.wrap({
          children: [
            form.inline({
              gap: 'small',
              wrap: true,
              equalGap: true,
              children: [
                themeSetting.control.saved.saveButton.wrap()
              ]
            })
          ]
        }),
        themeSetting.control.saved.customHelper.wrap()
      ])
    );

  }

};

themeSetting.style = (parent) => {

  themeSetting.control.style = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'theme-style-dark', labelText: message.get('menuContentThemeStyleDarkLabel'), description: false, value: 'dark' },
      { id: 'theme-style-light', labelText: message.get('menuContentThemeStyleLightLabel'), description: false, value: 'light' },
      { id: 'theme-style-system', labelText: message.get('menuContentThemeStyleAutomaticLabel'), description: message.get('menuContentThemeStyleAutomaticDescription'), value: 'system' }
    ],
    groupName: 'theme-style',
    path: 'theme.style',
    action: () => {
      theme.style.initial();
      applyCSSClass('theme.style');
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      themeSetting.control.style.wrap()
    ])
  );

};

themeSetting.color = (parent) => {

  const shade = () => {

    const formSticky = form.sticky();

    const formGroup = form.group({
      block: true,
      border: true
    });

    const shadeCount = state.get.current().theme.color.shades;

    for (var i = 1; i <= shadeCount; i++) {
      let count = i;

      if (count < 10) {
        count = '0' + count;
      }

      formGroup.appendChild(
        node('div|class:form-group-text form-group-text-borderless', [
          node('div|class:theme-color-box theme-color-shade-' + count + '')
        ])
      );
    }

    formSticky.appendChild(formGroup);

    return formSticky;
  };

  themeSetting.control.color = {
    range: {
      primary: {
        h: new Control_slider({
          object: state.get.current(),
          path: 'theme.color.range.primary.h',
          id: 'theme-color-range-primary-h',
          labelText: message.get('menuContentThemeColorRangePrimaryH'),
          value: state.get.current().theme.color.range.primary.h,
          defaultValue: state.get.default().theme.color.range.primary.h,
          min: state.get.minMax().theme.color.range.primary.h.min,
          max: state.get.minMax().theme.color.range.primary.h.max,
          style: 'hue',
          action: () => {
            theme.color.render();
            data.save();
          }
        }),
        s: new Control_slider({
          object: state.get.current(),
          path: 'theme.color.range.primary.s',
          id: 'theme-color-range-primary-s',
          labelText: message.get('menuContentThemeColorRangePrimaryS'),
          value: state.get.current().theme.color.range.primary.s,
          defaultValue: state.get.default().theme.color.range.primary.s,
          min: state.get.minMax().theme.color.range.primary.s.min,
          max: state.get.minMax().theme.color.range.primary.s.max,
          style: 'saturation',
          action: () => {
            theme.color.render();
            data.save();
          }
        })
      }
    },
    contrast: new Control_sliderDouble({
      object: state.get.current(),
      labelText: message.get('menuContentThemeColorContrastLabel'),
      style: 'contrast',
      left: {
        path: 'theme.color.contrast.start',
        id: 'theme-color-contrast-start',
        labelText: message.get('menuContentThemeColorContrastLeft'),
        value: state.get.current().theme.color.contrast.start,
        defaultValue: state.get.default().theme.color.contrast.start,
        min: state.get.minMax().theme.color.contrast.start.min,
        max: state.get.minMax().theme.color.contrast.start.max,
        action: () => {
          theme.color.render();
          data.save();
        }
      },
      right: {
        path: 'theme.color.contrast.end',
        id: 'theme-color-contrast-end',
        labelText: message.get('menuContentThemeColorContrastRight'),
        value: state.get.current().theme.color.contrast.end,
        defaultValue: state.get.default().theme.color.contrast.end,
        min: state.get.minMax().theme.color.contrast.end.min,
        max: state.get.minMax().theme.color.contrast.end.max,
        action: () => {
          theme.color.render();
          data.save();
        }
      }
    }),
    contrastHelper: new Control_helperText({
      text: [
        message.get('menuContentThemeColorContrastHelperPara1'),
        message.get('menuContentThemeColorContrastHelperPara2')
      ]
    }),
    shade: {
      helper: new Control_helperText({
        text: [
          message.get('menuContentThemeColorShadeHelperPara1'),
          message.get('menuContentThemeColorShadeHelperPara2'),
          message.get('menuContentThemeColorShadeHelperPara3')
        ]
      })
    }
  };

  parent.appendChild(
    node('div', [
      shade(),
      themeSetting.control.color.shade.helper.wrap(),
      node('hr'),
      themeSetting.control.color.range.primary.h.wrap(),
      themeSetting.control.color.range.primary.s.wrap(),
      themeSetting.control.color.contrast.wrap(),
      themeSetting.control.color.contrastHelper.wrap()
    ])
  );

};

themeSetting.accent = (parent) => {

  const preset = () => {

    const allPreset = accentPreset.get();

    const formWrap = form.wrap();

    const themeAccentPreset = node('div|class:theme-accent-preset');

    allPreset.forEach((item) => {

      const presetButton = new AccentPresetButton({
        presetData: item
      });

      themeAccentPreset.appendChild(presetButton.button());

    });

    formWrap.appendChild(themeAccentPreset);

    return formWrap;

  };

  themeSetting.control.accent.color = new Control_colorMixer({
    object: state.get.current(),
    path: 'theme.accent',
    id: 'theme-accent',
    labelText: message.get('menuContentThemeAccentColor'),
    defaultValue: state.get.default().theme.accent.rgb,
    minMaxObject: state.get.minMax(),
    randomColor: true,
    action: () => {
      applyCSSVar([
        'theme.accent.rgb.r',
        'theme.accent.rgb.g',
        'theme.accent.rgb.b',
        'theme.accent.hsl.h',
        'theme.accent.hsl.s',
        'theme.accent.hsl.l'
      ]);
      toolbar.current.update.style();
      toolbar.current.update.accent();
      data.save();
    }
  });

  themeSetting.control.accent.random = {};

  themeSetting.control.accent.random.active = new Control_checkbox({
    object: state.get.current(),
    path: 'theme.accent.random.active',
    id: 'theme-accent-random-active',
    labelText: message.get('menuContentThemeAccentRandomActive'),
    action: () => {
      themeSetting.disable();
      themeSetting.control.accent.random.collapse.update();
      data.save();
    }
  });

  themeSetting.control.accent.random.style = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'theme-accent-random-style-any', labelText: message.get('menuContentThemeAccentRandomStyleAny'), value: 'any' },
      { id: 'theme-accent-random-style-light', labelText: message.get('menuContentThemeAccentRandomStyleLight'), value: 'light' },
      { id: 'theme-accent-random-style-dark', labelText: message.get('menuContentThemeAccentRandomStyleDark'), value: 'dark' },
      { id: 'theme-accent-random-style-pastel', labelText: message.get('menuContentThemeAccentRandomStylePastel'), value: 'pastel' },
      { id: 'theme-accent-random-style-saturated', labelText: message.get('menuContentThemeAccentRandomStyleSaturated'), value: 'saturated' },
    ],
    groupName: 'theme-accent-random-style',
    path: 'theme.accent.random.style',
    action: () => {
      data.save();
    }
  });

  themeSetting.control.accent.randomiseNow = new Button({
    text: message.get('menuContentThemeAccentRandomRandomise'),
    style: ['line'],
    func: () => {
      theme.accent.random.render();
      applyCSSVar([
        'theme.accent.rgb.r',
        'theme.accent.rgb.g',
        'theme.accent.rgb.b',
        'theme.accent.hsl.h',
        'theme.accent.hsl.s',
        'theme.accent.hsl.l'
      ]);
      toolbar.current.update.style();
      toolbar.current.update.accent();
      themeSetting.control.accent.color.update();
      data.save();
    }
  });

  themeSetting.control.accent.random.area = node('div', [
    themeSetting.control.accent.random.style.inline(),
    themeSetting.control.accent.randomiseNow.wrap()
  ]);

  themeSetting.control.accent.random.collapse = new Collapse({
    type: 'checkbox',
    checkbox: themeSetting.control.accent.random.active,
    target: [{
      content: themeSetting.control.accent.random.area
    }]
  });

  themeSetting.control.accent.cycle = {};

  themeSetting.control.accent.cycle.alert = new Alert({
    iconName: 'info',
    children: [
      node(`p:${message.get('menuContentThemeAccentCycleAlert')}|class:small`)
    ]
  });

  themeSetting.control.accent.cycle.active = new Control_checkbox({
    object: state.get.current(),
    path: 'theme.accent.cycle.active',
    id: 'theme-accent-random-cycle-active',
    labelText: message.get('menuContentThemeAccentCycleActive'),
    action: () => {
      themeSetting.control.accent.cycle.collapse.update();
      theme.accent.cycle.bind();
      themeSetting.disable();
      applyCSSState('theme.accent.cycle.active');
      data.save();
    }
  });

  themeSetting.control.accent.cycle.speed = new Control_slider({
    object: state.get.current(),
    path: 'theme.accent.cycle.speed',
    id: 'theme-accent-random-cycle-speed',
    labelText: message.get('menuContentThemeAccentCycleSpeed'),
    value: state.get.current().theme.accent.cycle.speed,
    defaultValue: state.get.default().theme.accent.cycle.speed,
    min: state.get.minMax().theme.accent.cycle.speed.min,
    max: state.get.minMax().theme.accent.cycle.speed.max,
    action: () => {
      theme.accent.cycle.bind();
      data.save();
    }
  });

  themeSetting.control.accent.cycle.step = new Control_slider({
    object: state.get.current(),
    path: 'theme.accent.cycle.step',
    id: 'theme-accent-random-cycle-step',
    labelText: message.get('menuContentThemeAccentCycleStep'),
    value: state.get.current().theme.accent.cycle.step,
    defaultValue: state.get.default().theme.accent.cycle.step,
    min: state.get.minMax().theme.accent.cycle.step.min,
    max: state.get.minMax().theme.accent.cycle.step.max,
    action: () => {
      theme.accent.cycle.bind();
      data.save();
    }
  });

  themeSetting.control.accent.cycle.stepHelper = new Control_helperText({
    text: [message.get('menuContentThemeAccentCycleHelperPara1')]
  });

  themeSetting.control.accent.cycle.area = node('div', [
    themeSetting.control.accent.cycle.alert.wrap(),
    themeSetting.control.accent.cycle.speed.wrap(),
    themeSetting.control.accent.cycle.step.wrap(),
    themeSetting.control.accent.cycle.stepHelper.wrap()
  ]);

  themeSetting.control.accent.cycle.collapse = new Collapse({
    type: 'checkbox',
    checkbox: themeSetting.control.accent.cycle.active,
    target: [{
      content: themeSetting.control.accent.cycle.area
    }]
  });

  parent.appendChild(
    node('div', [
      preset(),
      node('hr'),
      themeSetting.control.accent.color.wrap(),
      node('hr'),
      themeSetting.control.accent.random.active.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              themeSetting.control.accent.random.collapse.collapse()
            ]
          })
        ]
      }),
      node('hr'),
      themeSetting.control.accent.cycle.active.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              themeSetting.control.accent.cycle.collapse.collapse()
            ]
          })
        ]
      })
    ])
  );

};

themeSetting.font = (parent) => {

  const fontWeight = { light: 300, regular: 400, bold: 700 };

  themeSetting.control.font.display = {
    name: new Control_textReset({
      object: state.get.current(),
      path: 'theme.font.display.name',
      id: 'theme-font-display-name',
      value: state.get.current().theme.font.display.name,
      defaultValue: state.get.default().theme.font.display.name,
      placeholder: message.get('menuContentThemeFontDisplayNamePlaceholder'),
      labelText: message.get('menuContentThemeFontDisplayNameLabel'),
      action: () => {
        theme.font.display.delay();
        data.save();
      }
    }),
    nameHelper: new Control_helperText({
      complexText: true,
      text: [
        message.get('menuContentThemeFontDisplayNameHelperPara1'),
        (new Link({ text: message.get('menuContentThemeFontDisplayNameHelperLink'), href: 'https://fonts.google.com/', openNew: true })).link().outerHTML,
        message.get('menuContentThemeFontDisplayNameHelperPara2'),
        message.get('menuContentThemeFontDisplayNameHelperPara3')
      ]
    }),
    weight: new Control_slider({
      object: state.get.current(),
      path: 'theme.font.display.weight',
      id: 'theme-font-display-weight',
      labelText: message.get('menuContentThemeFontDisplayWeightLabel'),
      value: state.get.current().theme.font.display.weight,
      defaultValue: state.get.default().theme.font.display.weight,
      step: state.get.step().theme.font.display.weight,
      min: state.get.minMax().theme.font.display.weight.min,
      max: state.get.minMax().theme.font.display.weight.max,
      action: () => {
        applyCSSVar('theme.font.display.weight');
        data.save();
      }
    }),
    weightLight: new Button({
      text: message.get('menuContentThemeFontDisplayWeightLight'),
      style: ['line'],
      func: () => {
        state.get.current().theme.font.display.weight = fontWeight.light;
        applyCSSVar('theme.font.display.weight');
        themeSetting.control.font.display.weight.update();
        data.save();
      }
    }),
    weightRegular: new Button({
      text: message.get('menuContentThemeFontDisplayWeightRegular'),
      style: ['line'],
      func: () => {
        state.get.current().theme.font.display.weight = fontWeight.regular;
        applyCSSVar('theme.font.display.weight');
        themeSetting.control.font.display.weight.update();
        data.save();
      }
    }),
    weightBold: new Button({
      text: message.get('menuContentThemeFontDisplayWeightBold'),
      style: ['line'],
      func: () => {
        state.get.current().theme.font.display.weight = fontWeight.bold;
        applyCSSVar('theme.font.display.weight');
        themeSetting.control.font.display.weight.update();
        data.save();
      }
    }),
    weightHelper: new Control_helperText({
      text: [message.get('menuContentThemeFontDisplayWeightHelperPara1')]
    }),
    style: new Control_radio({
      object: state.get.current(),
      radioGroup: [
        { id: 'theme-font-display-style-normal', labelText: message.get('menuContentThemeFontDisplayStyleNormal'), value: 'normal' },
        { id: 'theme-font-display-style-italic', labelText: message.get('menuContentThemeFontDisplayStyleItalic'), value: 'italic' }
      ],
      groupName: 'theme-font-display-style',
      path: 'theme.font.display.style',
      inputButton: true,
      inputHide: true,
      inputButtonStyle: ['line'],
      action: () => {
        applyCSSVar('theme.font.display.style');
        data.save();
      }
    })
  };

  themeSetting.control.font.ui = {
    name: new Control_textReset({
      object: state.get.current(),
      path: 'theme.font.ui.name',
      id: 'theme-font-ui-name',
      value: state.get.current().theme.font.ui.name,
      defaultValue: state.get.default().theme.font.ui.name,
      placeholder: message.get('menuContentThemeFontUiNamePlaceholder'),
      labelText: message.get('menuContentThemeFontUiNameLabel'),
      action: () => {
        theme.font.ui.delay();
        data.save();
      }
    }),
    nameHelper: new Control_helperText({
      complexText: true,
      text: [
        message.get('menuContentThemeFontUiNameHelperPara1'),
        (new Link({ text: message.get('menuContentThemeFontUiNameHelperLink'), href: 'https://fonts.google.com/', openNew: true })).link().outerHTML,
        message.get('menuContentThemeFontUiNameHelperPara2'),
        message.get('menuContentThemeFontUiNameHelperPara3')
      ]
    }),
    weight: new Control_slider({
      object: state.get.current(),
      path: 'theme.font.ui.weight',
      id: 'theme-font-ui-weight',
      labelText: message.get('menuContentThemeFontUiWeightLabel'),
      value: state.get.current().theme.font.ui.weight,
      defaultValue: state.get.default().theme.font.ui.weight,
      step: state.get.step().theme.font.ui.weight,
      min: state.get.minMax().theme.font.ui.weight.min,
      max: state.get.minMax().theme.font.ui.weight.max,
      action: () => {
        applyCSSVar('theme.font.ui.weight');
        data.save();
      }
    }),
    weightLight: new Button({
      text: message.get('menuContentThemeFontUiWeightLight'),
      style: ['line'],
      func: () => {
        state.get.current().theme.font.ui.weight = fontWeight.light;
        applyCSSVar('theme.font.ui.weight');
        themeSetting.control.font.ui.weight.update();
        data.save();
      }
    }),
    weightRegular: new Button({
      text: message.get('menuContentThemeFontUiWeightRegular'),
      style: ['line'],
      func: () => {
        state.get.current().theme.font.ui.weight = fontWeight.regular;
        applyCSSVar('theme.font.ui.weight');
        themeSetting.control.font.ui.weight.update();
        data.save();
      }
    }),
    weightBold: new Button({
      text: message.get('menuContentThemeFontUiWeightBold'),
      style: ['line'],
      func: () => {
        state.get.current().theme.font.ui.weight = fontWeight.bold;
        applyCSSVar('theme.font.ui.weight');
        themeSetting.control.font.ui.weight.update();
        data.save();
      }
    }),
    weightHelper: new Control_helperText({
      text: [message.get('menuContentThemeFontUiWeightHelperPara1')]
    }),
    style: new Control_radio({
      object: state.get.current(),
      radioGroup: [
        { id: 'theme-font-ui-style-normal', labelText: message.get('menuContentThemeFontUiStyleNormal'), value: 'normal' },
        { id: 'theme-font-ui-style-italic', labelText: message.get('menuContentThemeFontUiStyleItalic'), value: 'italic' }
      ],
      groupName: 'theme-font-ui-style',
      path: 'theme.font.ui.style',
      inputButton: true,
      inputHide: true,
      inputButtonStyle: ['line'],
      action: () => {
        applyCSSVar('theme.font.ui.style');
        data.save();
      }
    })
  };

  parent.appendChild(
    node('div', [
      themeSetting.control.font.display.name.wrap(),
      themeSetting.control.font.display.nameHelper.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              themeSetting.control.font.display.weight.wrap(),
              form.wrap({
                children: [
                  form.group({
                    children: [
                      themeSetting.control.font.display.weightLight.button,
                      themeSetting.control.font.display.weightRegular.button,
                      themeSetting.control.font.display.weightBold.button
                    ]
                  })
                ]
              }),
              themeSetting.control.font.display.style.inputButton(),
              themeSetting.control.font.display.weightHelper.wrap()
            ]
          })
        ]
      }),
      node('hr'),
      themeSetting.control.font.ui.name.wrap(),
      themeSetting.control.font.ui.nameHelper.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              themeSetting.control.font.ui.weight.wrap(),
              form.wrap({
                children: [
                  form.group({
                    children: [
                      themeSetting.control.font.ui.weightLight.button,
                      themeSetting.control.font.ui.weightRegular.button,
                      themeSetting.control.font.ui.weightBold.button
                    ]
                  })
                ]
              }),
              themeSetting.control.font.ui.style.inputButton(),
              themeSetting.control.font.ui.weightHelper.wrap()
            ]
          })
        ]
      })
    ])
  );

};

themeSetting.radius = (parent) => {

  themeSetting.control.radius = new Control_slider({
    object: state.get.current(),
    path: 'theme.radius',
    id: 'theme-radius',
    labelText: message.get('menuContentThemeRadius'),
    value: state.get.current().theme.radius,
    defaultValue: state.get.default().theme.radius,
    min: state.get.minMax().theme.radius.min,
    max: state.get.minMax().theme.radius.max,
    action: () => {
      applyCSSVar('theme.radius');
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      themeSetting.control.radius.wrap()
    ])
  );

};

themeSetting.shadow = (parent) => {

  themeSetting.control.shadow = new Control_slider({
    object: state.get.current(),
    path: 'theme.shadow',
    id: 'theme-shadow',
    labelText: message.get('menuContentThemeShadow'),
    value: state.get.current().theme.shadow,
    defaultValue: state.get.default().theme.shadow,
    min: state.get.minMax().theme.shadow.min,
    max: state.get.minMax().theme.shadow.max,
    action: () => {
      applyCSSVar('theme.shadow');
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      themeSetting.control.shadow.wrap()
    ])
  );

};

themeSetting.shade = (parent) => {

  themeSetting.control.shade = {
    opacity: new Control_slider({
      object: state.get.current(),
      path: 'theme.shade.opacity',
      id: 'theme.shade.opacity',
      labelText: message.get('menuContentThemeShadeOpacity'),
      value: state.get.current().theme.shade.opacity,
      defaultValue: state.get.default().theme.shade.opacity,
      min: state.get.minMax().theme.shade.opacity.min,
      max: state.get.minMax().theme.shade.opacity.max,
      action: () => {
        applyCSSVar('theme.shade.opacity');
        data.save();
      }
    }),
    blur: new Control_slider({
      object: state.get.current(),
      path: 'theme.shade.blur',
      id: 'theme.shade.blur',
      labelText: message.get('menuContentThemeShadeBlurLabel'),
      value: state.get.current().theme.shade.blur,
      defaultValue: state.get.default().theme.shade.blur,
      min: state.get.minMax().theme.shade.blur.min,
      max: state.get.minMax().theme.shade.blur.max,
      action: () => {
        applyCSSVar('theme.shade.blur');
        data.save();
      }
    }),
    blurHelper: new Control_helperText({
      text: [message.get('menuContentThemeShadeBlurHelperPara1')]
    })
  };

  parent.appendChild(
    node('div', [
      themeSetting.control.shade.opacity.wrap(),
      themeSetting.control.shade.blur.wrap(),
      themeSetting.control.shade.blurHelper.wrap()
    ])
  );

};

themeSetting.opacity = (parent) => {

  themeSetting.control.opacity.general = new Control_slider({
    object: state.get.current(),
    path: 'theme.opacity.general',
    id: 'theme-opacity-general',
    labelText: message.get('menuContentThemeOpacityGeneralLabel'),
    value: state.get.current().theme.opacity.general,
    defaultValue: state.get.default().theme.opacity.general,
    min: state.get.minMax().theme.opacity.general.min,
    max: state.get.minMax().theme.opacity.general.max,
    action: () => {

      state.get.current().theme.bookmark.item.opacity = state.get.current().theme.opacity.general;

      state.get.current().theme.toolbar.opacity = state.get.current().theme.opacity.general;

      state.get.current().theme.header.search.opacity = state.get.current().theme.opacity.general;

      state.get.current().theme.group.toolbar.opacity = state.get.current().theme.opacity.general;

      themeSetting.control.opacity.toolbar.update();

      themeSetting.control.opacity.bookmark.update();

      themeSetting.control.opacity.search.update();

      themeSetting.control.opacity.group.toolbar.update();

      applyCSSVar([
        'theme.opacity.general',
        'theme.toolbar.opacity',
        'theme.bookmark.item.opacity',
        'theme.header.search.opacity',
        'theme.group.toolbar.opacity'
      ]);

      bookmark.item.mod.applyVar('color.opacity', state.get.current().theme.bookmark.item.opacity);

      groupAndBookmark.render();

      toolbar.current.update.style();

      header.element.search.update.style();

      data.save();

    }
  });

  themeSetting.control.opacity.generalHelper = new Control_helperText({
    text: [
      message.get('menuContentThemeOpacityGeneralHelperPara1'),
      message.get('menuContentThemeOpacityGeneralHelperPara2')
    ]
  });

  themeSetting.control.opacity.toolbar = new Control_sliderSlim({
    object: state.get.current(),
    path: 'theme.toolbar.opacity',
    id: 'theme-toolbar-opacity',
    labelText: message.get('menuContentThemeOpacityToolbar'),
    value: state.get.current().theme.toolbar.opacity,
    defaultValue: state.get.default().theme.toolbar.opacity,
    min: state.get.minMax().theme.toolbar.opacity.min,
    max: state.get.minMax().theme.toolbar.opacity.max,
    action: () => {

      applyCSSVar('theme.toolbar.opacity');

      toolbar.current.update.style();

      data.save();

    }
  });

  themeSetting.control.opacity.bookmark = new Control_sliderSlim({
    object: state.get.current(),
    path: 'theme.bookmark.item.opacity',
    id: 'theme-bookmark-item-opacity',
    labelText: message.get('menuContentThemeOpacityBookmark'),
    value: state.get.current().theme.bookmark.item.opacity,
    defaultValue: state.get.default().theme.bookmark.item.opacity,
    min: state.get.minMax().theme.bookmark.item.opacity.min,
    max: state.get.minMax().theme.bookmark.item.opacity.max,
    action: () => {

      applyCSSVar('theme.bookmark.item.opacity');

      bookmark.item.mod.applyVar('color.opacity', state.get.current().theme.bookmark.item.opacity);

      groupAndBookmark.render();

      data.save();

    }
  });

  themeSetting.control.opacity.search = new Control_sliderSlim({
    object: state.get.current(),
    path: 'theme.header.search.opacity',
    id: 'theme-header-search-opacity',
    labelText: message.get('menuContentThemeOpacitySearch'),
    value: state.get.current().theme.header.search.opacity,
    defaultValue: state.get.default().theme.header.search.opacity,
    min: state.get.minMax().theme.header.search.opacity.min,
    max: state.get.minMax().theme.header.search.opacity.max,
    action: () => {

      applyCSSVar('theme.header.search.opacity');

      header.element.search.update.style();

      data.save();

    }
  });

  themeSetting.control.opacity.group = {
    toolbar: new Control_sliderSlim({
      object: state.get.current(),
      path: 'theme.group.toolbar.opacity',
      id: 'theme-group-toolbar-opacity',
      labelText: message.get('menuContentThemeOpacityGroupToolbar'),
      value: state.get.current().theme.group.toolbar.opacity,
      defaultValue: state.get.default().theme.group.toolbar.opacity,
      min: state.get.minMax().theme.group.toolbar.opacity.min,
      max: state.get.minMax().theme.group.toolbar.opacity.max,
      action: () => {

        applyCSSVar('theme.group.toolbar.opacity');

        if (group.area.current.length > 0) {

          group.area.current.forEach((item) => {
            item.update.style();
          });

        }

        data.save();

      }
    })
  };

  parent.appendChild(
    node('div', [
      themeSetting.control.opacity.general.wrap(),
      themeSetting.control.opacity.generalHelper.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              themeSetting.control.opacity.toolbar.wrap(),
              themeSetting.control.opacity.bookmark.wrap(),
              themeSetting.control.opacity.search.wrap(),
              themeSetting.control.opacity.group.toolbar.wrap()
            ]
          })
        ]
      })
    ])
  );

};

themeSetting.background = (parent) => {

  const supportLink = supportSetting.supportPage.get();

  const updateVideoPlayState = () => {

    if (theme.background.element.video) {
      if (themeSetting.control.background.type.value() === 'video') {
        theme.background.element.video.play();
      } else {
        theme.background.element.video.pause();
      }
    }

  };

  themeSetting.control.background = {
    type: new Control_radio({
      object: state.get.current(),
      radioGroup: [
        { id: 'theme-background-type-theme', labelText: message.get('menuContentThemeBackgroundTypeThemeLabel'), description: message.get('menuContentThemeBackgroundTypeThemeDescription'), value: 'theme' },
        { id: 'theme-background-type-accent', labelText: message.get('menuContentThemeBackgroundTypeAccentLabel'), description: message.get('menuContentThemeBackgroundTypeAccentDescription'), value: 'accent' },
        { id: 'theme-background-type-color', labelText: message.get('menuContentThemeBackgroundTypeColor'), value: 'color' },
        { id: 'theme-background-type-gradient', labelText: message.get('menuContentThemeBackgroundTypeGradient'), value: 'gradient' },
        { id: 'theme-background-type-image', labelText: message.get('menuContentThemeBackgroundTypeImage'), value: 'image' },
        { id: 'theme-background-type-video', labelText: message.get('menuContentThemeBackgroundTypeVideo'), value: 'video' }
      ],
      groupName: 'theme-background-type',
      path: 'theme.background.type',
      action: () => {
        applyCSSClass('theme.background.type');
        themeSetting.control.background.typeCollapse.update();
        toolbar.current.update.style();
        themeSetting.disable();
        updateVideoPlayState();
        data.save();
      }
    }),
    color: new Control_colorMixer({
      object: state.get.current(),
      path: 'theme.background.color',
      id: 'theme-background-color',
      labelText: message.get('menuContentThemeBackgroundColor'),
      defaultValue: state.get.default().theme.background.color.rgb,
      minMaxObject: state.get.minMax(),
      randomColor: true,
      action: () => {
        applyCSSVar([
          'theme.background.color.rgb.r',
          'theme.background.color.rgb.g',
          'theme.background.color.rgb.b',
          'theme.background.color.hsl.h',
          'theme.background.color.hsl.s',
          'theme.background.color.hsl.l'
        ]);
        toolbar.current.update.style();
        data.save();
      }
    }),
    gradient: {
      angle: new Control_slider({
        object: state.get.current(),
        path: 'theme.background.gradient.angle',
        id: 'theme-background-gradient-angle',
        labelText: message.get('menuContentThemeBackgroundGradientAngle'),
        value: state.get.current().theme.background.gradient.angle,
        defaultValue: state.get.default().theme.background.gradient.angle,
        min: state.get.minMax().theme.background.gradient.angle.min,
        max: state.get.minMax().theme.background.gradient.angle.max,
        action: () => {
          applyCSSVar('theme.background.gradient.angle');
          toolbar.current.update.style();
          data.save();
        }
      }),
      start: new Control_colorMixer({
        object: state.get.current(),
        path: 'theme.background.gradient.start',
        id: 'theme-background-gradient-start',
        labelText: message.get('menuContentThemeBackgroundGradientStart'),
        defaultValue: state.get.default().theme.background.gradient.start.rgb,
        minMaxObject: state.get.minMax(),
        randomColor: true,
        action: () => {
          applyCSSVar([
            'theme.background.gradient.start.rgb.r',
            'theme.background.gradient.start.rgb.g',
            'theme.background.gradient.start.rgb.b',
            'theme.background.gradient.start.hsl.h',
            'theme.background.gradient.start.hsl.s',
            'theme.background.gradient.start.hsl.l'
          ]);
          toolbar.current.update.style();
          data.save();
        }
      }),
      end: new Control_colorMixer({
        object: state.get.current(),
        path: 'theme.background.gradient.end',
        id: 'theme-background-gradient-end',
        labelText: message.get('menuContentThemeBackgroundGradientEnd'),
        defaultValue: state.get.default().theme.background.gradient.end.rgb,
        minMaxObject: state.get.minMax(),
        randomColor: true,
        action: () => {
          applyCSSVar([
            'theme.background.gradient.end.rgb.r',
            'theme.background.gradient.end.rgb.g',
            'theme.background.gradient.end.rgb.b',
            'theme.background.gradient.end.hsl.h',
            'theme.background.gradient.end.hsl.s',
            'theme.background.gradient.end.hsl.l'
          ]);
          toolbar.current.update.style();
          data.save();
        }
      })
    },
    image: {
      alert: new Alert({
        iconName: 'info',
        children: [
          node(`p:${message.get('menuContentThemeBackgroundImageAlertPara1')}|class:small`),
          complexNode({ tag: 'p', attr: [{ key: 'class', value: 'small' }], node: [(new Link({ text: message.get('menuContentThemeBackgroundImageAlertPara2'), href: supportLink.baseUrl + supportLink.page.localBackgroundImage.url, openNew: true })).link()] })
        ]
      }),
      url: new Control_textarea({
        object: state.get.current(),
        path: 'theme.background.image.url',
        id: 'theme-background-image-url',
        value: state.get.current().theme.background.image.url,
        placeholder: message.get('menuContentThemeBackgroundImageUrlPlaceholder'),
        labelText: message.get('menuContentThemeBackgroundImageUrlLabel'),
        action: () => {
          theme.background.image.render();
          data.save();
        }
      }),
      urlHelper: new Control_helperText({
        text: [
          message.get('menuContentThemeBackgroundImageUrlHelperPara1'),
          message.get('menuContentThemeBackgroundImageUrlHelperPara2'),
          message.get('menuContentThemeBackgroundImageUrlHelperPara3'),
          message.get('menuContentThemeBackgroundImageUrlHelperPara4')
        ]
      }),
      blur: new Control_sliderSlim({
        object: state.get.current(),
        path: 'theme.background.image.blur',
        id: 'theme-background-image-blur',
        labelText: message.get('menuContentThemeBackgroundImageBlur'),
        value: state.get.current().theme.background.image.blur,
        defaultValue: state.get.default().theme.background.image.blur,
        min: state.get.minMax().theme.background.image.blur.min,
        max: state.get.minMax().theme.background.image.blur.max,
        action: () => {
          applyCSSVar('theme.background.image.blur');
          data.save();
        }
      }),
      grayscale: new Control_sliderSlim({
        object: state.get.current(),
        path: 'theme.background.image.grayscale',
        id: 'theme-background-image-grayscale',
        labelText: message.get('menuContentThemeBackgroundImageGrayscale'),
        value: state.get.current().theme.background.image.grayscale,
        defaultValue: state.get.default().theme.background.image.grayscale,
        min: state.get.minMax().theme.background.image.grayscale.min,
        max: state.get.minMax().theme.background.image.grayscale.max,
        action: () => {
          applyCSSVar('theme.background.image.grayscale');
          data.save();
        }
      }),
      scale: new Control_sliderSlim({
        object: state.get.current(),
        path: 'theme.background.image.scale',
        id: 'theme-background-image-scale',
        labelText: message.get('menuContentThemeBackgroundImageScale'),
        value: state.get.current().theme.background.image.scale,
        defaultValue: state.get.default().theme.background.image.scale,
        min: state.get.minMax().theme.background.image.scale.min,
        max: state.get.minMax().theme.background.image.scale.max,
        action: () => {
          applyCSSVar('theme.background.image.scale');
          data.save();
        }
      }),
      accent: new Control_sliderSlim({
        object: state.get.current(),
        path: 'theme.background.image.accent',
        id: 'theme-background-image-accent',
        labelText: message.get('menuContentThemeBackgroundImageAccent'),
        value: state.get.current().theme.background.image.accent,
        defaultValue: state.get.default().theme.background.image.accent,
        min: state.get.minMax().theme.background.image.accent.min,
        max: state.get.minMax().theme.background.image.accent.max,
        action: () => {
          applyCSSVar('theme.background.image.accent');
          data.save();
        }
      }),
      opacity: new Control_sliderSlim({
        object: state.get.current(),
        path: 'theme.background.image.opacity',
        id: 'theme-background-image-opacity',
        labelText: message.get('menuContentThemeBackgroundImageOpacity'),
        value: state.get.current().theme.background.image.opacity,
        defaultValue: state.get.default().theme.background.image.opacity,
        min: state.get.minMax().theme.background.image.opacity.min,
        max: state.get.minMax().theme.background.image.opacity.max,
        action: () => {
          applyCSSVar('theme.background.image.opacity');
          data.save();
        }
      }),
      vignette: {
        opacity: new Control_sliderSlim({
          object: state.get.current(),
          path: 'theme.background.image.vignette.opacity',
          id: 'theme-background-image-vignette-opacity',
          labelText: message.get('menuContentThemeBackgroundImageVignetteOpacity'),
          value: state.get.current().theme.background.image.vignette.opacity,
          defaultValue: state.get.default().theme.background.image.vignette.opacity,
          min: state.get.minMax().theme.background.image.vignette.opacity.min,
          max: state.get.minMax().theme.background.image.vignette.opacity.max,
          action: () => {
            applyCSSVar('theme.background.image.vignette.opacity');
            data.save();
          }
        }),
        range: new Control_sliderDouble({
          object: state.get.current(),
          labelText: message.get('menuContentThemeBackgroundImageVignetteRangeLabel'),
          left: {
            path: 'theme.background.image.vignette.end',
            id: 'theme-background-image-vignette-end',
            labelText: message.get('menuContentThemeBackgroundImageVignetteRangeLeft'),
            value: state.get.current().theme.background.image.vignette.end,
            defaultValue: state.get.default().theme.background.image.vignette.end,
            min: state.get.minMax().theme.background.image.vignette.end.min,
            max: state.get.minMax().theme.background.image.vignette.end.max,
            action: () => {
              applyCSSVar('theme.background.image.vignette.start');
              applyCSSVar('theme.background.image.vignette.end');
              data.save();
            }
          },
          right: {
            path: 'theme.background.image.vignette.start',
            id: 'theme-background-image-vignette-start',
            labelText: message.get('menuContentThemeBackgroundImageVignetteRangeRight'),
            value: state.get.current().theme.background.image.vignette.start,
            defaultValue: state.get.default().theme.background.image.vignette.start,
            min: state.get.minMax().theme.background.image.vignette.start.min,
            max: state.get.minMax().theme.background.image.vignette.start.max,
            action: () => {
              applyCSSVar('theme.background.image.vignette.start');
              applyCSSVar('theme.background.image.vignette.end');
              data.save();
            }
          }
        })
      }
    },
    video: {
      alert: new Alert({
        iconName: 'info',
        children: [
          node(`p:${message.get('menuContentThemeBackgroundVideoAlertPara1')}.|class:small`),
          complexNode({ tag: 'p', attr: [{ key: 'class', value: 'small' }], node: [(new Link({ text: message.get('menuContentThemeBackgroundVideoAlertPara2'), href: supportLink.baseUrl + supportLink.page.backgroundImageVideo.url, openNew: true })).link()] })
        ]
      }),
      url: new Control_textarea({
        object: state.get.current(),
        path: 'theme.background.video.url',
        id: 'theme-background-video-url',
        value: state.get.current().theme.background.video.url,
        placeholder: message.get('menuContentThemeBackgroundVideoUrlPlaceholder'),
        labelText: message.get('menuContentThemeBackgroundVideoUrlLabel'),
        action: () => {
          theme.background.video.clear();
          theme.background.video.render();
          data.save();
        }
      }),
      urlHelper: new Control_helperText({
        text: [
          message.get('menuContentThemeBackgroundVideoUrlHelperPara1'),
          message.get('menuContentThemeBackgroundVideoUrlHelperPara2')
        ]
      }),
      blur: new Control_sliderSlim({
        object: state.get.current(),
        path: 'theme.background.video.blur',
        id: 'theme-background-video-blur',
        labelText: message.get('menuContentThemeBackgroundVideoBlur'),
        value: state.get.current().theme.background.video.blur,
        defaultValue: state.get.default().theme.background.video.blur,
        min: state.get.minMax().theme.background.video.blur.min,
        max: state.get.minMax().theme.background.video.blur.max,
        action: () => {
          applyCSSVar('theme.background.video.blur');
          data.save();
        }
      }),
      grayscale: new Control_sliderSlim({
        object: state.get.current(),
        path: 'theme.background.video.grayscale',
        id: 'theme-background-video-grayscale',
        labelText: message.get('menuContentThemeBackgroundVideoGrayscale'),
        value: state.get.current().theme.background.video.grayscale,
        defaultValue: state.get.default().theme.background.video.grayscale,
        min: state.get.minMax().theme.background.video.grayscale.min,
        max: state.get.minMax().theme.background.video.grayscale.max,
        action: () => {
          applyCSSVar('theme.background.video.grayscale');
          data.save();
        }
      }),
      scale: new Control_sliderSlim({
        object: state.get.current(),
        path: 'theme.background.video.scale',
        id: 'theme-background-video-scale',
        labelText: message.get('menuContentThemeBackgroundVideoScale'),
        value: state.get.current().theme.background.video.scale,
        defaultValue: state.get.default().theme.background.video.scale,
        min: state.get.minMax().theme.background.video.scale.min,
        max: state.get.minMax().theme.background.video.scale.max,
        action: () => {
          applyCSSVar('theme.background.video.scale');
          data.save();
        }
      }),
      accent: new Control_sliderSlim({
        object: state.get.current(),
        path: 'theme.background.video.accent',
        id: 'theme-background-video-accent',
        labelText: message.get('menuContentThemeBackgroundVideoAccent'),
        value: state.get.current().theme.background.video.accent,
        defaultValue: state.get.default().theme.background.video.accent,
        min: state.get.minMax().theme.background.video.accent.min,
        max: state.get.minMax().theme.background.video.accent.max,
        action: () => {
          applyCSSVar('theme.background.video.accent');
          data.save();
        }
      }),
      opacity: new Control_sliderSlim({
        object: state.get.current(),
        path: 'theme.background.video.opacity',
        id: 'theme-background-video-opacity',
        labelText: message.get('menuContentThemeBackgroundVideoOpacity'),
        value: state.get.current().theme.background.video.opacity,
        defaultValue: state.get.default().theme.background.video.opacity,
        min: state.get.minMax().theme.background.video.opacity.min,
        max: state.get.minMax().theme.background.video.opacity.max,
        action: () => {
          applyCSSVar('theme.background.video.opacity');
          data.save();
        }
      }),
      vignette: {
        opacity: new Control_sliderSlim({
          object: state.get.current(),
          path: 'theme.background.video.vignette.opacity',
          id: 'theme-background-video-vignette-opacity',
          labelText: message.get('menuContentThemeBackgroundVideoVignetteOpacity'),
          value: state.get.current().theme.background.video.vignette.opacity,
          defaultValue: state.get.default().theme.background.video.vignette.opacity,
          min: state.get.minMax().theme.background.video.vignette.opacity.min,
          max: state.get.minMax().theme.background.video.vignette.opacity.max,
          action: () => {
            applyCSSVar('theme.background.video.vignette.opacity');
            data.save();
          }
        }),
        range: new Control_sliderDouble({
          object: state.get.current(),
          labelText: message.get('menuContentThemeBackgroundVideoVignetteRangeLabel'),
          left: {
            path: 'theme.background.video.vignette.end',
            id: 'theme-background-video-vignette-end',
            labelText: message.get('menuContentThemeBackgroundVideoVignetteRangeLeft'),
            value: state.get.current().theme.background.video.vignette.end,
            defaultValue: state.get.default().theme.background.video.vignette.end,
            min: state.get.minMax().theme.background.video.vignette.end.min,
            max: state.get.minMax().theme.background.video.vignette.end.max,
            action: () => {
              applyCSSVar('theme.background.video.vignette.start');
              applyCSSVar('theme.background.video.vignette.end');
              data.save();
            }
          },
          right: {
            path: 'theme.background.video.vignette.start',
            id: 'theme-background-video-vignette-start',
            labelText: message.get('menuContentThemeBackgroundVideoVignetteRangeRight'),
            value: state.get.current().theme.background.video.vignette.start,
            defaultValue: state.get.default().theme.background.video.vignette.start,
            min: state.get.minMax().theme.background.video.vignette.start.min,
            max: state.get.minMax().theme.background.video.vignette.start.max,
            action: () => {
              applyCSSVar('theme.background.video.vignette.start');
              applyCSSVar('theme.background.video.vignette.end');
              data.save();
            }
          }
        })
      }
    }
  };

  const themeBackgroundColorArea = node('div', [
    themeSetting.control.background.color.wrap()
  ]);

  const themeBackgroundGradientArea = node('div', [
    themeSetting.control.background.gradient.angle.wrap(),
    themeSetting.control.background.gradient.start.wrap(),
    themeSetting.control.background.gradient.end.wrap()
  ]);

  const themeBackgroundImageArea = node('div', [
    themeSetting.control.background.image.alert.wrap(),
    themeSetting.control.background.image.url.wrap(),
    themeSetting.control.background.image.urlHelper.wrap(),
    themeSetting.control.background.image.blur.wrap(),
    themeSetting.control.background.image.grayscale.wrap(),
    themeSetting.control.background.image.scale.wrap(),
    themeSetting.control.background.image.accent.wrap(),
    themeSetting.control.background.image.opacity.wrap(),
    themeSetting.control.background.image.vignette.opacity.wrap(),
    form.wrap({
      children: [
        form.indent({
          children: [
            themeSetting.control.background.image.vignette.range.wrap()
          ]
        })
      ]
    })
  ]);

  const themeBackgroundVideoArea = node('div', [
    themeSetting.control.background.video.alert.wrap(),
    themeSetting.control.background.video.url.wrap(),
    themeSetting.control.background.video.urlHelper.wrap(),
    themeSetting.control.background.video.blur.wrap(),
    themeSetting.control.background.video.grayscale.wrap(),
    themeSetting.control.background.video.scale.wrap(),
    themeSetting.control.background.video.accent.wrap(),
    themeSetting.control.background.video.opacity.wrap(),
    themeSetting.control.background.video.vignette.opacity.wrap(),
    form.wrap({
      children: [
        form.indent({
          children: [
            themeSetting.control.background.video.vignette.range.wrap()
          ]
        })
      ]
    })
  ]);

  themeSetting.control.background.typeCollapse = new Collapse({
    type: 'radio',
    radioGroup: themeSetting.control.background.type,
    target: [{
      id: themeSetting.control.background.type.radioSet[2].radio.value,
      content: themeBackgroundColorArea
    }, {
      id: themeSetting.control.background.type.radioSet[3].radio.value,
      content: themeBackgroundGradientArea
    }, {
      id: themeSetting.control.background.type.radioSet[4].radio.value,
      content: themeBackgroundImageArea
    }, {
      id: themeSetting.control.background.type.radioSet[5].radio.value,
      content: themeBackgroundVideoArea
    }]
  });

  parent.appendChild(
    node('div', [
      themeSetting.control.background.type.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              themeSetting.control.background.typeCollapse.collapse()
            ]
          })
        ]
      })
    ])
  );

};

themeSetting.layout = (parent) => {

  themeSetting.control.layout.color = {};

  themeSetting.control.layout.color.by = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'theme-layout-by-theme', labelText: message.get('menuContentThemeLayoutColorByTransparentLabel'), description: message.get('menuContentThemeLayoutColorByTransparentDescription'), value: 'theme' },
      { id: 'theme-layout-by-custom', labelText: message.get('menuContentThemeLayoutColorByCustomLabel'), description: message.get('menuContentThemeLayoutColorByCustomDescription'), value: 'custom' }
    ],
    label: message.get('menuContentThemeLayoutColorLabel'),
    groupName: 'theme-layout-by',
    path: 'theme.layout.color.by',
    action: () => {
      applyCSSClass('theme.layout.color.by');
      themeSetting.disable();
      themeSetting.control.layout.color.collapse.update();
      data.save();
    }
  });

  themeSetting.control.layout.color.color = new Control_colorMixer({
    object: state.get.current(),
    path: 'theme.layout.color',
    id: 'theme-layout-color',
    labelText: message.get('menuContentThemeLayoutColorColor'),
    defaultValue: state.get.default().theme.layout.color.rgb,
    minMaxObject: state.get.minMax(),
    action: () => {
      applyCSSVar([
        'theme.layout.color.rgb.r',
        'theme.layout.color.rgb.g',
        'theme.layout.color.rgb.b',
        'theme.layout.color.hsl.h',
        'theme.layout.color.hsl.s',
        'theme.layout.color.hsl.l'
      ]);
      data.save();
    }
  });

  themeSetting.control.layout.color.opacity = new Control_slider({
    object: state.get.current(),
    path: 'theme.layout.color.opacity',
    id: 'theme-layout-color-opacity',
    labelText: message.get('menuContentThemeLayoutColorOpacity'),
    value: state.get.current().theme.layout.color.opacity,
    defaultValue: state.get.default().theme.layout.color.opacity,
    min: state.get.minMax().theme.layout.color.opacity.min,
    max: state.get.minMax().theme.layout.color.opacity.max,
    action: () => {
      applyCSSVar([
        'theme.layout.color.opacity'
      ]);
      data.save();
    }
  });

  themeSetting.control.layout.color.blur = new Control_slider({
    object: state.get.current(),
    path: 'theme.layout.color.blur',
    id: 'theme.layout-blur',
    labelText: message.get('menuContentThemeLayoutColorBlurLabel'),
    value: state.get.current().theme.layout.color.blur,
    defaultValue: state.get.default().theme.layout.color.blur,
    min: state.get.minMax().theme.layout.color.blur.min,
    max: state.get.minMax().theme.layout.color.blur.max,
    action: () => {
      applyCSSVar([
        'theme.layout.color.blur'
      ]);
      data.save();
    }
  });

  themeSetting.control.layout.color.blurHelper = new Control_helperText({
    text: [message.get('menuContentThemeLayoutColorBlurHelperPara1')]
  });

  themeSetting.control.layout.color.area = node('div', [
    themeSetting.control.layout.color.color.wrap(),
    themeSetting.control.layout.color.opacity.wrap(),
    themeSetting.control.layout.color.blur.wrap(),
    themeSetting.control.layout.color.blurHelper.wrap()
  ]);

  themeSetting.control.layout.color.collapse = new Collapse({
    type: 'radio',
    radioGroup: themeSetting.control.layout.color.by,
    target: [{
      id: themeSetting.control.layout.color.by.radioSet[1].radio.value,
      content: themeSetting.control.layout.color.area
    }]
  });

  themeSetting.control.layout.divider = {
    size: new Control_slider({
      object: state.get.current(),
      path: 'theme.layout.divider.size',
      id: 'theme.layout-divider-size',
      labelText: message.get('menuContentThemeLayoutDivider'),
      value: state.get.current().theme.layout.divider.size,
      defaultValue: state.get.default().theme.layout.divider.size,
      min: state.get.minMax().theme.layout.divider.size.min,
      max: state.get.minMax().theme.layout.divider.size.max,
      action: () => {
        applyCSSVar([
          'theme.layout.divider.size'
        ]);
        applyCSSState([
          'theme.layout.divider.size'
        ]);
        layout.area.render();
        data.save();
      }
    })
  };

  parent.appendChild(
    node('div', [
      themeSetting.control.layout.color.by.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              themeSetting.control.layout.color.collapse.collapse()
            ]
          })
        ]
      }),
      node('hr'),
      themeSetting.control.layout.divider.size.wrap()
    ])
  );

};

themeSetting.header = (parent) => {

  themeSetting.control.header.color = {};

  themeSetting.control.header.color.by = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'theme-header-by-theme', labelText: message.get('menuContentThemeHeaderColorByTransparentLabel'), description: message.get('menuContentThemeHeaderColorByTransparentDescription'), value: 'theme' },
      { id: 'theme-header-by-custom', labelText: message.get('menuContentThemeHeaderColorByCustomLabel'), description: message.get('menuContentThemeHeaderColorByCustomDescription'), value: 'custom' }
    ],
    label: message.get('menuContentThemeHeaderColorLabel'),
    groupName: 'theme-header-by',
    path: 'theme.header.color.by',
    action: () => {
      applyCSSClass('theme.header.color.by');
      themeSetting.disable();
      themeSetting.control.header.color.collapse.update();
      data.save();
    }
  });

  themeSetting.control.header.color.color = new Control_colorMixer({
    object: state.get.current(),
    path: 'theme.header.color',
    id: 'theme-header-color',
    labelText: message.get('menuContentThemeHeaderColorColor'),
    defaultValue: state.get.default().theme.header.color.rgb,
    minMaxObject: state.get.minMax(),
    action: () => {
      applyCSSVar([
        'theme.header.color.rgb.r',
        'theme.header.color.rgb.g',
        'theme.header.color.rgb.b',
        'theme.header.color.hsl.h',
        'theme.header.color.hsl.s',
        'theme.header.color.hsl.l'
      ]);
      data.save();
    }
  });

  themeSetting.control.header.color.opacity = new Control_slider({
    object: state.get.current(),
    path: 'theme.header.color.opacity',
    id: 'theme-header-color-opacity',
    labelText: message.get('menuContentThemeHeaderColorOpacity'),
    value: state.get.current().theme.header.color.opacity,
    defaultValue: state.get.default().theme.header.color.opacity,
    min: state.get.minMax().theme.header.color.opacity.min,
    max: state.get.minMax().theme.header.color.opacity.max,
    action: () => {
      applyCSSVar([
        'theme.header.color.opacity'
      ]);
      data.save();
    }
  });

  themeSetting.control.header.color.area = node('div', [
    themeSetting.control.header.color.color.wrap(),
    themeSetting.control.header.color.opacity.wrap()
  ]);

  themeSetting.control.header.color.collapse = new Collapse({
    type: 'radio',
    radioGroup: themeSetting.control.header.color.by,
    target: [{
      id: themeSetting.control.header.color.by.radioSet[1].radio.value,
      content: themeSetting.control.header.color.area
    }]
  });

  parent.appendChild(
    node('div', [
      themeSetting.control.header.color.by.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              themeSetting.control.header.color.collapse.collapse()
            ]
          })
        ]
      })
    ])
  );

};

themeSetting.bookmark = (parent) => {

  themeSetting.control.bookmark.color = {};

  themeSetting.control.bookmark.color.by = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'theme-bookmark-by-theme', labelText: message.get('menuContentThemeBookmarkColorByTransparentLabel'), description: message.get('menuContentThemeBookmarkColorByTransparentDescription'), value: 'theme' },
      { id: 'theme-bookmark-by-custom', labelText: message.get('menuContentThemeBookmarkColorByCustomLabel'), description: message.get('menuContentThemeBookmarkColorByCustomDescription'), value: 'custom' }
    ],
    label: message.get('menuContentThemeBookmarkColorLabel'),
    groupName: 'theme-bookmark-by',
    path: 'theme.bookmark.color.by',
    action: () => {
      applyCSSClass('theme.bookmark.color.by');
      themeSetting.disable();
      themeSetting.control.bookmark.color.collapse.update();
      data.save();
    }
  });

  themeSetting.control.bookmark.color.color = new Control_colorMixer({
    object: state.get.current(),
    path: 'theme.bookmark.color',
    id: 'theme-bookmark-color',
    labelText: message.get('menuContentThemeBookmarkColorColor'),
    defaultValue: state.get.default().theme.bookmark.color.rgb,
    minMaxObject: state.get.minMax(),
    action: () => {
      applyCSSVar([
        'theme.bookmark.color.rgb.r',
        'theme.bookmark.color.rgb.g',
        'theme.bookmark.color.rgb.b',
        'theme.bookmark.color.hsl.h',
        'theme.bookmark.color.hsl.s',
        'theme.bookmark.color.hsl.l'
      ]);
      data.save();
    }
  });

  themeSetting.control.bookmark.color.opacity = new Control_slider({
    object: state.get.current(),
    path: 'theme.bookmark.color.opacity',
    id: 'theme-bookmark-color-opacity',
    labelText: message.get('menuContentThemeBookmarkColorOpacity'),
    value: state.get.current().theme.bookmark.color.opacity,
    defaultValue: state.get.default().theme.bookmark.color.opacity,
    min: state.get.minMax().theme.bookmark.color.opacity.min,
    max: state.get.minMax().theme.bookmark.color.opacity.max,
    action: () => {
      applyCSSVar([
        'theme.bookmark.color.opacity'
      ]);
      data.save();
    }
  });

  themeSetting.control.bookmark.color.area = node('div', [
    themeSetting.control.bookmark.color.color.wrap(),
    themeSetting.control.bookmark.color.opacity.wrap()
  ]);

  themeSetting.control.bookmark.color.collapse = new Collapse({
    type: 'radio',
    radioGroup: themeSetting.control.bookmark.color.by,
    target: [{
      id: themeSetting.control.bookmark.color.by.radioSet[1].radio.value,
      content: themeSetting.control.bookmark.color.area
    }]
  });

  themeSetting.control.bookmark.item = {};

  themeSetting.control.bookmark.item.border = new Control_slider({
    object: state.get.current(),
    path: 'theme.bookmark.item.border',
    id: 'theme-bookmark-item-border',
    labelText: message.get('menuContentThemeBookmarkItemBorderLabel'),
    value: state.get.current().theme.bookmark.item.border,
    defaultValue: state.get.default().theme.bookmark.item.border,
    min: state.get.minMax().theme.bookmark.item.border.min,
    max: state.get.minMax().theme.bookmark.item.border.max,
    action: () => {
      bookmark.item.mod.applyVar('border', state.get.current().theme.bookmark.item.border);
      groupAndBookmark.render();
      data.save();
    }
  });

  themeSetting.control.bookmark.item.borderHelper = new Control_helperText({
    text: [
      message.get('menuContentThemeBookmarkItemBorderHelperPara1'),
      message.get('menuContentThemeBookmarkItemBorderHelperPara2')
    ]
  });

  themeSetting.control.bookmark.item.rainbow = {
    add: new Button({
      text: message.get('menuContentThemeBookmarkItemRainbowAdd'),
      style: ['line'],
      func: () => {
        theme.accent.rainbow.render();
        data.save();
      }
    }),
    remove: new Button({
      text: message.get('menuContentThemeBookmarkItemRainbowRemove'),
      style: ['line'],
      func: () => {
        theme.accent.rainbow.clear();
        data.save();
      }
    }),
    helper: new Control_helperText({
      text: [message.get('menuContentThemeBookmarkItemRainbowHelperPara1')]
    })
  };

  parent.appendChild(
    node('div', [
      themeSetting.control.bookmark.color.by.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              themeSetting.control.bookmark.color.collapse.collapse()
            ]
          })
        ]
      }),
      node('hr'),
      themeSetting.control.bookmark.item.border.wrap(),
      themeSetting.control.bookmark.item.borderHelper.wrap(),
      node('hr'),
      form.wrap({
        children: [
          form.inline({
            gap: 'small',
            wrap: true,
            equalGap: true,
            children: [
              themeSetting.control.bookmark.item.rainbow.add.wrap(),
              themeSetting.control.bookmark.item.rainbow.remove.wrap(),
            ]
          })
        ]
      }),
      themeSetting.control.bookmark.item.rainbow.helper.wrap()
    ])
  );

};

export { themeSetting };
