'use strict';

/* 1. (это задание делайте по желанию) 
Написать функцию, преобразующую число в объект. 
Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
 - единицы (в свойстве units)
 - десятки (в свойстве tens)
 - сотни (в свойстве hundereds) */

function numberToObject(num) {

    const objNum = {
        units: 0,
        tens: 0,
        hundereds: 0
    };

    if (Number.isInteger(num) && num >= 0 && num < 1000) {
        const numArrayTmp = String(num).split('');
        const numArray = numArrayTmp.reverse();
        switch (numArray.length) {
            case 3:
                objNum.hundereds = + numArray[2];
            case 2:
                objNum.tens = + numArray[1];
            case 1:
                objNum.units = + numArray[0];
        }
        return objNum;
    } else {
        console.log("Введено число в не диапозона или не число");
        return {};
    }
}

console.dir(numberToObject(45));

/* 1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 
(по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6),
конструктор Product, который принимает параметры name и price, сохраните их как
свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount,
который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount
не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип
(как объект transport в уроке). */

/* ES5 */
function ProductA(name, price) {
    this.name = name;
    this.price = price;
}

ProductA.prototype.make25PercentDiscount = function () {
    this.price = this.price - this.price * 25 / 100;
}

let ObjProduct1 = new ProductA('Кроссовки', 6000);
ObjProduct1.make25PercentDiscount();
console.dir(ObjProduct1);

/* ES6 */
class ProductB {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price - this.price * 25 / 100;
    }
}

let ObjProduct2 = new ProductB('Футболка', 1000);
ObjProduct2.make25PercentDiscount();
console.dir(ObjProduct2);


/* 1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по 
    аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования), 
    а) конструктор Post, который принимает параметры author, text, date и сохраняет
    их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет 
    принимать текст и записывать его в свойство text объекта.
    б) конструктор AttachedPost, который принимает параметры author, text, date.
    Проинициализируйте эти свойства с помощью конструктора Post, чтобы не 
    дублировать код. Также в конструкторе AttachedPost должно создаваться свойство
    highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
    Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
    который будет назначать свойству highlighted значение true. */

/* ES5 */
function PostEs5(author, text, date) {

    this.author = author;
    this.text = text;
    this.date = date;

}

PostEs5.prototype.edit = function (userText) {
    this.text = userText;
}

function AttachedPostEs5(author, text, date) {
    PostEs5.call(this, author, text, date);
    this.highlighted = false;

}
AttachedPostEs5.prototype = Object.create(PostEs5.prototype);
AttachedPostEs5.prototype.constructor = AttachedPostEs5;
AttachedPostEs5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let ObjAttachedPostEs5 = new AttachedPostEs5('Автор', 'Какойто текст', '20.01.2022');
console.log(ObjAttachedPostEs5);
ObjAttachedPostEs5.edit('Меняем на этот текст');
console.log(ObjAttachedPostEs5);
ObjAttachedPostEs5.makeTextHighlighted();
console.log(ObjAttachedPostEs5);

/* ES6 */
class PostEs6 {

    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(userText) {
        this.text = userText;
    }

}

class AttachedPostEs6 extends PostEs6 {

    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;

    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let ObjAttachedPostEs6 = new AttachedPostEs6('Автор для ES6', 'Какойто текст для ES6', '22.09.1989');
console.log(ObjAttachedPostEs6);
ObjAttachedPostEs6.edit('Меняем на этот текст но уже в ES6');
console.log(ObjAttachedPostEs6);
ObjAttachedPostEs6.makeTextHighlighted();
console.log(ObjAttachedPostEs6);