import {BREEDTYPE, RENDER, PET} from './data.js';
import {DATE, STORE} from './utility.js';
import {RENDERVIEW} from './render.js';

let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

const METHOD = {
    binDataToView: function(fields, id) {
        let pet = {};
        Object.assign(pet, ...STORE.get('PETS').filter((elm) => elm.id === id));

        fields.forEach((elm) => {
            if(elm.field.type === 'checkbox') {
                elm.field.checked = (pet[elm.name])? true : false;
            }
            elm.field.value = pet[elm.name];
        })

        RENDERVIEW.updateBreed(pet.breed);
    },

    caculatorBMI: function() {
        $('#caculatorBMI').addEventListener('click', function(event) {
            RENDERVIEW.view(true, 'main');
        })
    },

    convertInfo: function(fields, destination) {
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

        Object.keys(destination).forEach((key) => {
            mapper.forEach((e) => {
                if(e.name === key) {
                    destination[key] = e.value;
                }
            })
        })

        return destination;
    },

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

    renderBreedByType: function() {
        let type = $('#pet-type');
        type.addEventListener('change', function(event) {
            RENDERVIEW.optionBreed();
        })
    },

    renderPetHealthy: function() {
        let btn = $('#petHealthy');

        let render = (STORE.check('RENDER'))? STORE.get('RENDER') : RENDER;

        if(render.key === 'SA') {
            btn.textContent = 'Show Healthy Pet';
            btn.classList.remove('show-healthy-pet');

        } else {
            btn.textContent = 'Show All Pet';
            btn.classList.add('show-healthy-pet');
        }


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
    pageMainAction: function() {
        METHOD.caculatorBMI();
        METHOD.renderBreedByType();
        METHOD.renderPetHealthy();
        METHOD.toggleTab();
    },

    pageBreedAction: function() {
        METHOD.toggleTab();
    },

    pageEditAction: function() {
        METHOD.renderBreedByType();
        METHOD.toggleTab();
    },

    edit: function(fields) {
        let viewRoot = $('#tbody');
        viewRoot.addEventListener('click', function(event) {
            if(event.target.classList.contains('btn-pet-edit')) {
                METHOD.binDataToView(fields, event.target.dataset.id);
            }
        })
    },

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

    save: (form, fields, storage) => {
        let model;
        let olData = [];

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
            Object.assign(olData, STORE.get(storage));
        }
        olData.push(model);

        if(STORE.save(storage, olData)) {
            form.reset();

            if(storage === 'BREED') { RENDERVIEW.viewBreed(); }
            if(storage === 'PETS') { RENDERVIEW.view(false, 'main'); }

        } else {
            alert('save element failed');
        }
    }
}