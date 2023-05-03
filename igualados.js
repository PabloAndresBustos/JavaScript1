/* 2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos */

function soloIguales(array1, array2){
    /* Variable iguales donde guardamos los elementos que se comparten entre arrays*/
    let iguales = [];
    /* Ciclo form para iterar en el array1 */
    for(x=0; x<array1.length; x++){
        /* Ciclo for para iterar en el array1 */
        for(y=0; y<array2.length; y++){
            /* Verificamos si el elemento en el array1 es igual al del array2 por medio del indice */
            if(array1[x] === array2[y]){
                /* agregamos los elementos iguales del array1 al nuevo array iguales */
                iguales.push(array1[x]);
                /* Cortamos el ciclo for */
                break;
            }
        }
    }
    return iguales;
}

/* Arrays de prueba */
array3 = [1,2,3,4,5,10,9,11,6];
array4 = [1,6,3,9,5,2,1];

/* Guardo el resulado de la funcion en igualados para poder ordenar el console.log */
let igualados = soloIguales(array3, array4);

console.log(igualados);