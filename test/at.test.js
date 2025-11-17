import at from '../src/at.js';

describe('at', () => {
  describe('Basic functionality', () => {
    test('should pick values at specified paths from object', () => {
      const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
      expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual([3, 4]);
    });

    test('should handle single path as string', () => {
      const object = { 'a': 1, 'b': 2, 'c': 3 };
      expect(at(object, 'a')).toEqual([1]);
    });

    test('should handle multiple separate path arguments', () => {
      const object = { 'a': 1, 'b': 2, 'c': 3 };
      expect(at(object, 'a', 'b', 'c')).toEqual([1, 2, 3]);
    });

    test('should handle array of paths', () => {
      const object = { 'a': 1, 'b': 2, 'c': 3 };
      expect(at(object, ['a', 'b'])).toEqual([1, 2]);
    });
  });

  describe('Nested objects and arrays', () => {
    test('should access deeply nested properties', () => {
      const object = {
        user: {
          profile: {
            name: 'John',
            age: 30
          }
        }
      };
      expect(at(object, 'user.profile.name')).toEqual(['John']);
    });

    test('should access array elements by index', () => {
      const object = { items: ['first', 'second', 'third'] };
      expect(at(object, 'items[0]', 'items[2]')).toEqual(['first', 'third']);
    });

    test('should handle mixed nested paths', () => {
      const object = {
        data: [
          { id: 1, value: 'a' },
          { id: 2, value: 'b' }
        ]
      };
      expect(at(object, 'data[0].value', 'data[1].id')).toEqual(['a', 2]);
    });
  });

  describe('Edge cases', () => {
    test('should return undefined for non-existent paths', () => {
      const object = { 'a': 1 };
      expect(at(object, 'b')).toEqual([undefined]);
    });

    test('should handle empty paths', () => {
      const object = { 'a': 1 };
      expect(at(object, [])).toEqual([]);
    });

    test('should handle null object', () => {
      expect(at(null, 'a')).toEqual([undefined]);
    });

    test('should handle undefined object', () => {
      expect(at(undefined, 'a')).toEqual([undefined]);
    });

    test('should handle empty object', () => {
      const object = {};
      expect(at(object, 'a', 'b')).toEqual([undefined, undefined]);
    });

    test('should handle no paths provided', () => {
      const object = { 'a': 1, 'b': 2 };
      expect(at(object)).toEqual([]);
    });
  });

  describe('Special values', () => {
    test('should pick null values', () => {
      const object = { 'a': null };
      expect(at(object, 'a')).toEqual([null]);
    });

    test('should pick false values', () => {
      const object = { 'a': false };
      expect(at(object, 'a')).toEqual([false]);
    });

    test('should pick zero values', () => {
      const object = { 'a': 0 };
      expect(at(object, 'a')).toEqual([0]);
    });

    test('should pick empty string values', () => {
      const object = { 'a': '' };
      expect(at(object, 'a')).toEqual(['']);
    });
  });

  describe('Complex scenarios', () => {
    test('should handle multiple nested arrays', () => {
      const object = {
        matrix: [
          [1, 2, 3],
          [4, 5, 6]
        ]
      };
      expect(at(object, 'matrix[0][1]', 'matrix[1][2]')).toEqual([2, 6]);
    });

    test('should handle objects with numeric keys', () => {
      const object = { '0': 'a', '1': 'b', '2': 'c' };
      expect(at(object, '0', '2')).toEqual(['a', 'c']);
    });

    test('should handle mixed array and object notation', () => {
      const object = {
        users: [
          { name: 'Alice', scores: [10, 20, 30] },
          { name: 'Bob', scores: [15, 25, 35] }
        ]
      };
      expect(at(object, 'users[0].scores[2]', 'users[1].name')).toEqual([30, 'Bob']);
    });
  });
});