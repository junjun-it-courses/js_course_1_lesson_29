'use strict'
// https://learn.javascript.ru/static-properties-methods
// Мы знаем что при создании методов класса они автоматичеки попадают
// в свойство prototype и наследуются самим объектом.

// Example:

class User {
    static staticMethod() {
        alert(this === User);
    }

    static isUser(obj) {
        alert('Yes')
    }

    sing() {
        console.log(123)
    }
}

// User.isUser()
let humane = new User();

// console.log(humane.isUser())



class Person extends User {
    name = 'Vova';
    run() {
        alert('Runing...')
    }
}

let p = new Person();
Person.isUser()
// console.log(p.isUser())



// console.log(User.isUser({a: 1}));

//
// User.staticMethod(); // true
//
// let user = new User();
// console.log(user.staticMethod())


// Похожий вариант создания

// class User { }
//
// User.staticMethod = function() {
//     alert(this === User);
// };


// В таком случае значением this будет сам объект User

// Обычно статические методы используются для реализации функций,
// принадлежащих классу, но не к каким-то конкретным его объектам.

// class User {
//
//     constructor() {
//         this.a  =  100;
//     }
//
//     static staticMethod() {
//         alert(this === User);
//     }
// }
//
// let a = new User();
// // a.staticMethod()        // нету возможности вызвать статический метод через созданные объект
// // User.staticMethod()     // Только через сам class
// // console.log(a)
//
// class User2 extends User {
//     constructor() {
//         super();
//         this.b = 200;
//         // super.staticMethod()    // Аналогично нельзя вызвать через super
//         // User.staticMethod()     // Только через class
//     }
// }
//
// let b = new User2();
// // User2.staticMethod()         // Тут все правильно так как мы вызываем статический метод
//                              // класса который раширяется другим а значит он наследует
//                              // и мы можем вызывать статические методы класса родителя
//                              // через дочерний
// console.log(b)


// Example

// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }
//
//     static compare(articleA, articleB) {
//         return articleA.date - articleB.date;
//     }
// }
//
// // использование
// let articles = [
//     new Article("HTML", new Date(2019, 1, 1)),
//     new Article("CSS", new Date(2019, 0, 1)),
//     new Article("JavaScript", new Date(2019, 11, 1))
// ];
//
// articles.sort(Article.compare);
//
// alert( articles[0].title ); // CSS


// Статические свойства класса

// class Article {
//     static publisher = "Илья Кантор";
// }
//
// alert( Article.publisher ); // Илья Кантор

// Аналогия

// Article.publisher = "Илья Кантор";