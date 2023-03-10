import {RENDER, PET, PETS} from './data.js';
import {DATE, STORE} from './utility.js';
import {RENDERVIEW} from './render.js';

let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

class METHOD {

    constructor() { }

    // Method caculator BMI
    caculatorBMI() {
        $('#caculatorBMI').addEventListener('click', function(event) {
            RENDERVIEW.view(true);
        })
    }

    // Method toggle render all pet and healthy pet
    renderPetHealthy() {
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
                RENDERVIEW.view(false);
            }
        })
    }

    toggleTab() {
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

    action: function() {
        let method = new METHOD();
        method.caculatorBMI();
        method.renderPetHealthy();
        method.toggleTab();
    },

    remove: function() {
        let viewRoot = $('#tbody');
        viewRoot.addEventListener('click', function(event) {
            if(event.target.classList.contains('btn-pet-delete')) {
                let accuracy = confirm('Are you sure?');
                if(accuracy) {
                    let pets = STORE.get('PETS');
                    pets.splice(pets.findIndex((el) => el.id == event.target.dataset.id));
                    (STORE.save('PETS', pets))? window.location.reload() : alert('Delete element failed');
                }
            }
        })
    },

    save: function(form, fields) {
        let pet = new PET(null, null, null, DATE.currentDate(), null,null, null,null,null,null,null,null);
    
        let mapperPet = fields.map((e) => {
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
            mapperPet.forEach((e) => {
                if(e.name === key) {
                    pet[key] = e.value;
                }
            })
        })
        pet.caculatorBMI();

        if(STORE.check('PETS')) {
            Object.assign(PETS, STORE.get('PETS'));
        }
        PETS.push(pet);

        if(STORE.save('PETS', PETS)) {
            form.reset();
            RENDERVIEW.view(false);

        } else {
            alert('save element failed');
        }
    }
}