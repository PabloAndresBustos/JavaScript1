/* 2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos */

function soloIguales(array1, array2){
    /* Variable iguales donde guardamos los elementos que se comparten entre arrays*/
    let iguales = [];
    /* Generamos dos variales que permitiran interncambiar el orden de las listas */
    let array3 = [];
    let array4 = [];
    /* Generamos una comparacion de tamaño entre las listas dadas por el usuario para ordener su posicion antes de comparar */
    /* De esta manera lograremos simpre que el el arreglo con mas elementos sea el que por parametro este en la posicion de array1 */
    if(array2.length>array1.length){
        array3 = array2;
        array4 = array1;
    }else{
        array3 = array1;
        array4 = array2;
    }
    /* Ciclo form para iterar en el array3 */
    for(x=0; x<array3.length; x++){
        /* Ciclo for para iterar en el array4 */
        for(y=0; y<array4.length; y++){
            /* Verificamos si el elemento en el array3 es igual al del array4 por medio del indice */
            if(array3[x] === array4[y]){
                /* agregamos los elementos iguales del array3 al nuevo array iguales */
                iguales.push(array3[x]);
                /* Cortamos el ciclo for */
                break;
            }
        }
    }
    return iguales.sort();
}


/* Arrays de prueba */
let array5 = [1,2,3,4,5,10,9,11,6];
let array6 = [1,6,3,9,5,2,1];

/* Guardo el resulado de la funcion en igualados para poder ordenar el console.log */
let igualados = soloIguales(array6, array5);

console.log(igualados);