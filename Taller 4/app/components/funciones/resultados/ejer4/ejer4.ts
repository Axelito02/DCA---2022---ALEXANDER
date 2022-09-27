/*
* Ejercicio 4
* dadas dos listas de palabras, retorne una unica lista en la cual se encuentren las palabras
* que existan en las dos listas iniciales, además ordene esta última lista de manera que las
* palabras repetidas más veces en ambos arreglos se encuentren al inicio de la lista.
*/

const texto = ['hola', 'adios', 'sueño', 'hola', 'sueño', 'hola', 'buenas', 'loki', 'hola', 'sueño'];

function listas () {
    // const a = [];z
    const b = [];
    for (let i = 0; i < texto.length; i++) {
        if (i % 2 === 0) {
            b.push(texto[i]);
        }
        console.log(b);
        return b;
    }
}

module.exports = listas;
