const previousKeysPressed = new Array();
previousKeysPressed[0] = "START"
// console.log(previousKeysPressed + " GLOBAL");
let counter = 0  // GLOBAL counter for working through flashCard deck
// console.log("counter initialized " + counter);
let scoreCorrect = 0;  //GLOBAL score - the count of flashcards self-scored correct (Y)
let scoreWrong = 0;     ////GLOBAL Wrongs - the count of flashcards self-scored wrong (N)
const flashCards = [
    {
        prompt:"Who said?",
        quote:"The way to get started is to quit talking and begin doing.",
        author:"Walt Disney"
    },
    {
        prompt:"What is?",
        quote:"3 + 4",
        author:"7"
    },
    {
        prompt:"Who said?",
        quote:"Life is what happens when you're busy making other plans.",
        author:"John Lennon"
    },
    {
        prompt:"Who said?",
        quote:"When you reach the end of your rope, tie a knot in it and hang on.",
        author:"Franklin D. Roosevelt"
    }           //commented out rest of quotes to shorten demo
    // ,
    // {
    //     prompt:"Who said?",
    //     quote:"Don't judge each day by the harvest you reap but by the seeds that you plant.",
    //     author:"Robert Louis Stevenson"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"Always remember that you are absolutely unique. Just like everyone else.",
    //     author:"Margaret Mead"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"The future belongs to those who believe in the beauty of their dreams.",
    //     author:"Eleanor Roosevelt"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    //     author:"Benjamin Franklin"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    //     author:"Helen Keller"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"Whoever is happy will make others happy too.",
    //     author:"Anne Frank"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"Do not go where the path may lead, go instead where there is no path and leave a trail.",
    //     author:"Ralph Waldo Emerson"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    //     author:"Mother Teresa"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    //     author:"Nelson Mandela"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"In the end, it's not the years in your life that count. It's the life in your years.",
    //     author:"Abraham Lincoln"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"Never let the fear of striking out keep you from playing the game.",
    //     author:"Babe Ruth"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"Life is either a daring adventure or nothing at all.",
    //     author:"Helen Keller"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"Many of life's failures are people who did not realize how close they were to success when they gave up.",
    //     author:"Thomas Alva Edison"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    //     author:"Dr. Seuss"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"Only a life lived for others is a life worthwhile.",
    //     author:"Albert Einstein"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"You only live once, but if you do it right, once is enough.",
    //     author:"Mae West"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"May you live all the days of your life.",
    //     author:"Jonathan Swift"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"Life itself is the most wonderful fairy tale.",
    //     author:"Hans Christian Andersen"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"Do not let making a living prevent you from making a life.",
    //     author:"John Wooden"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"Love the life you live. Live the life you love.",
    //     author:"Bob Marley"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"I failed my way to success.",
    //     author:"Thomas Edison"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"The only place where success comes before work is in the dictionary.",
    //     author:"Vidal Sassoon"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"You miss 100% of the shots you don't take.",
    //     author:"Wayne Gretzky"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"Nothing is impossible, the word itself says, ‘I'm possible!'",
    //     author:"Audrey Hepburn"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"Believe you can and you're halfway there.",
    //     author:"Theodore Roosevelt"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"The question isn't who is going to let me; it's who is going to stop me.",
    //     author:"Ayn Rand"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"If you tell the truth, you don't have to remember anything.",
    //     author:"Mark Twain"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"Truth is like the sun. You can shut it out for a time, but it ain't goin' away.",
    //     author:"Elvis Presley"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"You can observe a lot by just watching.",
    //     author:"Yogi Berra"
    // },
    // {
    //     prompt:"Who said?",
    //     quote:"All that glitters is not gold.",
    //     author:"William Shakespeare"
    // },  
    // {
    //     prompt:"Who said?",
    //     quote:"Let the one among you who is without sin be the first to cast a stone.",
    //     author:"Jesus Christ"
    // }   
];
// console.log(Array.isArray(flashCards));
// console.log(flashCards[0].prompt);
// console.log(flashCards[0].quote);

const cardsToReview = [     //initialize array for stack of missed (wrong - N) cards to review
    {
        prompt:"EMPTY",
        quote:"EMPTY",
        author:"EMPTY"
    }];
