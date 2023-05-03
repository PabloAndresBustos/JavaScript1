/* 3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
agregarProducto(nombre, precio, unidades) {
    // Completar aca...
}


Ej:
agregarProducto("Azucar", 5, 2);

//Resultado esperado
carrito = {
    montoTotal: 20,
    productos: ["Leche", "Azucar"]
} */

class Carros {
    montoTotal;
    productos;

    constructor(precio, cantidad){
        this.montoTotal = precio;
        this.productos = cantidad;
    }
    /* Agregamos el metodo para agregar productos al carrito */
    adicionarProducto(nombre, precio, unidades){
            this.productos.push(nombre);
            this.montoTotal += unidades*precio;  
    }
}

/* Preubas realizadas creamos el carrito */

let carrito = new Carros(10, ["Leche"]);
console.log(carrito);

/* Agregamos al carrito el ejemplo del Azucar */
carrito.adicionarProducto("Azucar", 5, 2);
console.log(carrito);