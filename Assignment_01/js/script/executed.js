import {PET, PETS} from './data.js';
import {renderPetTemplate} from './render.js';

let $$ = document.querySelectorAll.bind(document);

export function deletePet(pets) {
    let btnDeletes = $$('.btn-pet-delete');
    let id = 0;

    for(let index = 0; index < btnDeletes.length; index++) {
        btnDeletes[index].addEventListener('click', function(event) {
            pets.forEach((pet, ids) => {
                if(event.target.id === pet.id) {
                    id = ids;
                }
            })
            pets.splice(id, 1);
            localStorage.setItem('PETS', JSON.stringify(pets));
            window.location.reload();
        })
    }
}

export function savePet(form, fields) {
    let pet = new PET(null, null, null, null,null, null,null,null,null,null,null);
    
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

    if(localStorage.getItem('PETS')) {
        Object.assign(PETS, JSON.parse(localStorage.getItem('PETS')));
        PETS.push(pet);

    } else {
        PETS.push(pet);
    }

    localStorage.setItem('PETS', JSON.stringify(PETS));
    form.reset();
    renderPetTemplate(deletePet);
}