import { Producto } from './producto';
export interface ProductoService {//interface de las acciones que se podran hacer sobre los productos para una mejor orgnizacion del codigo
  crearProducto(nombre: string, descripcion: string, precio: number): Producto;
  obtenerProductos(): Producto[];
  obtenerProductoPorId(id: number): Producto | undefined;
  actualizarProducto(id: number, nombre?: string, descripcion?: string, precio?: number): Producto | undefined;
  eliminarProducto(id: number): boolean;
}
