import { EXECURED } from "./executed.js";
import { MESSAGES } from "./data.js";
import {STORE} from './utility.js';

let $ = document.querySelector.bind(document);

function VALIDATIONRULE() {

    /**
     * 
     * @param {*} id element message after field input.
     * @returns element<HTML> message.
     */
    this.messageField = function(id) {
        return $(`#${id}-message`);
    }

    

    /**
     * 
     * @param {*} input element input on template.
     * @param {*} messageField element message of field input.
     * @param {*} message content of element messageField.
     * @param {*} status status validation input.
     */
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


    
    /**
     * 
     * Method validation value input equal number.
     * @param {*} el field input on template need validation.
     * @param {*} message content binding to template.
     * @returns status validation passed = true or failed = false.
     */
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


    

    /**
     * 
     * Method validation value between min and max value.
     * @param {*} el field input on template need validation.
     * @param {*} message content binding to template.
     * @returns status validation passed = true or failed = false.
     */
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


    
    /**
     * 
     * Method validation value required input not empty value.
     * @param {*} el field input on template need validation.
     * @param {*} message content binding to template.
     * @returns status validation passed = true or failed = false.
     */
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
            if(el.field.value.trim() && (el.field.value.trim() !== 'default')) {
                this.messageMapper(el.field, this.messageField(el.field.id), '', true);
                return true;
        
            } else {
                this.messageMapper(el.field, this.messageField(el.field.id), message, false);
                return false;
            }
        }
    },


    
    /**
     * 
     * Method validation value input need quine value.
     * @param {*} el field input on template need validation.
     * @param {*} message content binding to template.
     * @returns status validation passed = true or failed = false.
     */
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
            switch(type) {
                case 'BREED':
                    state = model.some(elm => elm.breed === el.field.value);
                    break
                
                case 'PETS':
                    state = model.some(elm => elm.id === el.field.value);
                    break
                
                default:
                    state = false;
                    break
            }

            if(state) {
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

    /**
     * 
     * Method mapper message of filed on template.
     * @param {*} field single field enter value.
     * @param {*} rule validation of field.
     * @returns return status validation field passed = true or failed = false.
     */
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


    /**
     * 
     * Method validation single field.
     * @param {*} filed single field enter value.
     * @returns status validation field passed = true or failed = false.
     */
    function handleValidField(filed) {
        let status = '';
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


    /**
     * 
     * Method main execution validation.
     * @param {*} form form need validation.
     * @param {*} fields multiple fileds (input, select, checkbox, radiobutton, ...).
     * @param {*} methodType type method you want execution (save, edit or find).
     */
    function handleValidForm(form, fields, methodType) {
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
                switch(methodType) {
                    case 'edit':
                        EXECURED.edit(form, fields);
                        break

                    case 'find':
                        EXECURED.find(fields);
                        break

                    case 'report':
                        if(event.submitter.classList.contains('btn-import')) {
                            console.log('Bạn thục hiện import');
                        }

                        if(event.submitter.classList.contains('btn-export')) {
                            EXECURED.export();
                        }
                        break;

                    case 'save':
                    default:
                        EXECURED.save(form, fields, form.dataset.storage);
                        break
                }
            }
        })
    }

    return {
        validation: handleValidForm,
    }
})();