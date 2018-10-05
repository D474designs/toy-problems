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

var binarySearch = function (array, target) {
  /* START SOLUTION */
  // if first index value is less more than target
    // return null
  // get array length
  // split in half at middle if odd length
    // if middle length is less than target
      // use second half
    // if middle length is more than target
      // use first half
  // split into two halves if even length
    // if first half last index value is more than target
      // use first half
    // if first half last index value is less than target
      // use second half

  // use recursion to continue binary array size reduction

  // iterate through remaining array
    // return index value
  /* END SOLUTION */
};
