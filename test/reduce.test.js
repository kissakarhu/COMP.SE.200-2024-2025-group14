import reduce from '../src/reduce.js';

describe('reduce', () => {
    test('should reduce array with initial value', () => {
        const array = [1, 2, 3, 4];
        const result = reduce(array, (sum, n) => sum + n, 0);
        expect(result).toBe(10);
    });
    
    test('should reduce array without any initial value', () => {
        const array = [1, 2, 3, 4];
        const result = reduce(array, (sum, n) => sum + n);
        expect(result).toBe(10);
    });

    test('should handle empty array with initial value', () => {
        const array = [];
        const result = reduce(array, (sum, n) => sum + n, 10);
        expect(result).toBe(10);
    });

    test('should handle array with null values', () => {
        const array = [1, null, 3, null];
        const result = reduce(array, (sum, n) => sum + (n || 0), 0);
        expect(result).toBe(4);
    });

    test('should handle single element array without initial value', () => {
        const array = [42];
        const result = reduce(array, (sum, n) => sum + n);
        expect(result).toBe(42);
    });

    test('should reduce object values', () => {
        const object = { a: 1, b: 2, c: 3 };
        const result = reduce(object, (sum, n) => sum + n, 0);
        expect(result).toBe(6);
    });

    test('should reduce object to grouped values', () => {
        const object = { a: 'apple', b: 'banana', c: 'apricot' };
        const result = reduce(object, (group, value) => {
            const firstLetter = value[0];
            if (!group[firstLetter]) {
                group[firstLetter] = [];
            }
            group[firstLetter].push(value);
            return group;
        }, {});
        expect(result).toEqual({
            a: ['apple', 'apricot'],
            b: ['banana']
        });
    });

    test('should concatenate strings in array', () => {
        const array = ['Hello', ' ', 'World', '!'];
        const result = reduce(array, (str, s) => str + s, '');
        expect(result).toBe('Hello World!');
    });

    test('should handle initial value of different type', () => {
        const array = [1, 2, 3];
        const result = reduce(array, (str, n) => str + n.toString(), 'Numbers: ');
        expect(result).toBe('Numbers: 123');
    });

    test('should handle situations where iteratee is not a function', () => {
        const array = [1, 2, 3];
        expect(() => reduce(array, null, 0)).toThrow(TypeError);
    });

    test('should handle undefined accumulator', () => {
        const array = [1, 2, 3];
        const result = reduce(array, (sum, n) => sum + n, undefined);
        expect(result).toBeNaN();
    });

    test('should handle null collection', () => {
        const result = reduce(null, (sum, n) => sum + n, 10);
        expect(result).toBe(10);
    });

    test('should handle undefined collection', () => {
        const result = reduce(undefined, (sum, n) => sum + n, 10);
        expect(result).toBe(10);
    });
});