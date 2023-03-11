import { EXECURED } from "./executed.js";
import { MESSAGES } from "./data.js";
import {STORE} from './utility.js';

let $ = document.querySelector.bind(document);

function VALIDATIONRULE() {
    this.messageField = function(id) {
        return $(`#${id}-message`);
    }

    //SET MESSAGE TO FIELD
    this.messageMapper = function(input, messageField, message, status) {
        console.log(message);

        messageField.textContent = message;
        if(status) {
            input.classList.remove('is-invalid');
            messageField.classList.remove('is-invalid');

        } else {
            input.classList.add('is-invalid');
            messageField.classList.add('is-invalid');
        }
    }


    //RULE NUM
    this.num = function(el, message) {
        message = (message)? message :  MESSAGES.ERRORS.number;

        if(!Number.isNaN(Number(el.field.value))) {
            this.messageMapper(el.field, this.messageField(el.field.id), '', true);
            return true;

        } else {
            this.messageMapper(el.field, this.messageField(el.field.id), message, false);
            return false;
        }
    },


    //RULE RANGE
    this.range = function(el, message) {
        let value = Number(el.field.value);
        let min = Number(el.field.attributes['attr-min'].value);
        let max = Number(el.field.attributes['attr-max'].value);

        message = (message)? message : `${MESSAGES.ERRORS.rangeDefault} ${min} and ${max}`;
    
        if((value >= min) && (value <= max)) {
            this.messageMapper(el.field, this.messageField(el.field.id), '', true);
            return true;
    
        } else {
            this.messageMapper(el.field, this.messageField(el.field.id), message, false);
            return false;
        }
    },


    // RULE REQUIRED
    this.required  = function(el, message) {
        message = (message)? message: MESSAGES.ERRORS.required;
    
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


    //RULUE UNIQUE
    this.unique = function(el, message) {

        let model = [];
        let state = false;
        let type = '';

        switch(el.name) {
            case 'breed':
                state = STORE.check('BREED');
                model = STORE.get('BREED');
                message = (message)? message :  MESSAGES.ERRORS.uniqueBreed;
                type = 'BREED';
                break;

            case 'id':
            default:
                state = STORE.check('PETS');
                model = STORE.get('PETS');
                message = (message)? message :  MESSAGES.ERRORS.uniqueID;
                type = 'PETS';
                break;
        }
    
        if(state) {

            state = (type === 'BREED' || type === 'PETS');
            if(model.length && state) {
                
                if(type === 'BREED' && model.some(elm => elm.breed === el.field.value)) {
                    console.log(message);
                    this.messageMapper(el.field, this.messageField(el.field.id), message, false);
                }

                if(type === 'PETS' && model.some(elm => elm.id === el.field.value)) {
                    this.messageMapper(el.field, this.messageField(el.field.id), message, false);
                }

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
        let status = '';
        if(filed.rules.length > 0) {
            for(let i = 0; i < filed.rules.length; i++) {
                status = mapperValidation(filed, filed.rules[i]);
                console.log(status + ' - ' + filed.rules[i]);
                if(!status) {
                    break;
                }
            }
        }
        return status;
    }

    function handleValidForm(form, fields) {
        fields.forEach(el => {
        if(el.rules.length) {
                el.field.addEventListener('blur', (event) => {
                    handleValidField(el);
                })
            }
        })

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let states = [];

            fields.forEach(el => {
                if(el.rules.length) {
                    states.push(handleValidField(el));
                }
            })
            
            if(!(states.some(state => state === false))) {
                EXECURED.save(form, fields, form.dataset.storage);
            }
        })
    }

    return {
        validation: handleValidForm,
    }
})();