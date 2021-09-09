function toArray(x) {
    console.log('in to array');
    return Array.prototype.slice.call(x);
}

Function.prototype.curry = function () {

    if(arguments.length < 1) {
        return this; // return original func
    }


    let _method = this;
        args = toArray(arguments);

    return function () {
        return _method.apply(this, args.concat(toArray(arguments)));
    }
}

function foo(param1, param2) {
    console.log(param1, param2);

}

let newFunc = foo.curry(1);
newFunc();