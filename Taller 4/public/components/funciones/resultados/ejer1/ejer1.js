"use strict";
/**
* ejercicio 1
* cree una función que recibe 2 arreglos como parametros.
* luego combina estos arreglos en uno solo, alternando sus valores.
*/
function mixer(letra, numeros) {
    const end = [];
    end[0] = letra[0];
    end[1] = numeros[0];
    end[2] = letra[1];
    end[3] = numeros[1];
    end[4] = letra[2];
    end[5] = numeros[2];
    end[6] = letra[3];
    end[7] = numeros[3];
    console.log('Verificando contenido del arreglo:' + ' ' + end);
    return end;
}
module.exports = mixer;
