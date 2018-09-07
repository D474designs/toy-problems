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
  let strX;
  // let strY;
  // let strZ;

  // var str0;

  str1 = string1.trim();
  str2 = string2.trim();
  str3 = string3.trim();
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  str3 = str3.toLowerCase();
  str1 = str1.split('');
  str2 = str2.split('');
  str3 = str3.split('');

  // var fullWordList = ['1','2','3','4','5'];
  // var wordsToRemove = ['1','2','3'];
  // var filteredKeywords = fullWordList.filter((word) => !wordsToRemove.includes(word));
  // console.log(filteredKeywords);

  strX = str1.filter((i) => str2.includes(i) && str3.includes(i));

  // for (let i of str1) {
  //   for (let j of str2) {
  //     if (i === j) {
  //       strX.concat(i);
  //     }
  //     for (let k of str3) {
  //       // if (i === j && k) {
  //       //   strX.concat(i);
  //       }
  //     }
  //   }

  return strX;
  /* END SOLUTION */
};
commonCharacters('Asimovxy', 'xDiymitri', 'yMuhxammed');
