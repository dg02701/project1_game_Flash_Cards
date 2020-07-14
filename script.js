const previousKeysPressed = new Array();
previousKeysPressed[0] = "START"
console.log(previousKeysPressed + " GLOBAL");
let counter = 0  // GLOBAL counter for working through flashCard deck
console.log("counter initialized " + counter);
let scoreCorrect = 0;  //GLOBAL score - the count of flashcards self-scored correct (Y)
let scoreWrong = 0;     ////GLOBAL Wrongs - the count of flashcards self-scored wrong (N)
const flashCards = [
    {
        prompt:"0-Who said?",
        quote:"0-Whether you think you can or think you can’t, you’re right.",
        author:"0-Henry Ford"
    },
    {
        prompt:"1-Who said?",
        quote:"1-The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        author:"1-Winston Churchill"
    },
    {
        prompt:"2-Who said?",
        quote:"2-The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        author:"2-Winston Churchill"
    }
    // ,
    // {
    //     prompt:"3-Who said?",
    //     quote:"3-The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    //     author:"3-Winston Churchill"
    // },
    // {
    //     prompt:"4-Who said?",
    //     quote:"4-The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    //     author:"4-Winston Churchill"
    // },
    // {
    //     prompt:"5-Who said?",
    //     quote:"5-The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    //     author:"5-Winston Churchill"
    // },
    // {
    //     prompt:"6-Who said?",
    //     quote:"6-The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    //     author:"6-Winston Churchill"
    // }
];
console.log(Array.isArray(flashCards));
// console.log(flashCards[0].prompt);
// console.log(flashCards[0].quote);

const cardsToReview = [     //initialize array for stack of missed (wrong - N) cards to review
    {
        prompt:"EMPTY",
        quote:"EMPTY",
        author:"EMPTY"
    }];
console.log(Array.isArray(cardsToReview));
function nextCard(){
    let mainDeckFinished = false;
    console.log("in nextCard, counter starts as: = " + counter);
    console.log("flashCards.length= " + flashCards.length);
    //blank previous answer (back) before new question (front) is shown
    let cardBack = document.querySelector("#cardBack");
    cardBack.innerText = ("");  
    if (counter === flashCards.length){
        let msg = document.querySelector("#div4");
        msg.innerText = ("That was the last new card in deck!" + '\r\n' + 
        "Your FINAL score is  " + scoreCorrect + " correct out of " + cardsPlayed + " played." + '\r\n'
        + '\r\n' + "Below are your review cards.  Press any key to review each"
        );
        mainDeckFinished = true;
    }else {
        //display new promt and question
        let cardFront = document.querySelector("#cardFront");
        // counter = counter + 1;
        console.log(flashCards, counter);
        cardFront.innerText = (flashCards[counter].prompt + '\r\n' + '\r\n' + flashCards[counter].quote);
        // counter = counter + 1;
    };
    if (mainDeckFinished && (cardsToReview[0].prompt === "EMPTY")) {
        conslog.log("removeEventListener ln 78");
        document.removeEventListener('keydown', logKey); 
    }else if(mainDeckFinished && (cardsToReview[0].prompt !== "EMPTY")) {
        console.log("78Still more to go!  There are " + cardsToReview.length + " to review.");
        review();
    };
};     
function review(){
    let i = 0;
    while (cardsToReview[0].prompt !== "EMPTY" && i < 100){
        let front = document.querySelector("#cardFront"); 
        console.log("Review " + cardsToReview[0].prompt + '\r\n' + '\r\n' + cardsToReview[0].quote); 
        front.innerText = ("REVIEW " + '\r\n' + cardsToReview[0].prompt + '\r\n' + '\r\n' + cardsToReview[0].quote);
        let cardBack = document.querySelector("#cardBack");
        cardBack.innerText = ('\r\n' + "- " + cardsToReview[0].author);
        i += 1;   //just in case
    };
    console.log("removeEventListener ln 91");
    document.removeEventListener('keydown', logKey); 
    //call finish()
};
        //  display msg in <div> 4 on last card and how to reset.
