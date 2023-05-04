/* Funcion  sin lo visto en la clase 2*/
const soloIguales = (array1, array2) => array1.filter(elemento => array2.includes(elemento));
  
/* Arrays de prueba */
array3 = [1,2,3,4,5,10,9,11,6];
array4 = [1,6,3,9,5,2,1];

let igualados = soloIguales(array3, array4);

console.log(igualados);