"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productoServiceImpl_1 = require("./productoServiceImpl");
// Crear una instancia del servicio
const servicioProducto = new productoServiceImpl_1.ProductoServiceImpl();
// Crear productos
const producto1 = servicioProducto.crearProducto("engrapadora", "engrapadora chica", 40);
const producto2 = servicioProducto.crearProducto("libreta", "librera de raya profesional", 30);
const producto3 = servicioProducto.crearProducto("calculadora", "calculadora basica", 55);
console.log("Productos después de crear:");
console.log(servicioProducto.obtenerProductos());
// Obtener producto por ID
const productoObtenido = servicioProducto.obtenerProductoPorId(1);
console.log("Producto obtenido por ID:");
console.log(productoObtenido);
// Actualizar producto
const productoActualizado = servicioProducto.actualizarProducto(1, "engrapadora", "Nueva descripción", 120);
console.log("Producto después de actualizar:");
console.log(productoActualizado);
// Eliminar producto
const eliminado = servicioProducto.eliminarProducto(2);
console.log("Producto eliminado:", eliminado);
console.log("Productos después de eliminar:");
console.log(servicioProducto.obtenerProductos());
