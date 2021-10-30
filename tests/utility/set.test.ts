//@ts-nocheck
import { set } from '../../src/utility/set';

let object;

beforeEach(() => {
  object = { theme: { accent: { rgb: { r: 'Hello there!' } } } };
});


/**
 * It seems, unlike get, set doesn't mutate objects when it doesn't find keys
 */
describe('set.js', () => {
  test('should set update an object as expected', () => {
    const path = 'theme.accent.rgb.r';
    const result = 'General Kenobi!';

    set({ object, path, value: 'General Kenobi!' });
    expect(object.theme.accent.rgb.r).toBe(result);
  });

  test('should get receive an incorrect path', () => {
    const path = 'theme.accent.rgb.d';

    expect(set({ object, path })).toBe(false);
    expect(object.theme.accent.rgb.d).toBe(undefined);
  });

  test('should get receive an incorrect intermediate path', () => {
    const path = 'theme.accent.wrong.r';

    expect(set({ object, path })).toBe(false);
    expect(object.theme.accent.wrong).toStrictEqual(undefined);
  });

  test('should get receive an incorrect path including a number', () => {
    const path = 'theme.accent.1.r';

    expect(set({ object, path })).toBe(false);
    expect(object.theme.accent[1]).toBe(undefined);
  });

  test('should get receive an null prop', () => {
    const path = 'theme.accent.rgb.r';

    expect(set({ object, path: null })).toBe(false);
    expect(set({ object: null, path })).toBe(false);
  });
});
