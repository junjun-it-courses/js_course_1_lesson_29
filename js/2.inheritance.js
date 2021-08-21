'use strict'
// Наследование классов
// https://learn.javascript.ru/class-inheritance


// Строим абстракцию
// Создаем клас Animal

// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//
//     run(speed) {
//         this.speed = speed;
//         alert(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
//
//     stop() {
//         this.speed = 0;
//         alert(`${this.name} стоит.`);
//     }
//
//
//     eat() {
//         alert('Eating')
//     }
// }
//
// let animal = new Animal("Мой питомец");
// let animal2 = new Animal("Мой питомец 2");
// console.log(animal)
// console.log(animal2)
//
// // и класс Rabbit
//
//
// class Rabbit {
//     constructor(name) {
//         this.name = name;
//     }
//     hide() {
//         alert(`${this.name} прячется!`);
//     }
// }
//
// let rabbit = new Rabbit("Мой кролик");
// console.log(rabbit);


// В данный момент эти классы независимы, но мы хотим чтобы Rabbit
// происходил от Animal тоесть наследовал его свойства и методы

// Наследуем от Animal указывая "extends Animal"
// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name} прячется!`);
//     }
// }
//
// let rabbit = new Rabbit("Белый кролик");
// console.log(rabbit)
// rabbit.eat();
//
// class Giraf extends Animal {
//     neckHeight = 100;
//     punch() {
//         alert(`Die you bastard!!`);
//     }
// }
//
// let giraf = new Giraf("Vlad Shaitan");
// giraf.eat()
// console.log(giraf)


// Ключевое слово extends устанавливае в качестве прототипа Rabbit
// Прототип Animal Rabbit.prototype = Animal.prototype
// В таком случае можем пропустить конструктор у дочернего класса
// если он не нужен и и при создании new Rabbit() у нас будет работать
// конструктор класса Animal и Rabbit получит все необходимые данные
// в свой прототип


// Переопределение методов

// Допустим нас не устраивает метод stop() из объекта Animal и мы хотим
// классу Rabbit создать личный метод stop() уникальный для только для
// класса

// class Animal {
//
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//
//     run(speed) {
//         this.speed = speed;
//         alert(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
//
//     stop() {
//         this.speed = 0;
//         alert(`${this.name} стоит.`);
//     }
//
// }

// super.method(...) вызывает родительский метод.

// super(...) вызывает родительский
// конструктор (работает только внутри нашего конструктора).


// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} прячется!`);
//     }
//
//     stop() {
//         super.stop(); // вызываем родительский метод stop
//         this.hide(); // и затем hide
//     }
// }
//
// let rabbit = new Rabbit("Белый кролик");
//
// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!



// class Giraf extends Animal {
//     neckHeight = 100;
//     punch() {
//         alert(`Die you bastard!!`);
//     }
// }
//
// let giraf = new Giraf("Giraf");
//
// giraf.run(1);
// giraf.stop()

// Теперь у класса Rabbit есть метод stop, который
// вызывает родительский super.stop() в процессе выполнения.




// Переопределение конструктора

// Согласно спецификации, если класс расширяет другой
// класс и не имеет конструктора, то автоматически создаётся
// такой «пустой» конструктор:

// class Rabbit extends Animal {
//     // генерируется для классов-потомков,
//     // у которых нет своего конструктора
//     constructor(...args) {
//         super(...args);
//     }
//
//     hide() {
//         console.log('hide')
//     }
// }


// class Animal {
//     constructor(name) {
//         // тут super() вызываеть не нужно так как мы не наследуем
//         // класс Animal
//         this.speed = 0;
//         this.name = name;
//     }
//     // ...
// }
//
// class Rabbit extends Animal {
//
//     constructor(...args) {
//         // Если у нас один класс наследуется от другого, то
//         // чтобы определить новый конструктор дочернего
//         // класса нам необходимо вызвать super() для того чтобы вызвался
//         // конструктор родительского класса +  и создал нам объект this
//         // это нужно делать в перед тем как вы начинаете запсывать в this
//         // свои данные
//         super(...args);
//         this.speed = 0;
//         this.name = name;
//         this.earLength = earLength;
//     }
//
//     // ...
// }
//
//
// let rabbit = new Rabbit("Белый кролик", 10);