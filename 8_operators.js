//всопомогательные операторы ТС
//применили оператор keyof к интерфейсу
//в итоге на выходне в типе PersonKeys могут находиться значения 'name', 'age'
var key = 'name';
//а другое значение присвоить не получится
//8_operators.ts:16:1 - error TS2322: Type '"age1"' is not assignable to type '"name" | "age"'.
//key = 'age1'
key = 'age';
var u1 = 'name';
console.log(u1);
