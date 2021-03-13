function add(firstNumber) {

    function sum(secondNumber) {

        result += secondNumber;

        return sum;
    }

    sum.toString = () => firstNumber;

    return sum;
}
console.log(add(1));