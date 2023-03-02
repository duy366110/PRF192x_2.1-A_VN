import { messageErrors } from "./data.js";

/**
 * 
 * @param {*} field 
 * @param {*} type 
 * @param {*} rules 
 */
function validField(input) {
    let state;
    for(let i = 0; i < input.rules.length; i++) {
        state = validator(input, input.rules[i]);
        if(!state) {
            break;
        }
    }
    return state;
}

/**
 * 
 * @param {*} field 
 * @param {*} type 
 * @param {*} rule 
 * @returns 
 */
function validator(input, rule) {
    let state = true;
    switch(rule.error) {
        case 'number':
            state = numbers(input);
            break

        case 'range':
            state = range(input);
            break

        case 'required':
        default:
            state = required(input);
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

/**
 * 
 * @param {*} field 
 * @param {*} type 
 * @param {*} rule 
 * @returns true or false
 */
function required(input) {
    let message = $(`#${input.field.id}-message`)[0];

    if(input.field.value.trim()) {
        setMessage(input.field, message, '', true);
        return true;

    } else {
        setMessage(input.field, message, messageErrors.required, false);
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
 * @param {*} field 
 * @param {*} type 
 * @param {*} rule 
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
 * @param {*} form 
 * @param {*} fields 
 */
export function validation (form, fields, callback) {
    let valid = false;
    fields.forEach(itemField => {
        itemField.field.addEventListener('blur', (event) => {
            validField(itemField);
        })
    })

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        fields.forEach(itemField => {
            valid = validField(itemField);
        })
        if(valid) {
            callback(state);
        }
    })
}