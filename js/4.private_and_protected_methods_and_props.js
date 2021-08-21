'use strict'
// https://learn.javascript.ru/private-protected-properties-methods
// Разделение интерфейсов использования

// Внутренний интерфейс - обеспечивает работу программ / класса / объекта / машины /человека
// обычно если пользуемся какой-то библиотекой которая предоставляет нам определенные
// функции - то нам вполне не обязательно знать как функционал этой библиотеки
// работает под капотом мы его просто юзаем и не паримся

// Внешний интерфейс - так-же как и внутренний обеспечивает работу того или иного функционала
// но мы с вами как пользователи имеем возможность влиять на эту работу, как пример мы можем
// взять какойто метод массивов например [1, 2, 3].forEach(callback), мы имеем возможность
// влиять на работу функции передавая в нее аргументы, в данном случае callback


// Это очень часто используется при написании классов для того чтобы не предоставлять
// объектам которые создает класс лишних возможностей, а только те которые ему нужны



// Защищённое свойство

// пишем самый обычный класс
// class CoffeeMachine {
//     waterAmount = 0;        // количество воды внутри
//
//     constructor(power) {
//         this.power = power;
//         alert( `Создана кофеварка, мощность: ${power}` );
//     }
//
// }
//
// // создаём кофеварку
// let coffeeMachine = new CoffeeMachine(100);
//
// // добавляем воды
// coffeeMachine.waterAmount = 200;

// Так как в JS нету реализации защищенных свойств то мы будем их иммитировать
// Защищённые свойства обычно начинаются с префикса _.

// class CoffeeMachine {
//     _waterAmount = 0;
//     // waterAmount = 0;
//
//     set waterAmount(value) {
//         if (value < 0) throw new Error("Отрицательное количество воды");
//         this._waterAmount = value;
//     }
//
//     get waterAmount() {
//         return this._waterAmount;
//     }
//
//     constructor(power) {
//         this._power = power;
//     }
//
// }

// создаём новую кофеварку
// let coffeeMachine = new CoffeeMachine(100);

// console.log(coffeeMachine.waterAmount)
// устанавливаем количество воды
// coffeeMachine.waterAmount = -10; // Error: Отрицательное количество воды

// Теперь доступ под контролем, поэтому указать воду ниже нуля не удалось
// Это нужно для того чтобы мы могли валидировать данные которые пользователь
// пытается использовать и передавать в наш класс, а валидация в свою очередь нужна
// для того чтобы наш класс корректно работал


// Свойство только для чтения «power»
// Такие свойства нужны для того чтобы пользователь не мог их переопределить и в итоге
// сломать работу скрипта и тд

// class CoffeeMachine {
//     // ...
//
//     constructor(power) {
//         this._power = power;
//     }
//
//     get power() {
//         return this._power;
//     }
//
// }

// создаём кофеварку
// let coffeeMachine = new CoffeeMachine(100);
//
// alert(`Мощность: ${coffeeMachine.power}W`); // Мощность: 100W
//
// coffeeMachine.power = 25; // Error (no setter)


// Для этого нам нужно создать только геттер, но не сеттер
// Если сеттера нету то свойство и нельзя будет перезаписать



// Приватное свойство «#waterLimit»

// Приватные свойства и методы должны начинаться с #. Они доступны только внутри класса.

// Например, в классе ниже есть приватное свойство #waterLimit и приватный
// метод #checkWater для проверки количества воды:


// class CoffeeMachine {
//     #waterLimit = 200;
//
//     #checkWater(value) {
//         if (value < 0) throw new Error("Отрицательный уровень воды");
//         if (value > this.#waterLimit) throw new Error("Слишком много воды");
//     }
// }
//
// let coffeeMachine = new CoffeeMachine();
//
// // снаружи  нет доступа к приватным методам класса
// coffeeMachine.#checkWater(); // Error
// coffeeMachine.#waterLimit = 1000; // Error

// На уровне языка # является специальным символом, который означает, что поле приватное.

// Приватные поля не конфликтуют с публичными. У нас может быть два поля одновременно
// – приватное #waterAmount и публичное waterAmount.

class CoffeeMachine {

    #waterAmount = 0;

    get waterAmount() {
        return this.#waterAmount;
    }

    set waterAmount(value) {
        if (value < 0) throw new Error("Отрицательный уровень воды");
        this.#waterAmount = value;
    }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
alert(machine.#waterAmount); // Error


// Но если мы унаследуем от CoffeeMachine, то мы не получим прямого доступа к #waterAmount.
// Мы будем вынуждены полагаться на геттер/сеттер waterAmount:

class MegaCoffeeMachine extends CoffeeMachine {
    method() {
        // super.waterAmount() // Будет работать
        alert( this.#waterAmount ); // Error: can only access from CoffeeMachine
    }
}