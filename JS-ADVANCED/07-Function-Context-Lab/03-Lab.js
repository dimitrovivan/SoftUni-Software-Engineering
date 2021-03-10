function arrayMap(array,func) {

    let result = array.reduce((acc,x) => {
       
        acc.push(func(x));
        return acc;
    }, [])

    return result;
}


let nums = [1,2,3,4,5];
console.log(arrayMap(nums,(item)=> item * 2)); // [ 2, 4, 6, 8, 10 ]
