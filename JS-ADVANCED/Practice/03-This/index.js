function spy(obj, method) {
    const originalFunc = obj[method];
    const result = {
        count: 0
    }

    obj[method] = function () {
        result.count++;
        originalFunc.apply(obj, arguments);
    }
    return result;
}

let obj = {
    method : (a, b ,c ) => 'invoked'
}   

let spyObj = spy(obj, "method");

obj.method(1,2,3);
obj.method();
obj.method();

let spyConsole = spy(console, "log");

console.log(spyConsole);
console.log(spyConsole);
console.log(spyConsole);

console.log(spyObj);