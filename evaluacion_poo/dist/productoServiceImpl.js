"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoServiceImpl = void 0;
const producto_1 = require("./producto");
class ProductoServiceImpl {
    constructor() {
        this.productos = [];
    }
    crearProducto(nombre, descripcion, precio) {
        const id = this.productos.length ? this.productos[this.productos.length - 1].id + 1 : 1; // Asigna un id único
        const nuevoProducto = new producto_1.Producto(id, nombre, descripcion, precio);
        this.productos.push(nuevoProducto);
        return nuevoProducto;
    }
    obtenerProductos() {
        return this.productos;
    }
    obtenerProductoPorId(id) {
        return this.productos.find(producto => producto.id === id);
    }
    actualizarProducto(id, nombre, descripcion, precio) {
        const producto = this.obtenerProductoPorId(id);
        if (producto) {
            if (nombre)
                producto.nombre = nombre;
            if (descripcion)
                producto.descripcion = descripcion;
            if (precio)
                producto.precio = precio;
            return producto;
        }
        return undefined;
    }
    eliminarProducto(id) {
        const index = this.productos.findIndex(producto => producto.id === id);
        if (index !== -1) {
            this.productos.splice(index, 1); // Elimina el producto del arreglo
            return true;
        }
        return false;
    }
}
exports.ProductoServiceImpl = ProductoServiceImpl;
