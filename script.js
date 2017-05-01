class TicTacToe {
  constructor() {
    this.board = [];
    this.player = 'Player 1';
    this.winner = '';
    this.finished = false;
  }

  start() {
    console.log('Game starting')
    this.board = [['_','_','_'],['_','_','_'],['_','_','_']]
    console.table(this.board);
    console.log('INSTRUCTIONS: \n Tic-Tac-Toe is a grid based game where you make moves based on X/Y coordinate positions.')
    console.log('To make a move, type "game.set(X, Y)" where X means the number from 0 - 2 which corresponds to which row you want to select, and Y means the number from 0-2 which corresponds to which column.  Your coordinates must be between 0 and 2, where game.set(0,0) indicates the upper left corner and game.set(2,2) indicates the bottom right corner. \n\n\nTake no prisoners.')
  }
  set(x, y) {
    if (this.finished) {
      console.log('The previous game has finished.  Type game.start() to start a new game');
      return; 
    }
    let token;
    this.player === 'Player 1' ? token = 'X' : token = 'O';
    this.board[x][y] = token
    console.log(`\n\n${this.player} has placed a token at position ${x},${y}\n\n`)
    console.table(this.board)
    this.checkGameStatus();
    this.player === 'Player 1' ? this.player = 'Player 2' : this.player = 'Player 1';
  }
  checkGameStatus() {
    if (this.board[0].every(x => x === 'X')) {
      this.winner = this.player;
      this.finished = true;
    }
    // function to check if the game is over or not
    if (this.finished === false) {
      console.log(`\n\n${this.player}'s turn. Use game.set(X,Y) to place your token, ${this.player}.`);
    } else {
      console.log(`${this.winner} has won the game!  Congratulations on crushing your foe, ${this.winner}.`)
    }

  }
}