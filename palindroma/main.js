'use script';


const parolaEsame = prompt('inserisci una parola');


const parola = [];
const parolaReverse = [];


for (let i = 0; i < parolaEsame.length; i++) {
    parola.push(parolaEsame[i]);
}

console.log(parola);



for (let i = parolaEsame.length - 1; i >= 0 ; i--) {
    parolaReverse.push(parolaEsame[i]);
}

console.log(parolaReverse);



if (parola === parolaReverse) {
    console.log('yesss');
    alert('palindromo!');
} 

