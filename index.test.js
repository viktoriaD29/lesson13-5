import { withdraw, reverseArray, getAdults } from './index'

it('shoud get reverse array', () => {
  const result = reverseArray([1, 2, 3, 4, 5]);

  expect(result).toEqual([5, 4, 3, 2, 1]);
})

it('shoud get null if arg not array', () => {
  const result = reverseArray('fdd');

  expect(result).toEqual(null);
})

it('shoud get reverse mixed array', () => {
  const result = reverseArray([1, 'f', 456, true, 'ghj']);

  expect(result).toEqual(['ghj', true, 456, 'f', 1]);
})

it('shoud get account balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).toEqual(37);
})

it('shoud get -1', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 2000);

  expect(result).toEqual(-1);
})

it('shoud the balance is empty, get -1', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 5);

  expect(result).toEqual(-1);
})





it('shoud get an empty object for an empty object', () => {
  const result = getAdults({});

  expect(result).toEqual({});
})

it('shoud the balance is empty, get -1', () => {
  const result = getAdults({'John Doe': 19, Tom: 17, Bob: 18});

  expect(result).toEqual({'John Doe': 19, Bob: 18});
})

it('shoud the balance is empty, get -1', () => {
  const result = getAdults({'John Doe': 19, Tom: 26, Bob: 48});

  expect(result).toEqual({'John Doe': 19, Tom: 26, Bob: 48});
})