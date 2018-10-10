/*
 * Extend the native class prototypes for Object, Array, and Function such that
 * the following use cases would work:
 *
 * {a:3,b:4}.size(); // => 2
 * [3,4,5,6].shuffle(); // => [4,6,3,5] or similar
 * alert.runTwice(window, 'hi'); // alerts 'hi' then alerts 'hi' again.
 *    // the first argument is the context and any additional arguments are
 *    // passed to the original function
 */

// TODO: Your code here!

/* START SOLUTION */
//size
// iterate through oject keys or use objectKeys(obj).length
  // return length of array
//shuffle
// use splice with Math.random and Math.floor to splice values
  // insert them using arr.insert randomly in a similar fashion
    // return modified array or new array
//runTwice
// run function
  // pass in argument(s)
    // run function again
      // pass in argument(s) again
  // return function seperately or together
/* END SOLUTION */
