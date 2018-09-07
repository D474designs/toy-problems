/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

/* START SOLUTION */
// HELPER FUNCTIONS!
/* END SOLUTION */

var commonCharacters = function(string1, string2, string3) {
  // TODO: Your code here!
  /* START SOLUTION */
  let str1;
  let str2;
  let str3;
  var strX;
  str1 = string1.trim();
  str2 = string2.trim();
  str3 = string3.trim();
  str1 = string1.toLowerCase();
  str2 = string2.toLowerCase();
  str3 = string3.toLowerCase();

  for (let i of str1) {
    for (let j of str2) {
      for (let k of str3) {
        if (i === j && k) {
          strX.concat(i);
        }
      }
    }
  }
  return strX;
  /* END SOLUTION */
};
commonCharacters('Asimov', 'Dimitri', 'Muhammed');
