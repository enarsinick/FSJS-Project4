/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = '';

// Listens for click on start/restart button
document.getElementById('btn__reset').addEventListener('click', () => {
    // If the game has already been played, refresh the page
    if (game.missed > 0) { window.location.reload(true);}
    // Create new instance of the game object and call start game method
    game = new Game();
    game.startGame();
});

// Listen for clicks on the qwerty keyboard on screen
document.getElementById('qwerty').addEventListener('click', e => {
    // Check to see if the thing being clicked is a button
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
})

// Listens for key presses on the keyboard
document.addEventListener('keyup', e => {
    // Select all the keys on screen, loop over them and if key pressed is in the list, then pass to game handler method
    const qwerty =  document.querySelectorAll('.key');
    qwerty.forEach(key => { 
        if (key.textContent === e.key) {
            game.handleInteraction(key);
        }
    });
})