//всопомогательные операторы ТС

//допустим у нас есть интерфейс
interface Person{
    name: string
    age: number
}

//теперь мы можем создать отдельный тип, состоящий из ключей данного интерфейса
type PersonKeys = keyof Person
//применили оператор keyof к интерфейсу
//в итоге на выходне в типе PersonKeys могут находиться значения 'name', 'age'
let key:PersonKeys = 'name'
//а другое значение присвоить не получится
//8_operators.ts:16:1 - error TS2322: Type '"age1"' is not assignable to type '"name" | "age"'.
//key = 'age1'
key = 'age'

//2 пример есть тип
type User = {
    _id:number
    name:string
    email:string
    createdAt:Date
}

//на основании это типа хотим создать свой исключая некоторые поля
type UserKeysNoMeta1 = Exclude<keyof User, '_id'|'createdAt'>

//2 вариант записи
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

let u1: UserKeysNoMeta1 = 'name'
console.log(u1)