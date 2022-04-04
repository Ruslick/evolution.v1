'use strict'
import {desk} from './deskCreator.js';

export class CreateGame{  // создать игру
   constructor() {
      this.table = {};
      this.desk = desk;
   }

   adduser(name) {        // метод добавления игрока в стол
      this[name] = new User(name);
   };

   takeCards(count) {
      
   }
}

class User{     // солздание игрока
   constructor() {
      this.hand = [];
      this.palce = {};
   }
} 




