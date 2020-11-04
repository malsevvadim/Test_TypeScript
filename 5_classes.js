var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TypeScript = /** @class */ (function () {
    function TypeScript(version) {
        this.version = version;
    }
    TypeScript.prototype.info = function (name) {
        return '[${name}]: TypeScript version is ${this.version}';
    };
    return TypeScript;
}());
var Car = /** @class */ (function () {
    function Car(theModel) {
        this.numberOfWheels = 4;
        //поле можем перезаписать только внутри конструкутора, хотя у нас оно только для чтения, но ведь его нам надо как-то определить
        this.model = theModel;
    }
    return Car;
}());
//второй вариант записи с readonly полями задаваемыми через конструктор, идентичен первой записи
var Car2 = /** @class */ (function () {
    function Car2(Model) {
        this.Model = Model;
        this.numberOfWheels = 4;
    }
    return Car2;
}());
//===================
//МОДИФИКАТОРЫ
//по умолчанию все модификаторы public, т.е. если их не указывать
var Animal = /** @class */ (function () {
    //private элементы и методы доступны только в том классе, в котором были определены
    function Animal() {
        this.voice = '';
        this.color = 'black';
        this.go();
    }
    Animal.prototype.go = function () {
        console.log('Go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        //в наследуемых классах и в самом классе к свойству protected можно обратиться, но при работе с экземплярами нельзя
        this.voice = voice;
        //this.go() - ошибка, недоступна функция, т.к. private в родительском классе
    };
    return Cat;
}(Animal));
var cat = new Cat();
//cat.voice  - ошибка, т.к. экземпляр класса, а свойство объявлено как protected
cat.setVoice('test');
cat.color = 'green';
console.log(cat.color);
//==============================
//Абстрактные классы
//они не компилируются, но нужны на этапе разработки, чтобы от них наследоваться
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('Component AppComponent on render');
    };
    AppComponent.prototype.info = function () {
        return 'This is info AppComponent';
    };
    return AppComponent;
}(Component));
