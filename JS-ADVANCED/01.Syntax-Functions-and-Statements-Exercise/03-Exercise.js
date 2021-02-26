function sameDigits(digits) {

    digits = digits.toString();

    let sum = Number(digits[digits.length-1]);
    let areSame = 'true';

    for (let index = 0; index < digits.length - 1; index++) {

        sum += Number(digits[index]);

        if (digits[index]!==digits[index+1]) {
            areSame = 'false';
        }

    }

    console.log(areSame + '\n' + sum);
}

sameDigits(22222);