function showAnswer(){
    let cardBack = document.querySelector("#cardBack");
    console.log("counter in showAnswer", counter);
    cardBack.innerText = ('\r\n' + "- " + flashCards[counter].author);
};
function selfScoreCorrect(){    //when KeyY is pressed as response to, "Was your answer correct?"
    scoreCorrect += 1;
    cardsPlayed = counter + 1;
    console.log(scoreCorrect);
    let score = document.querySelector("#div4");
    score.innerText = ("Your score is  " + scoreCorrect + " correct out of " + cardsPlayed + " played.");
    counter = counter + 1;
};
function selfScoreWrong(){      //when KeyN is pressed as response to, "Was your answer correct?"
    console.log("Cards in review stack BEFORE adding this card:  " + scoreWrong);
    let card = flashCards[counter];
    console.log("counter in selfScoreWrong " + counter);
    // let x = flashCards[counter].prompt;
    // let y = flashCards[counter].quote; 
    // let z = flashCards[counter].author; 
    cardsToReview.unshift(card);
    let cardFront = document.querySelector("#cardFront")
    cardFront.innerText = ("Review " + cardsToReview[0].prompt + '\r\n' + '\r\n' + cardsToReview[0].quote);
    console.log("cardsToReview", cardsToReview);
    // cardsToReview[scoreWrong].prompt = flashCards[counter].prompt;
    // cardsToReview[scoreWrong].quote = flashCards[counter].quote; 
    // cardsToReview[scoreWrong].author = flashCards[counter].author; 
    console.log(cardsToReview[0]);
    let score = document.querySelector("#div4");
    scoreWrong += 1;    //?take out and use .length instead?
    score.innerText = ("Your score is  " + scoreCorrect + " correct out of " + counter + " played.");
    reviewStack = ('\r\n' + "Cards to review:  " + scoreWrong);
    score.innerText += reviewStack;
    console.log('\r\n' + "Cards to review:  " + scoreWrong);
    counter = counter + 1;
};
function invalidKeyPressed(key, preKey){
    let validKey = false;
    console.log("key argument - " + key);
    console.log("prekey argument - " + preKey);
    if (key === "ArrowRight"){
        let validKey = true;
    }else if (key === "KeyA"){
        let validKey = true;
    }else if (key === "KeyY"){
        let validKey = true;
    }else if (key === "KeyN"){
        let validKey = true;
    }else {
        let validKey = false;
    };
    if (validKey === false){
    console.log("Not a game key, // call showHelpKeys");
    // call showHelpKeys
    }else{
        if ((key === "ArrowRight" && preKey[0] === "ArrowRight")) {
            // call wantToSkip
            console.log("// call wantToSkip");
        }else if ((key === "ArrowRight" && preKey[0] === "KeyA")){
            // call wantToSkip
            console.log("// call wantToSkip");       
        }else if ((key === "KeyA" && preKey[0] === "KeyA")){
            // call answerAlreadyDisplayed
            console.log("// call answerAlreadyDisplayed"); 
        }else if ((key === "KeyA" && preKey[0] === "KeyY")){
            // call answerShowingAndScored, will need arguement of score
            console.log("// call answerShowingAndScored -  Y branch"); 
        }else if ((key === "KeyA" && preKey[0] === "KeyN")){
            // call answerShowingAndScored, will need arguement of score
            console.log("// call answerShowingAndScored - N branch"); 
        }else if ((key === "KeyY" && preKey[0] === "ArrowRight")){
            // call youHaveNotSeenAnswer
            console.log("// call youHaveNotSeenAnswer - from Y");
        }else if ((key === "KeyY" && preKey[0] === "KeyY")){
            // call alreadyScored
            console.log("// call alreadyScored - Y");
        }else if ((key === "KeyY" && preKey[0] === "KeyN")){
            // call alreadyScored
            console.log("// call alreadyScored - N");  
        }else if ((key === "KeyN" && preKey[0] === "ArrowRight")){
            // call youHaveNotSeenAnswer
            console.log("// call youHaveNotSeenAnswer - from N branch");
        }else if ((key === "KeyN" && preKey[0] === "KeyY")){
            // call alreadyScored
            console.log("// call alreadyScored - Y");
        }else if ((key === "KeyN" && preKey[0] === "KeyN")){
            // call alreadyScored
            console.log("// call alreadyScored - N");  
        }else {
            console.log("You fell through invalidKeyPressed.  You should NOT be here!!!")
        }
    };
};


// https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event for logkey syntax
function logKey(event) {
    console.log(previousKeysPressed + " inside logKey");
    keyPushed = `${event.code}`;
    console.log(`${keyPushed}`);
    if (keyPushed === "ArrowRight" && previousKeysPressed[0] === "START") {
        // call nextCard to START
        nextCard();
        console.log("// call nextCard at START");   
    }else if (keyPushed === "ArrowRight" && (previousKeysPressed[0] === "KeyY")){
        // call nextCard after 'Y', separate from KeyN due to falsey issue with ||
        nextCard ();
        console.log("// call nextCard with previous of KeyY");
    }else if (keyPushed === "ArrowRight" && (previousKeysPressed[0] === "KeyN")){
        // call nextCard after 'N'
        nextCard();
        console.log("// call nextCard with previous of KeyN");
    }else if (keyPushed === "KeyA" && previousKeysPressed[0] === "ArrowRight"){
        // call showAnswer to flip card to show the answer
        showAnswer();
        console.log("// call showAnswer to flip card and show the answer");
    }else if ((keyPushed === ("KeyY")) && previousKeysPressed[0] === "KeyA"){
        // call selfScoreCorrect
        selfScoreCorrect();
        console.log("// call selfScoreCorrect");
    }else if (keyPushed === ("KeyN") && previousKeysPressed[0] === "KeyA"){
        // call selfScoreWrong
        selfScoreWrong();
        console.log("// call selfScoreWrong");
    }else {
        // call invalidKeyPressed - is a 'validKey' flag needed?
        // look at what was previously pressed and give suggestions
        console.log("// call invalidKeyPressed");
        invalidKeyPressed(keyPushed, previousKeysPressed);
    };
    previousKeysPressed.unshift(`${keyPushed}`);
    console.log(previousKeysPressed);

};

document.addEventListener('keydown', logKey);

console.log("bottom of js, awaiting player to start");
