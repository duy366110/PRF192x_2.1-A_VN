import {BREEDTYPE, RENDER, PET} from './data.js';
import {DATE, STORE} from './utility.js';
import {RENDERVIEW} from './render.js';

let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

const METHOD = {


    /**
     * 
     * Method fill data from resource to template (input, select, checkbox, radio, ...).
     * @param {*} fields list element input data on template.
     */
    binDataToView: function(fields) {
        let pet = {};
        let viewRoot = $('#tbody');

        viewRoot.addEventListener('click', function(event) {
            if(event.target.classList.contains('btn-pet-edit')) {
                Object.assign(pet, ...STORE.get('PETS').filter((elm) => elm.id === event.target.dataset.id));


                /**
                 * Loop list field through field.name binding data to template (input, select, checkbox, radio, ...).
                 */
                fields.forEach((elm) => {
                    if(elm.field.type === 'checkbox') {
                        elm.field.checked = (pet[elm.name])? true : false;
                    }
                    elm.field.value = pet[elm.name];
                })

                RENDERVIEW.optionBreed(pet.breed);
            }
        })
    },



    /**
     * Method render view index.html page with property BMI.
     */
    caculatorBMI: function() {
        $('#caculatorBMI').addEventListener('click', function(event) {
            RENDERVIEW.view(true, 'main');
        })
    },



    /**
     * 
     * Method mpper data from view to model.
     * @param {*} fields list element input data on template.
     * @param {*} destination root object (PET or BREED) you want binding data from template to BE.
     * @returns destination data.
     */
    convertInfo: function(fields, destination) {

        /**
         * Return object has key = field.name and value = field.value.
         */
        let mapper = fields.map((e) => {
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

        /**
         * Through model key binding value from mapper to model
         */
        Object.keys(destination).forEach((key) => {
            mapper.forEach((e) => {
                if(e.name === key) {
                    destination[key] = e.value;
                }
            })
        })

        return destination;
    },



    /**
     * 
     * Method delete model in list models.
     * @param {*} type delete method execution on model (PET or BREED).
     * @param {*} id model (PET or BREED).
     */
    deleteInfo: function(type, id) {
        let model = [];
        let state = false;

        if(type === 'breed') {
            model = STORE.get('BREED');
            model.splice(model.findIndex((el) => el.breed === id), 1);
            state = STORE.save('BREED', model);
        }

        if(type === 'pet') {
            model = STORE.get('PETS');
            model.splice(model.findIndex((el) => el.id === id), 1);
            state = STORE.save('PETS', model);
        }

        (state)? window.location.reload() :  alert('Delete element failed');
    },



    /**
     * 
     * Methid through condition input render view model.
     * @param {*} fields list element input data on template.
     */
    findByCondition: function(fields) {
        let condition = {};

        fields.forEach((elm) => {
            switch(elm.type) {
                case 'selector':
                    elm.field.addEventListener('change', function(event) {
                        condition[elm.name] = this.value;
                        RENDERVIEW.viewFind(true, condition);
                    })
                    break

                case 'checkbox':
                    elm.field.addEventListener('change', function() {
                        condition[elm.name] = this.checked;
                        RENDERVIEW.viewFind(true, condition);
                    })
                    break

                case 'input':
                default:
                    elm.field.addEventListener('keyup', function(event) {
                        condition[elm.name] = this.value;
                        RENDERVIEW.viewFind(true, condition);
                    })
                    break
            }
        })
        
    },



    /**
     * Method render pet breed through pet type when change value.
     */
    renderBreedByType: function() {
        let type = $('#pet-type');
        type.addEventListener('change', function(event) {
            RENDERVIEW.optionBreed('');
        })
    },



    /**
     * Method render PET model healthy width condition (vaccinated = true, dewormed = true, sterilized = true)
     */
    renderPetHealthy: function() {
        let btn = $('#petHealthy');
        let render = (STORE.check('RENDER'))? STORE.get('RENDER') : RENDER;


        // When first load (load page) render.
        if(render.key === 'SA') {
            btn.textContent = 'Show Healthy Pet';
            btn.classList.remove('show-healthy-pet');

        } else {
            btn.textContent = 'Show All Pet';
            btn.classList.add('show-healthy-pet');
        }


        // When event change rerender view through condition.
        btn.addEventListener('click', function(event) {
            if(this.classList.contains('show-healthy-pet')) {
                // SHOW ALL PET
                this.classList.remove('show-healthy-pet');
                this.textContent = 'Show Healthy Pet';
                RENDER.key = 'SA';

            } else {
                // SHOW HEALTHY PET
                this.classList.add('show-healthy-pet');
                this.textContent = 'Show All Pet';
                RENDER.key = 'SH';

            }

            if(STORE.save('RENDER', RENDER)) {
                RENDERVIEW.view(false, 'main');
            }
        })
    },


    
    /**
     * Method toggle silde bar.
     */
    toggleTab: function() {
        let header = $('#header');
        let main = $('#main');

        let sildeBar = $('#silde-bar');
        let sildeBarMask = $('#silde-bar-mask');
        let sildeTab = $('#silde-bar-tab');

        sildeTab.addEventListener('click', function(e) {
            header.classList.toggle('active');
            main.classList.toggle('active');
            sildeBar.classList.toggle('active');
            sildeBarMask.classList.toggle('active');
        })

        sildeBarMask.addEventListener('click', function(e) {
            header.classList.toggle('active');
            main.classList.toggle('active');
            sildeBar.classList.toggle('active');
            this.classList.toggle('active');
        })
    }

}

export const EXECURED = {

    /**
     * 
     * Method handle event action on template main page.
     */
    pageMainAction: function() {
        METHOD.caculatorBMI();
        METHOD.renderBreedByType();
        METHOD.renderPetHealthy();
        METHOD.toggleTab();
    },



    /**
     * 
     * Method handle event action on template breed page.
     */
    pageBreedAction: function() {
        METHOD.toggleTab();
    },



    /**
     * 
     * Method handle event action on template page edit.
     * @param {*} fields list element input data on template.
     */
    pageEditAction: function(fields) {
        METHOD.binDataToView(fields);
        METHOD.renderBreedByType();
        METHOD.toggleTab();
    },



    /**
     * 
     * Method handle event action on template find page.
     * @param {*} fields list element input data on template.
     */
    pageFindAcion: function(fields) {
        METHOD.renderBreedByType();
        METHOD.findByCondition(fields);
        METHOD.toggleTab();
    },



    /**
     * 
     * Method edit information model pet.
     * @param {*} form form need validation.
     * @param {*} fields multiple fileds (input, select, checkbox, radiobutton, ...).
     */
    edit: function(form, fields) {
        let model;
        let pets = (STORE.check('PETS') && STORE.get('PETS').length)? STORE.get('PETS') : [];
        let pet = new PET(null, null, null, '', null,null, null,null,null,null,null,null);
        model = METHOD.convertInfo(fields, pet);
        
        if(model.id) {
            model.createDate = pets.filter((elm) => elm.id === model.id)[0].createDate;
            model.caculatorBMI();

            pets.forEach((elm) => {
                if(elm.id === model.id) {
                    Object.assign(elm, model);
                }
            })

            if(STORE.save('PETS', pets)) {
                form.reset();
                RENDERVIEW.view(false, 'main');
    
            } else {
                alert('edit element failed');
            }
            
        } else {
            alert('edit element failed');
        }


    },



    /**
     * 
     * Method find element pet in list pets.
     * @param {*} fields multiple fileds (input, select, checkbox, radiobutton, ...).
     */
    find: function(fields) {
        let condition = {};
        fields.forEach((elm) => {
            if(elm.type === 'checkbox') {
                condition[elm.name] = elm.field.checked;
            }
            condition[elm.name ] = elm.field.value;
        })
        RENDERVIEW.viewFind(true, condition);
    },



    /**
     * Method delete element pet or breed in list (PETS or BREEDS).
     */
    remove: function() {
        let viewRoot = $('#tbody');
        viewRoot.addEventListener('click', function(event) {
            if(event.target.classList.contains('btn-breed-delete')) {
                METHOD.deleteInfo('breed', event.target.dataset.breed);
            }

            if(event.target.classList.contains('btn-pet-delete')) {
                METHOD.deleteInfo('pet', event.target.dataset.id);
            }
        })
    },



    /**
     * 
     * Method save model pet or breed to data (PETS or BREEDS).
     * @param {*} form form need validation.
     * @param {*} fields multiple fileds (input, select, checkbox, radiobutton, ...).
     * @param {*} storage key save model to data.
     */
    save: (form, fields, storage) => {
        let model;
        let models = [];

        if(storage === 'BREED') {
            let breedType = new BREEDTYPE(null, null);
            model = METHOD.convertInfo(fields, breedType);

        }

        if(storage === 'PETS') {
            let pet = new PET(null, null, null, DATE.currentDate(), null,null, null,null,null,null,null,null);
            model = METHOD.convertInfo(fields, pet);
            model.caculatorBMI();
        }

        if(STORE.check(storage)) {
            Object.assign(models, STORE.get(storage));
        }
        models.push(model);

        if(STORE.save(storage, models)) {
            form.reset();

            if(storage === 'BREED') { RENDERVIEW.viewBreed(); }
            if(storage === 'PETS') { RENDERVIEW.view(false, 'main'); }

        } else {
            alert('save element failed');
        }
    }
}