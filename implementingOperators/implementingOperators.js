// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
  /* START SOLUTION */
  // take x and increment by x y times
    // return the result
  /* ELSE
  // TODO: should return the product of x * y
  END SOLUTION */
};

var divide = function(x, y) {
  /* START SOLUTION */
  // if no decimal present
    // take x and add three zeros
  // if decimal present add zeroes until three decimal places are present
    // remove dot and store where to replace it upon returning value
  // if more than three decimal places are present do not add zeroes
    // remove dot and replace it to exact position upon returning value
  // add y to itself until x is reached or until greater than x
    // return amount of times y was added to itself with replaced dot position
  /* ELSE
  // TODO: should return the quotient of x / y
  END SOLUTION */
};

var modulo = function(x, y) {
  /* START SOLUTION */
  // use similar code as divide
    // if y added to itself is greater than x
      // stop function and return y minus x
  /* ELSE
  // TODO: should return the remainder of x / y
  END SOLUTION */
};

/* START SOLUTION */
/* END SOLUTION */
