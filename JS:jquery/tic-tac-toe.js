'use strict';


//jqery for clicking a box on the board
//runs when the DOM is ready
$(document).ready(function() {
  $('.box').on('click', function(){ //runs when box is clicked

});
});



//multidimensional array representation of tic tac toe board cells.
var board = [
  ['', '', ''], //[0][0], [0][1], [0][2]
  ['', '', ''], //[0][0], [0][1], [0][2]
  ['', '', ''] //[0][0], [0][1], [0][2]
];

//winner! 3 in a row
var winRow = function (player) {
  return allThree(player, board[0][0], board[0][1], board[0][2]) ||
         allThree(player, board[1][0], board[1][1], board[1][2]) ||
         allThree(player, board[2][0], board[2][1], board[2][2]);
};

//winner! 3 in a column
var winCol = function (player) {
  return allThree(player, board[0][0], board[1][0], board[2][0]) ||
         allThree(player, board[0][1], board[1][1], board[2][1]) ||
         allThree(player, board[0][2], board[1][2], board[2][2]);
};

//winner! 3 by diagonal
var winDiag = function (player) {
  return allThree(player, board[0][0], board[1][1], board[2][2]) ||
         allThree(player, board[0][2], board[1][1], board[2][0]);
};





