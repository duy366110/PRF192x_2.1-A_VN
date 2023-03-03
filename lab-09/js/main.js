'use strict';

let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let scorePlayerOne = $('#score--0');
let scorePlayerTwo = $('#score--1');
let scoreTarget = 100;
let currentPlayerOne = $('#current--0');
let currentPlayerTwo = $('#current--1');
let diceImg = $('#dice-img');
let hold = $('#hold');
let player = $$('.player');
let refresh = $('#refresh');
let roll = $('#roll');

/**
 * 
 * @param {*} min value start random
 * @param {*} max value end random
 * @returns value random dice
 */
function randomDice(min, max) {
    return Math.trunc((Math.random() * (max - min)) + 1);
}

/**
 * 
 * @param {*} diceValue value rolling dice
 * change player rolling dice if dice = 1 change player
 * @returns break flow
 */
function changePlayer(diceValue) {
    if(!playerWinner().status) {
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
}

/**
 * 
 * @param {*} diceValue value rolling dice
 * Caculator score player when rolling dice
 */
function calcPlayer(diceValue) {
    if(!playerWinner().status) {
        if(diceValue === 1) {
            currentPlayerOne.textContent = 0;
            currentPlayerTwo.textContent = 0;
        }

        if((diceValue !== 1)) {
            if(player[0].classList.contains('player--active')) {
                let valueCurrentPlayerOne = Number(currentPlayerOne.textContent);
                valueCurrentPlayerOne += diceValue;
                currentPlayerOne.textContent = valueCurrentPlayerOne;
            }

            if(player[1].classList.contains('player--active')) {
                let valueCurrentPlayerTwo = Number(currentPlayerTwo.textContent);
                valueCurrentPlayerTwo += diceValue;
                currentPlayerTwo.textContent = valueCurrentPlayerTwo;
            }
        }
    }
}

/**
 * 1) Update current value to 0 when player hold value current after rolling dice
 * 2) Add class 'player--winner' - caculator when player winner
 */
function calcHold() {
    if(player[0].classList.contains('player--active')) {
        scorePlayerOne.textContent = Number(scorePlayerOne.textContent) + Number(currentPlayerOne.textContent);
        currentPlayerOne.textContent = 0;
        if(playerWinner().status) {
            playerWinner().player.classList.add('player--winner');
        }
    }

    if(player[1].classList.contains('player--active')) {
        scorePlayerTwo.textContent = Number(scorePlayerTwo.textContent) + Number(currentPlayerTwo.textContent);
        currentPlayerTwo.textContent = 0;
        if(playerWinner().status) {
            playerWinner().player.classList.add('player--winner');
        }
    }
}

/**
 * Check status winner for player
 * @returns Object player winner
 */
function playerWinner() {
    let winner = {
        status: false,
        player: null,
        playerName: ''
    };

    if((Number(scorePlayerOne.textContent) >= scoreTarget) || (Number(scorePlayerTwo.textContent) >= scoreTarget)) {
        winner.status = true;
        if(player[0].classList.contains('player--active')) {
            winner.player = player[0];
            winner.playerName = 'player - 01';
        }

        if(player[1].classList.contains('player--active')) {
            winner.player = player[1];
            winner.playerName = 'player - 02';
        }
        return winner;
    }

    return winner;
}

/**
 * Check - update rolling when roll dice and player winner
 * @param {*} type update image roll
 * @param {*} diceValue value dice
 */
function toggleDiceImg(type, diceValue) {
    if(!playerWinner().status && type === 'roll') {
            if(diceImg.classList.contains('hidden')) {
                diceImg.classList.remove('hidden');
            }
            diceImg.src = `./assets/img/dice-${diceValue}.png`;

    } else {
        diceImg.classList.add('hidden');
        diceImg.src = `./assets/img/dice-${diceValue}.png`;
    }
}

/**
 * Add event when player want save current value to score
 */
hold.addEventListener('click', calcHold)

/**
 * Add event when player agin play game
 */
refresh.addEventListener('click', function(event) {
    if(playerWinner().status) {
        playerWinner().player.classList.remove('player--winner');
    }
    toggleDiceImg('refresh', 1);
    scorePlayerOne.textContent = scorePlayerTwo.textContent = 0;
    currentPlayerOne.textContent = currentPlayerTwo.textContent = 0;
})

/**
 * Add event when player rolling dice
 */
roll.addEventListener('click', function(e) {
    let randomRollDice = randomDice(1, 7);
    toggleDiceImg('roll', randomRollDice);
    changePlayer(randomRollDice);
    calcPlayer(randomRollDice);
})