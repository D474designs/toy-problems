/*
 * Given two numbers, find all factors of each.
 * Return all of their common factors sorted from highest to lowest.
 *
 * Example 1:
 *  Find all the common factors of 12 and 18.
 *  Factors of 12 are 12, 6, 4, 3, 2, 1
 *  Factors of 18 are 18, 9, 6, 3, 2, 1
 *  The common factors of 12 and 18 are 6, 3, 2, 1
 *
 * Example 2:
 *  var common = commonFactors(20, 25);
 *  console.log(common); // [5, 1]
*/

// var commonFactors = function(num1, num2) {
//   // TODO: Your code here!
//   /* START SOLUTION */
//   // use the modulos to find integers that equate to 0
//     // push to an array for each input
//   // use the modulos to find integers that equate to 0
//     // push to an array for each input
//   // compare arrays and return common factors
//   /* END SOLUTION */
// };

var commonFactors = function(num1, num2) {
 var factors = [];
 for(let i = 0; i <= num1; i++){
     if( num1 % i === 0 && num2 % i === 0){
       factors.push(i)
     }
 }
 return factors;
}
