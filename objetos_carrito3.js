/* 3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades” */

class CarroModificado {
    montoTotal;
    productos = [];

    constructor(nombre, precio, unidades) {
        this.montoTotal = unidades * precio;
        this.productos.push({ nombre, unidades });
    }


    adicionarProducto(nombre, precio, unidades) {
        /* Genero una variable que me servira para permitir el agregado o no del nuevo elemento */
        let existe = false;
        /* Genero un loop for para verificar si el nombre del producto ya esta en la lista, si el producto está devolvera el mensa
        solicitado por el ejercicio */
        for (let x = 0; x < this.productos.length; x++) {
            if (nombre === this.productos[x].nombre) {
                existe = true;
                console.log("el producto: " + nombre + " ya existe con la cantidad de: " + this.productos[x].unidades);
                break;
            }
        }
        /* Si el la variable existe es igual a true, quiere decir que el for no encotro coincidencias y el producto puede ser 
        agregado actualizando el monto */
        if (!existe) {
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