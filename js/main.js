'use strict'
//import Board from './board.js';

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('00').innerHTML = 'X';
    let area = document.body;
    let board;
    board = new Board();
    board.draw(area);


})