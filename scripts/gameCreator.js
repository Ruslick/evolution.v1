'use strict'
import {desk} from './deskCreator.js';

class CreateGame{  // создать игру
   constructor() {
      this.table = {};
      this.desk = desk;
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

   takeCards(countCards) {
      for(let i = 0; i < countCards; i++) {
         this.hand.push(desk.pop())
      }
   }
} 


export {CreateGame, User}


