import { messageErrors } from "./data.js";


/**
 * 
 * @param {*} input single filed in form pet validation
 * @returns status checked validation field successfull or failed
 */
function validField(input) {
    let status = true;
    if(input.rules.length > 0) {
        for(let i = 0; i < input.rules.length; i++) {
            status = validator(input, input.rules[i]);
            if(!status) {
                break;
            }
        }
    }
    return status;
}


/**
 * 
 * @param {*} input field input from form pet information.
 * @param {*} rule condition validation field.
 * @returns status validation rule successfull or failed.
 */
function validator(input, rule) {
    let status = true;
    switch(rule.error) {
        case 'number':
            status = numbers(input);
            break

        case 'range':
            status = range(input);
            break

        case 'unique':
            status = unique(input);
            break

        case 'required':
        default:
            status = required(input);
            break;
    }

    return status;
}


/**
 * 
 * @param {*} input field input from form pet information.
 * @param {*} message field small show message after field input.
 * @param {*} messageContent content for field message.
 * @param {*} status (true/false) add message or delete message.
 */
function setMessage(input, message, messageContent, status) {
    message.textContent = messageContent;
    if(status) {
        input.classList.remove('is-invalid');
        message.classList.remove('is-invalid');

    } else {
        input.classList.add('is-invalid');
        message.classList.add('is-invalid');
    }
}


/**
 * 
 * validation field need value.
 * @param {*} input field input from form pet information.
 * @returns status validation field.
 */
function required(input) {
    let message = $(`#${input.field.id}-message`)[0];

    if(input.field.type === 'checkbox') {
        if(input.field.checked) {
            setMessage(input.field, message, '', true);
            return true;

        } else {
            setMessage(input.field, message, messageErrors.required, false);
            return false;
        }

    } else {
        if(input.field.value.trim()) {
            setMessage(input.field, message, '', true);
            return true;
    
        } else {
            setMessage(input.field, message, messageErrors.required, false);
            return false;
        }
    }
}

/**
 * 
 * Validation field value number.
 * @param {*} input field input from form pet information.
 * @returns status validation field.
 */
function numbers(input) {
    let message = $(`#${input.field.id}-message`)[0];
    let inputValue = Number(input.field.value);

    if(typeof inputValue) {
        setMessage(input.field, message, '', true);
        return true;

    } else {
        setMessage(input.field, message, messageErrors.number, false);
        return false;
    }
}


/**
 * 
 * Validation field value range min - max.
 * @param {*} input field input from form pet information.
 * @returns status validation field.
 */
function range(input) {
    let message = $(`#${input.field.id}-message`)[0];
    let inputValue = Number(input.field.value);
    let min = Number(input.field.attributes['attr-min'].value);
    let max = Number(input.field.attributes['attr-max'].value);

    if((inputValue >= min) && (inputValue <= max)) {
        setMessage(input.field, message, '', true);
        return true;

    } else {
        setMessage(input.field, message, messageErrors.age, false);
        return false;
    }
}


/**
 * 
 * Validation field value unique.
 * @param {*} input field input from form pet information.
 * @returns status validation field.
 */
function unique(input) {
    let message = $(`#${input.field.id}-message`)[0];
    if(localStorage.getItem('PETS')) {
        let pets = JSON.parse(localStorage.getItem('PETS'));

        if(pets.length && pets.some(pet => pet.id === input.field.value)) {
            setMessage(input.field, message, messageErrors.uniqueID, false);
            return false;

        } else {
            setMessage(input.field, message, '', true);
            return true;
        }

    } else {
        setMessage(input.field, message, '', true);
        return true;
    }
}


/**
 * 
 * @param {*} form this's form information pet from HTML
 * @param {*} fields  this's list object filed input from main.js
 * @param {*} savePet This's callback function input from main.js
 */
export function validation (form, fields, savePet) {
    let valid = false;
    fields.forEach(itemField => {
        if(itemField.rules.length) {
            itemField.field.addEventListener('blur', (event) => {
                validField(itemField);
            })
        }
    })

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        fields.forEach(itemField => {
            if(itemField.rules.length) {
                valid = validField(itemField);
            }
        })
        if(valid) {
            savePet(form, fields);
        }
    })
}