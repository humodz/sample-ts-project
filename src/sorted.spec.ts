import { sorted } from './sorted';

describe('sorted', () => {
  it('returns a sorted array', () => {
    const input = [4, 10, 3, -99];
    const result = sorted(input);

    expect(result).toEqual([-99, 3, 4, 10]);
  });

  it('does not modify the input array', () => {
    const input = [47, 50, 12, 0, 3];
    const result = sorted(input);

    expect(input).toEqual([47, 50, 12, 0, 3]);
    expect(result).toEqual(expect.any(Array));
  });
});
