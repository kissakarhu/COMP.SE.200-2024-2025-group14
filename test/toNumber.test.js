import toNumber from '../src/toNumber.js';

describe('toNumber', () => {
    describe('number inputs', () => {
        test('should return the same number for number inputs', () => {
            expect(toNumber(3.2)).toBe(3.2);
            expect(toNumber(42)).toBe(42);
            expect(toNumber(0)).toBe(0);
            expect(toNumber(-7)).toBe(-7);
        });

        test('should handle Number.MIN_VALUE', () => {
            expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
        });

        test('should handle Number.MAX_VALUE', () => {
            expect(toNumber(Number.MAX_VALUE)).toBe(Number.MAX_VALUE);
        });

        test('should handle Infinity and -Infinity', () => {
            expect(toNumber(Infinity)).toBe(Infinity);
            expect(toNumber(-Infinity)).toBe(-Infinity);
        });

        test('should handle NaN', () => {
            expect(toNumber(NaN)).toBeNaN();
        });
    });

    describe('string inputs', () => {
        test('should convert numeric strings to numbers', () => {
            expect(toNumber('3.2')).toBe(3.2);
            expect(toNumber('42')).toBe(42);
            expect(toNumber('-5')).toBe(-5);
            expect(toNumber('0')).toBe(0);
        });

        test('should convert empty string to 0', () => {
            expect(toNumber('')).toBe(0);
        });

        test('should handle strings with leading/trailing whitespace', () => {
            expect(toNumber('  3.2  ')).toBe(3.2);
            expect(toNumber('\n42\t')).toBe(42);
            expect(toNumber('   -5   ')).toBe(-5);
        });

        test('should convert binary strings to numbers', () => {
            expect(toNumber('0b101')).toBe(5);
            expect(toNumber('0b1111')).toBe(15);
        });

        test('should convert octal strings to numbers', () => {
            expect(toNumber('0o10')).toBe(8);
            expect(toNumber('0o17')).toBe(15);
        });

        test('should convert hexadecimal strings to numbers', () => {
            expect(toNumber('0x1A')).toBe(26);
            expect(toNumber('0xFF')).toBe(255);
        });

        test('should return Nan for bad hexadecimal strings', () => {
            expect(toNumber('-0xABC')).toBeNaN();
            expect(toNumber('+0x123')).toBeNaN();
        });

        test('should return NaN for invalid numeric strings', () => {
            expect(toNumber('abc')).toBeNaN();
            expect(toNumber('123abc')).toBeNaN();
        });
    });

    describe('other inputs', () => {
        test('should return NaN for symbol inputs', () => {
            expect(toNumber(Symbol('sym'))).toBeNaN();
        });

        test('should convert booleans to numbers', () => {
            expect(toNumber(true)).toBe(1);
            expect(toNumber(false)).toBe(0);
        });

        test('should convert null to 0', () => {
            expect(toNumber(null)).toBe(0);
        });

        test('should convert undefined to NaN', () => {
            expect(toNumber(undefined)).toBeNaN();
        });

        test('should convert objects with valueOf method', () => {
            const obj = {
                valueOf: () => '42'
            };
            expect(toNumber(obj)).toBe(42);
        });

        test('should convert objects without valueOf method to NaN', () => {
            const obj = Object.create(null);
            obj.prop = 'test';
            expect(toNumber(obj)).toBeNaN();
        });

        test('should handle valueOf returning zero', () => {
            const obj = {
                valueOf: () => 0
            };
            expect(toNumber(obj)).toBe(0);
        });

        test('should handle valueOf returning non-zero primitive', () => {
            const obj = {
                valueOf: () => 100
            };
            expect(toNumber(obj)).toBe(100);
        });

        test('should handle valueOf returning boolean', () => {
            const objTrue = {
                valueOf: () => true
            };
            const objFalse = {
                valueOf: () => false
            };
            expect(toNumber(objTrue)).toBe(1);
            expect(toNumber(objFalse)).toBe(0);
        });

        test('should handle valueOf returning object', () => {
            const obj = {
                valueOf: () => ({ nested: 'object' })
            };
            expect(toNumber(obj)).toBeNaN();
        });
    });
});