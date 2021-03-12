function solution(bindedNumber) {

    return (number) => bindedNumber + number;
}

let add5 = solution(7);
console.log(add5(2));
console.log(add5(3));
