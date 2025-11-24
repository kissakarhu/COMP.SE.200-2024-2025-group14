import isEmpty from '../src/isEmpty.js';

describe('sEmpty', () => {
  describe('Basic functionality', () => {
    test('should return true for empty object', () => {
      expect(isEmpty({})).toBe(true);
    });
    test('should return false for non-empty object', () => {
      expect(isEmpty({ a: 1 })).toBe(false);
    });
    test('should return true for empty array', () => {
      expect(isEmpty([])).toBe(true);
    });
    test('should return false for non-empty array', () => {
      expect(isEmpty([1])).toBe(false);
    });
    test ('should return true for empty structure', () => {
      expect(isEmpty('')).toBe(true);
    });
    test('should return false for non-empty structure', () => {
      expect(isEmpty('abc')).toBe(false);
    });
    test('should return true for empty vector', () => {
      expect(isEmpty(new Map())).toBe(true);
    });
    test('should return false for non-empty vector', () => {
      const map = new Map();
      map.set('a', 1);
      expect(isEmpty(map)).toBe(false);
    });
  });

  describe('Edge cases', () => {
    test('should return true for null', () => {
      expect(isEmpty(null)).toBe(true);
    });   
    test('should return true for undefined', () => {
      expect(isEmpty(undefined)).toBe(true);
    });
    test('should return true for NaN', () => {
      expect(isEmpty(NaN)).toBe(true);
    });
  });

  describe('Special values', () => {
    test('should return false for zero', () => {
      expect(isEmpty(0)).toBe(true);
    }); 
    test('should return false for false boolean', () => {
      expect(isEmpty(false)).toBe(true);
    });
    test('should return false for true boolean', () => {
      expect(isEmpty(true)).toBe(true);
    });
  });

  describe('Invalid inputs', () => {
    test('should return true for number input', () => {
      expect(isEmpty(42)).toBe(true);
    });
    test('should return true for string input', () => {
      expect(isEmpty('hello')).toBe(false);
    });
  });
});
