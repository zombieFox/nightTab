import { state } from '../../state';

export const black = {
  name: 'Black',
  color: { range: { primary: { h: 0, s: 0 } }, contrast: { start: 0, end: 100 } },
  accent: { hsl: { h: 0, s: 0, l: 80 }, rgb: { r: 204, g: 204, b: 204 } },
  font: state.get.default().theme.font,
  background: state.get.default().theme.background,
  radius: state.get.default().theme.radius,
  shadow: state.get.default().theme.shadow,
  style: 'dark',
  shade: state.get.default().theme.shade,
  opacity: state.get.default().theme.opacity,
  layout: state.get.default().theme.layout,
  header: state.get.default().theme.header,
  bookmark: state.get.default().theme.bookmark,
  group: state.get.default().theme.group,
  toolbar: state.get.default().theme.toolbar
};
