'use strict'
let deck = [];
deck.__proto__.reloadDeckCounter = function() { 
   document.querySelector('.table__count-cards').innerHTML = this.length;
}
let id = 1; // переделать в замыкание, вставление индефикатора в карточку
class cardTemp{
   
   constructor( id, name, ability, description, score,) {
      this.name = name
      this.description = description;
      this.ability = ability;
      this.score = score;
      this.id = id
   }
   static fillDeck = function(count, ...args) {
      for(let i = 0; i < count; i++) {
         deck.push(new cardTemp(id++, ...args))
      }
   }
}  


cardTemp.fillDeck(5, "Водоплавающее", "swimming", "animal can swimming", 0);
cardTemp.fillDeck(5, "Пиратстсво", "pirating", "animal can attack", 1);
cardTemp.fillDeck(5, "Аттака", "attack", "animal can pirate", 0);
cardTemp.fillDeck(5, "Камуфляж", "camouflage", "animal can mask", 0 );
cardTemp.fillDeck(5, "Норное", "burrowing", "animal can burrow", 0);
cardTemp.fillDeck(5, "Ядовитое", "poisonous", "attacker die with victim", 0);

function mixDeck(count) {  // перемешать колоду
   while (count--) {
   deck.sort(() => Math.random() - Math.random())
   }
}
mixDeck(1);
export {deck}