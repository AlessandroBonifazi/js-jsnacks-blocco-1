// Debug
console.log('JS OK!')

// Chiedi un numero di 4 cifre all’utente. 
// Calcola la somma di tutte le cifre che compongono il numero.

let number = parseInt(prompt("Input a 4 characters number"));

let sum = 0;

while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
}

console.log(sum);