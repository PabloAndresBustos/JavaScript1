/* 3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades” */

/* Se podria usar find o includes, pero como son cosas no vistas aun, realizamos la actividad solo con lo visto. */

class CarroModificado {
    montoTotal;
    productos = [];

    constructor(nombre, precio, unidades) {
        this.montoTotal = unidades * precio;
        this.productos.push({ nombre, unidades });
    }

    adicionarProducto(nombre, precio, unidades) {
        /* El codigo de objetos_carrito3.js se puede limpiar de esta manera pero con cosas no vistas en clase */
        /* Generamos una constante donde almacenamos el resultado de find que busca el producto en mi lista de objetos. 
        Lo que nos retorna el producto encotrado */
        const producto_encontrado = this.productos.find(producto => producto.nombre === nombre)
        /* Si el prudcto se encontro enviamos el mensaje en consola caso contrario lo agregamos al carrito. */
        if (producto_encontrado) {
            console.log("el producto: " + nombre + " ya existe con la cantidad de: " + producto_encontrado.unidades);
        } else {
            this.productos.push({ nombre, unidades });
            this.montoTotal += unidades * precio;
        }
    }

}

/* Pruebas realizadas incluso con repiticiones de elementos. */

let carritoModificado = new CarroModificado('Leche', 10, 1);
console.log(carritoModificado);

carritoModificado.adicionarProducto("Azucar", 5, 2);
console.log(carritoModificado);

carritoModificado.adicionarProducto("Azucar", 5, 2);
console.log(carritoModificado);

carritoModificado.adicionarProducto("Leche", 5, 2);
console.log(carritoModificado);

carritoModificado.adicionarProducto("Cafe", 5, 2);
console.log(carritoModificado);