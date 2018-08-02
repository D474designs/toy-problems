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
  var randomChar = splitArray[Math.floor(Math.random() * string.length)];
    for (var i = 0; i < 21; i++) {
      return randomChar;
    }
  /* END SOLUTION */
};

// allAnagrams = function(string) {
//   var anagrams = {};
//   var generator = function(test, options) {
//     if (test.length === string.length) {
//       anagrams[test] = true
//     }
//     for (var i = 0; i < options.length; i++) {
//       generator(test + options[i],
//       options.slice(0, i) + options.slice(i + 1))
//     }
//   }
//     generator('', string);
//     return Object.keys(anagrams);s
// };

// var allAngrams = function(string) {
//   if (string.length === 0) { return ['']; }
//
//   var result = {};
//   string.split('').forEach(function(letter, i) {
//     allAnagrams(remainingLetters).forEach(function(anagram) {
//       result[letter + anagram] = true;
//     });
//   });
//   return Object.keys(result);
// };
