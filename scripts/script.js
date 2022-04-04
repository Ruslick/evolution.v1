'use strict'

import {CreateGame, User} from './gameCreator.js';

let game = new CreateGame();

function reloadCardCounter () { // огбновить колоду
   document.querySelector('.table__count-cards').innerHTML = game.desk.length;
   
}

function reloadUserCards(user) { // обновить карты игрока
   let acc = '';
   for(let i = 0; i < user.hand.length; i++) {
      acc += `<li>${user.hand[i].name}</li>`
   }
   document.querySelector('.table__user1').innerHTML = acc;
}
reloadCardCounter();


game.adduser('igor');
game.adduser('andrey');











