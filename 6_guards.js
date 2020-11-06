//гуарды - это вспомогательные конструкции в ТС, которые позволяют работать нам с типами
function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
var MyResponse = /** @class */ (function () {
    function MyResponse() {
        this.header = 'response header';
        this.result = 'response result';
    }
    return MyResponse;
}());
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = 'error header';
        this.message = 'error message';
    }
    return MyError;
}());
function handle(res) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        };
    }
    else {
        return {
            info: res.header + res.message
        };
    }
}
function setAlertType(type) {
    //...
    console.log(type);
    console.log(typeof type);
}
setAlertType('success');
setAlertType('warning');
setAlertType('danger');
//А вот это не сможет скомпилироваться
setAlertType('default');
var res1 = new MyError();
console.log(handle(res1));
