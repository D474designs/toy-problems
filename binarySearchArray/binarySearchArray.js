/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

// var binarySearch = function (array, target) {
//   /* START SOLUTION */
//   // if first index value is less more than target
//     // return null
//   // get array length
//   // split in half at middle if odd length
//     // if middle length is less than target
//       // use second half
//     // if middle length is more than target
//       // use first half
//   // split into two halves if even length
//     // if first half last index value is more than target
//       // use first half
//     // if first half last index value is less than target
//       // use second half
//
//   // use recursion to continue binary array size reduction
//
//   // iterate through remaining array
//     // return index value
//   /* END SOLUTION */
// };

var binarySearch = function (array, target) {
 /* START SOLUTION */
 var sub = function (low, high) {
   // If we are done, we haven't found the target.
   if (high === low) { return null; }    // Find the middle point.
   var mid = Math.floor((high - low) / 2) + low;    // See if we found the target.
   if (array[mid] === target) {
     return mid;    // Second check to see if we haven't found the target.
   } else if (low === high - 1) {
     return null;    // If not, decide which half to recurse on.
   } else if (array[mid] > target) {
     return sub(low, mid);
   } else {
     return sub(mid, high);
   }
 };  // Do the recursion.
 return sub(0, array.length);
 /* END SOLUTION */
};
