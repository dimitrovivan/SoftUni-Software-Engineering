function Spy (target, method) {

    let result = {
      count: 0,
    }
    let originalMethod = target[method];

    target[method] = function(...params) {
      result.count += 1;
      return originalMethod(...params);
    }

    return result;
    
}


let obj = {
    method:(name, secondName)=> "invoked " + name + ` ${secondName}`,
}
let spy = Spy(obj,"method");

console.log(obj.method('Ivan','asdasd'));


console.log(spy) // { count: 3 }
