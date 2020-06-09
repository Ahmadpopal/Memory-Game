const cards = document.querySelectorAll(".memory-card")
let lockBoard = false;
let isFlippedCard = false;
let card1, card2;

function flipCards(){
    if(lockBoard) return;
    if(this === card1) return;
   this.classList.add("flip");

   if (!isFlippedCard){
       isFlippedCard = true;
       card1 = this;

       return;
   }
       
        card2 = this;

       checkForMatch()     
}

function checkForMatch(){
    let isMatch = card1.dataset.image === card2.dataset.image
   
    isMatch ? disableCards() : unflippedCards();
        
   
           
}

function disableCards(){
    card1.removeEventListener("click", flipCards)
    card2.removeEventListener("click", flipCards)

    restBoard()
}

function unflippedCards(){
    lockBoard = true;
    setTimeout(function(){
        card1.classList.remove("flip")
        card2.classList.remove("flip")

        restBoard()
       }, 1000)
}

function restBoard (){
    [isFlippedCard, lockBoard] = [false, false];
    [card1, card2] = [null, null]
}

(function shuffle(){
    cards.forEach(card => {
        let randompas = Math.floor(Math.random() * 12)
        card.style.order = randompas;
    })
})();

for ( let card of cards){
    card.addEventListener("click", flipCards);
}


