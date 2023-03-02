let $ = document.querySelector.bind(document);

// ACCESS DOM
let agin = $('#agin');
let body = $('#body');
let scoreDefault = 20;
let check = $('#check');
let guess = $('#guess');
let highScore = $('#highscore');
let numberSecret = Math.trunc((Math.random() * scoreDefault) + 1);
let numberToken = $('#numbertoken');
let message = $('#message');
let messages = {
    noNumber: '⛔️ No number!',
    correctNumber: '🎉 Correct Number!',
    highNumber: '📈 Too high!',
    lostGame: '💥 You lost the game!',
    lowNumber: '📉 Too low!',
    startGuess: 'Start guessing...',
}
let score = $('#score');

// SET MESSAGE
function setMessage(parameterMessage) {
    message.textContent = parameterMessage;
}

// SET HIGH SCORE
function setHighScore(parameterScore) {
    let high = Number(highScore.textContent)? Number(highScore.textContent) : 0;
    if((parameterScore > high)) {
        highScore.textContent = parameterScore;
    }
}

// SUBSTRCTION SCORE
function substractionScore(parameterScore) {
    score.textContent = (parameterScore > 0)? (parameterScore - 1) : 0;
}

// CHECK GUESS NUMBER
function checkGuessNumber(inputNumber) {
    let scoreValue = Number(score.textContent);
    
    if(scoreValue > 0) {
        if(!inputNumber) {
            setMessage(messages.noNumber);

        } else {
            if(inputNumber < numberSecret) {
                setMessage(messages.lowNumber);
                substractionScore(scoreValue);

            } else if(inputNumber > numberSecret) {
                setMessage(messages.highNumber);
                substractionScore(scoreValue);

            } else {
                setMessage(messages.correctNumber);
                setHighScore(scoreValue);
                numberToken.textContent = numberSecret;
                numberToken.style.width = '30rem';
                body.style.backgroundColor = '#60b347';
            }
        }
    
    } else {
        setMessage(messages.lostGame);
    }
}

// REST WHEN AGIN BUTTON CLICK
function reset() {
    setMessage(messages.startGuess);
    body.style.backgroundColor = '#222';
    numberToken.style.width = '15rem';
    numberToken.textContent = '?';
    guess.value = '';
    score.textContent = scoreDefault;
}


// ADD EVENT TO ELEMENT
check.addEventListener('click', () => {
    checkGuessNumber(Number(guess.value));
})

agin.addEventListener('click', () => {
    reset();
})


