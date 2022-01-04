import { message } from '../message';

export const accentPreset = {};

accentPreset.get = () => {

  return [
    { name: message.get('menuContentThemeAccentPresetColorGrey'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel3'), type: 'grey', hsl: { h: 0, s: 0, l: 90 } },
    { name: message.get('menuContentThemeAccentPresetColorGrey'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel2'), type: 'grey', hsl: { h: 0, s: 0, l: 77 } },
    { name: message.get('menuContentThemeAccentPresetColorGrey'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel1'), type: 'grey', hsl: { h: 0, s: 0, l: 63 } },
    { name: message.get('menuContentThemeAccentPresetColorGrey'), prefix: false, type: 'grey', hsl: { h: 0, s: 0, l: 50 } },
    { name: message.get('menuContentThemeAccentPresetColorGrey'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'grey', hsl: { h: 0, s: 0, l: 37 } },
    { name: message.get('menuContentThemeAccentPresetColorGrey'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'grey', hsl: { h: 0, s: 0, l: 23 } },
    { name: message.get('menuContentThemeAccentPresetColorGrey'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'grey', hsl: { h: 0, s: 0, l: 10 } },

    { name: message.get('menuContentThemeAccentPresetColorRed'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel3'), type: 'primary', hsl: { h: 0, s: 40, l: 90 } },
    { name: message.get('menuContentThemeAccentPresetColorRed'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel2'), type: 'primary', hsl: { h: 0, s: 60, l: 77 } },
    { name: message.get('menuContentThemeAccentPresetColorRed'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel1'), type: 'primary', hsl: { h: 0, s: 80, l: 63 } },
    { name: message.get('menuContentThemeAccentPresetColorRed'), prefix: false, type: 'primary', hsl: { h: 0, s: 100, l: 50 } },
    { name: message.get('menuContentThemeAccentPresetColorRed'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'primary', hsl: { h: 0, s: 80, l: 37 } },
    { name: message.get('menuContentThemeAccentPresetColorRed'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'primary', hsl: { h: 0, s: 60, l: 23 } },
    { name: message.get('menuContentThemeAccentPresetColorRed'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'primary', hsl: { h: 0, s: 40, l: 10 } },

    { name: message.get('menuContentThemeAccentPresetColorOrange'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel3'), type: 'secondary', hsl: { h: 30, s: 40, l: 90 } },
    { name: message.get('menuContentThemeAccentPresetColorOrange'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel2'), type: 'secondary', hsl: { h: 30, s: 60, l: 77 } },
    { name: message.get('menuContentThemeAccentPresetColorOrange'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel1'), type: 'secondary', hsl: { h: 30, s: 80, l: 63 } },
    { name: message.get('menuContentThemeAccentPresetColorOrange'), prefix: false, type: 'secondary', hsl: { h: 30, s: 100, l: 50 } },
    { name: message.get('menuContentThemeAccentPresetColorOrange'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'secondary', hsl: { h: 30, s: 80, l: 37 } },
    { name: message.get('menuContentThemeAccentPresetColorOrange'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'secondary', hsl: { h: 30, s: 60, l: 23 } },
    { name: message.get('menuContentThemeAccentPresetColorOrange'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'secondary', hsl: { h: 30, s: 40, l: 10 } },

    { name: message.get('menuContentThemeAccentPresetColorYellow'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel3'), type: 'primary', hsl: { h: 60, s: 40, l: 90 } },
    { name: message.get('menuContentThemeAccentPresetColorYellow'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel2'), type: 'primary', hsl: { h: 60, s: 60, l: 77 } },
    { name: message.get('menuContentThemeAccentPresetColorYellow'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel1'), type: 'primary', hsl: { h: 60, s: 80, l: 63 } },
    { name: message.get('menuContentThemeAccentPresetColorYellow'), prefix: false, type: 'primary', hsl: { h: 60, s: 100, l: 50 } },
    { name: message.get('menuContentThemeAccentPresetColorYellow'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'primary', hsl: { h: 60, s: 80, l: 37 } },
    { name: message.get('menuContentThemeAccentPresetColorYellow'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'primary', hsl: { h: 60, s: 60, l: 23 } },
    { name: message.get('menuContentThemeAccentPresetColorYellow'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'primary', hsl: { h: 60, s: 40, l: 10 } },

    { name: message.get('menuContentThemeAccentPresetColorLime'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel3'), type: 'secondary', hsl: { h: 90, s: 40, l: 90 } },
    { name: message.get('menuContentThemeAccentPresetColorLime'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel2'), type: 'secondary', hsl: { h: 90, s: 60, l: 77 } },
    { name: message.get('menuContentThemeAccentPresetColorLime'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel1'), type: 'secondary', hsl: { h: 90, s: 80, l: 63 } },
    { name: message.get('menuContentThemeAccentPresetColorLime'), prefix: false, type: 'secondary', hsl: { h: 90, s: 100, l: 50 } },
    { name: message.get('menuContentThemeAccentPresetColorLime'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'secondary', hsl: { h: 90, s: 80, l: 37 } },
    { name: message.get('menuContentThemeAccentPresetColorLime'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'secondary', hsl: { h: 90, s: 60, l: 23 } },
    { name: message.get('menuContentThemeAccentPresetColorLime'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'secondary', hsl: { h: 90, s: 40, l: 10 } },

    { name: message.get('menuContentThemeAccentPresetColorGreen'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel3'), type: 'primary', hsl: { h: 120, s: 40, l: 90 } },
    { name: message.get('menuContentThemeAccentPresetColorGreen'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel2'), type: 'primary', hsl: { h: 120, s: 60, l: 77 } },
    { name: message.get('menuContentThemeAccentPresetColorGreen'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel1'), type: 'primary', hsl: { h: 120, s: 80, l: 63 } },
    { name: message.get('menuContentThemeAccentPresetColorGreen'), prefix: false, type: 'primary', hsl: { h: 120, s: 100, l: 50 } },
    { name: message.get('menuContentThemeAccentPresetColorGreen'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'primary', hsl: { h: 120, s: 80, l: 37 } },
    { name: message.get('menuContentThemeAccentPresetColorGreen'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'primary', hsl: { h: 120, s: 60, l: 23 } },
    { name: message.get('menuContentThemeAccentPresetColorGreen'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'primary', hsl: { h: 120, s: 40, l: 10 } },

    { name: message.get('menuContentThemeAccentPresetColorAqua'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel3'), type: 'secondary', hsl: { h: 150, s: 40, l: 90 } },
    { name: message.get('menuContentThemeAccentPresetColorAqua'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel2'), type: 'secondary', hsl: { h: 150, s: 60, l: 77 } },
    { name: message.get('menuContentThemeAccentPresetColorAqua'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel1'), type: 'secondary', hsl: { h: 150, s: 80, l: 63 } },
    { name: message.get('menuContentThemeAccentPresetColorAqua'), prefix: false, type: 'secondary', hsl: { h: 150, s: 100, l: 50 } },
    { name: message.get('menuContentThemeAccentPresetColorAqua'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'secondary', hsl: { h: 150, s: 80, l: 37 } },
    { name: message.get('menuContentThemeAccentPresetColorAqua'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'secondary', hsl: { h: 150, s: 60, l: 23 } },
    { name: message.get('menuContentThemeAccentPresetColorAqua'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'secondary', hsl: { h: 150, s: 40, l: 10 } },

    { name: message.get('menuContentThemeAccentPresetColorCyan'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel3'), type: 'primary', hsl: { h: 180, s: 40, l: 90 } },
    { name: message.get('menuContentThemeAccentPresetColorCyan'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel2'), type: 'primary', hsl: { h: 180, s: 60, l: 77 } },
    { name: message.get('menuContentThemeAccentPresetColorCyan'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel1'), type: 'primary', hsl: { h: 180, s: 80, l: 63 } },
    { name: message.get('menuContentThemeAccentPresetColorCyan'), prefix: false, type: 'primary', hsl: { h: 180, s: 100, l: 50 } },
    { name: message.get('menuContentThemeAccentPresetColorCyan'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'primary', hsl: { h: 180, s: 80, l: 37 } },
    { name: message.get('menuContentThemeAccentPresetColorCyan'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'primary', hsl: { h: 180, s: 60, l: 23 } },
    { name: message.get('menuContentThemeAccentPresetColorCyan'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'primary', hsl: { h: 180, s: 40, l: 10 } },

    { name: message.get('menuContentThemeAccentPresetColorTeal'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel3'), type: 'secondary', hsl: { h: 210, s: 40, l: 90 } },
    { name: message.get('menuContentThemeAccentPresetColorTeal'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel2'), type: 'secondary', hsl: { h: 210, s: 60, l: 77 } },
    { name: message.get('menuContentThemeAccentPresetColorTeal'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel1'), type: 'secondary', hsl: { h: 210, s: 80, l: 63 } },
    { name: message.get('menuContentThemeAccentPresetColorTeal'), prefix: false, type: 'secondary', hsl: { h: 210, s: 100, l: 50 } },
    { name: message.get('menuContentThemeAccentPresetColorTeal'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'secondary', hsl: { h: 210, s: 80, l: 37 } },
    { name: message.get('menuContentThemeAccentPresetColorTeal'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'secondary', hsl: { h: 210, s: 60, l: 23 } },
    { name: message.get('menuContentThemeAccentPresetColorTeal'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'secondary', hsl: { h: 210, s: 40, l: 10 } },

    { name: message.get('menuContentThemeAccentPresetColorBlue'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel3'), type: 'primary', hsl: { h: 240, s: 40, l: 90 } },
    { name: message.get('menuContentThemeAccentPresetColorBlue'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel2'), type: 'primary', hsl: { h: 240, s: 60, l: 77 } },
    { name: message.get('menuContentThemeAccentPresetColorBlue'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel1'), type: 'primary', hsl: { h: 240, s: 80, l: 63 } },
    { name: message.get('menuContentThemeAccentPresetColorBlue'), prefix: false, type: 'primary', hsl: { h: 240, s: 100, l: 50 } },
    { name: message.get('menuContentThemeAccentPresetColorBlue'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'primary', hsl: { h: 240, s: 80, l: 37 } },
    { name: message.get('menuContentThemeAccentPresetColorBlue'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'primary', hsl: { h: 240, s: 60, l: 23 } },
    { name: message.get('menuContentThemeAccentPresetColorBlue'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'primary', hsl: { h: 240, s: 40, l: 10 } },

    { name: message.get('menuContentThemeAccentPresetColorPurple'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel3'), type: 'secondary', hsl: { h: 270, s: 40, l: 90 } },
    { name: message.get('menuContentThemeAccentPresetColorPurple'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel2'), type: 'secondary', hsl: { h: 270, s: 60, l: 77 } },
    { name: message.get('menuContentThemeAccentPresetColorPurple'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel1'), type: 'secondary', hsl: { h: 270, s: 80, l: 63 } },
    { name: message.get('menuContentThemeAccentPresetColorPurple'), prefix: false, type: 'secondary', hsl: { h: 270, s: 100, l: 50 } },
    { name: message.get('menuContentThemeAccentPresetColorPurple'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'secondary', hsl: { h: 270, s: 80, l: 37 } },
    { name: message.get('menuContentThemeAccentPresetColorPurple'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'secondary', hsl: { h: 270, s: 60, l: 23 } },
    { name: message.get('menuContentThemeAccentPresetColorPurple'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'secondary', hsl: { h: 270, s: 40, l: 10 } },

    { name: message.get('menuContentThemeAccentPresetColorMagenta'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel3'), type: 'primary', hsl: { h: 300, s: 40, l: 90 } },
    { name: message.get('menuContentThemeAccentPresetColorMagenta'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel2'), type: 'primary', hsl: { h: 300, s: 60, l: 77 } },
    { name: message.get('menuContentThemeAccentPresetColorMagenta'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel1'), type: 'primary', hsl: { h: 300, s: 80, l: 63 } },
    { name: message.get('menuContentThemeAccentPresetColorMagenta'), prefix: false, type: 'primary', hsl: { h: 300, s: 100, l: 50 } },
    { name: message.get('menuContentThemeAccentPresetColorMagenta'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'primary', hsl: { h: 300, s: 80, l: 37 } },
    { name: message.get('menuContentThemeAccentPresetColorMagenta'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'primary', hsl: { h: 300, s: 60, l: 23 } },
    { name: message.get('menuContentThemeAccentPresetColorMagenta'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'primary', hsl: { h: 300, s: 40, l: 10 } },

    { name: message.get('menuContentThemeAccentPresetColorFuchsia'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel3'), type: 'secondary', hsl: { h: 330, s: 40, l: 90 } },
    { name: message.get('menuContentThemeAccentPresetColorFuchsia'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel2'), type: 'secondary', hsl: { h: 330, s: 60, l: 77 } },
    { name: message.get('menuContentThemeAccentPresetColorFuchsia'), prefix: message.get('menuContentThemeAccentPresetModifierLightLevel1'), type: 'secondary', hsl: { h: 330, s: 80, l: 63 } },
    { name: message.get('menuContentThemeAccentPresetColorFuchsia'), prefix: false, type: 'secondary', hsl: { h: 330, s: 100, l: 50 } },
    { name: message.get('menuContentThemeAccentPresetColorFuchsia'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel1'), type: 'secondary', hsl: { h: 330, s: 80, l: 37 } },
    { name: message.get('menuContentThemeAccentPresetColorFuchsia'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel2'), type: 'secondary', hsl: { h: 330, s: 60, l: 23 } },
    { name: message.get('menuContentThemeAccentPresetColorFuchsia'), prefix: message.get('menuContentThemeAccentPresetModifierDarkLevel3'), type: 'secondary', hsl: { h: 330, s: 40, l: 10 } },
  ];

};
