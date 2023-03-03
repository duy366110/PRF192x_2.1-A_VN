'use strict';

let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let scorePlayerOne = $('#score--0');
let scorePlayerTwo = $('#score--1');
let currentPlayerOne = $('#current--0');
let currentPlayerTwo = $('#current--1');
let diceImg = $('#dice-img');
let hold = $('#hold');
let player = $$('.player');
let roll = $('#roll');

function randomDice(min, max) {
    return Math.trunc((Math.random() * (max - min)) + 1);
}

function toggleDiceImg(status, diceValue) {
    if(status) {
        if(diceImg.classList.contains('hidden')) {
            diceImg.classList.remove('hidden');
        }
        diceImg.src = `./assets/img/dice-${diceValue}.png`;

    } else {
        diceImg.classList.add('hidden');
        diceImg.src = `./assets/img/dice-1.png`;
    }
}

function changePlayer(diceValue) {
    if(diceValue === 1) {
        if(player[0].classList.contains('player--active')) {
            player[0].classList.remove('player--active');
            player[1].classList.add('player--active');
            return;
        }

        if(player[1].classList.contains('player--active')) {
            player[1].classList.remove('player--active');
            player[0].classList.add('player--active');
        }
    }
}

function calcPlayer(diceValue) {
    if(diceValue === 1) {
        currentPlayerOne.textContent = 0;
        currentPlayerTwo.textContent = 0;
    }

    if((diceValue !== 1) && player[0].classList.contains('player--active')) {
        let valueCurrentPlayerOne = Number(currentPlayerOne.textContent);
        valueCurrentPlayerOne += diceValue;
        currentPlayerOne.textContent = valueCurrentPlayerOne;
    }

    if((diceValue !== 1) && player[1].classList.contains('player--active')) {
        let valueCurrentPlayerTwo = Number(currentPlayerTwo.textContent);
        valueCurrentPlayerTwo += diceValue;
        currentPlayerTwo.textContent = valueCurrentPlayerTwo;
    }
}

function calcHold() {
    if((Number(scorePlayerOne.textContent) >= 100) || (Number(scorePlayerTwo.textContent) >= 100)) {
        playerWinner(Number(scorePlayerOne.textContent), Number(scorePlayerTwo.textContent), 100);

    } else {
        if(player[0].classList.contains('player--active')) {
            scorePlayerOne.textContent = Number(scorePlayerOne.textContent) + Number(currentPlayerOne.textContent);
            currentPlayerOne.textContent = 0;
        }
    
        if(player[1].classList.contains('player--active')) {
            scorePlayerTwo.textContent = Number(scorePlayerTwo.textContent) + Number(currentPlayerTwo.textContent);
            currentPlayerTwo.textContent = 0;
        }
    }
}

function checkPlayerWinner(scoreTarget) {
    if((Number(scorePlayerOne.textContent) >= scoreTarget) || (Number(scorePlayerTwo.textContent) >= scoreTarget)) {
        playerWinner(Number(scorePlayerOne.textContent), Number(scorePlayerTwo.textContent), scoreTarget);

    } else {
        let randomRollDice = randomDice(1, 7);
        toggleDiceImg(true, randomRollDice);

        changePlayer(randomRollDice);
        calcPlayer(randomRollDice);
    }
}

function playerWinner(playerOne, playerTwo, scoreTarget) {
    if(playerOne >= scoreTarget &&  player[0].classList.contains('player--active')) {
        player[0].classList.add('player--winner');
    }

    if(playerTwo >= scoreTarget &&  player[1].classList.contains('player--active')) {
        player[1].classList.add('player--winner');
    }
}

hold.addEventListener('click', calcHold)

roll.addEventListener('click', function(e) {
    checkPlayerWinner(100);
})