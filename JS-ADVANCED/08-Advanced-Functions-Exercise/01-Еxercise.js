function solve(arrayOfNumbers, criteria) {

    let result = []

    arrayOfNumbers.sort((a,b) => criteria == 'asc' ? a - b : b - a).forEach(number => result.push(number));

    console.log(result);
}


solve([14, 7, 17, 6, 8], 'desc');