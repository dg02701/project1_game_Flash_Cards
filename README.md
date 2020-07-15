# project1_game_Flash_Cards

Started 20200710, Darryl Grissom Project Lead - Marc

GAME TYPE: FLASH CARDS
GAME NAME: Flashcard Fun

DESCRIPTION
This app is targeted to the home-education market for children K-4. Flashcard Fun does not require parents to be techical.
The game goes through a deck fo preloaded flashcards. Each flashcard entry has 3 elements: prompt, quote, author.
NOTE: the pre-load is made up of quotes; however, this could be changed to mixed subjects or another single subject.
Ex. preload -
{
prompt:"Who said?",
quote:"May you live all the days of your life.",
author:"Jonathan Swift"
}
ex. for math:
{
prompt:"What is",
quote:"4 + 3",
author:"7"
}
Here is exmample screen of the math card:  https://github.com/dg02701/project1_game_Flash_Cards/blob/master/Flashcard_Fun_example-screentshot.png
The 'prompt' and 'quote' (the question) are on front of card (white box in middle of page) and 'author' (theanswer) is on back of card in blue box.
The game is self-scored.
BASIC GAMEPLAY:
1.	Game is opened in browser
2.	Player (or parent) presses ArrowRight (very bottom right of keyboard) to get 1st card.
3.	Front of card shows in white box.
4.	Player thinks of answer to the prompt.
5.	Once player has answered verbaly to parent or to themselves, press Key "A" to reveal the correct answer in blue box (back of card).
6.	Player (or parent) presses key "Y" or key "N" to self-score the players answer.
7.	Score is updated in brown box in middle of screen.
8.	Play continues with next card by pressing ArrowRight and repeating A, Y or N, and then ArrowRight again.
9.	When the end of flashcard deck is reached, in brown box messages are displayed to say last card, final score, card to review and instructions for review.  Ex. end-of-deck screen: https://github.com/dg02701/project1_game_Flash_Cards/blob/master/Flashcard_Fun_end-of-deck_screensot.png


USER REQUIREMENTS
Pre-load your app with some data, and let the user flip through them quickly (back or front), and use the keyboard flip the card, and to mark whether they got it right or not. Track which cards were incorrect, and re-display them until the user gets them right!

USER STORIES
COMPLETE @MVP - I want data preloaded for a set of flashcards
COMPLETE @MVP - I want to use only the keyboard to play
COMPLETE @MVP - I want to be able to flip through the cards quickly (via keyboard)
COMPLETE @MVP - I want to be able to mark whether I got the card correct (via keyboard)
COMPLETE @MVP - I want the app to track which cards were incorrect
COMPLETE @MVP - I want the game to avoid various learning difference issues:  
    ex. font of arial for most of display and avoid Courier New or other set-width fonts (helps people with dyslexia ).
    ex. no continual flashing, blinking, movement (helps children with ADHD).
I want the incorrect cards re-displayed until I get the right! (Reviewing multiple review cards still has bug)
I want to load a new deck of files via file.txt without altering Javascript or even knowing what Javascript is.

USER INTERVIEWS/HANDS-ON DEMOS:
Interviewed two homeschooling moms. Recieved feedback on keys selected for gameplay. KeyA to show the answer was preferred over KeyF (for 'Flip). This was even if graphics were to be put in to visually 'flip' the flashcards.

VALIDATE UX/UI:
Reviewed Mac, HP and 3rd part Windows keyboards to check if locations for the keys used in gameplay are primarily located as indicated and easily keyed.

LIST OF TECHNOLOGIES USED:
Written in Javascript with html and CSS file.  CSS file uses some flexbox.
The javascript used was checked in documentation (ex. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) Chrome, Version 78.0.3904.87 (Official Build) (64-bit) on a Macbook Pro.

VALIDATIONS:
HTML5 Validator @ https://html5.validator.nu/ would not load for me.  However, Jason Wheeler was able to run validator on his machine. 
Screenshot is loaded to my repo:  
https://github.com/dg02701/project1_game_Flash_Cards/blob/master/HTML%20Validator%20-%20no%20errors.eml 

CSS Validator @ https://jigsaw.w3.org/css-validator/ ran fine.  
Screenshot is loaded to my repo:  
https://github.com/dg02701/project1_game_Flash_Cards/blob/master/CSS%20validation%20-%20no%20errors.png 

INSTALLATION INSTRUCTIONS / GETING STARTED
This app was not designed with integration to other apps in mind. 
Installation is simply open URL in browser and begin play with the pre-loaded deck.
As of July 2020 the only way to load a new deck of flashcards in to change the elements of array flashCards in the Javascript.  Included is a text doc template (https://github.com/dg02701/project1_game_Flash_Cards/blob/master/Text_new_data_template) that can be used to add new elements in the text and then copied into/over existing flashCards elements.  This limitation is listed as an unfulfilled User Story above to do this without the Javascript skill needed now.

TECHICAL NOTES:

1.	Known Bugs:
a.	Major:  If more than one wrong answer, the review at the end of play does not loop through all of them.
b.	Major:  Error handling if players press keys out of sequence is not finished.  Function invalidKeyPressed is framed with logic of incorrect key strokes based on where the game play is at.  However, this is not complete, the function is never called (Jul 2020). 
c.	Minor:  If there is no wrong answers, then game locks at the end-of-deck.
d.	Minor: If there is a wrong answer at START of game (1st card), then count of cards to review never displays
2.	Refactoring Needed (not exhaustive)
a.	Change element names for array flashCards so they make more sense for non-quotes card decks
            Current > Refactored
	        prompt > promptOnFront
	        quote > frontOf Card
	        author > backOfCard

b.	Used ‘counter’ too much.  Need to clean up.

CONTRIBUTIONS
background picture: https://theantijunecleaver.com/kindergarten-diy-sight-word-flash-cards/ 

Jason Wheeler: for running everyone's page through the HTML5 validator.


