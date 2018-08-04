var LinkedList = function() {
 //fill me in!
 /* START SOLUTION */
 this.head = null;
 this.tail = null;
 /* END SOLUTION */
};

//write methods here!

LinkedList.prototype.addToTail = function(/*START SOLUTION*/value/*END SOLUTION*/) {
 /* START SOLUTION */
 var newTail = this.makeNode(value);
 if ( !this.head ) {
   this.head = newTail;
 }
 if ( this.tail ) {
   this.tail.next = newTail;
 }
 this.tail = newTail;
 /* END SOLUTION */
};

LinkedList.prototype.removeHead = function() {
 /* START SOLUTION */
 var currentHead = this.head;
 if (!this.head) {
   return null;
 }
 if (this.head === this.tail) {
   this.head = this.tail = null;
 } else {
   this.head = this.head.next;
 }
 return currentHead ? currentHead.value : null;
 /* END SOLUTION */
};

LinkedList.prototype.contains = function(/*START SOLUTION*/target/*END SOLUTION*/) {
 /* START SOLUTION */
 var node = this.head;
 while ( node ) {
   if ( node.value === target ) { return true; }
   node = node.next;
 }
 return false;
 /* END SOLUTION */
};

LinkedList.prototype.makeNode = function(/*START SOLUTION*/value/*END SOLUTION*/) {
 /* START SOLUTION */
 var node = {};
 node.value = value;
 node.next = null;
 return node;
 /* END SOLUTION */
};

// /**
//  * Write a stack using your preferred instantiation pattern.
//  * Avoid using native array methods i.e., push, pop, and length.
//  * Once you're done, implement a queue using two stacks.
//  */
//
// /**
//   * Stack Class
//   */
// var Stack = function() {
//
//   var storage = [];
//
//   this.push = function() {
//       storage.push.apply(storage, arguments);
//   };
//   this.pop = function() {
//       return storage.pop.apply(storage, arguments);
//   };
//   this.size = function() {
//       return storage.length;
//   };
//   this.peek = function() {
//       return storage;
//   };
//
//   // /* START SOLUTION */
//   // // keep track of our sequence
//   // this.counter = 0;
//   // // prototypal placeholder
//   //  this.storage = {};
//   // /* END SOLUTION */
//   //
//   // // add an item to the top of the stack
//   // this.push = function() {
//   //   /* START SOLUTION */
//   //      this.storage[this.counter++] = value;
//   //   /* END SOLUTION */
//   // };
//   //
//   // // remove an item from the top of the stack
//   // this.pop = function() {
//   //   /* START SOLUTION */
//   //   if (this.counter > 0) {
//   //     var removed = this.storage[--this.counter];
//   //     delete this.storage[this.counter];
//   //     return removed;
//   //   }
//   //   /* END SOLUTION */
//   // };
//   //
//   // // return the number of items in the stack
//   // this.size = function() {
//   //   /* START SOLUTION */
//   //   return this.counter;
//   //   /* END SOLUTION */
//   // };
// };

// /**
//   * Queue Class
//   */
// var Queue = function() {
//
//   var inbox = new Stack();
//   var outbox = new Stack();
//
//   this.eneque = function() {
//       inbox.push.apply(inbox, arguments);
//   };
//   this.dequeue = function() {
//       if (outbox.size() === 0) {
//           while (inbox.size())
//               outbox.push(inbox.pop());
//       }
//       return outbox.pop();
//   };
//   this.size = function(){
//     return inbox.size() + outbox.size();
//   };
//   this.peek = function() {
//       return outbox.peek();
//   };
//
//   // // Use two `stack` instances to implement your `queue` Class
//   // var inbox = new Stack();
//   // var outbox = new Stack();
//   //
//   // this.counter = 0;
//   // this.storage = {};
//   // // called to add an item to the `queue`
//   // this.enqueue = function() {
//   //   /* START SOLUTION */
//   //   this.storage[this.counter++] = value;
//   //   /* END SOLUTION */
//   //   // TODO: implement `enqueue`
//   // };
//   //
//   // // called to remove an item from the `queue`
//   // this.dequeue = function() {
//   //   /* START SOLUTION */
//   //   if (this.counter > 0) {
//   //     var removed = this.storage[0];
//   //
//   //     // reassigns numeric keys to maintain output sequence
//   //     for (var i = 0; i < this.counter; i++) {
//   //       this.storage[i] = this.storage[i+1];
//   //     }
//   //
//   //     // keep counter from negative integers and reset numeric key
//   //     delete this.storage[--this.counter];
//   //     return removed;
//   //   }
//   //   /* END SOLUTION */
//   //   // TODO: implement `dequeue`
//   // };
//   //
//   // // should return the number of items in the queue
//   // this.size = function() {
//   //   /* START SOLUTION */
//   //   return this.counter;
//   //   /* END SOLUTION */
//   //   // TODO: implement `size`
//   // };
// };
