import { state } from '../../state';

export const nighttab = {
  name: 'nightTab (default)',
  color: state.get.default().theme.color,
  accent: { hsl: state.get.default().theme.accent.hsl, rgb: state.get.default().theme.accent.rgb },
  font: state.get.default().theme.font,
  background: state.get.default().theme.background,
  radius: state.get.default().theme.radius,
  shadow: state.get.default().theme.shadow,
  style: state.get.default().theme.style,
  shade: state.get.default().theme.shade,
  opacity: state.get.default().theme.opacity,
  layout: state.get.default().theme.layout,
  header: state.get.default().theme.header,
  bookmark: state.get.default().theme.bookmark,
  group: state.get.default().theme.group,
  toolbar: state.get.default().theme.toolbar
};
