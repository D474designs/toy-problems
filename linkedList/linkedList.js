/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  //fill me in!
  /* START SOLUTION */
  var list = {};

  this.tail = null;
  this.head = null;
  /* END SOLUTION */
};

//write methods here!

LinkedList.prototype.addToTail = function(/*START SOLUTION*//*END SOLUTION*/) {
  /* START SOLUTION */
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  /* END SOLUTION */
};

LinkedList.prototype.removeHead = function() {
  /* START SOLUTION */
  list.removeHead = function() {
    var babyWalrus = this.head.value;
    this.head = this.head.next;
    return babyWalrus;
  /* END SOLUTION */
};

LinkedList.prototype.contains = function(/*START SOLUTION*//*END SOLUTION*/) {
  /* START SOLUTION */
  var currentHead = this.head;
  while (currentHead) {
    if (target === currentHead.value) {
      return true;
    } else {
      currentHead = currentHead.next;
    }
  }
  return false;
  /* END SOLUTION */
};

return list;

LinkedList.prototype.makeNode = function(/*START SOLUTION*/value/*END SOLUTION*/) {
  /* START SOLUTION */
  var node = {};

  node.value = value;
  node.next = null;

  return node;
  /* END SOLUTION */
};
