//гуарды - это вспомогательные конструкции в ТС, которые позволяют работать нам с типами
function strip(x: string | number) {
    if (typeof x === 'number') { 
        return x.toFixed(2)
    }
    return x.trim()
    
}

class MyResponse{
    header = 'response header'
    result = 'response result'
}

class MyError{
    header = 'error header'
    message = 'error message'
}

function handle(res: MyResponse | MyError){
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
        
    } 
    else {
        return {
            info: res.header + res.message
        }
    }
}

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType){
    //...
    console.log(type)
    console.log(typeof type)
}
setAlertType('success')
setAlertType ('warning')
setAlertType ('danger')

//А вот это не сможет скомпилироваться
//6_guards.ts:45:15 - error TS2345: Argument of type '"default"' is not assignable to parameter of type 'AlertType'.
//setAlertType ('default')

const res1 = new MyError()
console.log(handle(res1))
