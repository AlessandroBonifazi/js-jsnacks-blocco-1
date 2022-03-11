// Debug
console.log('JS OK!')

// Chiedi un numero di 4 cifre all’utente. 
// Calcola la somma di tutte le cifre che compongono il numero.

let number;

let sum = 0;

while (isNaN(parseInt(number)) || number.lenght !== 4) {
    number = parseInt(prompt("Input a 4 characters number"));
}
for (let i = 0; i < number.lenght; i++) {
    const carattere = number[i];
    sum += parseInt(carattere);
}

console.log(sum);