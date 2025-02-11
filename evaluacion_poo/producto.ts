export class Producto{ //clase base producto con sus atributos, construcctor, getters y setters
  private _id: number;
  private _nombre: string;
  private _descripcion: string;
  private _precio: number;

  constructor(id: number, nombre: string, descripcion: string, precio: number) {
    this._id = id;
    this._nombre = nombre;
    this._descripcion = descripcion;
    this._precio = precio;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
      this._id = value;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get descripcion(): string {
    return this._descripcion;
  }

  set descripcion(value: string) {
      this._descripcion = value;
  }

  get precio(): number {
    return this._precio;
  }

  set precio(value: number) {
      this._precio = value;
  }
}