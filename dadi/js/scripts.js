//creo due elementi div con js con all'interno i numeri estratti

//creo bottone che avvia l'estrazione casuale dei due numeri

//creo algoritmo che compara i due numeri e decreta il vincitore

let secondSection = document.getElementById('second-section');
let container = document.getElementById('container');
let firstItem = document.createElement('div');
let secondItem = document.createElement('div');
const stringVictory = document.createElement('p');
firstItem.classList.add('bg-green');
secondItem.classList.add('bg-purple');


const btnGenerator = document.getElementById('my-button');
btnGenerator.addEventListener('click', function(event){
    event.preventDefault();
    container.append(firstItem, secondItem);

    const playerNumber = Math.floor(Math.random() * 6) + 1;
    firstItem.innerHTML =`${ playerNumber}`;
    const pcNumber = Math.floor(Math.random() * 6) + 1;
    secondItem.innerHTML = `${ pcNumber}`;
    let result;
    if(playerNumber > pcNumber){
        result = `il giocatore ha vinto contro il pc con una differenza di ${playerNumber - pcNumber}`;
    }
    else if( pcNumber > playerNumber){
        result = `il pc ha vinto contro il giocatore con una differenza di ${pcNumber - playerNumber}`;
    }
    else{
        result = `pari, ritira il dado`;
    }
    stringVictory.innerHTML = result;
    secondSection.append(stringVictory)
})