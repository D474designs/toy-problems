/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function(/*...*/ /* START SOLUTION */  /* END SOLUTION */) {
    // TODO: implement `insert()`
    /* START SOLUTION */
    /* END SOLUTION */
  };

  result.retrieve = function(/*...*/ /* START SOLUTION */  /* END SOLUTION */) {
    // TODO: implement `retrieve()`
    /* START SOLUTION */
    /* END SOLUTION */
  };

  result.remove = function(/*...*/ /* START SOLUTION */ /* END SOLUTION */) {
    // TODO: implement `remove()`
    /* START SOLUTION */

    /* END SOLUTION */
  };

  return result;
};

// HashTable.prototype.retrieve = function(k) {
//   //set a variable to for result
//   var result = undefined;
//   //we need to return the value of k if it exists at this._storage[index]
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   //check if this._storage[index] exists
//   if (!this._storage[index]) {
//     //if it doesn't, return an error
//     result = 'Error: not found';
//   } else {
//     //iterate through this._storage[index]
//     for (var i = 0; i < this._storage[index].length; i++) {
//       //if k exists at 0 index, return the value at the 1 index
//       if (this._storage[index][i][0] === k) {
//         result = this._storage[index][i][1];
//       }
//     }
//   }
//   //return result
//   return result;
// };
//
// HashTable.prototype.remove = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   //iterate through this._storage[index]
//   for (var i = 0; i < this._storage[index].length; i++) {
//     //if k exists at 0 index, remove the entire array from this._storage[index]
//     if (this._storage[index][i][0] === k) {
//       this._storage[index].splice(i, 1);
//     }
//   }
// };
//
// var HashTable = function() {
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit); //=> {var storage = [], get: f(x), set: f(x), each: f(x)}
// };
//
// HashTable.prototype.insert = function(k, v) {
//   var tuple, index = getIndexBelowMaxForKey(k, this._limit);
//   //check if a bucket exists at 'index'
//   //if none exists
//   if (!this._storage.get(index)) { //if bucket length is 0
//     //create a bucket/array
//     var newBucket = [];
//     //push another array containing first element as k and the second as v into bucket
//     tuple = [k,v];
//     newBucket.push(tuple);
//     //call set with this new array as the value
//     this._storage.set(index, newBucket);
//   } else { //if a bucket does exist at 'index'/else
//     //use get to obtain bucket that exists at 'index' and assign it to variable
//     var bucket = this._storage.get(index);
//     if (bucket.length > 0) {
//       var found = false;
//       for (var i = 0; i < bucket.length; i++) {
//         if (bucket[i][0] === k) {
//           found = true;
//           bucket[i][1] = v;
//         }
//       }
//       if (!found) {
//         tuple = [k,v];
//         bucket.push(tuple);
//       }
//     }
//   }
// };
//
// HashTable.prototype.retrieve = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var bucket = this._storage.get(index);
//   if (bucket.length === 1) {
//     if (bucket[0][0] === k) {
//       return bucket[0][1];
//     }
//   } else {
//     for (var i = 0; i < bucket.length; i++) {
//       if (bucket[i][0] === k) {
//         return bucket[i][1];
//       }
//     }
//   }
// };
//
// HashTable.prototype.remove = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var origVal, bucket = this._storage.get(index);
//   if (bucket.length === 1) {
//     if (bucket[0][0] === k) {
//       origVal = bucket[0][1];
//       bucket[0][1] = undefined;
//       return origVal;
//     }
//   } else {
//     for (var i = 0; i < bucket.length; i++) {
//       if (bucket[i][0] === k) {
//         origVal = bucket[i][1];
//         bucket[i][1] = undefined;
//         return origVal;
//       }
//     }
//   }
// };
