// Debug
console.log('JS OK!')

// Crea un array vuoto. 
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

const odd = [];

for (let i = 0; i < 6; i++) {
    let number = parseInt(prompt('Input a number'));

    if (number % 2 === 1) {
        odd.push(number);
        console.log('numeri dispari: ' + odd);
    }
}

