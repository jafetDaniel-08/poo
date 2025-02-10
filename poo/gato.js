"use strict";
class Gato {
    constructor(name, sex, age, weight, color, texture) {
        this._name = name;
        this._sex = sex;
        this._age = age;
        this._weight = weight;
        this._color = color;
        this._texture = texture;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get sex() {
        return this._sex;
    }
    set sex(value) {
        this._sex = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get weight() {
        return this._weight;
    }
    set weight(value) {
        this._weight = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get texture() {
        return this._texture;
    }
    set texture(value) {
        this._texture = value;
    }
}
const miGato = new Gato("Mittens", "Macho", 4, 5.2, "Gris", "Suave");
