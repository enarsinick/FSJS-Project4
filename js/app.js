/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = '';

document.getElementById('btn__reset').addEventListener('click', () => {
    if (game.missed > 0) { window.location.reload(true);}
    game = new Game();
    game.startGame();
});

document.getElementById('qwerty').addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        console.log(e.target);
        game.handleInteraction(e.target);
    }
})

document.addEventListener('keyup', e => {
    const qwerty =  document.querySelectorAll('.key');
    qwerty.forEach(key => { 
        if (key.textContent === e.key) {
            game.handleInteraction(key);
        }
    });
})