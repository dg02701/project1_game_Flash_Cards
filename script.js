// let keyPushed = " "
const previousKeysPressed = new Array();
previousKeysPressed[0] = "START"
console.log(previousKeysPressed + " GLOBAL");
let counter = 0;  // GLOBAL counter for working through flashCard deck
console.log("counter initialized " + counter);

const flashCards = [
    {
        prompt:"Who said?",
        quote:"0Whether you think you can or think you can’t, you’re right.",
        author:"Henry Ford"
    },
    {
        prompt:"Who said?",
        quote:"1The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        author:"Winston Churchill"
    },
    {
        prompt:"Who said?",
        quote:"2The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        author:"Winston Churchill"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"3The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    //     author:"Winston Churchill"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"4The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    //     author:"Winston Churchill"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"5The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    //     author:"Winston Churchill"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"6The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    //     author:"Winston Churchill"
    // }];
    }];   // takeout when uncomment Q 3-6.
console.log(Array.isArray(flashCards));
console.log(flashCards[0].prompt);
console.log(flashCards[0].quote);

function nextCard (){
    console.log("in nextCard, counter starts as: = " + counter);
    console.log("flashCards.length= " + flashCards.length);
    let cardFront = document.querySelector("#cardFront");
    cardFront.innerText = flashCards[counter].prompt;   
    cardFront.innerText = flashCards[counter].quote;
    counter = counter + 1;
    if (counter >= flashCards.length){
        console.log("That was the last card in deck!");
        document.removeEventListener('keydown', logKey); 
        //  display msg in <div> 4 on last card and how to reset.
    };
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

document.addEventListener('keydown', logKey);

    
// need to add checkWrongStack

// document.addEventListener('keydown', logKey)
// console.log(cardFront.innerText);
console.log("prettier");
