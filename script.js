// let keyPushed = " "
const previousKeysPressed = new Array();
previousKeysPressed[0] = "START"
console.log(previousKeysPressed + " GLOBAL");




const flashCards = [
    {
        prompt:"Who said?",
        quote:"Whether you think you can or think you can’t, you’re right.",
        author:"Henry Ford"
    },
    {
        prompt:"Who said?",
        quote:"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        author:"Winston Churchill"
    }];
console.log(flashCards[1].prompt)

// flashCards.forEach(card => {

// })

function invalidKeyPressed(key, preKey){
    if (key !== ("ArrowRight" || "KeyA" || "KeyY" || "KeyN")){
        console.log("Not a game key, // call showHelpKeys");
        // call showHelpKeys
    }else if ((keyPushed === "ArrowRight" && previousKeysPressed[0] === "ArrowRight")) {
        // call wantToSkip
        console.log("// call wantToSkip");
    }else if ((keyPushed === "ArrowRight" && previousKeysPressed[0] === "KeyA")){
         // call wantToSkip
         console.log("// call wantToSkip");       
    }else if ((keyPushed === "KeyA" && previousKeysPressed[0] === "KeyA")){
        // call answerAlreadyDisplayed
        console.log("// call answerAlreadyDisplayed"); 
    }else if ((keyPushed === "KeyA" && previousKeysPressed[0] === "KeyY")){
        // call answerShowingAndScored, will need arguement of score
        console.log("// call answerShowingAndScored -  Y branch"); 
    }else if ((keyPushed === "KeyA" && previousKeysPressed[0] === "KeyN")){
        // call answerShowingAndScored, will need arguement of score
        console.log("// call answerShowingAndScored - N branch"); 
    }else if ((keyPushed === "KeyY" && previousKeysPressed[0] === "ArrowRight")){
        // call youHaveNotSeenAnswer
        console.log("// call youHaveNotSeenAnswer - from Y");
    }else if ((keyPushed === "KeyY" && previousKeysPressed[0] === "KeyY")){
        // call alreadyScored
        console.log("// call alreadyScored - Y");
    }else if ((keyPushed === "KeyY" && previousKeysPressed[0] === "KeyN")){
        // call alreadyScored
        console.log("// call alreadyScored - N");  
    }else if ((keyPushed === "KeyN" && previousKeysPressed[0] === "ArrowRight")){
        // call youHaveNotSeenAnswer
        console.log("// call youHaveNotSeenAnswer - from N branch");
    }else if ((keyPushed === "KeyN" && previousKeysPressed[0] === "KeyY")){
        // call alreadyScored
        console.log("// call alreadyScored - Y");
    }else if ((keyPushed === "KeyN" && previousKeysPressed[0] === "KeyN")){
        // call alreadyScored
        console.log("// call alreadyScored - N");  
    }
}

// console.log("in ELSE of f invalidKeyPressed");



// https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event for logkey syntax
function logKey(event) {
    console.log(previousKeysPressed + " inside logKey");
    keyPushed = `${event.code}`;
    console.log(`${keyPushed}`);
    if (keyPushed === "ArrowRight" && previousKeysPressed[0] === "START") {
        // call nextCard to START
        console.log("// call nextCard at START");   
    }else if (keyPushed === "ArrowRight" && (previousKeysPressed[0] === ("KeyY" || "KeyN"))){
        // call nextCard after 'Y' or 'N'
        console.log("// call nextCard with previous of KeyY || KeyN");
    }else if (keyPushed === "KeyA" && previousKeysPressed[0] === "ArrowRight"){
        // call showAnswer to flip card to show the answer
        console.log("// call showAnswer to flip card and show the answer");
    }else if ((keyPushed === ("KeyY")) && previousKeysPressed[0] === "KeyA"){
        // call selfScoreCorrect
        console.log("// call selfScoreCorrect");
    }else if (keyPushed === ("KeyN") && previousKeysPressed[0] === "KeyA"){
        // call selfScoreWrong
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
// document.querySelector(".cardFront", "#5").innerText = keyPushed;
// newP.innerText = defaultQuote.author;   //? maybe author.value
document.addEventListener('keydown', logKey)
console.log(cardFront.innerText);
console.log("prettier");
