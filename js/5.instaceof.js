'use strict'
// https://learn.javascript.ru/instanceof

class Rabbit {}
class Frog {}
let rabbit = new Rabbit();

// это объект класса Rabbit?
console.log( rabbit instanceof Rabbit ); // true
console.log( rabbit instanceof Frog ); // false