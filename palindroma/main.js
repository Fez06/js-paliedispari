'use script';


const parolaEsame = prompt('inserisci una parola');


const parola = [];
const parolaReverse = [];


for (let i = 0; i < parolaEsame.length; i++) {
    console.log(parola);
    parola.push(parolaEsame[i]);
}


for (let i = parolaEsame.length - 1; i >= 0 ; i--) {
    console.log(parolaReverse);
    parolaReverse.push(parolaEsame[i]);
}

if (parola === parolaReverse) {
    console.log('yesss');
    alert('palindromo!');
} 

