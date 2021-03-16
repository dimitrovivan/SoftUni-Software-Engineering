function sumFactory() {

    let firstElement;
    let secondElement;
    let resultElement;
    
    return {

        init(selector1,selector2,resultSelector) { 
            firstElement = document.querySelector(selector1);
            secondElement = document.querySelector(selector2);
            resultElement = document.querySelector(resultSelector);
        },

        add: () => {

            resultElement.value = Number(firstElement.value) + Number(secondElement.value);
            
            firstElement.value = '';
            secondElement.value = '';
        },

        subtract: () => {

            resultElement.value = Number(firstElement.value) - Number(secondElement.value);
            
            firstElement.value = '';
            secondElement.value = '';
        }
    }
}

let subBtn = document.querySelector('#subtractButton');
let sumBtn = document.querySelector('#sumButton');


sumBtn.addEventListener('click', () => {
    objSum.add();
});

subBtn.addEventListener('click', () => {
    objSum.subtract();
});


let objSum = sumFactory();
objSum.init('#num1','#num2','#result');
objSum.add();
objSum.subtract();

