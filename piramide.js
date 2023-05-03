/* 1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero */

function piramide(numero){
    /* Recorremos los numeros hasta el numero ingresado en la funcion*/
    for(let x=1; x<=numero; x++){
        /* Definimos la variable fila donde almacenamos los valores*/
        let fila = "";
        /* Definimos otro for para iterar dede 1 hasta el valor actual del ciclo de arriba */
        for(let y=1; y<=x; y++){
            /* concatenamos el valor de y con el valor de fila, esto ira agregando los numeros al recorrer los ciclos*/
            fila += y;
    }
    /* Imprimo en consola el valor de fila luego del segundo for, pero dentro dentro del segundo
    para poder generar la piramide */
    console.log(fila);
  }
}
/* Ejemplo utilizado */
piramide(8);