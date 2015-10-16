'use strict';

//multidimensional array representation of tic tac toe board cells.
var board = [
  ['', '', ''], //[0][0], [0][1], [0][2]
  ['', '', ''], //[0][0], [0][1], [0][2]
  ['', '', ''] //[0][0], [0][1], [0][2]
];

// assign current player as player 'x' at start of game
var currentPlayerToken = 'x';

var ifTie = 0;

var turn = function(col, row){
  if (board[col][row] === '') {
    board[col][row] = currentPlayerToken;
    switchPlayer();
    ++ifTie;
  }
  else { // change console.log so it shows up in h2
    console.log("choose an empty cell");
  }
  return board;
};
//jqery for clicking a box on the board
//runs when the DOM is ready
$(document).ready(function() {

  $('.box').one('click', function(event) {//runs when box is clicked. will not allow box to be clicked more then once.
    var $this = $(this);//changes text inside the div '.box'
    $this.html(currentPlayerToken);//inputs text 'o' or 'x' according to what the current player is

    var col = $this.data('col');//new var to = data attribute from html
    var row = $this.data('row');//new var to = data attribute from html

    turn(col, row);

    var winner = getWinner();

    tttapi.markCell($('#gameId').val(), {
      game: {
        cell: {
          index: 3 * row + col,
          value: currentPlayerToken
        },
        over: winner ? true : false
      }
    }, $('.token').val(), function(error, data) {
      if (error) {
        console.error(error);
        $('#result').val('status: ' + error.status + ', error: ' +error.error);
        return;
      }
      $('#result').val(JSON.stringify(data, null, 4));
    });

    if (winner) {
      $('.outcome').text(winner);
    }
  });
});
  //evoke a function that asks if current player is 'x', change to player 'o'
var switchPlayer = function() {
  if (currentPlayerToken === "x") {
    currentPlayerToken = "o";
  } else {
    currentPlayerToken = "x"; // if player is 'o', change to player 'x'
  }
}

function getWinner() {
  if (winnerIs('x')) {
    return 'Congratulations Player X, you won - no more shoveling for you!!!';
  }
  if (winnerIs('o')) {
    return 'Congratulations Player O, you won - no more shoveling for you!!!';
  }
  if (ifTie === 9) {
    return 'You both lose - shovel out your own cars';
  }
  return null;
}

function winnerIs(player) {//feeds winnerIs funciton into getWinner function
  return winsRow(player) || winsColumn(player) || winsDiagonal(player);
}

// winner! 3 in a row
var winsRow = function (player) { //feeds winsRow into winnerIs funciton
  var row1 = board[0][0] === player && board[0][1] === player && board[0][2] === player;
  var row2 = board[1][0] === player && board[1][1]=== player && board[1][2] === player;
  var row3 = board[2][0] === player && board[2][1] === player && board[2][2] === player;

  return row1 || row2 || row3;
};

//winner! 3 in a column
var winsColumn = function (player) { //feeds winsColumn into winnerIs funciton
  var col1 = board[0][0] === player && board[1][0] === player && board[2][0] === player;
  var col2 = board[0][1] === player && board[1][1] === player && board[2][1] === player;
  var col3 = board[0][2] === player && board[1][2] === player && board[2][2] === player;

  return col1 || col2 || col3;
};

//winner! 3 by diagonal
var winsDiagonal = function (player) { //feeds winsDiagonal into winnerIs funciton
  var diag1 = board[0][0] === player && board[1][1] === player && board[2][2] === player;
  var diag2 = board[0][2] === player && board[1][1] === player && board[2][0] === player;

  return diag1 || diag2;
};





