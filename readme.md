# OOP Game Show App

A browser-based, word guessing game called Phrase Hunter. Using object oritentated vanilla Javscript to select a random phrase that is displayed on the web page and the user has to try and guess it using the on screen keyboard or their own keyboard. 

---
### Notes for reviewer
I have added custom CSS to the following elements:
* The start screen and button
* Diffent colours for the right and wrong keys
* Updated the icon used for the lives

---

### Bug fixes
* CSS 'chosen' class was being added to the on screen keyboard, regardless of the guess being correct or not but this only needed to be added if the guess was correct.
* Spamming the same key using the on screen keyboard continued to make the user lose a life each time it was pressed, instead of just the once.
* The game wasn't resetting properly when the user didn't get any guesses wrong.
* No README file.