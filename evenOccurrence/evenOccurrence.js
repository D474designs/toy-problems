/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  var hash = {};
  var i;

  for (i = 0; i < arr.length; i++;) {
    hash[arr[i]] = !hash[arr[i]];
  }

  for (i = 0; i <arr.length; i++) {
    if (!hash[arr[i]]) {return arr[i];}
  }

  return null;
};
//   // Your code here.
//   /* START SOLUTION */
//   // iterate through array
//   for (var key in arr) {
//       // create object with index value as key, and property
//
//   }
//   // iterate through object
//   // return all keys with even numbered properties
//
//   // iterate through array
//   for (var key in arr) {
//       // create object with index value as key, and property,
//       // and value of first occurrence
//         // create conditional statement to handle recurrences
//
//       // iterate through array
//         // return first ocrruence(s)
//
//   }
//   /* END SOLUTION */
// };
