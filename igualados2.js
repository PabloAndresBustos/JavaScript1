/* Funcion  sin lo visto en la clase 2*/
function soloIguales (array1, array2){
/* Creamos las dos nuevas listas que permitan comparar el tamaño de listas igual que en igualados 2 */
    let array3 = [];
    let array4 = [];
/* Por medio de un operador ternario comparamos los array y asignamos sus valores */
    array2>array1 ? (array3 = array1,  array4 = array2) :  (array3 = array2,  array4 = array1);
/* Retornamos la nueva lista con las coicidencias */
    return array3.filter(elemento => array4.includes(elemento));
} 
  
/* Arrays de prueba */
let array5 = [1,2,3,4,5,10,9,11,6];
let array6 = [1,6,3,9,5,2,1];

let igualados = soloIguales(array6, array5);

console.log(igualados);