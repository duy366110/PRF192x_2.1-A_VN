import { messageErrors } from "./data.js";
import {Store} from './store.js';

/**
 * 
 * @param {*} idField id element small show message.
 * @returns element small show message on HTML page.
 */
function getFieldMessage(idField) {
    return $(`#${idField}-message`)[0];
}


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
    switch(rule.condition) {
        case 'number':
            status = numbers(input, rule.message);
            break

        case 'range':
            status = range(input, rule.message);
            break

        case 'unique':
            status = unique(input, rule.message);
            break

        case 'required':
        default:
            status = required(input, rule.message);
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
function required(input, messageContent) {
    let messageField = getFieldMessage(input.field.id);
    let message = (messageContent)? messageContent: messageErrors.required;

    if(input.field.type === 'checkbox') {
        if(input.field.checked) {
            setMessage(input.field, messageField, '', true);
            return true;

        } else {
            setMessage(input.field, messageField, message, false);
            return false;
        }

    } else {
        if(input.field.value.trim()) {
            setMessage(input.field, messageField, '', true);
            return true;
    
        } else {
            setMessage(input.field, messageField, message, false);
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
function numbers(input, messageContent) {
    let messageField = getFieldMessage(input.field.id);
    let inputValue = Number(input.field.value);
    let message = (messageContent)? messageContent :  messageErrors.number;

    if(typeof inputValue) {
        setMessage(input.field, messageField, '', true);
        return true;

    } else {
        setMessage(input.field, messageField, message, false);
        return false;
    }
}


/**
 * 
 * Validation field value range min - max.
 * @param {*} input field input from form pet information.
 * @returns status validation field.
 */
function range(input, messageContent) {
    let messageField = getFieldMessage(input.field.id);
    let inputValue = Number(input.field.value);
    let min = Number(input.field.attributes['attr-min'].value);
    let max = Number(input.field.attributes['attr-max'].value);

    let message = (messageContent)? messageContent : `${messageErrors.rangeDefault} ${min} and ${max}`;

    if((inputValue >= min) && (inputValue <= max)) {
        setMessage(input.field, messageField, '', true);
        return true;

    } else {
        setMessage(input.field, messageField, message, false);
        return false;
    }
}


/**
 * 
 * Validation field value unique.
 * @param {*} input field input from form pet information.
 * @returns status validation field.
 */
function unique(input, messageContent) {
    let messageField = getFieldMessage(input.field.id);
    let message = (messageContent)? messageContent :  messageErrors.uniqueID;

    if(Store.get('PETS')) {
        let pets = Store.get('PETS');

        if(pets.length && pets.some(pet => pet.id === input.field.value)) {
            setMessage(input.field, messageField, message, false);
            return false;

        } else {
            setMessage(input.field, messageField, '', true);
            return true;
        }

    } else {
        setMessage(input.field, messageField, '', true);
        return true;
    }
}


export const VALIDATION = (() => {

    function handleValid(form, fields, methodSave) {
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

    return {
        validation: handleValid,
    }
})();