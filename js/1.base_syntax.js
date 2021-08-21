'use strict'
// Базовый синтаксис
// https://learn.javascript.ru/class


// class MyClass {
//     // методы класса
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
// ...
// }


// Пример использования

// class User {
//
//     constructor(name) {
//         this.name = name;
//     }
//
//     name = 'Vlad'
//
//     sayHi() {
//         console.log(this.name);
//     }
//
// }

// Создаётся новый объект и constructor запускается с заданным аргументом
// let user = new User("Иван");
// user.sayHi();

// Класс это обычгая функция аналогичная функциям
// конструкторам с прошлого урока

// console.log(typeof User); // function

// Как работает такой синтаксис

// Создаёт функцию с именем User, которая становится результатом
// объявления класса.
// Код функции берётся из метода constructor (она будет пустой, если такого метода нет).

// Сохраняет все методы, такие как sayHi, в User.prototype.


// Геттеры/сеттеры, другие сокращения


// Как и в литеральных объектах, в классах
// можно объявлять вычисляемые свойства, геттеры/сеттеры и т.д.


// class User {
//
//     constructor(name) {
//         // вызывает сеттер
//         this.name = name;
//     }
//
//     get name() {
//         return this._name;
//     }
//
//     set name(value) {
//         if (value.length < 4) {
//             alert("Имя слишком короткое.");
//             return;
//         }
//         this._name = value;
//     }
//
// }
//
// let user = new User("Иван");
// alert(user.name); // Иван
//
// user = new User(""); // Имя слишком короткое.



// Базовый синтаксис для классов выглядит так


// class MyClass {
//     prop = value; // свойство
//     constructor(...) { // конструктор
//         // ...
//     }
//     method(...) {} // метод
//     get something(...) {} // геттер
//     set something(...) {} // сеттер
//     [Symbol.iterator]() {} // метод с вычисляемым именем (здесь - символом)
//     // ...
// }