import toString from '../src/toString.js';

describe('toString', () => {
    describe('string inputs', () => {
        test('should return the same string', () => {
            expect(toString('hello')).toBe('hello');
        });

        test('should handle strings with special characters', () => {
            expect(toString('hello world!')).toBe('hello world!');
        });

        test('should return empty string as is', () => {
            expect(toString('')).toBe('');
        });
    });

    describe('null and undefined inputs', () => {
        test('should return empty string for null', () => {
            expect(toString(null)).toBe('');
        });

        test('should return empty string for undefined', () => {
            expect(toString(undefined)).toBe('');
        });
    });

    describe('number inputs', () => {
        test('should convert numbers to strings', () => {
            expect(toString(123)).toBe('123');
            expect(toString(123.45)).toBe('123.45');
        });

        test('should preserve the sign of -0', () => {
            expect(toString(-0)).toBe('-0');
        });

        test('should convert 0 to string', () => {
            expect(toString(0)).toBe('0');
        });

        test('should convert negative numbers to strings', () => {
            expect(toString(-456)).toBe('-456');
            expect(toString(-78.9)).toBe('-78.9');
        });

        test('should convert Infinity and -Infinity to strings', () => {
            expect(toString(Infinity)).toBe('Infinity');
            expect(toString(-Infinity)).toBe('-Infinity');
        });

        test('should convert NaN to string', () => {
            expect(toString(NaN)).toBe('NaN');
        });
    });

    describe('array inputs', () => {
        test('should convert simple array to comma-separated string', () => {
            expect(toString([1, 2, 3])).toBe('1,2,3');
        });

        test('should handle empty array', () => {
            expect(toString([])).toBe('');
        });

        test('should handle arrays with null values', () => {
            expect(toString([1, null, 3])).toBe('1,,3');
        });

        test('should handle arrays with undefined values', () => {
            expect(toString([1, undefined, 3])).toBe('1,,3');
        });

        test('should handle nested arrays', () => {
            expect(toString([1, [2, 3], 4])).toBe('1,2,3,4');
        });

        test('should handle arrays with different types', () => {
            expect(toString([1, 'two', null, undefined, [3, 4]])).toBe('1,two,,,3,4');
        });
    });

    describe('symbol inputs', () => {
        test('should convert symbols to strings', () => {
            const sym = Symbol('test');
            expect(toString(sym)).toBe('Symbol(test)');
        });

        test('should handle symbols without description', () => {
            const sym = Symbol();
            expect(toString(sym)).toBe('Symbol()');
        });
    });

    describe('boolean inputs', () => {
        test('should convert true to string', () => {
            expect(toString(true)).toBe('true');
        });

        test('should convert false to string', () => {
            expect(toString(false)).toBe('false');
        });
    });

    describe('object inputs', () => {
        test('should convert plain objects to string', () => {
            expect(toString({ a: 1, b: 2 })).toBe('[object Object]');
        });

        test('should convert Date objects to string', () => {
            const date = new Date('2025-11-21T10:29:00Z');
            expect(toString(date)).toBe(date.toString());
        });
        
        test('should convert functions to string', () => {
            const func = function test() {};
            expect(toString(func)).toContain('function');
        });
    });
});