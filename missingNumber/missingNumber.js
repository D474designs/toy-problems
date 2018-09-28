/**
 * You're given an array every number between 1 and 100,000, except one integer
 * is missing. The numbers are not guaranteed to be consecutive, either! Write a
 * function to detect which number is missing.
 *
 * Extra credit: Refactor your solution to take O(n) time.
 */

var findMissingNumber = function(array) {
  // Your code here

/* START SOLUTION */
  // add up 1000 + (1000 - n) where n starts at 1 and increments to 999
    // add the testArray together
      // subtract the result from your first value
        // return the resulting number
  var a = [5], count = 5;
  var missing = new Array();

  for(var i=1;i<=count;i++) {
    if(a.indexOf(i) == -1){
      missing.push(i);
    }
  }
  console.log(missing); // to check the result.
/* END SOLUTION */
};

/**
 * Here's a helpful array with every number between 1 and 100000, excluding one
 * random number.
 */
var testArray = _.shuffle(_.range(100000)).slice(1);
