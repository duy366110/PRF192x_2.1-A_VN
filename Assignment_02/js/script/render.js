import {STORE} from './utility.js';

let $ = document.querySelector.bind(document);

export const RENDERVIEW = (function() {

    /**
     * 
     * Methdo render icon.
     * @param {*} color want fill icon.
     * @param {*} status render cion true or false
     * @returns template icon.
     */
    let icon = function(color, status) {
        let template = '';

        if(color) {
            template += `
            <svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill='${color}' fill-rule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clip-rule="evenodd" />
            </svg>
            `;

        } else {
            if(status) {
                template += `
                <svg class="icons icons-true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                </svg>
                `;

            } else {
                template += `
                <svg class="icons icons-false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                </svg>
                `;
            }
        }

        return template;
    }


    return {


        /**
         * 
         * Method render option breed.
         * @param {*} value when edit thi's value of PET.breed before edit.
         */
        optionBreed: (value) => {
            let breed = $('#pet-breed');
            let type = $('#pet-type');

            let breeds = (STORE.check('BREED'))? STORE.get('BREED') : [] ;
            let template = '<option value="default">Select breed</option>';

            if(Array.isArray(breeds) && breeds.length) {
                if(type.value !== 'default') {
                    breeds = breeds.filter((elm) => elm.type === type.value);
                }

                breeds.forEach((elm) => {
                    template +=`<option value="${elm.breed}">${elm.breed}</option>`;
                })
            }
            breed.innerHTML = template;

            if(value){
                breed.value = value;
            }
        },



        /**
         * 
         * Method render view two page index.htm and edit.html.
         * @param {*} bmi status caculator BMI pet.
         * @param {*} viewType type view render button delete (view main) or edit (view edit).
         */
        view: (bmi, viewType) => {
            let viewer = $('#tbody');
            let status = (STORE.check('PETS') && STORE.get('PETS').length)? true : false;
            let pets = status? STORE.get('PETS') : [] ;
            let render = (STORE.get('RENDER')?.key === 'SH')? STORE.get('RENDER') : {key: 'SA'};
            let template = ``;

            if(status) {
                if(render.key === 'SH') {
                    pets = pets.filter((pet) => {
                        if(pet.vaccinated && pet.dewormed && pet.sterilized) {
                            return pet;
                        }
                    })
                }

                status = (pets.length)? true : false;
            }

            if(status) {
                pets.forEach(pet => {
                    let templateBtn = ``;
                    if(viewType === 'main') {
                        templateBtn = `<button type="button" class='btn btn-danger btn-action btn-pet-delete' data-id='${pet.id}'>delete</button>`;

                    } else {
                        templateBtn = `<button type="button" class='btn btn-warning btn-action btn-pet-edit' data-id='${pet.id}'>edit</button>`;
                    }

                    template += `
                        <tr>
                            <td>${pet.id}</td>
                            <td>${pet.name}</td>
                            <td>${pet.age}</td>
                            <td>${pet.type}</td>
                            <td>${pet.weight} kg</td>
                            <td>${pet.length} cm</td>
                            <td>${pet.breed}</td>
                            <td>${icon(pet.color, false)}</td>
                            <td>${icon('', pet.vaccinated)}</td>
                            <td>${icon('', pet.dewormed)}</td>
                            <td>${icon('', pet.sterilized)}</td>
                            <td>${(bmi)? (pet.bmi)? pet.bmi : '?' : '?'}</td>
                            <td>${pet.createDate}</td>
                            <td>${templateBtn}</td>
                        </tr>
                    `;
                })
            } else {
                template += `<tr><td class='blanb-view' colspan='14'>Nội dung trống</td></tr>`;
            }

            viewer.innerHTML = template;
        },



        /**
         * Method render view breed for page breed.html.
         */
        viewBreed: () => {
            let viewer = $('#tbody');
            let status = (STORE.check('BREED') && STORE.get('BREED').length)? true : false;
            let breeds = status? STORE.get('BREED') : [];
            let template = ``;

            if(status) {
                breeds.forEach((elm, index) => {
                    template += `
                        <tr>
                            <td>${index}</td>
                            <td>${elm.breed}</td>
                            <td>${elm.type}</td>
                            <td><button class="btn btn-danger btn-action btn-breed-delete" data-breed="${elm.breed}">delete</button></td>
                        </tr>
                    `;
                })

            } else {
                template += `<tr><td class='blanb-view' colspan='14'>Nội dung trống</td></tr>`;
            }

            viewer.innerHTML = template;
        },



        /**
         * 
         * Method render view when user find pet in data.
         * @param {*} status render default bland page.
         * @param {*} condition render view with element.
         */
         viewFind: (status, condition = {}) => {
            let viewer = $('#tbody');
            let state = (STORE.check('PETS') && STORE.get('PETS').length)? true : false;
            let pets = state? STORE.get('PETS') : [] ;
            let template = ``;

            if(!status) {
                template += `<tr><td class='blanb-view' colspan='14'>Nội dung trống</td></tr>`;

            } else {

                // Delete property (default / empty) onject condition.
                Object.keys(condition).forEach((key) => {
                    if((condition[key] === 'default') || (!condition[key])) {
                        delete condition[key];
                    }
                })


                // Filter object by passed condition.
                if(Object.keys(condition).length) {
                    Object.keys(condition).forEach((key) => {
                        pets = pets.filter((elm) => {
                            if((typeof (elm[key]) === 'boolean')) {
                                if(elm[key] === condition[key]) {
                                    return elm;
                                }

                            } else {
                                if((elm[key].includes(condition[key])) ) {
                                    return elm;
                                }
                            }
                        })
                    })
                    
                } else {
                    pets = [];
                }

                if(pets.length) {
                    pets.forEach(pet => {
                        template += `
                            <tr>
                                <td>${pet.id}</td>
                                <td>${pet.name}</td>
                                <td>${pet.age}</td>
                                <td>${pet.type}</td>
                                <td>${pet.weight} kg</td>
                                <td>${pet.length} cm</td>
                                <td>${pet.breed}</td>
                                <td>${icon(pet.color, false)}</td>
                                <td>${icon('', pet.vaccinated)}</td>
                                <td>${icon('', pet.dewormed)}</td>
                                <td>${icon('', pet.sterilized)}</td>
                                <td>?</td>
                                <td>${pet.createDate}</td>
                            </tr>
                        `;
                    })

                } else {
                    template += `<tr><td class='blanb-view' colspan='14'>Nội dung trống</td></tr>`;
                }
            }

            viewer.innerHTML = template;
         }
    }
})()