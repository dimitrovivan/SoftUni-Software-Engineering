function sumOfArrayRange(array, startIndex, endIndex){
    
    if(!Array.isArray(array)) {
        throw new Error(NaN);
    }
    
    startIndex = startIndex < 0 ? 0 : startIndex;
    endIndex = endIndex > array.length ? array.length : endIndex + 1;
    

    let result = array.map(x => Number(x)).slice(startIndex, endIndex).reduce((acc,curr) => acc += curr , 0);

    return result;

}

let arr = [10, 20, 30, 40, 50, 60];

try {
console.log(sumOfArrayRange([], 1, 2))
} catch(e) {
    console.log(e.message);
}