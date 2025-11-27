import isEmpty from '../src/isEmpty.js';

describe('sEmpty', () => {
  describe('Basic functionality', () => {
    test('should return true for empty object', () => {
      expect(isEmpty({})).toBe(true);
    });
    test('should return false for non-empty object', () => {
      expect(isEmpty({ 'a': 1 })).toBe(false);
    });
    test('should return true for empty array', () => {
      expect(isEmpty([])).toBe(true);
    });
    test('should return false for non-empty array', () => {
      expect(isEmpty([1,2,3])).toBe(false);
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
    test('should return true for empty set', () => {
      expect(isEmpty(new Set())).toBe(true);
    });
    test('should return false for non-empty set', () => {
      const set = new Set();
      set.add(1);
      expect(isEmpty(set)).toBe(false);
    });
    test('should return true for empty typed array', () => {
      expect(isEmpty(new Uint8Array())).toBe(true);
    });
    test('should return false for non-empty typed array', () => {
      expect(isEmpty(new Uint8Array([1, 2, 3]))).toBe(false);
    });
    test('should return true for empty arguments object', () => {
      (function() {
        expect(isEmpty(arguments)).toBe(true);
      })();
    });
    test('should return false for non-empty arguments object', () => {
      (function() {
        expect(isEmpty(arguments)).toBe(false);
      })(1, 2, 3);
    });
    test('should return true for empty string object', () => {
      expect(isEmpty(new String(''))).toBe(true);
    });
    test('should return false for non-empty string object', () => {
      expect(isEmpty(new String('abc'))).toBe(false);
    })
    test('should return true for array-like object with splice method', () => {
      const arrayLike = { length: 0, splice: Array.prototype.splice};
      expect(isEmpty(arrayLike)).toBe(true);
    });
    test('should return false for non-empty array-like object with splice', () => {
      const arrayLike = { 0: 'a', length: 1, splice: Array.prototype.splice};
      expect(isEmpty(arrayLike)).toBe(false);
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
    test('should return true for prototype objects', () => {
      expect(isEmpty(Object.prototype)).toBe(true);
      expect(isEmpty(Array.prototype)).toBe(true);
    });
    test('should return true for objects with only non-enumerable properties', () => {
      const obj = Object.create({}, {
        hidden: { value: 'secret', enumerable: false }
      });
      expect(isEmpty(obj)).toBe(true);
    });
    test('should return true for objects with only inherited properties', () => {
      const proto = { inherited: 'property' };
      const obj = Object.create(proto);
      expect(isEmpty(obj)).toBe(true);
    });
    test('should return false for objects with own properties and inherited properties', () => {
      const proto = { inherited: 'property' };
      const obj = Object.create(proto);
      obj.own = 'value';
      expect(isEmpty(obj)).toBe(false);
    });
  });

  describe('Special values', () => {
    test('should return true for zero', () => {
      expect(isEmpty(0)).toBe(true);
    }); 
    test('should return true for false boolean', () => {
      expect(isEmpty(false)).toBe(true);
    });
    test('should return true for true boolean', () => {
      expect(isEmpty(true)).toBe(true);
    });
    test ('should return true for function', () => {
      expect(isEmpty(function() {})).toBe(true);
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
