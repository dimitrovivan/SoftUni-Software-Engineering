function findWholeStringLengthAndAverage(firstString, secondString, thirdString) {

    let totalStringsLength = firstString.length + secondString.length + thirdString.length;
    let averageStringsLength = Math.floor(totalStringsLength / 3);

    console.log(totalStringsLength + '\n' + averageStringsLength);
}

findWholeStringLengthAndAverage('pasta', '5', '22.3');