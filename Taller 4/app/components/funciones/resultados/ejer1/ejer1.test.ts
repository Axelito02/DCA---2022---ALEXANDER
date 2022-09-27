// eslint-disable-next-line @typescript-eslint/no-var-requires
const primero = require('./ejer1');

test('combinación de arreglos', () => {
    expect(primero(['a', 'b', 'c', 'd'], [1, 2, 3, 4])).toEqual(['a', 1, 'b', 2, 'c', 3, 'd', 4]);
});
