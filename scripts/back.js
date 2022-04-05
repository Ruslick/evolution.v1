'use strict'
import {deck} from './deckCreator.js';

class CreateGame{  // создать игру
   constructor() {
      this.table = {};
      this.deck = deck;
   }

   adduser(name) {        // метод добавления игрока в стол
      this[name] = new User(name);
   };

   
}

class User{     // солздание игрока
   constructor() {
      this.hand = [];
      this.palce = {};
   }

   takeCards(countCards) { // дать игроку карты с колоды
      for(let i = 0; i < countCards; i++) {
         this.hand.push(deck.pop())
      }
      
   }

   reloadCards() { // обновить карты игрока
      document.querySelector('.table__user1').innerHTML = null;
      for(let i = 0; i < this.hand.length; i++) {
         let li = document.createElement('li');
         li.className = 'table__user-cards';
         li.innerHTML = this.hand[i].name;
         li.dataset.cardId = this.hand[i].id;
         document.querySelector('.table__user1').append(li);
      }
   }
} 


export {CreateGame}


