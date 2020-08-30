/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase.toLowerCase();
     }

     // Here we're adding the current phrase to the DOM
     addPhraseToDisplay() {
         // Split the phrase into individual array items and select the UL in the DOM
         let phraseAsArray = this.phrase.split('');
         const phraseUL = document.querySelector('ul');
        // Loop over the phrase and add each item to the DOM, if it's a letter it gets the 'letter' class
        // if it's a space then it gets the 'space' class
         for (let i = 0; i < phraseAsArray.length; i++) {
            let li = document.createElement('li');
            li.textContent = phraseAsArray[i];
            phraseUL.appendChild(li);
            if (li.textContent !== ' ') {
                li.classList.add('letter');
            } else {
                li.classList.add('space');
            }
        }
     }

     // Checks to see if the guessed letter is in the current phrase array 
     // and returns true or false depending on that
     checkLetter(letter) {
        let phraseArr = this.phrase.split('');
        let match = false;
        for (let i = 0; i < phraseArr.length; i++) {
            if (letter === phraseArr[i]) {
                match = true;
            } 
        }
        if (match) {
            return true;
        } else {
            return false;
        }
     }

     // If the player guessed correctly, then show that guessed letter
     showMatchedLetter(letter) {
        const letters = document.querySelectorAll('.letter');
        for (let i = 0; i < letters.length; i++) {
            if (letter === letters[i].textContent) {
                letters[i].classList.add('show');
            }
        }
     }
 }