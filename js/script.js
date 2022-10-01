// 1) prima cosa devo fare in modo che la carta si giri nel momento in cui clicco sulla carta
let cards = document.querySelectorAll('.memory-card');

// se provo a flippare una seconda coppia di carte e le due carte non sono uguali, allora non posso più continuare a cliccare
let blockCards = false;
// NON SONO RIUSCITA A FARLO


// 3) quando premo una carta devo riuscire a capire se è la prima, la seconda o la terza volta che premo le carte
let hasFlippedCard = false;
let firstCard;
let secondCard;


// 2. Successivamente ho dichiarato la funzione flipCard che serve per l'evento click. 
// ho provato a vedere se effettivamente in console mi usciva il messaggio ogni volta che cliccavo sulla carta
function flipCard() {
    if(blockCards) {
        return;
    }
    if(this === firstCard) {
        return;
    }
    // console.log('i was clicked');
    // console.log(this);
    this.classList.toggle('flip');
    // utilizzando this io vado a inserire il toggle direttamente sull'html al div memory-card
    // se hasFlippedCard è false vuol dire che è la prima volta che clicco la carta
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        // vediamo cosa mi esce fuori con la stampa
        // console.log({hasFlippedCard, firstCard}); -> devo mettere le parentesi graffe (vedi commento sotto)
        // altrimenti, hasFlippedCard è true vuol dire che sto premendo la seconda carta
    } else {
        // equivale al secondo click
        hasFlippedCard = false;
        secondCard = this;

        // vediamo cosa mi stampa
        // console.log({firstCard, secondCard}); 
        // -> ok, se non metto le parentesi graffe mi stampa semplicemente l'html
        /* VA BENE TUTTO FINO AD ORA
         */
        itsAMacth();
              
    }
}

function itsAMacth() {
    // ora controllo se effettivamente le due carte sono uguali
     // su internet ho trovato che c'è un attributo che fa in modo di aggiungere al mio elemento tutte le informazioni che voglio -> lo devo inserire nell'HTML


    if(firstCard.dataset.work === secondCard.dataset.work) {
        resetCards();
        // FUNZIONA!
    } else {
        blockCards = true;

        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            blockCards = false;
        }, 1200);          
    }
    // NON MI FUNZIONA, volevo fare in modo che se le carte non fossero state uguali allora veniva rimosso il flip
}

function resetCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    // console.log(firstCard.dataset.work);
    // console.log(secondCard.dataset.work);
    // reset = true;

}

// function reset() {
//     [hasFlippedCard, blockCards] = [false, false];
//     [firstCard, secondcard] = [null, null];
// } --> NON MI FUNZIONA

// in questo modo a ogni refresh della pagina le card cambiano posizione

(function shuffle() {
    cards.forEach(card => {
        let randomNum = Math.floor(Math.random() * 12);
        card.style.order = randomNum;
    });
})();

// NON SONO RIUSCITA A FARE QUESTO:
/* se le schiaccio due carte e non sono uguali, allora ritornano indietro (cioè flippano di nuovo)
mentre se schiaccio due carte e sono uguali rimangono così, non flippano indietro*/

// 1. utilizzo il metodo forEach per aggiungere un evento ad ogni carta
// l'evento in questione è il click
cards.forEach(card => card.addEventListener('click', flipCard));