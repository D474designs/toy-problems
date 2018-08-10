/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (/* START SOLUTION */rounds/* END SOLUTION */) {
  // TODO: your solution here
  /* START SOLUTION */
  // create object with numerical keys, and rock, paper, scissors properties
  // iterate through object using math.random and return all possibilities
  // that do not repeat, as arrays
  // or
  // create conditional statements to ensure repeats are neutralized
  // or
  // iterate through object, and return properties in arrays
  // create conditional statement to not return repeats

  // use math.Random to generate a number from 1 to 3 to return
  Math.floor(Math.random * 3)
  // answers for any number of rounds for extra credit

  /* END SOLUTION */
};
