"use strict";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const quinto = require('./ejer5');
test('numeros par e impar', () => {
    expect(quinto(['Pikachu', 'Zubat', 'Meowth', 'Eevee', 'Bulbasaur', 'Charizard', 'Squirtle', 'Pidgey'])).toEqual({ 'impar': [1, 3, 5], 'pares': [2, 4, 6] });
});
