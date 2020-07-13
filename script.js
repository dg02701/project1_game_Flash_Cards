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
// https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
function logKey(event) {
    console.log(previousKeysPressed + " inside logKey");
    keyPushed = `${event.code}`;
    console.log(`${keyPushed}`);
    if ((keyPushed === "ArrowRight" && previousKeysPressed[0] === "START")
        || (keyPushed === "ArrowRight" && previousKeysPressed[0] === ("KeyY" || "KeyN"))){
        // call nextCard
        console.log("// call nextCard");
    }else if (keyPushed === "KeyA" && previousKeysPressed[0] === "ArrowRight"){
        // call showAnswer to flip card to show the answer
        console.log("// call showAnswer to flip card to show the answer");
    }else if ((keyPushed === ("KeyY" || "KeyN")) && previousKeysPressed[0] === "KeyA"){
        // call selfScore
        console.log("// call selfScore");
    }else {
        // call invalidKeyPressed - is a 'validKey' flag needed?
        // look at what was previously pressed and give suggestions
        console.log("// call invalidKeyPressed");
    };

};

// document.querySelector(".cardFront", "#5").innerText = keyPushed;
// newP.innerText = defaultQuote.author;   //? maybe author.value
document.addEventListener('keydown', logKey)
console.log(cardFront.innerText);
 console.log("prettier")

 