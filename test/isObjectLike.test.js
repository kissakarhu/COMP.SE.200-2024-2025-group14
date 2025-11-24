import isObjectLike from '../src/isObjectLike.js';

describe('isObjectLike', () => {
    describe('object-like values', () => {
        test('should return true for plain objects', () => {
            expect(isObjectLike({})).toBe(true);
            expect(isObjectLike({ a: 1, b: 2 })).toBe(true);
        });

        test('should return true for arrays', () => {
            expect(isObjectLike([])).toBe(true);
            expect(isObjectLike([1, 2, 3])).toBe(true);
        });

        test('should return true for maps', () => {
            expect(isObjectLike(new Map())).toBe(true);
        });

        test('should return true for dates', () => {
            expect(isObjectLike(new Date())).toBe(true);
        });

        test('should return true for error objects', () => {
            expect(isObjectLike(new Error())).toBe(true);
        });
    });

    describe('non-object-like values', () => {
        test('should return false for null', () => {
            expect(isObjectLike(null)).toBe(false);
        });

        test('should return false for undefined', () => {
            expect(isObjectLike(undefined)).toBe(false);
        });

        test('should return false for numbers', () => {
            expect(isObjectLike(42)).toBe(false);
            expect(isObjectLike(0)).toBe(false);
            expect(isObjectLike(-7)).toBe(false);
            expect(isObjectLike(NaN)).toBe(false);
            expect(isObjectLike(Infinity)).toBe(false);
        });

        test('should return false for strings', () => {
            expect(isObjectLike('hello')).toBe(false);
        });

        test('should return false for booleans', () => {
            expect(isObjectLike(true)).toBe(false);
        });

        test('should return false for functions', () => {
            expect(isObjectLike(function() {})).toBe(false);
        });
    });
});