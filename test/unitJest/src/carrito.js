// TC-006 y TC-007: Módulo de Carrito de Compras
function agregarProducto(producto, cantidad, carrito, stockReal = Infinity) {
    // Validación de stock real (TC-007)
    if (cantidad > stockReal) {
        throw new Error("No se puede agregar más unidades del stock real");
    }

    const nuevoCarrito = [...carrito];
    const indice = nuevoCarrito.findIndex(item => item.id === producto.id);

    if (indice > -1) {
        // Si ya existe el producto, sumamos la cantidad
        nuevoCarrito[indice].cantidad += cantidad;
    } else {
        // Si es nuevo, lo agregamos con su cantidad
        nuevoCarrito.push({ ...producto, cantidad });
    }

    return nuevoCarrito;
}

module.exports = { 
    agregarProducto
};