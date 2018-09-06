/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Introduce i into the global scope so we can test function efficiency
var i;

// Feel free to add helper functions if needed.
/* START SOLUTION */

/* END SOLUTION */

var bubbleSort = function(array) {
  // Your code here.
  /* START SOLUTION */
  var bubble1;
  var bubble2;
// iterate through array
  for (var j = 0; j <= array.length; i++) {
  // if j is more than j+1 swap index values
    if (array[j] > array[j+1]) {
      // bubble = array.splice(1, j);
      // array[j+1] =

    }
    // increment j
  // else do not swap index values
    // increment j
  }
// return sorted array

// extra credit 1:
// if array values are not swapped as many times as their are values
// in the array, then return sorted array and stop the function

// extra credit 2:
// set lowest and greatest values in the array to variables and assign
// them accordingly within the array, do not iterate through the 0
// and the final array index, continue doing this incrementing the lowest
// variable by 1, and the last index by -1, until you sort the array
  /* END SOLUTION */
};
