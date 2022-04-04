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
      let acc = '';
      for(let i = 0; i < this.hand.length; i++) {
         acc += `<li 
            data-card-id="${this.hand[i].id}" 
            class ="table__user-cards">
            ${this.hand[i].name}</li>`  
      }
      document.querySelector('.table__user1').innerHTML = acc;
   }
} 


export {CreateGame}


