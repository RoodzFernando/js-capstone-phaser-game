const localStorageTest = require('../__mocks__/localStorage.mock');

describe(' Tests the getting coins in localStorage if return == 0', () => {
  let coins;
  test('returning 0 if no coins\' available in localStorage', () => {
    coins = localStorageTest.getCurrentScoreTest();
    expect(coins).toBe(0);
  });
});

describe('Tests the coins retrieval func from localStorage', () => {
  let coins;

  test('get requested stored data in the localStorage', () => {
    localStorageTest.storeScoreTest(390);
    coins = localStorageTest.getCurrentScoreTest();
    expect(coins).toBe(390);
  });
});

describe('Tests the storage of coins in the localStorage', () => {
  const coins = 50;
  test('Should store the sent in coins ', () => {
    localStorageTest.storeScoreTest(coins);
    const data = localStorageTest.getCurrentScoreTest();
    expect(data).toEqual(50);
  });
});