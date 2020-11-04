const str: string = 'Hello'
//console.log(str)    
const isFetching: boolean = true
const isLoading: boolean = false
const int: number = 42
const float: number = 4.2
const num: number = 3e10
const message: string = 'Hello TypeScript'
const numberArray:number[] = [1,1,2,3,5,8,13]
const numberArray2:Array<number> = [1,1,2,3,5,8,13]
const words:string[] = ['Hello', 'TypeScript']

//Tuple
const contact:[string, number]=['Vadim', 1234567]

//Any
let variable:any = 42

//.... хотим переопределить данную переменную через какое-то время
variable = 'New string'
//пустой массив
variable  = []

//=== функция тип void означает, что функция ничего не возвращает
function sayMyName(name:string):void{
    console.log(name)
}

//вызов функции
sayMyName('Хайзенберг')


//новый тип в TS:Never
//Never используется когда функция возвращает нам ошибку или когда функция постоянно что-либо делает

function throwError(message:string):never{   
    throw new Error(message)
}

function infinite():never{
    while(true){

    }
}

//Type
//спец конструкции для создания своих собственных типов
type Login = string
const login: Login = 'admin'
//но мы не можем сделать так
//const login2: Login = 2
//, т.к. по сути мы создаем alias (псевдоним типа)

//также можно можно указывать потенциально возможные типы для одной переменной при помощи Type
type ID = string | number
const id1:ID = 1234
const id2:ID = '1234'
//а так уже нельзя
//const id3:ID = true


//тип null и undefined
//зачастую их можно встретить вот в таком контексте, пустой тип для переменных
tyoe SomeType = string | null | undefined
//а для функций пустой тип void
