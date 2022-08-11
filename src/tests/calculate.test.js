import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should return an object', () => {
    const result = calculate({ total: 0, next: null, operation: null }, 'AC');
    expect(result.total).toBe(null);
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
});
