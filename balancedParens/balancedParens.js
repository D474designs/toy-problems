/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input) {
  /* START SOLUTION */
  var stack = [];

  var stack0 = [];
  var curly = 0;
  var bracket = 0;
  var parens = 0;

  var pairs = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  for (var i = 0; i < input.length; i++) {
    var chr = input[i];

    if (pairs[chr]) {
      stack.push(chr);
    } else if (chr === '}' || chr === ']' || chr === ')') {
      if (pairs[stack.pop()] !== chr) {
        return false;
      }
    }
  }

  //return false if there are any unclosed brackets
    stack0.push(chr);
    for (var j = 0; i < stack0.length; i++) {
      var chr0 = stack0[j];
      if (chr0 = '{') {
        curly++;
      }
      else if (chr0 = '[') {
        bracket++;
      }
      else if (chr0 = '(') {
        parens++;
      }
      else if (curly % 2 !=== 0 || bracket % 2 !=== 0 || parens % 2 !=== 0) {
        return false;
      }
      else {
        return true;
      }
    }
    // if (pairs[chr] === '{' || '[' || '(') {
    //   return false;
    // }
  return stack.length === 0;
  /* END SOLUTION */
};

/* START SOLUTION */
// For a sufficiently advanced class, being able to pass in a rules object
// might make a good extra credit exercise.


var advancedSolution = function(input, rules) {

  rules = rules || {
    '[': ']',
    '(': ')',
    '{': '}'
  };

  // create a filter object based on the given or default rule set
  var startChars = Object.keys(rules);
  var filterChars = startChars.reduce(function(m, i) {
    return m + i + rules[i];
  }, '');

  for ( var i = 0; i < input.length; i++ ) {
    var c = input[i];

    if ( filterChars.indexOf(c) < 0 ) {
      continue;
    } else if ( startChars.indexOf(c) >= 0 ) {
      stack.push(c);
    } else if ( c !== rules[stack.pop()] ) {
      return false;
    }
  }

  return stack.length === 0;
};
/* END SOLUTION */
