const arrayOfNumbers: Array<number> = [1,1,2,3,5,8,13,21,34,55,89]
const arrayOfStrings: Array<string> = ['Hello', 'Vadim', 'Ivanovich']
//Array - что это за объект
//<>в треугольных скобках - указываем из чего данный объект состоит

//бывают ситуации, когда одна функция может работать с разными типами данных
//напр функция для оборачивания массива
function reverse1(array){
    return array.reverse()

}
//но массивы бывают разных типов - они могут состоять из строк чисел и чисел и строк 
//для этого используются конструкция <T>

function reverse<T>(array: T[]): T[]{
    //<T> - указание того, что данная функция работает с разными типами данных
    //array массив типа T
    return array.reverse()

}

console.log(reverse(arrayOfNumbers))
console.log(reverse(arrayOfStrings))