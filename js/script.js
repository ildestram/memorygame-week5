// 1) prima cosa devo fare in modo che la carta si giri nel momento in cui clicco sulla carta
let cards = document.querySelectorAll('.memory-card');

// 2. Successivamente ho dichiarato la funzione flipCard che serve per l'evento click. 
// ho provato a vedere se effettivamente in console mi usciva il messaggio ogni volta che cliccavo sulla carta
function flipCard() {
    // console.log('i was clicked');
    // console.log(this);
    this.classList.toggle('flip');
    // utilizzando this io vado a inserire il toggle direttamente sull'html al div memory-card
}

// 1. utilizzo il metodo forEach per aggiungere un evento ad ogni carta
// l'evento in questione è il click
cards.forEach(card => card.addEventListener('click', flipCard));