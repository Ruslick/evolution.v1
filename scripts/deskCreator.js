'use strict'
import { deskTemp } from "./data/deskTemp.js";
let desk = [];

const getCards = function(card, count) {
   for(let i = 0; i < count; i++) {
      desk.push(card)
   }
}

getCards(deskTemp.attack, 5)
getCards(deskTemp.pirating, 5)
getCards(deskTemp.swimming, 5)


console.log(desk)

export {desk}
