import ceil from '../src/ceil.js';

describe('Basic functionality', () => {
  test('should round number to precision', () => {
  const result = ceil(4.006, 2);
  expect (result).toBe(4.01);
  });
  test('should round negative number to precision', () => {
    const result = ceil(-4.006, 2);
    expect(result).toBe(-4.00);
  });
  test('should round number without precision argument', () => {
    const result = ceil(4.3);
    expect(result).toBe(5);
  });
});

describe('Edge cases', () => {
  test('should handle negative precision', () => {
    const result = ceil(6040, -2);
    expect(result).toBe(6100);
  });
  test('should handle zero', () => {
    const result = ceil(0, 2);
    expect(result).toBe(0);
  }); 
});

describe('Special values', () => {
  test('should handle zero precision', () => {
    const result = ceil(4.006);
    expect(result).toBe(5);
  });
  test('should handle large precision', () => {
    const result = ceil(4.006, 10);
    expect(result).toBe(4.0060000000);
  });
});

describe('Invalid inputs', () => {
  test('should return NaN for non-numeric input', () => {
    const result = ceil('abc', 2);
    expect(result).toBeNaN();
  });
  test('should return NaN for null input', () => {
    const result = ceil(null, 2);
    expect(result).toBeNaN();
  });
  test('should return NaN for undefined input', () => {
    const result = ceil(undefined, 2);
    expect(result).toBeNaN();
  });
  test('should return NaN for NaN input', () => {
    const result = ceil(NaN, 2);
    expect(result).toBeNaN();
  }); 
});