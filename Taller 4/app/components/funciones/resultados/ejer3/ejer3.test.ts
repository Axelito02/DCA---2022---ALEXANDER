// eslint-disable-next-line @typescript-eslint/no-var-requires
const tercero = require('./ejer3');

test('combinacion de letras y numeros', () => {
    expect(tercero(['e', 'd', 'f'],['a', 'c', 'b'],['m', 'o', 'n'])).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'm', 'n', 'o']);
});
