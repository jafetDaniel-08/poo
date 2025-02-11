import { Producto } from './producto';
import { ProductoService } from './productoService';

export class ProductoServiceImpl implements ProductoService {//implementacion de las acciones de la interfaz productoService
  private productos: Producto[] = [];

  crearProducto(nombre: string, descripcion: string, precio: number): Producto {
    const id = this.productos.length ? this.productos[this.productos.length - 1].id + 1 : 1; // Asigna un id único
    const nuevoProducto = new Producto(id, nombre, descripcion, precio);
    this.productos.push(nuevoProducto);
    return nuevoProducto;
  }
  obtenerProductos(): Producto[] {
    return this.productos;
  }

  obtenerProductoPorId(id: number): Producto | undefined {
    return this.productos.find(producto => producto.id === id);
  }

  actualizarProducto(id: number, nombre?: string, descripcion?: string, precio?: number): Producto | undefined {
    const producto = this.obtenerProductoPorId(id);
    if (producto) {
      if (nombre) producto.nombre = nombre;
      if (descripcion) producto.descripcion = descripcion;
      if (precio) producto.precio = precio;
      return producto;
    }
    return undefined;
  }

  eliminarProducto(id: number): boolean {
    const index = this.productos.findIndex(producto => producto.id === id);
    if (index !== -1) {
      this.productos.splice(index, 1); // Elimina el producto del arreglo
      return true;
    }
    return false;
  }
}
