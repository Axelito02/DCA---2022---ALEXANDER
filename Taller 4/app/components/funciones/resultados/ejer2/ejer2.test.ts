/* eslint-disable @typescript-eslint/no-var-requires */
const segundo = require('./ejer2');

test('numeros par e impar', () => {
    expect(segundo([1, 2, 3, 4, 5, 6])).toEqual({'impar': [1, 3, 5], 'pares': [2, 4, 6]});
});
