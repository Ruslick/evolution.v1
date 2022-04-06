"use strict";

import { deck } from "./deckCreator.js";
class CreateGame {
   // создать игру
   constructor() {
      this.table = {};
      this.deck = deck;
   }

   adduser(name) {
      // метод добавления игрока в стол
      this[name] = new User(name);
   }
   ъ;
}

class User {
   // солздание игрока
   constructor() {
      this.hand = [];
      this.place = [];
   }

   takeCards(countCards) {
      // дать игроку карты с колоды
      for (let i = 0; i < countCards; i++) {
         this.hand.push(deck.pop());
      }
   }

   reloadCardsHand() {
      // обновить карты игрока
      document.querySelector(".table__user1").innerHTML = null;
      for (let i = 0; i < this.hand.length; i++) {
         document
            .querySelector(".table__user1")
            .append(
               createEl(
                  "li",
                  "table__user-cards",
                  "cardId",
                  this.hand[i].id,
                  this.hand[i].name
               )
            );
      }
   }

   reloadAnimalPlace() {
      document.querySelector(".table__user1-place").innerHTML = null; // обнуление
      for (let i = 0; i < this.place.length; i++) {
         document
            .querySelector(".table__user1-place")
            .append(
               createEl(
                  "li",
                  "table__animal",
                  "animalId",
                  this.place[i].number,
                  "animal"
               )
            );
      }
   }

   reloadPropertys() {}

   removeFromHand(id) {
      // удаляет карту id из user.deck
      this.hand = this.hand.filter((el) => el.id !== +id);
   }

   getCard(id) {
      // получаем карту из руки по id
      return this.hand.find((el) => el.id === +id);
   }

   createAnimal() {
      let animal = [];
      animal.number = this.counter();
      this.place.push(animal);
   }

   addProperty(animal, card) {
      animal.push(card);
   }
}

/////
const makeCounter = function (start) {
   let counter = start;
   return function () {
      return counter++;
   };
};
User.prototype.counter = makeCounter(0);
/////

//////
function createEl(tag, className, data, dataContent, ...inner) {
   let el = document.createElement(tag);
   el.className = className;
   el.dataset[data] = dataContent;
   el.setAttribute("tabindex", 1);
   el.append(...inner);
   return el;
}
/////

export { CreateGame };
