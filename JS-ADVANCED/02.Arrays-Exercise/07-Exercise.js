function solve(matrix) {

  let result = true;

  let flag = true;
  let sumToCompare;
   
     matrix.forEach((row, rowIndex) => {
     
        let currentRowSum = 0;
        let currentColumnSum = 0;

         row.forEach((element, elementIndex) => {
               

            currentColumnSum += matrix[rowIndex][elementIndex];

            currentRowSum += element;
         })

        if (flag) {
            sumToCompare = currentRowSum
            flag=false;
            }

        if (currentRowSum != sumToCompare || currentColumnSum != sumToCompare) {
            result = false;
        }

     });
     
     result ? console.log('true') : console.log('false');
}

solve (
[]
)