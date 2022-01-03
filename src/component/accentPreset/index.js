import { message } from '../message';

export const accentPreset = {};

accentPreset.get = () => {

  return [
    { name: message('menuContentThemeAccentPresetColorGrey'), prefix: message('menuContentThemeAccentPresetModifierLightLevel3'), type: 'grey', hsl: { h: 0, s: 0, l: 90 } },
    { name: message('menuContentThemeAccentPresetColorGrey'), prefix: message('menuContentThemeAccentPresetModifierLightLevel2'), type: 'grey', hsl: { h: 0, s: 0, l: 77 } },
    { name: message('menuContentThemeAccentPresetColorGrey'), prefix: message('menuContentThemeAccentPresetModifierLightLevel1'), type: 'grey', hsl: { h: 0, s: 0, l: 63 } },
    { name: message('menuContentThemeAccentPresetColorGrey'), prefix: false, type: 'grey', hsl: { h: 0, s: 0, l: 50 } },
    { name: message('menuContentThemeAccentPresetColorGrey'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'grey', hsl: { h: 0, s: 0, l: 37 } },
    { name: message('menuContentThemeAccentPresetColorGrey'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'grey', hsl: { h: 0, s: 0, l: 23 } },
    { name: message('menuContentThemeAccentPresetColorGrey'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'grey', hsl: { h: 0, s: 0, l: 10 } },

    { name: message('menuContentThemeAccentPresetColorRed'), prefix: message('menuContentThemeAccentPresetModifierLightLevel3'), type: 'primary', hsl: { h: 0, s: 40, l: 90 } },
    { name: message('menuContentThemeAccentPresetColorRed'), prefix: message('menuContentThemeAccentPresetModifierLightLevel2'), type: 'primary', hsl: { h: 0, s: 60, l: 77 } },
    { name: message('menuContentThemeAccentPresetColorRed'), prefix: message('menuContentThemeAccentPresetModifierLightLevel1'), type: 'primary', hsl: { h: 0, s: 80, l: 63 } },
    { name: message('menuContentThemeAccentPresetColorRed'), prefix: false, type: 'primary', hsl: { h: 0, s: 100, l: 50 } },
    { name: message('menuContentThemeAccentPresetColorRed'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'primary', hsl: { h: 0, s: 80, l: 37 } },
    { name: message('menuContentThemeAccentPresetColorRed'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'primary', hsl: { h: 0, s: 60, l: 23 } },
    { name: message('menuContentThemeAccentPresetColorRed'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'primary', hsl: { h: 0, s: 40, l: 10 } },

    { name: message('menuContentThemeAccentPresetColorOrange'), prefix: message('menuContentThemeAccentPresetModifierLightLevel3'), type: 'secondary', hsl: { h: 30, s: 40, l: 90 } },
    { name: message('menuContentThemeAccentPresetColorOrange'), prefix: message('menuContentThemeAccentPresetModifierLightLevel2'), type: 'secondary', hsl: { h: 30, s: 60, l: 77 } },
    { name: message('menuContentThemeAccentPresetColorOrange'), prefix: message('menuContentThemeAccentPresetModifierLightLevel1'), type: 'secondary', hsl: { h: 30, s: 80, l: 63 } },
    { name: message('menuContentThemeAccentPresetColorOrange'), prefix: false, type: 'secondary', hsl: { h: 30, s: 100, l: 50 } },
    { name: message('menuContentThemeAccentPresetColorOrange'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'secondary', hsl: { h: 30, s: 80, l: 37 } },
    { name: message('menuContentThemeAccentPresetColorOrange'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'secondary', hsl: { h: 30, s: 60, l: 23 } },
    { name: message('menuContentThemeAccentPresetColorOrange'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'secondary', hsl: { h: 30, s: 40, l: 10 } },

    { name: message('menuContentThemeAccentPresetColorYellow'), prefix: message('menuContentThemeAccentPresetModifierLightLevel3'), type: 'primary', hsl: { h: 60, s: 40, l: 90 } },
    { name: message('menuContentThemeAccentPresetColorYellow'), prefix: message('menuContentThemeAccentPresetModifierLightLevel2'), type: 'primary', hsl: { h: 60, s: 60, l: 77 } },
    { name: message('menuContentThemeAccentPresetColorYellow'), prefix: message('menuContentThemeAccentPresetModifierLightLevel1'), type: 'primary', hsl: { h: 60, s: 80, l: 63 } },
    { name: message('menuContentThemeAccentPresetColorYellow'), prefix: false, type: 'primary', hsl: { h: 60, s: 100, l: 50 } },
    { name: message('menuContentThemeAccentPresetColorYellow'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'primary', hsl: { h: 60, s: 80, l: 37 } },
    { name: message('menuContentThemeAccentPresetColorYellow'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'primary', hsl: { h: 60, s: 60, l: 23 } },
    { name: message('menuContentThemeAccentPresetColorYellow'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'primary', hsl: { h: 60, s: 40, l: 10 } },

    { name: message('menuContentThemeAccentPresetColorLime'), prefix: message('menuContentThemeAccentPresetModifierLightLevel3'), type: 'secondary', hsl: { h: 90, s: 40, l: 90 } },
    { name: message('menuContentThemeAccentPresetColorLime'), prefix: message('menuContentThemeAccentPresetModifierLightLevel2'), type: 'secondary', hsl: { h: 90, s: 60, l: 77 } },
    { name: message('menuContentThemeAccentPresetColorLime'), prefix: message('menuContentThemeAccentPresetModifierLightLevel1'), type: 'secondary', hsl: { h: 90, s: 80, l: 63 } },
    { name: message('menuContentThemeAccentPresetColorLime'), prefix: false, type: 'secondary', hsl: { h: 90, s: 100, l: 50 } },
    { name: message('menuContentThemeAccentPresetColorLime'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'secondary', hsl: { h: 90, s: 80, l: 37 } },
    { name: message('menuContentThemeAccentPresetColorLime'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'secondary', hsl: { h: 90, s: 60, l: 23 } },
    { name: message('menuContentThemeAccentPresetColorLime'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'secondary', hsl: { h: 90, s: 40, l: 10 } },

    { name: message('menuContentThemeAccentPresetColorGreen'), prefix: message('menuContentThemeAccentPresetModifierLightLevel3'), type: 'primary', hsl: { h: 120, s: 40, l: 90 } },
    { name: message('menuContentThemeAccentPresetColorGreen'), prefix: message('menuContentThemeAccentPresetModifierLightLevel2'), type: 'primary', hsl: { h: 120, s: 60, l: 77 } },
    { name: message('menuContentThemeAccentPresetColorGreen'), prefix: message('menuContentThemeAccentPresetModifierLightLevel1'), type: 'primary', hsl: { h: 120, s: 80, l: 63 } },
    { name: message('menuContentThemeAccentPresetColorGreen'), prefix: false, type: 'primary', hsl: { h: 120, s: 100, l: 50 } },
    { name: message('menuContentThemeAccentPresetColorGreen'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'primary', hsl: { h: 120, s: 80, l: 37 } },
    { name: message('menuContentThemeAccentPresetColorGreen'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'primary', hsl: { h: 120, s: 60, l: 23 } },
    { name: message('menuContentThemeAccentPresetColorGreen'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'primary', hsl: { h: 120, s: 40, l: 10 } },

    { name: message('menuContentThemeAccentPresetColorAqua'), prefix: message('menuContentThemeAccentPresetModifierLightLevel3'), type: 'secondary', hsl: { h: 150, s: 40, l: 90 } },
    { name: message('menuContentThemeAccentPresetColorAqua'), prefix: message('menuContentThemeAccentPresetModifierLightLevel2'), type: 'secondary', hsl: { h: 150, s: 60, l: 77 } },
    { name: message('menuContentThemeAccentPresetColorAqua'), prefix: message('menuContentThemeAccentPresetModifierLightLevel1'), type: 'secondary', hsl: { h: 150, s: 80, l: 63 } },
    { name: message('menuContentThemeAccentPresetColorAqua'), prefix: false, type: 'secondary', hsl: { h: 150, s: 100, l: 50 } },
    { name: message('menuContentThemeAccentPresetColorAqua'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'secondary', hsl: { h: 150, s: 80, l: 37 } },
    { name: message('menuContentThemeAccentPresetColorAqua'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'secondary', hsl: { h: 150, s: 60, l: 23 } },
    { name: message('menuContentThemeAccentPresetColorAqua'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'secondary', hsl: { h: 150, s: 40, l: 10 } },

    { name: message('menuContentThemeAccentPresetColorCyan'), prefix: message('menuContentThemeAccentPresetModifierLightLevel3'), type: 'primary', hsl: { h: 180, s: 40, l: 90 } },
    { name: message('menuContentThemeAccentPresetColorCyan'), prefix: message('menuContentThemeAccentPresetModifierLightLevel2'), type: 'primary', hsl: { h: 180, s: 60, l: 77 } },
    { name: message('menuContentThemeAccentPresetColorCyan'), prefix: message('menuContentThemeAccentPresetModifierLightLevel1'), type: 'primary', hsl: { h: 180, s: 80, l: 63 } },
    { name: message('menuContentThemeAccentPresetColorCyan'), prefix: false, type: 'primary', hsl: { h: 180, s: 100, l: 50 } },
    { name: message('menuContentThemeAccentPresetColorCyan'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'primary', hsl: { h: 180, s: 80, l: 37 } },
    { name: message('menuContentThemeAccentPresetColorCyan'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'primary', hsl: { h: 180, s: 60, l: 23 } },
    { name: message('menuContentThemeAccentPresetColorCyan'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'primary', hsl: { h: 180, s: 40, l: 10 } },

    { name: message('menuContentThemeAccentPresetColorTeal'), prefix: message('menuContentThemeAccentPresetModifierLightLevel3'), type: 'secondary', hsl: { h: 210, s: 40, l: 90 } },
    { name: message('menuContentThemeAccentPresetColorTeal'), prefix: message('menuContentThemeAccentPresetModifierLightLevel2'), type: 'secondary', hsl: { h: 210, s: 60, l: 77 } },
    { name: message('menuContentThemeAccentPresetColorTeal'), prefix: message('menuContentThemeAccentPresetModifierLightLevel1'), type: 'secondary', hsl: { h: 210, s: 80, l: 63 } },
    { name: message('menuContentThemeAccentPresetColorTeal'), prefix: false, type: 'secondary', hsl: { h: 210, s: 100, l: 50 } },
    { name: message('menuContentThemeAccentPresetColorTeal'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'secondary', hsl: { h: 210, s: 80, l: 37 } },
    { name: message('menuContentThemeAccentPresetColorTeal'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'secondary', hsl: { h: 210, s: 60, l: 23 } },
    { name: message('menuContentThemeAccentPresetColorTeal'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'secondary', hsl: { h: 210, s: 40, l: 10 } },

    { name: message('menuContentThemeAccentPresetColorBlue'), prefix: message('menuContentThemeAccentPresetModifierLightLevel3'), type: 'primary', hsl: { h: 240, s: 40, l: 90 } },
    { name: message('menuContentThemeAccentPresetColorBlue'), prefix: message('menuContentThemeAccentPresetModifierLightLevel2'), type: 'primary', hsl: { h: 240, s: 60, l: 77 } },
    { name: message('menuContentThemeAccentPresetColorBlue'), prefix: message('menuContentThemeAccentPresetModifierLightLevel1'), type: 'primary', hsl: { h: 240, s: 80, l: 63 } },
    { name: message('menuContentThemeAccentPresetColorBlue'), prefix: false, type: 'primary', hsl: { h: 240, s: 100, l: 50 } },
    { name: message('menuContentThemeAccentPresetColorBlue'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'primary', hsl: { h: 240, s: 80, l: 37 } },
    { name: message('menuContentThemeAccentPresetColorBlue'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'primary', hsl: { h: 240, s: 60, l: 23 } },
    { name: message('menuContentThemeAccentPresetColorBlue'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'primary', hsl: { h: 240, s: 40, l: 10 } },

    { name: message('menuContentThemeAccentPresetColorPurple'), prefix: message('menuContentThemeAccentPresetModifierLightLevel3'), type: 'secondary', hsl: { h: 270, s: 40, l: 90 } },
    { name: message('menuContentThemeAccentPresetColorPurple'), prefix: message('menuContentThemeAccentPresetModifierLightLevel2'), type: 'secondary', hsl: { h: 270, s: 60, l: 77 } },
    { name: message('menuContentThemeAccentPresetColorPurple'), prefix: message('menuContentThemeAccentPresetModifierLightLevel1'), type: 'secondary', hsl: { h: 270, s: 80, l: 63 } },
    { name: message('menuContentThemeAccentPresetColorPurple'), prefix: false, type: 'secondary', hsl: { h: 270, s: 100, l: 50 } },
    { name: message('menuContentThemeAccentPresetColorPurple'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'secondary', hsl: { h: 270, s: 80, l: 37 } },
    { name: message('menuContentThemeAccentPresetColorPurple'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'secondary', hsl: { h: 270, s: 60, l: 23 } },
    { name: message('menuContentThemeAccentPresetColorPurple'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'secondary', hsl: { h: 270, s: 40, l: 10 } },

    { name: message('menuContentThemeAccentPresetColorMagenta'), prefix: message('menuContentThemeAccentPresetModifierLightLevel3'), type: 'primary', hsl: { h: 300, s: 40, l: 90 } },
    { name: message('menuContentThemeAccentPresetColorMagenta'), prefix: message('menuContentThemeAccentPresetModifierLightLevel2'), type: 'primary', hsl: { h: 300, s: 60, l: 77 } },
    { name: message('menuContentThemeAccentPresetColorMagenta'), prefix: message('menuContentThemeAccentPresetModifierLightLevel1'), type: 'primary', hsl: { h: 300, s: 80, l: 63 } },
    { name: message('menuContentThemeAccentPresetColorMagenta'), prefix: false, type: 'primary', hsl: { h: 300, s: 100, l: 50 } },
    { name: message('menuContentThemeAccentPresetColorMagenta'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'primary', hsl: { h: 300, s: 80, l: 37 } },
    { name: message('menuContentThemeAccentPresetColorMagenta'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'primary', hsl: { h: 300, s: 60, l: 23 } },
    { name: message('menuContentThemeAccentPresetColorMagenta'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'primary', hsl: { h: 300, s: 40, l: 10 } },

    { name: message('menuContentThemeAccentPresetColorFuchsia'), prefix: message('menuContentThemeAccentPresetModifierLightLevel3'), type: 'secondary', hsl: { h: 330, s: 40, l: 90 } },
    { name: message('menuContentThemeAccentPresetColorFuchsia'), prefix: message('menuContentThemeAccentPresetModifierLightLevel2'), type: 'secondary', hsl: { h: 330, s: 60, l: 77 } },
    { name: message('menuContentThemeAccentPresetColorFuchsia'), prefix: message('menuContentThemeAccentPresetModifierLightLevel1'), type: 'secondary', hsl: { h: 330, s: 80, l: 63 } },
    { name: message('menuContentThemeAccentPresetColorFuchsia'), prefix: false, type: 'secondary', hsl: { h: 330, s: 100, l: 50 } },
    { name: message('menuContentThemeAccentPresetColorFuchsia'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'secondary', hsl: { h: 330, s: 80, l: 37 } },
    { name: message('menuContentThemeAccentPresetColorFuchsia'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'secondary', hsl: { h: 330, s: 60, l: 23 } },
    { name: message('menuContentThemeAccentPresetColorFuchsia'), prefix: message('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'secondary', hsl: { h: 330, s: 40, l: 10 } },
  ];

};
