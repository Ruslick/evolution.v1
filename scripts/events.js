import { game } from "./script.js";

document
   .querySelector('[data="create-animal"]')
   .addEventListener("focus", function () {
      document.querySelectorAll(".table__user-cards").forEach((el) =>
         el.addEventListener("click", function () {
            game.igor.removeFromHand(this.dataset.cardId);
            game.igor.reloadCardsHand();
            game.igor.createAnimal();
            game.igor.reloadAnimalPlace();
         })
      );
   });

game.igor.__proto__.reloadCardEvent = document.querySelectorAll(".table__user-cards")
.forEach((el) => {
   el.addEventListener("focus", function (event) {
      game.igor.removeFromHand(event.target.dataset.cardId);
      game.igor.reloadCardsHand();
   });
   game.igor.reloadCardEvent()

});
