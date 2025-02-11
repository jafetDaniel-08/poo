export class Gato {
    private _name: string;
    private _sex: string;
    private _age: number;
    private _weight: number;
    private _color: string;
    private _texture: string;

  
    constructor(name: string, sex: string, age: number, weight: number, color: string, texture: string) {
        this._name = name;
        this._sex = sex;
        this._age = age;
        this._weight = weight;
        this._color = color;
        this._texture = texture;
    }

   
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }


    get sex(): string {
        return this._sex;
    }
    set sex(value: string) {
        this._sex = value;
    }


    get age(): number {
        return this._age;
    }
    set age(value: number) {

            this._age = value;
        
    }


    get weight(): number {
        return this._weight;
    }
    set weight(value: number) {

            this._weight = value;
      
    }

    get color(): string {
        return this._color;
    }
    set color(value: string) {
        this._color = value;
    }


    get texture(): string {
        return this._texture;
    }
    set texture(value: string) {
        this._texture = value;
    }

}