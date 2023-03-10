import {RENDER, PET, PETS} from './data.js';
import {Store} from './store.js';
import {RENDERVIEW} from './render.js';

let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);


/**
 * Function get curent date.
 * @returns Current date.
 */
function getDate() {
    let date = new Date();
    date = date.toLocaleDateString().split('/');
    date = date.reduce((acc, el) => {
        return acc.concat((el.length > 1)? el : `0${el}`);

    }, []).join('/')

    return date;
}


/**
 * 
 * @param {*} form this's form information pet from HTML recive validation.js
 * @param {*} fields  this's list object filed input from HTML recive validation.js
 */
export function savePet(form, fields) {
    // let pet = new PET(null, null, null, getDate(), null,null, null,null,null,null,null,null);
    
    // let mapFields = fields.map((e) => {
    //     let value;
    //     if(e.field?.type === 'checkbox') {
    //         value = (e.field.checked)? true : false;

    //     } else {
    //         value = e.field?.value;
    //     }

    //     return {
    //         name: e.name,
    //         value
    //     }
    // })

    // Object.keys(pet).forEach((key) => {
    //     mapFields.forEach((e) => {
    //         if(e.name === key) {
    //             pet[key] = e.value;
    //         }
    //     })
    // })
    // pet.caculatorBMI();

    // if(Store.get('PETS')) {
    //     Object.assign(PETS, Store.get('PETS'));
    //     PETS.push(pet);

    // } else {
    //     PETS.push(pet);
    // }

    // if(Store.save('PETS', PETS)) {
    //     form.reset();
    //     RENDERVIEW.view(false);

    // } else {
    //     alert('save element failed');
    // }
}


/**
 * Function show pet with condition healthy pet or show all pet.
 */
export function renderPetHealthyView() {
    let btnPetHealthy = $('#showPetHealthy');

    let render = (Store.check('RENDER'))? Store.get('RENDER') : RENDER;

    if(render.key === 'SA') {
        btnPetHealthy.textContent = 'Show Healthy Pet';
        btnPetHealthy.classList.remove('show-healthy-pet');

    } else {
        btnPetHealthy.textContent = 'Show All Pet';
        btnPetHealthy.classList.add('show-healthy-pet');
    }


    btnPetHealthy.addEventListener('click', function(event) {
        if(this.classList.contains('show-healthy-pet')) {
            // SHOW ALL PET
            this.classList.remove('show-healthy-pet');
            this.textContent = 'Show Healthy Pet';
            RENDER.key = 'SA';

        } else {
            // SHOW HEALTHY PET
            this.classList.add('show-healthy-pet');
            this.textContent = 'Show All Pet';
            RENDER.key = 'SH';

        }

        if(Store.save('RENDER', RENDER)) {
            RENDERVIEW.view(false);
        }
    })
}

export const EXECURED = {
    bmi: function() {
        $('#caculatorBMI').addEventListener('click', function(event) {
            RENDERVIEW.view(true);
        })
    },

    remove: function() {
        let viewRoot = $('#tbody');
        viewRoot.addEventListener('click', function(event) {
            if(event.target.classList.contains('btn-pet-delete')) {
                let pets = Store.get('PETS');
                pets.splice(pets.findIndex((el) => el.id == event.target.dataset.id));
                (Store.save('PETS', pets))? window.location.reload() : alert('Delete element failed');
            }
        })
    },

    save: function(fields) {
        let pet = new PET(null, null, null, getDate(), null,null, null,null,null,null,null,null);
    
        let mapperPet = fields.map((e) => {
            let value;
            if(e.field?.type === 'checkbox') {
                value = (e.field.checked)? true : false;

            } else {
                value = e.field?.value;
            }

            return {
                name: e.name,
                value
            }
        })

        Object.keys(pet).forEach((key) => {
            mapperPet.forEach((e) => {
                if(e.name === key) {
                    pet[key] = e.value;
                }
            })
        })
        pet.caculatorBMI();

        // if(Store.get('PETS')) {
        //     Object.assign(PETS, Store.get('PETS'));
        //     PETS.push(pet);

        // } else {
        //     PETS.push(pet);
        // }

        // if(Store.save('PETS', PETS)) {
        //     form.reset();
        //     RENDERVIEW.view(false);

        // } else {
        //     alert('save element failed');
        // }
    }
}