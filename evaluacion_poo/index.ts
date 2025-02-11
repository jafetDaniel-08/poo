/*
Evaluacion POO.
1. Genera una rama en tu repositorio que compartiste anteriormente con el nombre de evaluacion_poo.
2. Desarrollar un sistema de gestión de inventario para una papelería que permita realizar operaciones de venta, consultar el inventario y gestionar productos.
3. Debes de tener almenos 3 productos.
4. Se debe de guardar en memoria para poder hacer operaciones de aumento, resta, consulta en el numero de productos.
4. Procura que tu codigo tenga calidad.
5. Coloca como forma de comentarios en tus clases el por que las creaste.
 */
import { ProductoServiceImpl } from './productoServiceImpl';
import { ProductoService } from './productoService';

//Crear una instancia del servicio
const servicioProducto: ProductoService = new ProductoServiceImpl();

//Crear productos (venta)
const producto1 = servicioProducto.crearProducto("engrapadora", "engrapadora chica", 40);
const producto2 = servicioProducto.crearProducto("libreta", "librera de raya profesional", 30);
const producto3 = servicioProducto.crearProducto("calculadora", "calculadora basica", 55);

//consultar inventario
console.log(servicioProducto.obtenerProductos());

//consultar producto por ID
const productoObtenido = servicioProducto.obtenerProductoPorId(1);
console.log("Producto obtenido por ID:");
console.log(productoObtenido);

//Actualizar producto
const productoActualizado = servicioProducto.actualizarProducto(1, "engrapadora", "Nueva descripción", 120);
console.log("Producto después de actualizar:");
console.log(productoActualizado);

//restar producto
const eliminado = servicioProducto.eliminarProducto(2);
console.log("Producto eliminado:", eliminado);
console.log("Productos después de eliminar:");
console.log(servicioProducto.obtenerProductos());
