'use strict'

import {CreateGame} from './back.js';

// game.Игрок.takeCards(Число); дать Игроку Число карт в руку
// game.deck.reloadDeckCounter(); Обновить Счетчик колоды


let game = new CreateGame(); 
game.adduser('igor');
game.adduser('andrey');

// начало игры

game.igor.takeCards(6);
game.igor.reloadCards();
game.deck.reloadDeckCounter();




document.querySelector('.table__create-animal')
.addEventListener('click', function() {
   
   document.addEventListener('click', function(event) {
      let id = event.path[0].dataset.cardId
      console.log(id)
      if (id) {
         console.log(id)
      }
   }, {once: true})
} )


export {game}