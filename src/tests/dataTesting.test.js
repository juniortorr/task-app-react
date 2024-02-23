import { format, compareAsc, addDays } from 'date-fns';
import { it, describe, expect } from 'vitest';

describe('returns date', () => {
  it('returns string', () => {
    expect(format('12/22/2024', 'yyyy/MM/dd')).toBe('2024/12/22');
  });
});

describe('returns sorted array', () => {
  it('returns sorted in descending', () => {
    const arr = ['12/22/2024', '1/22/2025', '2/21/2021'];
    expect(arr.sort(compareAsc)).toEqual(['2/21/2021', '12/22/2024', '1/22/2025']);
  });
});

describe('add day', () => {
  it('returns day added', () => {
    const day = addDays('1/1/2024', 1);
    const response = format(day, 'MM/dd/yyyy');
    expect(response).toBe('01/02/2024');
  });
});
