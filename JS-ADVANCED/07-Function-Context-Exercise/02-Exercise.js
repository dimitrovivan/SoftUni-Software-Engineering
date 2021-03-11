function getFibonator() {
    let currentNum = 0;
    let nextNum = 1;

    function fib() {

        let fibNum = currentNum + nextNum;

        nextNum = currentNum;

        currentNum = fibNum;

        

        return fibNum;
    }

    return fib;
}


let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 2
console.log(fib()); // 2
console.log(fib()); // 2
console.log(fib()); // 2
console.log(fib()); // 3
