'use script';

// tramite due prompt chiedo all'utente di scegliere se pari o dispari 


const winCon = prompt('scrivi se pari o dispari');
// while (winCon != 'pari' || winCon != 'dispari') {
//     console.log(winCon);
//     prompt('scrivi se pari o dispari');
    
// }

const addendoPlayer = Number(prompt('inserisci un numero da 1 a 5'));



console.log(winCon);
console.log(addendoPlayer);

// creo una funzione per far avere anche al npc un numero casuale da 1 a 5

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// creo una funzione che mi dica se la somma da un pari o un dispari e risolvo

function pariDispari(num){
    if(num % 2 === 0){
        return 'true';   
    }
    return 'false';
}


//creo la const somma finale che unisce le cifre dei due player

const npcAddendo = randomNumber(1,6);
console.log(npcAddendo);

const sommaFinale = addendoPlayer + npcAddendo
console.log(sommaFinale);

const esito = pariDispari(sommaFinale);
console.log(esito);

if (winCon === esito) {
    alert('you win');
} else {
    alert('you lose');
}
