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
    potter.buy(0, 1);
    expect(potter.cost).toBe(8);
  });
});
