import { messageErrors } from "./data.js";

/**
 * 
 * @param {*} field 
 * @param {*} type 
 * @param {*} rules 
 */
function validField(field, type, rules) {
    for(let i = 0; i < rules.length; i++) {
        let state = validator(field, type, rules[i]);
        if(!state) {
            break;
        }
    }
}

/**
 * 
 * @param {*} field 
 * @param {*} type 
 * @param {*} rule 
 * @returns 
 */
function validator(field, type, rule) {
    let state = true;
    switch(rule.error) {
        case 'number':
            state = numbers(field, type, rule);
            break

        case 'range':
            state = range(field, type, rule);
            break

        case 'required':
        default:
            state = required(field, type, rule);
            break;
    }

    return state;
}

/**
 * 
 * @param {*} field 
 * @param {*} message 
 * @param {*} messageContent 
 * @param {*} state 
 */
function setMessage(field, message, messageContent, state) {
    message.textContent = messageContent;
    if(state) {
        field.classList.remove('is-invalid');
        message.classList.remove('is-invalid');

    } else {
        field.classList.add('is-invalid');
        message.classList.add('is-invalid');
    }
}


// Option validator

/**
 * 
 * @param {*} field 
 * @param {*} type 
 * @param {*} rule 
 * @returns true or false
 */
function required(field, type, rule) {
    let message = $(`#${field.id}-message`)[0];

    if(field.value.trim()) {
        setMessage(field, message, '', true);
        return true;

    } else {
        setMessage(field, message, messageErrors.required, false);
        return false;
    }
}

/**
 * 
 * @param {*} field 
 * @param {*} type 
 * @param {*} rule 
 * @returns 
 */
function numbers(field, type, rule) {
    let message = $(`#${field.id}-message`)[0];
    let inputValue = Number(field.value);

    if(typeof inputValue) {
        setMessage(field, message, '', true);
        return true;

    } else {
        setMessage(field, message, messageErrors.number, false);
        return false;
    }
}

/**
 * 
 * @param {*} field 
 * @param {*} type 
 * @param {*} rule 
 */
function range(field, type, rule) {
    let message = $(`#${field.id}-message`)[0];
    let inputValue = Number(field.value);
    let min = Number(field.attributes['attr-min'].value);
    let max = Number(field.attributes['attr-max'].value);

    if((inputValue >= min) && (inputValue <= max)) {
        setMessage(field, message, '', true);
        return true;

    } else {
        setMessage(field, message, messageErrors.age, false);
        return false;
    }
}

/**
 * 
 * @param {*} form 
 * @param {*} fields 
 */
export function validation (form, fields) {

    fields.forEach(itemField => {
        itemField.field.addEventListener('blur', (event) => {
            validField(itemField.field, itemField.type, itemField.rules);
        })
    })

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        fields.forEach(itemField => {
            validField(itemField.field, itemField.type, itemField.rules);
        })
    })
}