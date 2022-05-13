import { Potter } from './potter';

describe('Potter', () => {
  let potter: Potter;

  beforeEach(() => {
    potter = new Potter();
  });
  it('should create an instance', () => {
    expect(potter).toBeTruthy();
  });

  test('buy one copy of first book', () => {
    const potter = new Potter();
    potter.buy(0, 0);
    expect(potter.cost).toBe(0);
  });

  test('buy one copy of first book', () => {
    const potter = new Potter();
    potter.buy(0, 1);
    expect(potter.cost).toBe(8);
  });

  test('buy two copy of first book', () => {
    const potter = new Potter();
    potter.buy(0, 2);
    expect(potter.cost).toBe(8 * 2);
  });
});
