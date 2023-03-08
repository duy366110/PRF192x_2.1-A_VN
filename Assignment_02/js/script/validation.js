import { messageErrors } from "./data.js";
import {Store} from './store.js';

let $ = document.querySelector.bind(document);

function VALIDATIONRULE() {
    this.messageField = function(id) {
        return $(`#${id}-message`);
    }

    this.messageMapper = function(input, messageField, message, status) {
        messageField.textContent = message;
        if(status) {
            input.classList.remove('is-invalid');
            messageField.classList.remove('is-invalid');

        } else {
            input.classList.add('is-invalid');
            messageField.classList.add('is-invalid');
        }
    }

    this.num = function(el, message) {
        message = (message)? message :  messageErrors.number;

        if(!Number.isNaN(Number(el.field.value))) {
            this.messageMapper(el.field, this.messageField(el.field.id), '', true);
            return true;

        } else {
            this.messageMapper(el.field, this.messageField(el.field.id), message, false);
            return false;
        }
    },

    this.range = function(el, message) {
        let value = Number(el.field.value);
        let min = Number(el.field.attributes['attr-min'].value);
        let max = Number(el.field.attributes['attr-max'].value);

        message = (message)? message : `${messageErrors.rangeDefault} ${min} and ${max}`;
    
        if((value >= min) && (value <= max)) {
            this.messageMapper(el.field, this.messageField(el.field.id), '', true);
            return true;
    
        } else {
            this.messageMapper(el.field, this.messageField(el.field.id), message, false);
            return false;
        }
    },

    this.required  = function(el, message) {
        message = (message)? message: messageErrors.required;
    
        if(el.field.type === 'checkbox') {
            if(el.field.checked) {
                this.messageMapper(el.field, this.messageField(el.field.id), '', true);
                return true;
    
            } else {
                this.messageMapper(el.field, this.messageField(el.field.id), message, false);
                return false;
            }
    
        } else {
            if(el.field.value.trim()) {
                this.messageMapper(el.field, this.messageField(el.field.id), '', true);
                return true;
        
            } else {
                this.messageMapper(el.field, this.messageField(el.field.id), message, false);
                return false;
            }
        }
    },

    this.unique = function(el, message) {
        message = (message)? message :  messageErrors.uniqueID;
    
        if(Store.get('PETS')) {
            let pets = Store.get('PETS');
    
            if(pets.length && pets.some(pet => pet.id === el.field.value)) {
                this.messageMapper(el.field, this.messageField(el.field.id), message, false);
                return false;
    
            } else {
                this.messageMapper(el.field, this.messageField(el.field.id), '', true);
                return true;
            }
    
        } else {
            this.messageMapper(el.field, this.messageField(el.field.id), '', true);
            return true;
        }
    }
}


export const VALIDATION = (() => {
    let validationRule = new VALIDATIONRULE();

    function mapperValidation(field, rule) {
        let status = true;
        switch(rule.condition) {
            case 'number':
                status = validationRule.num(field, rule.message);
                break

            case 'range':
                status = validationRule.range(field, rule.message);
                break

            case 'unique':
                status = validationRule.unique(field, rule.message);
                break

            case 'required':
            default:
                status = validationRule.required(field, rule.message);
                break;
        }

        return status;
    }

    function handleValidField(filed) {
        let status = true;
        if(filed.rules.length > 0) {
            for(let i = 0; i < filed.rules.length; i++) {
                status = mapperValidation(filed, filed.rules[i]);
                if(!status) {
                    break;
                }
            }
        }
        return status;
    }

    function handleValidForm(form, fields, methodSave) {
        let valid = false;
        fields.forEach(el => {
        if(el.rules.length) {
                el.field.addEventListener('blur', (event) => {
                    handleValidField(el);
                })
            }
        })

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            fields.forEach(el => {
                if(el.rules.length) {
                    valid = handleValidField(el);
                }
            })
            if(valid) {
                methodSave(form, fields);
            }
        })
    }

    return {
        validation: handleValidForm,
    }
})();