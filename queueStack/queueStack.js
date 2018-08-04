/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  /* START SOLUTION */
  // keep track of our sequence
  this.counter = 0;
  // prototypal placeholder
   this.storage = {};
  /* END SOLUTION */

  // add an item to the top of the stack
  this.push = function() {
    /* START SOLUTION */
       this.storage[this.counter++] = value;
    /* END SOLUTION */
  };

  // remove an item from the top of the stack
  this.pop = function() {
    /* START SOLUTION */
    if (this.counter > 0) {
      var removed = this.storage[--this.counter];
      delete this.storage[this.counter];
      return removed;
    }
    /* END SOLUTION */
  };

  // return the number of items in the stack
  this.size = function() {
    /* START SOLUTION */
    return this.counter;
    /* END SOLUTION */
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();
  this.counter = 0;
  this.storage = {};
  // called to add an item to the `queue`
  this.enqueue = function() {
    /* START SOLUTION */
    this.storage[this.counter++] = value;
    /* END SOLUTION */
    // TODO: implement `enqueue`
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    /* START SOLUTION */
    if (this.counter > 0) {
      var removed = this.storage[0];

      // reassigns numeric keys to maintain output sequence
      for (var i = 0; i < this.counter; i++) {
        this.storage[i] = this.storage[i+1];
      }

      // keep counter from negative integers and reset numeric key
      delete this.storage[--this.counter];
      return removed;
    }
    /* END SOLUTION */
    // TODO: implement `dequeue`
  };

  // should return the number of items in the queue
  this.size = function() {
    /* START SOLUTION */
    return this.counter;
    /* END SOLUTION */
    // TODO: implement `size`
  };
};
