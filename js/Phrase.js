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
 }