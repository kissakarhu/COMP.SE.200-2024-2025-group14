import map from '../src/map.js';

describe('map', () => {
    test('should map over an array and apply the iteratee function', () => {
        const array = [1, 2, 3];
        const iteratee = (n) => n * 2;
        const result = map(array, iteratee);
        expect(result).toEqual([2, 4, 6]);
    });

    test('should handle array with single element', () => {
        const array = [5];
        const iteratee = (n) => n + 3;
        const result = map(array, iteratee);
        expect(result).toEqual([8]);
    });

    test('should handle empty array', () => {
        const array = [];
        const iteratee = (n) => n * 2;
        const result = map(array, iteratee);
        expect(result).toEqual([]);
    });

    test('should return empty array when input is null', () => {
        const array = null;
        const iteratee = (n) => n * 2;
        const result = map(array, iteratee);
        expect(result).toEqual([]);
    });

    test('should handle null values in the array', () => {
        const array = [1, null, 3];
        const iteratee = (n) => (n === null ? 0 : n * 2);
        const result = map(array, iteratee);
        expect(result).toEqual([2, 0, 6]);
    });

    test('should handle undefined values in the array', () => {
        const array = [1, undefined, 3];
        const iteratee = (n) => (n === undefined ? 0 : n * 2);
        const result = map(array, iteratee);
        expect(result).toEqual([2, 0, 6]);
    });

    test('should handle different types of iteratee functions', () => {
        const array = ['a', 'b', 'c'];
        const iteratee = (s) => s.toUpperCase();
        const result = map(array, iteratee);
        expect(result).toEqual(['A', 'B', 'C']);
    });

    test('should create new array without modifying the original', () => {
        const array = [1, 2, 3];
        const iteratee = (n) => n * 2;
        const result = map(array, iteratee);
        expect(result).toEqual([2, 4, 6]);
        expect(array).toEqual([1, 2, 3]);
    });

    test('should handle objects', () => {
        const array = [{ a: 1 }, { a: 2 }, { a: 3 }];
        const iteratee = (obj) => ({ a: obj.a * 2 });
        const result = map(array, iteratee);
        expect(result).toEqual([{ a: 2 }, { a: 4 }, { a: 6 }]);
    });
});