// console.log(Array.isArray(cardsToReview));
function nextCard(){
    let mainDeckFinished = false;
    // console.log("in nextCard, counter starts as: = " + counter);
    // console.log("flashCards.length= " + flashCards.length);
    //blank previous answer (back) before new question (front) is shown
    let cardBack = document.querySelector("#cardBack");
    cardBack.innerText = ("");  
    if (counter === flashCards.length){
        mainDeckFinished = true;
    }else {
        //display new promt and question
        let cardFront = document.querySelector("#cardFront");
        // counter = counter + 1;
        // console.log("else ln75", flashCards, counter);
        cardFront.innerText = (flashCards[counter].prompt + '\r\n' + '\r\n' + flashCards[counter].quote);
        // counter = counter + 1;
    };
    if (mainDeckFinished && (cardsToReview[0].prompt === "EMPTY")) {
        conslog.log("removeEventListener ln 78");
        document.removeEventListener('keydown', logKey); 
    }else if(mainDeckFinished && (cardsToReview[0].prompt !== "EMPTY")) {
        // console.log("78Still more to go!  There are " + (cardsToReview.length - 1) + " to review.");
        review();
    };
};     
function review(){
    let cardFront = document.querySelector("#cardFront");
    cardFront.innerText = "";
    let msg = document.querySelector("#div4");
    msg.innerText = ("That was the last new card in the deck!" + '\r\n' + 
    "Your FINAL score is  " + scoreCorrect + " correct out of " + cardsPlayed + " played." + '\r\n'
    + '\r\n' + "Next are your review cards.   You have " + (cardsToReview.length-1) + ".   Press any key to review below."
    );
    // console.log("removeEventListener ln 102");
    document.removeEventListener('keydown', logKey); 
    // console.log(cardsToReview.length);
    const cLength = cardsToReview.length;
    console.log(cLength);  //have to do since method '.shift' will be changing length of array below
    for (let i = 1; i < (cLength); i++){
        document.addEventListener('keydown', function() {
            let front = document.querySelector("#cardFront"); 
            // console.log("Review " + cardsToReview[0].prompt + '\r\n' + '\r\n' + cardsToReview[0].quote); 
            if (cardsToReview[0].prompt !== "EMPTY"){
                front.innerText = ("****REVIEW**** " + '\r\n' + '\r\n' + cardsToReview[0].prompt + '\r\n' + '\r\n' + cardsToReview[0].quote);
                let cardBack = document.querySelector("#cardBack");
                cardBack.innerText = ('\r\n' + "- " + cardsToReview[0].author);
                cardsToReview.shift();
            }else {
                let msg4 = document.querySelector("#div4");
                msg4.innerText = ("That was the last card to review!" + '\r\n' + 
                "Your FINAL score is  " + scoreCorrect + " correct out of a " + cardsPlayed + " card deck."
                );
                let msg5 = document.querySelector("#div5");
                msg5.innerText = ("Refresh the browser to go through the deck again.");
                front.innerText = "";
                cardBack.innerText = "";
            }
        });
    };

    // console.log("removeEventListener ln 102");
    // document.removeEventListener('keydown', logKey); 
    //call finish()
};
        //  display msg in <div> 4 on last card and how to reset.
function showAnswer(){
    let cardBack = document.querySelector("#cardBack");
    // console.log("counter in showAnswer", counter);
    cardBack.innerText = (flashCards[counter].author);
    cardsPlayed = counter + 1;
};
function selfScoreCorrect(){    //when KeyY is pressed as response to, "Was your answer correct?"
    scoreCorrect += 1;
    // cardsPlayed = counter + 1;
    // console.log(scoreCorrect);
    let score = document.querySelector("#div4");
    score.innerText = ("Your score is  " + scoreCorrect + " correct out of " + cardsPlayed + " played.");
    counter = counter + 1;
};
function selfScoreWrong(){      //when KeyN is pressed as response to, "Was your answer correct?"
    // console.log("Cards in review stack BEFORE adding this card:  " + scoreWrong);
    let card = flashCards[counter];
    // console.log("counter in selfScoreWrong " + counter);
    // let x = flashCards[counter].prompt;
    // let y = flashCards[counter].quote; 
    // let z = flashCards[counter].author; 
    cardsToReview.unshift(card);
    let cardFront = document.querySelector("#cardFront")
    // cardFront.innerText = ("Review " + cardsToReview[0].prompt + '\r\n' + '\r\n' + cardsToReview[0].quote);
    cardFront.innerText = (cardsToReview[0].prompt + '\r\n' + '\r\n' + cardsToReview[0].quote);
    // console.log("cardsToReview", cardsToReview);
    // cardsToReview[scoreWrong].prompt = flashCards[counter].prompt;
    // cardsToReview[scoreWrong].quote = flashCards[counter].quote; 
    // cardsToReview[scoreWrong].author = flashCards[counter].author; 
    // console.log(cardsToReview[0]);
    let score = document.querySelector("#div4");
    scoreWrong += 1;    //?take out and use .length instead?
    score.innerText = ("Your score is  " + scoreCorrect + " correct out of " + cardsPlayed + " played.");
    reviewStack = ('\r\n' + "Cards to review:  " + scoreWrong);
    score.innerText += reviewStack;
    // console.log('\r\n' + "Cards to review:  " + scoreWrong);
    counter = counter + 1;
};
function invalidKeyPressed(key, preKey){
    let validKey = false;
    // console.log("key argument - " + key);
    // console.log("prekey argument - " + preKey);
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
            // console.log("// call wantToSkip");
        }else if ((key === "ArrowRight" && preKey[0] === "KeyA")){
            // call wantToSkip
            // console.log("// call wantToSkip");       
        }else if ((key === "KeyA" && preKey[0] === "KeyA")){
            // call answerAlreadyDisplayed
            // console.log("// call answerAlreadyDisplayed"); 
        }else if ((key === "KeyA" && preKey[0] === "KeyY")){
            // call answerShowingAndScored, will need arguement of score
            // console.log("// call answerShowingAndScored -  Y branch"); 
        }else if ((key === "KeyA" && preKey[0] === "KeyN")){
            // call answerShowingAndScored, will need arguement of score
            // console.log("// call answerShowingAndScored - N branch"); 
        }else if ((key === "KeyY" && preKey[0] === "ArrowRight")){
            // call youHaveNotSeenAnswer
            // console.log("// call youHaveNotSeenAnswer - from Y");
        }else if ((key === "KeyY" && preKey[0] === "KeyY")){
            // call alreadyScored
            // console.log("// call alreadyScored - Y");
        }else if ((key === "KeyY" && preKey[0] === "KeyN")){
            // call alreadyScored
            // console.log("// call alreadyScored - N");  
        }else if ((key === "KeyN" && preKey[0] === "ArrowRight")){
            // call youHaveNotSeenAnswer
            // console.log("// call youHaveNotSeenAnswer - from N branch");
        }else if ((key === "KeyN" && preKey[0] === "KeyY")){
            // call alreadyScored
            // console.log("// call alreadyScored - Y");
        }else if ((key === "KeyN" && preKey[0] === "KeyN")){
            // call alreadyScored
            // console.log("// call alreadyScored - N");  
        }else {
            console.log("You fell through invalidKeyPressed.  You should NOT be here!!!")
        }
    };
};


