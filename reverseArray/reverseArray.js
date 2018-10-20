/**
 * Given an arbitrary input array, write a function that reverses the contents
 * of the array (ie, without modifying the original array.)
 * Don't use the native Array.prototype.reverse() method.
 *
 * Extra Credit: Reverse in-place (don't use an extra array).
 *
 *
 * Here's a sample input to get you going:
 *
 *   reverseArray([1, 8, 39, null, 2, 9, 'bob'])[0] // should equal => 'bob'
 */

var reverseArray = function(array) {
  /* START SOLUTION */
  var reverseArray = function(array){
    for(let i = array.length-2; i >= 0; i--){
      array.splice(array.length, 1, array[i]);
      array.splice(i, 1);
    }
    return array;
  }

var inputArray = [1,2,3,4];
var result = reverseArray(inputArray);
console.log(result);
  /* END SOLUTION */
};
