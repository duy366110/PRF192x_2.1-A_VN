import {PET, PETS} from './data.js';
import {renderPetTemplate} from './render.js';

let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);


export function caculatorBMI() {
    let BMI = $('#caculatorBMI');
    BMI.addEventListener('click', function(event) {
        renderPetTemplate(deletePet, true);
    })
}

/**
 * 
 * Delete element pet in list pets.
 * @param {*} pets recive pet list checked delete element by id.
 */
export function deletePet(pets) {
    let btnDeletes = $$('.btn-pet-delete');
    let id = 0;

    for(let index = 0; index < btnDeletes.length; index++) {
        btnDeletes[index].addEventListener('click', function(event) {
            let accuracy = confirm('Are you sure?');

            if(accuracy) {
                pets.forEach((pet, ids) => {
                    if(event.target.id === pet.id) {
                        id = ids;
                    }
                })
                pets.splice(id, 1);
                localStorage.setItem('PETS', JSON.stringify(pets));
                window.location.reload();
            }
        })
    }
}


/**
 * Function get curent date.
 * @returns Current date.
 */
function getDate() {
    let date = new Date();
    date = date.toLocaleDateString().split('/');
    date = date.reduce((acc, el) => {
        ;
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
    let pet = new PET(null, null, null, getDate(), null,null, null,null,null,null,null,null);
    
    let mapFields = fields.map((e) => {
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
        mapFields.forEach((e) => {
            if(e.name === key) {
                pet[key] = e.value;
            }
        })
    })
    pet.caculatorBMI();

    if(localStorage.getItem('PETS')) {
        Object.assign(PETS, JSON.parse(localStorage.getItem('PETS')));
        PETS.push(pet);

    } else {
        PETS.push(pet);
    }

    localStorage.setItem('PETS', JSON.stringify(PETS));
    form.reset();
    renderPetTemplate(deletePet, false);
}


/**
 * Function show pet with condition healthy pet or show all pet.
 */
export function renderPetHealthyView() {
    let btnPetHealthy = $('#showPetHealthy');

    let render = (localStorage.getItem('RENDER'))? (localStorage.getItem('RENDER')) : 'SA';
    if(render === 'SA') {
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
            localStorage.setItem('RENDER', 'SA');
            renderPetTemplate(deletePet, false);

        } else {
            // SHOW HEALTHY PET
            this.classList.add('show-healthy-pet');
            this.textContent = 'Show All Pet';
            localStorage.setItem('RENDER', 'SH');
            renderPetTemplate(deletePet, false);

        }
    })
}