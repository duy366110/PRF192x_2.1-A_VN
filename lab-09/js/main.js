'use strict';

let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let diceImg = $('#dice-img');
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
        player.forEach((e) => {
            if(e.classList.contains('player--active') && e.classList.contains('player--0')) {
                e.classList.remove('player--active');
                // console.log([e.nextElementSibling]);
                e.nextElementSibling.classList.add('player--active');

            } else {
                e.classList.remove('player--active');
                e.previousElementSibling.classList.add('player--active');
            }
        })
    }
}

function currentPlayer() {
    player.forEach((e) => {
        if(e.classList.contains('player--active')) {
            console.log(e);
        }
    })
}

roll.addEventListener('click', function(e) {
    let randomRollDice = randomDice(1, 7);
    toggleDiceImg(true, randomRollDice);

    changePlayer(randomRollDice);
    // currentPlayer();
})