(() => {
    Array.prototype.last = function () { return this[this.length-1]};
    Array.prototype.skip = function (number) { return this.slice(Number(number))}
    Array.prototype.take = function (number) { return this.slice(0,Number(number))}
    Array.prototype.sum = function () { return this.reduce((acc,x) => acc += x ,0)}
    Array.prototype.average = function () { return (this.reduce((acc,x) => acc += x ,0)) / this.length}
})()

let testArr = [5,6,7];
console.log(testArr.last());
console.log(testArr.take(1));
console.log(testArr);
console.log(testArr.skip(2));
console.log(testArr.sum());
console.log(testArr.average());