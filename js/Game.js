/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 // Game class creation
class Game {
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }

     // Creates 5 new instances of the phrase objects ready for the game
     createPhrases() {
         let phraseArray = [];
         phraseArray.push(new Phrase('thats the way the cookie crumbles'));
         phraseArray.push(new Phrase('go back to the drawing board'));
         phraseArray.push(new Phrase('call it a day'));
         phraseArray.push(new Phrase('beat around the bush'))
         phraseArray.push(new Phrase('its not rocket science'));;
         return phraseArray;
     }

     // Returns a random phrase 
     getRandomPhrase() {
         let randomNum = Math.floor((Math.random() * this.phrases.length));
         return this.phrases[randomNum];
     }

     // When called this removes the start screen, gets and adds a new phrase to the DOM ready to play the game
     startGame() {
        document.getElementById('overlay').style.display = 'none';
        let randomPhrase = this.getRandomPhrase();
        randomPhrase.addPhraseToDisplay();
        this.activePhrase = randomPhrase;
     }

     // Chekc if the game has been completed by comparing the number of letters on screen
     // to the amount that have currently been shown, if they are equal then the game has been completed
     checkForWin() {
         const numOfLetters = document.querySelectorAll('.letter').length;
         const numOfLettersShown = document.querySelectorAll('.show').length;
         if (numOfLetters === numOfLettersShown) {
            return true;
         } else {
             return false;
         }
     }

     // Removes a life from the DOM, adds 1 to missed and if missed is equal to 5 then the game ends
     removeLife() {
         let lives = document.querySelectorAll('.tries');
         lives[this.missed].firstElementChild.src = 'images/lostHeart.png'
         this.missed += 1;
         if (this.missed === 5) {
            this.gameOver(false);
         }
     }

     // Checks to see if the player has won or lost, and then display relevant finish screen
     gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        const overlayTitle = overlay.querySelector('h2');
        const restartButton = document.getElementById('btn__reset');

         if (!gameWon) {
            overlayTitle.textContent = 'You Lose!';
            overlay.classList.add('lose');
            overlay.style.display = 'flex';
            restartButton.textContent = 'Restart Game';
         } else {
            overlayTitle.textContent = 'You Win!';
            overlay.classList.add('win');
            overlay.style.display = 'flex';
            restartButton.textContent = 'Restart Game';
         }
     }

     // This method checks if the player guessed the correct letter, if not a life is removed
     //  if they did then show the matched letter in the DOM and checks to see if they've won yet
     handleInteraction(button) {
         if (!button.disabled) {
            button.disabled = 'true';
            if(!this.activePhrase.checkLetter(button.textContent)) {
                button.classList.add('wrong');
                this.removeLife();
            } else {
                this.activePhrase.showMatchedLetter(button.textContent);
                button.classList.add('chosen');
                if(this.checkForWin()) {
                    this.gameOver(true);
                }
            }
         }
     }
}