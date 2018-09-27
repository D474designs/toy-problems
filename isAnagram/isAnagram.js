/**
 * Modify the String prototype to add a new method `isAnagram`.
 * `isAnagram` takes a single string argument. It returns true if that string
 * is an anagram of the string it was called on, and false otherwise.
 *
 * Example:
 *  ("roasting").isAnagram("organist"); // true
 *  ("presence").isAnagram("presents"); // false
 *
 * Anagrams should ignore spaces, punctuation, and capitalization:
 *  ("Quid est veritas?").isAnagram("Est vir qui adest."); // true
 *
 * Extra credit: It is bad practice to extend a native prototype with enumerable
 * properties. Make your isAnagram method non-enumerable.
 *
 * Extra extra credit: What is the complexity of your method in time and space?
 * There is an algorithm that uses O(n) time and O(1) space.
 *
 */

String.prototype.isAnagram = function(string) {
  // TODO: Your code here!
  /* START SOLUTION */
  // remove spaces and punctuation
  // split string into characters and push to an array
   // sort array
    // compare array values
      // if arrays are equal return true, else return false
  /* END SOLUTION */
};

/* START SOLUTION */
  // add helper function to verify enumerable props
  // Object.defineProperty( isAnagram, {
  //   enumerable: false,
  //   writable: false,
  //   configurable: false
  // });
/* END SOLUTION */
