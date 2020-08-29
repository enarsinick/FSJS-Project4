/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase.toLowerCase();
     }

     addPhraseToDisplay() {
         let phraseAsArray = this.phrase.split('');
         const phraseUL = document.querySelector('ul');
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

     showMatchedLetter(letter) {
        const letters = document.querySelectorAll('.letter');
        for (let i = 0; i < letters.length; i++) {
            if (letter === letters[i].textContent) {
                letters[i].classList.add('show');
            }
        }
     }
 }