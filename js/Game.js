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
}