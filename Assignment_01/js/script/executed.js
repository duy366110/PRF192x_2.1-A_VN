import {PET, PETS} from './data.js';

export function save(form, fields) {
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
        PETS = JSON.parse(localStorage.getItem('PETS'));
        PETS.push(pet);

    } else {
        PETS.push(pet);
    }

    localStorage.setItem('PETS', JSON.stringify(PETS));
    form.reset();
}