import Game from './game.js';

let game = new Game();

document.querySelectorAll('.field').forEach(element => {
    element.addEventListener('click', function(){
        if(game.running){
            game.nextTurn(element.id);
            document.getElementById('play').innerHTML = game.currentPlayer.id.toUpperCase() + ' plays';
            if(game.checkForWinner(game.players[0])||game.checkForWinner(game.players[1])){
                document.getElementById('play').innerHTML = game.winner + ' wins! Play again?';
            } else if(game.checkForDraw()){
                document.getElementById('play').innerHTML = 'Draw! Play again?';
            }
        }

    })
});

document.getElementById('play').addEventListener('click', function(){
    if(!game._running){
        game.reset();
        document.querySelectorAll('.field').forEach(element => {
            element.innerHTML = ' ';
        });
        document.getElementById('play').innerHTML = game.currentPlayer.id.toUpperCase() + ' plays';
    }
})