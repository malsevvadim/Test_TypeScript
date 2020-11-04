var str = 'Hello';
//console.log(str)    
var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello TypeScript';
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ['Hello', 'TypeScript'];
//Tuple
var contact = ['Vadim', 1234567];
//Any
var variable = 42;
//.... хотим переопределить данную переменную через какое-то время
variable = 'New string';
//пустой массив
variable = [];
//=== функция тип void означает, что функция ничего не возвращает
function sayMyName(name) {
    console.log(name);
}
//вызов функции
sayMyName('Хайзенберг');
//новый тип в TS:Never
//Never используется когда функция возвращает нам ошибку или когда функция постоянно что-либо делает
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
//а так уже нельзя
//const id3:ID = true
