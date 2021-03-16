function solve(input) {

    let objContainer = {};

    function carFactory() {

        return {

            create: (name, inherit, parent) => {

                let obj = {};

                if (inherit) {

                    obj = Object.create(objContainer[parent]);

                    objContainer[name] = obj;

                }

                objContainer[name] = obj;

            },

            set: (name, key, value) => objContainer[name][key] = value,

            print: name => {
                
                let currObj = objContainer[name]
                let prototype = Object.getPrototypeOf(currObj);

                let finalObj = {};

                if (prototype) {
                    finalObj = {...currObj,...prototype};5
                } else { 
                    finalObj = currObj;
                }

               let result =  Object.keys(finalObj)
                .reduce((acc,key) => [...acc, `${key}:${finalObj[key]}`],[])
                .join(', ')
                
                console.log(result);
            }

        }
    }

    let car = carFactory();

    input.map(x => x.split(' ')).forEach(([command, ...others]) => {

        car[command](...others);
    })

}

solve(['create pesho','create gosho inherit pesho','create stamat inherit gosho','set pesho rank number1','set gosho nick goshko','print stamat']
)