// https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event for logkey syntax
function logKey(event) {
    // console.log(previousKeysPressed + " inside logKey");
    keyPushed = `${event.code}`;
    // console.log(`${keyPushed}`);
    if (keyPushed === "ArrowRight" && previousKeysPressed[0] === "START") {
        // call nextCard to START
        nextCard();
        // console.log("// call nextCard at START");   
    }else if (keyPushed === "ArrowRight" && (previousKeysPressed[0] === "KeyY")){
        // call nextCard after 'Y', separate from KeyN due to falsey issue with ||
        nextCard ();
        // console.log("// call nextCard with previous of KeyY");
    }else if (keyPushed === "ArrowRight" && (previousKeysPressed[0] === "KeyN")){
        // call nextCard after 'N'
        nextCard();
        // console.log("// call nextCard with previous of KeyN");
    }else if (keyPushed === "KeyA" && previousKeysPressed[0] === "ArrowRight"){
        // call showAnswer to flip card to show the answer
        showAnswer();
        // console.log("// call showAnswer to flip card and show the answer");
    }else if ((keyPushed === ("KeyY")) && previousKeysPressed[0] === "KeyA"){
        // call selfScoreCorrect
        selfScoreCorrect();
        // console.log("// call selfScoreCorrect");
    }else if (keyPushed === ("KeyN") && previousKeysPressed[0] === "KeyA"){
        // call selfScoreWrong
        selfScoreWrong();
        // console.log("// call selfScoreWrong");
    }else {
        // call invalidKeyPressed - is a 'validKey' flag needed?
        // look at what was previously pressed and give suggestions
        // console.log("// call invalidKeyPressed");
        invalidKeyPressed(keyPushed, previousKeysPressed);
    };
    previousKeysPressed.unshift(`${keyPushed}`);
    // console.log(previousKeysPressed);

};

document.addEventListener('keydown', logKey);

console.log("bottom of js, awaiting player to start");
let msg1 = document.querySelector("#div1");
msg1.innerText = ("Welcome to Flashcard Fun!  Here is how you play.");

let msg2 = document.querySelector("#div2");
msg2.innerText = ("Use KEYBOARD only.   Here are the keys to use:");

let msg3 = document.querySelector("#div3");
msg3.innerText = ("ArrowRight (very bottom right of keyboard) gets next card." + '\r\n' + 
"'A' shows card back and answer." + '\r\n' + 
"'Y' records your self-score that 'Yes', you had the correct answer." + '\r\n' + 
"'N' records your self-score that 'No', you did not have the correct answer." + '\r\n' +
" After you select Y or N, use ArrowRight to get the next card."
);

let msg4 = document.querySelector("#div4");
msg4.innerText = ("Now hit that arrow to the RIGHT and let's start!");

