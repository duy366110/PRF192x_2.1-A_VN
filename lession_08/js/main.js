"use strict";
let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let showModal = $$('.show-modal');
let closeModal = $('#close-modal');
let modal = $('#modal');
let overlay = $('#overlay');

function close() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

function open() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

showModal.forEach(e => {
    e.addEventListener('click', function(e) {
        open();
    })
})

closeModal.addEventListener('click', function(e) {
    close();
})

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        close();
    }
})