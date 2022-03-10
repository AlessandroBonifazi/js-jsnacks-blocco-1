// Debug
console.log('JS OK!')

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const guestList = ['pippo', 'pluto', 'paperino', 'topolino'];

document.getElementById('check').addEventListener('click',
    function () {

        const guestName = document.getElementById('guest').value;
        let nameFound = false;

        for (let i = 0; i < guestList.length && !nameFound; i++) {
            if (guestName === guestList[i]) {
                nameFound = true;
            }
        }

        const result = document.getElementById('result');
        if (nameFound = true) {
            result.innerText = 'Welcome!'
        } else {
            result.innerText = 'Your name is not on the list!'
        }
    }
)