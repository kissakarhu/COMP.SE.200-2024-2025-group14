import eq from '../src/eq.js';

describe('eq', () => {
  describe('Basic functionality', () => {
    test('should return true for equal numbers', () => {
      expect(eq(5, 5)).toBe(true);
    });

    test('should return false for different numbers', () => {
      expect(eq(5, 10)).toBe(false);
    });

    test('should return true for equal strings', () => {
      expect(eq('hello', 'hello')).toBe(true);
    });

    test('should return false for different strings', () => {
      expect(eq('hello', 'world')).toBe(false);
    });

    test('should return true for same object references', () => {
      const obj = { a: 1 };
      expect(eq(obj, obj)).toBe(true);
    });

    test('should return false for different object references with same content', () => {
      expect(eq({ a: 1 }, { a: 1 })).toBe(false);
    });
  });
  describe('Edge cases', () => {
    test('should return true for both null values', () => {
      expect(eq(null, null)).toBe(true);
    });
  });
  describe('Special values', () => {
    test('should return true for both NaN values', () => {
      expect(eq(NaN, NaN)).toBe(true);
    });
  });
  describe('Invalid inputs', () => {
    test('should return false for number and string', () => {
      expect(eq(5, '5')).toBe(false);
    });

    test('should return false for object and null', () => {
      expect(eq({}, null)).toBe(false);
    });

    test('should return false for undefined and null', () => {
      expect(eq(undefined, null)).toBe(false);
    });
  });
});
