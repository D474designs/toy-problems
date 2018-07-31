/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

// var allAnagrams = function(string) {
//   // Your code here.
//   /* START SOLUTION */
//   var trimmedString = string.split(" ");
//   var splitArray = trimmedString.split("");
//   return splitArray;
//   /* END SOLUTION */
// };

// var allAnagrams = function(string) {
//   // Your code here.
//   /* START SOLUTION */
//   var newStrings = [];
//   var splitArray = string.split("");
//   // for (i = splitArray.length; i > 0; i--) {
//   newStrings.push(splitArray[splitArray.length - 1]);
//   newStrings[0].concat(splitArray[1]);
//   newStrings[0].concat(splitArray[2]);
//   // }
//   return newStrings;
//   /* END SOLUTION */
// };

var allAnagrams = function(string) {
  // Your code here.
  /* START SOLUTION */
var splitArray = string.split("");
var randomChar = splitArray[Math.floor(Math.random() * 3)];
return randomChar;
  /* END SOLUTION */
};
