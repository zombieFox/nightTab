import { makePath } from '../../src/utility/makePath';

test('makePath correctly parses the dot notation', () => {
  const input = 'theme.accent.rgb.r';
  const result = ['theme', 'accent', 'rgb', 'r'];
  expect(makePath(input)).toStrictEqual(result);
});