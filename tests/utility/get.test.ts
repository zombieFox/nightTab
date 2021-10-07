//@ts-nocheck get has no types, for now
import { get } from '../../src/utility/get';

let object;

beforeEach(() => {
  object = { theme: { accent: { rgb: { r: 'hello there' } } } };
});

/**
 * For some reason get mutates the object its trying to access,
 * might be a good idea to remove this "feature".
 */
describe('get.js', () => {
  test('should get receive both props', () => {
    const path = 'theme.accent.rgb.r';
    const result = 'hello there';

    expect(get({ object, path })).toBe(result);
  });

  test('should get receive an incorrect path', () => {
    const path = 'theme.accent.rgb.d';

    expect(get({ object, path })).toBe('');
    expect(object.theme.accent.rgb.d).toStrictEqual(undefined);
  });

  test('should get receive an incorrect intermediate path', () => {
    const path = 'theme.accent.wrong.r';

    expect(get({ object, path })).toBe('');
    expect(object.theme.accent.wrong).toStrictEqual({});
  });

  test('should get receive an incorrect intermediate path as a number', () => {
    const path = 'theme.accent.1.r';

    expect(get({ object, path })).toBe('');
    expect(object.theme.accent[1]).toStrictEqual([]);
  });

  test('should get receive an null prop', () => {
    const path = 'theme.accent.rgb.r';

    expect(get({ object, path: null })).toBe(false);
    expect(get({ object: null, path })).toBe(false);
  });
});
