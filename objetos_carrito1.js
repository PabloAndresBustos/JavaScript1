/* 3)
3.1) Dado el siguiente objeto

let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}

Crear las clases necesarias para generar carritos respetando la estructura del objeto dado. */


/* Creamos la clase con su constructor */
class Carros {
    montoTotal;
    productos;

    constructor(precio, cantidad){
        this.montoTotal = precio;
        this.productos = cantidad;
    }
}

/* Creamos el carrito de prueba */
let carrito = new Carros(10, ["Leche"]);
console.log(carrito);

