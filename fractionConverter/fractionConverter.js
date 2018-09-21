/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here
  /* START SOLUTION */

  // if number less than 1
    //
  // if number more than 1
    //

  // number.toString();

  function highestCommonFactor(a,b) {
    if (b==0) return a;
      return highestCommonFactor(b,a%b);
  }

  var decimal = number;
  var decimalArray = decimal.split(".");
  var leftDecimalPart = decimalArray[0];
  var rightDecimalPart = decimalArray[1];

  var numerator = leftDecimalPart + rightDecimalPart
  var denominator = Math.pow(10,rightDecimalPart.length);
  var factor = highestCommonFactor(numerator, denominator);
  denominator /= factor;
  numerator /= factor;

  // document.getElementById("divSolution").innerText = numerator + "/" + denominator;
  return numerator + "/" + denominator;
  /* END SOLUTION */
};
