//интерфейсы нужны только для объектов - описывают их поля и функции
//интерфейсы нужны только на этапе разработки и ни во что не компилируются
interface Rect{
    //в интерфейсах можно создавать поля только для чтения через модификатор readonly
    readonly id:string
    //при помощи суффикса ? можно делать параметры необятельными
    color?:string
    //можно добавлять вложенные объекты
    size: {
        width:number
        height: number
    }
}

//теперь можно создавать различные объекты с типом Rect
//работает autocomplete
const rect1:Rect = {
    id: '1234'
    , size: {
        width: 20,
        height: 30
    }
    , color: '#ccc'
}

const rect2:Rect = {
    id: '12345'
    , size: {
        width: 10,
        height: 5
    }    
}

//необязательные поля можно указать позже через точку
rect2.color = 'black'

//а вот переопределить readonly поля не получится
//rect2.id = '123231'
//при компиляции выходит такое
//2_interfaces.ts:38:7 - error TS2540: Cannot assign to 'id' because it is a read-only property.


//в джаваскипте несмотря на то, что мы объявляем константу, но мы можем изменять внутреннее состояние - если это объект или массив
//, но мы не можем их переассайнивать, т.е. писать повторно rect2 = {}... 


//по умолчанию пустой объект приведенный к типу Rect 
const rect3 = {} as Rect
//2 вариант - нативная старая запись
const rect4 = <Rect> {}

//====================== Тема наследования интерфейсов
interface RectWithArea extends Rect{
    //функция в интерфейсе для расчета площади, после => указывается возвращаемый тип 
    getArea: () => number 
}

const rect5:RectWithArea = {
    id: '123'
    , size: {
        width: 20,
        height: 20
    } 
    , getArea():number{
        return this.size.width * this.size.height
    }
    
}

//Взаимодействие интерфейсов с классами
interface IClock{
    time:Date
    setTime(date: Date):void
}

class Clock implements IClock{
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}


//=====================
//Интрефейс с большим количеством динамических ключей

interface Styles{
    [key: string]: string
}

const  css: Styles = {
    border: '1px solid black'
    , marginTop: '2px'
    , borderRadius: '5px'
}