// thoughts on how it should look:
// _ _ _
// _ _ _
// _ _ _
// where the spaces can be replaced with X or O
// _ _ X
// _ O _
// _ _ X



class TicTacToe {
  constructor() {
    this.board = []
    this.player = 'Player 1'
  }

  start() {
    console.log('Game starting')
    this.board = [['_','_','_'],['_','_','_'],['_','_','_']]
    console.log(this.board[0] + '\n' + this.board[1] + '\n' + this.board[2]);
    console.log('INSTRUCTIONS: \n Tic-Tac-Toe is a grid based game where you make moves based on X/Y coordinate positions.')
    console.log('To make a move, type "game.set(X, Y)" where X means the number from 0 - 2 which corresponds to which row you want to select, and Y means the number from 0-2 which corresponds to which column.  Your coordinates must be between 0 and 2, where game.set(0,0) indicates the upper left corner and game.set(2,2) indicates the bottom right corner. \n\n\nTake no prisoners.')
  }
  set(x, y) {
    let token;
    this.player = 'Player 1' ? token = 'X' : token = 'O';
    this.board[x][y] = token
    console.log(`${this.player} has placed a token at position ${x},${y}`)
    console.log(this.board)
    this.player = 'Player 2';
    console.log('Player 2\'s turn. Use game.set(X,Y) to place your token, Player 2.')
  }
}