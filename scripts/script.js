'use strict'

import {CreateGame} from './gameCreator.js'
let game = new CreateGame();
document.querySelector('.table__count-cards').innerHTML = game.desk.length;



game.adduser('igor');
game.adduser('andrey');

