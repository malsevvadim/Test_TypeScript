class TypeScript{
    version: string
    constructor(version:string){
        this.version = version
    }
    info(name:string) {
        return '[${name}]: TypeScript version is ${this.version}'
    }
}

class Car{
    readonly model: string
    readonly numberOfWheels: number = 4
    constructor(theModel:string){
        //поле можем перезаписать только внутри конструкутора, хотя у нас оно только для чтения, но ведь его нам надо как-то определить
        this.model = theModel
    }
}

//второй вариант записи с readonly полями задаваемыми через конструктор, идентичен первой записи
class Car2{    
    readonly numberOfWheels: number = 4
    constructor(readonly Model:string){}
}

//===================
//МОДИФИКАТОРЫ
//по умолчанию все модификаторы public, т.е. если их не указывать
class Animal{
    protected voice: string = ''
    public color: string = 'black'
    private go(){
        console.log('Go')
    }    
    //private элементы и методы доступны только в том классе, в котором были определены
    constructor(){
        this.go()
    }
}

class Cat extends Animal{
    public setVoice(voice: string): void{
        //в наследуемых классах и в самом классе к свойству protected можно обратиться, но при работе с экземплярами нельзя
        this.voice = voice
        //this.go() - ошибка, недоступна функция, т.к. private в родительском классе
    }
}

const cat = new Cat()
//cat.voice  - ошибка, т.к. экземпляр класса, а свойство объявлено как protected
cat.setVoice('test')
cat.color = 'green'
console.log(cat.color)


//==============================
//Абстрактные классы
//они не компилируются, но нужны на этапе разработки, чтобы от них наследоваться
abstract class Component{
    //здесь описываются методы, которые будут наследоваться от данного класса
    abstract render(): void
    abstract info():string

}

class AppComponent extends Component{
    render(): void{
        console.log('Component AppComponent on render')
    }
    info(): string{        
        return 'This is info AppComponent'
    }
}