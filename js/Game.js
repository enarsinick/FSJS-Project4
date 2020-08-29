/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }

     createPhrases() {
         let phraseArray = [];
         phraseArray.push(new Phrase('thats the way the cookie crumbles'));
         phraseArray.push(new Phrase('go back to the drawing board'));
         phraseArray.push(new Phrase('call it a day'));
         phraseArray.push(new Phrase('beat around the bush'))
         phraseArray.push(new Phrase('its not rocket science'));;
         return phraseArray;
     }

     getRandomPhrase() {
         let randomNum = Math.floor((Math.random() * this.phrases.length));
         return this.phrases[randomNum];
     }

     startGame() {
        document.getElementById('overlay').style.display = 'none';
        let randomPhrase = this.getRandomPhrase();
        randomPhrase.addPhraseToDisplay();
        this.activePhrase = randomPhrase;
     }

     checkForWin() {
         const numOfLetters = document.querySelectorAll('.letter').length;
         const numOfLettersShown = document.querySelectorAll('.show').length;
         if (numOfLetters === numOfLettersShown) {
            return true;
         } else {
             return false;
         }
     }

     removeLife() {
         let lives = document.querySelectorAll('.tries');
         lives[this.missed].firstElementChild.src = 'images/lostHeart.png'
         this.missed += 1;
         if (this.missed === 5) {
            this.gameOver(false);
         }
     }

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

     handleInteraction(button) {
         button.classList.add('chosen');
         button.disabled = 'true';
        if(!this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('wrong');
            this.removeLife();
        } else {
            this.activePhrase.showMatchedLetter(button.textContent);
            if(this.checkForWin()) {
                this.gameOver(true);
            }
        }
     }

}