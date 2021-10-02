import { customThemeDefault } from '../customThemeDefault';

export const StagedCustomTheme = function (customThemeData) {

  this.theme = customThemeData || JSON.parse(JSON.stringify(customThemeDefault()));

  this.position = 0;

};
