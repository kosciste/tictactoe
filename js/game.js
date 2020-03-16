import Board from "./board.js";
import Player from "./player.js";

export default class Game{
  constructor() {
    this._board = new Board();
    this._players = [new Player("x"), new Player("o")];
    this._currentPlayer = this._players[0];
    this._winner = '';
    this._running = true;
  }

  get currentPlayer(){
      return this._currentPlayer;
  }

  nextTurn(field) {
    if (
      this._board.getField(field) !== "o" &&
      this._board.getField(field) !== "x"
    )
      this._board.draw(field, this._currentPlayer.id);
    if (this._currentPlayer.id === "x") {
      this._currentPlayer = this._players[1];
    } else {
      this._currentPlayer = this._players[0];
    }
  }

  reset(){
      for(let i = 0; i < this._board.fields.length; i++){
          for(let j = 0; j < this._board.fields[i].length;j++){
              this._board.fields[i][j] = '--';
          }
      }
      this._currentPlayer = this._players[0];
      this._running = true;
  }

  checkForWinner(player){
      let field = this._board._fields;
      if(this.checkRows(field, player.id)
      ||this.checkColumns(field, player.id)
      ||this.checkDiagonal(field, player.id)){
        this._winner = player.id;
        this._running = false;
          return true;
      }

      else {return false;}
    
  }

  checkForDraw(){
      let count = 0;
      for(let i = 0; i < this._board._fields.length; i++){
          for(let j = 0; j < this._board._fields[i].length; j++){
              if(this._board._fields[i][j]===this._players[0].id
                ||this._board._fields[i][j]===this._players[1].id){
                    count++;
                }
          }
      }
      if(count===9){
        this._running = false;
        return true;
      }
      else {
          return false;
      }
  }

  checkRows(arr, id){
    let foundWinner = false;
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j]===id){
                count++;
            }
        }
        if(count === 3){
            foundWinner = true;
        }
    }
    return foundWinner;
  }

  checkColumns(arr,id){
    let foundWinner = false;
      for(let i = 0; i < arr.length;i++){
        let count = 0;
          for(let j=0; j < arr.length; j++)
          if(arr[j][i]===id){
                count++;
          }
          if(count===3) {
            foundWinner = true;
          }
      }
      return foundWinner;
  }

  checkDiagonal(arr, id){
    return((arr[0][0]===id&&arr[1][1]===id&&arr[2][2]===id)
    ||(arr[0][2]===id&&arr[1][1===id]&&arr[2][0]===id));
  }

  get winner(){
      return this._winner;
  }

  get players(){
      return this._players;
  }

  get running(){
      return this._running;
  }
}
