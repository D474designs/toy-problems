// /*
//  * function bind():
//  *
//  * example 1:
//  *
//  * var alice = {
//  *   name: 'alice',
//  *   shout: function(){
//  *     alert(this.name);
//  *   }
//  * }
//  * var boundShout = bind(alice.shout, alice);
//  * boundShout(); // alerts 'alice'
//  * boundShout = bind(alice.shout, {name: 'bob'});
//  * boundShout(); // alerts 'bob'
//  *
//  * example 2:
//  *
//  * var func = function(a, b){ return a + b };
//  * var boundFunc = bind(func, null, 'foo');
//  * var result = boundFunc('bar');
//  * result === 'foobar'; // true
//  *
// */
//
//
// //specification:
// //with the two problems each of their inputs will take a function and an object to be evaluated as this, and the ouput is a function that has binded the function and the 'this' parameter
// //
// //justification:
// // the purpose of this function is to assign any this-worthy item (such as an object) to 'this' inside of a function. as you can see some functions are known to use 'this', but have no arguments nor an object that it's attached to, and this is the use for bind.
// //
// //explanation:
// // the relationship between the input and the output is essentially making a function that utilizes the function taken in with respect to the object.
// //visualization:
// //
// //approximation:
// // let's start with the utilization of arguments once the function is called, we know it is an array-like object.
// // we isolate arguments[0] with the rest by using Array.
// var bind = function(...args
// ) {
//   // TODO: Your code here
//   return args[0].call(args[1]);
// };
//
// var alice = {
//  name: 'alice',
//  shout: function(){
//    alert(this.name);
//  }
// }
//
//
// var boundShout = bind(alice.shout, alice);
// boundShout = bind(alice.shout, {name: 'bob'});
// boundShout(); // alerts 'bob'
//
//
// /*
//  * Function.prototype.bind:
//  *
//  * example 1:
//  *
//  * var alice = {
//  *   name: 'alice',
//  *   shout: function(){
//  *     alert(this.name);
//  *   }
//  * }
//  * var boundShout = alice.shout.bind(alice);
//  * boundShout(); // alerts 'alice'
//  * boundShout = alice.shout.bind({name: 'bob'});
//  * boundShout(); // alerts 'bob'
//  *
//  * example 2:
//  *
//  * var func = function(a, b){ return a + b };
//  * var boundFunc = func.bind(null, 'foo');
//  * var result = boundFunc('bar');
//  * result === 'foobar'; // true
//  *
// */
//
// Function.prototype.bind = function(...args
// ) {
//   // TODO: Your code here
//   console.log(args);
//   return this.call(args[0]);
// };
//
//
//
// var alice = {
//  name: 'alice',
//  shout: function(){
//    alert(this.name);
//  }
// }
//
// var boundShout = alice.shout.bind(alice);
// boundShout(); // alerts 'alice'
// boundShout = alice.shout.bind({name: 'bob'});
// boundShout(); // alerts 'bob'
//
// var func = function(a, b){ return a + b };
// var boundFunc = func.bind(null, 'foo');
// var result = boundFunc('bar');
// result === 'foobar'; // true

/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function(/*START SOLUTION*/func, context/*END SOLUTION*/) {
  // TODO: Your code here
  /* START SOLUTION */
  // take in paramaters
    // return arguments within function context
  /* END SOLUTION */
};

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(/*START SOLUTION*/ context /*END SOLUTION*/) {
  // TODO: Your code here
  /* START SOLUTION */
  var previousArgs = Array.prototype.slice.call(arguments, 1);
  var func = this;

  // use arguments from the prototype chain
    // use this with parameter

  return function() {
    var args = Array.prototype.slice.call(arguments);
    args = previousArgs.concat(args);

    return func.apply(context, args);
  };
  /* END SOLUTION */
};
