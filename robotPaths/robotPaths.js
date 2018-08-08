/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n, board, i, j) {
  let paths = 0;
  let x = i;
  let y = j;

  const generatePaths = (x, y) => {
    //base case: out of board bounds
    if (x >= n || y >= n) {
      return;
    }

    //base case: return if this spot has already been visited
    if (board.hasBeenVisited(x, y)) {
      return;
    }

    //base case: reached bottom right corner; increment paths
    if (x === n - 1 && y === i) {
      paths++;
      return;
    }

    //recursive case: toggle piece
    board.togglePiece(x, y);

    //try paths:
    //move right
    generatePaths(x, y + 1);
    //move down
    generatePaths(x + 1, y);
    //move left
    generatePaths(x - 1, y);
    //move up
    generatePaths(x, y - 1);
  }

  generatePaths(x, y);
  return paths;
}

robotPaths(5, makeBoard(5), 0, 0)
