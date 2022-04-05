import { game } from "./script.js";

document.querySelectorAll('[data="create-animal"]').forEach(el => el.addEventListener('click', function() {
   let card = document.querySelectorAll('.table__user-cards');
   card.forEach(el => el.addEventListener('click', getCard));

   function getCard(event) {
      event.path[0].remove() // удаляте html элемент
      let id = event.path[0].dataset.cardId;
      game.igor.hand = game.igor.hand.filter(el => el.id !== +id); // удаляет с дж руки 

      let animal = document.createElement('li');
      animal.innerHTML = 'animal';
      animal.className = 'table__animal'
      document.querySelector('.table__user1-place').append(animal)

      
      game.deck.reloadDeckCounter();

      card.forEach(el => el.removeEventListener('click', getCard))
   }
}))