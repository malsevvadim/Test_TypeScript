//теперь можно создавать различные объекты с типом Rect
//работает autocomplete
var rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
};
//необязательные поля можно указать позже через точку
rect2.color = 'black';
//а вот переопределить readonly поля не получится
//rect2.id = '123231'
//при компиляции выходит такое
//2_interfaces.ts:38:7 - error TS2540: Cannot assign to 'id' because it is a read-only property.
//в джаваскипте несмотря на то, что мы объявляем константу, но мы можем изменять внутреннее состояние - если это объект или массив
//, но мы не можем их переассайнивать, т.е. писать повторно rect2 = {}... 
//по умолчанию пустой объект приведенный к типу Rect 
var rect3 = {};
//2 вариант - нативная старая запись
var rect4 = {};
var rect5 = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
