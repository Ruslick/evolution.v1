'use strict'

class Card {
   constructor(name, description, ability, score) {
      this.name = name;
      this.description = description;
      this.ability = ability;
      this.score = score;
   }
};


const getCards = function(ourDesk, count, ...args) {
   let index = 0
   for(let i = 0;i < count; i++) {

      ourDesk.push(index = new Card(...args))
   }
}
let desk = [];

getCards(desk, 4, 'swiming', 'desc', "swimming", 0)
getCards(desk, 5, 'attack', 'desc', "attack", 0)




export {desk}
