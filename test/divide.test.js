import divide from '../src/divide.js';

describe('divide', () => {
  describe('Test cases from test plan', () => {
    test('Case 1: Divide 6 by 4', () => {
      const result = divide(6, 4);
      expect(result).toBe(1.5);
    });

    test('Case 2: Divide 10 by 2', () => {
      const result = divide(10, 2);
      expect(result).toBe(5);
    });

    test('Case 3: Divide 0 by 5', () => {
      const result = divide(0, 5);
      expect(result).toBe(0);
    });

    test('Case 4: Divide 5 by 0 - should return Infinity', () => {
      const result = divide(5, 0);
      expect(result).toBe(Infinity);
    });

    test('Case 5: Divide -6 by 3', () => {
      const result = divide(-6, 3);
      expect(result).toBe(-2);
    });

    test('Case 6: Divide 6 by -3', () => {
      const result = divide(6, -3);
      expect(result).toBe(-2);
    });

    test('Case 7: Divide -6 by -3', () => {
      const result = divide(-6, -3);
      expect(result).toBe(2);
    });

    test('Case 8: Divide 0 by 0 - should return NaN', () => {
      const result = divide(0, 0);
      expect(result).toBeNaN();
    });

    test('Case 9: Divide 1.5 by 0.5', () => {
      const result = divide(1.5, 0.5);
      expect(result).toBe(3);
    });

    test('Case 10: Divide string "6" by 3 - should handle string conversion', () => {
      const result = divide("6", 3);
      expect(typeof result).toBe('string');
    });

    test('Case 11: Divide 6 by string "3" - should handle string conversion', () => {
      const result = divide(6, "3");
      expect(typeof result).toBe('string');
    });

    test('Case 12: Divide null by 3 - should convert null to number', () => {
      const result = divide(null, 3);
      expect(result).toBe(0);
    });

    test('Case 13: Divide 6 by undefined - should return 6', () => {
      const result = divide(6, undefined);
      expect(result).toBe(6);
    });
  });
});