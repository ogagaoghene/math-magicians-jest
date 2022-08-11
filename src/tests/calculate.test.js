import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should return an object', () => {
    const result = calculate({ total: 0, next: null, operation: null }, 'AC');
    expect(result.total).toBe(null);
  });

  it('test "+" button', () => {
    const obj = {
      total: '100',
      next: '4',
      operation: '+',
    };
    const result = calculate(obj, '=');
    expect(result).toEqual({ total: '104', next: null, operation: null });
  });

  it('test "-" button', () => {
    const obj = {
      total: '100',
      next: '4',
      operation: '-',
    };
    const result = calculate(obj, '=');
    expect(result).toEqual({ total: '96', next: null, operation: null });
  });

  it('test "x" button', () => {
    const obj = {
      total: '100',
      next: '4',
      operation: 'x',
    };
    const result = calculate(obj, '=');
    expect(result).toEqual({ total: '400', next: null, operation: null });
  });

  it('test "÷" button', () => {
    const obj = {
      total: '100',
      next: '4',
      operation: '÷',
    };
    const result = calculate(obj, '=');
    expect(result).toEqual({ total: '25', next: null, operation: null });
  });

  it('test "%" button', () => {
    const obj = {
      total: '1',
      next: '2',
      operation: '%',
    };
    const result = calculate(obj, '=');
    expect(result).toEqual({ total: '1', next: null, operation: null });
  });
});
