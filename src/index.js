module.exports = function towelSort(matrix) {
   matrix = matrix || [];
   let resultArray = [];

   for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
         matrix[i].map(element => resultArray.push(element));
      } else {
         matrix[i].reverse().map(element => resultArray.push(element));
      }
   }

   return resultArray;

   // for (let index = 0; index < matrix.length; index++) {
   //    if (index % 2 === 0) {
   //       for (let i = 0; i < matrix[index].length; i++) {
   //          resultArray.push(matrix[index][i]);
   //       }
   //    } else {
   //       for (let i = matrix[index].length - 1; i >= 0; i--) {
   //          resultArray.push(matrix[index][i]);
   //       }
   //    }
   // }

   // return resultArray;
}
