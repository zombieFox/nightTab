import { language } from '../../language';

export const accentPreset = {};

accentPreset.get = () => {

  return [
    { name: language.current().menu.content.theme.accent.preset.color.grey, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level3, type: 'grey', hsl: { h: 0, s: 0, l: 90 } },
    { name: language.current().menu.content.theme.accent.preset.color.grey, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level2, type: 'grey', hsl: { h: 0, s: 0, l: 77 } },
    { name: language.current().menu.content.theme.accent.preset.color.grey, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level1, type: 'grey', hsl: { h: 0, s: 0, l: 63 } },
    { name: language.current().menu.content.theme.accent.preset.color.grey, prefix: false, type: 'grey', hsl: { h: 0, s: 0, l: 50 } },
    { name: language.current().menu.content.theme.accent.preset.color.grey, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level1, type: 'grey', hsl: { h: 0, s: 0, l: 37 } },
    { name: language.current().menu.content.theme.accent.preset.color.grey, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level2, type: 'grey', hsl: { h: 0, s: 0, l: 23 } },
    { name: language.current().menu.content.theme.accent.preset.color.grey, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level3, type: 'grey', hsl: { h: 0, s: 0, l: 10 } },

    { name: language.current().menu.content.theme.accent.preset.color.red, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level3, type: 'primary', hsl: { h: 0, s: 40, l: 90 } },
    { name: language.current().menu.content.theme.accent.preset.color.red, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level2, type: 'primary', hsl: { h: 0, s: 60, l: 77 } },
    { name: language.current().menu.content.theme.accent.preset.color.red, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level1, type: 'primary', hsl: { h: 0, s: 80, l: 63 } },
    { name: language.current().menu.content.theme.accent.preset.color.red, prefix: false, type: 'primary', hsl: { h: 0, s: 100, l: 50 } },
    { name: language.current().menu.content.theme.accent.preset.color.red, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level1, type: 'primary', hsl: { h: 0, s: 80, l: 37 } },
    { name: language.current().menu.content.theme.accent.preset.color.red, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level2, type: 'primary', hsl: { h: 0, s: 60, l: 23 } },
    { name: language.current().menu.content.theme.accent.preset.color.red, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level3, type: 'primary', hsl: { h: 0, s: 40, l: 10 } },

    { name: language.current().menu.content.theme.accent.preset.color.orange, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level3, type: 'secondary', hsl: { h: 30, s: 40, l: 90 } },
    { name: language.current().menu.content.theme.accent.preset.color.orange, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level2, type: 'secondary', hsl: { h: 30, s: 60, l: 77 } },
    { name: language.current().menu.content.theme.accent.preset.color.orange, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level1, type: 'secondary', hsl: { h: 30, s: 80, l: 63 } },
    { name: language.current().menu.content.theme.accent.preset.color.orange, prefix: false, type: 'secondary', hsl: { h: 30, s: 100, l: 50 } },
    { name: language.current().menu.content.theme.accent.preset.color.orange, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level1, type: 'secondary', hsl: { h: 30, s: 80, l: 37 } },
    { name: language.current().menu.content.theme.accent.preset.color.orange, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level2, type: 'secondary', hsl: { h: 30, s: 60, l: 23 } },
    { name: language.current().menu.content.theme.accent.preset.color.orange, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level3, type: 'secondary', hsl: { h: 30, s: 40, l: 10 } },

    { name: language.current().menu.content.theme.accent.preset.color.yellow, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level3, type: 'primary', hsl: { h: 60, s: 40, l: 90 } },
    { name: language.current().menu.content.theme.accent.preset.color.yellow, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level2, type: 'primary', hsl: { h: 60, s: 60, l: 77 } },
    { name: language.current().menu.content.theme.accent.preset.color.yellow, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level1, type: 'primary', hsl: { h: 60, s: 80, l: 63 } },
    { name: language.current().menu.content.theme.accent.preset.color.yellow, prefix: false, type: 'primary', hsl: { h: 60, s: 100, l: 50 } },
    { name: language.current().menu.content.theme.accent.preset.color.yellow, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level1, type: 'primary', hsl: { h: 60, s: 80, l: 37 } },
    { name: language.current().menu.content.theme.accent.preset.color.yellow, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level2, type: 'primary', hsl: { h: 60, s: 60, l: 23 } },
    { name: language.current().menu.content.theme.accent.preset.color.yellow, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level3, type: 'primary', hsl: { h: 60, s: 40, l: 10 } },

    { name: language.current().menu.content.theme.accent.preset.color.lime, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level3, type: 'secondary', hsl: { h: 90, s: 40, l: 90 } },
    { name: language.current().menu.content.theme.accent.preset.color.lime, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level2, type: 'secondary', hsl: { h: 90, s: 60, l: 77 } },
    { name: language.current().menu.content.theme.accent.preset.color.lime, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level1, type: 'secondary', hsl: { h: 90, s: 80, l: 63 } },
    { name: language.current().menu.content.theme.accent.preset.color.lime, prefix: false, type: 'secondary', hsl: { h: 90, s: 100, l: 50 } },
    { name: language.current().menu.content.theme.accent.preset.color.lime, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level1, type: 'secondary', hsl: { h: 90, s: 80, l: 37 } },
    { name: language.current().menu.content.theme.accent.preset.color.lime, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level2, type: 'secondary', hsl: { h: 90, s: 60, l: 23 } },
    { name: language.current().menu.content.theme.accent.preset.color.lime, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level3, type: 'secondary', hsl: { h: 90, s: 40, l: 10 } },

    { name: language.current().menu.content.theme.accent.preset.color.green, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level3, type: 'primary', hsl: { h: 120, s: 40, l: 90 } },
    { name: language.current().menu.content.theme.accent.preset.color.green, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level2, type: 'primary', hsl: { h: 120, s: 60, l: 77 } },
    { name: language.current().menu.content.theme.accent.preset.color.green, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level1, type: 'primary', hsl: { h: 120, s: 80, l: 63 } },
    { name: language.current().menu.content.theme.accent.preset.color.green, prefix: false, type: 'primary', hsl: { h: 120, s: 100, l: 50 } },
    { name: language.current().menu.content.theme.accent.preset.color.green, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level1, type: 'primary', hsl: { h: 120, s: 80, l: 37 } },
    { name: language.current().menu.content.theme.accent.preset.color.green, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level2, type: 'primary', hsl: { h: 120, s: 60, l: 23 } },
    { name: language.current().menu.content.theme.accent.preset.color.green, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level3, type: 'primary', hsl: { h: 120, s: 40, l: 10 } },

    { name: language.current().menu.content.theme.accent.preset.color.aqua, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level3, type: 'secondary', hsl: { h: 150, s: 40, l: 90 } },
    { name: language.current().menu.content.theme.accent.preset.color.aqua, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level2, type: 'secondary', hsl: { h: 150, s: 60, l: 77 } },
    { name: language.current().menu.content.theme.accent.preset.color.aqua, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level1, type: 'secondary', hsl: { h: 150, s: 80, l: 63 } },
    { name: language.current().menu.content.theme.accent.preset.color.aqua, prefix: false, type: 'secondary', hsl: { h: 150, s: 100, l: 50 } },
    { name: language.current().menu.content.theme.accent.preset.color.aqua, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level1, type: 'secondary', hsl: { h: 150, s: 80, l: 37 } },
    { name: language.current().menu.content.theme.accent.preset.color.aqua, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level2, type: 'secondary', hsl: { h: 150, s: 60, l: 23 } },
    { name: language.current().menu.content.theme.accent.preset.color.aqua, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level3, type: 'secondary', hsl: { h: 150, s: 40, l: 10 } },

    { name: language.current().menu.content.theme.accent.preset.color.cyan, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level3, type: 'primary', hsl: { h: 180, s: 40, l: 90 } },
    { name: language.current().menu.content.theme.accent.preset.color.cyan, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level2, type: 'primary', hsl: { h: 180, s: 60, l: 77 } },
    { name: language.current().menu.content.theme.accent.preset.color.cyan, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level1, type: 'primary', hsl: { h: 180, s: 80, l: 63 } },
    { name: language.current().menu.content.theme.accent.preset.color.cyan, prefix: false, type: 'primary', hsl: { h: 180, s: 100, l: 50 } },
    { name: language.current().menu.content.theme.accent.preset.color.cyan, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level1, type: 'primary', hsl: { h: 180, s: 80, l: 37 } },
    { name: language.current().menu.content.theme.accent.preset.color.cyan, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level2, type: 'primary', hsl: { h: 180, s: 60, l: 23 } },
    { name: language.current().menu.content.theme.accent.preset.color.cyan, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level3, type: 'primary', hsl: { h: 180, s: 40, l: 10 } },

    { name: language.current().menu.content.theme.accent.preset.color.teal, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level3, type: 'secondary', hsl: { h: 210, s: 40, l: 90 } },
    { name: language.current().menu.content.theme.accent.preset.color.teal, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level2, type: 'secondary', hsl: { h: 210, s: 60, l: 77 } },
    { name: language.current().menu.content.theme.accent.preset.color.teal, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level1, type: 'secondary', hsl: { h: 210, s: 80, l: 63 } },
    { name: language.current().menu.content.theme.accent.preset.color.teal, prefix: false, type: 'secondary', hsl: { h: 210, s: 100, l: 50 } },
    { name: language.current().menu.content.theme.accent.preset.color.teal, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level1, type: 'secondary', hsl: { h: 210, s: 80, l: 37 } },
    { name: language.current().menu.content.theme.accent.preset.color.teal, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level2, type: 'secondary', hsl: { h: 210, s: 60, l: 23 } },
    { name: language.current().menu.content.theme.accent.preset.color.teal, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level3, type: 'secondary', hsl: { h: 210, s: 40, l: 10 } },

    { name: language.current().menu.content.theme.accent.preset.color.blue, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level3, type: 'primary', hsl: { h: 240, s: 40, l: 90 } },
    { name: language.current().menu.content.theme.accent.preset.color.blue, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level2, type: 'primary', hsl: { h: 240, s: 60, l: 77 } },
    { name: language.current().menu.content.theme.accent.preset.color.blue, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level1, type: 'primary', hsl: { h: 240, s: 80, l: 63 } },
    { name: language.current().menu.content.theme.accent.preset.color.blue, prefix: false, type: 'primary', hsl: { h: 240, s: 100, l: 50 } },
    { name: language.current().menu.content.theme.accent.preset.color.blue, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level1, type: 'primary', hsl: { h: 240, s: 80, l: 37 } },
    { name: language.current().menu.content.theme.accent.preset.color.blue, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level2, type: 'primary', hsl: { h: 240, s: 60, l: 23 } },
    { name: language.current().menu.content.theme.accent.preset.color.blue, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level3, type: 'primary', hsl: { h: 240, s: 40, l: 10 } },

    { name: language.current().menu.content.theme.accent.preset.color.purple, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level3, type: 'secondary', hsl: { h: 270, s: 40, l: 90 } },
    { name: language.current().menu.content.theme.accent.preset.color.purple, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level2, type: 'secondary', hsl: { h: 270, s: 60, l: 77 } },
    { name: language.current().menu.content.theme.accent.preset.color.purple, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level1, type: 'secondary', hsl: { h: 270, s: 80, l: 63 } },
    { name: language.current().menu.content.theme.accent.preset.color.purple, prefix: false, type: 'secondary', hsl: { h: 270, s: 100, l: 50 } },
    { name: language.current().menu.content.theme.accent.preset.color.purple, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level1, type: 'secondary', hsl: { h: 270, s: 80, l: 37 } },
    { name: language.current().menu.content.theme.accent.preset.color.purple, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level2, type: 'secondary', hsl: { h: 270, s: 60, l: 23 } },
    { name: language.current().menu.content.theme.accent.preset.color.purple, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level3, type: 'secondary', hsl: { h: 270, s: 40, l: 10 } },

    { name: language.current().menu.content.theme.accent.preset.color.magenta, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level3, type: 'primary', hsl: { h: 300, s: 40, l: 90 } },
    { name: language.current().menu.content.theme.accent.preset.color.magenta, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level2, type: 'primary', hsl: { h: 300, s: 60, l: 77 } },
    { name: language.current().menu.content.theme.accent.preset.color.magenta, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level1, type: 'primary', hsl: { h: 300, s: 80, l: 63 } },
    { name: language.current().menu.content.theme.accent.preset.color.magenta, prefix: false, type: 'primary', hsl: { h: 300, s: 100, l: 50 } },
    { name: language.current().menu.content.theme.accent.preset.color.magenta, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level1, type: 'primary', hsl: { h: 300, s: 80, l: 37 } },
    { name: language.current().menu.content.theme.accent.preset.color.magenta, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level2, type: 'primary', hsl: { h: 300, s: 60, l: 23 } },
    { name: language.current().menu.content.theme.accent.preset.color.magenta, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level3, type: 'primary', hsl: { h: 300, s: 40, l: 10 } },

    { name: language.current().menu.content.theme.accent.preset.color.fuchsia, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level3, type: 'secondary', hsl: { h: 330, s: 40, l: 90 } },
    { name: language.current().menu.content.theme.accent.preset.color.fuchsia, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level2, type: 'secondary', hsl: { h: 330, s: 60, l: 77 } },
    { name: language.current().menu.content.theme.accent.preset.color.fuchsia, prefix: language.current().menu.content.theme.accent.preset.modifier.light.level1, type: 'secondary', hsl: { h: 330, s: 80, l: 63 } },
    { name: language.current().menu.content.theme.accent.preset.color.fuchsia, prefix: false, type: 'secondary', hsl: { h: 330, s: 100, l: 50 } },
    { name: language.current().menu.content.theme.accent.preset.color.fuchsia, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level1, type: 'secondary', hsl: { h: 330, s: 80, l: 37 } },
    { name: language.current().menu.content.theme.accent.preset.color.fuchsia, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level2, type: 'secondary', hsl: { h: 330, s: 60, l: 23 } },
    { name: language.current().menu.content.theme.accent.preset.color.fuchsia, prefix: language.current().menu.content.theme.accent.preset.modifier.dark.level3, type: 'secondary', hsl: { h: 330, s: 40, l: 10 } },
  ];

};
