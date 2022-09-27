// eslint-disable-next-line @typescript-eslint/no-var-requires
const cuarto = require('./ejer4');

test('palabras repetidas', () =>{
    expect(cuarto(['hola', 'adios', 'sueño', 'hola', 'sueño'], ['hola', 'buenas', 'loki', 'hola', 'sueño'])).toEqual(['hola', 'sueño']);
}); 
