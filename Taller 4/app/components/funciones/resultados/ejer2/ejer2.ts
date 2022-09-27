/**
* Ejercicio 2
* Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interior,
* la primera contendrá los números pares del arreglo y la segunda los impares
*/

const numbers2 = [1, 2, 3, 4, 5, 6];

function math1() {
    const par = [];
    const imp = [];
    for (let i = 0; i < numbers2.length; i++) {
        if (i % 2 === 0) {
            imp.push(numbers2[i]);
        }
        else {
            par.push(numbers2[i]);
        }
    }
    console.log('pares:'+ par);
    console.log('impares:'+ imp);

    const math = {
        pares: par,
        impar: imp,
    };

    return math;
}

module.exports = math1;
