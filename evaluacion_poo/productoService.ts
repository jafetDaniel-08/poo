import { Producto } from './producto';
export interface ProductoService {//interface que solo define las acciones que se podran hacer sobre los productos para una mejor organizacion del codigo
  crearProducto(nombre: string, descripcion: string, precio: number): Producto;
  obtenerProductos(): Producto[];
  obtenerProductoPorId(id: number): Producto | undefined;
  actualizarProducto(id: number, nombre?: string, descripcion?: string, precio?: number): Producto | undefined;
  eliminarProducto(id: number): boolean;
}